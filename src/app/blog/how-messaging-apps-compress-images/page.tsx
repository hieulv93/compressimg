import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How Messaging Apps Compress Your Images (And How to Stop Quality Loss)',
  description:
    'Slack, Teams, Discord, WhatsApp, iMessage, and Telegram all handle image compression differently. This guide compares all six and shows you how to send full-quality photos on any platform.',
  keywords: [
    'messaging apps compress images',
    'slack teams discord whatsapp image compression',
    'how to send full quality photos',
    'messaging app image quality',
    'does slack compress images',
    'does teams compress images',
    'does discord compress images',
    'does whatsapp compress images',
    'pre compress images for messaging',
  ],
  alternates: {
    canonical: 'https://compressimg.pro/blog/how-messaging-apps-compress-images/',
  },
  openGraph: {
    title: 'How Messaging Apps Compress Your Images (And How to Stop Quality Loss)',
    description:
      'Slack, Teams, Discord, WhatsApp, iMessage, and Telegram compared — how each compresses photos and how to keep quality sharp.',
    type: 'article',
    url: 'https://compressimg.pro/blog/how-messaging-apps-compress-images/',
  },
}

type AppRow = {
  app: string
  compressOnSend: string
  qualityLoss: string
  maxUpload: string
  fix: string
}

const appData: AppRow[] = [
  {
    app: 'Slack (desktop)',
    compressOnSend: 'No',
    qualityLoss: 'Preview only (thumbnail)',
    maxUpload: '1 GB',
    fix: 'Pre-compress to save storage',
  },
  {
    app: 'Slack (mobile)',
    compressOnSend: 'Yes',
    qualityLoss: 'Moderate',
    maxUpload: '1 GB',
    fix: 'Pre-compress to < 1 MB at Q80',
  },
  {
    app: 'Microsoft Teams',
    compressOnSend: 'Yes (inline)',
    qualityLoss: 'Moderate — preview only',
    maxUpload: '250 MB',
    fix: 'Pre-compress to < 1 MB at Q80',
  },
  {
    app: 'Discord',
    compressOnSend: 'Clipboard pastes only',
    qualityLoss: 'High for pastes; low for uploads',
    maxUpload: '8 MB (25 MB Nitro)',
    fix: 'Keep files under 8 MB',
  },
  {
    app: 'WhatsApp',
    compressOnSend: 'Yes — aggressively',
    qualityLoss: 'Very high (12MP → ~1–2MP)',
    maxUpload: 'No official limit',
    fix: 'Send as Document, or HD mode',
  },
  {
    app: 'iMessage',
    compressOnSend: 'Yes (cellular data)',
    qualityLoss: 'Low–moderate',
    maxUpload: 'Varies by network',
    fix: 'Send on Wi-Fi for best quality',
  },
  {
    app: 'Telegram',
    compressOnSend: 'No (Photos tab)',
    qualityLoss: 'None for photos',
    maxUpload: '2 GB',
    fix: 'Use Photos tab, not Files tab',
  },
]

