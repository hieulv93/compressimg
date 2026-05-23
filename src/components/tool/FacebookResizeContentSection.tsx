import Link from 'next/link'
import FAQItem from './FAQItem'

export default function FacebookResizeContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to resizing images for Facebook"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Official Facebook Image Size Requirements
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Facebook displays images across many surfaces — the feed, profile, cover photo, stories,
          and link previews — each with different dimensions and cropping rules. Uploading at the
          correct size prevents Facebook from resampling your image and adding compression
          artifacts.
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
                <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">Ratio</th>
                <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-text-muted text-xs">
              {[
                {
                  type: 'Post Image',
                  dim: '1200×630px',
                  ratio: '1.91:1',
                  note: 'Feed posts, link shares, ads',
                },
                {
                  type: 'Cover Photo (Profile)',
                  dim: '820×312px',
                  ratio: '~2.63:1',
                  note: 'Displays at 820×312 desktop, 640×360 mobile',
                },
                {
                  type: 'Cover Photo (Page)',
                  dim: '820×312px',
                  ratio: '~2.63:1',
                  note: 'Same as profile cover',
                },
                {
                  type: 'Profile Picture',
                  dim: '170×170px',
                  ratio: '1:1',
                  note: 'Cropped to circle, min 180×180',
                },
                {
                  type: 'Story',
                  dim: '1080×1920px',
                  ratio: '9:16',
                  note: 'Full-screen vertical',
                },
                {
                  type: 'Group Cover Photo',
                  dim: '1640×856px',
                  ratio: '~1.91:1',
                  note: 'Facebook Group banner',
                },
                {
                  type: 'Event Cover Photo',
                  dim: '1920×1005px',
                  ratio: '~1.91:1',
                  note: 'Facebook Events page',
                },
              ].map(({ type, dim, ratio, note }) => (
                <tr key={type}>
                  <td className="px-4 py-3 font-medium text-text-main">{type}</td>
                  <td className="px-4 py-3 font-mono">{dim}</td>
                  <td className="px-4 py-3">{ratio}</td>
                  <td className="px-4 py-3">{note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted italic">
          Facebook automatically crops images that fall outside its accepted dimensions. Always
          resize to the correct size before uploading to prevent unwanted cropping.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How to Resize an Image for Facebook — 3 Steps
        </h2>
        <ol className="space-y-3">
          {[
            {
              step: '1',
              title: 'Select your Facebook image type',
              body: 'Choose the format at the top — Post Image (1200×630), Cover Photo (820×312), Story (1080×1920), or Profile Picture (170×170). Post Image is the most versatile: it works for feed posts and link shares.',
            },
            {
              step: '2',
              title: 'Upload your image',
              body: 'Click the upload area or drag and drop your JPG, PNG, WebP, or HEIC file. HEIC photos from iPhone are automatically converted to JPEG. Processing starts immediately.',
            },
            {
              step: '3',
              title: 'Download and upload to Facebook',
              body: "Download the resized image and upload it directly to your Facebook profile, page, or post. The file will match Facebook's exact dimensions — no further cropping will occur.",
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
        <h2 className="text-xl font-bold text-text-main">Facebook Image Formats — Which to Use</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              label: 'Post Image (1200×630) — 1.91:1',
              desc: 'The best all-round Facebook image size. Works for photo posts, link shares, and ads. Facebook crops images taller or shorter than this ratio in the feed preview.',
            },
            {
              label: 'Cover Photo (820×312) — ~2.63:1',
              desc: 'The banner at the top of your profile or page. Facebook crops the top and bottom on mobile — keep important content in the center 640×312px area.',
            },
            {
              label: 'Story (1080×1920) — 9:16',
              desc: 'Full screen on all phones. The Facebook Story UI overlays at the top (profile name) and bottom (reply bar). Keep important content in the middle 1080×1420px zone.',
            },
            {
              label: 'Profile Picture (170×170) — 1:1',
              desc: 'Facebook crops profile pictures to a circle. Upload a square image with your subject centered. Facebook displays it at 170×170px on desktop and 128×128px on mobile.',
            },
          ].map(({ label, desc }) => (
            <div key={label} className="rounded-xl border border-border p-4 space-y-1">
              <h3 className="font-semibold text-text-main text-sm">{label}</h3>
              <p className="text-xs text-text-muted leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Facebook Cover Photo — Mobile Safe Zone
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          The cover photo (820×312px) displays differently on desktop and mobile. Facebook crops the
          top and bottom of your cover when viewed on mobile phones, showing only the center strip.
          This means text or logos placed near the edges of your cover photo may be cut off on
          mobile.
        </p>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-surface">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">Device</th>
                <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">
                  Display size
                </th>
                <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">
                  Safe zone
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-text-muted text-xs">
              {[
                { device: 'Desktop', display: '820×312px', safe: 'Full image visible' },
                { device: 'Mobile', display: '640×360px', safe: '640×312px center strip' },
              ].map(({ device, display, safe }) => (
                <tr key={device}>
                  <td className="px-4 py-3 font-medium text-text-main">{device}</td>
                  <td className="px-4 py-3 font-mono">{display}</td>
                  <td className="px-4 py-3">{safe}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted italic">
          Keep all text, logos, and important content within the center 640×312px area of your cover
          photo. Use the outer edges only for background elements.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Does Facebook Compress Images?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Yes. Facebook applies JPEG compression to all uploaded images, regardless of the original
          format. The compression is aggressive enough to visibly reduce quality — especially in
          images with fine detail, text, or gradients. Two rules minimize this compression:
        </p>
        <ul className="space-y-2 text-sm text-text-muted">
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Upload at the exact recommended size.</strong>{' '}
              Facebook resamples images that are larger or smaller than the expected dimensions,
              adding a second round of quality loss. Uploading at exactly 1200×630px for post images
              bypasses the resampling step.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Upload as JPEG, not PNG.</strong> Facebook converts
              PNG to JPEG with its own quality settings. Starting with a JPEG gives the platform the
              best possible input for its compression algorithm.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Keep file size under 8MB.</strong> Facebook rejects
              images over 8MB. A 1200×630 JPEG at quality 90 is typically 200–500KB — well within
              the limit.
            </span>
          </li>
        </ul>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">iPhone HEIC Photos — Upload Directly</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          iPhones shoot in HEIC format by default since iOS 11. While Facebook&apos;s mobile app
          handles HEIC internally, the Facebook web uploader and many third-party scheduling tools
          do not accept HEIC files directly. This tool accepts HEIC files and converts them to JPEG
          before resizing — no extra step needed.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          The output is a standard JPEG at the exact Facebook dimensions you selected. You can
          upload it to Facebook immediately from any browser or device.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Tips for Better Facebook Images</h2>
        <ul className="space-y-2 text-sm text-text-muted">
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Use 1200×630 for all shared links.</strong> When
              you share a URL, Facebook pulls the Open Graph image. If that image is 1200×630px,
              Facebook displays it at full width without cropping. Any other ratio gets cropped or
              letterboxed.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">
                Test your cover photo on mobile before publishing.
              </strong>{' '}
              View your profile on a phone after uploading. The mobile view crops the top and bottom
              — what looks balanced on desktop may have your logo cut off on mobile.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Use high contrast in profile pictures.</strong>{' '}
              Profile pictures display small in comments and reactions (32×32px). High-contrast
              images — dark background, light subject — remain recognizable at tiny sizes.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">For Stories, leave safe zones empty.</strong>{' '}
              Facebook Stories show the profile name at the top (roughly 250px) and a reply bar at
              the bottom (roughly 200px). Keep faces and text in the middle 1080×1470px area.
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
          never uploaded to a server, never stored, and never analyzed. There is no cloud account,
          no retention policy, and no third-party access of any kind.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">More Free Image Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            {
              href: '/resize-image-for-instagram/',
              label: 'Resize for Instagram',
              desc: 'Square, portrait, story, and reel sizes.',
            },
            {
              href: '/resize-image-for-youtube-thumbnail/',
              label: 'Resize for YouTube',
              desc: 'Perfect 1280×720 thumbnails and channel art.',
            },
            {
              href: '/resize-image-for-linkedin/',
              label: 'Resize for LinkedIn',
              desc: 'Banner, post, and profile picture sizes.',
            },
            {
              href: '/compress-image-for-facebook',
              label: 'Compress for Facebook',
              desc: 'Reduce file size before uploading.',
            },
            {
              href: '/resize-image/',
              label: 'Resize by Pixels',
              desc: 'Set any custom width & height.',
            },
            {
              href: '/heic-to-jpg/',
              label: 'HEIC to JPG',
              desc: 'Convert iPhone photos to JPEG.',
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
              question: 'What is the best image size for a Facebook post?',
              answer:
                '1200×630px (1.91:1 ratio) is the recommended size for Facebook post images and shared links. It displays at full width in the feed without cropping. For square images, 1200×1200px also works well.',
            },
            {
              question: 'What is the Facebook cover photo size?',
              answer:
                '820×312px for both personal profiles and pages. Facebook displays the cover at this size on desktop. On mobile, it crops to 640×360px, showing the center. Keep important content in the center 640×312px safe zone.',
            },
            {
              question: 'What size is a Facebook profile picture?',
              answer:
                'Facebook profile pictures display at 170×170px on desktop and 128×128px on mobile. They are displayed as a circle. Upload at least 170×170px — larger source images are cropped and downscaled by Facebook.',
            },
            {
              question: 'Why is my Facebook image blurry?',
              answer:
                'The most common cause is uploading an image at the wrong dimensions. Facebook upscales small images and downscales large ones — both processes add blur. Upload at exactly the recommended size for your image type using this tool.',
            },
            {
              question: 'What is the Facebook Story size?',
              answer:
                '1080×1920px (9:16 ratio). This fills the full screen on all phones. Facebook displays the profile name at the top and a reply bar at the bottom — keep important content in the middle 1080×1470px zone.',
            },
            {
              question: 'Can I use a HEIC photo from my iPhone on Facebook?',
              answer:
                "Facebook's mobile app handles HEIC internally, but the web uploader and many scheduling tools do not. Upload your HEIC file here — it is automatically converted to JPEG and resized to your chosen Facebook dimensions.",
            },
            {
              question: 'Does Facebook reduce image quality?',
              answer:
                'Yes. Facebook recompresses all uploaded images to JPEG. To minimize quality loss: upload at exactly the correct dimensions (prevents resampling), use JPEG format (avoids an extra conversion), and keep file size under 8MB.',
            },
            {
              question: 'Is this Facebook image resizer free?',
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
