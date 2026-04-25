import Link from 'next/link'
import FAQItem from '@/components/tool/FAQItem'

export default function CompressForWhatsAppContentSection() {
  return (
    <section className="space-y-8 text-sm text-text-muted leading-relaxed">
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Why Compress Images Before Sending on WhatsApp?
        </h2>
        <p>
          WhatsApp automatically compresses images when you send them — but this automatic
          compression is aggressive and often reduces a sharp 12MP photo to a blurry 1–2MP result.
          By compressing your image first at a controlled quality setting, you maintain visual
          sharpness while still reducing file size. The result is a faster send and a better-looking
          photo on the recipient&apos;s screen.
        </p>
        <p>
          WhatsApp also applies its own compression on top of yours, so sending a pre-compressed
          image at quality 80 results in significantly less double-compression than sending a raw
          10MB photo. The final image on the recipient&apos;s phone will look noticeably sharper
          than if WhatsApp had compressed it from scratch.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How to Compress an Image for WhatsApp in 3 Steps
        </h2>
        <ol className="list-decimal list-inside space-y-2 ml-2">
          <li>
            <span className="font-semibold text-text-main">Upload your photo</span> — drag and drop,
            click to browse, or paste with Ctrl+V. Supports JPG, PNG, and WebP up to 20MB.
          </li>
          <li>
            <span className="font-semibold text-text-main">Set quality to 80</span> — this reduces a
            typical smartphone photo from 5–10MB to 300–600KB without visible quality loss. Lower to
            70 for even smaller files.
          </li>
          <li>
            <span className="font-semibold text-text-main">Download and share</span> — send the
            compressed file via WhatsApp. Your image will reach the recipient with far less
            double-compression blur than an uncompressed original.
          </li>
        </ol>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">WhatsApp Image Size Limits Explained</h2>
        <p>
          WhatsApp applies different compression depending on how you send an image. Understanding
          these limits helps you send photos at the best possible quality.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-xs">
            <thead>
              <tr className="bg-surface-alt">
                <th className="border border-border px-3 py-2 text-left font-semibold text-text-main">
                  Send Method
                </th>
                <th className="border border-border px-3 py-2 text-left font-semibold text-text-main">
                  Max Size
                </th>
                <th className="border border-border px-3 py-2 text-left font-semibold text-text-main">
                  WhatsApp Compression
                </th>
                <th className="border border-border px-3 py-2 text-left font-semibold text-text-main">
                  Best For
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border px-3 py-2">As Photo (Gallery)</td>
                <td className="border border-border px-3 py-2">No limit displayed</td>
                <td className="border border-border px-3 py-2 text-amber-600">Heavy (auto)</td>
                <td className="border border-border px-3 py-2">Casual sharing</td>
              </tr>
              <tr className="bg-surface-alt">
                <td className="border border-border px-3 py-2">As Document (File)</td>
                <td className="border border-border px-3 py-2">2GB</td>
                <td className="border border-border px-3 py-2 text-green-600">None</td>
                <td className="border border-border px-3 py-2">Preserving quality</td>
              </tr>
              <tr>
                <td className="border border-border px-3 py-2">Status (Story)</td>
                <td className="border border-border px-3 py-2">~16MB</td>
                <td className="border border-border px-3 py-2 text-amber-600">Moderate</td>
                <td className="border border-border px-3 py-2">Temporary sharing</td>
              </tr>
              <tr className="bg-surface-alt">
                <td className="border border-border px-3 py-2">Profile Photo</td>
                <td className="border border-border px-3 py-2">~5MB</td>
                <td className="border border-border px-3 py-2 text-amber-600">
                  Cropped + compressed
                </td>
                <td className="border border-border px-3 py-2">Profile display</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          <span className="font-semibold text-text-main">Pro tip:</span> If you want to send a photo
          without any WhatsApp compression, send it as a{' '}
          <span className="font-semibold text-text-main">Document</span> (tap the paperclip icon →
          Document). WhatsApp will not compress documents, and the recipient gets the exact file you
          send. Pre-compress to 500KB–1MB before sending as a document for best results.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Recommended Image Size for WhatsApp</h2>
        <p>
          The ideal pre-compressed image for WhatsApp as a photo attachment is{' '}
          <span className="font-semibold text-text-main">300–600KB at 1280px wide</span>. This gives
          WhatsApp&apos;s compression less work to do, resulting in a sharper final image on the
          recipient&apos;s screen.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="rounded-xl border border-border p-4 bg-surface-alt">
            <p className="font-semibold text-text-main text-sm">Casual Photos</p>
            <p className="text-xs mt-1">Quality 75 · Target ~300KB · Fast send</p>
          </div>
          <div className="rounded-xl border border-border p-4 bg-surface-alt">
            <p className="font-semibold text-text-main text-sm">Important Photos</p>
            <p className="text-xs mt-1">Quality 80 · Target ~500KB · Sharp result</p>
          </div>
          <div className="rounded-xl border border-border p-4 bg-surface-alt">
            <p className="font-semibold text-text-main text-sm">Document Attach</p>
            <p className="text-xs mt-1">Quality 85 · Target ~800KB · No re-compression</p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Best Image Format for WhatsApp</h2>
        <p>
          WhatsApp supports JPG, PNG, GIF, and WebP. For photo sharing, JPG is the best choice: it
          compresses photographs efficiently and every WhatsApp version supports it. PNG is better
          for screenshots and graphics with text, but produces larger files for photos. WebP is
          natively supported in WhatsApp but may not display correctly when saved to the camera roll
          on older iOS or Android versions.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-xs">
            <thead>
              <tr className="bg-surface-alt">
                <th className="border border-border px-3 py-2 text-left font-semibold text-text-main">
                  Format
                </th>
                <th className="border border-border px-3 py-2 text-left font-semibold text-text-main">
                  Best For
                </th>
                <th className="border border-border px-3 py-2 text-left font-semibold text-text-main">
                  File Size
                </th>
                <th className="border border-border px-3 py-2 text-left font-semibold text-text-main">
                  Recommendation
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border px-3 py-2 font-semibold">JPG</td>
                <td className="border border-border px-3 py-2">Photos</td>
                <td className="border border-border px-3 py-2">Small</td>
                <td className="border border-border px-3 py-2 text-green-600">✓ Best choice</td>
              </tr>
              <tr className="bg-surface-alt">
                <td className="border border-border px-3 py-2 font-semibold">PNG</td>
                <td className="border border-border px-3 py-2">Screenshots, logos</td>
                <td className="border border-border px-3 py-2">Large</td>
                <td className="border border-border px-3 py-2">Use for graphics only</td>
              </tr>
              <tr>
                <td className="border border-border px-3 py-2 font-semibold">WebP</td>
                <td className="border border-border px-3 py-2">Web images</td>
                <td className="border border-border px-3 py-2">Smallest</td>
                <td className="border border-border px-3 py-2 text-amber-600">
                  Limited save support
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">WhatsApp Profile Photo Size</h2>
        <p>
          WhatsApp profile photos are cropped to a square and displayed at small sizes (up to
          500×500px on screen). For your profile photo, compress your image to{' '}
          <span className="font-semibold text-text-main">under 200KB at quality 80</span> and ensure
          the subject is centered before uploading. WhatsApp will apply its own circular crop to the
          center of your image.
        </p>
        <p>
          For WhatsApp Business profile photos, a square image at 640×640px at quality 85 gives the
          best balance between upload speed and display sharpness. Logos and product images with
          transparent backgrounds should be saved as PNG before uploading.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Sending High-Quality Photos on WhatsApp Without Compression
        </h2>
        <p>
          If you need the recipient to receive the original-quality image, send it as a document
          instead of a photo. On WhatsApp mobile: tap the attachment icon → Document → browse to
          your photo file. The file is transferred without any WhatsApp compression.
        </p>
        <p>
          Even when sending as a document, it&apos;s good practice to pre-compress large photos
          (10MB+ smartphone originals) to 1–2MB. This makes the transfer faster on mobile data
          connections without any visible quality difference at typical screen viewing sizes.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Privacy — Your Images Stay on Device</h2>
        <p>
          This tool runs entirely in your browser. No image is ever uploaded to a server. Your
          photos are compressed locally using JavaScript and the resulting file is downloaded
          directly to your device. Suitable for compressing personal photos, private documents, and
          business images before sharing on WhatsApp.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">More Free Image Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link
            href="/compress-image-for-instagram"
            className="block rounded-xl border border-border p-4 hover:border-primary transition-colors group"
          >
            <p className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors">
              Compress for Instagram
            </p>
            <p className="text-xs text-text-muted mt-1">
              Reduce photo size before posting on Instagram to avoid double-compression.
            </p>
          </Link>
          <Link
            href="/compress-image-for-facebook"
            className="block rounded-xl border border-border p-4 hover:border-primary transition-colors group"
          >
            <p className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors">
              Compress for Facebook
            </p>
            <p className="text-xs text-text-muted mt-1">
              Optimize photos for Facebook feed and cover before posting.
            </p>
          </Link>
          <Link
            href="/compress-image-for-twitter"
            className="block rounded-xl border border-border p-4 hover:border-primary transition-colors group"
          >
            <p className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors">
              Compress for Twitter
            </p>
            <p className="text-xs text-text-muted mt-1">
              Pre-compress images before tweeting to keep photos sharp on the timeline.
            </p>
          </Link>
        </div>
      </div>

      <WhatsAppFAQSection />
    </section>
  )
}

