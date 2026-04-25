import Link from 'next/link'
import FAQItem from './FAQItem'

export default function CompressForEmailContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to compressing images for email"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Why Compress Images for Email?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Email was not designed to carry large image files. Every major email provider — Gmail,
          Outlook, Yahoo Mail, Apple Mail — enforces attachment size limits between 10MB and 25MB
          per message. A single uncompressed smartphone photo can be 4–8MB, meaning just three or
          four photos can already exceed Gmail&apos;s 25MB limit and force your email to bounce.
          Even when emails do go through, large attachments are slow to send, slow to download on
          mobile, and clog up both your inbox and your recipient&apos;s storage quota.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          Compressing images before attaching them solves all of these problems at once. A properly
          compressed photo for email attachment typically lands between 100KB and 500KB — small
          enough to send a dozen images in a single email, fast to download on any connection, and
          still visually clear at the sizes most recipients will view them. This tool reduces JPG,
          PNG, and WebP images by up to 90% with a single click, entirely in your browser with no
          uploads to any server.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How to Compress Images for Email — 3 Simple Steps
        </h2>
        <ol className="space-y-4">
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              1
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Upload your image</p>
              <p className="text-sm text-text-muted leading-relaxed">
                Click the upload area, drag and drop your image, or paste from clipboard (Ctrl+V).
                Supports JPG, PNG, and WebP files up to 20MB. Your image is processed entirely in
                your browser — nothing is sent to any server, so sensitive photos and business
                documents remain completely private.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              2
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Set quality to 75–85 for email</p>
              <p className="text-sm text-text-muted leading-relaxed">
                Quality 75–85 is the sweet spot for email attachments — files shrink by 50–70% while
                remaining visually indistinguishable from the original when viewed on screen. For
                photos that will only be viewed as thumbnails or previews (newsletter banners,
                profile photos), quality 60–70 cuts file size even further with no visible impact at
                typical display sizes.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              3
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Download and attach to email</p>
              <p className="text-sm text-text-muted leading-relaxed">
                The compressed image downloads directly to your device. Check the output size shown
                in the result — most photos compress to 100–400KB, well within any email
                provider&apos;s limits. Attach the compressed file to your email as usual and send.
              </p>
            </div>
          </li>
        </ol>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Email Provider Attachment Size Limits</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Different email providers have different limits for attachment file sizes. These are the
          most common limits you will encounter:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Gmail — 25MB per email</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Gmail allows up to 25MB of attachments per email. Files larger than 25MB are
              automatically converted to Google Drive links. Compressed photos at 200–500KB each
              allow you to attach 50+ images per email well within the limit.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Outlook — 20MB per email</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Microsoft Outlook and Outlook.com cap attachments at 20MB total per message. Business
              Exchange accounts often enforce tighter limits (10MB or less) set by the company IT
              department. Compressed images typically fall well within even the tightest limits.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Yahoo Mail — 25MB per email</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Yahoo Mail matches Gmail at 25MB per email. Larger files require using Yahoo&apos;s
              built-in file sharing or an external service. Compressing photos to under 500KB each
              gives you plenty of room for multiple attachments.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Apple Mail — 20MB per email</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Apple Mail on iCloud has a 20MB attachment limit. Apple offers Mail Drop for larger
              files (up to 5GB), but recipients must have an Apple ID to access them. Compressed
              images avoid this complication entirely.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">
              Corporate Email — Often 10MB or less
            </p>
            <p className="text-xs text-text-muted leading-relaxed">
              Many corporate Exchange and Office 365 servers enforce attachment limits of 5–10MB,
              set by the IT administrator. Business emails with uncompressed photos frequently
              bounce at these servers. Compressed images at 100–300KB per photo never trigger these
              limits.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">
              Email Newsletters — 100KB per image
            </p>
            <p className="text-xs text-text-muted leading-relaxed">
              HTML email newsletters (Mailchimp, Klaviyo, Constant Contact) typically recommend
              images under 100KB each for fast rendering on mobile. Newsletter images are displayed
              at fixed widths (500–600px), so high-resolution originals waste both bandwidth and
              load time.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Best Image Size and Quality for Email</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          The ideal compressed image for email depends on how it will be viewed. Most recipients
          open email on a phone screen 375–414px wide, or on a laptop at 1280–1440px. Very
          high-resolution images display no better than medium-resolution ones at these sizes — they
          just take longer to download.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Photo attachments (viewing)</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Resize to 1920px wide maximum, compress at quality 80. Output: typically 200–500KB.
              Recipients can view full detail on any screen size without a bloated file.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Product or business photos</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Resize to 1280px wide, compress at quality 80–85. Output: 100–300KB. Sharp enough for
              professional use, small enough to send multiple images in one email.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Newsletter inline images</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Resize to 600px wide (newsletter width standard), compress at quality 70–80. Output:
              30–100KB per image. Essential for fast rendering on mobile email clients.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Thumbnails and previews</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Resize to 300–400px wide, compress at quality 70. Output: 10–40KB. For email
              signatures, contact photos, and small decorative images where detail is not critical.
            </p>
          </div>
        </div>
        <p className="text-text-muted text-sm leading-relaxed">
          If your original photo is larger than 2000px wide, consider{' '}
          <Link href="/resize-image" className="text-primary underline">
            resizing the dimensions first
          </Link>{' '}
          before compressing. Reducing a 4000px photo to 1920px cuts file size by 75% before any
          quality compression is applied — making it much easier to hit email-friendly file sizes.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Which Image Format Is Best for Email Attachments?
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          The right format depends on what the image contains and how the recipient will use it:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="rounded-xl border border-border p-4 space-y-2">
            <h3 className="font-semibold text-text-main text-sm">JPG — Best for Photos</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              JPG is the best format for email photo attachments. It compresses photographs
              aggressively while keeping them visually sharp. Universal support across all email
              clients, devices, and operating systems. No transparency support — solid backgrounds
              only.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-2">
            <h3 className="font-semibold text-text-main text-sm">PNG — Best for Logos & Text</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              PNG is ideal for logos, screenshots, and images with text that must remain sharp.
              Supports transparency, making it useful for graphics on colored backgrounds. PNG files
              are larger than JPG for photos — avoid PNG for camera images sent by email.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-2">
            <h3 className="font-semibold text-text-main text-sm">WebP — Use With Caution</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              WebP produces smaller files than JPG at the same quality but is not universally
              supported in email clients. Older Outlook versions and some mobile email apps do not
              render WebP correctly — the image may appear broken. Stick to JPG or PNG for email
              attachments.
            </p>
          </div>
        </div>
        <p className="text-text-muted text-sm leading-relaxed">
          If you have PNG photos that need to be emailed at small file sizes, consider{' '}
          <Link href="/convert-image" className="text-primary underline">
            converting them to JPG
          </Link>{' '}
          first. PNG compression is lossless and produces much larger files for photographs compared
          to JPG at equivalent quality.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Tips for Sending Multiple Images by Email
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          When you need to send a batch of photos by email, compress each one individually using
          this tool, then calculate the total size before attaching. Here are practical tips for
          sending image collections by email:
        </p>
        <ul className="space-y-2 text-sm text-text-muted">
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5 shrink-0">→</span>
            <span>
              <strong className="text-text-main">Stay under 20MB total:</strong> Even if your
              provider allows 25MB, many receiving servers cap incoming attachments at 10–20MB.
              Keeping total attachments under 20MB ensures delivery to all providers.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5 shrink-0">→</span>
            <span>
              <strong className="text-text-main">500KB per photo is a safe target:</strong> At 500KB
              each, you can attach 40 photos and still stay under 20MB. Quality 80 at 1280px wide
              typically lands at 150–400KB for most smartphone photos.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5 shrink-0">→</span>
            <span>
              <strong className="text-text-main">For large batches, use cloud sharing:</strong> If
              you need to send more than 20–30 photos, upload the compressed images to Google Drive
              or Dropbox and share a link instead of attaching files directly. The images are still
              smaller and faster to share.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5 shrink-0">→</span>
            <span>
              <strong className="text-text-main">Compress, then ZIP if needed:</strong> Zipping
              compressed JPGs saves minimal additional space (JPG is already compressed), but
              grouping files in a ZIP makes it easier for recipients to download everything at once.
            </span>
          </li>
        </ul>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Privacy — Your Images Never Leave Your Device
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          This image compressor runs entirely in your browser. When you upload a photo to compress
          for email, it is processed locally using JavaScript — nothing is transmitted to any
          server. Business documents, personal photos, client images, and sensitive files are never
          stored or shared. For privacy-conscious users who compress confidential images before
          sending by email, this tool is completely safe to use without any account or sign-up.
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
            href="/resize-image"
            className="block rounded-xl border border-border p-4 hover:border-primary transition-colors group"
          >
            <p className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors">
              Resize Image
            </p>
            <p className="text-xs text-text-muted mt-1">
              Reduce photo dimensions before compressing for even smaller email files.
            </p>
          </Link>
          <Link
            href="/compress-image-to-100kb"
            className="block rounded-xl border border-border p-4 hover:border-primary transition-colors group"
          >
            <p className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors">
              Compress to 100KB
            </p>
            <p className="text-xs text-text-muted mt-1">
              Hit exact file size targets for form submissions and strict upload limits.
            </p>
          </Link>
          <Link
            href="/convert-image"
            className="block rounded-xl border border-border p-4 hover:border-primary transition-colors group"
          >
            <p className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors">
              Convert Image Format
            </p>
            <p className="text-xs text-text-muted mt-1">
              Convert PNG to JPG for smaller email attachments when transparency is not needed.
            </p>
          </Link>
        </div>
      </div>

      <CompressForEmailFAQSection />
    </section>
  )
}

