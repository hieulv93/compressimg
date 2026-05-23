import Link from 'next/link'
import FAQItem from './FAQItem'

export default function ConvertContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to image format conversion"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">What Is Image Format Conversion?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Image format conversion is the process of changing an image from one file type to another
          — for example, converting a JPG to PNG, a PNG to WebP, or a WebP to JPG. Each image format
          stores pixel data differently, which affects file size, image quality, and whether
          features like transparency are supported. Converting between formats lets you choose the
          best format for your specific use case without re-shooting or re-designing the image.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          Our online image converter works entirely in your browser using the HTML5 Canvas API — no
          server upload, no waiting, no file size limits imposed by a backend. You can also{' '}
          <Link href="/compress-image" className="text-primary underline">
            compress the image after converting
          </Link>{' '}
          to further reduce the file size while keeping the same format.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How to Convert Images Online — 3 Simple Steps
        </h2>
        <ol className="space-y-4">
          <li id="step-1-upload" className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              1
            </span>
            <div>
              <h3 className="text-sm font-semibold text-text-main">
                Upload your image (JPG, PNG, WebP or HEIC)
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Click the upload area, drag and drop your file, or paste from clipboard (Ctrl+V).
                Supported formats: JPG, PNG, WebP and HEIC — up to 20 MB. HEIC photos from iPhone
                are automatically converted to JPEG before processing.
              </p>
            </div>
          </li>
          <li id="step-2-format" className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              2
            </span>
            <div>
              <h3 className="text-sm font-semibold text-text-main">
                Choose the output format (JPG, PNG or WebP)
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Select JPG, PNG, or WebP as the target format. The conversion starts automatically.
                You can switch formats at any time to compare results without re-uploading.
              </p>
            </div>
          </li>
          <li id="step-3-download" className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              3
            </span>
            <div>
              <h3 className="text-sm font-semibold text-text-main">Download the converted file</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Conversion happens instantly in your browser. Click Download to save the result. The
                file is named with a &ldquo;converted-&rdquo; prefix so you can easily tell it apart
                from the original.
              </p>
            </div>
          </li>
        </ol>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          JPG vs PNG vs WebP — Which Image Format Should You Use?
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          The three most common image formats each have a different purpose. Choosing the right one
          saves file size and preserves quality where it matters most.
        </p>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-surface">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">Format</th>
                <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">
                  Best for
                </th>
                <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">
                  Transparency
                </th>
                <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">
                  File size
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-text-muted text-xs">
              {[
                { format: 'JPG', best: 'Photos, social media', trans: '✗ No', size: 'Small' },
                {
                  format: 'PNG',
                  best: 'Logos, graphics, screenshots',
                  trans: '✓ Yes',
                  size: 'Medium–large',
                },
                {
                  format: 'WebP',
                  best: 'Web images, any use case',
                  trans: '✓ Yes',
                  size: 'Smallest',
                },
              ].map((r) => (
                <tr key={r.format}>
                  <td className="px-4 py-3 font-semibold text-text-main">{r.format}</td>
                  <td className="px-4 py-3">{r.best}</td>
                  <td className="px-4 py-3">{r.trans}</td>
                  <td className="px-4 py-3">{r.size}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-bold text-text-main">When to Convert Between Image Formats</h2>

        <div className="space-y-2">
          <h3 className="text-base font-semibold text-text-main">When to Convert to JPG</h3>
          <p className="text-text-muted text-sm leading-relaxed">
            JPG is the most universally supported image format across all devices, browsers, and
            platforms. Convert to JPG when you need the smallest possible file size for photos and
            the image does not require a transparent background. JPG uses lossy compression —
            meaning it discards some pixel data to achieve smaller sizes — but at quality settings
            of 80 or above, the quality loss is invisible to the human eye.
          </p>
          <p className="text-text-muted text-sm leading-relaxed">
            Common use cases: uploading photos to social media (Instagram, Facebook, Twitter),
            sending images by email, submitting photos to websites that require JPG specifically, or
            reducing the file size of PNG photos that don&apos;t need transparency. If you want to
            reduce file size further after converting,{' '}
            <Link href="/compress-image" className="text-primary underline">
              compress the image to squeeze out an additional 40–80% reduction
            </Link>
            .
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-semibold text-text-main">When to Convert to PNG</h3>
          <p className="text-text-muted text-sm leading-relaxed">
            PNG is the format of choice when you need lossless quality and transparency support.
            Unlike JPG, PNG stores every pixel exactly as it is without discarding any data. This
            makes it ideal for logos, icons, illustrations, screenshots with text, and any image
            where sharp edges and exact colors matter.
          </p>
          <p className="text-text-muted text-sm leading-relaxed">
            Convert to PNG when the image has a transparent or semi-transparent background that
            needs to be preserved, when the image contains text that must stay crisp, or when you
            need to edit the image further without introducing compression artifacts. Note that PNG
            files are typically larger than JPG — if file size is a concern, consider using WebP
            instead, which offers lossless compression at a smaller size.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-semibold text-text-main">When to Convert to WebP</h3>
          <p className="text-text-muted text-sm leading-relaxed">
            WebP is a modern image format developed by Google that produces significantly smaller
            files than both JPG and PNG at comparable quality. It supports transparency (like PNG)
            and lossy compression (like JPG), making it the most versatile format for web use. WebP
            images are typically 25–35% smaller than equivalent JPG files and up to 80% smaller than
            PNG files.
          </p>
          <p className="text-text-muted text-sm leading-relaxed">
            Convert to WebP when you are optimizing images for a website or web application. All
            modern browsers — Chrome, Firefox, Edge, and Safari 16 and later — support WebP
            natively. Converting your site&apos;s images to WebP can meaningfully improve page load
            speed and Core Web Vitals scores, which Google uses as a ranking factor.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-semibold text-text-main">
            When to Convert HEIC to JPG (from iPhone)
          </h3>
          <p className="text-text-muted text-sm leading-relaxed">
            iPhones capture photos in HEIC format by default since iOS 11. HEIC files are roughly
            50% smaller than equivalent JPEGs at similar quality — which is why Apple uses it. The
            problem is compatibility: Windows, Android, most web uploaders, and many desktop apps do
            not support HEIC natively.
          </p>
          <p className="text-text-muted text-sm leading-relaxed">
            Upload your HEIC file here and select JPG as the output — the converter handles the HEIC
            decoding automatically and outputs a standard JPEG that works everywhere. You can also
            use the dedicated{' '}
            <Link href="/heic-to-jpg/" className="text-primary underline">
              HEIC to JPG converter
            </Link>{' '}
            for batch HEIC conversion without resizing.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-semibold text-text-main">
            Converting Between Lossy and Lossless Formats
          </h3>
          <p className="text-text-muted text-sm leading-relaxed">
            Converting from a lossless format (PNG) to a lossy format (JPG or WebP) always encodes
            the image with some compression — the output is slightly different at the pixel level,
            though at quality 92 the change is invisible to the human eye. Converting from a lossy
            format (JPG) to a lossless format (PNG or WebP lossless) does not recover any quality
            already lost — it simply re-encodes the existing compressed pixels into a new container.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-text-main">
          Image Quality, File Size and Transparency Explained
        </h2>

        <div className="space-y-2">
          <h3 className="text-base font-semibold text-text-main">
            Does Converting Change Image Quality?
          </h3>
          <p className="text-text-muted text-sm leading-relaxed">
            It depends on the direction of the conversion. Converting from a lossless format (PNG)
            to a lossy format (JPG or WebP) will encode the image with some compression, which can
            introduce very subtle quality changes at the pixel level. At the quality setting used by
            our online converter (92 out of 100), the visual result is virtually indistinguishable
            from the original.
          </p>
          <p className="text-text-muted text-sm leading-relaxed">
            Converting from JPG to PNG does <em>not</em> recover quality lost in the original JPG
            compression — it simply re-encodes the existing pixels into a lossless container. For
            the highest possible quality, always start from the highest-quality source file
            available. Converting between formats does not change image dimensions — use the{' '}
            <Link href="/resize-image" className="text-primary underline">
              image resizer
            </Link>{' '}
            if you also need to change the pixel size.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-semibold text-text-main">
            Why Is My PNG Larger After Converting From JPG?
          </h3>
          <p className="text-text-muted text-sm leading-relaxed">
            This is expected behavior. JPG uses lossy compression to discard data and store only an
            approximation of the original pixels. PNG, by contrast, stores every pixel exactly using
            a lossless algorithm — which typically produces a larger file. When you convert a JPG to
            PNG, you are re-encoding the existing (already-compressed) JPG pixels into the lossless
            PNG container.
          </p>
          <p className="text-text-muted text-sm leading-relaxed">
            If you need a smaller file, converting JPG to WebP is a better choice — WebP can match
            or beat JPG quality at a smaller file size. Alternatively, convert to JPG and then{' '}
            <Link href="/compress-image" className="text-primary underline">
              run it through the image compressor
            </Link>{' '}
            to reduce file size further.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-semibold text-text-main">
            What Happens to Transparency When Converting to JPG?
          </h3>
          <p className="text-text-muted text-sm leading-relaxed">
            JPG does not support transparency — it can only store fully opaque pixels. When you
            convert a PNG or WebP image that has a transparent background to JPG, the transparent
            areas are filled with a solid color. Our converter fills transparent areas with white,
            which is the most common and expected result for most use cases such as product photos,
            logos on light backgrounds, and documents.
          </p>
          <p className="text-text-muted text-sm leading-relaxed">
            If you need to preserve transparency, convert to PNG or WebP instead of JPG — both
            formats support full alpha channel transparency. A warning message appears automatically
            when our tool detects that you are about to convert a transparent image to JPG.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-semibold text-text-main">
            How Much Smaller Is WebP Compared to JPG and PNG?
          </h3>
          <p className="text-text-muted text-sm leading-relaxed">
            WebP achieves significant file size reductions over both JPG and PNG at equivalent
            visual quality. Here are typical savings based on real-world image conversion:
          </p>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead className="bg-surface">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">
                    Conversion
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">
                    Typical size reduction
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">
                    Example
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-text-muted text-xs">
                {[
                  { conv: 'JPG → WebP', reduction: '25–35% smaller', example: '500 KB → ~330 KB' },
                  { conv: 'PNG → WebP', reduction: '60–80% smaller', example: '2 MB → ~500 KB' },
                  { conv: 'PNG → JPG', reduction: '50–70% smaller', example: '2 MB → ~600 KB' },
                  { conv: 'JPG → PNG', reduction: '2–4× larger', example: '500 KB → ~1.5 MB' },
                ].map(({ conv, reduction, example }) => (
                  <tr key={conv}>
                    <td className="px-4 py-3 font-mono font-medium text-text-main">{conv}</td>
                    <td className="px-4 py-3">{reduction}</td>
                    <td className="px-4 py-3">{example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-muted italic">
            Actual savings vary by image content. Photos with complex detail compress better than
            flat graphics. Run any image through this converter to see the exact output size.
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Privacy — Your Images Never Leave Your Device
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          All format conversion happens entirely in your browser using the HTML5 Canvas API. Your
          images are never uploaded to a server, never stored anywhere, and never seen by anyone
          else. There are no accounts, no watermarks, and no usage limits. When you close the
          browser tab, the image data is gone — no trace remains on any server. This makes our tool
          safe for converting sensitive images such as identification documents, medical photos,
          contracts, and personal photographs.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          For full details, see our{' '}
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
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            {
              href: '/compress-image',
              label: 'Compress Image',
              desc: 'Reduce image file size up to 90% without visible quality loss.',
            },
            {
              href: '/resize-image',
              label: 'Resize Image',
              desc: 'Change image dimensions to any pixel size while preserving quality.',
            },
            {
              href: '/webp-to-jpg',
              label: 'WebP to JPG',
              desc: 'Convert WebP to universally compatible JPG for any platform.',
            },
            {
              href: '/heic-to-jpg/',
              label: 'HEIC to JPG',
              desc: 'Convert iPhone HEIC photos to JPEG without resizing.',
            },
            {
              href: '/jpg-to-png',
              label: 'JPG to PNG',
              desc: 'Convert JPG to lossless PNG with transparency support.',
            },
            {
              href: '/png-to-webp',
              label: 'PNG to WebP',
              desc: 'Shrink PNG files by 60–80% by converting to WebP.',
            },
          ].map(({ href, label, desc }) => (
            <Link
              key={href}
              href={href}
              className="bg-surface border border-border rounded-xl p-3 hover:border-primary transition-colors duration-150 group"
            >
              <p className="text-sm font-semibold text-text-main group-hover:text-primary transition-colors">
                {label}
              </p>
              <p className="text-xs text-text-muted mt-0.5">{desc}</p>
            </Link>
          ))}
        </div>
      </div>

      <ConvertFAQSection />
    </section>
  )
}

function ConvertFAQSection() {
  const faqs = [
    {
      q: 'Is this image converter free to use?',
      a: "Yes, completely free with no limits. No sign-up, no subscription, no watermarks. CompressImg's converter is 100% free — you can convert as many images as you want at no cost.",
    },
    {
      q: 'Which formats can I convert between?',
      a: 'You can convert between JPG, PNG, and WebP in any combination — JPG to PNG, PNG to WebP, WebP to JPG, and so on. HEIC files from iPhone are also accepted and automatically converted. All three output formats are supported.',
    },
    {
      q: 'Will converting to a different format reduce quality?',
      a: 'Converting to PNG is always lossless — no quality change. Converting to JPG or WebP uses lossy compression at a high quality setting (92/100), which produces results that are visually indistinguishable from the original for most images. Converting JPG to PNG does not recover quality lost in the original JPG — it simply re-encodes the existing pixels losslessly.',
    },
    {
      q: 'What happens to transparency when I convert to JPG?',
      a: 'JPG does not support transparency. When you convert a PNG or WebP with a transparent background to JPG, the transparent areas are replaced with a white background. If you need to keep transparency, choose PNG or WebP as the output format instead.',
    },
    {
      q: 'Why is the converted file larger than the original?',
      a: 'This commonly happens when converting JPG to PNG. JPG uses lossy compression to stay small, while PNG stores every pixel losslessly — so the PNG output is inherently larger. If file size is a priority, convert to WebP (smaller than both JPG and PNG at similar quality) or use the Compress Image tool after converting.',
    },
    {
      q: 'Can I convert multiple images at once?',
      a: 'Currently the tool converts one image at a time. After downloading, click "Convert another image" to start a new conversion immediately. Conversion runs locally and takes only a few seconds per image, so processing multiple files in sequence is fast.',
    },
    {
      q: 'Are my images uploaded to a server?',
      a: 'No. All conversion happens 100% in your browser using the HTML5 Canvas API. Your images never leave your device and are never stored on any server. When you close the tab, the image data is gone.',
    },
    {
      q: 'Does this work on mobile phones?',
      a: 'Yes. The tool is fully optimized for iOS and Android browsers. Tap to select a photo from your gallery or camera roll, choose the output format, and download the result — no app required.',
    },
  ]

  return (
    <div className="space-y-3">
      <h2 className="text-xl font-bold text-text-main">
        Frequently Asked Questions About Image Conversion
      </h2>
      <dl className="space-y-3">
        {faqs.map((faq, i) => (
          <FAQItem key={i} question={faq.q} answer={faq.a} />
        ))}
      </dl>
    </div>
  )
}
