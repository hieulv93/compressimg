import Link from 'next/link'
import FAQItem from './FAQItem'

export default function ImageResizerContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to resizing images"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">What Is an Image Resizer?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          An image resizer changes the pixel dimensions of an image — width and height — without
          converting the file format. The output image has exactly the pixel count you specify.
          Resizing is different from compression: resizing changes dimensions, compression changes
          file size while keeping the same dimensions. For the smallest possible file, resize to the
          target dimensions first, then compress.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          This tool resizes images entirely in your browser using the Canvas API. No file is
          uploaded to any server. Supports JPG, PNG, WebP, and HEIC (iPhone photos).
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How to Resize an Image Online — 3 Steps
        </h2>
        <ol className="space-y-4">
          {[
            {
              n: '1',
              title: 'Upload your image',
              desc: 'Click the upload area or drag and drop your image. Accepts JPG, PNG, WebP, and HEIC. The original image dimensions are loaded automatically.',
            },
            {
              n: '2',
              title: 'Set the target dimensions',
              desc: 'Enter the width and height in pixels. Use the lock icon to maintain the aspect ratio — changing one dimension will update the other automatically. Or unlock to set custom dimensions freely.',
            },
            {
              n: '3',
              title: 'Download the resized image',
              desc: 'Click Resize Image. The result downloads instantly with the exact pixel dimensions you set. Your original file is unchanged.',
            },
          ].map(({ n, title, desc }) => (
            <li key={n} className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                {n}
              </span>
              <div>
                <p className="text-sm font-semibold text-text-main">{title}</p>
                <p className="text-sm text-text-muted leading-relaxed">{desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Standard Image Dimensions — Quick Reference
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Use these pixel dimensions for common use cases. The lock icon keeps your image
          proportions intact when you resize.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-surface border-b border-border">
                <th className="text-left p-3 font-semibold text-text-main">Platform / Use</th>
                <th className="text-left p-3 font-semibold text-text-main">Dimensions (px)</th>
                <th className="text-left p-3 font-semibold text-text-main">Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  use: 'Full HD web image',
                  dim: '1920 × 1080',
                  note: 'Hero images, banner photos',
                },
                {
                  use: 'Blog content image',
                  dim: '1200 × 800',
                  note: 'Standard post images, Open Graph',
                },
                { use: 'Instagram post', dim: '1080 × 1080', note: 'Square — optimal for feed' },
                { use: 'Instagram story', dim: '1080 × 1920', note: '9:16 portrait — full screen' },
                { use: 'Facebook post', dim: '1200 × 630', note: 'Feed photo, link preview' },
                {
                  use: 'Twitter / X post',
                  dim: '1600 × 900',
                  note: '16:9 — displays at 600px wide',
                },
                { use: 'YouTube thumbnail', dim: '1280 × 720', note: '16:9 HD — required minimum' },
                { use: 'LinkedIn post', dim: '1200 × 628', note: 'Feed image, article cover' },
                { use: 'Email inline image', dim: '600 × 400', note: 'Max email client width' },
                {
                  use: 'Passport / ID photo',
                  dim: '600 × 600',
                  note: 'Govt forms — check exact requirement',
                },
                {
                  use: 'Desktop wallpaper',
                  dim: '3840 × 2160',
                  note: '4K UHD, also 2560×1440 for 2K',
                },
                { use: 'Thumbnail / icon', dim: '300 × 300', note: 'Avatars, product thumbnails' },
              ].map(({ use, dim, note }) => (
                <tr
                  key={use}
                  className="border-b border-border hover:bg-surface/50 transition-colors"
                >
                  <td className="p-3 font-medium text-text-main text-xs">{use}</td>
                  <td className="p-3 text-text-muted text-xs font-mono">{dim}</td>
                  <td className="p-3 text-text-muted text-xs">{note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Resize Image for Social Media</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              title: 'Instagram',
              desc: 'Square posts: 1080×1080px. Portrait: 1080×1350px (4:5 ratio — displays largest in feed). Stories and Reels: 1080×1920px. Carousel: same as single post. Instagram re-compresses all uploads — upload at full resolution for best results.',
            },
            {
              title: 'YouTube',
              desc: 'Thumbnail: 1280×720px (16:9, max 2MB). Channel banner: 2560×1440px (safe area 1546×423px center). Profile picture: 800×800px minimum (displays as circle). End screen elements display at 300×300px.',
            },
            {
              title: 'Facebook',
              desc: 'Post photo: 1200×630px. Cover photo: 851×315px (desktop), 640×360px (mobile — use 820×312px to serve both). Profile photo: 180×180px minimum. Event cover: 1920×1005px.',
            },
            {
              title: 'Twitter / X',
              desc: 'Post image: 1600×900px (16:9) for full display. Single image crops to 2:1 in feed. Profile photo: 400×400px. Header / banner: 1500×500px. Cards: 800×418px.',
            },
          ].map(({ title, desc }) => (
            <div key={title} className="rounded-xl border border-border p-4 space-y-1">
              <p className="font-semibold text-text-main text-sm">{title}</p>
              <p className="text-xs text-text-muted leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Resize Image for Forms and Documents</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Government portals, job applications, and exam forms often require photos at exact pixel
          dimensions. Resize first, then use the{' '}
          <Link href="/compress-image-to-100kb" className="text-primary underline">
            Compress to 100KB tool
          </Link>{' '}
          to hit the file size limit.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              title: 'Passport / visa photos',
              desc: 'US passport: 600×600px (2×2 inches at 300 DPI). UK passport: 450×600px. Indian passport: 51×51mm at 600 DPI. Always check the specific embassy or government portal requirements before submitting.',
            },
            {
              title: 'Job application portals',
              desc: 'Most HR portals require 400×400px to 600×600px profile photos. File size limit is typically 100–500KB. Resize to the required dimensions, then compress at quality 65–70.',
            },
            {
              title: 'Online exam registration',
              desc: 'Exam boards (UPSC, IBPS, CAT, SSC) typically require 200×230px to 400×500px at 10–50KB. Portrait orientation. Resize first, compress second.',
            },
            {
              title: 'Company / school forms',
              desc: 'University applications: 200×200px to 400×400px. Corporate HR: 300×300px is standard. For general use, 400×400px at quality 70 outputs 20–50KB — safely under any limit.',
            },
          ].map(({ title, desc }) => (
            <div key={title} className="rounded-xl border border-border p-4 space-y-1">
              <p className="font-semibold text-text-main text-sm">{title}</p>
              <p className="text-xs text-text-muted leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Does Resizing Reduce File Size?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Yes — significantly. File size is roughly proportional to the number of pixels. Halving
          both width and height reduces file size by approximately 75%. Here is what to expect when
          resizing a typical 4000×3000px smartphone photo (original ~5MB JPEG):
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-surface border-b border-border">
                <th className="text-left p-3 font-semibold text-text-main">Target size</th>
                <th className="text-left p-3 font-semibold text-text-main">Approx output</th>
                <th className="text-left p-3 font-semibold text-text-main">Best for</th>
              </tr>
            </thead>
            <tbody>
              {[
                { target: '1920×1440px', output: '1–2MB', use: 'Full HD web, desktop backgrounds' },
                { target: '1280×960px', output: '400–900KB', use: 'Blog images, social media' },
                { target: '800×600px', output: '150–400KB', use: 'Email inline, product pages' },
                { target: '600×600px', output: '80–200KB', use: 'ID forms, profile photos' },
                { target: '400×300px', output: '30–100KB', use: 'Thumbnails, government portals' },
              ].map(({ target, output, use }) => (
                <tr
                  key={target}
                  className="border-b border-border hover:bg-surface/50 transition-colors"
                >
                  <td className="p-3 font-semibold text-text-main text-xs font-mono">{target}</td>
                  <td className="p-3 text-text-muted text-xs">{output}</td>
                  <td className="p-3 text-text-muted text-xs">{use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-text-muted text-sm leading-relaxed">
          For even smaller files after resizing, run the resized image through the{' '}
          <Link href="/compress-image" className="text-primary underline">
            Image Compressor
          </Link>{' '}
          at quality 70–80. Combining resize + compress is the most effective way to hit small file
          size targets (under 100KB) without visible quality loss.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Resize vs Crop — What Is the Difference?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="rounded-xl border border-border p-4 space-y-2">
            <p className="font-semibold text-text-main text-sm">Resize (this tool)</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Scales the entire image to new dimensions. The full image content is preserved —
              nothing is cut off. If you change the aspect ratio, the image will be stretched or
              squished. Use the aspect ratio lock to avoid distortion.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-2">
            <p className="font-semibold text-text-main text-sm">
              <Link href="/crop-image" className="text-primary underline">
                Crop Image
              </Link>
            </p>
            <p className="text-xs text-text-muted leading-relaxed">
              Cuts the image to show only a portion of it. The remaining pixels are discarded. Use
              crop when you need a specific aspect ratio (like square for Instagram) without
              stretching — you choose which part of the image to keep.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Privacy — Images Never Leave Your Device
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          All resizing runs locally in your browser using the Canvas API. Your images are never
          uploaded to any server, never stored, and never shared. Safe for sensitive photos
          including ID documents, medical images, and personal photographs that you would not want
          stored on a third-party server.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">More Free Image Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { href: '/compress-image', label: 'Compress Image', desc: 'Reduce file size' },
            { href: '/crop-image', label: 'Crop Image', desc: 'Cut to exact dimensions' },
            {
              href: '/compress-image-to-100kb',
              label: 'Compress to 100KB',
              desc: 'Hit size targets',
            },
            { href: '/convert-image', label: 'Convert Image', desc: 'Change image format' },
          ].map(({ href, label, desc }) => (
            <Link
              key={href}
              href={href}
              className="block rounded-xl border border-border p-4 hover:border-primary transition-colors group"
            >
              <p className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors">
                {label}
              </p>
              <p className="text-xs text-text-muted mt-1">{desc}</p>
            </Link>
          ))}
        </div>
      </div>

      <ImageResizerFAQSection />
    </section>
  )
}

function ImageResizerFAQSection() {
  const faqs = [
    {
      q: 'How do I resize an image online for free?',
      a: 'Upload your image, enter the target width and height in pixels, and click Resize Image. The resized file downloads instantly — free, no sign-up, no upload to server. Works on JPG, PNG, WebP, and HEIC (iPhone photos).',
    },
    {
      q: 'How do I resize an image without losing quality?',
      a: 'Resize down (make smaller) — quality is fully preserved. Resizing up (enlarging) introduces softness because the tool must generate new pixels. For enlargements, keep the increase under 150% of the original size for acceptable results.',
    },
    {
      q: 'How do I resize an image to a specific size in KB?',
      a: 'Resize to the target dimensions first, then use the Compress Image tool to reduce the file size. For a 100KB target: resize to 800×600px or smaller, then compress at quality 60–70. This combination reliably hits small file size targets.',
    },
    {
      q: 'Can I resize an image without changing the aspect ratio?',
      a: 'Yes. Enable the aspect ratio lock (chain icon) — changing width automatically adjusts height and vice versa. This prevents stretching or squishing. Unlock the ratio only when you need exact dimensions for a specific platform that uses a different aspect ratio.',
    },
    {
      q: 'How do I resize an image on iPhone?',
      a: 'Open this page in Safari on your iPhone, tap the upload area, select a photo from your camera roll, enter dimensions, and download the resized image. HEIC photos are supported and processed automatically.',
    },
    {
      q: 'What is the difference between resizing and cropping?',
      a: 'Resizing scales the entire image to new dimensions — the full image content is preserved, just at a different size. Cropping cuts the image to show only a portion, discarding the rest. Use the Crop Image tool when you need a specific aspect ratio without scaling distortion.',
    },
    {
      q: 'What pixel dimensions should I use for Instagram?',
      a: 'Square posts: 1080×1080px. Portrait posts: 1080×1350px (shows largest in feed). Stories and Reels: 1080×1920px. Carousel slides: same as single post. Instagram re-compresses on upload, so full resolution is always better.',
    },
    {
      q: 'Does my image get uploaded to a server when I resize it?',
      a: 'No. All resizing happens in your browser using JavaScript and the Canvas API. Your image never leaves your device. No files are uploaded, stored, or shared with any server.',
    },
  ]

  return (
    <div className="space-y-3">
      <h2 className="text-xl font-bold text-text-main">Frequently Asked Questions</h2>
      <dl className="space-y-3">
        {faqs.map((faq, i) => (
          <FAQItem key={i} question={faq.q} answer={faq.a} />
        ))}
      </dl>
    </div>
  )
}
