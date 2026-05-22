# Indie Hackers — Post

**URL submit:** https://www.indiehackers.com/post/new  
**Type:** Milestone post (hoặc "Show IH")  
**Đăng:** Càng sớm càng tốt (không cần lịch cố định)

---

## Title

How I built a privacy-first image compressor that hits LCP 2.0s on mobile

---

## Body

I kept running into the same problem: every image compressor I used either uploaded my files to a server (not great for client work) or froze the browser tab mid-compression.

So I built CompressImg — a free image compressor that runs 100% in your browser. Files never leave your device. No sign-up, no watermarks, no limits.

**Link:** https://compressimg.pro

---

### The technical problem I had to solve

The hardest part wasn't compression — it was performance.

Initial PageSpeed score on mobile: **LCP 7.1s**. That's terrible for an SEO-focused tool.

The culprit was loading AdSense and GA4 with `afterInteractive` instead of `lazyOnload`. One config change dropped LCP from 7.1s → **2.0s** on mobile. Massive difference from a tiny change.

Other things that helped:
- Moved compression into a **Web Worker** → main thread never blocks, UI stays responsive during heavy compression
- Used `next/image` with `unoptimized` for preview thumbnails (static export, so Next.js optimization isn't available)
- Lazy-loaded AdSense only after the user completes a compression — better UX, avoids CLS, and keeps the tool feel clean

---

### Stack

- **Next.js 14** — static export (`output: 'export'`), no server needed
- **browser-image-compression** — wraps Canvas API, runs in Web Worker
- **Vercel** — CDN deploy, ~80ms TTFB globally
- **heic2any** — converts iPhone HEIC photos client-side before compression
- **gifuct-js + gif.js** — GIF frame extraction + re-encoding in-browser

---

### Where I am now (3 weeks in)

- **65+ tool pages** live (compress, resize, convert, crop + format-specific and platform-specific variants)
- **GSC**: 200+ impressions, avg position ~65 — still climbing
- **AdSense**: applied, under review
- **Traffic**: mostly from GSC impressions, 0 clicks yet (too new to rank on page 1)

The SEO strategy is long-tail first — targeting keywords like "compress image to 100kb", "reduce image size", "photo compressor" before going after the big ones.

---

### What's surprised me

Content depth matters more than I expected. Pages with 1000+ words, proper FAQ schema, and a comparison table consistently get crawled faster and rank higher than thin pages — even at the same URL age.

Also: separating `layout.tsx` (static metadata + JSON-LD) from `page.tsx` (client component) in Next.js is the right pattern for static export + SEO. Took me a while to settle on this.

---

### What's next

- Product Hunt launch (13/5)
- AdSense approval → monetization
- Building backlinks via communities (this post!)
- Watch Search Console for first keywords to crack page 1

Happy to answer questions about the privacy architecture, the Web Worker setup, or the Next.js static export + SEO approach. Also open to honest feedback on the tool itself.

---

## Tags (chọn khi submit)
- web-development
- seo  
- saas
- privacy
- tools

---

## Lưu ý khi đăng
- Đăng vào **buổi sáng thứ 2–4** giờ Mỹ (9–11 AM EST) để được nhiều view nhất
- Reply tất cả comment trong 24h đầu — IH community rất active
- Nếu ai hỏi revenue → trả lời thật: "Currently $0, pre-AdSense approval"
- Nếu ai hỏi traffic → "200+ GSC impressions, building organic"
