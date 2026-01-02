# Deployment Rehberi

## Hızlı Başlangıç

Bu proje Vercel'de deploy edilecek. İki yöntem var:

### Yöntem 1: Vercel Dashboard (Önerilen - En Kolay) ⭐

1. **Vercel hesabı oluşturun:**
   - https://vercel.com → Sign Up
   - GitHub, GitLab veya Email ile kayıt olun

2. **GitHub repository oluşturun:**
   - GitHub'da yeni repo: `acentigo-marketing`
   - Bu projeyi GitHub'a push edin

3. **Vercel'de import edin:**
   - Vercel Dashboard → Add New → Project
   - GitHub repo'nuzu seçin
   - Deploy butonuna tıklayın

4. **Domain bağlayın:**
   - Settings → Domains
   - `acentigo.com` ve `www.acentigo.com` ekleyin

5. **DNS yapılandırması:**
   - Cloudflare → DNS → Records
   - `acentigo.com` A record: `76.76.21.21` (Vercel dashboard'dan alın)
   - `www.acentigo.com` CNAME: `cname.vercel-dns.com`

Detaylı rehber: `/home/acentigo/docs/vercel-setup-guide.md`

### Yöntem 2: Vercel CLI

```bash
# Local bilgisayarınızda
cd acentigo-marketing
npm install
npm install -g vercel
vercel login
vercel --prod
```

## Gereksinimler

- Node.js 18+ (local'de)
- Vercel hesabı
- Cloudflare DNS erişimi

## Detaylı Rehber

Tüm detaylar için: `/home/acentigo/docs/vercel-setup-guide.md`

