import Link from 'next/link'
import FAQItem from '@/components/tool/FAQItem'

export default function CompressTo800KbContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to compressing images to 800KB"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Why Compress an Image to 800KB?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          An 800KB target is ideal for high-quality email photo attachments, Squarespace and Wix
          image uploads (recommended under 1MB for performance), Airbnb listing photos, real estate
          marketing images, and ecommerce product photos where quality matters. At 800KB and
          1920×1080px, JPEG photos retain excellent visual quality — skin tones, fabric texture, and
          product details remain accurate — while loading in under 1 second on standard broadband.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          Reaching 800KB from a modern smartphone photo (5–20MB) or DSLR RAW export (20–50MB)
          requires quality 80–85. This tool starts at quality 82, which compresses a 12MP smartphone
          JPEG (4032×3024px) to 400–750KB for most subjects. All compression runs in your browser —
          no upload required.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How to Compress an Image to 800KB — 3 Steps
        </h2>
        <ol className="space-y-4">
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              1
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Upload your image</p>
              <p className="text-sm text-text-muted leading-relaxed">
                Click the upload area, drag and drop, or paste from clipboard. Accepts JPG, PNG,
                WebP, and HEIC up to 20MB. iPhone HEIC photos are automatically converted to JPEG.
                For RAW photos exported from Lightroom or Photoshop, export as JPEG first.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              2
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Set quality to 80–85</p>
              <p className="text-sm text-text-muted leading-relaxed">
                Quality 82 compresses most 12MP (4032×3024px) smartphone photos to 400–750KB — at or
                under 800KB. For detailed landscapes or macro shots, try quality 78. For portrait
                photos (less detail), quality 85 typically gives 500–800KB. Check the result card
                for exact output size.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              3
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Download when under 800KB</p>
              <p className="text-sm text-text-muted leading-relaxed">
                The result card shows the exact compressed size. Download when under 800KB. The file
                is ready for email, Squarespace, Wix, Airbnb, or any platform with a 1MB limit.
              </p>
            </div>
          </li>
        </ol>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Quality vs File Size at 800KB — Reference Table
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-text-muted border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 font-semibold text-text-main">Photo type</th>
                <th className="text-left py-2 pr-4 font-semibold text-text-main">Dimensions</th>
                <th className="text-left py-2 pr-4 font-semibold text-text-main">Quality 85</th>
                <th className="text-left py-2 font-semibold text-text-main">Quality 80</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="py-2 pr-4">Portrait (low detail)</td>
                <td className="py-2 pr-4">4032×3024px</td>
                <td className="py-2 pr-4">600–900KB ⚠️</td>
                <td className="py-2">400–650KB ✅</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Landscape (high detail)</td>
                <td className="py-2 pr-4">4032×3024px</td>
                <td className="py-2 pr-4">1.2–2.5MB ❌</td>
                <td className="py-2">800KB–1.5MB ⚠️</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Product photo</td>
                <td className="py-2 pr-4">1920×1080px</td>
                <td className="py-2 pr-4">250–500KB ✅</td>
                <td className="py-2">180–380KB ✅</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Smartphone (12MP)</td>
                <td className="py-2 pr-4">4032×3024px</td>
                <td className="py-2 pr-4">700KB–1.2MB ⚠️</td>
                <td className="py-2">450–800KB ✅</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted">
          ✅ Likely under 800KB | ⚠️ May be close — adjust quality | ❌ Needs lower quality or
          resize. For landscape photos over 800KB at quality 80, resize to 1920px wide first.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Common Use Cases for 800KB Images</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              name: 'Squarespace image uploads',
              detail: 'Recommended under 500KB for blog, under 1MB for full-width banners',
            },
            {
              name: 'Wix image uploads',
              detail: 'Recommended under 1MB per image. 800KB keeps galleries fast',
            },
            {
              name: 'Email photo attachments',
              detail: 'Most email clients handle 800KB inline images without download prompts',
            },
            {
              name: 'Airbnb listing photos',
              detail:
                'Recommended under 1MB. 800KB uploads faster and serves quicker to mobile users',
            },
            {
              name: 'Real estate marketing',
              detail: 'MLS systems allow up to 2MB. 800KB is the sweet spot for quality + speed',
            },
            {
              name: 'Etsy product photos',
              detail: 'Etsy accepts up to 1MB. 800KB keeps zoom quality good without slow upload',
            },
          ].map(({ name, detail }) => (
            <div key={name} className="rounded-xl border border-border bg-surface p-3 text-sm">
              <p className="font-semibold text-text-main text-xs">{name}</p>
              <p className="text-text-muted text-xs mt-0.5">{detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-border bg-surface p-4 text-sm space-y-2">
        <h2 className="font-semibold text-text-main">Your Images Never Leave Your Device</h2>
        <p className="text-text-muted text-xs leading-relaxed">
          All compression runs entirely in your browser. Your product photos, real estate images,
          and personal photos are never uploaded to any server. Free with no limits, no account
          required.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">More Free Image Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            {
              href: '/compress-image-to-500kb/',
              label: 'Compress to 500KB',
              desc: 'High-quality web',
            },
            {
              href: '/compress-image-to-1mb/',
              label: 'Compress to 1MB',
              desc: 'Larger content images',
            },
            {
              href: '/compress-image-to-400kb/',
              label: 'Compress to 400KB',
              desc: 'Email, CMS uploads',
            },
            { href: '/resize-image/', label: 'Resize Image', desc: 'Change pixel dimensions' },
            { href: '/compress-image/', label: 'Compress Image', desc: 'Any format, any size' },
            { href: '/jpg-to-webp/', label: 'JPG to WebP', desc: '30% smaller than JPG' },
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
          Frequently Asked Questions About Compressing Images to 800KB
        </h2>
        <div className="space-y-2">
          {[
            {
              q: 'How do I compress an image to under 800KB?',
              a: 'Set quality to 80–85. A 12MP smartphone JPEG (4032×3024px) at quality 82 outputs 400–750KB for most portraits. Detailed landscapes may be larger — try quality 75–78 or resize to 1920px wide first using the Resize Image tool.',
            },
            {
              q: 'What quality setting gives the best result at 800KB?',
              a: 'Quality 80–85 for most photos. At quality 82, compression is virtually invisible at normal viewing distances — skin tones, fabric texture, and product details look accurate. Only lower below 80 for very detailed photos (dense foliage, fabric close-ups) that are still over 800KB.',
            },
            {
              q: 'Is 800KB good quality for Squarespace or Wix?',
              a: 'Yes. Squarespace and Wix recommend images under 500KB for blog posts and under 1MB for full-width banners. 800KB at 1920px wide is excellent for banners — sharp on Retina displays and fast to load. For product thumbnails at 800×800px, 800KB is overkill; aim for 150–300KB instead.',
            },
            {
              q: 'My photo is 15MB from a DSLR — can I compress to 800KB?',
              a: 'Yes. A 15MB DSLR RAW export (24MP, 6000×4000px) at quality 82 will output 2–5MB — still over 800KB. Resize to 1920px wide first using the Resize Image tool, then compress at quality 82 → output will be 400–800KB depending on photo content.',
            },
            {
              q: 'Does compressing to 800KB reduce image dimensions?',
              a: 'No. Only file size is reduced through quality compression — dimensions stay the same. If you also need smaller dimensions, use the Resize Image tool first, then compress.',
            },
            {
              q: 'Is this tool free and private?',
              a: 'Yes — completely free with no limits. All compression runs in your browser; images never leave your device. No sign-up required.',
            },
          ].map(({ q, a }) => (
            <FAQItem key={q} question={q} answer={a} />
          ))}
        </div>
      </div>
    </section>
  )
}
