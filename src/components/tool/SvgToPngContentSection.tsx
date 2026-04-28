import Link from 'next/link'

interface FAQItemProps {
  question: string
  answer: string
}

function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <div className="border-b border-border pb-4">
      <h3 className="font-semibold text-text-main text-sm mb-2">{question}</h3>
      <p className="text-text-muted text-sm leading-relaxed">{answer}</p>
    </div>
  )
}

export default function SvgToPngContentSection() {
  return (
    <div className="space-y-8 text-sm leading-relaxed text-text-muted border-t border-border pt-8">
      <section className="space-y-3">
        <h2 className="text-base font-bold text-text-main">SVG to PNG: When and Why to Convert</h2>
        <p>
          SVG (Scalable Vector Graphics) is the gold standard for logos, icons, illustrations, and
          any graphic that needs to scale cleanly across different screen sizes. Unlike raster
          images, SVG files store shapes and paths as mathematical instructions, meaning they remain
          perfectly sharp at any resolution — from a 16px favicon to a 4K display.
        </p>
        <p>
          But SVG has a major limitation: compatibility. Dozens of platforms, apps, and workflows
          still do not accept SVG uploads. Email clients like Gmail and Outlook ignore SVG entirely.
          Social platforms — Twitter, Facebook, LinkedIn, Instagram — require PNG or JPG for profile
          photos, cover images, and posts. Many CMS platforms, design tools, and document editors
          either reject SVG or render it inconsistently. Converting SVG to PNG solves all of these
          compatibility problems in seconds.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-text-main">Common Use Cases</h2>
        <ul className="space-y-2 list-disc list-inside text-text-muted">
          <li>
            <strong className="text-text-main">Logos for email signatures</strong> — Most email
            clients block SVG for security reasons. Convert your logo to PNG and embed it as an
            inline image for full compatibility with Gmail, Outlook, Apple Mail, and all other
            clients.
          </li>
          <li>
            <strong className="text-text-main">Social media profile photos and covers</strong> —
            Twitter, Facebook, LinkedIn, and YouTube all require PNG or JPG for uploads. Convert
            your SVG brand mark to a PNG at the platform's required dimensions before uploading.
          </li>
          <li>
            <strong className="text-text-main">Open Graph and social preview images</strong> — OG
            images for websites must be in PNG or JPG format. If your branding assets are in SVG,
            convert them to PNG to create the 1200×630px images used for social sharing previews.
          </li>
          <li>
            <strong className="text-text-main">Presentations and documents</strong> — PowerPoint,
            Google Slides, and Word handle SVG inconsistently across platforms and export settings.
            PNG embeds reliably in all document types with no rendering issues.
          </li>
          <li>
            <strong className="text-text-main">App store icons</strong> — Both Apple App Store and
            Google Play require PNG icons. Convert your master SVG icon to PNG at 1024×1024px, then
            resize down to the required sizes.
          </li>
          <li>
            <strong className="text-text-main">Watermarks and overlays</strong> — Watermarking
            software and video editors typically accept PNG with transparency rather than SVG.
            Convert your SVG watermark to PNG for use in these workflows.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-text-main">
          SVG vs PNG: Which Format Should You Use?
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-surface">
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  Property
                </th>
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  SVG
                </th>
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  PNG
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Scalability', 'Infinite — vector-based', 'Fixed — pixels degrade when scaled up'],
                ['File size', 'Small for simple graphics', 'Larger; increases with resolution'],
                ['Transparency', 'Full alpha support', 'Full alpha support'],
                [
                  'Compatibility',
                  'Limited — not supported everywhere',
                  'Universal — supported by all apps',
                ],
                ['Animations', 'Supported via CSS/SMIL', 'Not supported (use GIF or WebP)'],
                [
                  'Best for',
                  'Logos, icons, illustrations, UI elements',
                  'Photos with limited colors, exports for sharing',
                ],
                ['Editable', 'Yes — open in any text editor or Figma', 'No — raster pixels only'],
              ].map(([prop, svg, png]) => (
                <tr key={prop} className="border-t border-border">
                  <td className="p-3 border border-border font-medium text-text-main">{prop}</td>
                  <td className="p-3 border border-border">{svg}</td>
                  <td className="p-3 border border-border">{png}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Keep your master assets in SVG. Convert to PNG only when you need to share, upload, or use
          the image in a context that does not support vector formats.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-text-main">How SVG to PNG Conversion Works</h2>
        <p>
          This tool converts SVG to PNG entirely in your browser using the built-in Canvas API and
          the browser's own SVG rendering engine — the same engine that renders SVGs on web pages.
          No file is ever sent to a server.
        </p>
        <p>
          When you upload an SVG, the tool reads the file to determine its dimensions from the{' '}
          <code className="bg-surface px-1 py-0.5 rounded text-xs font-mono">width</code> and{' '}
          <code className="bg-surface px-1 py-0.5 rounded text-xs font-mono">height</code>{' '}
          attributes, or the{' '}
          <code className="bg-surface px-1 py-0.5 rounded text-xs font-mono">viewBox</code> if no
          explicit dimensions are set. The SVG is then rendered at those exact pixel dimensions onto
          an HTML canvas, a white background is applied, and the result is exported as a lossless
          PNG file.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-text-main">Tips for Best Results</h2>
        <ul className="space-y-2 list-disc list-inside text-text-muted">
          <li>
            <strong className="text-text-main">Check your SVG dimensions first</strong> — Open your
            SVG in a text editor and look for{' '}
            <code className="bg-surface px-1 py-0.5 rounded text-xs font-mono">width</code> and{' '}
            <code className="bg-surface px-1 py-0.5 rounded text-xs font-mono">height</code>{' '}
            attributes on the{' '}
            <code className="bg-surface px-1 py-0.5 rounded text-xs font-mono">&lt;svg&gt;</code>{' '}
            element. If they are missing, the tool reads the{' '}
            <code className="bg-surface px-1 py-0.5 rounded text-xs font-mono">viewBox</code> and
            uses those dimensions. Add explicit dimensions to your SVG for predictable output.
          </li>
          <li>
            <strong className="text-text-main">Want a larger PNG?</strong> — After converting,{' '}
            <Link href="/resize-image" className="text-primary hover:underline">
              use the Resize Image tool
            </Link>{' '}
            to scale the PNG up to any size. Since SVG is resolution-independent, you can also set
            explicit larger dimensions on the SVG before converting (e.g., change{' '}
            <code className="bg-surface px-1 py-0.5 rounded text-xs font-mono">width="512"</code> to{' '}
            <code className="bg-surface px-1 py-0.5 rounded text-xs font-mono">width="2048"</code>{' '}
            in the SVG source) to get a higher-resolution PNG output.
          </li>
          <li>
            <strong className="text-text-main">Need to reduce PNG file size?</strong> — After
            converting, use the{' '}
            <Link href="/compress-image" className="text-primary hover:underline">
              Compress Image tool
            </Link>{' '}
            to reduce the PNG file size without losing visible quality.
          </li>
          <li>
            <strong className="text-text-main">Convert SVG to JPG instead</strong> — If you need a
            JPG output (smaller file size, no alpha channel), convert the SVG to PNG first, then use
            the{' '}
            <Link href="/png-to-jpg" className="text-primary hover:underline">
              PNG to JPG converter
            </Link>{' '}
            to get a JPG with a white background.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-text-main">PNG Size Requirements by Platform</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-surface">
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  Platform
                </th>
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  Use Case
                </th>
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  Recommended PNG Size
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Twitter / X', 'Profile photo', '400 × 400 px'],
                ['Twitter / X', 'Header image', '1500 × 500 px'],
                ['LinkedIn', 'Profile photo', '400 × 400 px'],
                ['LinkedIn', 'Banner image', '1584 × 396 px'],
                ['Facebook', 'Profile photo', '180 × 180 px'],
                ['Facebook', 'Cover photo', '820 × 312 px'],
                ['YouTube', 'Channel icon', '800 × 800 px'],
                ['App Store (iOS)', 'App icon', '1024 × 1024 px'],
                ['Google Play', 'App icon', '512 × 512 px'],
                ['Open Graph', 'Social preview image', '1200 × 630 px'],
              ].map(([platform, use, size]) => (
                <tr key={`${platform}-${use}`} className="border-t border-border">
                  <td className="p-3 border border-border font-medium text-text-main">
                    {platform}
                  </td>
                  <td className="p-3 border border-border">{use}</td>
                  <td className="p-3 border border-border font-mono">{size}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-base font-bold text-text-main">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <FAQItem
            question="What is the difference between SVG and PNG?"
            answer="SVG is a vector format — it stores shapes and paths as math, scaling infinitely without quality loss. PNG is a raster format that stores pixels, so it looks sharp at one size but degrades if you scale it up. Use SVG for design assets and convert to PNG when you need compatibility with apps and platforms that don't support SVG."
          />
          <FAQItem
            question="Why would I convert SVG to PNG instead of using SVG directly?"
            answer="Many platforms reject SVG: email clients (Gmail, Outlook), social media (Twitter, Instagram, Facebook), most CMS image uploaders, and PowerPoint/Word documents. PNG works everywhere. Convert SVG to PNG when you need to share or use your vector asset outside of a browser or design tool context."
          />
          <FAQItem
            question="What resolution will the PNG output be?"
            answer="The PNG uses the pixel dimensions from the SVG's width and height attributes. If your SVG only has a viewBox (e.g., 0 0 100 100), the tool uses those as pixel dimensions. For a higher-resolution PNG from the same SVG, open the SVG in a text editor, increase the width and height values, then convert again."
          />
          <FAQItem
            question="Will the PNG background be transparent or white?"
            answer="This tool fills the PNG background with white before rendering the SVG. This ensures the PNG displays correctly in all apps. If you need a transparent PNG, note that this tool does not support transparent output — use a design tool like Figma or Inkscape to export with a transparent background directly."
          />
          <FAQItem
            question="Can I convert SVG icons and logos to PNG?"
            answer="Yes — SVG icons and logos are the most common use case. Upload your SVG and the tool converts it to a PNG at the SVG's natural dimensions. For multiple sizes (e.g., 16px, 32px, 512px), convert once and use the Resize Image tool to generate each size from the single PNG."
          />
          <FAQItem
            question="Are my SVG files uploaded to a server?"
            answer="No. All conversion runs entirely in your browser using JavaScript and the Canvas API. Your SVG file is never sent to any server and never leaves your device. This makes the tool safe for converting proprietary logos, confidential artwork, and unreleased brand assets."
          />
          <FAQItem
            question="Does conversion support SVG animations and filters?"
            answer="SVG animations are not captured — PNG is a still image format, so only the initial static state of the SVG is rendered. CSS filters and visual effects defined within the SVG (drop shadows, blur, opacity) are typically rendered correctly. Complex features like external font references may not render as expected."
          />
          <FAQItem
            question="Can I convert SVG to PNG on mobile?"
            answer="Yes. This tool works fully on iOS and Android in Safari, Chrome, and Firefox. Tap the upload area to select an SVG from your Files app, wait for conversion, and download the PNG directly to your device."
          />
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-text-main">Related Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              href: '/compress-image',
              label: 'Compress Image',
              desc: 'Reduce PNG or JPG file size after conversion',
            },
            {
              href: '/resize-image',
              label: 'Resize Image',
              desc: 'Scale your PNG to any platform size',
            },
            {
              href: '/png-to-jpg',
              label: 'PNG to JPG',
              desc: 'Convert PNG to JPG for even smaller file sizes',
            },
            { href: '/jpg-to-png', label: 'JPG to PNG', desc: 'Convert JPG photos to PNG format' },
            { href: '/webp-to-png', label: 'WebP to PNG', desc: 'Convert WebP images to PNG' },
            {
              href: '/convert-image',
              label: 'Convert Image',
              desc: 'Convert between JPG, PNG, and WebP formats',
            },
          ].map(({ href, label, desc }) => (
            <Link
              key={href}
              href={href}
              className="block rounded-xl border border-border p-3 hover:border-primary transition-colors group"
            >
              <p className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors">
                {label}
              </p>
              <p className="text-xs text-text-muted mt-0.5">{desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
