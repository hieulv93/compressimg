import Link from 'next/link'
import FAQItem from './FAQItem'

export default function PngToJpgContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to converting PNG to JPG"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Why Convert PNG to JPG?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          PNG files are lossless and excellent for graphics, logos, and images with transparency —
          but they are significantly larger than JPG files for photographic content. A PNG
          photograph can be 5–10x larger than the same image saved as JPG at high quality. For
          websites, email attachments, social media uploads, and any scenario where file size
          matters, converting PNG to JPG dramatically reduces the file size while keeping the image
          visually identical at normal viewing distances.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          The most common scenario is a PNG photo that was saved in the wrong format — for example,
          a screenshot of a photograph, or an image exported from a design tool as PNG by default.
          Converting it to JPG at quality 80–90 typically reduces the file size by 70–85% with no
          perceptible quality difference on screen. Other use cases include reducing storage space
          in photo libraries, preparing images for upload to platforms that prefer JPG, and meeting
          file size requirements for email attachments or web forms.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How to Convert PNG to JPG — 3 Simple Steps
        </h2>
        <ol className="space-y-4">
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              1
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Upload your PNG file</p>
              <p className="text-sm text-text-muted leading-relaxed">
                Click the upload area, drag and drop your PNG file, or paste from clipboard
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
              <p className="text-sm font-semibold text-text-main">JPG is pre-selected as output</p>
              <p className="text-sm text-text-muted leading-relaxed">
                JPG is pre-selected as the output format on this page. Transparent areas in the PNG
                are automatically filled with a white background in the JPG output — JPG does not
                support transparency. You can also switch to WebP in the format selector for a
                smaller file that preserves transparency.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              3
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Download your JPG file</p>
              <p className="text-sm text-text-muted leading-relaxed">
                The converted JPG downloads directly to your device with a &quot;converted-&quot;
                prefix and .jpg extension. For even smaller file sizes, use our{' '}
                <Link href="/compress-image" className="text-primary underline">
                  image compressor
                </Link>{' '}
                on the resulting JPG.
              </p>
            </div>
          </li>
        </ol>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          What Happens to Transparency When Converting PNG to JPG?
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          JPG does not support transparency. When you convert a PNG with transparent areas to JPG,
          all transparent pixels are replaced with a white background. This is the standard behavior
          across all image conversion tools. If your PNG has a transparent background and you need
          to preserve that transparency after conversion, use WebP instead — WebP supports alpha
          channel transparency and produces files significantly smaller than PNG.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">PNG with transparency → JPG</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Transparent areas become white. Good for images that will be displayed on white
              backgrounds. Not suitable for logos or graphics that need to blend into colored
              backgrounds.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">PNG with transparency → WebP</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Transparency is fully preserved. File size is 25–35% smaller than PNG. Use WebP when
              you need transparency but want a smaller file than PNG provides.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">How Much Smaller Will the JPG Be?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          The file size reduction from PNG to JPG varies depending on the image content:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Photographs — 70–85% smaller</p>
            <p className="text-xs text-text-muted leading-relaxed">
              A PNG photo of 4MB typically becomes 400–800KB as JPG at quality 85. The difference is
              dramatic because JPG is specifically optimized for photographic content with complex
              color gradients.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Screenshots — 50–75% smaller</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Screenshots often contain large areas of solid color and text. JPG compression is less
              efficient here, but still produces significantly smaller files than PNG.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Logos and icons — 30–60% smaller</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Simple graphics with few colors may only reduce modestly as JPG, and JPG compression
              can introduce visible artifacts around sharp edges and text. PNG or WebP are better
              formats for logos.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Illustrations — 60–80% smaller</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Digital artwork and illustrations with complex shading convert well to JPG. Check the
              output for artifacts around high-contrast areas — if visible, use a higher quality
              setting.
            </p>
          </div>
        </div>
        <p className="text-text-muted text-sm leading-relaxed">
          For even smaller JPG files after conversion, run the output through our{' '}
          <Link href="/compress-jpg-online" className="text-primary underline">
            JPG compressor
          </Link>{' '}
          to reduce file size by an additional 40–60% with an adjustable quality slider.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">PNG vs JPG: When to Use Each</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="rounded-xl border border-border p-4 space-y-2">
            <h3 className="font-semibold text-text-main text-sm">Use PNG when:</h3>
            <ul className="space-y-1 text-xs text-text-muted">
              <li className="flex gap-1.5">
                <span className="text-primary shrink-0">→</span> Transparency is required (logos,
                icons)
              </li>
              <li className="flex gap-1.5">
                <span className="text-primary shrink-0">→</span> Image contains sharp text or fine
                lines
              </li>
              <li className="flex gap-1.5">
                <span className="text-primary shrink-0">→</span> Working/editing file (no generation
                loss)
              </li>
              <li className="flex gap-1.5">
                <span className="text-primary shrink-0">→</span> Screenshots with UI elements
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-2">
            <h3 className="font-semibold text-text-main text-sm">Use JPG when:</h3>
            <ul className="space-y-1 text-xs text-text-muted">
              <li className="flex gap-1.5">
                <span className="text-primary shrink-0">→</span> Photograph or complex color image
              </li>
              <li className="flex gap-1.5">
                <span className="text-primary shrink-0">→</span> File size is critical
              </li>
              <li className="flex gap-1.5">
                <span className="text-primary shrink-0">→</span> No transparency needed
              </li>
              <li className="flex gap-1.5">
                <span className="text-primary shrink-0">→</span> Email, web, or social media upload
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Privacy — Your Images Never Leave Your Device
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          This PNG to JPG converter runs entirely in your browser using the HTML5 Canvas API. When
          you upload a PNG file, it is loaded into browser memory and converted locally — nothing is
          sent to any server. Your images are never stored, analyzed, or shared. Close the tab and
          the image data is permanently gone.
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
            href="/compress-jpg-online"
            className="block rounded-xl border border-border p-4 hover:border-primary transition-colors group"
          >
            <p className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors">
              Compress JPG
            </p>
            <p className="text-xs text-text-muted mt-1">
              Reduce JPG file size further after conversion with quality control.
            </p>
          </Link>
          <Link
            href="/webp-to-jpg"
            className="block rounded-xl border border-border p-4 hover:border-primary transition-colors group"
          >
            <p className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors">
              WebP to JPG
            </p>
            <p className="text-xs text-text-muted mt-1">
              Convert WebP to universally compatible JPG for any platform.
            </p>
          </Link>
        </div>
      </div>

      <PngToJpgFAQSection />
    </section>
  )
}

