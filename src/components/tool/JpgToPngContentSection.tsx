import Link from 'next/link'
import FAQItem from './FAQItem'

export default function JpgToPngContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to converting JPG to PNG"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Why Convert JPG to PNG?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          JPG and PNG serve different purposes, and knowing when to switch formats can save
          significant time and quality. JPG uses lossy compression — ideal for photographs — but it
          does not support transparency and introduces compression artifacts that accumulate with
          each re-save. PNG uses lossless compression, preserving every pixel exactly and supporting
          full alpha channel transparency. Converting a JPG to PNG is the right choice when you need
          to add a transparent background, overlay the image on a colored surface, or edit and
          re-save the image multiple times without quality degradation.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          Common use cases include: converting a product photo to PNG so it can be placed on a
          website with a non-white background, converting a logo from JPG to PNG to preserve
          transparency for branding materials, or converting a screenshot to PNG to maintain sharp
          text and crisp edges. PNG is also preferred for images that will be processed further —
          applying filters, resizing multiple times, or compositing with other layers — because
          lossless compression means no quality is lost between edits.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How to Convert JPG to PNG — 3 Simple Steps
        </h2>
        <ol className="space-y-4">
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              1
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Upload your JPG file</p>
              <p className="text-sm text-text-muted leading-relaxed">
                Click the upload area, drag and drop your JPG or JPEG file, or paste from clipboard
                (Ctrl+V). Files up to 20MB are accepted. Your image is processed entirely in your
                browser — nothing is sent to any server.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              2
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">
                Select PNG as the output format
              </p>
              <p className="text-sm text-text-muted leading-relaxed">
                PNG is pre-selected as the output format on this page. The converter reads your JPG
                and re-encodes it as a lossless PNG. You can also switch to WebP in the format
                selector if you need an even smaller file with transparency support.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              3
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Download your PNG file</p>
              <p className="text-sm text-text-muted leading-relaxed">
                The converted PNG downloads directly to your device. The file is named with a
                &quot;converted-&quot; prefix and the .png extension for easy identification.
                Conversion is instant — no waiting for server processing.
              </p>
            </div>
          </li>
        </ol>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Will Converting JPG to PNG Improve Quality?
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Converting a JPG to PNG will not improve quality — but it will stop further quality loss.
          JPG compression artifacts that already exist in the original file are preserved exactly in
          the PNG output. PNG stores pixel data losslessly, so the artifacts are captured as-is
          rather than made worse. The benefit is that any subsequent editing or re-saving of the PNG
          file will not add new compression artifacts — unlike re-saving a JPG, which loses a small
          amount of quality each time.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          For this reason, designers and photographers often convert working copies of images from
          JPG to PNG before editing. Once editing is complete, they export to JPG or WebP for the
          final output. This workflow preserves maximum quality throughout the editing process.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">JPG → PNG: what changes</p>
            <p className="text-xs text-text-muted leading-relaxed">
              File size increases (PNG is lossless and larger for photos). No new artifacts added.
              Existing artifacts preserved exactly. Transparency is NOT added — JPG has no alpha
              channel data to carry over.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">JPG → PNG: what stays the same</p>
            <p className="text-xs text-text-muted leading-relaxed">
              All pixel colors and brightness values are preserved exactly. Image dimensions are
              unchanged. The visual appearance at normal viewing distance is identical to the
              original JPG.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          JPG vs PNG: Which Format Should You Use?
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          The choice between JPG and PNG depends on the image content and how it will be used:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="rounded-xl border border-border p-4 space-y-2">
            <h3 className="font-semibold text-text-main text-sm">Use JPG when:</h3>
            <ul className="space-y-1 text-xs text-text-muted">
              <li className="flex gap-1.5">
                <span className="text-primary shrink-0">→</span> Photograph with complex colors and
                gradients
              </li>
              <li className="flex gap-1.5">
                <span className="text-primary shrink-0">→</span> File size is critical (email, web,
                social media)
              </li>
              <li className="flex gap-1.5">
                <span className="text-primary shrink-0">→</span> No transparency needed
              </li>
              <li className="flex gap-1.5">
                <span className="text-primary shrink-0">→</span> Final output, not a working file
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-2">
            <h3 className="font-semibold text-text-main text-sm">Use PNG when:</h3>
            <ul className="space-y-1 text-xs text-text-muted">
              <li className="flex gap-1.5">
                <span className="text-primary shrink-0">→</span> Transparency or alpha channel
                required
              </li>
              <li className="flex gap-1.5">
                <span className="text-primary shrink-0">→</span> Logo, icon, or graphic with sharp
                edges
              </li>
              <li className="flex gap-1.5">
                <span className="text-primary shrink-0">→</span> Text or diagram that must stay
                crisp
              </li>
              <li className="flex gap-1.5">
                <span className="text-primary shrink-0">→</span> Working/editing file that will be
                re-saved
              </li>
            </ul>
          </div>
        </div>
        <p className="text-text-muted text-sm leading-relaxed">
          For modern web use where you need transparency and small file sizes, consider{' '}
          <Link href="/convert-image" className="text-primary underline">
            converting to WebP
          </Link>{' '}
          instead — WebP supports transparency like PNG but produces files 25–35% smaller.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Why Is the PNG File Larger Than the Original JPG?
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          PNG files are almost always larger than equivalent JPG files for photographs — this is
          expected and normal. A JPG photograph achieves small file sizes by discarding image data
          that is difficult for the human eye to detect. PNG stores every pixel exactly as-is,
          making it inherently larger for complex photographic content. A 500KB JPG photo might
          become a 3–8MB PNG file after conversion. This trade-off is acceptable when transparency
          or lossless quality is required, but PNG is not the right format for purely photographic
          content where file size matters.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          If you need a smaller file with transparency, use WebP — it supports alpha channel
          transparency while producing files significantly smaller than PNG. If you need a smaller
          file without transparency, use{' '}
          <Link href="/compress-image" className="text-primary underline">
            image compression
          </Link>{' '}
          to reduce the PNG file size after conversion.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Privacy — Your Images Never Leave Your Device
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          This JPG to PNG converter runs entirely in your browser using the HTML5 Canvas API. When
          you upload a JPG file, it is loaded into browser memory and converted locally — no data is
          ever sent to any server. Your images are never stored, analyzed, or shared. Close the
          browser tab and the image data is permanently gone.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          For details on data handling, see our{' '}
          <Link href="/privacy-policy" className="text-primary underline">
            Privacy Policy
          </Link>{' '}
          and{' '}
          <Link href="/terms" className="text-primary underline">
            Terms of Service
          </Link>
          .
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">More Free Image Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link
            href="/png-to-jpg"
            className="block rounded-xl border border-border p-4 hover:border-primary transition-colors group"
          >
            <p className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors">
              PNG to JPG
            </p>
            <p className="text-xs text-text-muted mt-1">
              Convert PNG to JPG for smaller file sizes when transparency is not needed.
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
              Reduce PNG or JPG file size by up to 90% after conversion.
            </p>
          </Link>
          <Link
            href="/resize-image"
            className="block rounded-xl border border-border p-4 hover:border-primary transition-colors group"
          >
            <p className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors">
              Resize Image
            </p>
            <p className="text-xs text-text-muted mt-1">
              Change image dimensions to any size while preserving quality.
            </p>
          </Link>
        </div>
      </div>

      <JpgToPngFAQSection />
    </section>
  )
}

