import Link from 'next/link'
import FAQItem from '@/components/tool/FAQItem'

export default function ImageColorPickerContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to picking colors from images online"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">What Is an Image Color Picker Tool?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          An image color picker is an eyedropper tool that samples the exact color of any pixel in a
          photo or graphic. You click any point on the image and instantly get the color value in
          multiple formats — HEX, RGB, and HSL. Designers, developers, and artists use color pickers
          to match colors from photographs, logos, screenshots, or brand references for use in CSS,
          design software, or brand style guides.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          The browser Canvas API makes this possible entirely client-side:{' '}
          <code className="bg-surface px-1 py-0.5 rounded text-[11px]">
            ctx.getImageData(x, y, 1, 1)
          </code>{' '}
          reads the exact RGBA value of any pixel coordinate. Your image never leaves your device —
          the picking happens entirely in your browser memory.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">HEX vs RGB vs HSL — Color Format Guide</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          All three formats represent the same color — they are different notations for the same
          underlying value. Choose the format that matches what you are working with:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-text-muted border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 font-semibold text-text-main">Format</th>
                <th className="text-left py-2 pr-4 font-semibold text-text-main">Example</th>
                <th className="text-left py-2 font-semibold text-text-main">Best for</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="py-2 pr-4">HEX</td>
                <td className="py-2 pr-4 font-mono">#ff6b35</td>
                <td className="py-2">HTML, CSS, most design tools, web color pickers</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">RGB</td>
                <td className="py-2 pr-4 font-mono">rgb(255, 107, 53)</td>
                <td className="py-2">CSS, image editing software, Photoshop, Illustrator</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">HSL</td>
                <td className="py-2 pr-4 font-mono">hsl(20, 100%, 60%)</td>
                <td className="py-2">CSS, when you want to adjust lightness or saturation</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text-muted text-sm leading-relaxed">
          HEX is the most universally accepted — paste it directly into any design tool, CSS file,
          or color input. RGB is standard in Photoshop and Lightroom color panels. HSL is most
          useful in CSS when you want to programmatically create lighter or darker variants of a
          color by adjusting the L value while keeping the H and S fixed.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Common Use Cases for Color Picking</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              name: 'Matching brand colors from a logo',
              detail:
                'Upload a logo or brand asset and click the exact color you need. Get the precise HEX value to use in CSS, Figma, Canva, or any other design tool — no guessing, no color approximation.',
            },
            {
              name: 'Building a color palette from a photo',
              detail:
                'Pick multiple colors from a photograph to create a matching color palette. Sample the dominant color, accent tones, and neutrals from a product photo or hero image to use throughout your design.',
            },
            {
              name: 'CSS color matching for web design',
              detail:
                'Have a mockup or screenshot and need the exact CSS color? Click the element in the screenshot and copy the HEX value directly into your stylesheet. No estimation, no trial and error.',
            },
            {
              name: 'Identifying competitor brand colors',
              detail:
                "Screenshot a competitor's website or marketing material, upload it, and sample their brand colors exactly. Useful for competitive analysis, contrast checking, or understanding their visual system.",
            },
            {
              name: 'Product photography color matching',
              detail:
                'E-commerce product listings need consistent color descriptions. Upload a product photo and sample the exact color to provide accurate color values for product data, accessibility labels, or automated color tagging.',
            },
            {
              name: 'Illustration and digital art',
              detail:
                'Artists referencing real-world photos for digital illustration use color pickers to extract exact shades from reference photos — skin tones, fabric colors, environmental lighting — for accurate digital painting.',
            },
          ].map(({ name, detail }) => (
            <div key={name} className="rounded-xl border border-border bg-surface p-3 text-sm">
              <p className="font-semibold text-text-main text-xs">{name}</p>
              <p className="text-text-muted text-xs mt-0.5">{detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Understanding the HSL Color Model</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          HSL (Hue, Saturation, Lightness) is the most intuitive color model for designers. It
          separates the three properties you think about when describing a color:
        </p>
        <div className="space-y-2">
          {[
            {
              label: 'Hue (0–360°)',
              desc: 'The color angle on a color wheel. 0° = red, 60° = yellow, 120° = green, 180° = cyan, 240° = blue, 300° = magenta, 360° = red again. This is the "what color" component.',
            },
            {
              label: 'Saturation (0–100%)',
              desc: '0% = completely gray (no color), 100% = fully vivid color. Controls how "pure" or "washed out" the color appears. Low saturation = muted, pastel. High saturation = vivid, intense.',
            },
            {
              label: 'Lightness (0–100%)',
              desc: '0% = black, 50% = the pure color, 100% = white. Controls brightness. In CSS, you can create lighter/darker variants by only changing L while keeping H and S constant.',
            },
          ].map(({ label, desc }) => (
            <div key={label} className="flex gap-3 rounded-xl border border-border bg-surface p-3">
              <p className="text-xs font-semibold text-text-main shrink-0 w-32">{label}</p>
              <p className="text-xs text-text-muted leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">How Color Picking Accuracy Works</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          The Canvas API reads the exact RGBA value of the clicked pixel using{' '}
          <code className="bg-surface px-1 py-0.5 rounded text-[11px]">
            ctx.getImageData(x, y, 1, 1).data
          </code>
          . This returns four values: red (0–255), green (0–255), blue (0–255), and alpha (0–255).
          The tool converts these to HEX, RGB, and HSL and displays all three formats
          simultaneously.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          One consideration: JPEG compression introduces small color artifacts. In a JPEG image, the
          color at a given pixel may differ slightly from the original due to compression rounding.
          For pixel-perfect color work, use PNG source images, which use lossless compression and
          preserve exact color values. For photography-based palette work, the small JPEG variation
          is negligible.
        </p>
      </div>

      <div className="rounded-xl border border-border bg-surface p-4 text-sm space-y-2">
        <h2 className="font-semibold text-text-main">Your Images Never Leave Your Device</h2>
        <p className="text-text-muted text-xs leading-relaxed">
          The image is loaded into an HTML canvas element in your browser. All color sampling runs
          locally using the Canvas getImageData API. No image data is sent to any server at any
          point. The color history is stored in browser memory only — it disappears when you close
          or refresh the page.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">More Free Image Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            {
              href: '/compress-image/',
              label: 'Compress Image',
              desc: 'Reduce file size up to 90%',
            },
            { href: '/resize-image/', label: 'Resize Image', desc: 'Change pixel dimensions' },
            { href: '/exif-remover/', label: 'EXIF Remover', desc: 'Strip GPS & camera metadata' },
            {
              href: '/add-watermark/',
              label: 'Add Watermark',
              desc: 'Text overlay with position & opacity',
            },
            { href: '/crop-image/', label: 'Crop Image', desc: 'Remove unwanted areas' },
            { href: '/jpg-to-png/', label: 'JPG to PNG', desc: 'Lossless conversion' },
          ].map(({ href, label, desc }) => (
            <Link
              key={href}
              href={href}
              className="rounded-xl border border-border bg-surface p-3 hover:border-primary/40 transition-colors"
            >
              <p className="font-semibold text-text-main text-xs">{label}</p>
              <p className="text-text-muted text-xs mt-0.5">{desc}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-text-main">
          Frequently Asked Questions About Image Color Picking
        </h2>
        <div className="space-y-2">
          {[
            {
              q: 'What is an image color picker tool?',
              a: 'An image color picker (also called an eyedropper) lets you click any pixel in a photo and instantly get its color value in HEX, RGB, and HSL formats. Designers and developers use it to match colors from photos, logos, or screenshots for use in CSS, design software, or brand guidelines.',
            },
            {
              q: 'What is the difference between HEX, RGB, and HSL?',
              a: 'HEX is a 6-character code like #ff6b35 — used in HTML and CSS. RGB expresses color as three 0–255 values (red, green, blue) — standard in image editing software. HSL (Hue 0–360°, Saturation 0–100%, Lightness 0–100%) is intuitive for design: hue is the color type, saturation is intensity, lightness is brightness. All three describe the same color in different notations.',
            },
            {
              q: 'How accurate is the color picker?',
              a: 'The Canvas API reads the exact pixel-level RGB value at the clicked coordinates. The sampled color is as accurate as the image data itself. For JPEG images, note that JPEG compression introduces small color artifacts — nearby pixels can differ by a few values from the original. PNG images are losslessly compressed and give exact color values.',
            },
            {
              q: 'Can I pick multiple colors from the same image?',
              a: 'Yes. Click as many times as you want. Each click samples a new color and adds it to the color history panel. Your last 10 picked colors are shown — click any color in the history to view its HEX, RGB, and HSL values again.',
            },
            {
              q: 'How do I use the picked color in CSS?',
              a: 'Copy the HEX value and paste it directly into any CSS color property: color: #ff6b35; or background-color: #ff6b35;. Copy the RGB value for: color: rgb(255, 107, 53);. Copy the HSL value for: color: hsl(20, 100%, 60%); — useful when you want to create lighter/darker variants by adjusting only the L value.',
            },
            {
              q: 'Is my photo private when using this tool?',
              a: 'Yes. The image is loaded into an HTML canvas element in your browser. All color sampling uses the Canvas getImageData API locally — no image data is sent to any server. Your photos are completely private.',
            },
            {
              q: 'Can I pick colors from a screenshot?',
              a: 'Yes. Take a screenshot (Windows: Win + Shift + S, Mac: Cmd + Shift + 4), then upload the screenshot file to the color picker. Click any element in the screenshot to get its exact color value. This works for websites, app UIs, design mockups, or any image you can capture.',
            },
          ].map(({ q, a }) => (
            <FAQItem key={q} question={q} answer={a} />
          ))}
        </div>
      </div>
    </section>
  )
}