function PngToJpgFAQSection() {
  const faqs = [
    {
      q: 'Will converting PNG to JPG reduce quality?',
      a: 'Converting PNG to JPG uses lossy compression, so some image data is discarded. At high quality settings (85–95), the difference is virtually invisible on screen. The conversion produces a smaller file at a minor, imperceptible quality cost for photographs. For logos, icons, or text-heavy images, the compression artifacts may be more noticeable around sharp edges.',
    },
    {
      q: 'What happens to transparent areas when converting PNG to JPG?',
      a: 'JPG does not support transparency. All transparent pixels in your PNG are replaced with a white background in the JPG output. If you need to preserve transparency, convert to WebP instead — WebP supports alpha channel transparency and produces files smaller than PNG.',
    },
    {
      q: 'How much smaller will my file be after converting PNG to JPG?',
      a: 'For photographs saved as PNG, the JPG is typically 70–85% smaller. A 4MB PNG photo commonly becomes 400–800KB as JPG at quality 85. For screenshots and graphics, the reduction is 50–75%. For logos with few colors and sharp edges, the reduction is less — and JPG artifacts may be visible.',
    },
    {
      q: 'Is it safe to convert PNG to JPG for logos and icons?',
      a: 'Generally not recommended. JPG compression introduces artifacts (blurry edges, color banding) around sharp edges and text, which are common in logos and icons. For logos that do not require transparency, WebP is a better choice — it produces smaller files than PNG while keeping sharp edges clean.',
    },
    {
      q: 'Can I convert PNG to JPEG? Is JPEG the same as JPG?',
      a: 'Yes — JPEG and JPG are identical formats. JPEG is the full name (Joint Photographic Experts Group); JPG is the shortened Windows extension. This tool outputs a standard JPG file that can be opened by any application that reads JPEG images.',
    },
    {
      q: 'How do I convert multiple PNG files to JPG at once?',
      a: 'This tool converts one image at a time. For each file: upload, wait for conversion, download. For large batches, consider using desktop software like ImageMagick or GIMP with batch export. This tool is best for individual file conversions where privacy and no-install convenience are priorities.',
    },
    {
      q: 'Can I convert PNG to JPG on an iPhone or Android phone?',
      a: 'Yes. This tool works fully on iOS Safari and Android Chrome. Tap the upload area to select a PNG from your camera roll or files, and download the converted JPG directly to your device — no app required.',
    },
    {
      q: 'Are my PNG files uploaded to a server during conversion?',
      a: 'No. All conversion happens entirely in your browser using the Canvas API. Your files never leave your device and are never sent to any server. This makes the tool completely private — suitable for sensitive documents, personal photos, and business images.',
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
