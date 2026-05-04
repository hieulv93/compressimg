import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About CompressImg — Free Browser-Based Image Tools',
  description:
    'Learn about CompressImg — who built it, why we built it, and our commitment to keeping image compression free, private, and fast. No uploads, no accounts.',
  alternates: { canonical: 'https://compressimg.pro/about/' },
}

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <article className="space-y-10">
        <header>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-main mb-4">About CompressImg</h1>
          <p className="text-lg text-text-muted leading-relaxed">
            CompressImg is a free, browser-based image toolkit built for photographers, content
            creators, developers, and anyone who needs to resize, compress, or convert images
            without uploading them to a third-party server.
          </p>
        </header>

        {/* Our Story */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-text-main">Why We Built This</h2>
          <p className="text-text-muted leading-relaxed">
            The frustration was simple: every image compression tool online either required creating
            an account, uploaded your files to a server you couldn&apos;t verify, or plastered the
            results with watermarks. For professional photographers compressing client work, or
            creators sharing personal photos, sending images to a random server felt unnecessary and
            risky.
          </p>
          <p className="text-text-muted leading-relaxed">
            We knew modern browsers were powerful enough to handle compression locally — the same
            APIs that run photo editing in Lightroom Web, Figma, and Google Photos all run in the
            browser. So we built CompressImg to do exactly what those tools do internally, exposed
            as a simple, free utility anyone can use without signing up.
          </p>
          <p className="text-text-muted leading-relaxed">
            The second frustration was social media image quality. Anyone who has uploaded a crisp
            photo to Instagram or Facebook knows what happens next: the platform aggressively
            re-compresses it, turning sharp detail into a blurry, artifact-ridden result. We wanted
            a tool that explained <em>why</em> this happens and gave a practical fix — not just a
            vague slider. That is why every platform-specific tool on CompressImg includes real
            guidance on recommended quality settings, file sizes, and format choices for each
            platform.
          </p>
        </section>

        {/* Mission */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-text-main">Our Mission</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-xl border border-border p-5 space-y-2">
              <div className="text-2xl">🔒</div>
              <h3 className="font-semibold text-text-main">Privacy First</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Every tool on CompressImg runs 100% in your browser. Your images never leave your
                device. No files are sent to any server — not even ours.
              </p>
            </div>
            <div className="rounded-xl border border-border p-5 space-y-2">
              <div className="text-2xl">⚡</div>
              <h3 className="font-semibold text-text-main">Fast by Default</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                No upload latency, no queue, no waiting for a server response. Compression happens
                instantly on your device, whether you are on desktop or mobile.
              </p>
            </div>
            <div className="rounded-xl border border-border p-5 space-y-2">
              <div className="text-2xl">🆓</div>
              <h3 className="font-semibold text-text-main">Free Forever</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                The core tools — compress, resize, convert, crop — are free with no usage limits, no
                watermarks, and no account required. That will not change.
              </p>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-text-main">How It Works (Technically)</h2>
          <p className="text-text-muted leading-relaxed">
            CompressImg uses browser-native APIs and open-source JavaScript libraries to process
            images client-side:
          </p>
          <ul className="space-y-3 text-text-muted">
            <li className="flex gap-3">
              <span className="text-primary font-bold shrink-0 mt-0.5">→</span>
              <span>
                <strong className="text-text-main">Compression</strong> uses{' '}
                <code className="text-xs bg-surface px-1 py-0.5 rounded">
                  browser-image-compression
                </code>
                , a battle-tested open-source library that applies JPEG and WebP encoding using the
                browser&apos;s built-in Canvas API.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold shrink-0 mt-0.5">→</span>
              <span>
                <strong className="text-text-main">HEIC conversion</strong> uses{' '}
                <code className="text-xs bg-surface px-1 py-0.5 rounded">heic2any</code>, an
                open-source library that decodes Apple&apos;s HEIC format in the browser without any
                server involvement.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold shrink-0 mt-0.5">→</span>
              <span>
                <strong className="text-text-main">Resizing and cropping</strong> use the HTML5
                Canvas API directly — the same technology used in web-based design tools.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold shrink-0 mt-0.5">→</span>
              <span>
                <strong className="text-text-main">GIF compression</strong> uses{' '}
                <code className="text-xs bg-surface px-1 py-0.5 rounded">gif.js</code> running in a
                Web Worker, keeping the main thread free so the UI stays responsive.
              </span>
            </li>
          </ul>
          <p className="text-text-muted leading-relaxed">
            The site itself is a static Next.js application served from Vercel&apos;s global CDN.
            There is no backend, no database, and no server that receives your image data. The
            closest any image gets to leaving your device is the Canvas API writing pixel data into
            memory — which stays local.
          </p>
        </section>

        {/* Who uses it */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-text-main">Who Uses CompressImg</h2>
          <div className="space-y-3 text-text-muted">
            <p className="leading-relaxed">
              <strong className="text-text-main">Photographers</strong> use it to pre-compress
              client previews before sharing via email or WhatsApp — keeping file sizes manageable
              without sending work to a cloud service.
            </p>
            <p className="leading-relaxed">
              <strong className="text-text-main">Social media managers and creators</strong> use it
              to pre-compress images before posting on Instagram, Facebook, and Twitter — avoiding
              the double-compression that makes photos look blurry on those platforms.
            </p>
            <p className="leading-relaxed">
              <strong className="text-text-main">Web developers</strong> use it to quickly optimize
              images during development — checking how a photo looks at different quality levels
              before committing to an image optimization pipeline.
            </p>
            <p className="leading-relaxed">
              <strong className="text-text-main">Small business owners</strong> use it to reduce
              product photo sizes before uploading to their website or online store, improving page
              load speed without paying for a separate optimization service.
            </p>
            <p className="leading-relaxed">
              <strong className="text-text-main">Everyday users</strong> use it to send photos via
              email when attachment size limits block the original, or to share images in group
              chats without sacrificing too much quality.
            </p>
          </div>
        </section>

        {/* Commitment */}
        <section className="rounded-xl border border-border bg-surface p-6 space-y-3">
          <h2 className="text-xl font-bold text-text-main">Our Commitment</h2>
          <p className="text-text-muted leading-relaxed">
            CompressImg will always offer free, unlimited access to core image tools — no account
            required, no watermarks, no file count limits. We believe basic image optimization
            should be available to everyone, not gated behind a subscription.
          </p>
          <p className="text-text-muted leading-relaxed">
            The site is supported by ads, which we load only after you have gotten value from the
            tool — never before. If you find CompressImg useful, sharing it with someone who could
            use it is the best way to support keeping it free.
          </p>
        </section>

        {/* Links */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-text-main">Explore the Tools</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { href: '/compress-image', label: 'Compress Image' },
              { href: '/resize-image', label: 'Resize Image' },
              { href: '/convert-image', label: 'Convert Image' },
              { href: '/crop-image', label: 'Crop Image' },
              { href: '/heic-to-jpg', label: 'HEIC to JPG' },
              { href: '/webp-to-jpg', label: 'WebP to JPG' },
              { href: '/svg-to-png', label: 'SVG to PNG' },
              { href: '/blog', label: 'Read the Blog' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="rounded-lg border border-border px-3 py-2.5 text-sm text-center font-medium text-text-muted hover:text-primary hover:border-primary transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </section>

        <p className="text-sm text-text-muted">
          Questions or feedback?{' '}
          <Link href="/contact" className="text-primary underline">
            Contact us
          </Link>
          . We read every message.
        </p>
      </article>
    </main>
  )
}
