import Link from 'next/link'
import FAQItem from './FAQItem'

export default function LinkedInResizeContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to resizing images for LinkedIn"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Official LinkedIn Image Size Requirements
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          LinkedIn is the world&apos;s largest professional network. Every image you post — from
          your profile picture to a company page banner — is judged by potential employers, clients,
          and partners. Uploading at the correct dimensions ensures your images look sharp and
          professional across all devices.
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
                  type: 'Post Image',
                  dim: '1200×627px',
                  max: '5MB',
                  note: 'Feed posts, articles, sponsored content',
                },
                {
                  type: 'Profile Banner',
                  dim: '1584×396px',
                  max: '8MB',
                  note: 'Personal profile background photo',
                },
                {
                  type: 'Profile Picture',
                  dim: '400×400px',
                  max: '8MB',
                  note: 'Displayed as circle, min 200×200',
                },
                {
                  type: 'Company Logo',
                  dim: '300×300px',
                  max: '4MB',
                  note: 'Square, appears in search results',
                },
                {
                  type: 'Company Cover',
                  dim: '1128×191px',
                  max: '8MB',
                  note: 'Company page banner',
                },
                {
                  type: 'Blog Post Image',
                  dim: '1200×627px',
                  max: '5MB',
                  note: 'LinkedIn article cover photo',
                },
                {
                  type: 'Carousel Post',
                  dim: '1080×1080px',
                  max: '10MB',
                  note: 'Document/PDF carousel slide',
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
          LinkedIn accepts JPG, PNG, and GIF formats. PNG is recommended for logos and images with
          text — it avoids the JPEG artifacts that can make text appear blurry.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How to Resize an Image for LinkedIn — 3 Steps
        </h2>
        <ol className="space-y-3">
          {[
            {
              step: '1',
              title: 'Select your LinkedIn image type',
              body: 'Choose the format at the top — Post Image (1200×627), Profile Banner (1584×396), Profile Picture (400×400), or Company Logo (300×300). Post Image is the best default for sharing content in the feed.',
            },
            {
              step: '2',
              title: 'Upload your image',
              body: 'Click the upload area or drag and drop your JPG, PNG, WebP, or HEIC file. HEIC photos from iPhone are automatically converted to JPEG. Processing starts immediately.',
            },
            {
              step: '3',
              title: 'Download and upload to LinkedIn',
              body: "Download the resized image and upload it directly to your LinkedIn profile, company page, or post. The dimensions match LinkedIn's exact specifications — no further cropping occurs.",
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
        <h2 className="text-xl font-bold text-text-main">LinkedIn Post Image — What Works Best</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          LinkedIn post images display at 1200×627px in the feed (1.91:1 ratio). This is the same
          ratio as Facebook post images and YouTube thumbnails — a wide, landscape format. Posts
          with images consistently get higher engagement than text-only posts on LinkedIn, making
          image sizing a ranking factor for organic reach.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            {
              label: '1200×627px',
              verdict: 'Optimal',
              desc: 'Displays at full width in the feed. No cropping. Maximum visual impact.',
            },
            {
              label: '1080×1080px',
              verdict: 'Good',
              desc: 'Square format, slightly letterboxed in the feed but widely used for carousels.',
            },
            {
              label: 'Other sizes',
              verdict: 'Cropped',
              desc: 'LinkedIn crops or pads images outside the 1.91:1 or 1:1 ratio — reduces quality.',
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
        <h2 className="text-xl font-bold text-text-main">
          LinkedIn Profile Banner — Safe Zone Guide
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          The LinkedIn profile banner (1584×396px) is your most valuable personal branding real
          estate. It appears behind your profile picture in the top section of your profile. There
          are two areas to be careful about:
        </p>
        <ul className="space-y-2 text-sm text-text-muted">
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Bottom-left corner is covered.</strong> Your
              profile picture (displayed as a circle) overlaps the bottom-left area of the banner.
              Keep the bottom-left ~200×200px clear of important content.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Mobile crops the sides.</strong> On mobile,
              LinkedIn shows a narrower crop of the banner. Keep text and logos in the horizontal
              center to ensure they remain visible on smaller screens.
            </span>
          </li>
        </ul>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Does LinkedIn Compress Images?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Yes. LinkedIn compresses all uploaded images. The platform targets smaller file sizes for
          fast loading across global networks, which can reduce quality — particularly for images
          with fine text or gradients. To minimize compression artifacts:
        </p>
        <ul className="space-y-2 text-sm text-text-muted">
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Upload at exactly 1200×627px for posts.</strong>{' '}
              LinkedIn resamples images that are the wrong size, adding a second compression pass.
              Exact dimensions skip this step.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Use PNG for logos and text-heavy images.</strong>{' '}
              PNG lossless compression preserves sharp edges on text and logos. LinkedIn still
              converts it internally, but starts from a higher-quality source.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Keep file size under 5MB for posts.</strong>{' '}
              LinkedIn rejects post images over 5MB. A 1200×627 JPEG at quality 90 is typically
              200–400KB — well within the limit.
            </span>
          </li>
        </ul>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Tips for High-Performing LinkedIn Images
        </h2>
        <ul className="space-y-2 text-sm text-text-muted">
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Include a face in the image.</strong> LinkedIn
              posts with a human face in the image consistently show higher engagement. The
              algorithm interprets face presence as a signal of authenticity and personal content.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Add text overlays for data posts.</strong>{' '}
              Statistics, quotes, and key points overlaid on an image stop the scroll better than
              plain text posts. Use large, bold text at 60px+ at the 1200px canvas size.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Use a professional headshot for profile.</strong>{' '}
              LinkedIn profile pictures display small in the feed (48×48px). Use a clear, centered
              headshot with a solid or blurred background — it reads better at small sizes.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Brand your banner with a CTA or tagline.</strong>{' '}
              The profile banner is the first thing visitors see. Include your professional tagline,
              areas of expertise, or a call to action — kept away from the bottom-left where the
              profile picture overlaps.
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
          for professional headshots and company materials — there is no cloud account, no retention
          policy, and no third-party access of any kind.
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
              href: '/resize-image-for-youtube-thumbnail/',
              label: 'Resize for YouTube',
              desc: 'Perfect 1280×720 thumbnails and channel art.',
            },
            {
              href: '/compress-image-for-linkedin',
              label: 'Compress for LinkedIn',
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
              question: 'What is the LinkedIn banner size?',
              answer:
                'The LinkedIn personal profile banner size is 1584×396px. Company page banners are 1128×191px. Upload at these exact dimensions to prevent LinkedIn from cropping or stretching your image.',
            },
            {
              question: 'What is the best image size for a LinkedIn post?',
              answer:
                '1200×627px (1.91:1 ratio). This displays at full width in the LinkedIn feed without cropping. Square images (1200×1200) also display well and are widely used for carousel posts.',
            },
            {
              question: 'What size should my LinkedIn profile picture be?',
              answer:
                'Upload at least 400×400px. LinkedIn displays profile pictures as a circle at 200×200px in the feed and 400×400px on your profile. Center your subject and leave space around the edges since LinkedIn crops to a circle.',
            },
            {
              question: 'Why does my LinkedIn banner look blurry?',
              answer:
                'The most common cause is uploading a banner smaller than 1584×396px. LinkedIn upscales small images, creating blur. Resize to exactly 1584×396px using this tool and re-upload.',
            },
            {
              question: 'Can I use a HEIC photo for LinkedIn?',
              answer:
                'LinkedIn may not accept HEIC files in all browsers. Upload your HEIC photo here — it is automatically converted to JPEG and resized to your chosen LinkedIn dimensions in one step.',
            },
            {
              question: 'What format should I use for LinkedIn images?',
              answer:
                'JPEG for photos and images with complex colors. PNG for logos, text-heavy images, and anything requiring sharp edges. LinkedIn accepts both, but PNG is better for graphics.',
            },
            {
              question: 'Does LinkedIn reduce image quality?',
              answer:
                'Yes. LinkedIn compresses uploaded images for fast delivery. To minimize quality loss: upload at the exact recommended dimensions, keep file size under 5MB for posts, and use JPEG for photos or PNG for logos.',
            },
            {
              question: 'Is this LinkedIn image resizer free?',
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
