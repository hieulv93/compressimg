# Hacker News — Show HN

**Đăng:** 7/5/2026 (Thứ 4) lúc 20:00 VN (9 AM EDT)
**URL submit:** https://news.ycombinator.com/submit

---

## Title (80 chars max — không dùng dấu chấm than, không hype)
Show HN: A free image compressor that runs entirely in your browser

## URL
https://compressimg.pro/compress-image

## Text (optional — nhưng nên có, giải thích ngắn gọn)
I built this because most image compressors upload your files to a server. This one runs 100% in the browser using a Web Worker — files never leave your device.

Stack: Next.js static export, browser-image-compression library, deployed on Vercel CDN.

The main technical challenge was keeping LCP under 2.5s on mobile while still loading AdSense and GA4. Ended up using `lazyOnload` for both third-party scripts, which brought LCP from 7.1s down to 2.0s.

Supports JPG, PNG, WebP. No sign-up, no watermarks, no limits.

---

## Quy tắc HN (quan trọng — đọc trước khi đăng)

- **Không tự upvote** hoặc nhờ bạn bè upvote hàng loạt → bị shadowban
- **Reply mọi comment** trong 2 giờ đầu — đặc biệt comment tiêu cực, trả lời thẳng thắn
- **Không defensive** nếu bị chỉ trích kỹ thuật — HN audience rất technical, họ test thật
- Nếu có người hỏi kỹ thuật sâu → tag Claude để soạn reply

## Các câu hỏi thường gặp trên HN và cách trả lời

**"Why not just use squoosh.app?"**
→ Squoosh is great. CompressImg focuses on simplicity — one-click upload, instant download, no settings to configure. Different target user.

**"How does the compression actually work?"**
→ Uses the browser-image-compression library which wraps the Canvas API. Compression runs in a Web Worker to avoid blocking the main thread. Quality is controlled via the `initialQuality` parameter passed to the canvas encoder.

**"Is the source code open?"**
→ Not yet open-sourced, but the entire stack is standard Next.js — nothing proprietary.

**"Why ads?"**
→ Hosting and domain cost money. Ads only appear after compression is done, not before or during. No popup, no interstitial.
