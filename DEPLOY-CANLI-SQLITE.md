# SQLite ile canlı (production) kullanım

**Vercel / sunucusuz (serverless) ortamda SQLite dosyası kalıcı olmadığı için bu yöntemi kullanmayın.** Canlıda SQLite istiyorsanız uygulama **tek süreç + kalıcı disk** üzerinde çalışmalıdır.

## Seçenekler

| Ortam | Uygun mu |
|-------|----------|
| Docker + named volume veya bind mount | Evet |
| VPS (Ubuntu vb.) + tek `node` süreci + diskte `.db` | Evet |
| Vercel, Netlify Functions | Hayır → PostgreSQL kullanın |

## 1) Docker Compose (en kolay)

1. `docker-compose.yml` içinde `NEXTAUTH_URL` değerini gerçek adresinizle değiştirin (örn. `https://acentigo.com`).
2. `NEXTAUTH_SECRET` için güçlü rastgele değer kullanın.
3. Proje kökünde:

```bash
docker compose build
docker compose up -d
```

4. **İlk kez admin kullanıcısı** (container çalışırken, compose’daki `ADMIN_*` env kullanılır):

```bash
docker compose exec web sh -c "cd /app && tsx prisma/seed.ts"
```

5. Giriş: `.env` / compose’daki `ADMIN_EMAIL` ve `ADMIN_PASSWORD`.

**Yedek:** Volume’daki SQLite dosyası `docker volume inspect acentigo-marketing_acentigo_sqlite` ile bulunur; düzenli kopyalayın.

## 2) VPS’te doğrudan Node

1. Sunucuda repo + `npm ci`, `npx prisma generate`, `npm run build`.
2. `DATABASE_URL="file:/var/lib/acentigo/prod.db"` gibi **kalıcı bir dizin** seçin; klasörü oluşturun.
3. `npx prisma db push` ve `npm run db:seed` (sunucuda `.env` ile).
4. `NEXTAUTH_URL` mutlaka dışarıdan erişilen tam URL olsun.
5. Süreç yöneticisi ile: `npm run start` (veya `node .next/standalone/server.js` yapılandırmanıza göre).

## Önemli notlar

- **Eşzamanlı yazma:** SQLite tek yazar; çok yüksek trafikte PostgreSQL daha uygundur.
- **Yedekleme:** `prod.db` dosyasını periyodik kopyalayın.
- **www / apex:** `NEXTAUTH_URL` ile tarayıcıda yazdığınız adres aynı olsun.
