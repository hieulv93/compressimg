import Link from 'next/link'
import FAQItem from '@/components/tool/FAQItem'

export default function JpgToWebpContentSection() {
  return (
    <section className="space-y-8 text-sm text-text-muted leading-relaxed">
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Why Convert JPG to WebP?</h2>
        <p>
          WebP is a modern image format developed by Google that delivers significantly smaller file
          sizes than JPG at the same visual quality. Converting a JPG to WebP typically reduces file
          size by{' '}
          <span className="font-semibold text-text-main">25–35% compared to equivalent JPG</span>{' '}
          compression. For websites, smaller images mean faster page load times, lower bandwidth
          costs, and better Core Web Vitals scores — all of which contribute to higher search
          rankings.
        </p>
        <p>
          WebP achieves this through a more advanced compression algorithm that handles both lossy
          and lossless modes. Unlike JPG, WebP also supports transparency (alpha channel), making it
          a versatile replacement for both JPG and PNG on the web.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">How to Convert JPG to WebP in 3 Steps</h2>
        <ol className="list-decimal list-inside space-y-2 ml-2">
          <li>
            <span className="font-semibold text-text-main">Upload your JPG file</span> — drag and
            drop, click to browse, or paste with Ctrl+V. Supports JPG, JPEG files up to 20MB.
          </li>
          <li>
            <span className="font-semibold text-text-main">Select WebP as output format</span> —
            WebP is pre-selected on this page. Use the format selector to switch if needed.
          </li>
          <li>
            <span className="font-semibold text-text-main">Download your WebP file</span> — the
            converted file downloads instantly, named{' '}
            <code className="text-xs bg-surface-alt px-1 rounded">converted-yourfile.webp</code>.
          </li>
        </ol>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">JPG vs WebP — Format Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-xs">
            <thead>
              <tr className="bg-surface-alt">
                <th className="border border-border px-3 py-2 text-left font-semibold text-text-main">
                  Feature
                </th>
                <th className="border border-border px-3 py-2 text-left font-semibold text-text-main">
                  JPG
                </th>
                <th className="border border-border px-3 py-2 text-left font-semibold text-text-main">
                  WebP
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border px-3 py-2 font-semibold">File Size</td>
                <td className="border border-border px-3 py-2">Baseline</td>
                <td className="border border-border px-3 py-2 text-green-600">25–35% smaller</td>
              </tr>
              <tr className="bg-surface-alt">
                <td className="border border-border px-3 py-2 font-semibold">Transparency</td>
                <td className="border border-border px-3 py-2 text-red-500">No</td>
                <td className="border border-border px-3 py-2 text-green-600">Yes (alpha)</td>
              </tr>
              <tr>
                <td className="border border-border px-3 py-2 font-semibold">Browser Support</td>
                <td className="border border-border px-3 py-2 text-green-600">Universal</td>
                <td className="border border-border px-3 py-2 text-green-600">95%+ (all modern)</td>
              </tr>
              <tr className="bg-surface-alt">
                <td className="border border-border px-3 py-2 font-semibold">Email Clients</td>
                <td className="border border-border px-3 py-2 text-green-600">Universal</td>
                <td className="border border-border px-3 py-2 text-amber-600">Limited (avoid)</td>
              </tr>
              <tr>
                <td className="border border-border px-3 py-2 font-semibold">iOS Camera Roll</td>
                <td className="border border-border px-3 py-2 text-green-600">Full support</td>
                <td className="border border-border px-3 py-2 text-amber-600">iOS 14+ only</td>
              </tr>
              <tr className="bg-surface-alt">
                <td className="border border-border px-3 py-2 font-semibold">Print Services</td>
                <td className="border border-border px-3 py-2 text-green-600">Universal</td>
                <td className="border border-border px-3 py-2 text-red-500">Not supported</td>
              </tr>
              <tr>
                <td className="border border-border px-3 py-2 font-semibold">Best For</td>
                <td className="border border-border px-3 py-2">Email, print, universal sharing</td>
                <td className="border border-border px-3 py-2">Web, apps, modern platforms</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">WebP Browser Support in 2025</h2>
        <p>
          WebP is supported by all modern browsers: Chrome, Firefox, Safari (since version 14),
          Edge, and Opera. Mobile support covers iOS 14+, Android 4.0+, and all modern mobile
          browsers. Global browser support for WebP exceeds 95%, making it safe to use as the
          primary image format for web content without fallbacks in most cases.
        </p>
        <p>
          The main areas where WebP is not supported: older email clients (Outlook 2019 and
          earlier), print services, and older desktop image editors. For these use cases, keep a JPG
          copy of your images and use WebP only for web display.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">JPG to WebP for Website Performance</h2>
        <p>
          Switching from JPG to WebP is one of the highest-impact optimizations for website load
          speed. Google PageSpeed Insights and Lighthouse actively flag JPG images as candidates for
          WebP conversion and deduct points from your performance score if you serve JPGs where WebP
          would be significantly smaller. A site that converts its JPG hero images, product photos,
          and blog images to WebP can see a 20–40% reduction in total page weight, directly
          improving Largest Contentful Paint (LCP) — one of Google&apos;s Core Web Vitals signals
          used in search ranking. For e-commerce sites with many product images, converting the
          entire image library from JPG to WebP can reduce bandwidth costs and improve mobile page
          load times on slower connections.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Does Converting JPG to WebP Reduce Quality?
        </h2>
        <p>
          Converting JPG to WebP involves re-encoding the image. Because both JPG and WebP use lossy
          compression, some additional quality loss occurs during conversion — similar to resaving a
          JPG at a slightly lower quality. In practice, at default quality settings the quality
          difference is{' '}
          <span className="font-semibold text-text-main">
            virtually imperceptible to the human eye
          </span>
          , while file size drops by 25–35%.
        </p>
        <p>
          For images that will be edited further, it is better to work from the original source
          (RAW, TIFF, or original JPG) and export to WebP at the final step, rather than converting
          multiple times.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">When to Use JPG Instead of WebP</h2>
        <p>
          Despite WebP&apos;s advantages for web use, there are situations where JPG is the better
          choice:
        </p>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>
            <span className="font-semibold text-text-main">Email attachments</span> — many email
            clients do not render WebP; use JPG for universal compatibility.
          </li>
          <li>
            <span className="font-semibold text-text-main">Print and photo labs</span> — printing
            services require JPG or TIFF; WebP is not accepted.
          </li>
          <li>
            <span className="font-semibold text-text-main">Older software</span> — Photoshop CS6,
            Lightroom before 2021, and Office 2019 do not open WebP natively.
          </li>
          <li>
            <span className="font-semibold text-text-main">Camera roll sharing</span> — on iOS
            devices before iOS 14, WebP saved to camera roll may not open correctly.
          </li>
        </ul>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Privacy — No Server Upload</h2>
        <p>
          All conversion happens entirely in your browser using the Canvas API. No JPG or WebP file
          is ever uploaded to a server. Your images never leave your device and are never stored,
          logged, or transmitted. Suitable for converting private photos, business images, and
          confidential documents. There is no account required, no file size tracking, and no usage
          limit — every conversion is local, instant, and completely private. You can convert as
          many images as you need without any restrictions, watermarks, or sign-up required. The
          tool is entirely free and always will be.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">More Free Image Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link
            href="/webp-to-jpg"
            className="block rounded-xl border border-border p-4 hover:border-primary transition-colors group"
          >
            <p className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors">
              WebP to JPG
            </p>
            <p className="text-xs text-text-muted mt-1">
              Convert WebP back to JPG for universal compatibility.
            </p>
          </Link>
          <Link
            href="/jpg-to-png"
            className="block rounded-xl border border-border p-4 hover:border-primary transition-colors group"
          >
            <p className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors">
              JPG to PNG
            </p>
            <p className="text-xs text-text-muted mt-1">
              Convert JPG to lossless PNG for editing or transparency support.
            </p>
          </Link>
          <Link
            href="/compress-image"
            className="block rounded-xl border border-border p-4 hover:border-primary transition-colors group"
          >
            <p className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors">
              Compress Image
            </p>
            <p className="text-xs text-text-muted mt-1">
              Reduce JPG, PNG, or WebP file size by up to 90%.
            </p>
          </Link>
        </div>
      </div>

      <JpgToWebpFAQSection />
    </section>
  )
}

