# Reddit — r/webdev

**Title:**
I built a browser-based image compressor that never uploads your files to a server

**Post body:**
Hey r/webdev,

I got tired of image compression tools that upload your photos to some random server, so I built one that runs entirely in the browser.

**How it works:**
- Uses the `browser-image-compression` library with a Web Worker so the main thread never blocks
- Compression happens 100% client-side via the Canvas API
- Files never leave your device

**Tech stack:**
- Next.js 14 (static export — no server needed)
- Deployed on Vercel, served from CDN
- Web Worker for off-thread compression

**Results I'm seeing:**
- JPG photos: 60–85% reduction with quality 80
- PNG files: 30–60% depending on content
- Compression time: under 3 seconds for most images

The PageSpeed score was rough at first (LCP 7.1s on mobile) — turned out the issue was loading AdSense and GA4 with `afterInteractive` instead of `lazyOnload`. Switching to `lazyOnload` dropped LCP to 2.0s.

Would love feedback from the webdev community — especially on the UX and anything I might have missed on the privacy/security side.

Link: https://compressimg.pro/compress-image