function WhatsAppFAQSection() {
  const faqs = [
    {
      q: 'What happens when WhatsApp compresses my photo?',
      a: 'WhatsApp automatically compresses photos sent via the photo gallery to reduce data usage. A 12MP smartphone photo (5–10MB) is reduced to roughly 1–2MP (100–300KB). This aggressive compression introduces visible blur and reduces sharpness. By pre-compressing at quality 80 before sending, you give WhatsApp a smaller, already-optimized file — resulting in significantly less double-compression on the final image.',
    },
    {
      q: 'How do I send photos on WhatsApp without losing quality?',
      a: 'Send your photo as a Document instead of through the photo gallery. On WhatsApp mobile: tap the paperclip / attachment icon → Document → select your image file. WhatsApp does not compress documents, so the recipient receives the exact file you send. For large originals, pre-compress to 500KB–1MB first for faster transfer.',
    },
    {
      q: 'What is the maximum photo size WhatsApp accepts?',
      a: 'When sending as a photo, WhatsApp accepts files up to approximately 16MB but applies heavy automatic compression regardless of file size. When sending as a document, the limit is 2GB with no compression. For WhatsApp Status (Stories), the image limit is around 16MB.',
    },
    {
      q: 'What image size is best for WhatsApp sharing?',
      a: 'For sending as a photo: compress to 300–600KB at quality 80, 1280px wide. This gives WhatsApp less to compress, resulting in a sharper final image. For sending as a document (no WhatsApp compression): 500KB–1MB at quality 85 is a good balance between file transfer speed and visible quality.',
    },
    {
      q: 'Does WhatsApp support WebP images?',
      a: 'Yes, WhatsApp supports WebP natively. However, when recipients save a WebP image to their camera roll, older iOS and Android versions may not handle WebP correctly. For maximum compatibility — especially if recipients need to save or print photos — use JPG format instead of WebP.',
    },
    {
      q: 'What is the ideal WhatsApp profile photo size?',
      a: 'WhatsApp profile photos are displayed as a square, cropped from the center of your image. Upload a square JPG at 640×640px compressed to under 200KB at quality 80. Make sure the main subject (your face or logo) is centered. WhatsApp applies a circular crop when displaying, so avoid placing important content near the edges.',
    },
    {
      q: 'Can I compress PNG images for WhatsApp?',
      a: 'Yes — this tool compresses PNG images. However, PNG is a lossless format and compresses less efficiently than JPG for photographs. If your PNG is a photo, consider converting it to JPG before compressing for WhatsApp — you can save 60–80% more file size. Use the PNG to JPG converter, then compress the resulting JPG.',
    },
    {
      q: 'Are my WhatsApp images safe to compress with this tool?',
      a: 'Yes. All compression happens entirely in your browser using JavaScript — no image is ever uploaded to a server. Your photos never leave your device. This tool is suitable for compressing personal, private, and confidential images before sharing on WhatsApp.',
    },
  ]

  return (
    <div className="space-y-3">
      <h2 className="text-xl font-bold text-text-main">Frequently Asked Questions</h2>
      <div className="space-y-2">
        {faqs.map((faq, i) => (
          <FAQItem key={i} question={faq.q} answer={faq.a} />
        ))}
      </div>
    </div>
  )
}
