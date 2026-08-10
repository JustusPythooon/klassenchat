#!/bin/sh
cd "$(dirname "$0")"
if ! command -v node >/dev/null 2>&1; then
  echo "Node.js 18+ wird benötigt."
  exit 1
fi
[ -d node_modules ] || npm install
echo "KlassenCloud: http://127.0.0.1:3000"
npm start
