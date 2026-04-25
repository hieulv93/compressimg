import Link from 'next/link'
import FAQItem from './FAQItem'

export default function PngContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to PNG compression"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">What Is a PNG File?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          PNG (Portable Network Graphics) is a widely used image format designed for lossless
          compression — meaning every pixel in the original image is perfectly preserved in the
          output. PNG was created as a patent-free alternative to GIF and has become the standard
          format for logos, icons, screenshots, illustrations, and any image that requires
          transparency. Unlike JPG, which permanently removes image data during compression, PNG
          keeps the image data intact.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          PNG supports an alpha channel — a fourth channel of image data that controls pixel
          transparency. This makes PNG the only choice when you need images with transparent
          backgrounds: product photos without a white background, logos placed over colored headers,
          icons with irregular shapes, and UI elements that must blend with any background color.
          Compressing a PNG file reduces its size without affecting the transparency or any pixel
          data.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          PNG files come in two main variants: PNG-24 (full color, up to 16 million colors) and
          PNG-8 (256 colors, like a GIF but with transparency). Our compressor handles PNG-24 files,
          which are the standard for photographs and detailed graphics. For illustrations with flat
          colors, converting to PNG-8 (outside the scope of this tool) can reduce sizes further.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How to Compress PNG Online — 3 Simple Steps
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
                (Ctrl+V). Files up to 20MB are supported. Your PNG is never sent to any server — all
                processing happens locally in your browser with full privacy.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              2
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Set the compression level</p>
              <p className="text-sm text-text-muted leading-relaxed">
                Use the quality slider to control compression aggressiveness. For PNG files
                containing photographs or gradients, lower quality settings (60–75) can still
                produce excellent results. For PNG files with flat colors, logos, and line art,
                higher quality settings (85+) preserve the sharpness of edges and text.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              3
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Download your compressed PNG</p>
              <p className="text-sm text-text-muted leading-relaxed">
                Your compressed PNG is ready immediately. The result card shows the original size,
                new size, and percentage reduction. Transparency is fully preserved — download and
                use the file exactly as you would the original.
              </p>
            </div>
          </li>
        </ol>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Does Compressing PNG Affect Transparency?
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          No. PNG transparency (alpha channel) is fully preserved during compression. This is one of
          the most important properties of PNG compression — unlike converting a PNG to JPG, which
          would replace transparent pixels with a solid white or black background, compressing a PNG
          keeps every transparent pixel exactly as it was. Logos, icons, and UI elements with
          irregular shapes or semi-transparent edges will look identical after compression.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          If you have a PNG with a transparent background and need to place it on a webpage or
          design, compressing it will not affect how it blends with the surrounding content. The
          compressed PNG will still have the same transparent regions, the same semi-transparent
          edges (anti-aliasing), and the same alpha channel data as the original.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">How Much Can I Compress a PNG File?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          PNG compression results vary significantly depending on the content of the image:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">
              PNG Photos and Gradients — 30–60% reduction
            </p>
            <p className="text-xs text-text-muted leading-relaxed">
              PNG files containing photographs or complex gradients typically reduce by 30–60%.
              These images have high entropy (lots of varied pixel data), which limits how much
              lossless compression can achieve.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">
              Logos and Flat-Color Graphics — 40–70% reduction
            </p>
            <p className="text-xs text-text-muted leading-relaxed">
              PNG files with large areas of flat color, simple gradients, or limited color palettes
              compress very well. A logo with a transparent background can often be reduced by
              50–70% with no visible change.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Screenshots — 40–65% reduction</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Screenshots of websites, applications, or documents typically compress well due to
              flat UI colors and sharp text areas. A 1080p screenshot that starts at 2MB can often
              be reduced to under 800KB.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">
              PNG vs JPG for Photos — 10–30% vs 60–90%
            </p>
            <p className="text-xs text-text-muted leading-relaxed">
              For photographic content without transparency, JPG will always compress more
              efficiently than PNG. If you don&apos;t need transparency, consider{' '}
              <a href="/convert-image" className="text-primary underline">
                converting your PNG to JPG
              </a>{' '}
              for much smaller file sizes.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          PNG vs JPG vs WebP: Choosing the Right Format
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Each image format has distinct strengths. Choosing the wrong format for your use case
          results in unnecessarily large files or avoidable quality loss:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="rounded-xl border border-border p-4 space-y-2">
            <h3 className="font-semibold text-text-main text-sm">PNG — Logos &amp; Transparency</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              Use when you need transparency, sharp edges, or lossless quality. Ideal for logos,
              icons, UI elements, and screenshots. Larger file sizes for photographs.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-2">
            <h3 className="font-semibold text-text-main text-sm">
              JPG — Photos Without Transparency
            </h3>
            <p className="text-xs text-text-muted leading-relaxed">
              Best for photographs and complex images without transparency. Smaller file sizes than
              PNG for photos, with excellent quality at 75–85%. No transparency support.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-2">
            <h3 className="font-semibold text-text-main text-sm">WebP — Best of Both</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              Modern format that beats both PNG and JPG. Supports transparency, 25–35% smaller than
              JPG, lossless mode available. Ideal for web performance. All modern browsers support
              it.
            </p>
          </div>
        </div>
        <p className="text-text-muted text-sm leading-relaxed">
          For web use, consider{' '}
          <Link href="/convert-image" className="text-primary underline">
            converting PNG to WebP
          </Link>{' '}
          to get smaller files while keeping transparency. WebP with lossless compression is
          typically 26% smaller than PNG at the same quality.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Compressing PNG Images for Websites</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Unoptimized PNG files are one of the most common causes of slow-loading websites. A single
          uncompressed logo PNG can be 1–5MB; a compressed version of the same logo is typically
          100–300KB. For websites with multiple PNG assets — hero images, product renders, UI
          screenshots — proper PNG compression can reduce total page weight by several megabytes,
          directly improving Google Core Web Vitals scores (LCP, CLS) and SEO rankings.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          A best-practice workflow for web PNG images: compress with this tool first, then consider{' '}
          <Link href="/convert-image" className="text-primary underline">
            converting to WebP
          </Link>{' '}
          for even smaller files. Use PNG only when WebP is not supported by your target platform.
          For any PNG that does not require transparency, switching to a compressed JPG will
          typically achieve 50–80% further size reduction.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Privacy — Your PNG Files Never Leave Your Device
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          This PNG compressor operates entirely within your browser. Your PNG files are never
          uploaded to any server, stored in the cloud, or sent anywhere. Compression is performed
          locally using the browser&apos;s Canvas API and JavaScript Web Workers. Close the tab and
          all image data is cleared from memory permanently. There are no accounts, no watermarks,
          and no usage limits.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          For details on data handling and advertising, see our{' '}
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
            href="/compress-image"
            className="block rounded-xl border border-border p-4 hover:border-primary transition-colors group"
          >
            <p className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors">
              Compress Any Image
            </p>
            <p className="text-xs text-text-muted mt-1">
              Compress JPG, PNG, and WebP — all formats in one tool.
            </p>
          </Link>
          <Link
            href="/compress-jpg-online"
            className="block rounded-xl border border-border p-4 hover:border-primary transition-colors group"
          >
            <p className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors">
              Compress JPG Online
            </p>
            <p className="text-xs text-text-muted mt-1">
              Reduce JPG and JPEG file size by up to 90% in seconds.
            </p>
          </Link>
          <Link
            href="/compress-image-for-email"
            className="block rounded-xl border border-border p-4 hover:border-primary transition-colors group"
          >
            <p className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors">
              Compress for Email
            </p>
            <p className="text-xs text-text-muted mt-1">
              Reduce PNG size to fit Gmail, Outlook, and other email providers.
            </p>
          </Link>
        </div>
      </div>

      <PngFAQSection />
    </section>
  )
}

