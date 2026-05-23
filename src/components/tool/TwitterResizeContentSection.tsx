import Link from 'next/link'
import FAQItem from './FAQItem'

export default function TwitterResizeContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to resizing images for Twitter / X"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Official Twitter / X Image Size Requirements
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Twitter (now rebranded as X) displays images across the feed, profile, and link previews
          at different dimensions. Uploading at the correct pixel dimensions prevents Twitter from
          resampling your image and adding compression artifacts. Here are the exact specifications
          for every Twitter image type:
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
                  type: 'Post Image (single)',
                  dim: '1200×675px',
                  ratio: '16:9',
                  note: 'Displays full-width in feed',
                },
                {
                  type: 'Post Image (2 images)',
                  dim: '1200×675px each',
                  ratio: '16:9',
                  note: 'Twitter crops to 1:1 in preview',
                },
                {
                  type: 'Header / Banner',
                  dim: '1500×500px',
                  ratio: '3:1',
                  note: 'Cropped differently on mobile',
                },
                {
                  type: 'Profile Picture',
                  dim: '400×400px',
                  ratio: '1:1',
                  note: 'Cropped to circle by Twitter',
                },
                {
                  type: 'Twitter Card (link)',
                  dim: '1200×628px',
                  ratio: '1.91:1',
                  note: 'og:image for link previews',
                },
                {
                  type: 'In-stream Photo (max)',
                  dim: '5120×4096px',
                  ratio: 'Any',
                  note: 'Max upload size, shown cropped in feed',
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
          Twitter accepts JPG, PNG, GIF, and WebP. Maximum file size is 5MB for photos and 15MB for
          GIFs. Images wider than 1280px are downscaled by Twitter.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How to Resize an Image for Twitter — 3 Steps
        </h2>
        <ol className="space-y-3">
          {[
            {
              step: '1',
              title: 'Select your Twitter image type',
              body: 'Choose the format at the top — Post Image (1200×675), Header (1500×500), Profile Picture (400×400), or Twitter Card (1200×628). Post Image is the best default for tweet photos — it displays at full width in the feed.',
            },
            {
              step: '2',
              title: 'Upload your image',
              body: 'Click the upload area or drag and drop your JPG, PNG, WebP, or HEIC file. HEIC photos from iPhone are automatically converted to JPEG. Processing starts immediately.',
            },
            {
              step: '3',
              title: 'Download and post to Twitter / X',
              body: 'Download the resized image and attach it to your tweet, or upload it as your profile picture or header. The dimensions match what Twitter expects — no further cropping occurs.',
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
          Twitter Post Image Ratios — Which Displays Best
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Twitter supports multiple aspect ratios for post images, but they display differently in
          the feed. The ratio you choose affects how much vertical space your tweet takes up — and
          therefore how much attention it receives.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            {
              label: '1200×675px — 16:9',
              verdict: 'Optimal',
              desc: 'Displays at full width. Maximum visual real estate in the feed. Best for photos, screenshots, and graphics.',
            },
            {
              label: '1200×1200px — 1:1',
              verdict: 'Good',
              desc: 'Square format. Slightly more compact than 16:9 but works well for product shots and illustrations.',
            },
            {
              label: '1080×1350px — 4:5',
              verdict: 'Cropped',
              desc: 'Twitter crops portrait images to 16:9 in the feed preview. The full image is visible after clicking.',
            },
          ].map(({ label, verdict, desc }) => (
            <div key={label} className="rounded-xl border border-border p-4 space-y-1">
              <p className="font-mono text-xs text-text-muted">{label}</p>
              <p
                className={`font-bold text-sm ${verdict === 'Optimal' ? 'text-green-600' : verdict === 'Good' ? 'text-amber-600' : 'text-red-600'}`}
              >
                {verdict}
              </p>
              <p className="text-xs text-text-muted leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Twitter Header — Safe Zone Guide</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          The Twitter header (1500×500px) is your profile&apos;s most visible branding asset. It
          displays differently on desktop and mobile, and your profile picture circle overlaps the
          bottom-left corner. Understanding these overlaps prevents important content from being
          obscured.
        </p>
        <ul className="space-y-2 text-sm text-text-muted">
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Bottom-left is covered by profile picture.</strong>{' '}
              Your profile circle overlaps the bottom-left roughly 200×200px. Keep logos and text
              away from the bottom-left corner.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Mobile crops the sides.</strong> On mobile, Twitter
              shows a taller crop of the header, cutting the left and right edges. Keep important
              content horizontally centered.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Safe zone: center 1260×420px.</strong> Content
              within this area is visible on both desktop and mobile, clear of the profile picture
              overlap.
            </span>
          </li>
        </ul>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Does Twitter Compress Images?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Yes. Twitter converts all uploaded images to JPEG or WebP depending on the viewer&apos;s
          browser, applying its own compression. The compression is noticeable on images with fine
          text or gradients. To minimize quality loss:
        </p>
        <ul className="space-y-2 text-sm text-text-muted">
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Upload PNG for graphics with text.</strong> Twitter
              serves PNG images to browsers that support it, preserving sharp text better than JPEG.
              For photos, JPEG is fine.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Keep file size under 5MB.</strong> Twitter rejects
              images over 5MB. A 1200×675 JPEG at quality 90 is typically 150–350KB — well within
              the limit.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Upload at 1200×675px for post images.</strong>{' '}
              Twitter resamples images outside the expected ratio, adding a second compression pass.
              Exact dimensions skip the resampling step.
            </span>
          </li>
        </ul>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Twitter Card Images for Link Previews</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          When you share a URL on Twitter, the platform fetches the page&apos;s Open Graph
          (og:image) tag and displays it as a Twitter Card. Twitter Cards appear at 1200×628px in a
          summary_large_image card format. If your website&apos;s og:image is not set or is the
          wrong size, Twitter falls back to a small square thumbnail — significantly reducing
          click-through rates.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          Use this tool to resize your og:image to 1200×628px before setting it on your website.
          This ensures your shared links show the full-width Twitter Card format instead of the
          small fallback.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">iPhone HEIC Photos — Twitter Ready</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Twitter does not accept HEIC files. When you try to upload a HEIC photo directly to
          Twitter from a desktop browser, the upload either fails silently or shows a format error.
          This tool accepts HEIC files and converts them to JPEG before resizing — no extra step
          needed.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Tips for High-Performing Twitter Images
        </h2>
        <ul className="space-y-2 text-sm text-text-muted">
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">
                Always attach an image to important tweets.
              </strong>{' '}
              Tweets with images get 150% more retweets than text-only tweets. Even a simple branded
              graphic outperforms a plain text post.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Use 16:9 for maximum feed height.</strong> A
              1200×675px image takes up the most vertical space in the Twitter feed, giving your
              tweet more scroll-stopping power than a square or portrait image.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Add alt text to all images.</strong> Twitter allows
              alt text on uploaded images. Alt text improves accessibility and may influence how
              Twitter&apos;s algorithm understands your content.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">
                Use PNG for screenshots and slide-style graphics.
              </strong>{' '}
              Twitter compresses JPEGs heavily for text-heavy images. Uploading as PNG preserves
              sharp text in graphics and screenshots.
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
              href: '/resize-image-for-facebook/',
              label: 'Resize for Facebook',
              desc: 'Cover, post, story, and profile sizes.',
            },
            {
              href: '/resize-image-for-linkedin/',
              label: 'Resize for LinkedIn',
              desc: 'Banner, post, and profile picture sizes.',
            },
            {
              href: '/resize-image-for-youtube-thumbnail/',
              label: 'Resize for YouTube',
              desc: 'Perfect 1280×720 thumbnails and channel art.',
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
              question: 'What is the best image size for a Twitter post?',
              answer:
                '1200×675px (16:9 ratio). This displays at full width in the Twitter / X feed without cropping. It gives your tweet the maximum vertical space and visual impact.',
            },
            {
              question: 'What is the Twitter header size?',
              answer:
                '1500×500px. Twitter crops the header differently on desktop and mobile — keep important content in the center 1260×420px safe zone, away from the bottom-left where your profile picture overlaps.',
            },
            {
              question: 'What size is a Twitter profile picture?',
              answer:
                'Twitter profile pictures should be at least 400×400px. They display as a circle — at 48×48px next to tweets and up to 400×400px in the profile view. Center your subject with space around the edges.',
            },
            {
              question: 'Why does my Twitter image look blurry?',
              answer:
                'The most common cause is uploading an image at the wrong dimensions. Twitter resamples images that are too large or too small, adding blur. Upload at exactly 1200×675px for post images using this tool.',
            },
            {
              question: 'What is the Twitter Card image size?',
              answer:
                '1200×628px. This is the og:image size that generates a summary_large_image Twitter Card when your URL is shared. Use this size for any image you want to appear as a full-width link preview on Twitter.',
            },
            {
              question: 'Can I use a HEIC photo on Twitter?',
              answer:
                'Twitter does not accept HEIC files. Upload your HEIC photo here — it is automatically converted to JPEG and resized to your chosen Twitter dimensions in one step.',
            },
            {
              question: 'Should I upload PNG or JPEG to Twitter?',
              answer:
                'PNG for graphics with text, logos, or screenshots — Twitter preserves PNG sharpness better than JPEG for high-contrast edges. JPEG for photos — smaller file size with minimal visible quality difference.',
            },
            {
              question: 'Is this Twitter image resizer free?',
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
