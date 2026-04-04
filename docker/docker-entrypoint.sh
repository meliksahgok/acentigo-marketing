#!/bin/sh
set -e
export DATABASE_URL="${DATABASE_URL:-file:/data/prod.db}"
mkdir -p /data
cd /app
prisma db push --skip-generate
exec node server.js
