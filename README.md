# Vallore SuperBalance — Shopify Theme

A high-converting landing/product page for **Vallore SuperBalance**, a daily hormonal + cortisol-support drink mix. This is the exact winning store built in Claude, packaged as a standard Shopify theme.

## Folder structure

```
assets/      CSS, JS, and all images (theme.css, winning.css, theme.js, winning.js + photos)
config/      settings_data.json, settings_schema.json
layout/      theme.liquid  (the HTML shell: fonts, asset links, asset map)
locales/     en.default.json
sections/    vallore-page.liquid  (the full store page)
snippets/    price.liquid
templates/   index / product / page render the store; plus required stubs
```

## How it's wired

- `layout/theme.liquid` loads the fonts (Fraunces + Inter), `theme.css`, and `winning.css`, and injects a `window.VALLORE_ASSETS` map so JavaScript-built images resolve to Shopify's CDN.
- `sections/vallore-page.liquid` holds the full page markup. Every image points at `{{ 'file' | asset_url }}`.
- `assets/theme.js` runs the base store (gallery, flavor swap, cart drawer, pricing). `assets/winning.js` layers the conversion build on top (header, Grüns-style sections, reviews carousel, founder story, cart drawer, etc.).

## Install on Shopify

1. Shopify admin → **Online Store → Themes**
2. **Add theme → Upload zip file** (zip the contents of this folder, or upload the provided zip)
3. It installs as an **unpublished** theme — click **Preview** to view, **Publish** when ready

## Push to GitHub

From this folder:

```bash
git init
git add .
git commit -m "Vallore SuperBalance theme"
git branch -M main
git remote add origin https://github.com/<you>/<repo>.git
git push -u origin main
```

## Before you run paid traffic

- **Checkout is preview-only.** Add-to-cart opens a preview drawer; the checkout button shows a notice and does not place a real order yet. Wire the buy button to Shopify's real cart/checkout before taking orders.
- **Product data is baked in** (`window.VALLORE_PRODUCT` in `layout/theme.liquid`) rather than pulled from Shopify's live product object. Connect it to the live product so price/inventory edits flow through.
- **Replace placeholder proof with real data.** The stats (e.g. 80% / 92%), the on-page reviews, and the founder details ("Maya", age 34, the advisor line) are illustrative — swap in your real numbers, real customer reviews, and the true founder story before launch.
- **Free shipping** unlocks at a $50 subtotal; the celebratory cart state appears once a cart crosses that threshold.
