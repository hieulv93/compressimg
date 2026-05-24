import Link from 'next/link'
import FAQItem from '@/components/tool/FAQItem'

export default function CompressForWebsiteContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to compressing images for websites"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Why Website Image Size Directly Affects Google Rankings
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Google measures page speed using Core Web Vitals — specifically LCP (Largest Contentful
          Paint), the time until the largest visible element on the page finishes loading. For most
          websites, the LCP element is the hero image or first content image. Google uses LCP as a
          direct ranking signal: pages with LCP under 2.5 seconds rank higher than slower pages with
          otherwise equal content.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          Images account for 50–70% of typical web page weight. A single uncompressed 4MB hero image
          can push LCP above 5 seconds on mobile — dropping a site from page 1 to page 3.
          Compressing that same image to 200KB at quality 80 produces no visible quality difference
          at screen resolution (72–96 DPI) but can improve LCP by 2–4 seconds. That improvement
          alone can move a site from a failing Core Web Vitals score to a passing one.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Recommended Image Size for Every Web Use Case
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-text-muted border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 font-semibold text-text-main">Image type</th>
                <th className="text-left py-2 pr-4 font-semibold text-text-main">Max dimensions</th>
                <th className="text-left py-2 pr-4 font-semibold text-text-main">Target size</th>
                <th className="text-left py-2 font-semibold text-text-main">Quality setting</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                { type: 'Hero / banner image', dim: '1920×1080px', size: '< 300KB', q: '78–82' },
                { type: 'Blog featured image', dim: '1200×630px', size: '< 150KB', q: '78–82' },
                { type: 'Product photo', dim: '1000×1000px', size: '< 200KB', q: '80–85' },
                { type: 'Gallery / portfolio', dim: '1200×800px', size: '< 200KB', q: '78–82' },
                { type: 'Card / thumbnail', dim: '400×300px', size: '< 50KB', q: '72–78' },
                { type: 'Background image', dim: '1920×1080px', size: '< 200KB', q: '70–75' },
                { type: 'Logo (JPEG)', dim: '300×100px', size: '< 20KB', q: '82–85' },
                { type: 'Icon / small UI', dim: '64×64px', size: '< 5KB', q: '80' },
              ].map(({ type, dim, size, q }) => (
                <tr key={type}>
                  <td className="py-2 pr-4 font-medium text-text-main">{type}</td>
                  <td className="py-2 pr-4">{dim}</td>
                  <td className="py-2 pr-4">{size}</td>
                  <td className="py-2">{q}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-text-muted text-sm leading-relaxed">
          These targets apply to JPEG output. WebP at the same quality setting produces files 25–35%
          smaller — so a 150KB JPEG target becomes roughly 100KB in WebP. Use quality 80 as your
          starting point and adjust based on the actual output size shown after compression.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          JPEG vs WebP vs PNG — Which to Use on Your Website
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            {
              format: 'JPEG',
              best: 'Photos, hero images, blog content',
              pros: 'Universal support, smallest file for photos, works everywhere',
              cons: 'No transparency, slight color banding at low quality',
            },
            {
              format: 'WebP',
              best: 'All images on modern websites',
              pros: '25–35% smaller than JPEG at same quality, supports transparency, modern browsers',
              cons: 'Not supported in very old IE/Safari (pre-2020)',
            },
            {
              format: 'PNG',
              best: 'Logos, icons, screenshots with text',
              pros: 'Lossless quality, full transparency support',
              cons: 'Large file sizes for photos — never use for full-width images',
            },
          ].map(({ format, best, pros, cons }) => (
            <div key={format} className="rounded-xl border border-border bg-surface p-3 text-sm">
              <p className="font-bold text-text-main text-sm">{format}</p>
              <p className="text-text-muted text-xs mt-1">
                <span className="font-semibold text-text-main">Best for:</span> {best}
              </p>
              <p className="text-text-muted text-xs mt-1">
                <span className="font-semibold text-text-main">Pros:</span> {pros}
              </p>
              <p className="text-text-muted text-xs mt-1">
                <span className="font-semibold text-text-main">Cons:</span> {cons}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How to Compress Images for Different Website Platforms
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              platform: 'WordPress',
              detail:
                'Upload images already compressed — WordPress generates multiple thumbnail sizes from the original, so the source file size affects all derivatives. Target under 500KB for full-size uploads. Use quality 80 for content images, 85 for featured images.',
            },
            {
              platform: 'Shopify',
              detail:
                'Shopify CDN resizes images but does not heavily compress originals. Upload product photos at 2048×2048px, under 500KB, JPEG quality 82. For hero/banner images, use 1920px wide at under 300KB for best LCP scores.',
            },
            {
              platform: 'Squarespace',
              detail:
                "Squarespace uses Imgix to deliver images but does not compress your originals. Upload images already under 500KB. Squarespace's editor recommends 1500px wide for full-bleed images — compress to under 200KB at that width.",
            },
            {
              platform: 'Webflow',
              detail:
                'Webflow delivers images via Fastly CDN without automatic compression. Upload compressed images directly. Target under 200KB for content images and under 400KB for hero/background images.',
            },
            {
              platform: 'Wix',
              detail:
                'Wix compresses images automatically but still benefits from pre-compressed uploads — smaller originals mean faster uploads and better baseline quality. Target under 500KB per image, quality 80.',
            },
            {
              platform: 'Custom HTML / static site',
              detail:
                'No automatic optimization — every byte you upload is what visitors download. Compress all images before deployment. Use WebP where possible, JPEG as fallback. Serve from a CDN for global performance.',
            },
          ].map(({ platform, detail }) => (
            <div key={platform} className="rounded-xl border border-border bg-surface p-3 text-sm">
              <p className="font-semibold text-text-main text-xs">{platform}</p>
              <p className="text-text-muted text-xs mt-0.5">{detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          5 Image Mistakes That Kill Website Speed
        </h2>
        <div className="space-y-2">
          {[
            {
              mistake: 'Uploading camera-original photos (3–10MB)',
              fix: 'Resize to the display width first, then compress. A 4000px photo displayed at 800px wastes 5× the pixels and bandwidth.',
            },
            {
              mistake: 'Using PNG for photos',
              fix: 'PNG is lossless — a PNG photo of a sunset is 5–10× larger than a JPEG at equivalent quality. Use JPEG or WebP for all photos.',
            },
            {
              mistake: 'Skipping compression because "the CDN handles it"',
              fix: 'CDNs cache and serve your files faster, but they do not compress the original. Upload compressed files to the CDN/CMS to save bandwidth and improve LCP.',
            },
            {
              mistake: 'Setting quality to 100 "to keep it sharp"',
              fix: 'At screen resolution (72–96 DPI), quality 100 and quality 80 are visually identical. Quality 100 produces files 3–5× larger for zero visible benefit.',
            },
            {
              mistake: 'Not compressing hero and above-the-fold images',
              fix: 'These images directly determine your LCP score. A 2MB hero image is the most expensive mistake on a page — it alone can cause a failing Core Web Vitals audit.',
            },
          ].map(({ mistake, fix }) => (
            <div key={mistake} className="rounded-xl border border-border bg-surface p-3 text-sm">
              <p className="font-semibold text-text-main text-xs">❌ {mistake}</p>
              <p className="text-text-muted text-xs mt-0.5">✓ {fix}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Core Web Vitals and Image Compression</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Google&apos;s Core Web Vitals report in Search Console shows three scores — LCP, INP, and
          CLS. Images primarily affect LCP (Largest Contentful Paint) and CLS (Cumulative Layout
          Shift). LCP measures how quickly the biggest visible element loads. CLS measures how much
          the layout shifts as images load in.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          To pass Core Web Vitals for LCP: compress your largest above-the-fold image to under 200KB
          and set explicit width and height attributes on all &lt;img&gt; tags. The width/height
          attributes prevent layout shift (CLS) by reserving space before the image loads. Both
          optimizations together produce the fastest improvement in Google&apos;s field data, which
          determines your actual ranking signal.
        </p>
      </div>

      <div className="rounded-xl border border-border bg-surface p-4 text-sm space-y-2">
        <h2 className="font-semibold text-text-main">Your Images Never Leave Your Device</h2>
        <p className="text-text-muted text-xs leading-relaxed">
          All compression runs in your browser using JavaScript. Your images are never uploaded to
          any server — there is no upload step. Safe for unreleased designs, client work, and
          confidential assets. Free with no limits, no watermarks, no account required.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">More Free Image Tools for Web</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            {
              href: '/compress-image/',
              label: 'Compress Image',
              desc: 'Reduce file size up to 90%',
            },
            { href: '/resize-image/', label: 'Resize Image', desc: 'Change pixel dimensions' },
            {
              href: '/compress-image-for-wordpress/',
              label: 'For WordPress',
              desc: 'Optimize before upload',
            },
            {
              href: '/compress-image-for-shopify/',
              label: 'For Shopify',
              desc: 'Product photos under 500KB',
            },
            { href: '/jpg-to-webp/', label: 'JPG to WebP', desc: '25–35% smaller than JPEG' },
            { href: '/compress-images/', label: 'Batch Compress', desc: 'Multiple images at once' },
          ].map(({ href, label, desc }) => (
            <Link
              key={href}
              href={href}
              className="rounded-xl border border-border bg-surface p-3 hover:border-primary/40 transition-colors"
            >
              <p className="font-semibold text-text-main text-xs">{label}</p>
              <p className="text-text-muted text-xs mt-0.5">{desc}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-text-main">
          Frequently Asked Questions About Website Image Compression
        </h2>
        <div className="space-y-2">
          {[
            {
              q: 'What image size is best for a website?',
              a: 'For most websites: hero images under 300KB at 1920px wide, blog featured images under 150KB at 1200px wide, thumbnails under 50KB at 400px wide. Google PageSpeed flags images over 100KB that could be compressed without visible quality loss at their display size.',
            },
            {
              q: 'How do images affect Google rankings?',
              a: 'Google uses Core Web Vitals as a ranking signal. The key metric for images is LCP (Largest Contentful Paint). Pages with LCP under 2.5 seconds rank higher than slower pages. Large uncompressed images are the #1 cause of slow LCP scores. Compressing your largest image is the fastest way to improve your Core Web Vitals score.',
            },
            {
              q: 'What quality setting should I use for website images?',
              a: 'Quality 75–82 is standard for website images. At screen resolution (72–96 DPI), quality 80 is visually identical to the original. Below quality 70, compression artifacts become visible at close inspection. Above quality 85, file sizes grow sharply with no visible benefit at normal viewing sizes.',
            },
            {
              q: 'Should I use JPEG or WebP for my website?',
              a: 'WebP is the better choice for most websites in 2026 — 25–35% smaller than JPEG at the same quality, supported by all modern browsers. Use JPEG as a fallback if your CMS does not support WebP uploads or if you need maximum compatibility with older browsers.',
            },
            {
              q: 'Does my CMS (WordPress, Shopify, Squarespace) compress images automatically?',
              a: 'Most CMS platforms resize images to fit different screen sizes but do not aggressively compress your originals. WordPress uses the original uploaded file as the source for all generated thumbnails. Shopify and Squarespace deliver via CDN but from your uploaded file. Pre-compressing before uploading gives the best results on all platforms.',
            },
            {
              q: 'How do I fix a failing LCP score caused by images?',
              a: 'Identify your LCP image in Google PageSpeed Insights (it shows which element is the LCP). Compress that image to under 200KB and ensure it is loaded with high priority (no lazy loading on above-the-fold images). Set explicit width and height attributes to prevent layout shift. This combination typically improves LCP by 1–3 seconds.',
            },
            {
              q: 'How much does image compression improve page speed?',
              a: "Compressing a 4MB hero image to 200KB reduces that image's load time by roughly 80–90% on a typical mobile connection. For a page whose hero is the LCP element, this typically improves LCP from 5–8 seconds to 1–2 seconds. Real-world improvement depends on hosting, CDN, browser caching, and other page resources.",
            },
            {
              q: 'Are my images uploaded to a server when using this tool?',
              a: 'No. All compression runs entirely in your browser. Your images never leave your device — there is no upload step. This is safe for unreleased designs, client work, and confidential assets.',
            },
          ].map(({ q, a }) => (
            <FAQItem key={q} question={q} answer={a} />
          ))}
        </div>
      </div>
    </section>
  )
}
