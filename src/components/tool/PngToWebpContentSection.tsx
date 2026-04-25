import Link from 'next/link'
import FAQItem from '@/components/tool/FAQItem'

export default function PngToWebpContentSection() {
  return (
    <section className="space-y-8 text-sm text-text-muted leading-relaxed">
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Why Convert PNG to WebP?</h2>
        <p>
          WebP is a modern image format developed by Google that delivers significantly smaller file
          sizes than PNG at equivalent visual quality. Converting a PNG to WebP typically reduces
          file size by{' '}
          <span className="font-semibold text-text-main">26% compared to lossless PNG</span> for
          lossless WebP, and up to{' '}
          <span className="font-semibold text-text-main">60–80% for lossy WebP</span> compared to an
          equivalent-quality PNG. For websites that serve PNG graphics, logos, and UI assets,
          switching to WebP reduces page weight, speeds up load times, and improves Core Web Vitals
          scores — all of which contribute directly to search engine rankings.
        </p>
        <p>
          PNG is a lossless format designed for maximum quality without data loss. This makes PNG
          files large — especially for photographs and complex images. WebP offers both lossless and
          lossy modes, and even lossless WebP is smaller than equivalent PNG. For web delivery, WebP
          is almost always the better choice: same visual quality, smaller download, and support
          across all modern browsers as of 2025.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">How to Convert PNG to WebP in 3 Steps</h2>
        <ol className="list-decimal list-inside space-y-2 ml-2">
          <li>
            <span className="font-semibold text-text-main">Upload your PNG file</span> — drag and
            drop, click to browse, or paste with Ctrl+V. Supports PNG, JPG, and WebP files up to
            20MB.
          </li>
          <li>
            <span className="font-semibold text-text-main">Select WebP as output format</span> —
            WebP is pre-selected on this page. Use the format selector to switch output if needed.
          </li>
          <li>
            <span className="font-semibold text-text-main">Download your WebP file</span> — the
            converted file downloads instantly, named{' '}
            <code className="text-xs bg-surface-alt px-1 rounded">converted-yourfile.webp</code>.
            Transparency from the original PNG is preserved in the WebP output.
          </li>
        </ol>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">PNG vs WebP — Format Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-xs">
            <thead>
              <tr className="bg-surface-alt">
                <th className="border border-border px-3 py-2 text-left font-semibold text-text-main">
                  Feature
                </th>
                <th className="border border-border px-3 py-2 text-left font-semibold text-text-main">
                  PNG
                </th>
                <th className="border border-border px-3 py-2 text-left font-semibold text-text-main">
                  WebP
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border px-3 py-2 font-semibold">File Size</td>
                <td className="border border-border px-3 py-2">Baseline (large)</td>
                <td className="border border-border px-3 py-2 text-green-600">26–80% smaller</td>
              </tr>
              <tr className="bg-surface-alt">
                <td className="border border-border px-3 py-2 font-semibold">Compression</td>
                <td className="border border-border px-3 py-2">Lossless only</td>
                <td className="border border-border px-3 py-2 text-green-600">Lossless + lossy</td>
              </tr>
              <tr>
                <td className="border border-border px-3 py-2 font-semibold">Transparency</td>
                <td className="border border-border px-3 py-2 text-green-600">Yes (alpha)</td>
                <td className="border border-border px-3 py-2 text-green-600">Yes (alpha)</td>
              </tr>
              <tr className="bg-surface-alt">
                <td className="border border-border px-3 py-2 font-semibold">Browser Support</td>
                <td className="border border-border px-3 py-2 text-green-600">Universal</td>
                <td className="border border-border px-3 py-2 text-green-600">95%+ modern</td>
              </tr>
              <tr>
                <td className="border border-border px-3 py-2 font-semibold">Email Clients</td>
                <td className="border border-border px-3 py-2 text-green-600">Universal</td>
                <td className="border border-border px-3 py-2 text-amber-600">Limited</td>
              </tr>
              <tr className="bg-surface-alt">
                <td className="border border-border px-3 py-2 font-semibold">Print Services</td>
                <td className="border border-border px-3 py-2 text-green-600">Supported</td>
                <td className="border border-border px-3 py-2 text-red-500">Not supported</td>
              </tr>
              <tr>
                <td className="border border-border px-3 py-2 font-semibold">Photoshop</td>
                <td className="border border-border px-3 py-2 text-green-600">All versions</td>
                <td className="border border-border px-3 py-2 text-amber-600">v23.2+ (2022)</td>
              </tr>
              <tr className="bg-surface-alt">
                <td className="border border-border px-3 py-2 font-semibold">Best For</td>
                <td className="border border-border px-3 py-2">Print, editing, email</td>
                <td className="border border-border px-3 py-2">Web, apps, web platforms</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">When to Convert PNG to WebP</h2>
        <p>
          PNG to WebP conversion delivers the biggest benefit for web-based use cases. The most
          common scenarios where converting PNG to WebP makes a meaningful difference:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Website Images and Graphics</p>
            <p className="text-xs text-text-muted leading-relaxed">
              PNG logos, icons, and UI graphics served on websites should be converted to WebP to
              reduce page weight. A 200KB PNG logo may become 60–80KB as WebP — a reduction that
              directly improves page load time and PageSpeed Insights scores.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Product Images with Transparency</p>
            <p className="text-xs text-text-muted leading-relaxed">
              E-commerce product photos exported as PNG to preserve transparent backgrounds can be
              converted to WebP, which also supports full alpha transparency. The WebP versions are
              significantly smaller, reducing bandwidth costs for image-heavy stores.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Social Media and App Assets</p>
            <p className="text-xs text-text-muted leading-relaxed">
              App screenshots, interface mockups, and social media graphics exported as PNG are
              excellent candidates for WebP conversion when sharing digitally. Modern platforms and
              browsers handle WebP natively, and the smaller files transfer faster.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Blog and CMS Images</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Content management systems that serve large PNG screenshots or diagrams benefit
              significantly from WebP conversion. Google PageSpeed Insights flags large PNG files
              and recommends WebP as a next-generation format for faster rendering.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Does PNG to WebP Preserve Transparency?
        </h2>
        <p>
          Yes. WebP fully supports alpha channel transparency — the same transparency mechanism used
          by PNG. When you convert a PNG with a transparent background to WebP using this tool, the
          transparency is preserved exactly in the output WebP file. Logos with transparent
          backgrounds, product cutouts, and icons with alpha channels all convert correctly.
        </p>
        <p>
          This is one of the key advantages of WebP over JPG for web use: unlike JPG, which has no
          transparency support and fills transparent areas with a solid color, WebP handles
          transparency natively, making it a complete replacement for PNG in web contexts.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">When to Keep PNG Instead of WebP</h2>
        <p>Despite WebP&apos;s size advantages, there are cases where PNG is the better choice:</p>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>
            <span className="font-semibold text-text-main">Print and professional design</span> —
            print services require PNG or TIFF; WebP is not accepted by print labs or desktop
            publishing software.
          </li>
          <li>
            <span className="font-semibold text-text-main">Email attachments</span> — many email
            clients, including older Outlook versions, do not display WebP correctly. Use PNG or JPG
            for images attached to emails.
          </li>
          <li>
            <span className="font-semibold text-text-main">Editing workflows</span> — if the image
            will be further edited in Photoshop, Illustrator, or GIMP, keep the PNG as your working
            file. Export to WebP only at the final delivery step.
          </li>
          <li>
            <span className="font-semibold text-text-main">Maximum compatibility requirements</span>{' '}
            — for audiences likely to use older software or open the file outside of a browser, PNG
            ensures the image displays correctly everywhere.
          </li>
        </ul>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">WebP Browser Support in 2025</h2>
        <p>
          WebP is supported by all modern browsers as of 2025: Chrome (from version 23), Firefox
          (from version 65), Safari (from version 14, released 2020), Edge, and Opera. On mobile,
          WebP is supported by iOS 14+ Safari, Chrome for Android, and Firefox for Android. Global
          browser support exceeds 95%, making WebP safe to use as the primary web image format
          without fallbacks in most production environments.
        </p>
        <p>
          The areas where WebP is still not supported: Internet Explorer 11, Safari before version
          14 (macOS Mojave and earlier), email clients including Outlook 2019 and earlier, and
          desktop image editing software released before 2022. For these audiences, maintain a PNG
          fallback or use the{' '}
          <Link href="/webp-to-png" className="text-primary underline">
            WebP to PNG converter
          </Link>{' '}
          to create a compatible version.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Privacy — No Server Upload</h2>
        <p>
          All conversion happens entirely in your browser using the Canvas API. No PNG or WebP file
          is ever uploaded to a server. Your images never leave your device and are never stored,
          logged, or transmitted. This makes the tool suitable for converting private photos,
          business assets, unreleased product images, and confidential design files. No account is
          required, there is no usage limit, and there is no watermark on any converted image. You
          can convert as many PNG files as you need, completely free and always private.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">More Free Image Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link
            href="/jpg-to-webp"
            className="block rounded-xl border border-border p-4 hover:border-primary transition-colors group"
          >
            <p className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors">
              JPG to WebP
            </p>
            <p className="text-xs text-text-muted mt-1">
              Convert JPG photos to WebP for 25–35% smaller file sizes on the web.
            </p>
          </Link>
          <Link
            href="/webp-to-png"
            className="block rounded-xl border border-border p-4 hover:border-primary transition-colors group"
          >
            <p className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors">
              WebP to PNG
            </p>
            <p className="text-xs text-text-muted mt-1">
              Convert WebP back to PNG for print, email, or older software compatibility.
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
              Reduce JPG, PNG, or WebP file size by up to 90% with one click.
            </p>
          </Link>
        </div>
      </div>

      <PngToWebpFAQSection />
    </section>
  )
}

