import Link from 'next/link'
import FAQItem from '@/components/tool/FAQItem'

export default function WebpToPngContentSection() {
  return (
    <section className="space-y-8 text-sm text-text-muted leading-relaxed">
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Why Convert WebP to PNG?</h2>
        <p>
          WebP is an excellent format for the web, but it is not universally supported by all
          software. Older image editors, print services, and some design tools cannot open WebP
          files. Converting WebP to PNG gives you a{' '}
          <span className="font-semibold text-text-main">
            lossless, universally compatible format
          </span>{' '}
          that works in every image editor, operating system, and workflow — from Photoshop to
          Microsoft Office to professional print labs.
        </p>
        <p>
          PNG also preserves the transparency (alpha channel) that a WebP file may contain, making
          it the correct choice when converting transparent WebP images for use in design tools,
          presentations, or documents.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">How to Convert WebP to PNG in 3 Steps</h2>
        <ol className="list-decimal list-inside space-y-2 ml-2">
          <li>
            <span className="font-semibold text-text-main">Upload your WebP file</span> — drag and
            drop, click to browse, or paste with Ctrl+V. Supports WebP files up to 20MB.
          </li>
          <li>
            <span className="font-semibold text-text-main">PNG is pre-selected</span> — the output
            format defaults to PNG on this page. Use the format selector to change if needed.
          </li>
          <li>
            <span className="font-semibold text-text-main">Download your PNG file</span> — the
            converted PNG downloads instantly, named{' '}
            <code className="text-xs bg-surface-alt px-1 rounded">converted-yourfile.png</code>.
          </li>
        </ol>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">WebP vs PNG — Format Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-xs">
            <thead>
              <tr className="bg-surface-alt">
                <th className="border border-border px-3 py-2 text-left font-semibold text-text-main">
                  Feature
                </th>
                <th className="border border-border px-3 py-2 text-left font-semibold text-text-main">
                  WebP
                </th>
                <th className="border border-border px-3 py-2 text-left font-semibold text-text-main">
                  PNG
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border px-3 py-2 font-semibold">File Size</td>
                <td className="border border-border px-3 py-2 text-green-600">Smaller (lossy)</td>
                <td className="border border-border px-3 py-2">Larger (lossless)</td>
              </tr>
              <tr className="bg-surface-alt">
                <td className="border border-border px-3 py-2 font-semibold">Transparency</td>
                <td className="border border-border px-3 py-2 text-green-600">Yes</td>
                <td className="border border-border px-3 py-2 text-green-600">Yes</td>
              </tr>
              <tr>
                <td className="border border-border px-3 py-2 font-semibold">Browser Support</td>
                <td className="border border-border px-3 py-2 text-green-600">95%+ modern</td>
                <td className="border border-border px-3 py-2 text-green-600">Universal</td>
              </tr>
              <tr className="bg-surface-alt">
                <td className="border border-border px-3 py-2 font-semibold">Image Editors</td>
                <td className="border border-border px-3 py-2 text-amber-600">
                  Newer versions only
                </td>
                <td className="border border-border px-3 py-2 text-green-600">Universal</td>
              </tr>
              <tr>
                <td className="border border-border px-3 py-2 font-semibold">Print Services</td>
                <td className="border border-border px-3 py-2 text-red-500">Not supported</td>
                <td className="border border-border px-3 py-2 text-green-600">Supported</td>
              </tr>
              <tr className="bg-surface-alt">
                <td className="border border-border px-3 py-2 font-semibold">Office / Documents</td>
                <td className="border border-border px-3 py-2 text-amber-600">Limited</td>
                <td className="border border-border px-3 py-2 text-green-600">Full support</td>
              </tr>
              <tr>
                <td className="border border-border px-3 py-2 font-semibold">Best For</td>
                <td className="border border-border px-3 py-2">Web performance</td>
                <td className="border border-border px-3 py-2">Editing, print, compatibility</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Common Reasons to Convert WebP to PNG</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="rounded-xl border border-border p-4 bg-surface-alt">
            <p className="font-semibold text-text-main text-sm">Editing in Photoshop</p>
            <p className="text-xs mt-1">
              Photoshop CS6 and earlier cannot open WebP. Export to PNG for full compatibility with
              older versions and plugins.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 bg-surface-alt">
            <p className="font-semibold text-text-main text-sm">Presentations and Documents</p>
            <p className="text-xs mt-1">
              Microsoft Office (Word, PowerPoint) and Google Slides have limited WebP support. PNG
              inserts reliably in all versions.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 bg-surface-alt">
            <p className="font-semibold text-text-main text-sm">Printing</p>
            <p className="text-xs mt-1">
              Print services require JPG, PNG, or TIFF. WebP is not accepted by most professional
              print labs or desktop printers.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 bg-surface-alt">
            <p className="font-semibold text-text-main text-sm">Preserving Transparency</p>
            <p className="text-xs mt-1">
              If your WebP has a transparent background, converting to PNG preserves that
              transparency — unlike converting to JPG, which adds a white background.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How to Open a WebP File Without Converting
        </h2>
        <p>
          If you just need to view a WebP file without converting it, all modern browsers support
          WebP natively — drag the file into Chrome, Firefox, Edge, or Safari and it will display
          correctly. On Windows 10 (version 1809 and later), the Photos app opens WebP files
          directly. On macOS, Preview supports WebP from macOS Ventura (2022) onward. If you are
          using an older system where WebP does not open, converting to PNG is the most reliable
          solution for broad compatibility. PNG opens in every image viewer, editor, and operating
          system without requiring any plugin or update. For sharing with colleagues who may be on
          older software, PNG is the safest choice — it works everywhere from Windows XP to the
          latest macOS, and inserts correctly in all versions of Microsoft Office, LibreOffice, and
          Adobe Creative Suite.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Does Converting WebP to PNG Lose Quality?
        </h2>
        <p>
          The conversion from WebP to PNG is{' '}
          <span className="font-semibold text-text-main">lossless from the PNG side</span>. PNG
          stores every pixel exactly as it reads it from the WebP. However, if the original WebP was
          created with lossy compression (most WebP images from the web are), those compression
          artifacts are already baked in and will appear in the PNG output. Converting WebP to PNG
          does not introduce any new quality loss — it just packages the existing pixels into a
          lossless container.
        </p>
        <p>
          The resulting PNG will be larger than the WebP source because PNG does not use lossy
          compression. This is expected and normal.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Why Is the PNG Larger Than the WebP?</h2>
        <p>
          PNG uses lossless compression — it stores every pixel without discarding any data. WebP
          uses lossy compression (similar to JPG) to achieve smaller file sizes by discarding
          imperceptible detail. When you convert a lossy WebP to PNG, the PNG must store all pixel
          data faithfully, resulting in a much larger file.
        </p>
        <p>
          A WebP that is 200KB may become a 1–3MB PNG. If file size matters, consider converting to
          JPG instead of PNG — JPG uses lossy compression and will be significantly smaller than PNG
          while maintaining similar visual quality to the WebP.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Privacy — No Server Upload</h2>
        <p>
          All conversion happens entirely in your browser using the Canvas API. No WebP file is ever
          uploaded to a server. Your images never leave your device and are never stored, logged, or
          transmitted. Suitable for converting private photos, logos with transparent backgrounds,
          and confidential business images. There is no account required, no file size tracking, and
          no usage limit — every conversion is local, instant, and completely private. You can
          convert as many images as you need without any restrictions, watermarks, or sign-up
          required.
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
              Convert WebP to smaller JPG for email and universal sharing.
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

      <WebpToPngFAQSection />
    </section>
  )
}

