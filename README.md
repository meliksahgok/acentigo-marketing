# Acentigo Marketing Site

Kurumsal tanıtım sayfası - Next.js + Vercel

## Setup

```bash
npm install
```

PostgreSQL gerekir (Vercel’de Neon vb.; yerelde `docker compose up -d postgres` sonra `.env` içinde `DATABASE_URL=postgresql://acentigo:acentigo@localhost:5432/acentigo?schema=public`):

```bash
npx prisma migrate deploy
npm run db:seed
```

## Development

```bash
npm run dev
```

Açılır: [http://localhost:3000](http://localhost:3000)

## Build

```bash
npm run build
npm start
```

## Deployment

### Vercel (Önerilen)

1. Vercel hesabı oluştur: https://vercel.com
2. Vercel CLI kur:
   ```bash
   npm install -g vercel
   ```
3. Deploy et:
   ```bash
   vercel login
   vercel
   ```
4. Domain bağla:
   - Vercel Dashboard → Settings → Domains
   - `acentigo.com` ve `www.acentigo.com` ekle
   - DNS kayıtlarını güncelle

## DNS Yapılandırması

Cloudflare DNS ayarları:
- `acentigo.com` → CNAME: `cname.vercel-dns.com`
- `www.acentigo.com` → CNAME: `cname.vercel-dns.com`

## Yönetim paneli (demo başvuruları)

1. `.env.example` dosyasını `.env` olarak kopyalayın; `NEXTAUTH_SECRET` için güçlü rastgele bir değer verin.
2. Veritabanı ve admin kullanıcı:
   ```bash
   npx prisma db push
   npm run db:seed
   ```
   Varsayılan giriş: `ADMIN_EMAIL` / `ADMIN_PASSWORD` (`.env` içinde; üretimde mutlaka değiştirin).
3. Panel: [http://localhost:3000/admin](http://localhost:3000/admin) — giriş [http://localhost:3000/admin/login](http://localhost:3000/admin/login).

İletişim formu başvuruları veritabanına kaydedilir; panelde listelenir ve durum (Yeni / İletişim kuruldu / Kapatıldı) güncellenebilir.

**Veritabanı:** Proje **PostgreSQL** kullanır (`prisma/migrations`). Yerelde Docker için `docker-compose.yml` (Postgres + web). **Vercel:** `VERCEL-DEPLOY.md` + `vercel.json` ile build sırasında `migrate deploy`.

**Docker:** `DEPLOY-DOCKER.md` — PostgreSQL + Compose.

## Dil ve SEO

- **Türkçe (varsayılan, URL öneki yok):** `/`, `/ozellikler`, `/hakkimizda`, `/iletisim`, `/teknolojimiz`
- **İngilizce:** `/en`, `/en/features`, `/en/about`, `/en/contact`, `/en/technology`
- Sayfa başlıkları, açıklamalar, `hreflang` alternates, `sitemap.xml`, `robots.txt`, Organization + SoftwareApplication **JSON-LD** yapılandırıldı.
- Canlıda `NEXT_PUBLIC_SITE_URL` ortam değişkenini gerçek alan adınıza ayarlayın.

## Teknolojiler

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- React 18
- next-intl (TR/EN, yerelleştirilmiş path’ler)
- Prisma (PostgreSQL + migrations), NextAuth (credentials)