function PngToWebpFAQSection() {
  const faqs = [
    {
      q: 'How much smaller is WebP compared to PNG?',
      a: 'WebP is typically 26% smaller than lossless PNG for equivalent image quality in lossless mode, and can be 60–80% smaller when using lossy WebP compression compared to a PNG of the same visual quality. For a typical 500KB PNG logo with transparency, the WebP equivalent is often 100–200KB — a substantial reduction that speeds up web page loading.',
    },
    {
      q: 'Does converting PNG to WebP lose quality?',
      a: 'This tool converts PNG to lossy WebP at a quality setting of 0.92 (equivalent to about quality 92). For most images, this produces a result that is visually indistinguishable from the original PNG at a significantly smaller file size. If you need a true lossless WebP, you would need a server-side conversion tool such as cwebp with the -lossless flag.',
    },
    {
      q: 'Does PNG to WebP conversion preserve transparency?',
      a: 'Yes. WebP supports full alpha channel transparency, the same as PNG. When you convert a PNG with a transparent background to WebP, the transparency is preserved in the output file exactly. Logos, icons, and product cutouts with transparent backgrounds all convert correctly from PNG to WebP.',
    },
    {
      q: 'Can I use WebP images on all websites?',
      a: 'WebP is supported by all modern browsers, covering over 95% of users globally as of 2025. If your audience includes users on very old browsers (Internet Explorer 11, Safari before 2020), you may need a PNG fallback. For most web projects, serving WebP without a fallback is safe and delivers meaningful performance benefits.',
    },
    {
      q: 'Can I open a WebP file in Photoshop?',
      a: 'Photoshop added native WebP support in version 23.2, released in 2022. If you are using Photoshop CC 2022 or later, you can open WebP files directly. Older versions including Photoshop CS6 and CC versions before 2022 cannot open WebP natively — convert WebP back to PNG using our WebP to PNG tool to open it in older software.',
    },
    {
      q: 'Can I convert PNG to WebP on mobile?',
      a: 'Yes. This tool works fully on iOS and Android mobile browsers. Tap the upload area to select a PNG from your device, and the converted WebP file downloads directly to your device. No app installation is required.',
    },
    {
      q: 'What is the difference between PNG and WebP for web images?',
      a: 'PNG is a lossless format with universal compatibility — it is supported everywhere including email clients, print services, and all software. WebP is a modern format optimized for web delivery: smaller file sizes at equivalent quality, with support for both lossless and lossy compression and full alpha transparency. For web delivery, WebP is the better choice; for anything else (print, email, desktop software), PNG is safer.',
    },
    {
      q: 'Are my PNG files uploaded to a server when converting to WebP?',
      a: 'No. All conversion happens entirely in your browser using the Canvas API. Your PNG files never leave your device and are never sent to any server. The conversion and download happen locally on your computer or phone, making the tool completely private with no data transmitted.',
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