function WebpToPngFAQSection() {
  const faqs = [
    {
      q: 'Does converting WebP to PNG lose quality?',
      a: 'Converting WebP to PNG does not introduce new quality loss — PNG stores pixels losslessly. However, if the original WebP used lossy compression (most WebP files do), those artifacts are already present and will appear in the PNG. The PNG is a faithful copy of what the WebP displays.',
    },
    {
      q: 'Why is the PNG file larger than the WebP?',
      a: 'PNG uses lossless compression and stores every pixel without discarding data. WebP uses lossy compression (like JPG) to achieve small file sizes. Converting lossy WebP to lossless PNG naturally produces a larger file. A 200KB WebP may become a 1–3MB PNG. If file size matters, convert to JPG instead.',
    },
    {
      q: 'Does WebP to PNG preserve transparency?',
      a: 'Yes. If the original WebP has a transparent background (alpha channel), the PNG conversion preserves that transparency exactly. PNG fully supports alpha channels. This is one of the key reasons to choose PNG over JPG when converting a transparent WebP.',
    },
    {
      q: 'Can I open WebP files in Photoshop?',
      a: 'Photoshop added native WebP support in version 23.2 (released 2022). Older versions including Photoshop CS6 and CC versions before 2022 cannot open WebP natively. Converting to PNG first allows you to open the file in any Photoshop version.',
    },
    {
      q: 'Can I insert WebP images in Microsoft Word or PowerPoint?',
      a: 'Microsoft Office 2019 and earlier do not support WebP. Microsoft 365 (subscription) added WebP support in 2023, but compatibility varies. Converting WebP to PNG guarantees the image displays correctly in all Office versions, including older ones.',
    },
    {
      q: 'Should I convert WebP to PNG or JPG?',
      a: 'Convert to PNG if: you need to preserve transparency, you will edit the image further, or you need lossless quality. Convert to JPG if: file size is important, the image is a photograph without transparency, or you need the smallest file. JPG will be significantly smaller than PNG for photos.',
    },
    {
      q: 'Can I convert WebP to PNG on my phone?',
      a: 'Yes. This tool works fully on iOS and Android mobile browsers. Tap to select a WebP file from your device, and the PNG downloads directly to your device. No app installation required.',
    },
    {
      q: 'Are my WebP files uploaded to a server during conversion?',
      a: 'No. All conversion happens entirely in your browser using the Canvas API. Your WebP files never leave your device and are never sent to any server. The conversion and download happen locally on your computer or phone.',
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
