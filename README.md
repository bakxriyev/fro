# Uzbek Landing Page - Dostonjon Soyibov Biznes Intensiv

Bu loyiha Dostonjon Soyibov tomonidan o'tkaziladigan 3 kunlik bepul biznes intensiv uchun landing page hisoblanadi.

## Xususiyatlar

- 🎯 Responsive dizayn (mobil va desktop)
- ⚡ Next.js 14 va React 19 bilan tez ishlash
- 🎨 Tailwind CSS 4 bilan zamonaviy dizayn
- 📱 Telegram integratsiyasi
- 🔄 Backend API bilan avtomatik ma'lumot yuborish
- ✨ Animatsiyalar va gradient effektlar

## Texnologiyalar

- **Framework:** Next.js 14
- **Frontend:** React 19, TypeScript
- **Styling:** Tailwind CSS 4
- **Fonts:** Geist Sans & Mono
- **Analytics:** Vercel Analytics
- **Backend:** https://orqa.imanakhmedovna.uz

## O'rnatish

1. Loyihani yuklab oling
2. Dependencies o'rnating:
   \`\`\`bash
   npm install
   \`\`\`
3. Development serverni ishga tushiring:
   \`\`\`bash
   npm run dev
   \`\`\`
4. Brauzerda `http://localhost:3000` ga o'ting

## Build qilish

Production uchun build qilish:
\`\`\`bash
npm run build
npm start
\`\`\`

## Fayl tuzilishi

\`\`\`
├── app/
│   ├── page.tsx          # Asosiy sahifa
│   ├── layout.tsx        # Layout komponenti
│   ├── globals.css       # Global stillar
│   └── thank-you/
│       └── page.tsx      # Rahmat sahifasi
├── components/
│   ├── landing-page.tsx      # Asosiy landing page
│   ├── registration-modal.tsx # Ro'yxatdan o'tish modali
│   └── thank-you-page.tsx    # Rahmat sahifasi komponenti
├── public/
│   ├── iman.png          # Asosiy rasm
│   └── scren.jpg         # Telegram kanal rasmi
└── package.json
\`\`\`

## Deployment

Vercel platformasida deploy qilish uchun:
1. GitHub repository yarating
2. Vercel hisobingizga ulang
3. Repository import qiling
4. Avtomatik deploy bo'ladi

## Litsenziya

Bu loyiha shaxsiy foydalanish uchun mo'ljallangan.
