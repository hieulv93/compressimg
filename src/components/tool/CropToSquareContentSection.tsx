import Link from 'next/link'

export default function CropToSquareContentSection() {
  return (
    <section className="space-y-8 pt-8 border-t border-border">
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Why Crop to Square?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          A square (1:1 aspect ratio) is the most universally compatible image format for social
          media, profile pictures, and thumbnails. Instagram pioneered the square format for posts,
          and it remains the dominant choice for profile photos across LinkedIn, Twitter, Facebook,
          YouTube, and Slack. Many apps also use square thumbnails for product and portfolio
          previews.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          Cropping to square before uploading prevents platforms from auto-cropping in undesirable
          ways — you control exactly what appears in the frame.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Square Image Sizes by Platform</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-surface">
                <th className="text-left p-3 border border-border font-semibold">Platform</th>
                <th className="text-left p-3 border border-border font-semibold">Square size</th>
                <th className="text-left p-3 border border-border font-semibold">Use</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  platform: 'Instagram post',
                  size: '1080 × 1080 px',
                  use: 'Feed post (displayed at 600px)',
                },
                {
                  platform: 'Instagram profile',
                  size: '110 × 110 px',
                  use: 'Min 180×180 recommended at upload',
                },
                {
                  platform: 'YouTube channel icon',
                  size: '800 × 800 px',
                  use: 'Displayed at 98px in feed',
                },
                {
                  platform: 'LinkedIn profile photo',
                  size: '400 × 400 px',
                  use: 'Min 200×200, displayed as circle',
                },
                {
                  platform: 'Twitter/X profile photo',
                  size: '400 × 400 px',
                  use: 'Displayed as circle at 48px',
                },
                {
                  platform: 'Facebook profile photo',
                  size: '320 × 320 px',
                  use: 'Min 180×180 at upload',
                },
                {
                  platform: 'Shopify product thumbnail',
                  size: '2048 × 2048 px',
                  use: 'Square for grid consistency',
                },
                {
                  platform: 'Slack / Teams avatar',
                  size: '512 × 512 px',
                  use: 'Displayed at 36–72px',
                },
              ].map(({ platform, size, use }, i) => (
                <tr key={platform} className={i % 2 === 1 ? 'bg-surface/50' : ''}>
                  <td className="p-3 border border-border font-medium text-text-main">
                    {platform}
                  </td>
                  <td className="p-3 border border-border font-mono text-primary">{size}</td>
                  <td className="p-3 border border-border text-text-muted">{use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How to Crop to Square Without Distortion
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          The key to a good square crop is choosing the right center point. For portraits, center on
          the face — eyes should sit in the upper third of the frame. For products, center the
          subject with equal space on all sides. For landscapes, choose the most interesting area
          rather than trying to keep everything in frame.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-sm text-text-muted">
          <li>
            <strong className="text-text-main">Portrait photos</strong> — center on the face, crop
            below the shoulders. Eyes in the upper third of the square.
          </li>
          <li>
            <strong className="text-text-main">Product photos</strong> — center the product with
            equal whitespace on all four sides.
          </li>
          <li>
            <strong className="text-text-main">Landscape photos</strong> — pick the single most
            compelling element and center the square on it. Wide landscapes rarely work as squares.
          </li>
          <li>
            <strong className="text-text-main">Logos and graphics</strong> — add padding around the
            logo to fill the square with whitespace rather than cropping into the mark.
          </li>
        </ul>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Square vs Rectangle — When Each Works</h2>
        <div className="grid sm:grid-cols-2 gap-4 text-sm">
          <div className="border border-border rounded-xl p-4">
            <p className="font-semibold text-text-main mb-2">Use square (1:1) for:</p>
            <ul className="list-disc pl-4 space-y-1 text-text-muted">
              <li>Profile photos (all platforms)</li>
              <li>Instagram feed posts</li>
              <li>Product grid thumbnails</li>
              <li>App icons and favicons</li>
              <li>Portfolio thumbnail grids</li>
            </ul>
          </div>
          <div className="border border-border rounded-xl p-4">
            <p className="font-semibold text-text-main mb-2">Use rectangle for:</p>
            <ul className="list-disc pl-4 space-y-1 text-text-muted">
              <li>YouTube thumbnails (16:9)</li>
              <li>Blog hero images (16:9 or 3:2)</li>
              <li>Instagram Stories (9:16)</li>
              <li>Presentations (16:9)</li>
              <li>Landscape photography</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Related Tools</h2>
        <ul className="list-disc pl-6 space-y-2 text-sm text-text-muted">
          <li>
            <Link href="/crop-image" className="text-primary hover:underline">
              Crop image
            </Link>{' '}
            — free-form crop to any area or ratio
          </li>
          <li>
            <Link href="/crop-image-circle" className="text-primary hover:underline">
              Crop image to circle
            </Link>{' '}
            — circular crop with transparent PNG background
          </li>
          <li>
            <Link href="/crop-image-to-ratio" className="text-primary hover:underline">
              Crop to aspect ratio
            </Link>{' '}
            — 16:9, 4:3, 3:2, 9:16 presets
          </li>
          <li>
            <Link href="/resize-image-for-instagram" className="text-primary hover:underline">
              Resize for Instagram
            </Link>{' '}
            — resize to exact Instagram pixel dimensions
          </li>
          <li>
            <Link href="/compress-image" className="text-primary hover:underline">
              Compress image
            </Link>{' '}
            — reduce file size after cropping for fast uploads
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-text-main">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {[
            {
              q: 'What is a 1:1 aspect ratio?',
              a: 'A 1:1 aspect ratio means the width and height are equal — a perfect square. Common square sizes include 1080×1080px (Instagram), 800×800px (YouTube icon), and 400×400px (profile photos). The pixel count depends on the original image size and how much of it you select.',
            },
            {
              q: 'Will cropping to square reduce image quality?',
              a: 'No. Cropping removes pixels outside the selection but does not resample or compress the remaining image. The quality within the cropped area is identical to the original.',
            },
            {
              q: 'How do I crop a photo to square for Instagram?',
              a: 'Upload your photo, position the 1:1 crop square over the subject, and download the result. For best Instagram quality, start from a photo at least 1080px on its shorter side. The downloaded image will be exactly the pixel size of your selected crop area.',
            },
            {
              q: 'Can I crop HEIC photos from my iPhone to square?',
              a: 'Yes. Upload your HEIC file — the tool converts it to JPEG automatically before cropping. The downloaded square will be a JPEG file compatible with all platforms.',
            },
            {
              q: 'Does the tool resize the image to a specific pixel size?',
              a: 'No — this tool crops the area you select without resizing. If you need the output to be exactly 1080×1080px, resize it after cropping using the resize tool.',
            },
            {
              q: 'Are my images uploaded to a server?',
              a: 'No. All cropping happens entirely in your browser. Your files never leave your device.',
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
