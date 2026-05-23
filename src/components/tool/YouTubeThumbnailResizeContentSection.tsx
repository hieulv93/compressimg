import Link from 'next/link'
import FAQItem from './FAQItem'

export default function YouTubeThumbnailResizeContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to resizing images for YouTube"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Official YouTube Image Size Requirements
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          YouTube displays your thumbnail across many surface areas — search results, suggested
          videos, the watch page, and mobile feeds — each at a different size. Uploading at the
          correct dimensions ensures your thumbnail looks sharp everywhere and is not recompressed
          by YouTube&apos;s resizing pipeline.
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
                  Max file size
                </th>
                <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">Format</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-text-muted text-xs">
              {[
                { type: 'Video Thumbnail', dim: '1280×720px', max: '2MB', fmt: 'JPG, PNG, WebP' },
                { type: 'Channel Art (Banner)', dim: '2560×1440px', max: '6MB', fmt: 'JPG, PNG' },
                { type: 'Channel Profile Picture', dim: '800×800px', max: '4MB', fmt: 'JPG, PNG' },
                { type: 'End Screen (element)', dim: '1280×720px', max: '2MB', fmt: 'JPG, PNG' },
                {
                  type: 'Community Post Image',
                  dim: '1080×1080px recommended',
                  max: '—',
                  fmt: 'JPG, PNG',
                },
              ].map(({ type, dim, max, fmt }) => (
                <tr key={type}>
                  <td className="px-4 py-3 font-medium text-text-main">{type}</td>
                  <td className="px-4 py-3 font-mono">{dim}</td>
                  <td className="px-4 py-3">{max}</td>
                  <td className="px-4 py-3">{fmt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted italic">
          Thumbnails must be at least 640×360px (360p). YouTube recommends 1280×720px (720p) as the
          standard — it displays correctly at all sizes from mobile to 4K screens.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How to Resize an Image for YouTube — 3 Steps
        </h2>
        <ol className="space-y-3">
          {[
            {
              step: '1',
              title: 'Select the YouTube image type',
              body: 'Choose your format at the top — Thumbnail (1280×720), Channel Art (2560×1440), Profile (800×800), or Community Post (1080×1080). The most important is Thumbnail: YouTube recommends 1280×720px at under 2MB.',
            },
            {
              step: '2',
              title: 'Upload your image',
              body: 'Click the upload area or drag and drop your JPG, PNG, WebP, or HEIC file. iPhone HEIC photos are automatically converted to JPEG. Processing starts immediately.',
            },
            {
              step: '3',
              title: 'Download and upload to YouTube Studio',
              body: "Download the resized image. In YouTube Studio, open your video → Details → Thumbnail → Upload thumbnail. The file will meet YouTube's dimension and size requirements.",
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
          Why YouTube Thumbnail Size Affects Your CTR
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          A YouTube thumbnail is the single most important factor in whether a viewer clicks your
          video. YouTube displays thumbnails at dozens of different sizes — from 120×67px in search
          autocomplete to 480×270px in the watch page sidebar — and a thumbnail optimized for the
          correct base resolution stays sharp at all of them.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          Uploading a thumbnail that is smaller than 1280×720px forces YouTube to upscale it,
          producing blurring and pixelation that signal low production quality to viewers. Uploading
          one that is larger than 1280×720px forces YouTube to downscale it through its own
          compression pipeline, adding JPEG artifacts.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            {
              label: '< 640×360px',
              verdict: 'Rejected',
              desc: 'YouTube will not allow thumbnails below the minimum resolution.',
            },
            {
              label: '640–1279×360–719px',
              verdict: 'Blurry',
              desc: 'YouTube upscales to 1280×720 — introduces blur and pixelation.',
            },
            {
              label: '1280×720px',
              verdict: 'Optimal',
              desc: 'Displays crisp at all sizes. No resampling by YouTube.',
            },
          ].map(({ label, verdict, desc }) => (
            <div key={label} className="rounded-xl border border-border p-4 space-y-1">
              <p className="font-mono text-xs text-text-muted">{label}</p>
              <p
                className={`font-bold text-sm ${verdict === 'Optimal' ? 'text-green-600' : verdict === 'Rejected' ? 'text-red-600' : 'text-amber-600'}`}
              >
                {verdict}
              </p>
              <p className="text-xs text-text-muted leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">YouTube Channel Art — Safe Zone Guide</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Channel Art (the banner at the top of your channel page) displays at different dimensions
          depending on the device. YouTube crops the center of the 2560×1440px image for each
          device. To prevent important content from being cut off:
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
                { device: 'Mobile', display: '1546×423px', safe: '1546×423px center' },
                { device: 'Tablet', display: '1855×423px', safe: '1546×423px center' },
                { device: 'Desktop', display: '2560×423px', safe: '1546×423px center' },
                { device: 'TV', display: '2560×1440px', safe: 'Full image visible' },
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
          Keep all text and logos within the 1546×423px center zone to ensure they appear on all
          devices. Use the full 2560×1440px canvas only for decorative background elements.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Does YouTube Compress Thumbnails?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Yes. YouTube re-encodes all thumbnails to JPEG, regardless of whether you upload a PNG or
          WebP. The platform targets a specific file size for fast delivery across all connection
          speeds. There are two practical implications:
        </p>
        <ul className="space-y-2 text-sm text-text-muted">
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">PNG transparency is lost.</strong> YouTube converts
              PNG alpha channels to a white or dark background. Do not rely on transparency in
              thumbnails.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Text may show JPEG artifacts.</strong> Sharp text
              and high-contrast edges are the first to show compression artifacts. Use bold, large
              text (minimum 60px at 1280×720) and high-contrast colors (white on dark, or dark on
              light) to remain legible after compression.
            </span>
          </li>
        </ul>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Tips for High-CTR YouTube Thumbnails</h2>
        <ul className="space-y-2 text-sm text-text-muted">
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Use a face with a strong expression.</strong>{' '}
              Thumbnails with a close-up face showing surprise, excitement, or curiosity
              consistently outperform text-only thumbnails across most niches.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Limit text to 3–5 words.</strong> The thumbnail
              displays at small sizes in search. Text-heavy thumbnails become unreadable. Use large,
              bold Impact or Arial Black at 60px+ at the 1280px canvas size.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Create visual contrast with the title.</strong>{' '}
              Your thumbnail and video title should communicate different parts of the story — the
              thumbnail creates curiosity, the title provides context.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Keep file size under 2MB.</strong> YouTube rejects
              thumbnails over 2MB. A 1280×720 JPEG at quality 85 is typically 150–400KB — well under
              the limit. If yours is over 2MB, compress it first.
            </span>
          </li>
        </ul>
      </div>

      <div className="bg-surface border border-border rounded-xl p-5 space-y-2">
        <h2 className="text-base font-bold text-text-main">
          Privacy — Your Files Never Leave Your Device
        </h2>
        <p className="text-sm text-text-muted leading-relaxed">
          All resizing happens 100% in your browser using the HTML5 Canvas API. Your thumbnail
          images are never uploaded to a server, never stored, and never analyzed by any third-party
          service.
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
              href: '/resize-image/',
              label: 'Resize by Pixels',
              desc: 'Set any custom width & height.',
            },
            {
              href: '/compress-image',
              label: 'Compress Image',
              desc: 'Reduce file size after resizing.',
            },
            {
              href: '/resize-images/',
              label: 'Batch Resize',
              desc: 'Resize up to 10 images at once as ZIP.',
            },
            {
              href: '/heic-to-jpg/',
              label: 'HEIC to JPG',
              desc: 'Convert iPhone photos to JPEG.',
            },
            {
              href: '/resize-image-to-200kb/',
              label: 'Resize to 200KB',
              desc: 'Keep thumbnail under 2MB with ease.',
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
              question: 'What size should a YouTube thumbnail be?',
              answer:
                "1280×720px (16:9 aspect ratio) at under 2MB. This is YouTube's official recommendation. It displays correctly at all sizes from mobile search results to desktop watch page.",
            },
            {
              question: 'What format should I use for YouTube thumbnails?',
              answer:
                'JPEG is the best choice — it gives the smallest file size at high quality. YouTube accepts PNG and WebP but converts them to JPEG internally. PNG is only useful if your thumbnail has transparent elements, which YouTube will anyway render on a solid background.',
            },
            {
              question: 'Why is my YouTube thumbnail blurry?',
              answer:
                'The most common cause is uploading a thumbnail smaller than 1280×720px. YouTube upscales small thumbnails, creating blur. Resize to exactly 1280×720px using this tool, then re-upload. The second common cause is JPEG compression artifacts from saving at low quality.',
            },
            {
              question: 'Can I use a HEIC photo as a YouTube thumbnail?',
              answer:
                'YouTube does not accept HEIC files. Upload your HEIC photo here — it will be automatically converted to JPEG and resized to 1280×720px in one step. Download the result and upload to YouTube Studio.',
            },
            {
              question: 'What is the YouTube channel art size?',
              answer:
                '2560×1440px. YouTube crops this image differently on TV (full image), desktop (2560×423px strip), tablet (1855×423px strip), and mobile (1546×423px strip). Keep all important content in the central 1546×423px zone.',
            },
            {
              question: 'Does YouTube reduce thumbnail quality?',
              answer:
                'Yes. YouTube re-encodes all thumbnails to JPEG at its own quality setting. To minimize this: upload at exactly 1280×720px (prevents resampling), use JPEG format (avoids a PNG-to-JPEG conversion step), and keep text large and high-contrast.',
            },
            {
              question: 'How do I resize a thumbnail without losing quality?',
              answer:
                'Always resize down, never up. Start with an image that is at least 1280×720px and resize it down to exactly 1280×720px. Downscaling preserves sharpness. Upscaling a smaller image always introduces blur.',
            },
            {
              question: 'Is this YouTube thumbnail resizer free?',
              answer:
                'Yes, completely free. No account needed, no watermark, no usage limits. All processing runs in your browser — your images never leave your device.',
            },
          ].map(({ question, answer }) => (
            <FAQItem key={question} question={question} answer={answer} />
          ))}
        </dl>
      </div>
    </section>
  )
}
