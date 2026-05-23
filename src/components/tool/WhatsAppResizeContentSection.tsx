import Link from 'next/link'
import FAQItem from './FAQItem'

export default function WhatsAppResizeContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to resizing images for WhatsApp"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">WhatsApp Image Size Requirements</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          WhatsApp compresses every image you send in a chat. Understanding the correct dimensions
          for each image type — status updates, profile pictures, and link previews — helps you
          upload images that look sharp after WhatsApp&apos;s processing pipeline.
        </p>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-surface">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">
                  Image type
                </th>
                <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">
                  Dimensions
                </th>
                <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">
                  Max size
                </th>
                <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-text-muted text-xs">
              {[
                {
                  type: 'Status',
                  dim: '1080×1920px',
                  max: '16MB',
                  note: 'Full-screen vertical, 9:16 ratio',
                },
                {
                  type: 'Profile Picture (DP)',
                  dim: '500×500px',
                  max: '5MB',
                  note: 'Cropped to circle by WhatsApp',
                },
                {
                  type: 'Chat Photo',
                  dim: '1600px max width',
                  max: '16MB',
                  note: 'WhatsApp downsizes to ~1600px wide',
                },
                {
                  type: 'Link Preview',
                  dim: '1200×630px',
                  max: '—',
                  note: 'Open Graph image for shared URLs',
                },
                {
                  type: 'Sticker',
                  dim: '512×512px',
                  max: '100KB',
                  note: 'Must be under 100KB, WebP format',
                },
                {
                  type: 'Group Icon',
                  dim: '500×500px',
                  max: '5MB',
                  note: 'Same as profile picture',
                },
              ].map(({ type, dim, max, note }) => (
                <tr key={type}>
                  <td className="px-4 py-3 font-medium text-text-main">{type}</td>
                  <td className="px-4 py-3 font-mono">{dim}</td>
                  <td className="px-4 py-3">{max}</td>
                  <td className="px-4 py-3">{note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted italic">
          WhatsApp compresses chat photos to reduce bandwidth. To send an image without compression,
          share it as a Document instead of a Photo — this preserves original file quality.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How to Resize an Image for WhatsApp — 3 Steps
        </h2>
        <ol className="space-y-3">
          {[
            {
              step: '1',
              title: 'Select your WhatsApp image type',
              body: 'Choose the format at the top — Status (1080×1920), Profile Picture (500×500), Link Preview (1200×630), or Sticker (512×512). Status is the most commonly needed resize — it must be vertical (9:16) to fill the screen.',
            },
            {
              step: '2',
              title: 'Upload your image',
              body: 'Click the upload area or drag and drop your JPG, PNG, WebP, or HEIC file. HEIC photos from iPhone are automatically converted to JPEG. Processing starts immediately.',
            },
            {
              step: '3',
              title: 'Download and share on WhatsApp',
              body: 'Download the resized image and share it on WhatsApp as a Status, set it as your profile picture, or send it in a chat. The image matches the exact dimensions WhatsApp expects.',
            },
          ].map(({ step, title, body }) => (
            <li key={step} className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                {step}
              </span>
              <div>
                <p className="text-sm font-semibold text-text-main">{title}</p>
                <p className="text-sm text-text-muted leading-relaxed">{body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Does WhatsApp Compress Images? (And How to Avoid It)
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Yes. WhatsApp applies heavy compression to all images sent as photos in chat. The
          compression targets small file sizes for fast delivery on mobile networks — not image
          quality. A 5MB photo becomes roughly 100–300KB after WhatsApp processes it.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              label: 'Send as Photo',
              verdict: 'Compressed',
              desc: 'WhatsApp compresses images to ~100–300KB. Fine for casual sharing, bad for professional use.',
            },
            {
              label: 'Send as Document',
              verdict: 'Original quality',
              desc: 'No compression. The recipient downloads the exact file you sent. Use for photos that need to stay sharp.',
            },
          ].map(({ label, verdict, desc }) => (
            <div key={label} className="rounded-xl border border-border p-4 space-y-1">
              <p className="font-semibold text-text-main text-sm">{label}</p>
              <p
                className={`font-bold text-xs ${verdict === 'Original quality' ? 'text-green-600' : 'text-amber-600'}`}
              >
                {verdict}
              </p>
              <p className="text-xs text-text-muted leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <p className="text-text-muted text-sm leading-relaxed">
          To send an image without compression: tap the attachment icon → Document → select your
          image file. The recipient will see a download prompt instead of a preview, but the image
          quality is fully preserved.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          WhatsApp Status — Full-Screen Image Guide
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          WhatsApp Status images display vertically at 9:16 ratio — filling the full phone screen.
          If your image is not 9:16, WhatsApp adds black bars (letterboxing) at the top and bottom
          or left and right. Uploading at exactly 1080×1920px prevents black bars and makes your
          status look professional.
        </p>
        <ul className="space-y-2 text-sm text-text-muted">
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Keep text out of the top and bottom 10%.</strong>{' '}
              WhatsApp shows the sender name and timestamp at the top, and the reply button at the
              bottom. Text placed in these areas may be obscured.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Use high-contrast visuals.</strong> WhatsApp Status
              plays for just 7 seconds. Bold colors and high contrast register immediately without
              requiring the viewer to read anything.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Limit text to 3–5 words.</strong> Status images
              display for 7 seconds — viewers have just enough time to read a short phrase.
              Text-heavy status images go unread.
            </span>
          </li>
        </ul>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          WhatsApp Profile Picture — DP Size Guide
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          WhatsApp profile pictures (called &quot;DP&quot; — display picture) are shown as a circle
          next to every message you send. The image displays at different sizes depending on
          context:
        </p>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-surface">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">
                  Context
                </th>
                <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">
                  Display size
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-text-muted text-xs">
              {[
                { context: 'Chat list (next to conversation)', display: '~54×54px circle' },
                { context: 'Inside a chat (next to messages)', display: '~40×40px circle' },
                { context: 'Profile view (full size)', display: '~500×500px' },
                { context: 'Contact info panel', display: '~120×120px circle' },
              ].map(({ context, display }) => (
                <tr key={context}>
                  <td className="px-4 py-3 font-medium text-text-main">{context}</td>
                  <td className="px-4 py-3 font-mono">{display}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted italic">
          Upload at 500×500px. A close-up face or logo with a solid or blurred background remains
          recognizable at small sizes. Landscape photos or group shots become unreadable at 40×40px.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">iPhone HEIC Photos — WhatsApp Ready</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          iPhones shoot in HEIC format by default since iOS 11. The WhatsApp mobile app handles HEIC
          internally when sharing from the camera roll, but the WhatsApp Web interface and WhatsApp
          Desktop app may not accept HEIC files directly. This tool converts HEIC to JPEG and
          resizes to your target dimensions in one step.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          The output JPEG can be set as a WhatsApp profile picture, posted as a Status, or sent in
          any chat — from any browser or device, without needing the iOS camera roll workaround.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Tips for Better WhatsApp Images</h2>
        <ul className="space-y-2 text-sm text-text-muted">
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Send important photos as Documents.</strong> For
              business photos, product shots, or anything that needs to remain sharp, always use
              &quot;Share as Document&quot; to bypass WhatsApp compression entirely.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Use 9:16 vertical images for Status.</strong> Any
              other ratio results in black bars or cropping. 1080×1920px fills the full screen on
              every phone, from small Android devices to large iPhone Pro Max screens.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Keep sticker files under 100KB.</strong> WhatsApp
              stickers must be under 100KB in WebP format. Use this tool to resize the sticker
              canvas to 512×512px, then convert to WebP with compression for the size limit.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Resize before sharing in groups.</strong> Large
              group chats fill members&apos; storage quickly. Resizing images before sending reduces
              the download burden on recipients, especially in groups with older phones or limited
              storage.
            </span>
          </li>
        </ul>
      </div>

      <div className="bg-surface border border-border rounded-xl p-5 space-y-2">
        <h2 className="text-base font-bold text-text-main">
          Privacy — Your Photos Never Leave Your Device
        </h2>
        <p className="text-sm text-text-muted leading-relaxed">
          All resizing happens 100% in your browser using the HTML5 Canvas API. Your images are
          never uploaded to a server, never stored, and never analyzed. This is especially important
          for personal and family photos shared on WhatsApp — there is no cloud account, no
          retention policy, and no third-party access of any kind.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">More Free Image Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            {
              href: '/compress-image-for-whatsapp',
              label: 'Compress for WhatsApp',
              desc: 'Reduce file size for faster sending.',
            },
            {
              href: '/resize-image-for-instagram/',
              label: 'Resize for Instagram',
              desc: 'Square, portrait, story, and reel sizes.',
            },
            {
              href: '/resize-image-for-facebook/',
              label: 'Resize for Facebook',
              desc: 'Cover, post, story, and profile sizes.',
            },
            {
              href: '/heic-to-jpg/',
              label: 'HEIC to JPG',
              desc: 'Convert iPhone photos to JPEG.',
            },
            {
              href: '/resize-image/',
              label: 'Resize by Pixels',
              desc: 'Set any custom width & height.',
            },
            {
              href: '/compress-image',
              label: 'Compress Image',
              desc: 'Reduce file size before sharing.',
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

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Frequently Asked Questions</h2>
        <dl className="space-y-2">
          {[
            {
              question: 'What is the best size for a WhatsApp status image?',
              answer:
                '1080×1920px (9:16 ratio). This fills the full screen on all phones without black bars or cropping. Any other ratio results in WhatsApp adding black letterbox bars.',
            },
            {
              question: 'What is the WhatsApp profile picture size?',
              answer:
                'Upload at 500×500px. WhatsApp displays profile pictures as a circle — at 54×54px in the chat list and up to 500×500px in the profile view. A centered face or logo with good contrast looks best.',
            },
            {
              question: 'How do I stop WhatsApp from compressing my photos?',
              answer:
                'Share images as a Document instead of a Photo. Tap the attachment icon → Document → select your image. This bypasses the photo compression pipeline and delivers the original file to the recipient.',
            },
            {
              question: 'Can I use a HEIC photo from my iPhone on WhatsApp?',
              answer:
                'The WhatsApp mobile app handles HEIC from the camera roll, but WhatsApp Web and Desktop may not accept HEIC files. Upload your HEIC photo here — it converts to JPEG and resizes to your chosen WhatsApp dimensions in one step.',
            },
            {
              question: 'What size should WhatsApp stickers be?',
              answer:
                'WhatsApp stickers must be 512×512px and under 100KB in WebP format. Resize your image to 512×512px here, then use an image converter to save as WebP with sufficient compression to reach under 100KB.',
            },
            {
              question: 'Why does my WhatsApp status have black bars?',
              answer:
                'Black bars appear when your image is not 9:16 ratio. WhatsApp letterboxes images that are wider than tall (landscape) or not tall enough. Resize to 1080×1920px using this tool to fill the full screen.',
            },
            {
              question: 'Does WhatsApp reduce image quality?',
              answer:
                'Yes. WhatsApp compresses chat photos significantly — a 5MB photo becomes roughly 100–300KB. Send as Document to bypass compression. For Status and profile pictures, upload at the recommended dimensions to minimize resampling.',
            },
            {
              question: 'Is this WhatsApp image resizer free?',
              answer:
                'Yes, completely free. No sign-up, no watermark, no usage limits. All processing happens in your browser — your photos never leave your device.',
            },
          ].map(({ question, answer }) => (
            <FAQItem key={question} question={question} answer={answer} />
          ))}
        </dl>
      </div>
    </section>
  )
}