function JpgToPngFAQSection() {
  const faqs = [
    {
      q: 'Does converting JPG to PNG improve image quality?',
      a: 'No — converting JPG to PNG does not improve quality. Any compression artifacts already present in the JPG are preserved exactly in the PNG. The benefit is that PNG is lossless, so no additional quality is lost. It stops further degradation rather than restoring lost detail.',
    },
    {
      q: 'Will the PNG file have a transparent background after conversion?',
      a: 'No. JPG files do not contain transparency data. When you convert a JPG to PNG, the result is a PNG with a solid (opaque) background matching the original JPG. To remove the background and make it transparent, you would need a background removal tool after conversion.',
    },
    {
      q: 'Why is the converted PNG file so much larger than the original JPG?',
      a: 'PNG stores every pixel losslessly, while JPG discards data to achieve small file sizes. A photograph that compresses to 500KB as JPG may become 3–8MB as PNG. This is normal — PNG is not designed for photographic compression. If you need a smaller file, use WebP (supports transparency) or compress the PNG after conversion.',
    },
    {
      q: 'Can I convert JPEG to PNG? Is JPEG the same as JPG?',
      a: 'Yes — JPEG and JPG are the same format. The .jpeg extension is the full name; .jpg is the shortened version that appeared due to early Windows file extension limits. This tool accepts both .jpg and .jpeg files and converts them to PNG identically.',
    },
    {
      q: 'What is the best use case for converting JPG to PNG?',
      a: 'The most common reason is when you need transparency — PNG supports alpha channel transparency, JPG does not. Other reasons: editing an image multiple times without quality loss, working with logos or graphics that need sharp edges, or preparing an image for compositing in a design tool.',
    },
    {
      q: 'Is the JPG to PNG conversion lossless?',
      a: 'The conversion process itself is lossless — PNG stores the pixel data from the JPG exactly as-is with no additional quality loss. However, the original JPG already contains some quality loss from its own compression. The PNG output is a perfect copy of what the JPG looks like, not of the original source image.',
    },
    {
      q: 'Can I convert JPG to PNG on my phone?',
      a: 'Yes. This tool works fully on iOS and Android mobile browsers. Open your browser, visit this page, tap the upload area to select a photo from your camera roll, and download the converted PNG — no app installation required.',
    },
    {
      q: 'Are my JPG files uploaded to a server during conversion?',
      a: 'No. All conversion happens entirely in your browser using the Canvas API. Your files never leave your device and are never sent to any server. The tool works completely offline once the page is loaded.',
    },
  ]

  return (
    <div className="space-y-3">
      <h2 className="text-xl font-bold text-text-main">Frequently Asked Questions</h2>
      <dl className="space-y-3">
        {faqs.map((faq, i) => (
          <FAQItem key={i} question={faq.q} answer={faq.a} />
        ))}
      </dl>
    </div>
  )
}
