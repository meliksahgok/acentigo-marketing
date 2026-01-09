# Vercel Projesini Güncelleme Rehberi

## 🚀 Yöntem 1: Otomatik Güncelleme (Önerilen)

Vercel, GitHub ile entegre olduğu için **her `git push` işleminde otomatik olarak deploy yapar**.

### Adımlar:

1. **Değişiklikleri yapın**
   ```bash
   cd /home/acentigo/acentigo-marketing
   # Dosyaları düzenleyin
   ```

2. **GitHub'a push edin**
   ```bash
   git add .
   git commit -m "Update: Değişiklik açıklaması"
   git push origin main
   ```

3. **Vercel otomatik deploy yapar**
   - Vercel Dashboard'da projenizi açın
   - "Deployments" sekmesinde yeni deployment göreceksiniz
   - Build işlemi 2-3 dakika sürer
   - Tamamlandığında otomatik olarak canlıya alınır

### Kontrol:
- Vercel Dashboard → Projeniz → "Deployments"
- En üstteki deployment'ın durumunu kontrol edin
- ✅ "Ready" durumunda ise güncelleme tamamlanmıştır

---

## 🔧 Yöntem 2: Manuel Redeploy

Eğer otomatik deploy çalışmıyorsa veya manuel olarak yeniden deploy etmek isterseniz:

### Vercel Dashboard'dan:

1. **Vercel Dashboard** → Projenizi açın
2. **"Deployments"** sekmesine gidin
3. En üstteki deployment'ın yanındaki **"..."** (üç nokta) menüsüne tıklayın
4. **"Redeploy"** seçeneğini tıklayın
5. Onaylayın

### Vercel CLI ile:

```bash
cd /home/acentigo/acentigo-marketing

# Eğer Vercel CLI kurulu değilse:
npm install -g vercel

# Login olun (ilk seferinde)
vercel login

# Production'a deploy edin
vercel --prod
```

---

## 📋 Güncelleme Kontrol Listesi

### Değişiklik Yaptıktan Sonra:

- [ ] Değişiklikleri test ettiniz mi?
- [ ] Git commit yaptınız mı?
- [ ] GitHub'a push ettiniz mi?
- [ ] Vercel Dashboard'da yeni deployment görünüyor mu?
- [ ] Build başarılı mı? (✅ Ready durumunda mı?)
- [ ] Canlı sitede değişiklikler görünüyor mu?

---

## 🔍 Deployment Durumunu Kontrol Etme

### Vercel Dashboard'dan:

1. **Vercel Dashboard** → Projeniz (`acentigo-marketing`)
2. **"Deployments"** sekmesi
3. Her deployment'ın durumunu görebilirsiniz:
   - 🟢 **Ready**: Başarılı, canlıda
   - 🟡 **Building**: Build işlemi devam ediyor
   - 🔴 **Error**: Hata var, logları kontrol edin
   - ⚪ **Queued**: Sırada bekliyor

### Build Loglarını İnceleme:

1. Deployment'a tıklayın
2. **"Build Logs"** sekmesine gidin
3. Hata varsa burada görebilirsiniz

---

## 🐛 Sorun Giderme

### Otomatik Deploy Çalışmıyor

**Kontrol edin:**
1. Vercel Dashboard → Settings → Git
   - GitHub bağlantısı aktif mi?
   - Production branch: `main` olarak ayarlı mı?

2. GitHub repository ayarları
   - Webhook'lar aktif mi?
   - Vercel'in repository'ye erişimi var mı?

**Çözüm:**
- Vercel Dashboard → Settings → Git → "Disconnect" → Tekrar bağlayın

### Build Başarısız

**Kontrol edin:**
1. Build loglarını inceleyin
2. `package.json` dosyasını kontrol edin
3. Dependencies eksik olabilir

**Çözüm:**
```bash
# Local'de test edin
cd acentigo-marketing
npm install
npm run build
```

### Değişiklikler Canlıda Görünmüyor

**Kontrol edin:**
1. Browser cache'ini temizleyin (Ctrl+Shift+R)
2. Deployment'ın "Ready" durumunda olduğundan emin olun
3. Doğru domain'e baktığınızdan emin olun

**Çözüm:**
- Hard refresh: Ctrl+Shift+R (Windows) veya Cmd+Shift+R (Mac)
- Incognito/Private mode'da test edin

---

## ⚡ Hızlı Güncelleme Komutları

```bash
# 1. Değişiklikleri yap
cd /home/acentigo/acentigo-marketing
# ... dosyaları düzenle ...

# 2. Commit ve push
git add .
git commit -m "Update: Açıklama"
git push origin main

# 3. Vercel otomatik deploy yapar (2-3 dakika)
# Vercel Dashboard'dan kontrol edin
```

---

## 📞 Yardım

- Vercel Docs: https://vercel.com/docs
- Vercel Support: https://vercel.com/support
- Build Logları: Vercel Dashboard → Deployments → Build Logs