function PngFAQSection() {
  const faqs = [
    {
      q: 'What is a PNG file and when should I use it?',
      a: 'PNG (Portable Network Graphics) is a lossless image format that supports transparency. Use PNG for logos, icons, UI elements, screenshots, and any image that requires a transparent background or sharp edges without compression artifacts. For photographs without transparency needs, JPG or WebP will produce smaller files.',
    },
    {
      q: 'Does compressing a PNG affect its transparency?',
      a: 'No. PNG transparency (alpha channel) is fully preserved during compression. Transparent pixels stay transparent, semi-transparent pixels keep their exact opacity, and the alpha channel data is not modified in any way. Your compressed PNG will look identical to the original when placed over any background.',
    },
    {
      q: 'How much can I reduce a PNG file size?',
      a: 'PNG compression results vary by image content. Logos and flat-color graphics typically reduce by 40–70%. Screenshots compress by 40–65%. PNG files containing photographs reduce by 30–60%. For photos without transparency, converting to JPG instead will achieve much larger reductions (60–90%).',
    },
    {
      q: 'Is PNG compression lossless or lossy?',
      a: 'Traditional PNG compression is lossless — no image data is removed. Our compressor applies near-lossless techniques at lower quality settings, which can achieve greater file size reductions while keeping quality imperceptible on screen. The output is still saved as a PNG with full alpha channel support.',
    },
    {
      q: 'When should I use PNG instead of JPG?',
      a: 'Use PNG when you need: (1) transparent backgrounds, (2) sharp edges and text without blurring, (3) logos and graphics with flat colors, (4) lossless quality for images that will be further edited. Use JPG for photographs, camera shots, and any image without transparency needs — JPG compresses photographic content far more efficiently.',
    },
    {
      q: 'How do I compress a PNG image for a website?',
      a: 'Upload your PNG using this tool, set quality to 75–85 for logos with detail or 60–70 for screenshots, then download. For further size reduction, consider converting the compressed PNG to WebP using our Convert tool — WebP with lossless mode is typically 26% smaller than PNG at the same quality, and all modern browsers support it.',
    },
    {
      q: 'Can I compress a PNG without losing the sharp edges and text?',
      a: 'Yes. At quality settings of 80 and above, logos, text, and sharp edges are preserved with no visible degradation. The compression algorithm is most aggressive on smooth gradients and photo-like areas, and more conservative on high-contrast edges and text, which helps preserve visual sharpness.',
    },
    {
      q: 'Are my PNG files safe when using this tool?',
      a: 'Yes, completely safe. All PNG compression happens entirely in your browser using JavaScript. Your files are never uploaded to any server, never stored, and never transmitted anywhere. The compression process runs offline in your browser — there is no network request for the image data. Your files are private by design.',
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
