import Link from 'next/link'
import FAQItem from './FAQItem'

export default function TikTokResizeContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to resizing images for TikTok"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">TikTok Image Size Requirements</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          TikTok is a vertical-first platform — nearly all content is designed for the 9:16 phone
          screen. Understanding the correct dimensions for video covers, profile pictures, and photo
          posts ensures your content displays without cropping or black bars on every device.
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
                  type: 'Video Cover',
                  dim: '1080×1920px',
                  ratio: '9:16',
                  note: 'Full-screen vertical thumbnail',
                },
                {
                  type: 'Profile Picture',
                  dim: '200×200px',
                  ratio: '1:1',
                  note: 'Cropped to circle, min 20×20',
                },
                {
                  type: 'Photo Post (vertical)',
                  dim: '1080×1920px',
                  ratio: '9:16',
                  note: 'TikTok Stories / slideshow',
                },
                {
                  type: 'Photo Post (square)',
                  dim: '1080×1080px',
                  ratio: '1:1',
                  note: 'Product shots, carousels',
                },
                {
                  type: 'Photo Post (landscape)',
                  dim: '1920×1080px',
                  ratio: '16:9',
                  note: 'Displayed with top/bottom bars',
                },
                {
                  type: 'Spark Ad / TopView',
                  dim: '1080×1920px',
                  ratio: '9:16',
                  note: 'Paid ad format, full screen',
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
          TikTok accepts JPG, PNG, and WebP for photo posts. Video covers must match the video
          aspect ratio — 9:16 for vertical videos (the standard format).
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How to Resize an Image for TikTok — 3 Steps
        </h2>
        <ol className="space-y-3">
          {[
            {
              step: '1',
              title: 'Select your TikTok image type',
              body: 'Choose the format at the top — Video Cover (1080×1920), Profile Picture (200×200), Square Post (1080×1080), or Landscape (1920×1080). Video Cover is the most important: it is the first thing viewers see before clicking play.',
            },
            {
              step: '2',
              title: 'Upload your image',
              body: 'Click the upload area or drag and drop your JPG, PNG, WebP, or HEIC file. HEIC photos from iPhone are automatically converted to JPEG. Processing starts immediately.',
            },
            {
              step: '3',
              title: 'Download and use on TikTok',
              body: 'Download the resized image. For video covers, upload it in the TikTok app when publishing your video. For profile pictures, go to Profile → Edit Profile → Change Photo.',
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
          TikTok Video Cover — Why It Matters for Views
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Your TikTok video cover is the thumbnail that appears on your profile grid, in the For You
          Page (FYP) preview, and in search results. Unlike Instagram or YouTube, TikTok surfaces
          content primarily through algorithm-driven recommendations — but your cover image still
          affects how viewers decide whether to watch your video when browsing your profile.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              label: 'Profile Grid',
              desc: 'Your last 9 videos form the first impression of your profile. Consistent cover styling signals a professional creator.',
            },
            {
              label: 'FYP Preview',
              desc: 'TikTok briefly shows the cover image before the video starts autoplaying. A clear, high-contrast cover grabs attention in that half-second window.',
            },
            {
              label: 'Search Results',
              desc: 'When users search for your topic, covers compete side by side. A cover that clearly communicates the video content gets more clicks.',
            },
            {
              label: 'Saved Collections',
              desc: 'When someone saves your video to a Collection, the cover is what they see in the list. A recognizable cover helps viewers find saved content.',
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
          TikTok Safe Zone — Where to Place Text and Faces
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          TikTok overlays UI elements on top of your video and cover image: the username and caption
          appear at the bottom, the like/comment/share buttons appear on the right side, and the
          music icon appears at the bottom-right. Content placed in these areas will be partially
          obscured.
        </p>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-surface">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">
                  UI element
                </th>
                <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">
                  Location
                </th>
                <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">
                  Keep clear
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-text-muted text-xs">
              {[
                {
                  element: 'Caption + username',
                  location: 'Bottom-left',
                  clear: 'Bottom 250px, left 80%',
                },
                {
                  element: 'Like / comment / share',
                  location: 'Right side',
                  clear: 'Right 15% of frame',
                },
                {
                  element: 'Music icon',
                  location: 'Bottom-right',
                  clear: 'Bottom-right 200×200px',
                },
                { element: 'Safe zone', location: 'Center', clear: '800×1200px center area' },
              ].map(({ element, location, clear }) => (
                <tr key={element}>
                  <td className="px-4 py-3 font-medium text-text-main">{element}</td>
                  <td className="px-4 py-3">{location}</td>
                  <td className="px-4 py-3">{clear}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Tips for High-Performing TikTok Covers</h2>
        <ul className="space-y-2 text-sm text-text-muted">
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Use a face with a strong expression.</strong> Human
              faces with clear emotions — surprise, excitement, or curiosity — stop the scroll
              faster than landscapes or product shots.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Add 3–5 words of bold text.</strong> Text on TikTok
              covers tells viewers exactly what they will learn or feel. Place text in the upper
              center area to avoid the caption and button overlays at the bottom.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Keep your cover style consistent.</strong> Creators
              who use a consistent cover style (same font, color scheme, or layout) build a
              recognizable grid that signals professionalism and attracts followers.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Avoid showing the end of the video.</strong> The
              best TikTok covers show the most intriguing moment — not the conclusion. Create
              curiosity, not closure.
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
              href: '/resize-image-for-twitter/',
              label: 'Resize for Twitter',
              desc: 'Post, header, and profile picture sizes.',
            },
            {
              href: '/compress-image-for-tiktok',
              label: 'Compress for TikTok',
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
              question: 'What is the TikTok video cover size?',
              answer:
                '1080×1920px (9:16 ratio). This matches the full-screen vertical video format. Your cover image should fill the entire canvas with important content in the center 800×1200px safe zone.',
            },
            {
              question: 'What size is a TikTok profile picture?',
              answer:
                'TikTok profile pictures display at 200×200px and are cropped to a circle. Upload at 200×200px or larger. Use a close-up face or logo centered in the frame — it must be recognizable at small sizes.',
            },
            {
              question: 'What image size should I use for TikTok photo posts?',
              answer:
                'For vertical photo posts (Stories/slideshows), use 1080×1920px (9:16). For square posts, use 1080×1080px. For landscape, use 1920×1080px — though TikTok will show black bars above and below.',
            },
            {
              question: 'Why does my TikTok cover look blurry?',
              answer:
                'Blurry TikTok covers are usually caused by uploading a low-resolution image (below 1080×1920px) that TikTok upscales, or by heavy JPEG compression. Upload at 1080×1920px using this tool for the sharpest result.',
            },
            {
              question: 'Can I use a HEIC photo for TikTok?',
              answer:
                'TikTok may not accept HEIC files on all devices. Upload your HEIC photo here — it is automatically converted to JPEG and resized to your chosen TikTok dimensions in one step.',
            },
            {
              question: 'Where should I put text on a TikTok cover?',
              answer:
                'Place text in the upper-center area of the 1080×1920px canvas. Avoid the bottom 250px (covered by caption and username) and the right 15% (covered by like/comment/share buttons).',
            },
            {
              question: 'Does TikTok compress images?',
              answer:
                'Yes. TikTok compresses images for fast mobile delivery. Upload at the exact recommended dimensions to avoid a second resampling step. JPEG at quality 90 is the best format for TikTok photo posts.',
            },
            {
              question: 'Is this TikTok image resizer free?',
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
