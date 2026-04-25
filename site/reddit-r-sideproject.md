# Reddit — r/SideProject

**Title:**
Built a free image compressor in a weekend — 0 to live with Next.js + Vercel

**Post body:**
Hey everyone, sharing my latest side project.

**CompressImg** — a free online image compressor that works entirely in your browser. No account, no upload to server, no watermarks.

**Why I built it:**
Most image compressors either upload your files to a server (privacy concern) or are bloated with ads and dark patterns. I wanted something fast, private, and no-nonsense.

**What I used:**
- Next.js 14 (static export)
- browser-image-compression (Web Worker)
- Vercel for hosting (free tier)
- Cloudflare for domain DNS

**Current status:**
- Live at compressimg.pro
- Mobile PageSpeed LCP: 2.0s (target was < 2.5s)
- Google Search Console submitted
- AdSense pending review

**What's working:**
- Drag & drop, click to upload, Ctrl+V paste
- JPG / PNG / WebP support
- Quality slider with live preview of savings
- Download with one click

Happy to answer any questions about the stack or the build process. Always looking for feedback!

Link: https://compressimg.pro/compress-image
