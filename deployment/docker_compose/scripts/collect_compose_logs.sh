#!/usr/bin/env bash

set -euo pipefail

DEPLOY_DIR="${DEPLOY_DIR:-$HOME/onyx-deploy}"
ENV_FILE="${ENV_FILE:-$HOME/onyx.env}"
COMPOSE_DIR="${COMPOSE_DIR:-$DEPLOY_DIR/deployment/docker_compose}"
LOG_DIR="${LOG_DIR:-$PWD/autodeploy-logs}"

mkdir -p "$LOG_DIR"

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

if [[ ! -d "$COMPOSE_DIR" ]]; then
  echo "Compose directory not found: $COMPOSE_DIR" >&2
  exit 1
fi

pushd "$COMPOSE_DIR" >/dev/null

compose ps >"$LOG_DIR/compose-ps.txt" 2>&1 || true
compose logs --no-color >"$LOG_DIR/compose-logs.txt" 2>&1 || true

for container in onyx-api_server-1 onyx-web_server-1 onyx-nginx-1 onyx-background-1; do
  docker logs --tail 500 "$container" >"$LOG_DIR/${container}.log" 2>&1 || true
done

popd >/dev/null

echo "Logs collected in: $LOG_DIR"
