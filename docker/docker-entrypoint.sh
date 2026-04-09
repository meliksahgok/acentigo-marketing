#!/bin/sh
set -e
cd /app
if [ -z "$DATABASE_URL" ]; then
  echo "DATABASE_URL is required"
  exit 1
fi
prisma migrate deploy --skip-generate
exec node server.js
