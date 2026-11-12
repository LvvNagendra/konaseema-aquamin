# KONASEEMA AQUAMIN — VM Aqua Solutions website

Front-end only, static website. Works on desktop, tablet and mobile. No build step.

## Features
- Logo (`assets/logo-900.webp`, `logo-200.webp`, `favicon.png`) made from the KONASEEMA AQUAMIN logo
- **English / తెలుగు** language switch (English default; choice is remembered). Share `index.html?lang=te` to open in Telugu.
- 39 products with full composition, benefits, dosage and pack size. Every product has an image:
  The 5 range products (AQUAMIN Minerals, PondBiotic, PondZeolite, AquaGel, Super PS) use real pack photos
  (`assets/pack-*.webp`, cut out of the range banner). All other products get an auto-drawn pack in the same design
  (VM | KONASEEMA header from `assets/brand-lockup-sm.webp`, two-tone product name, type ribbon, benefits, net weight,
  phone and address). Phone/address on the drawn packs are set in `packSVG()` in `app.js`.
- "Our aquaculture product range" section with the 5 packs (clickable) and the range banner (`assets/range-banner.webp`).
- Search, category filters and product detail pop-up
- Farmer tools: **Pond Problem Finder** and **Dosage Calculator** (per acre and water depth)
- Farmer reviews section + "Write a review" form (sent to WhatsApp for approval)
- 2-step enquiry form (enquiry type, name, mobile with validation, village/district, species, acres, DOC, pond problems, product). It opens WhatsApp with all details filled in.

## WhatsApp numbers & group
Numbers shown on the site (in this order): +91 96667 54456, +91 99480 43969, +91 99665 90280.
Phone calls: the top bar and "Call us now" link call +91 96667 54456 (also printed on the drawn pack labels).
WhatsApp: every WhatsApp button (enquiry form, product buttons, calculator, reviews, floating button) opens a chat
to +91 99665 90280 with the message already typed — the visitor only taps Send.
The "Join our farmers group" links (contact section, footer) open https://chat.whatsapp.com/ISWdOqMF14p33Z9w6kcQQ2.
Change them in `WA_NUMBERS` / `WA_GROUP` at the top of `app.js` and in `index.html`.

## Available packings
Edit `PACKINGS` at the end of `products.js` (product, label in English/Telugu, pack size).
Pack sizes on the product pages come from each product's `pack` field.

## Files
| File | What to edit |
|---|---|
| `products.js` | Products (`PRODUCTS`), categories, dosage-calculator rules (`DOSE_CALC`), problem finder (`PROBLEMS`) |
| `reviews.js` | Farmer reviews. **The 3 entries marked `sample: true` are placeholders — replace them with real farmer reviews.** |
| `i18n.js` | All website text in English and Telugu |
| `index.html` / `styles.css` / `app.js` | Layout, design and behaviour |

To give a product a real photo, add `img: 'assets/your-photo.png'` to it in `products.js`.
Telugu text for a product's benefits/dosage can be added with a `te: { tag, benefits, dosage }` block (see PRO PS / AQUAMIN Minerals).

## Run locally
```bash
python -m http.server 8000
```
Open http://localhost:8000

## Updating the live site
After changing CSS/JS files, change the `?v=...` number on the `<link>`/`<script>` tags at the end of `index.html`
so visitors' browsers load the new files immediately (GitHub Pages caches files for ~10 minutes).

## Deploy
Upload the whole `konaseema-aquamin-site` folder to Netlify, Vercel, GitHub Pages or any web host.

## Before publishing
- Replace sample reviews in `reviews.js` with real ones.
- Confirm the office address and working hours (in `index.html` / `i18n.js`).
- Check compositions and dosages against your approved labels.
