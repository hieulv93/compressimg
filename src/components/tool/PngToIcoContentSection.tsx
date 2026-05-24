import Link from 'next/link'

export default function PngToIcoContentSection() {
  return (
    <section className="space-y-8 pt-8 border-t border-border">
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          What Is a Favicon and Why Does It Matter?
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          A favicon is the small icon that appears in browser tabs, bookmarks, and search results
          next to your site name. It is one of the first visual identifiers users see — a missing or
          blurry favicon signals an unfinished or unprofessional site. Modern browsers automatically
          look for a <code className="text-primary font-mono text-xs">/favicon.ico</code> file at
          your domain root.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          The ICO format is a container that holds multiple image sizes in a single file. Browsers
          select the most appropriate size for the context — 16×16 for browser tabs, 32×32 for
          taskbars, 48×48 for shortcuts, and 256×256 for high-DPI displays. The generated ICO from
          this tool contains all six standard sizes.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Favicon Sizes — What Is Included</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-surface">
                <th className="text-left p-3 border border-border font-semibold">Size</th>
                <th className="text-left p-3 border border-border font-semibold">Used by</th>
                <th className="text-left p-3 border border-border font-semibold">Context</th>
              </tr>
            </thead>
            <tbody>
              {[
                { size: '16×16 px', used: 'All browsers', ctx: 'Browser tab, address bar' },
                {
                  size: '32×32 px',
                  used: 'Chrome, Firefox, Edge',
                  ctx: 'Taskbar pinned site, Windows shortcuts',
                },
                { size: '48×48 px', used: 'Windows', ctx: 'Desktop shortcut, Start menu' },
                { size: '64×64 px', used: 'Windows, high-DPI', ctx: 'Large icon views, HiDPI tab' },
                { size: '128×128 px', used: 'Chrome Web Store', ctx: 'App store listings' },
                {
                  size: '256×256 px',
                  used: 'Windows 7+, modern OS',
                  ctx: 'Large icon view, 2× HiDPI',
                },
              ].map(({ size, used, ctx }, i) => (
                <tr key={size} className={i % 2 === 1 ? 'bg-surface/50' : ''}>
                  <td className="p-3 border border-border font-mono font-medium text-primary">
                    {size}
                  </td>
                  <td className="p-3 border border-border text-text-muted">{used}</td>
                  <td className="p-3 border border-border text-text-muted">{ctx}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">How to Add a Favicon to Your Website</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          After downloading <code className="text-primary font-mono text-xs">favicon.ico</code>,
          upload it to the root of your website and add the following to your HTML{' '}
          <code className="text-primary font-mono text-xs">&lt;head&gt;</code>:
        </p>
        <div className="bg-surface border border-border rounded-xl p-4 font-mono text-xs text-text-muted overflow-x-auto">
          <pre>{`<!-- Standard favicon (all browsers) -->
<link rel="icon" href="/favicon.ico" sizes="any">

<!-- Modern browsers: prefer SVG or PNG over ICO -->
<link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32">
<link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16">

<!-- Apple touch icon (iOS home screen) -->
<link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180">`}</pre>
        </div>
        <p className="text-text-muted text-sm leading-relaxed">
          For most sites, placing{' '}
          <code className="text-primary font-mono text-xs">favicon.ico</code> in the root directory
          is sufficient — browsers look for it automatically even without the{' '}
          <code className="text-primary font-mono text-xs">&lt;link&gt;</code> tag.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Best Practices for Favicon Design</h2>
        <div className="grid sm:grid-cols-2 gap-3 text-sm">
          {[
            {
              title: 'Use a square source image',
              desc: 'ICO requires square sizes (16×16, 32×32, etc.). A square source fills each size without cropping or padding. Non-square images are scaled to fit.',
            },
            {
              title: 'Minimum 256×256 px source',
              desc: 'Starting from a larger source produces sharper downscaled results. Upscaling a 16×16 image to 256×256 produces a blurry favicon.',
            },
            {
              title: 'Simple designs work best',
              desc: 'At 16×16 px, fine details disappear. Use bold shapes, high contrast, and minimal detail. A simple letter, symbol, or logo mark works better than a complex illustration.',
            },
            {
              title: 'Use PNG with transparency',
              desc: 'PNG supports transparency, which is preserved in the ICO output. A transparent favicon adapts to different browser themes (light/dark mode tab bars).',
            },
            {
              title: 'Test at 16×16 px',
              desc: 'Design for 16×16 first. Most users will see your favicon at this size in browser tabs. Zoom in to 16×16 in your design tool to preview.',
            },
            {
              title: 'High contrast colors',
              desc: 'Low contrast icons become invisible against browser UI. Use high-contrast colors or a solid background that stands out on both light and dark themes.',
            },
          ].map(({ title, desc }) => (
            <div key={title} className="border border-border rounded-xl p-4">
              <p className="font-semibold text-text-main mb-1">{title}</p>
              <p className="text-text-muted">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Adding Favicon to Specific Platforms</h2>
        <div className="space-y-3 text-sm">
          {[
            {
              platform: 'Next.js',
              steps:
                'Place favicon.ico in the /app directory (Next.js 13+) or /public directory (older). Next.js automatically serves it at /favicon.ico.',
            },
            {
              platform: 'WordPress',
              steps:
                'Go to Appearance → Customize → Site Identity → Site Icon. Upload your PNG or ICO. WordPress resizes it automatically for all contexts.',
            },
            {
              platform: 'Shopify',
              steps:
                'Go to Online Store → Themes → Customize → Theme Settings → Favicon. Upload a square PNG (512×512 recommended). Shopify generates ICO internally.',
            },
            {
              platform: 'Squarespace',
              steps:
                'Design → Browser Icon (Favicon). Upload a square image — Squarespace crops to square if needed.',
            },
          ].map(({ platform, steps }) => (
            <div key={platform} className="border border-border rounded-xl p-4">
              <p className="font-semibold text-text-main mb-1">{platform}</p>
              <p className="text-text-muted">{steps}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Related Tools</h2>
        <ul className="list-disc pl-6 space-y-2 text-sm text-text-muted">
          <li>
            <Link href="/svg-to-png" className="text-primary hover:underline">
              SVG to PNG
            </Link>{' '}
            — convert vector logo to PNG before creating ICO
          </li>
          <li>
            <Link href="/crop-image" className="text-primary hover:underline">
              Crop image
            </Link>{' '}
            — crop to square before converting to ICO
          </li>
          <li>
            <Link href="/png-to-jpg" className="text-primary hover:underline">
              PNG to JPG
            </Link>{' '}
            — convert PNG to JPEG for photos
          </li>
          <li>
            <Link href="/resize-image" className="text-primary hover:underline">
              Resize image
            </Link>{' '}
            — resize to specific pixel dimensions
          </li>
          <li>
            <Link href="/compress-image" className="text-primary hover:underline">
              Compress image
            </Link>{' '}
            — reduce PNG file size before creating ICO
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-text-main">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {[
            {
              q: 'What size should I make my favicon PNG?',
              a: 'Use a square PNG of at least 256×256 pixels. Larger source images (512×512 or 1024×1024) produce sharper results when downscaled to 16×16. The converter handles all size generation automatically.',
            },
            {
              q: 'Does the ICO contain all 6 sizes automatically?',
              a: 'Yes. The generated ICO file contains 6 sizes: 16×16, 32×32, 48×48, 64×64, 128×128, and 256×256 pixels. Browsers and operating systems select the most appropriate size for their context automatically.',
            },
            {
              q: 'How do I install the favicon on my website?',
              a: 'Upload favicon.ico to your website root directory. Browsers look for /favicon.ico automatically. Optionally add <link rel="icon" href="/favicon.ico"> to your HTML head for explicit control.',
            },
            {
              q: 'Can I use a JPG or WebP image instead of PNG?',
              a: 'Yes. The tool accepts PNG, JPG, and WebP images. For logos with transparent backgrounds, use a PNG — transparency is preserved in the ICO output. JPEG does not support transparency.',
            },
            {
              q: 'Why does my favicon look blurry in the browser tab?',
              a: 'At 16×16 pixels, complex designs with fine details lose clarity. Use a simpler design with high contrast and bold shapes. Also verify your source image is at least 256×256 pixels for clean downscaling.',
            },
            {
              q: 'Are my images uploaded to a server?',
              a: 'No. All ICO generation happens entirely in your browser. Your files never leave your device.',
            },
          ].map(({ q, a }) => (
            <details key={q} className="border border-border rounded-xl p-4 group">
              <summary className="font-semibold text-sm text-text-main cursor-pointer list-none flex items-center justify-between gap-2">
                {q}
                <span className="text-text-muted text-xs flex-shrink-0 group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="text-text-muted text-sm leading-relaxed mt-3">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
