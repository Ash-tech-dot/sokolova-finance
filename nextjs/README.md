# Соколова Любовь — Next.js сайт

## Быстрый старт

```bash
npm install
npm run dev
```

Открыть: http://localhost:3000

## Структура

```
app/
  layout.tsx       — мета-данные, шрифты (Playfair Display + Inter)
  page.tsx         — главная страница
  globals.css      — CSS-переменные и базовые стили

components/
  Navbar.tsx/.css  — фиксированный хедер с бургер-меню
  Hero.tsx/.css    — Hero-секция с анимациями
  Stats.tsx/.css   — счётчики статистики (анимированные)
  About.tsx/.css   — раздел «Обо мне»
  Services.tsx/.css — услуги (6 карточек)
  Approach.tsx/.css — подход + цитата
  Process.tsx/.css  — 4 шага процесса
  Reviews.tsx/.css  — отзывы клиентов
  ContactForm.tsx/.css — форма записи (React state)
  Footer.tsx/.css  — подвал
  useReveal.ts     — хук для scroll-reveal анимаций
```

## Добавить фото

В `Hero.tsx` и `About.tsx` есть заглушки с инициалами.
Замените `<div className={styles.photoPlaceholder}>` на:

```tsx
import Image from 'next/image'
// ...
<Image src="/photo.jpg" alt="Соколова Любовь" fill style={{objectFit:'cover', objectPosition:'top'}} />
```

Поместите файл `photo.jpg` в папку `public/`.

## Деплой на Vercel

```bash
npx vercel
```

или подключите GitHub репозиторий на vercel.com — деплой автоматический.
