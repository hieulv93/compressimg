import Link from 'next/link'

export default function Resize300x300ContentSection() {
  return (
    <section className="space-y-8 pt-8 border-t border-border">
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">What Is 300×300 Used For?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          300×300 is one of the most common thumbnail sizes on the web. It sits at a useful midpoint
          — large enough to show product detail at a glance, small enough to load quickly in grid
          layouts with dozens of images. E-commerce category pages, blog thumbnails, and CMS media
          libraries all use 300×300 as a standard preview size.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          WordPress, WooCommerce, and most popular CMS platforms auto-generate a 300×300 crop from
          uploaded images. If you need to control exactly what appears in this thumbnail, resize
          your image to 300×300 before uploading.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Where 300×300 Thumbnails Appear</h2>
        <div className="grid sm:grid-cols-2 gap-3 text-sm">
          {[
            {
              title: 'WooCommerce catalog',
              desc: 'WooCommerce generates a 300×300 thumbnail for shop/category pages by default. Pre-resizing to 300×300 ensures the thumbnail shows exactly what you intend without unexpected crops.',
            },
            {
              title: 'Blog post thumbnails',
              desc: 'Most WordPress themes display blog list/archive thumbnails at 300×300 or similar. Uploading at this size avoids server-side cropping that may cut off important parts of the image.',
            },
            {
              title: 'Email template images',
              desc: 'Product images in email newsletters are often 300×300 to balance visual clarity with email load time. Many email service providers (Mailchimp, Klaviyo) recommend keeping email images under 600px wide.',
            },
            {
              title: 'Forum avatars and badges',
              desc: 'Forum platforms like phpBB, Discourse, and gaming forums use 300×300 or smaller for user avatars. A 300×300 square works for most forum avatar fields.',
            },
          ].map(({ title, desc }) => (
            <div key={title} className="border border-border rounded-xl p-4">
              <p className="font-semibold text-text-main mb-1">{title}</p>
              <p className="text-text-muted">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Thumbnail Size Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-surface">
                <th className="text-left p-3 border border-border font-semibold">Size</th>
                <th className="text-left p-3 border border-border font-semibold">Pixels</th>
                <th className="text-left p-3 border border-border font-semibold">JPEG size</th>
                <th className="text-left p-3 border border-border font-semibold">Best for</th>
              </tr>
            </thead>
            <tbody>
              {[
                { size: '150×150', px: '22.5K', kb: '10–40 KB', use: 'WordPress small thumbnail' },
                { size: '300×300', px: '90K', kb: '30–120 KB', use: 'Blog & catalog thumbnails' },
                {
                  size: '600×600',
                  px: '360K',
                  kb: '80–300 KB',
                  use: 'Email, secondary product image',
                },
                { size: '800×800', px: '640K', kb: '150–500 KB', use: 'Product zoom detail' },
                {
                  size: '1080×1080',
                  px: '1.17M',
                  kb: '300KB–1 MB',
                  use: 'Instagram, full-res e-commerce',
                },
              ].map(({ size, px, kb, use }, i) => (
                <tr key={size} className={i % 2 === 1 ? 'bg-surface/50' : ''}>
                  <td className="p-3 border border-border font-medium text-text-main">{size}</td>
                  <td className="p-3 border border-border text-text-muted">{px}</td>
                  <td className="p-3 border border-border text-text-muted">{kb}</td>
                  <td className="p-3 border border-border text-text-muted">{use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Related Tools</h2>
        <ul className="list-disc pl-6 space-y-2 text-sm text-text-muted">
          <li>
            <Link href="/resize-image-to-400x400" className="text-primary hover:underline">
              Resize to 400×400
            </Link>{' '}
            — profile picture size for social media
          </li>
          <li>
            <Link href="/resize-image-to-1080x1080" className="text-primary hover:underline">
              Resize to 1080×1080
            </Link>{' '}
            — full Instagram square resolution
          </li>
          <li>
            <Link href="/crop-image-to-square" className="text-primary hover:underline">
              Crop to Square
            </Link>{' '}
            — crop non-square images before resizing
          </li>
          <li>
            <Link href="/compress-image" className="text-primary hover:underline">
              Compress Image
            </Link>{' '}
            — reduce file size further
          </li>
          <li>
            <Link href="/resize-image" className="text-primary hover:underline">
              Resize Image
            </Link>{' '}
            — resize to any custom dimensions
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-text-main">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {[
            {
              q: 'Is 300×300 enough quality for product photos?',
              a: '300×300 is suitable for grid thumbnails and email images but not for product detail pages where customers want to zoom in. Use 300×300 for the thumbnail and a larger version (800×800 or 1080×1080) for the main product image.',
            },
            {
              q: 'Why does my image look soft at 300×300?',
              a: 'If your source image is small (e.g., 200×200) and you upscale to 300×300, quality degrades. Always start with a source image larger than your target size. The tool downscales well but upscaling always reduces sharpness.',
            },
            {
              q: 'What is the WooCommerce catalog image size?',
              a: "WooCommerce uses three default image sizes: thumbnail (150×150), catalog (300×300), and single/large (varies by theme). The catalog image is what appears in shop pages and categories. Pre-sized 300×300 images bypass WooCommerce's server-side resize.",
            },
            {
              q: 'Can I use 300×300 for a Facebook profile picture?',
              a: 'Facebook displays profile photos at 320×320px minimum, so 300×300 is slightly below the recommended size. Use 400×400 or 800×800 for Facebook profile photos instead. The extra size ensures sharpness on Retina displays.',
            },
            {
              q: 'Does resizing to 300×300 add white bars to my image?',
              a: 'If your image is not square, yes — white bars are added on the sides or top/bottom to fill the 300×300 frame without cropping. To avoid this, use the Crop to Square tool first to make your image square before resizing.',
            },
            {
              q: 'Are my files uploaded to a server?',
              a: 'No. All resizing happens entirely in your browser. Your images are never sent to any server.',
            },
          ].map(({ q, a }) => (
            <details key={q} className="border border-border rounded-xl p-4 group">
              <summary className="font-semibold text-sm text-text-main cursor-pointer list-none flex items-center justify-between gap-2">
                {q}
                <span className="text-text-muted text-xs flex-shrink-0 group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="text-text-muted text-sm leading-relaxed mt-3">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
