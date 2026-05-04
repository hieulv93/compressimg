import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact CompressImg — Get in Touch',
  description:
    'Contact the CompressImg team for bug reports, feature requests, or general feedback about our free image compression tools.',
  alternates: { canonical: 'https://compressimg.pro/contact/' },
}

export default function ContactPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <article className="space-y-8">
        <header>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-main mb-3">Contact Us</h1>
          <p className="text-lg text-text-muted leading-relaxed">
            We are a small team and we read every message. Whether you found a bug, have a feature
            idea, or just want to share feedback — we would love to hear from you.
          </p>
        </header>

        {/* Email */}
        <section className="rounded-xl border border-border p-6 space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <svg
                className="w-5 h-5 text-primary"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-text-main">Email</p>
              <a
                href="mailto:support@compressimg.pro"
                className="text-primary underline text-sm break-all"
              >
                support@compressimg.pro
              </a>
            </div>
          </div>
          <p className="text-sm text-text-muted">We typically reply within 1–2 business days.</p>
        </section>

        {/* What to include */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-text-main">What to Include in Your Message</h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="text-primary font-bold shrink-0 mt-0.5">🐛</span>
              <div>
                <p className="text-sm font-semibold text-text-main">Bug reports</p>
                <p className="text-sm text-text-muted leading-relaxed">
                  Tell us which tool, what file format you were using, and what happened vs. what
                  you expected. If you can, include your browser and operating system (e.g.,
                  &ldquo;Chrome 124 on Windows 11&rdquo;).
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-primary font-bold shrink-0 mt-0.5">💡</span>
              <div>
                <p className="text-sm font-semibold text-text-main">Feature requests</p>
                <p className="text-sm text-text-muted leading-relaxed">
                  Describe what you are trying to accomplish and why the current tools do not solve
                  it. The more specific, the better — &ldquo;I want to batch-compress 50 images at
                  once&rdquo; is more useful than &ldquo;add more features.&rdquo;
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-primary font-bold shrink-0 mt-0.5">💬</span>
              <div>
                <p className="text-sm font-semibold text-text-main">General feedback</p>
                <p className="text-sm text-text-muted leading-relaxed">
                  We genuinely want to know if something feels confusing, slow, or broken. Honest
                  feedback — even negative — helps us make better tools.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ-style quick answers */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-text-main">Common Questions</h2>
          <div className="space-y-4 text-sm">
            <div className="border border-border rounded-xl p-4 space-y-1">
              <p className="font-semibold text-text-main">Is CompressImg really free?</p>
              <p className="text-text-muted leading-relaxed">
                Yes. All core tools — compress, resize, convert, crop — are completely free with no
                account required, no watermarks, and no usage limits. See our{' '}
                <Link href="/about" className="text-primary underline">
                  About page
                </Link>{' '}
                for our commitment on this.
              </p>
            </div>
            <div className="border border-border rounded-xl p-4 space-y-1">
              <p className="font-semibold text-text-main">Do you store my images?</p>
              <p className="text-text-muted leading-relaxed">
                No. All processing happens in your browser — images are never uploaded to any
                server. Your files never leave your device.
              </p>
            </div>
            <div className="border border-border rounded-xl p-4 space-y-1">
              <p className="font-semibold text-text-main">
                Can I use CompressImg for commercial work?
              </p>
              <p className="text-text-muted leading-relaxed">
                Yes. There are no restrictions on commercial use. Compress product photos, client
                images, or marketing assets — no attribution required.
              </p>
            </div>
            <div className="border border-border rounded-xl p-4 space-y-1">
              <p className="font-semibold text-text-main">
                Do you accept advertising or partnership inquiries?
              </p>
              <p className="text-text-muted leading-relaxed">
                For advertising partnerships or collaboration inquiries, email us at{' '}
                <a href="mailto:support@compressimg.pro" className="text-primary underline">
                  support@compressimg.pro
                </a>{' '}
                with the subject &ldquo;Partnership.&rdquo;
              </p>
            </div>
          </div>
        </section>

        <p className="text-sm text-text-muted">
          Read more about who we are and how CompressImg works on our{' '}
          <Link href="/about" className="text-primary underline">
            About page
          </Link>
          .
        </p>
      </article>
    </main>
  )
}
