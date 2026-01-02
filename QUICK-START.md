# Hızlı Başlangıç Rehberi

## Adım 1: GitHub Repository Oluşturun

1. https://github.com adresine gidin
2. "New repository" butonuna tıklayın
3. Repository name: `acentigo-marketing`
4. Public veya Private seçin (farketmez)
5. "Create repository" butonuna tıklayın
6. **Repository URL'ini kopyalayın** (örn: `https://github.com/your-username/acentigo-marketing.git`)

## Adım 2: Projeyi GitHub'a Push Edin

Sunucuda şu komutu çalıştırın:

```bash
cd /home/acentigo/acentigo-marketing

# GitHub URL'inizi buraya yazın
GITHUB_URL="https://github.com/YOUR-USERNAME/acentigo-marketing.git"

git add .
git commit -m "Initial commit - AcentiGo Marketing Site"
git branch -M main
git remote add origin $GITHUB_URL
git push -u origin main
```

Veya script'i kullanın:

```bash
cd /home/acentigo/acentigo-marketing
./PUSH-TO-GITHUB.sh
```

## Adım 3: Vercel'de Import Edin

1. https://vercel.com → Dashboard
2. "Add New..." → "Project"
3. GitHub repository'nizi seçin (`acentigo-marketing`)
4. "Import" butonuna tıklayın
5. Framework Preset: **Next.js** (otomatik algılanır)
6. "Deploy" butonuna tıklayın

## Adım 4: Domain Bağlayın

Deployment tamamlandıktan sonra:

1. Vercel Dashboard → Projenizi açın
2. **Settings** → **Domains**
3. "Add Domain" → `acentigo.com` → "Add"
4. "Add Domain" → `www.acentigo.com` → "Add"

## Adım 5: DNS Yapılandırması (Cloudflare)

1. Cloudflare Dashboard → DNS → Records
2. `acentigo.com` A record'unu bulun
3. IP'yi değiştirin: Vercel dashboard'da gösterilen IP (genellikle `76.76.21.21`)
   - Type: **A**
   - Name: **@**
   - IPv4 address: **Vercel'in gösterdiği IP**
   - Proxy: ✅ (Orange cloud - AÇIK)
4. `www.acentigo.com` için:
   - Type: **CNAME**
   - Name: **www**
   - Target: **cname.vercel-dns.com** (Vercel dashboard'da gösterilir)
   - Proxy: ✅

## Adım 6: Bekleyin

- DNS propagation: 1-48 saat (genellikle 1-2 saat)
- SSL sertifikası: Vercel otomatik oluşturur

## Test

```bash
curl -I https://acentigo.com
```

HTTP 200 dönmeli!

## Detaylı Rehber

Tüm detaylar: `/home/acentigo/docs/vercel-setup-guide.md`

