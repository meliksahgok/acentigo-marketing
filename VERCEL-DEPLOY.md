# Vercel'e Deploy Rehberi

## 🚀 Yöntem 1: Vercel Dashboard (Önerilen - En Kolay)

### Adım 1: Vercel Hesabı Oluşturun
1. https://vercel.com adresine gidin
2. "Sign Up" butonuna tıklayın
3. GitHub hesabınızla giriş yapın (önerilen)

### Adım 2: Projeyi Import Edin
1. Vercel Dashboard → **"Add New"** → **"Project"**
2. GitHub repository'lerinizden **"acentigo-marketing"** seçin
3. **Framework Preset:** Next.js (otomatik algılanır)
4. **Root Directory:** `./` (boş bırakın)
5. **Build Command:** `npm run build` (otomatik)
6. **Output Directory:** `.next` (otomatik)
7. **Install Command:** `npm install` (otomatik)

### Adım 3: Environment Variables (Gerekirse)
Şu an için environment variable gerekmiyor, ancak ileride gerekirse:
- Settings → Environment Variables
- Key-Value çiftleri ekleyin

### Adım 4: Deploy
1. **"Deploy"** butonuna tıklayın
2. İlk build 2-3 dakika sürebilir
3. Deploy tamamlandığında otomatik URL alırsınız: `acentigo-marketing.vercel.app`

### Adım 5: Custom Domain Ekleme (İsteğe Bağlı)
1. Settings → **Domains**
2. **"Add Domain"** butonuna tıklayın
3. Domain adınızı girin (örn: `marketing.acentigo.com`)
4. DNS kayıtlarını ekleyin:
   - **A Record:** `76.76.21.21` (Vercel dashboard'dan alın)
   - **CNAME:** `cname.vercel-dns.com` (www için)

### Adım 6: Otomatik Deploy
- Her `git push` işleminde otomatik deploy yapılır
- Production branch: `main`
- Preview deployments: Her pull request için otomatik

---

## 🔧 Yöntem 2: Vercel CLI (Gelişmiş)

### Kurulum
```bash
# Node.js ve npm kurulu olmalı
npm install -g vercel
```

### Deploy
```bash
cd acentigo-marketing
vercel login
vercel --prod
```

### İlk Deploy Sonrası
- Vercel otomatik olarak `.vercel` klasörü oluşturur
- Bu klasörü `.gitignore`'a eklemeyin (team çalışması için gerekli)

---

## 📋 Kontrol Listesi

- [ ] GitHub repository'de kod var
- [ ] Vercel hesabı oluşturuldu
- [ ] Proje import edildi
- [ ] İlk deploy başarılı
- [ ] Custom domain eklendi (isteğe bağlı)
- [ ] DNS kayıtları yapıldı (isteğe bağlı)

---

## 🐛 Sorun Giderme

### Build Hatası
- `npm install` komutunu manuel çalıştırın
- `package.json` dosyasını kontrol edin
- Node.js versiyonu 18+ olmalı

### Domain Bağlanmıyor
- DNS kayıtlarının propagate olması 24-48 saat sürebilir
- Vercel dashboard'dan domain durumunu kontrol edin

### Deploy Başarısız
- Build loglarını kontrol edin
- Environment variables eksik olabilir
- Dependencies eksik olabilir

---

## 📞 Destek

Sorun yaşarsanız:
- Vercel Docs: https://vercel.com/docs
- Vercel Support: https://vercel.com/support
