# Docker ile PostgreSQL (kendi sunucunuz)

Vercel için bkz. `VERCEL-DEPLOY.md`.

## Başlatma

```bash
docker compose up -d --build
```

- Uygulama: http://localhost:3000  
- Postgres: `localhost:5432` (kullanıcı/şifre/DB: `acentigo` / `acentigo` / `acentigo`)

`docker-compose.yml` içinde `NEXTAUTH_SECRET` ve gerekirse `NEXTAUTH_URL` değiştirin.

## İlk admin

```bash
docker compose exec web sh -c "cd /app && tsx prisma/seed.ts"
```

## Yedek

```bash
docker compose exec postgres pg_dump -U acentigo acentigo > backup.sql
```