function CompressForEmailFAQSection() {
  const faqs = [
    {
      q: 'What is the maximum image size I can send by email?',
      a: 'Most email providers allow 20–25MB of total attachments per email: Gmail and Yahoo allow 25MB, Outlook and Apple Mail allow 20MB. However, many corporate email servers cap incoming attachments at 10MB or less. A safe rule is to keep total attachments under 10MB — at 500KB per compressed photo, you can send 20 photos in a single email.',
    },
    {
      q: 'What image format is best for email attachments?',
      a: 'JPG is the best format for email photo attachments. It compresses photographs efficiently while keeping them visually sharp, and it is supported by every email client, device, and operating system. PNG is better for logos, screenshots, and images with transparency. Avoid WebP for email attachments — some email clients, including older Outlook versions, do not display WebP images correctly.',
    },
    {
      q: 'What image size should I use for email newsletters?',
      a: 'For email newsletters, images should be no wider than 600px (the standard newsletter width) and under 100KB each. This ensures fast rendering on mobile email clients like Gmail and Apple Mail. Use quality 70–80 at 600px width. Total newsletter image weight should ideally be under 500KB to avoid rendering delays on slow mobile connections.',
    },
    {
      q: 'How do I compress multiple images for email at once?',
      a: 'This tool processes one image at a time. For each photo: upload, set quality to 80, download. Repeat for each image. For large batches, consider resizing all photos to 1280px wide first using the Resize tool, which dramatically reduces file size before quality compression is applied. Then compress each at quality 75–80.',
    },
    {
      q: 'Will compressing images for email reduce the quality significantly?',
      a: 'At quality 75–85, compression is virtually invisible when images are viewed on screen at normal display sizes. You can reduce a 5MB smartphone photo to 200–400KB with no perceptible quality loss on screen. Only at very low quality settings (below 50) do visible artifacts appear, and even then, only in areas with fine texture or sharp edges.',
    },
    {
      q: 'What quality setting should I use for email images?',
      a: 'Quality 80 is the recommended setting for email photo attachments. It reduces file size by 60–70% with no visible quality loss at screen-view sizes. For newsletter inline images, quality 70–75 reduces files further while still looking sharp at the fixed widths used in email templates. For images that will be printed after being received, use quality 85–90.',
    },
    {
      q: 'Can I send WebP images by email?',
      a: 'Technically yes, but it is not recommended. Older versions of Microsoft Outlook (2019 and earlier) do not display WebP images — recipients may see a broken image placeholder. All modern browsers and apps support WebP, but email clients are more conservative in adopting new formats. For maximum compatibility, use JPG for email photo attachments.',
    },
    {
      q: 'Are my images uploaded to a server when I compress them for email?',
      a: 'No. All compression happens entirely in your browser using JavaScript. Your images never leave your device and are never sent to any server. This makes the tool completely private — suitable for compressing confidential business photos, client documents, and personal images before sending by email.',
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
