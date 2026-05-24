import Link from 'next/link'

export default function CropCircleContentSection() {
  return (
    <section className="space-y-8 pt-8 border-t border-border">
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">What Is a Circle Crop?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          A circle crop applies a circular mask to an image, making the area outside the circle
          transparent. The output is a PNG file — the only common format that supports transparency
          (alpha channel). The result is a round image that can be placed on any background color or
          layered on top of other graphics.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          Most social platforms display profile photos in a circular frame regardless of the shape
          of the uploaded image. Uploading a pre-cropped circle gives you precise control over what
          appears in the circle — the platform cannot re-crop or distort your image.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Where Circle Crops Are Used</h2>
        <div className="grid sm:grid-cols-2 gap-3 text-sm">
          {[
            {
              title: 'Profile photos',
              desc: 'LinkedIn, Twitter, Facebook, Instagram, GitHub, Slack, and Teams all display profile photos in circular frames. A pre-cropped circle prevents unintended auto-cropping.',
            },
            {
              title: 'Email signatures',
              desc: 'Most email signature builders place photos in a circular frame. Exporting a pre-cropped circle PNG avoids alignment issues across email clients.',
            },
            {
              title: 'Team and "About Us" pages',
              desc: 'Circular staff photos are the standard design pattern for team pages on websites. Each photo looks consistent in a grid layout.',
            },
            {
              title: 'Logo variations',
              desc: 'A circular version of a logo is required for app icons (iOS, Android), browser favicons in some contexts, and circular social media frames.',
            },
            {
              title: 'Presentations',
              desc: 'PowerPoint and Google Slides use circular image placeholders for speaker photos, testimonials, and team sections.',
            },
            {
              title: 'Chat and messaging',
              desc: 'Discord, Zoom, Google Meet, and Microsoft Teams display all avatars as circles. A square photo gets auto-cropped — a pre-cropped circle keeps the subject centered.',
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
        <h2 className="text-xl font-bold text-text-main">Tips for the Best Circle Crop</h2>
        <ul className="list-disc pl-6 space-y-2 text-sm text-text-muted">
          <li>
            <strong className="text-text-main">Center the subject precisely</strong> — The circle is
            perfectly centered within the crop selection. Position the crop square so the subject is
            centered before clicking Crop.
          </li>
          <li>
            <strong className="text-text-main">Use a square source image</strong> — If your photo is
            already square, the full image becomes the circle. If it&apos;s rectangular, the circle
            is inscribed within the shorter side.
          </li>
          <li>
            <strong className="text-text-main">Leave breathing room</strong> — Do not crop too
            tightly around faces or logos. Leave 10–15% padding between the edge of the subject and
            the circle boundary.
          </li>
          <li>
            <strong className="text-text-main">Use a high-resolution source</strong> — Profile
            photos are often displayed at 2× on HiDPI screens. Start from a photo at least 400×400px
            for sharp results at standard display sizes.
          </li>
          <li>
            <strong className="text-text-main">PNG output for transparent backgrounds</strong> — The
            circle PNG works on any background. If you need a solid background color (e.g., white or
            brand color), add it in a design tool after cropping.
          </li>
        </ul>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Why the Output Is Always PNG</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Circular crops require transparency outside the circle boundary. JPEG does not support
          transparency — it fills any transparent area with a solid color (usually black or white).
          PNG supports full alpha transparency, making it the only viable format for circle crops
          with a true transparent background.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          If you need a JPEG circle (e.g., for platforms that reject PNG uploads), you can add a
          solid background color to the circle PNG in any design tool before exporting as JPEG.
        </p>
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
            <Link href="/crop-image-to-square" className="text-primary hover:underline">
              Crop to square
            </Link>{' '}
            — 1:1 square crop for Instagram and profiles
          </li>
          <li>
            <Link href="/crop-image-to-ratio" className="text-primary hover:underline">
              Crop to aspect ratio
            </Link>{' '}
            — 16:9, 4:3, 3:2, 9:16 presets
          </li>
          <li>
            <Link href="/png-to-jpg" className="text-primary hover:underline">
              PNG to JPG
            </Link>{' '}
            — convert the circle PNG to JPEG after adding a background
          </li>
          <li>
            <Link href="/compress-image" className="text-primary hover:underline">
              Compress image
            </Link>{' '}
            — reduce PNG file size after cropping
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-text-main">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {[
            {
              q: 'What format is the circle crop output?',
              a: 'The circle crop always outputs a PNG file with a transparent background. PNG is the only common format that supports alpha transparency. JPEG would fill the outside of the circle with a solid color.',
            },
            {
              q: 'Can I use the circular PNG on a colored background?',
              a: 'Yes. PNG transparency means the circular image will blend seamlessly onto any background — white, black, brand colors, or patterns. Place the PNG on your background in a design tool or directly in your HTML/CSS.',
            },
            {
              q: 'How do I make a circular profile photo for LinkedIn?',
              a: 'Upload your photo, position the crop square centered on your face with some space around it, and click Crop. Download the circular PNG and upload it as your LinkedIn profile photo. LinkedIn displays profile photos as circles anyway, but pre-cropping ensures you control the framing.',
            },
            {
              q: 'Can I crop a logo to a circle?',
              a: 'Yes. Upload your logo PNG, position the crop square to include the full logo with equal padding on all sides, and download. The result is a circular logo with a transparent background — ideal for app icons and circular social media frames.',
            },
            {
              q: 'Will the circle be perfectly round?',
              a: 'Yes. The circle is generated using an arc clip on an HTML5 Canvas — it is mathematically perfect. The result is an exact circle, not an ellipse.',
            },
            {
              q: 'Are my images uploaded to a server?',
              a: 'No. All cropping happens entirely in your browser using the Canvas API. Your files never leave your device and are never sent to any server.',
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
