import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About — Free Browser-Based Image Tools',
  description:
    'Learn about CompressImg.pro — a free, private, browser-based image compressor. No uploads, no account, no watermarks. Your images never leave your device.',
  alternates: { canonical: 'https://compressimg.pro/about/' },
}

export default function AboutPage() {
  return (
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 py-10 sm:py-14">
        <h1 className="text-2xl sm:text-3xl font-bold text-text-main mb-2">
          About CompressImg.pro
        </h1>
        <p className="text-text-muted text-sm mb-8">
          Free image compression — 100% in your browser
        </p>

        <div className="space-y-8 text-sm text-text-muted leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-base font-semibold text-text-main">What is CompressImg.pro?</h2>
            <p>
              CompressImg.pro is a free, browser-based image compressor. You can reduce the file
              size of JPG, PNG, WebP, and HEIC images by up to 90% without uploading anything to a
              server, creating an account, or paying a subscription.
            </p>
            <p>
              All compression happens locally in your browser. Your images never leave your device.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-semibold text-text-main">Why we built it</h2>
            <p>
              Most image compressors require you to upload files to a cloud server and trust a third
              party with your images. For sensitive photos — documents, personal pictures, business
              assets — that is a real privacy risk.
            </p>
            <p>
              We built CompressImg.pro to fix that: compression as fast as any cloud service, with
              zero uploads and zero privacy trade-offs.
            </p>
          </section>

          <section>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="border border-border rounded-xl p-4 space-y-1">
                <p className="font-semibold text-text-main text-sm">Private by default</p>
                <p className="text-xs">
                  Your files are never sent anywhere. Processing is 100% local.
                </p>
              </div>
              <div className="border border-border rounded-xl p-4 space-y-1">
                <p className="font-semibold text-text-main text-sm">Fast</p>
                <p className="text-xs">
                  No upload wait. Compression completes in under 3 seconds on most devices.
                </p>
              </div>
              <div className="border border-border rounded-xl p-4 space-y-1">
                <p className="font-semibold text-text-main text-sm">Free forever</p>
                <p className="text-xs">No account, no watermarks, no daily limits.</p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-semibold text-text-main">Tools available</h2>
            <ul className="space-y-1.5">
              {[
                { href: '/compress-image/', label: 'Compress image online' },
                { href: '/compress-images/', label: 'Batch compress (up to 5 at once)' },
                { href: '/compress-image-to-100kb/', label: 'Compress image to 100KB' },
                { href: '/compress-image-to-1mb/', label: 'Compress image to 1MB' },
                { href: '/resize-image/', label: 'Resize image dimensions' },
                { href: '/convert-image/', label: 'Convert image format' },
                { href: '/crop-image/', label: 'Crop image online' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-primary hover:underline">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-text-main">Contact</h2>
            <p>
              Questions or feedback?{' '}
              <Link href="/contact/" className="text-primary hover:underline">
                Get in touch
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
