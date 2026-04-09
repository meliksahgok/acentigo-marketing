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
5. **Build Command:** Repoda `vercel.json` tanımlıdır — `npm run vercel-build` (`prisma migrate deploy` + build). Dashboard’da elle değiştirmeyin.
6. **Output Directory:** `.next` (otomatik)
7. **Install Command:** `npm install` (otomatik)

### Adım 3: Environment Variables (zorunlu)

Panel ve iletişim formu için Vercel’de **Settings → Environment Variables** altında tanımlayın (Production / Preview için):

| Değişken | Açıklama |
|----------|-----------|
| `DATABASE_URL` | **PostgreSQL** bağlantı adresi (Neon, Supabase vb.). Sunucusuz ortamda SQLite kullanılamaz. |
| `NEXTAUTH_SECRET` | Güçlü rastgele metin (`openssl rand -base64 32`). |
| `NEXTAUTH_URL` | Canlı site kök URL’si, örn. `https://acentigo-marketing.vercel.app` veya özel domain. |
| `ADMIN_EMAIL` | Seed ile oluşturulacak admin e-postası (isteğe bağlı). |
| `ADMIN_PASSWORD` | Seed şifresi (isteğe bağlı). |
| `NEXT_PUBLIC_SITE_URL` | Örn. `https://acentigo.com` (sitemap / OG). |

İlk deploy’da **build**, `prisma migrate deploy` ile şemayı Postgres’e uygular (`vercel.json`). Sonrasında **admin kullanıcı** için bir kez yerelden (veya CI’den) üretim `DATABASE_URL` ile:

```bash
npm run db:seed
```

Neon / Supabase bağlantı dizelerinde genelde `?sslmode=require` kullanın; Vercel’in build aşamasından veritabanına erişim için IP allowlist gerektirmeyen sağlayıcı tercih edin.

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

### Push sonrası sitede değişiklik görünmüyor
- **Vercel → Project → Deployments:** Son commit için deploy **Ready** mi, yoksa **Error** mı? Hata varsa önceki sürüm yayında kalır.
- **Ana sayfa görünümü** büyük ölçüde aynıdır; yeni özellikler: **`/admin`** (giriş), **`/admin/login`**, İletişim sayfasında formun sunucuya gönderilmesi.
- Özel domain + **Cloudflare** tam önbellek kullanıyorsanız ilgili URL için önbelleği temizleyin veya tarayıcıda gizli pencerede deneyin.
- Yerelde `npm run dev` çalışıyorsa dosya kaydından sonra sayfayı yenileyin; gerekirse sunucuyu durdurup tekrar başlatın.

---

## 📞 Destek

Sorun yaşarsanız:
- Vercel Docs: https://vercel.com/docs
- Vercel Support: https://vercel.com/support
