import Link from 'next/link'
import FAQItem from '@/components/tool/FAQItem'

export default function CompressTo400KbContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to compressing images to 400KB"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Why Compress an Image to 400KB?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          A 400KB limit is common for email photo embeds, CMS and website image uploads, Twitch
          panel images, university scholarship forms with relaxed limits, and some social media
          background images. At 400KB and 1920px wide, a JPEG photo looks sharp on desktop screens
          and loads in under 0.5 seconds on a typical broadband connection. For web performance,
          keeping images under 400KB is a best practice that improves LCP (Largest Contentful Paint)
          — a Core Web Vitals metric that affects Google search ranking.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          Reaching 400KB from a typical phone photo (3–8MB) requires quality 75–80. This tool starts
          at quality 78, which compresses a 1920×1080px photo to 200–380KB for most subjects. All
          compression runs in your browser — no upload required.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How to Compress an Image to 400KB — 3 Steps
        </h2>
        <ol className="space-y-4">
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              1
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Upload your image</p>
              <p className="text-sm text-text-muted leading-relaxed">
                Click the upload area, drag and drop, or paste from clipboard. Accepts JPG, PNG,
                WebP, and HEIC up to 20MB. For very large photos (4000px+), consider resizing to
                1920px wide using the{' '}
                <Link href="/resize-image/" className="text-primary hover:underline">
                  Resize Image
                </Link>{' '}
                tool before compressing.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              2
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Set quality to 75–80</p>
              <p className="text-sm text-text-muted leading-relaxed">
                Quality 78 compresses most 1920×1080px photos to 200–380KB — under 400KB with good
                visual quality. Landscape and nature photos with lots of detail may be larger; try
                quality 72 if over 400KB. Portrait photos compress smaller than landscapes at the
                same quality.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              3
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Download when under 400KB</p>
              <p className="text-sm text-text-muted leading-relaxed">
                The result card shows exact compressed size. Download when under 400KB. The file is
                ready for email, CMS upload, or any platform with a 400–500KB limit.
              </p>
            </div>
          </li>
        </ol>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Common Use Cases for 400KB Images</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              name: 'Email photo embeds',
              detail:
                'Most email clients display embedded images up to 500KB without download prompts',
            },
            {
              name: 'Website / blog images',
              detail: 'Under 400KB keeps LCP under 2.5s — a Core Web Vitals target for SEO',
            },
            {
              name: 'Twitch panels',
              detail: 'Recommended under 2.9MB, but smaller is faster. 400KB panels load instantly',
            },
            {
              name: 'University applications',
              detail: 'Relaxed portals accept 200–500KB photos for higher-quality submissions',
            },
            {
              name: 'Airbnb listing photos',
              detail: 'Airbnb recommends 1MB max; 400KB loads faster in search results',
            },
            {
              name: 'LinkedIn article covers',
              detail: 'Recommended 1200×628px; under 400KB improves article load speed',
            },
          ].map(({ name, detail }) => (
            <div key={name} className="rounded-xl border border-border bg-surface p-3 text-sm">
              <p className="font-semibold text-text-main text-xs">{name}</p>
              <p className="text-text-muted text-xs mt-0.5">{detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-border bg-surface p-4 text-sm space-y-2">
        <h2 className="font-semibold text-text-main">Your Images Never Leave Your Device</h2>
        <p className="text-text-muted text-xs leading-relaxed">
          All compression runs entirely in your browser. Your images are never uploaded to any
          server. Free with no limits, no account required.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">More Free Image Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            {
              href: '/compress-image-to-500kb/',
              label: 'Compress to 500KB',
              desc: 'High-quality web',
            },
            {
              href: '/compress-image-to-200kb/',
              label: 'Compress to 200KB',
              desc: 'Stricter portals',
            },
            {
              href: '/compress-image-to-100kb/',
              label: 'Compress to 100KB',
              desc: 'Resume, job portals',
            },
            { href: '/resize-image/', label: 'Resize Image', desc: 'Change pixel dimensions' },
            { href: '/compress-image/', label: 'Compress Image', desc: 'Any format, any size' },
            { href: '/jpg-to-webp/', label: 'JPG to WebP', desc: '30% smaller than JPG' },
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
          Frequently Asked Questions About Compressing Images to 400KB
        </h2>
        <div className="space-y-2">
          {[
            {
              q: 'How do I compress an image to under 400KB?',
              a: 'Set quality to 75–80. For a 1920×1080px photo at quality 78, output is typically 200–380KB. For very detailed photos still over 400KB, try quality 72–75 or resize to 1280px wide first using the Resize Image tool.',
            },
            {
              q: 'What quality setting gives the best result at 400KB?',
              a: 'Quality 78–80 for a 1920×1080px image. At this quality, JPEG compression is largely invisible at normal viewing distances. Skin tones, gradients, and text edges all look accurate. Only lower below 75 for very detailed landscape or product photos.',
            },
            {
              q: 'Is 400KB small enough for a website image?',
              a: 'Yes, for most use cases. A 1920×1080px JPEG at 400KB loads in under 1 second on broadband and under 2 seconds on mobile 4G. For hero images above the fold, aim for 200KB or less for best LCP. For blog post content images, 400KB is fine.',
            },
            {
              q: 'Can I compress a PNG to 400KB?',
              a: 'This tool compresses PNG to JPEG output, which produces much smaller files. A 1920×1080px PNG is often 3–8MB; the same image as JPEG at quality 78 will be 200–400KB — ideal. If you need PNG with transparency preserved, use the Compress Image tool instead.',
            },
            {
              q: 'Does compressing to 400KB reduce dimensions?',
              a: 'No. Only file size is reduced — dimensions stay the same. If you also need smaller dimensions, use the Resize Image tool first.',
            },
            {
              q: 'Is this tool free and private?',
              a: 'Yes — completely free, no sign-up. All compression runs in your browser; images never leave your device.',
            },
          ].map(({ q, a }) => (
            <FAQItem key={q} question={q} answer={a} />
          ))}
        </div>
      </div>
    </section>
  )
}
