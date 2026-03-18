#!/usr/bin/env bash
# Запуск фронта (Next.js dev) на порту 3000: освобождает порт и поднимает свежую версию.
# Запускать из корня репозитория: ./scripts/dev-web-3000.sh

set -e
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
WEB_DIR="$REPO_ROOT/web"

echo "Freeing port 3000..."
fuser -k 3000/tcp 2>/dev/null || true
sleep 4

if lsof -i :3000 >/dev/null 2>&1; then
  echo "Port 3000 still in use. Try: lsof -i :3000"
  exit 1
fi

echo "Removing Next.js dev lock..."
rm -f "$WEB_DIR/.next/dev/lock" 2>/dev/null || true

echo "Starting dev server on http://localhost:3000 ..."
cd "$WEB_DIR"
exec npm run dev
