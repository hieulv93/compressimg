import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Why Do Photos Look Blurry on Social Media? (And How to Fix It)',
  description:
    'Instagram, Facebook, and WhatsApp all compress your photos automatically. Learn exactly why it happens and how to upload sharp images every time.',
  alternates: {
    canonical: 'https://compressimg.pro/blog/why-photos-look-blurry-social-media/',
  },
  openGraph: {
    title: 'Why Do Photos Look Blurry on Social Media? (And How to Fix It)',
    description:
      'Instagram, Facebook, and WhatsApp all compress your photos automatically. Learn exactly why it happens and how to upload sharp images every time.',
    type: 'article',
    url: 'https://compressimg.pro/blog/why-photos-look-blurry-social-media/',
  },
}

export default function WhyPhotosLookBlurry() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <nav
        className="text-xs text-text-muted mb-8 flex items-center gap-1.5"
        aria-label="Breadcrumb"
      >
        <Link href="/" className="hover:text-primary">
          Home
        </Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-primary">
          Blog
        </Link>
        <span>/</span>
        <span className="text-text-main">Why Photos Look Blurry on Social Media</span>
      </nav>

      <article>
        <header className="mb-10">
          <div className="flex items-center gap-2 text-xs text-text-muted mb-4">
            <span className="bg-surface px-2 py-0.5 rounded font-medium">Guide</span>
            <span>·</span>
            <time dateTime="2026-05-04">May 4, 2026</time>
            <span>·</span>
            <span>10 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-main leading-tight mb-4">
            Why Do Photos Look Blurry on Social Media? (And How to Fix It)
          </h1>
          <p className="text-lg text-text-muted leading-relaxed">
            You took a beautiful photo. It looks crisp on your phone. You upload it to Instagram or
            Facebook — and suddenly it looks soft, washed out, or blurry. This happens to everyone,
            and the cause is predictable. Here is exactly why it happens and what you can do to get
            sharper results.
          </p>
        </header>

        <div className="space-y-10 text-text-main leading-relaxed">
          {/* Quick summary */}
          <section className="bg-surface border border-border rounded-xl p-6 space-y-3">
            <h2 className="text-lg font-bold">The Short Answer</h2>
            <p className="text-sm text-text-muted leading-relaxed">
              Every major social platform — Instagram, Facebook, WhatsApp, Twitter/X, TikTok —
              automatically recompresses every photo you upload. They do this to reduce storage
              costs and bandwidth. The larger and higher-quality your original file, the more
              aggressively they compress it, and the blurrier the result. The fix is to{' '}
              <strong className="text-text-main">pre-compress your image at quality 80</strong>{' '}
              before uploading, so the platform has less work to do and keeps more of your detail.
            </p>
            <Link
              href="/compress-image"
              className="inline-block mt-1 text-sm font-semibold text-primary underline"
            >
              Compress your image now →
            </Link>
          </section>

          {/* Why platforms compress */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-text-main">
              Why Social Platforms Compress Your Photos
            </h2>
            <p className="text-text-muted leading-relaxed">
              A modern smartphone photo is typically 3–12MB. Instagram alone processes hundreds of
              millions of photo uploads every day. If the platform stored and delivered every photo
              at full resolution, the bandwidth and storage costs would be astronomical. So
              platforms compress every uploaded image down to a target file size — usually somewhere
              between 100KB and 1MB — regardless of the original quality.
            </p>
            <p className="text-text-muted leading-relaxed">
              This is not a bug. It is a deliberate engineering decision. The problem is that lossy
              compression (the kind used by JPG and most image formats) works by discarding
              information. The more aggressively you compress, the more detail is permanently lost.
              And if your original image was already compressed by your camera or phone (which it
              almost certainly was — phone photos are JPGs), then the platform&apos;s compression is
              a <em>second round</em> of quality loss on top of the first. This is called
              double-compression, and it is the main reason uploaded photos look worse than the
              originals.
            </p>
            <p className="text-text-muted leading-relaxed">
              The problem is most visible in photos with fine detail: hair, fabric texture, foliage,
              sky gradients near the horizon, and areas with subtle tone variation like skin. These
              are exactly the areas that lossy compression sacrifices first.
            </p>
          </section>

          {/* How each platform compresses */}
          <section className="space-y-5">
            <h2 className="text-2xl font-bold text-text-main">
              How Each Platform Handles Compression
            </h2>
            <p className="text-text-muted leading-relaxed">
              Not all platforms compress equally aggressively. Here is how the major platforms
              behave and what quality settings they effectively target:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-surface-alt">
                    <th className="border border-border px-4 py-3 text-left font-semibold text-text-main">
                      Platform
                    </th>
                    <th className="border border-border px-4 py-3 text-left font-semibold text-text-main">
                      Compression Level
                    </th>
                    <th className="border border-border px-4 py-3 text-left font-semibold text-text-main">
                      Recommended Pre-Upload Quality
                    </th>
                    <th className="border border-border px-4 py-3 text-left font-semibold text-text-main">
                      Target File Size
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border px-4 py-3 font-semibold">Instagram</td>
                    <td className="border border-border px-4 py-3 text-text-muted">Aggressive</td>
                    <td className="border border-border px-4 py-3">Quality 80</td>
                    <td className="border border-border px-4 py-3 text-text-muted">300–800 KB</td>
                  </tr>
                  <tr className="bg-surface-alt">
                    <td className="border border-border px-4 py-3 font-semibold">Facebook</td>
                    <td className="border border-border px-4 py-3 text-text-muted">Aggressive</td>
                    <td className="border border-border px-4 py-3">Quality 80</td>
                    <td className="border border-border px-4 py-3 text-text-muted">100–400 KB</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-3 font-semibold">WhatsApp</td>
                    <td className="border border-border px-4 py-3 text-text-muted">
                      Very aggressive
                    </td>
                    <td className="border border-border px-4 py-3">Quality 75–80</td>
                    <td className="border border-border px-4 py-3 text-text-muted">50–200 KB</td>
                  </tr>
                  <tr className="bg-surface-alt">
                    <td className="border border-border px-4 py-3 font-semibold">Twitter / X</td>
                    <td className="border border-border px-4 py-3 text-text-muted">
                      Moderate–aggressive
                    </td>
                    <td className="border border-border px-4 py-3">Quality 80</td>
                    <td className="border border-border px-4 py-3 text-text-muted">300–700 KB</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-3 font-semibold">LinkedIn</td>
                    <td className="border border-border px-4 py-3 text-text-muted">Moderate</td>
                    <td className="border border-border px-4 py-3">Quality 80</td>
                    <td className="border border-border px-4 py-3 text-text-muted">200–600 KB</td>
                  </tr>
                  <tr className="bg-surface-alt">
                    <td className="border border-border px-4 py-3 font-semibold">TikTok</td>
                    <td className="border border-border px-4 py-3 text-text-muted">Aggressive</td>
                    <td className="border border-border px-4 py-3">Quality 80</td>
                    <td className="border border-border px-4 py-3 text-text-muted">50–150 KB</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-text-main">Instagram</h3>
              <p className="text-text-muted leading-relaxed">
                Instagram compresses based on a target file size, not a fixed quality level. Feed
                photos are delivered between approximately 100KB and 800KB depending on the image
                content. Instagram also downscales images to a maximum of 1080px wide — if you
                upload a 4000px image, it is resized first and then compressed, compounding the
                quality loss.
              </p>
              <p className="text-text-muted leading-relaxed">
                Instagram&apos;s algorithm treats JPG and PNG inputs differently. JPG input
                generally produces better results because the algorithm is optimized for it. PNG
                uploads are converted to JPG internally, which can introduce unexpected color shifts
                and softness.
              </p>

              <h3 className="text-lg font-bold text-text-main">Facebook</h3>
              <p className="text-text-muted leading-relaxed">
                Facebook compresses even more aggressively than Instagram for standard photo posts.
                However, Facebook offers an &ldquo;Upload HD&rdquo; toggle in the mobile app that
                reduces (but does not eliminate) compression. Even with HD enabled, a raw 10MB photo
                will be significantly compressed — pre-compressing at quality 80 before enabling HD
                gives the best results.
              </p>
              <p className="text-text-muted leading-relaxed">
                Facebook also applies different compression rules to photos in albums vs. timeline
                posts vs. cover photos. Profile and cover photos get the heaviest compression
                because they are shown at small sizes most of the time and the platform optimizes
                for delivery speed over quality.
              </p>

              <h3 className="text-lg font-bold text-text-main">WhatsApp</h3>
              <p className="text-text-muted leading-relaxed">
                WhatsApp is the most aggressive compressor of any major messaging app. When you send
                a photo through WhatsApp&apos;s normal photo picker, it can compress a 5MB photo
                down to under 100KB — a compression ratio of 50:1. The result is often visibly
                pixelated and blocky, especially for images with fine detail.
              </p>
              <p className="text-text-muted leading-relaxed">
                The workaround: WhatsApp has a separate &ldquo;Document&rdquo; send option (the
                paperclip icon → Document) that sends the file without any compression. However,
                recipients see it as an attachment they need to download, not an inline photo. For
                high-quality photo sharing, either pre-compress to 200–300KB before sending as a
                photo, or send as a Document.
              </p>
              <p className="text-text-muted leading-relaxed">
                See the dedicated{' '}
                <Link href="/compress-image-for-whatsapp" className="text-primary underline">
                  WhatsApp image compression guide
                </Link>{' '}
                for detailed steps.
              </p>
            </div>
          </section>

          {/* The pre-compression solution */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-text-main">The Pre-Compression Fix</h2>
            <p className="text-text-muted leading-relaxed">
              The key insight is this: platforms compress based on file size. If you give them a
              large file, they compress it heavily. If you give them a small, already-optimized
              file, they have little reason to compress it further — and the quality on the platform
              is noticeably better.
            </p>
            <p className="text-text-muted leading-relaxed">
              Pre-compressing at quality 80 reduces a typical smartphone photo by 60–75% while
              keeping the image visually indistinguishable from the original at normal viewing
              sizes. The platform then applies its compression to an image that is already close to
              its target size, resulting in much less degradation.
            </p>

            <div className="rounded-xl border border-border p-5 space-y-3 bg-surface">
              <h3 className="font-semibold text-text-main">Step-by-step: Upload sharper photos</h3>
              <ol className="space-y-3 text-sm text-text-muted">
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center shrink-0">
                    1
                  </span>
                  <span>
                    <strong className="text-text-main">Resize first if needed.</strong> If your
                    photo is larger than the platform&apos;s maximum display resolution, resize it
                    down first. For Instagram, that is 1080px wide. Use the{' '}
                    <Link href="/resize-image" className="text-primary underline">
                      Resize Image
                    </Link>{' '}
                    tool.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center shrink-0">
                    2
                  </span>
                  <span>
                    <strong className="text-text-main">Compress at quality 80.</strong> Use the{' '}
                    <Link href="/compress-image" className="text-primary underline">
                      CompressImg tool
                    </Link>
                    , set the quality slider to 80, and download. This typically brings a 5MB photo
                    down to 300–600KB — exactly the range platforms prefer.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center shrink-0">
                    3
                  </span>
                  <span>
                    <strong className="text-text-main">Upload the compressed file.</strong> Use the
                    platform&apos;s native app (not web interface where possible) for best handling.
                    On Instagram, upload via the mobile app. On Facebook, enable HD upload in
                    settings.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center shrink-0">
                    4
                  </span>
                  <span>
                    <strong className="text-text-main">Check on a different device.</strong> Your
                    own device may cache a higher-quality version. View the post on a different
                    phone to see what others see.
                  </span>
                </li>
              </ol>
            </div>
          </section>

          {/* Other causes */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-text-main">
              Other Reasons Photos Look Blurry (Not Compression)
            </h2>
            <p className="text-text-muted leading-relaxed">
              Compression is the most common cause of blurry social media photos, but not the only
              one. Here are other factors that contribute:
            </p>
            <div className="space-y-4">
              <div className="border-l-2 border-primary pl-4 space-y-1">
                <h3 className="font-semibold text-text-main">Wrong aspect ratio or crop</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  If you upload a photo with an aspect ratio outside the platform&apos;s accepted
                  range, it is automatically cropped or letterboxed. Instagram, for example, only
                  supports aspect ratios between 4:5 and 1.91:1 for feed photos. Images outside this
                  range are cropped — and the crop boundary can cut subjects awkwardly, making the
                  photo look wrong even if it is technically sharp.
                </p>
              </div>
              <div className="border-l-2 border-primary pl-4 space-y-1">
                <h3 className="font-semibold text-text-main">Screenshot sharing</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Taking a screenshot of a photo and sharing the screenshot adds another generation
                  of quality loss on top of whatever compression the original photo already had.
                  Screenshots are typically PNG files that are then re-saved as JPG by the platform,
                  which introduces JPEG compression artifacts on top of the screenshot pixel
                  patterns. Always share the original file, not a screenshot.
                </p>
              </div>
              <div className="border-l-2 border-primary pl-4 space-y-1">
                <h3 className="font-semibold text-text-main">
                  Slow or unstable internet connection
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Some platforms dynamically serve lower-quality versions of images to users with
                  slow connections. If you are viewing a photo on a slow mobile connection,
                  Instagram and Facebook may serve a compressed &ldquo;fast load&rdquo; version
                  instead of the full-quality one. Switch to WiFi and refresh to see the
                  full-quality version.
                </p>
              </div>
              <div className="border-l-2 border-primary pl-4 space-y-1">
                <h3 className="font-semibold text-text-main">Low-resolution original</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  If the original photo is under 1080px wide, it will appear blurry on
                  high-resolution displays because the platform stretches it to fill the display
                  container. This is a resolution issue, not a compression issue — you cannot
                  recover detail that was never in the original. Shoot or export at the
                  platform&apos;s recommended resolution before uploading.
                </p>
              </div>
              <div className="border-l-2 border-primary pl-4 space-y-1">
                <h3 className="font-semibold text-text-main">Wrong color space</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Photos shot in wide color spaces (Adobe RGB, ProPhoto RGB) can look washed out or
                  dull on social platforms that assume sRGB. The platform converts the image without
                  knowing the original color space, which shifts colors and can make the image
                  appear low-quality. Export from Lightroom or other editing software with the
                  &ldquo;sRGB&rdquo; color space option selected before uploading.
                </p>
              </div>
            </div>
          </section>

          {/* Platform-specific guides */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-text-main">Platform-Specific Guides</h2>
            <p className="text-text-muted leading-relaxed">
              Each platform has different dimension requirements, compression targets, and upload
              best practices. These dedicated guides cover everything you need:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                {
                  href: '/compress-image-for-instagram',
                  label: 'Instagram',
                  desc: 'Quality 80, 1080px wide, JPG format',
                },
                {
                  href: '/compress-image-for-facebook',
                  label: 'Facebook',
                  desc: 'Quality 80, enable HD upload setting',
                },
                {
                  href: '/compress-image-for-whatsapp',
                  label: 'WhatsApp',
                  desc: 'Quality 75–80, or send as Document',
                },
                {
                  href: '/compress-image-for-twitter',
                  label: 'Twitter / X',
                  desc: 'Quality 80, under 5MB, JPG or PNG',
                },
                {
                  href: '/compress-image-for-linkedin',
                  label: 'LinkedIn',
                  desc: 'Quality 80, professional context',
                },
                {
                  href: '/compress-image-for-tiktok',
                  label: 'TikTok',
                  desc: 'Quality 80, JPG only (no WebP)',
                },
              ].map(({ href, label, desc }) => (
                <Link
                  key={href}
                  href={href}
                  className="rounded-xl border border-border p-4 hover:border-primary transition-colors group"
                >
                  <p className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors">
                    Compress for {label}
                  </p>
                  <p className="text-xs text-text-muted mt-1">{desc}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-text-main">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: 'Will pre-compressing really make a visible difference?',
                  a: 'Yes, in most cases. The effect is most noticeable on photos with fine detail — hair, fabric, foliage, skin texture. Pre-compressing a 5MB photo to 400KB at quality 80, then uploading to Instagram, typically produces a noticeably sharper result than uploading the 5MB original and letting Instagram compress it to 400KB on its own. The reason: you choose the compression settings; Instagram uses its own algorithm that may sacrifice different detail than you would.',
                },
                {
                  q: 'Does this work on iPhone photos (HEIC)?',
                  a: 'iPhone photos saved in HEIC format need to be converted to JPG before most social platforms accept them. Use the HEIC to JPG converter, then compress at quality 80 before uploading. Alternatively, you can set your iPhone camera to shoot in "Most Compatible" mode (JPG) under Settings → Camera → Formats, which avoids the conversion step.',
                },
                {
                  q: 'Why does my photo look fine on my phone but blurry on the platform?',
                  a: "Your phone shows the local original file, which has not been compressed. The platform shows the recompressed version it stored. This is normal — the gap between the two is the effect of the platform's compression. After you upload a pre-compressed version, compare the platform result to the original again and you will see a smaller quality gap.",
                },
                {
                  q: 'Does image format matter (JPG vs PNG vs WebP)?',
                  a: 'Yes. For social media, JPG is the safest format. Platforms are optimized for JPG input and handle it predictably. PNG uploads are converted to JPG internally by most platforms, adding an extra encoding step. WebP is not accepted by Instagram and TikTok. For photos: use JPG. For graphics with text or solid colors: PNG is acceptable on Facebook and Twitter, but JPG is safer everywhere.',
                },
                {
                  q: 'What resolution should I upload for the best quality?',
                  a: "Upload at the platform's maximum display resolution — not higher. For Instagram feed photos: 1080px wide. For Facebook timeline photos: 2048px wide (or 720px for standard, 2048px for HD). For Twitter: 1200×675px for tweet images. For WhatsApp: 1280px on the longest side. Uploading higher resolution than the platform displays forces it to downscale the image first, then compress — two operations that both reduce quality.",
                },
              ].map((faq, i) => (
                <div key={i} className="border border-border rounded-xl p-5 space-y-2">
                  <p className="font-semibold text-text-main text-sm">{faq.q}</p>
                  <p className="text-sm text-text-muted leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="rounded-xl border border-primary/30 bg-primary/5 p-6 space-y-3">
            <h2 className="text-xl font-bold text-text-main">Try It Now</h2>
            <p className="text-sm text-text-muted leading-relaxed">
              Pre-compress your photo in your browser — no upload, no account, no watermark. Set
              quality to 80, download, then upload to your platform of choice.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/compress-image"
                className="inline-block rounded-lg bg-primary text-white px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Compress Image Free
              </Link>
              <Link
                href="/resize-image"
                className="inline-block rounded-lg border border-border bg-white text-text-main px-5 py-2.5 text-sm font-semibold hover:border-primary hover:text-primary transition-colors"
              >
                Resize Image
              </Link>
            </div>
          </section>
        </div>
      </article>
    </main>
  )
}
