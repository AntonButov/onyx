#!/usr/bin/env bash

set -euo pipefail

DEPLOY_DIR="${DEPLOY_DIR:-$HOME/onyx-deploy}"
ENV_FILE="${ENV_FILE:-$HOME/onyx.env}"
COMPOSE_DIR="${COMPOSE_DIR:-$DEPLOY_DIR/deployment/docker_compose}"
API_CONTAINER="${API_CONTAINER:-onyx-api_server-1}"
API_HEALTH_TIMEOUT_SECONDS="${API_HEALTH_TIMEOUT_SECONDS:-600}"
UI_URL="${UI_URL:-http://localhost:3000}"
UI_TIMEOUT_SECONDS="${UI_TIMEOUT_SECONDS:-180}"

if [[ ! -d "$COMPOSE_DIR" ]]; then
  echo "Compose directory not found: $COMPOSE_DIR" >&2
  exit 1
fi

if [[ ! -f "$ENV_FILE" ]]; then
  echo "Env file not found: $ENV_FILE" >&2
  exit 1
fi

if command -v docker-compose >/dev/null 2>&1; then
  COMPOSE_BIN="docker-compose"
elif docker compose version >/dev/null 2>&1; then
  COMPOSE_BIN="docker compose"
else
  echo "Neither docker-compose nor docker compose is available." >&2
  exit 1
fi

compose() {
  if [[ "$COMPOSE_BIN" == "docker-compose" ]]; then
    docker-compose --env-file "$ENV_FILE" "$@"
  else
    docker compose --env-file "$ENV_FILE" "$@"
  fi
}

echo "Using compose directory: $COMPOSE_DIR"
echo "Using env file: $ENV_FILE"
echo "Using compose command: $COMPOSE_BIN"

pushd "$COMPOSE_DIR" >/dev/null

compose up -d --build

echo "Waiting for API container health ($API_CONTAINER)..."
api_deadline=$((SECONDS + API_HEALTH_TIMEOUT_SECONDS))
while (( SECONDS < api_deadline )); do
  api_health="$(docker inspect --format '{{if .State.Health}}{{.State.Health.Status}}{{else}}none{{end}}' "$API_CONTAINER" 2>/dev/null || true)"
  if [[ "$api_health" == "healthy" ]]; then
    echo "API container is healthy."
    break
  fi
  sleep 5
done

api_health="$(docker inspect --format '{{if .State.Health}}{{.State.Health.Status}}{{else}}none{{end}}' "$API_CONTAINER" 2>/dev/null || true)"
if [[ "$api_health" != "healthy" ]]; then
  echo "API container did not become healthy in time. Current status: $api_health" >&2
  popd >/dev/null
  exit 1
fi

echo "Waiting for UI endpoint: $UI_URL"
ui_deadline=$((SECONDS + UI_TIMEOUT_SECONDS))
while (( SECONDS < ui_deadline )); do
  if curl -fsSIL --max-time 10 "$UI_URL" >/dev/null 2>&1; then
    echo "UI endpoint is reachable."
    break
  fi
  sleep 5
done

if ! curl -fsSIL --max-time 10 "$UI_URL" >/dev/null 2>&1; then
  echo "UI endpoint did not become reachable in time: $UI_URL" >&2
  popd >/dev/null
  exit 1
fi

compose ps
popd >/dev/null

echo "Autodeploy completed successfully."