export default function HowMessagingAppsCompressImages() {
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
        <span className="text-text-main">How Messaging Apps Compress Images</span>
      </nav>

      <article>
        <header className="mb-10">
          <div className="flex items-center gap-2 text-xs text-text-muted mb-4">
            <span className="bg-surface px-2 py-0.5 rounded font-medium">Guide</span>
            <span>·</span>
            <time dateTime="2026-05-26">May 26, 2026</time>
            <span>·</span>
            <span>10 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-main leading-tight mb-4">
            How Messaging Apps Compress Your Images (And How to Stop Quality Loss)
          </h1>
          <p className="text-lg text-text-muted leading-relaxed">
            You send a sharp photo through Slack or WhatsApp and it arrives looking blurry or
            pixelated. This happens because every major messaging platform processes images
            differently — some compress aggressively, some only compress previews, and a few do not
            compress at all. Here is how each platform actually works and exactly what to do to keep
            your images sharp.
          </p>
        </header>

        <div className="space-y-10 text-text-main leading-relaxed">
          {/* TL;DR comparison table */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-text-main">TL;DR — All Platforms at a Glance</h2>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-xs border-collapse">
                <thead className="bg-surface">
                  <tr>
                    {['App', 'Compresses on send?', 'Quality loss', 'Max upload', 'Fix'].map(
                      (h) => (
                        <th
                          key={h}
                          className="text-left px-3 py-3 font-semibold text-text-main border-b border-border"
                        >
                          {h}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border text-text-muted">
                  {appData.map((row) => (
                    <tr key={row.app}>
                      <td className="px-3 py-2.5 font-medium text-text-main whitespace-nowrap">
                        {row.app}
                      </td>
                      <td className="px-3 py-2.5">{row.compressOnSend}</td>
                      <td className="px-3 py-2.5">{row.qualityLoss}</td>
                      <td className="px-3 py-2.5 whitespace-nowrap">{row.maxUpload}</td>
                      <td className="px-3 py-2.5">{row.fix}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-text-muted text-sm leading-relaxed">
              The universal pre-compression fix: set quality to 80, export as JPG, keep dimensions
              under 1920px on the longest edge. This produces files of 200–700 KB that any platform
              will deliver cleanly.
            </p>
          </section>

          {/* Slack */}
          <section className="space-y-4" id="slack">
            <h2 className="text-2xl font-bold text-text-main">
              Slack — Desktop Does Not Compress, Mobile Does
            </h2>
            <p className="text-text-muted leading-relaxed">
              Slack&apos;s behavior is device-dependent, which creates confusion. On the{' '}
              <strong className="text-text-main">desktop app</strong> (Windows, Mac, Linux), Slack
              does not compress images before uploading. Your file is stored at full quality on
              Slack&apos;s servers. Teammates who download the image get the original.
            </p>
            <p className="text-text-muted leading-relaxed">
              On the <strong className="text-text-main">mobile app</strong> (iOS and Android), Slack
              applies compression before uploading. A phone photo shared from Slack mobile is
              noticeably lower quality than the same file uploaded from a desktop browser or app.
              This is the most common source of quality complaints in Slack channels — someone
              shared a crisp photo from their phone and it arrived blurry.
            </p>
            <p className="text-text-muted leading-relaxed">
              On all devices, Slack generates a lower-resolution{' '}
              <strong className="text-text-main">inline thumbnail</strong> for display inside the
              channel. Even files uploaded from desktop are shown as compressed previews. The
              high-quality original is only visible after clicking to open or downloading.
            </p>
            <div className="rounded-xl border border-border bg-surface p-4 text-xs space-y-2 text-text-muted">
              <p className="font-semibold text-text-main text-sm">
                Why pre-compress for Slack even on desktop?
              </p>
              <p>
                Storage. Free Slack workspaces have a 5 GB cap. A team sharing 10 uncompressed phone
                photos per day (5 MB each) fills that cap in 100 days.{' '}
                <Link
                  href="/compress-image-for-slack"
                  className="text-primary underline font-medium"
                >
                  Pre-compressing to under 500 KB
                </Link>{' '}
                extends storage 10× at no cost and makes channels load faster for everyone.
              </p>
            </div>
            <Link
              href="/compress-image-for-slack"
              className="inline-block text-sm font-semibold text-primary underline"
            >
              Free image compressor for Slack →
            </Link>
          </section>

          {/* Teams */}
          <section className="space-y-4" id="teams">
            <h2 className="text-2xl font-bold text-text-main">
              Microsoft Teams — Compresses Inline Display, Stores Original in SharePoint
            </h2>
            <p className="text-text-muted leading-relaxed">
              Microsoft Teams compresses images for{' '}
              <strong className="text-text-main">inline display in chat and channels</strong>. The
              thumbnail shown in the message thread is noticeably lower quality than the original,
              especially for detailed photos or screenshots with text. The original file is stored
              in SharePoint (for most organizational tenants) and is available at full quality when
              opened directly or downloaded.
            </p>
            <p className="text-text-muted leading-relaxed">
              The gap between what colleagues see inline versus the full file is the most-reported
              Teams image quality issue. The fix is the same as Slack:{' '}
              <Link href="/compress-image-for-teams" className="text-primary underline font-medium">
                pre-compress to under 1 MB before uploading
              </Link>
              . This gives the Teams compression algorithm a smaller file to work with, reducing how
              much it degrades the inline preview.
            </p>
            <p className="text-text-muted leading-relaxed">
              During <strong className="text-text-main">live meetings and screen sharing</strong>,
              Teams applies additional bandwidth-based compression depending on connection quality.
              Images shared in a presentation during a meeting may appear lower quality than the
              same image posted to a channel.
            </p>
            <Link
              href="/compress-image-for-teams"
              className="inline-block text-sm font-semibold text-primary underline"
            >
              Free image compressor for Teams →
            </Link>
          </section>

          {/* Discord */}
          <section className="space-y-4" id="discord">
            <h2 className="text-2xl font-bold text-text-main">
              Discord — File Limit Is the Real Issue, Not Compression
            </h2>
            <p className="text-text-muted leading-relaxed">
              Discord&apos;s main image restriction is its{' '}
              <strong className="text-text-main">8 MB file size limit</strong> for standard accounts
              (25 MB for Nitro). Images above this threshold cannot be uploaded — they are rejected
              entirely. Within the limit, Discord delivers images at near-original quality for
              standard uploads.
            </p>
            <p className="text-text-muted leading-relaxed">
              The exception is <strong className="text-text-main">clipboard pastes</strong>: images
              pasted directly into the Discord message box (Ctrl+V / Cmd+V) are compressed
              aggressively before sending. This catches many users off guard — a screenshot pasted
              from clipboard looks noticeably worse than the same file uploaded via the attachment
              button. If image quality matters, always{' '}
              <Link
                href="/compress-image-for-discord"
                className="text-primary underline font-medium"
              >
                upload via the attachment button
              </Link>
              , not paste.
            </p>
            <p className="text-text-muted leading-relaxed">
              Very large images (high-resolution camera files) may be resized by Discord for inline
              display, but the file link still provides the original up to the 8 MB cap. Compressed
              JPEGs from smartphones are almost always within the 8 MB limit.
            </p>
            <Link
              href="/compress-image-for-discord"
              className="inline-block text-sm font-semibold text-primary underline"
            >
              Free image compressor for Discord →
            </Link>
          </section>

          {/* WhatsApp */}
          <section className="space-y-4" id="whatsapp">
            <h2 className="text-2xl font-bold text-text-main">
              WhatsApp — Most Aggressive Compressor of Any Major App
            </h2>
            <p className="text-text-muted leading-relaxed">
              WhatsApp applies the most aggressive image compression of any popular messaging app.
              Standard photo sends can reduce a 5–12 MP phone photo to the equivalent of 1–2 MP — a
              70–85% reduction in pixel information. The result is often visibly blocky, with JPEG
              artifacts and lost fine detail in hair, fabric, text, and sky gradients.
            </p>
            <p className="text-text-muted leading-relaxed">
              WhatsApp added an <strong className="text-text-main">HD photo option</strong> in 2023.
              Sending as HD significantly reduces compression (output is closer to 300–800 KB), but
              it is still not lossless. For professional use, product photos, or any image where
              fine detail matters, HD mode is not sufficient.
            </p>
            <p className="text-text-muted leading-relaxed">
              The only lossless method is to send the file as a{' '}
              <strong className="text-text-main">Document</strong>: tap the attachment icon →
              Document → select your image file. WhatsApp delivers documents without any
              compression. The trade-off is that the recipient sees a file attachment, not an inline
              photo preview.
            </p>
            <div className="rounded-xl border border-border bg-surface p-4 text-xs space-y-1.5 text-text-muted">
              {[
                { label: 'Standard send', value: '12MP → ~1–2MP (very aggressive)' },
                { label: 'HD send (2023+)', value: '12MP → ~4–6MP (moderate)' },
                { label: 'Send as Document', value: 'No compression — full original' },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between gap-4">
                  <span className="font-medium text-text-main">{label}</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
            <p className="text-text-muted leading-relaxed">
              When sending as a standard photo,{' '}
              <Link
                href="/compress-image-for-whatsapp"
                className="text-primary underline font-medium"
              >
                pre-compressing to 300–500 KB at quality 80
              </Link>{' '}
              before sending noticeably reduces the double-compression effect — WhatsApp has less
              data to degrade, and the recipient sees a sharper result.
            </p>
            <Link
              href="/compress-image-for-whatsapp"
              className="inline-block text-sm font-semibold text-primary underline"
            >
              Free image compressor for WhatsApp →
            </Link>
          </section>

          {/* iMessage */}
          <section className="space-y-4" id="imessage">
            <h2 className="text-2xl font-bold text-text-main">
              iMessage — Compresses on Cellular, Full Quality on Wi-Fi
            </h2>
            <p className="text-text-muted leading-relaxed">
              iMessage compresses images when sending over a cellular data connection to reduce data
              usage. When both sender and recipient are on Wi-Fi, iMessage sends images at much
              higher quality. This makes iMessage quality inconsistent — the same photo can arrive
              at different quality levels depending on the network at the time of sending.
            </p>
            <p className="text-text-muted leading-relaxed">
              For important image sends over iMessage, switch to Wi-Fi before sharing.
              Alternatively, pre-compress the image to 400–600 KB at quality 80 — this size is close
              to what iMessage targets on cellular, so the platform applies minimal additional
              compression regardless of network.
            </p>
          </section>

          {/* Telegram */}
          <section className="space-y-4" id="telegram">
            <h2 className="text-2xl font-bold text-text-main">
              Telegram — Best Image Quality of Any Major Messaging App
            </h2>
            <p className="text-text-muted leading-relaxed">
              Telegram offers the best image quality of any mainstream messaging app when used
              correctly. Photos sent via the <strong className="text-text-main">Photos tab</strong>{' '}
              (the camera roll attachment) are compressed to approximately 1280px on the longest
              edge — visually acceptable for most uses but not lossless. Photos sent as{' '}
              <strong className="text-text-main">Files</strong> are delivered without any
              compression at full original quality, up to the 2 GB file size limit.
            </p>
            <p className="text-text-muted leading-relaxed">
              For high-quality photo sharing, always use the Files tab in Telegram, not the Photos
              tab. Telegram is unique among major messaging apps in offering true lossless file
              delivery with a generous 2 GB limit and no compression — making it the recommended
              choice when image quality is critical.
            </p>
          </section>

          {/* Why photos look blurry */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-text-main">
              Why Your Photo Looks Blurry After Sending
            </h2>
            <p className="text-text-muted leading-relaxed">
              The most common reason is double compression: your phone camera already saved the
              photo as a compressed JPEG, and then the messaging app applies a second round of JPEG
              compression on top of it. Each compression round discards more image data — and the
              losses compound. A photo that went through two rounds of aggressive compression at
              quality 60 is significantly worse than a photo compressed once at quality 60.
            </p>
            <p className="text-text-muted leading-relaxed">
              The fix is to control the first compression yourself. Export from your phone at the
              highest quality available, pre-compress at quality 80 using a browser-based tool
              (which preserves full EXIF and color data), then send that pre-optimized file. The
              messaging app&apos;s compression has much less to work with, and the final quality is
              noticeably better.
            </p>
            <p className="text-text-muted leading-relaxed">
              For a detailed breakdown of how social platforms handle this differently, see{' '}
              <Link
                href="/blog/why-photos-look-blurry-social-media"
                className="text-primary underline"
              >
                Why Do Photos Look Blurry on Social Media?
              </Link>
            </p>
          </section>

          {/* Best universal settings */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-text-main">
              Best Universal Pre-Compression Settings
            </h2>
            <p className="text-text-muted leading-relaxed">
              These settings work across all messaging apps and produce a file that any platform
              delivers cleanly with minimal additional compression:
            </p>
            <div className="rounded-xl border border-border bg-surface p-5 space-y-3">
              {[
                { label: 'Format', value: 'JPEG (JPG)' },
                { label: 'Quality', value: '80 — visually lossless at messaging sizes' },
                { label: 'Longest edge', value: '1920px maximum' },
                { label: 'Color space', value: 'sRGB' },
                { label: 'Target file size', value: '200–700 KB for most apps' },
                { label: 'WhatsApp exception', value: '200–400 KB standard; or send as Document' },
              ].map(({ label, value }) => (
                <div key={label} className="flex gap-3 text-sm">
                  <span className="text-text-muted w-32 shrink-0">{label}</span>
                  <span className="font-medium text-text-main">{value}</span>
                </div>
              ))}
            </div>
            <div className="text-center mt-2">
              <Link
                href="/compress-image"
                className="inline-block rounded-lg bg-primary text-white px-6 py-3 text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Compress Image Free — Q80, Browser-Based
              </Link>
            </div>
          </section>

          {/* Platform tools */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-text-main">Platform-Specific Compressors</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                {
                  href: '/compress-image-for-slack',
                  label: 'Compress for Slack',
                  desc: 'Pre-optimize for mobile uploads and storage limits',
                },
                {
                  href: '/compress-image-for-teams',
                  label: 'Compress for Teams',
                  desc: 'Keep inline channel previews sharp at < 1 MB',
                },
                {
                  href: '/compress-image-for-discord',
                  label: 'Compress for Discord',
                  desc: 'Stay under the 8 MB upload cap',
                },
                {
                  href: '/compress-image-for-whatsapp',
                  label: 'Compress for WhatsApp',
                  desc: 'Reduce blur before standard or HD send',
                },
                {
                  href: '/compress-image-for-instagram',
                  label: 'Compress for Instagram',
                  desc: 'Quality 80, 1080px wide, JPG',
                },
                {
                  href: '/compress-image',
                  label: 'Compress Image (any platform)',
                  desc: 'Custom quality slider — free, no upload required',
                },
              ].map(({ href, label, desc }) => (
                <Link
                  key={href}
                  href={href}
                  className="rounded-xl border border-border p-3 hover:border-primary transition-colors group"
                >
                  <p className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors">
                    {label}
                  </p>
                  <p className="text-xs text-text-muted mt-0.5">{desc}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-text-main">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: 'Which messaging app has the best image quality?',
                  a: 'Telegram (Files tab) and Discord (uploaded files under 8 MB) offer the best quality — no compression applied to uploaded files. Slack desktop is also lossless for the original file. WhatsApp is the worst for quality — aggressive compression on standard sends reduces 12MP photos to 1–2MP equivalent.',
                },
                {
                  q: 'Does Slack compress images on desktop?',
                  a: 'No. The Slack desktop app does not compress images before uploading. The original file is stored at full quality. Inline previews shown in the channel are lower resolution, but the downloadable file is unchanged. Slack mobile does compress images before uploading.',
                },
                {
                  q: 'How do I send full quality photos on WhatsApp?',
                  a: 'Two options: (1) Use the HD send option available in WhatsApp 2023+, which significantly reduces compression. (2) Send as a Document — tap the paperclip icon → Document → select your image file. Documents are delivered without any compression. The trade-off is the recipient sees a file attachment, not an inline photo.',
                },
                {
                  q: 'Why do pasted images look worse in Discord?',
                  a: 'Discord compresses clipboard pastes (Ctrl+V images) more aggressively than uploaded files. The same image pasted from clipboard will look noticeably worse than the same file uploaded via the attachment button (+). Always upload via the attachment button for best quality.',
                },
                {
                  q: 'Does pre-compressing to Q80 actually help?',
                  a: 'Yes, especially on platforms with aggressive compression like WhatsApp. When you give the app a file that is already close to its target size (200–600 KB), the platform applies much less additional compression. The final quality is noticeably better than uploading a 5 MB original and letting the platform compress it down. Quality 80 is visually indistinguishable from quality 95 at normal viewing sizes.',
                },
              ].map(({ q, a }) => (
                <div key={q} className="border border-border rounded-xl p-5 space-y-2">
                  <p className="font-semibold text-text-main text-sm">{q}</p>
                  <p className="text-sm text-text-muted leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </article>
    </main>
  )
}
