import Link from 'next/link'

export default function Resize1080x1080ContentSection() {
  return (
    <section className="space-y-8 pt-8 border-t border-border">
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Why 1080×1080 for Square Images?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          1080×1080 is the standard square resolution for social media and e-commerce images. It
          matches Instagram&apos;s native display resolution for square posts and provides enough
          pixels for sharp display on high-DPI screens, including Retina displays on iPhones and
          MacBooks.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          The 1:1 aspect ratio (square) is used universally — from Instagram feed posts and product
          thumbnails to app icons and album artwork. Preparing images at 1080×1080 ensures they look
          sharp across all these contexts without platform-specific cropping or distortion.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Where 1080×1080 Images Are Used</h2>
        <div className="grid sm:grid-cols-2 gap-3 text-sm">
          {[
            {
              title: 'Instagram square posts',
              desc: "Instagram displays square feed posts at 1080×1080px on high-DPI screens. This is the native resolution — uploading at exactly this size avoids Instagram's server-side re-compression.",
            },
            {
              title: 'E-commerce product photos',
              desc: 'Platforms like Etsy, Shopify, and WooCommerce use square product images in grid layouts. 1080×1080 is large enough for zoom features while keeping page load times reasonable.',
            },
            {
              title: 'Print-on-demand products',
              desc: 'Services like Redbubble, Printful, and Merch by Amazon require square product designs. 1080×1080 is the minimum for basic products; larger sizes (2000×2000+) are needed for high-resolution print.',
            },
            {
              title: 'Music streaming artwork',
              desc: 'Spotify, Apple Music, and other streaming services display album artwork as a square. 1080×1080 is above the minimum (640×640) and looks sharp on all device sizes.',
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
        <h2 className="text-xl font-bold text-text-main">Square Image Sizes Compared</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-surface">
                <th className="text-left p-3 border border-border font-semibold">Size</th>
                <th className="text-left p-3 border border-border font-semibold">Pixels</th>
                <th className="text-left p-3 border border-border font-semibold">Best for</th>
              </tr>
            </thead>
            <tbody>
              {[
                { size: '2000×2000', px: '4M', use: 'Print, high-res e-commerce zoom' },
                { size: '1080×1080', px: '1.17M', use: 'Instagram, standard e-commerce' },
                { size: '600×600', px: '360K', use: 'Email images, secondary thumbnails' },
                { size: '400×400', px: '160K', use: 'Profile pictures, avatars' },
                { size: '300×300', px: '90K', use: 'Small thumbnails, grid previews' },
                { size: '150×150', px: '22.5K', use: 'WordPress thumbnails, CMS previews' },
              ].map(({ size, px, use }, i) => (
                <tr key={size} className={i % 2 === 1 ? 'bg-surface/50' : ''}>
                  <td className="p-3 border border-border font-medium text-text-main">{size}</td>
                  <td className="p-3 border border-border text-text-muted">{px}</td>
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
            <Link href="/resize-image-for-instagram" className="text-primary hover:underline">
              Resize for Instagram
            </Link>{' '}
            — all Instagram formats (square, portrait, story)
          </li>
          <li>
            <Link href="/crop-image-to-square" className="text-primary hover:underline">
              Crop to Square
            </Link>{' '}
            — crop non-square images before resizing
          </li>
          <li>
            <Link href="/resize-image-to-400x400" className="text-primary hover:underline">
              Resize to 400×400
            </Link>{' '}
            — profile picture size
          </li>
          <li>
            <Link href="/compress-image" className="text-primary hover:underline">
              Compress Image
            </Link>{' '}
            — reduce file size after resizing
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
              q: 'Is 1080×1080 the best size for Instagram?',
              a: "Instagram supports square posts up to 1080×1080px. Uploading at exactly 1080×1080 prevents Instagram from re-compressing your image, preserving quality. Portrait (1080×1350) and landscape (1080×566) formats also use 1080px width — Instagram's maximum.",
            },
            {
              q: 'Can I resize a portrait or landscape photo to 1080×1080?',
              a: 'Yes. The tool fits your image within the 1080×1080 frame while preserving the original aspect ratio. Non-square images will have white bars on the sides or top/bottom. To fill the full square without bars, use the Crop to Square tool first.',
            },
            {
              q: 'Why is 1080×1080 better than 500×500 for product photos?',
              a: '1080×1080 contains 4.67× more pixels than 500×500. Modern e-commerce sites use the extra pixels to enable image zoom — customers can zoom into product details without the image becoming pixelated.',
            },
            {
              q: 'What is the maximum square size for Instagram?',
              a: "Instagram accepts square images up to 1080×1080px. Images uploaded at larger sizes are downscaled to 1080×1080 by Instagram's servers. Uploading at exactly 1080×1080 skips this downscale and retains the most quality.",
            },
            {
              q: 'Is 1080×1080 good for Etsy product photos?',
              a: "Etsy recommends product photos at 2000px on the shortest side (2000×2000 for square). 1080×1080 will work but won't enable full zoom. For Etsy listings, use the 2000×2000 preset for best results.",
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
