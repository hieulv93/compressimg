# Dev.to / Hashnode Article

**Title:**
How I built a privacy-first image compressor that runs entirely in the browser

**Tags:** webdev, nextjs, javascript, showdev

---

Most online image compressors have one thing in common: your files go to their server. You upload a private photo, it travels across the internet, gets processed on someone else's machine, and comes back. That always felt wrong to me.

So I built [CompressImg](https://compressimg.pro/compress-image) — an image compressor that does everything in your browser. Your files never leave your device.

Here's how it works under the hood.

## The core: browser-image-compression + Web Worker

The heavy lifting is done by the `browser-image-compression` library, but the key is *where* it runs:

```javascript
// compress.ts
export async function compressImage(file: File, options: CompressOptions) {
  const { default: imageCompression } = await import('browser-image-compression')

  return imageCompression(file, {
    maxSizeMB: undefined,        // don't limit by size, use quality instead
    initialQuality: options.quality / 100,
    alwaysKeepResolution: true,  // never upscale
    maxWidthOrHeight: 1920,      // cap at screen resolution
    useWebWorker: true,          // off main thread
  })
}
```

Two things matter here:
1. **Dynamic import** — `browser-image-compression` is only loaded when the user actually compresses an image. It's not in the initial bundle.
2. **`useWebWorker: true`** — compression runs off the main thread. The UI stays responsive even for large files.

## The stack

- **Next.js 14** with `output: 'export'` — generates a pure static site. No server, no API routes, nothing to scale.
- **Vercel** — serves the static files from a global CDN. Handles any amount of concurrent users automatically.
- **Cloudflare** — DNS only (gray cloud). Vercel manages SSL.

## The PageSpeed problem

My first PageSpeed score on mobile was LCP 7.1s. Way off the < 2.5s target.

The culprit turned out to be three things stacking up:

**1. Font loading**

```typescript
// Before
const inter = Inter({ subsets: ['latin'], display: 'swap' })

// After
const inter = Inter({ subsets: ['latin'], display: 'optional' })
```

With `display: swap`, the browser renders text with a fallback font, then swaps to Inter when it loads. On mobile simulation (slow 4G), Inter was loading at ~5s — and LCP was measured at the swap moment.

With `display: optional`, if the font isn't immediately available, the browser uses the system font and never swaps. LCP is measured right away.

**2. Third-party scripts competing for bandwidth**

AdSense (231 KiB) and GA4 (140 KiB) were loading with `afterInteractive`, which fires right after hydration. On mobile, this competed with the LCP element for bandwidth.

```typescript
// Before
strategy="afterInteractive"

// After
strategy="lazyOnload"
```

`lazyOnload` defers until the browser is truly idle — after LCP has already painted.

**3. ContentSection as a client component**

I had added `'use client'` to the ContentSection (1000+ words of SEO text) to handle the FAQ accordion. This caused all that static text to be bundled as JavaScript instead of static HTML.

Fix: extract the interactive part (accordion toggle) into its own tiny client component, let the rest be server-rendered HTML.

```typescript
// FAQItem.tsx — only this needs 'use client'
'use client'
export default function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)
  // ...
}
```

After all three fixes: **LCP dropped from 7.1s to 2.0s**.

## Privacy by design

The architecture makes privacy the default, not a feature:

- Static export = no server to log requests
- Compression via Canvas API = no data transmission
- No cookies, no session storage, no user tracking beyond GA4 page views
- `ads.txt` published for AdSense transparency

## What's next

The tool is live at [compressimg.pro](https://compressimg.pro/compress-image). Next steps are adding more tools (resize, format conversion) once the SEO for image compression establishes a baseline.

If you're building something similar, the main lesson: **measure PageSpeed early and often**. The LCP issue would have been invisible without it.

---

*Built with Next.js, deployed on Vercel. Questions welcome in the comments.*
