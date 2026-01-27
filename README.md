# Acentigo Marketing Site

Kurumsal tanıtım sayfası - Next.js + Vercel

## Setup

```bash
npm install
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

## Teknolojiler

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- React 18