function JpgToWebpFAQSection() {
  const faqs = [
    {
      q: 'How much smaller is WebP compared to JPG?',
      a: 'WebP is typically 25–35% smaller than JPG at equivalent visual quality. For a typical 500KB JPG photo, the WebP equivalent is around 325–375KB. The exact savings depend on image content — photos with fine detail or gradients benefit most from WebP compression.',
    },
    {
      q: 'Does converting JPG to WebP lose quality?',
      a: 'At default quality settings, the quality difference between a JPG and its WebP conversion is virtually invisible to the human eye, while file size drops significantly. Both formats use lossy compression, so some minimal re-encoding loss occurs. For best results, convert from the original source rather than re-converting multiple times.',
    },
    {
      q: 'Is WebP supported in all browsers?',
      a: 'WebP is supported in all modern browsers: Chrome, Firefox, Safari 14+, Edge, and Opera. Global browser support exceeds 95% as of 2025. The main exceptions are very old browsers (IE11, Safari before 2020) and some email clients (Outlook 2019 and earlier).',
    },
    {
      q: 'Can I use WebP images for email?',
      a: 'Not recommended. Many email clients — including older Outlook versions and some corporate email systems — do not display WebP images correctly. For email attachments and newsletter images, use JPG for universal compatibility.',
    },
    {
      q: 'Does WebP support transparency like PNG?',
      a: 'Yes. WebP supports an alpha channel (transparency), making it a potential replacement for PNG on the web. When you convert a JPG to WebP, the output does not have transparency since JPG has no alpha channel. To get a WebP with transparency, start from a PNG with transparent areas.',
    },
    {
      q: 'Can I convert JPG to WebP on mobile?',
      a: 'Yes. This tool works fully on iOS and Android mobile browsers. Tap to select a photo from your camera roll, and the WebP file downloads directly to your device. No app installation required.',
    },
    {
      q: 'What software opens WebP files?',
      a: 'All modern browsers open WebP natively. On Windows, Photos app (Windows 10 v1809+) and Paint 3D support WebP. On macOS, Preview supports WebP from macOS Ventura (2022) and Safari 14+. Photoshop added native WebP support in version 23.2 (2022). For older software, convert WebP back to JPG using our WebP to JPG tool.',
    },
    {
      q: 'Are my JPG files uploaded when converting to WebP?',
      a: 'No. All conversion happens entirely in your browser using the Canvas API. Your JPG files never leave your device and are never sent to any server. The conversion and download happen locally on your computer or phone.',
    },
  ]

  return (
    <div className="space-y-3">
      <h2 className="text-xl font-bold text-text-main">Frequently Asked Questions</h2>
      <div className="space-y-2">
        {faqs.map((faq, i) => (
          <FAQItem key={i} question={faq.q} answer={faq.a} />
        ))}
      </div>
    </div>
  )
}
