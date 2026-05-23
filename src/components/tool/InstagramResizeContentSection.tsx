import Link from 'next/link'
import FAQItem from './FAQItem'

export default function InstagramResizeContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to resizing images for Instagram"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Official Instagram Image Size Requirements
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Instagram accepts multiple aspect ratios, but it recompresses and crops any image that
          falls outside its accepted range. Uploading the correct pixel dimensions prevents
          automatic cropping and preserves maximum quality. Here are the exact specs for every
          Instagram format:
        </p>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-surface">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">Format</th>
                <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">
                  Dimensions
                </th>
                <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">Ratio</th>
                <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">
                  Best for
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-text-muted text-xs">
              {[
                {
                  fmt: 'Square Post',
                  dim: '1080×1080px',
                  ratio: '1:1',
                  use: 'Grid uniformity, product shots',
                },
                {
                  fmt: 'Portrait Post',
                  dim: '1080×1350px',
                  ratio: '4:5',
                  use: 'Max feed real estate, portraits',
                },
                {
                  fmt: 'Landscape Post',
                  dim: '1080×566px',
                  ratio: '1.91:1',
                  use: 'Cinematic, panoramic shots',
                },
                {
                  fmt: 'Story',
                  dim: '1080×1920px',
                  ratio: '9:16',
                  use: 'Full-screen vertical content',
                },
                {
                  fmt: 'Reel',
                  dim: '1080×1920px',
                  ratio: '9:16',
                  use: 'Short-form video cover frame',
                },
                {
                  fmt: 'Carousel (each slide)',
                  dim: '1080×1080px',
                  ratio: '1:1',
                  use: 'Multi-image posts, tutorials',
                },
                {
                  fmt: 'Profile Picture',
                  dim: '320×320px',
                  ratio: '1:1',
                  use: 'Display at 110×110px on mobile',
                },
              ].map(({ fmt, dim, ratio, use }) => (
                <tr key={fmt}>
                  <td className="px-4 py-3 font-medium text-text-main">{fmt}</td>
                  <td className="px-4 py-3 font-mono">{dim}</td>
                  <td className="px-4 py-3">{ratio}</td>
                  <td className="px-4 py-3">{use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted italic">
          Instagram minimum width is 320px. Maximum display width is 1080px — uploading larger
          images does not improve quality and wastes storage.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How to Resize Images for Instagram — 3 Steps
        </h2>
        <ol className="space-y-3">
          {[
            {
              step: '1',
              title: 'Select your format',
              body: 'Choose the Instagram format at the top — Square (1080×1080), Portrait (1080×1350), Story (1080×1920), or Landscape (1080×566). Portrait takes up the most space in the feed and is the best default for most photos.',
            },
            {
              step: '2',
              title: 'Upload your image',
              body: 'Click the upload area or drag and drop your JPG, PNG, WebP, or HEIC file. HEIC photos from iPhone are automatically converted to JPEG. Processing starts immediately — no button to click.',
            },
            {
              step: '3',
              title: 'Download and post',
              body: 'The resized image downloads as a JPEG at your chosen dimensions. Upload directly to Instagram — no further resizing will occur because the image already matches the platform specification.',
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
          Instagram Post Formats — Which One to Use
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              label: 'Square (1080×1080) — 1:1',
              desc: 'The original Instagram format. Safe for all images — the grid looks clean and consistent. Best for product photography, flat lays, and profile-building grids.',
            },
            {
              label: 'Portrait (1080×1350) — 4:5',
              desc: 'Takes up 35% more vertical space in the feed than a square post. Higher visibility, more scroll-stop power. Best for portraits, food, and lifestyle photos.',
            },
            {
              label: 'Landscape (1080×566) — 1.91:1',
              desc: 'Shows less of the feed than square or portrait. Best for architectural, nature, and cinematic shots where the wide frame is the point.',
            },
            {
              label: 'Story/Reel (1080×1920) — 9:16',
              desc: 'Full screen on all phones. Leave a safe zone of roughly 250px top and bottom for the UI overlay. Best for immersive, full-attention content.',
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
        <h2 className="text-xl font-bold text-text-main">Does Instagram Compress Your Images?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Yes. Instagram applies JPEG compression to all uploaded photos, regardless of the original
          format or quality. The compression algorithm is designed to reduce bandwidth and storage
          costs — not to preserve image quality.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          To minimize compression artifacts, follow these two rules:
        </p>
        <ul className="space-y-2 text-sm text-text-muted">
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Upload exactly 1080px wide.</strong> Instagram
              resamples images that are larger or smaller than 1080px — adding a second round of
              quality loss. Uploading exactly 1080px wide bypasses this resampling step.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Upload as JPEG at high quality.</strong> PNG and
              WebP files are converted to JPEG by Instagram anyway. Starting with a high-quality
              JPEG gives the platform less to degrade.
            </span>
          </li>
        </ul>
        <p className="text-text-muted text-sm leading-relaxed">
          This tool outputs JPEG at high quality (quality 92) at exactly the Instagram-spec
          dimensions, which gives Instagram the best possible starting material.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">iPhone HEIC Photos — Upload Directly</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          iPhones shoot in HEIC format by default since iOS 11. HEIC is not accepted by
          Instagram&apos;s web uploader and causes errors in many third-party tools. This tool
          accepts HEIC files directly and converts them to JPEG before resizing — no extra step
          needed.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          The output is a standard JPEG at the exact Instagram dimensions you selected. You can
          upload it to Instagram immediately, or use it in any other app that expects JPEG input.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Tips for the Best Instagram Image Quality
        </h2>
        <ul className="space-y-2 text-sm text-text-muted">
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Start with the largest file you have.</strong>{' '}
              Resizing down from a 12MP phone photo to 1080px wide preserves far more detail than
              starting with a compressed 400px thumbnail.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Use Portrait (4:5) for most photos.</strong> The
              extra vertical height means your post takes up more of the screen when followers
              scroll — proven to increase engagement.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">
                For carousels, use the same ratio for all slides.
              </strong>{' '}
              Instagram crops carousel slides to match the first slide&apos;s ratio. If your first
              slide is square, all slides will display as square.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Avoid upscaling.</strong> Enlarging a small image
              to 1080px wide creates visible blurring. Always start with a photo larger than your
              target Instagram size.
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
          for personal photos — there is no cloud account, no retention policy, and no third-party
          access of any kind.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">More Free Image Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            {
              href: '/resize-image/',
              label: 'Resize by Pixels',
              desc: 'Set any custom width & height with aspect ratio lock.',
            },
            {
              href: '/resize-image-for-youtube-thumbnail/',
              label: 'Resize for YouTube',
              desc: 'Perfect 1280×720 thumbnails and channel art.',
            },
            {
              href: '/compress-image',
              label: 'Compress Image',
              desc: 'Reduce file size up to 90% after resizing.',
            },
            {
              href: '/resize-images/',
              label: 'Batch Resize',
              desc: 'Resize up to 10 images at once as ZIP.',
            },
            {
              href: '/heic-to-jpg/',
              label: 'HEIC to JPG',
              desc: 'Convert iPhone photos without resizing.',
            },
            {
              href: '/resize-image-in-kb/',
              label: 'Resize in KB',
              desc: 'Hit an exact file size — 20KB, 50KB, 100KB.',
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
              question: 'What is the best image size for an Instagram post?',
              answer:
                'For maximum visibility in the feed, use Portrait (1080×1350px, 4:5 ratio) — it takes up 35% more vertical space than a square. For a clean grid, use Square (1080×1080px). For Stories and Reels, use 1080×1920px (9:16).',
            },
            {
              question: 'Does Instagram reduce image quality when you upload?',
              answer:
                'Yes. Instagram recompresses all images to JPEG. To minimize quality loss, upload exactly 1080px wide — this skips the resampling step. Uploading a larger image causes Instagram to downsample it, adding a second round of compression.',
            },
            {
              question: 'Can I upload a HEIC photo from my iPhone to Instagram?',
              answer:
                "Instagram's web uploader does not accept HEIC files directly. Use this tool to convert and resize HEIC to JPEG at the correct Instagram dimensions — then upload the JPEG file without any issues.",
            },
            {
              question: 'What happens if I upload the wrong size to Instagram?',
              answer:
                'Instagram automatically crops or pads images that fall outside its accepted ratio range (between 4:5 and 1.91:1). For example, a very tall portrait (taller than 4:5) gets cropped at the top and bottom. Always resize to the correct dimensions before uploading.',
            },
            {
              question: 'Should I upload PNG or JPEG to Instagram?',
              answer:
                'JPEG. Instagram converts PNG files to JPEG anyway, adding its own compression on top of the PNG. Starting with a high-quality JPEG gives Instagram the best source material to work with.',
            },
            {
              question: 'What is the Instagram Story safe zone?',
              answer:
                'Instagram Stories are 1080×1920px (9:16). The top and bottom ~250px are covered by the profile name, date, and link button UI. Keep important content (faces, text, product) in the middle 1080×1420px zone to avoid being obscured.',
            },
            {
              question: 'How do I resize multiple photos for Instagram at once?',
              answer:
                'Use the Batch Resize tool — upload up to 10 images and resize them all to the same Instagram dimensions in one step. All resized images download as a single ZIP file.',
            },
            {
              question: 'Is this Instagram resize tool free?',
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
