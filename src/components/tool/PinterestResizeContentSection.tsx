import Link from 'next/link'
import FAQItem from './FAQItem'

export default function PinterestResizeContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to resizing images for Pinterest"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Pinterest Image Size Requirements</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Pinterest is a visual discovery platform — image size directly affects how much space your
          pin takes up in the feed and how many people see it. Taller pins occupy more vertical
          space, giving them more visibility than square or landscape images. Here are the exact
          specifications for every Pinterest image type:
        </p>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-surface">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">
                  Pin type
                </th>
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
                  type: 'Standard Pin',
                  dim: '1000×1500px',
                  ratio: '2:3',
                  use: 'Most content — recommended by Pinterest',
                },
                {
                  type: 'Square Pin',
                  dim: '1000×1000px',
                  ratio: '1:1',
                  use: 'Product shots, simple graphics',
                },
                {
                  type: 'Long Pin',
                  dim: '1000×2100px',
                  ratio: '1:2.1',
                  use: 'Step-by-step tutorials, recipes',
                },
                {
                  type: 'Infographic Pin',
                  dim: '1000×3000px',
                  ratio: '1:3',
                  use: 'Data, statistics, multi-step guides',
                },
                {
                  type: 'Story Pin (frame)',
                  dim: '1080×1920px',
                  ratio: '9:16',
                  use: 'Multi-page story posts',
                },
                {
                  type: 'Profile Picture',
                  dim: '165×165px',
                  ratio: '1:1',
                  use: 'Displayed as circle',
                },
              ].map(({ type, dim, ratio, use }) => (
                <tr key={type}>
                  <td className="px-4 py-3 font-medium text-text-main">{type}</td>
                  <td className="px-4 py-3 font-mono">{dim}</td>
                  <td className="px-4 py-3">{ratio}</td>
                  <td className="px-4 py-3">{use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted italic">
          Pinterest clips pins taller than 1:3 ratio in the feed — the full image is visible after
          clicking. Pinterest recommends 1000px wide and 1500px tall (2:3) as the standard for most
          content.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How to Resize an Image for Pinterest — 3 Steps
        </h2>
        <ol className="space-y-3">
          {[
            {
              step: '1',
              title: 'Select your Pinterest pin type',
              body: 'Choose the format at the top — Standard Pin (1000×1500), Square Pin (1000×1000), Long Pin (1000×2100), or Infographic (1000×3000). Standard Pin (2:3) is the recommended format for most content — it gets the most feed visibility.',
            },
            {
              step: '2',
              title: 'Upload your image',
              body: 'Click the upload area or drag and drop your JPG, PNG, WebP, or HEIC file. HEIC photos from iPhone are automatically converted to JPEG. Processing starts immediately.',
            },
            {
              step: '3',
              title: 'Download and pin to Pinterest',
              body: 'Download the resized image and upload it directly to Pinterest as a new Pin. Select your board, add a title and description, and publish. The image dimensions already match Pinterest specifications.',
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
          Pinterest Pin Formats — Which Gets More Views
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Pinterest displays content in a masonry grid where taller pins naturally occupy more
          vertical space — and more space means more visibility. The aspect ratio you choose
          directly affects how prominent your pin appears in the feed.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              label: 'Standard (1000×1500) — 2:3',
              desc: 'The recommended format. Takes up 50% more vertical space than a square pin. Gets the best visibility-to-content ratio without being clipped.',
            },
            {
              label: 'Square (1000×1000) — 1:1',
              desc: 'The least vertical space. Good for product shots where the subject is equally wide and tall. Lower feed visibility than 2:3.',
            },
            {
              label: 'Long (1000×2100) — 1:2.1',
              desc: 'More vertical space than 2:3, shown in full. Best for step-by-step tutorials and before/after comparisons where vertical storytelling matters.',
            },
            {
              label: 'Infographic (1000×3000) — 1:3',
              desc: 'Maximum height visible before Pinterest clips. Feed shows a "See more" prompt — clicks are required to see the full image. High intent traffic when the topic matches.',
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
          Pinterest SEO — How Image Size Affects Reach
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Pinterest functions as a visual search engine — pins are indexed and ranked by Pinterest
          Search, Google Image Search, and Google Web Search. Image size and quality affect how
          Pinterest ranks your pins in both internal and external search results.
        </p>
        <ul className="space-y-2 text-sm text-text-muted">
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Higher resolution = better quality signal.</strong>{' '}
              Pinterest gives preference to high-quality images in its recommendation algorithm.
              Upload at 1000px wide minimum — lower-resolution images are deprioritized.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Tall pins get more repins.</strong> Data from
              Pinterest creators consistently shows 2:3 and longer pins outperforming square pins
              for saves and repins — the primary Pinterest engagement metric.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Add text overlay with your keyword.</strong>{' '}
              Pinterest reads text in images for categorization. Including your target keyword as a
              text overlay (e.g., &quot;Easy Chicken Dinner Recipe&quot;) reinforces the topic
              signal for Pinterest Search.
            </span>
          </li>
        </ul>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Does Pinterest Compress Images?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Yes. Pinterest compresses all uploaded images to JPEG for fast delivery. The compression
          is moderate — less aggressive than Instagram or WhatsApp — but still visible on images
          with fine text or gradients. To get the best quality after Pinterest compression:
        </p>
        <ul className="space-y-2 text-sm text-text-muted">
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Upload at exactly 1000px wide.</strong> Pinterest
              resamples images wider or narrower than 1000px. Uploading at exactly 1000px wide skips
              the resampling step and preserves the most detail.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Use PNG for text-heavy infographics.</strong>{' '}
              Pinterest converts PNG to JPEG internally, but starting from PNG lossless gives the
              conversion algorithm better source material — resulting in sharper text.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Keep file size under 20MB.</strong> Pinterest
              accepts files up to 20MB. A 1000×1500 JPEG at quality 90 is typically 200–500KB — far
              below the limit. There is no benefit to uploading unnecessarily large files.
            </span>
          </li>
        </ul>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Tips for High-Performing Pinterest Pins
        </h2>
        <ul className="space-y-2 text-sm text-text-muted">
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Use warm, bright colors.</strong> Pinterest&apos;s
              user base skews toward lifestyle, home, food, and fashion content. Warm tones (red,
              orange, pink) and bright, saturated images consistently outperform dark or muted
              imagery in Pinterest click-through tests.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">
                Include a clear call to action in text overlay.
              </strong>{' '}
              Pins that tell viewers exactly what they will get — &quot;Download the free
              template&quot;, &quot;Get the full recipe&quot; — consistently drive more clicks to
              your website than pins with no text.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Use your brand colors consistently.</strong>{' '}
              Pinners who recognize your visual style are more likely to click your pins when they
              appear in search or the home feed. Consistent colors, fonts, and layouts build brand
              recognition across hundreds of pins.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5">→</span>
            <span>
              <strong className="text-text-main">Avoid faces for product and DIY content.</strong>{' '}
              On Pinterest (unlike Instagram and TikTok), pins without faces can outperform
              face-forward content for product categories. The focus should be on the item, result,
              or process — not the creator.
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
              href: '/compress-image-for-pinterest',
              label: 'Compress for Pinterest',
              desc: 'Reduce file size before pinning.',
            },
            {
              href: '/resize-image/',
              label: 'Resize by Pixels',
              desc: 'Set any custom width & height.',
            },
            {
              href: '/resize-images/',
              label: 'Batch Resize',
              desc: 'Resize up to 10 pins at once as ZIP.',
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
              question: 'What is the best Pinterest pin size?',
              answer:
                '1000×1500px (2:3 ratio) is the recommended Pinterest standard pin size. It takes up more vertical space in the feed than a square pin, increasing visibility and repins. Pinterest specifically recommends this ratio for most content types.',
            },
            {
              question: 'What is the maximum Pinterest pin height?',
              answer:
                "Pinterest displays pins up to 1:3 ratio (roughly 1000×3000px for a 1000px-wide pin) in full in the feed. Pins taller than 1:3 are clipped with a 'See more' prompt. For infographics taller than 3000px, consider splitting into multiple pins.",
            },
            {
              question: 'What size should Pinterest infographics be?',
              answer:
                '1000×3000px (1:3 ratio). This is the maximum height that Pinterest displays fully in the feed. Infographics at this size are visible without the viewer having to click — maximizing exposure for data-heavy content.',
            },
            {
              question: 'Does Pinterest resize my images?',
              answer:
                'Yes. Pinterest resamples images that are not exactly 1000px wide. Uploading at exactly 1000px wide skips this resampling step and preserves maximum quality. Pinterest also compresses to JPEG regardless of the format you upload.',
            },
            {
              question: 'Can I use a HEIC photo for Pinterest?',
              answer:
                'Pinterest does not accept HEIC files. Upload your HEIC photo here — it is automatically converted to JPEG and resized to your chosen Pinterest dimensions in one step.',
            },
            {
              question: 'Should I use PNG or JPEG for Pinterest?',
              answer:
                'JPEG for photos and images with gradients. PNG for infographics and text-heavy pins — it preserves sharp text edges better. Pinterest converts PNG to JPEG internally, but starts from a higher-quality source.',
            },
            {
              question: 'Do longer pins get more views on Pinterest?',
              answer:
                'Generally yes. Taller pins occupy more vertical space in the masonry feed, giving them more surface area to catch the eye. The 2:3 ratio (1000×1500) consistently outperforms square (1:1) for most content categories.',
            },
            {
              question: 'Is this Pinterest image resizer free?',
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
