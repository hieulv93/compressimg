import Link from 'next/link'
import FAQItem from '@/components/tool/FAQItem'

export default function CompressTo200KbContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to compressing images to 200KB"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Why Compress an Image to 200KB?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Many online forms, government portals, job application systems, and social media platforms
          impose strict file size limits on uploaded images. A 200KB limit is one of the most common
          thresholds — appearing on LinkedIn profile photos, government identity document upload
          portals, university application forms, visa application systems, and e-commerce seller
          account verification pages. When your photo exceeds the 200KB limit, the upload is
          rejected entirely, often with a generic error message that does not tell you the resulting
          file size after compression.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          A typical smartphone photo is 3–8MB — 15 to 40 times over the 200KB limit. This tool
          reduces JPG, PNG, and WebP images to a target size that fits under 200KB in most cases,
          using a quality setting that keeps the image visually clear at the sizes these portals
          display. All compression runs in your browser with no file uploads to any server.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How to Compress an Image to 200KB — 3 Steps
        </h2>
        <ol className="space-y-4">
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              1
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Upload your image</p>
              <p className="text-sm text-text-muted leading-relaxed">
                Click the upload area, drag and drop your image, or paste from clipboard (Ctrl+V).
                Supports JPG, PNG, and WebP files up to 20MB. Your image stays entirely on your
                device — nothing is sent to any server.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              2
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">
                Start at quality 75 for a 200KB target
              </p>
              <p className="text-sm text-text-muted leading-relaxed">
                Quality 75 is the recommended starting point for a 200KB target. Check the output
                size shown in the result. If the file is still above 200KB, reduce quality to 65 or
                60 and re-compress. For very large originals (over 5MB), you may also need to{' '}
                <Link href="/resize-image" className="text-primary underline">
                  resize the dimensions
                </Link>{' '}
                first to get under 200KB at acceptable quality.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              3
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">
                Download and upload to the portal
              </p>
              <p className="text-sm text-text-muted leading-relaxed">
                The compressed file downloads directly to your device. Check the file size in your
                file manager before uploading to confirm it is under 200KB. Most compressed photos
                of people or ID documents at quality 75 land between 80–180KB.
              </p>
            </div>
          </li>
        </ol>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Common Platforms That Require Images Under 200KB
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          The 200KB limit appears across a wide range of platforms and use cases. Here are the most
          common places you will encounter this requirement:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">LinkedIn Profile Photo</p>
            <p className="text-xs text-text-muted leading-relaxed">
              LinkedIn accepts profile photos up to 8MB, but recommends keeping them under 200KB for
              fast display. The platform also recommends square images at 400×400px. Compress your
              headshot to 100–180KB at quality 80 for the best balance of sharpness and file size.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Government and Visa Portals</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Government identity portals, visa application systems (including many EU, UK, and US
              government forms), and national ID document upload systems commonly enforce a 200KB
              limit on photo uploads. The image must also meet dimension requirements — typically
              35×45mm at 300 DPI for passport-style photos.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">University and Job Applications</p>
            <p className="text-xs text-text-muted leading-relaxed">
              University online application portals frequently cap photo uploads at 200KB. Job
              application systems for government positions, civil services, and large enterprises
              also often enforce 200KB limits on profile photos and document scans to minimize
              database storage.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">E-Commerce Seller Accounts</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Marketplace seller verification and profile systems sometimes impose size limits on
              identity documents and profile photos. Compressing images to under 200KB speeds up the
              verification process and avoids upload rejections during account setup.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Forum and Community Avatars</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Many forum platforms, community management tools, and online event registration
              systems enforce 200KB limits on avatar and profile photos. Compressing your avatar to
              50–150KB at quality 80 meets these limits without visible quality loss at the small
              display sizes used for avatars.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Email Signature Photos</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Email signature management platforms and corporate email systems often recommend or
              require signature photos under 200KB to prevent large email sizes. Compress your
              signature headshot to 30–80KB at quality 75 — it will display sharply at the small
              size used in email signatures.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Recommended Quality Settings for a 200KB Target
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          The quality setting needed to reach 200KB depends on the original image dimensions and
          content. Here is a practical guide based on common starting file sizes:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">
              Original under 1MB (phone screenshot, small photo)
            </p>
            <p className="text-xs text-text-muted leading-relaxed">
              Quality 80–85 will typically produce a result under 200KB. Start at 80 and check the
              output size. These smaller originals compress easily and the result remains sharp.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">
              Original 1–3MB (typical phone photo)
            </p>
            <p className="text-xs text-text-muted leading-relaxed">
              Quality 70–75 usually produces 100–200KB. Start at 75 and adjust down if needed.
              Portrait photos of people remain visually acceptable at quality 70 for screen viewing.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">
              Original 3–8MB (high-res smartphone or DSLR)
            </p>
            <p className="text-xs text-text-muted leading-relaxed">
              Quality 60–70 may be needed to reach 200KB. Consider resizing the image dimensions to
              1200–1600px wide first using the Resize tool, which dramatically reduces file size
              before quality compression is applied.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">
              Original over 8MB (RAW export, professional camera)
            </p>
            <p className="text-xs text-text-muted leading-relaxed">
              Resize to 1200px wide first, then compress at quality 65–70. This two-step process
              produces a result under 200KB while keeping the image clear at typical screen sizes
              for profile photos and document uploads.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          What to Do If Your Image Will Not Compress Below 200KB
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Some images are difficult to compress below 200KB at quality settings that still look
          acceptable — particularly large PNG files of photographs, or very high-resolution photos
          with lots of fine detail. If quality 60 still produces a file over 200KB, follow these
          steps:
        </p>
        <ul className="space-y-2 text-sm text-text-muted">
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5 shrink-0">→</span>
            <span>
              <strong className="text-text-main">Resize the dimensions first:</strong> Use the{' '}
              <Link href="/resize-image" className="text-primary underline">
                Resize Image
              </Link>{' '}
              tool to reduce the image to 800–1200px wide, then compress. Halving the dimensions
              quarters the pixel count, dramatically reducing file size.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5 shrink-0">→</span>
            <span>
              <strong className="text-text-main">Convert PNG to JPG:</strong> If you are starting
              from a PNG photo, the lossless format is much larger than necessary. Use the{' '}
              <Link href="/png-to-jpg" className="text-primary underline">
                PNG to JPG converter
              </Link>{' '}
              first, then compress the resulting JPG to reach 200KB much more easily.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5 shrink-0">→</span>
            <span>
              <strong className="text-text-main">Crop to the required area only:</strong> If the
              upload portal only needs a headshot or a specific portion of the image, use the{' '}
              <Link href="/crop-image" className="text-primary underline">
                Crop Image
              </Link>{' '}
              tool to remove unnecessary parts before compressing.
            </span>
          </li>
        </ul>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Privacy — Your Images Never Leave Your Device
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          This compressor runs entirely in your browser using JavaScript. When you compress a photo
          for a government portal, job application, or identity document upload, no file is
          transmitted to any server. The compression and download happen locally on your computer or
          phone, making the tool completely safe for passport photos, ID documents, and other
          sensitive personal images. There is no account required, no usage limit, and no watermark
          on the compressed output. The tool is entirely free for any number of compressions.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">More Free Image Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link
            href="/compress-image-to-100kb"
            className="block rounded-xl border border-border p-4 hover:border-primary transition-colors group"
          >
            <p className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors">
              Compress to 100KB
            </p>
            <p className="text-xs text-text-muted mt-1">
              Hit a strict 100KB limit for forms and portals with tighter requirements.
            </p>
          </Link>
          <Link
            href="/resize-image"
            className="block rounded-xl border border-border p-4 hover:border-primary transition-colors group"
          >
            <p className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors">
              Resize Image
            </p>
            <p className="text-xs text-text-muted mt-1">
              Reduce image dimensions first when quality compression alone is not enough.
            </p>
          </Link>
          <Link
            href="/crop-image"
            className="block rounded-xl border border-border p-4 hover:border-primary transition-colors group"
          >
            <p className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors">
              Crop Image
            </p>
            <p className="text-xs text-text-muted mt-1">
              Crop to portrait ratio or remove background before compressing a headshot.
            </p>
          </Link>
        </div>
      </div>

      <CompressTo200KbFAQSection />
    </section>
  )
}

function CompressTo200KbFAQSection() {
  const faqs = [
    {
      q: 'How do I compress an image to under 200KB?',
      a: 'Upload your image to this tool and set the quality slider to 75. Check the output file size shown in the result — for most smartphone photos, quality 75 produces a result between 80–200KB. If the file is still above 200KB, reduce quality to 65 or 60. For very large originals (over 5MB), resize the image dimensions to 1200px wide first using the Resize tool, then compress.',
    },
    {
      q: 'What quality setting should I use to get a 200KB image?',
      a: 'Quality 75 is the recommended starting point. For phone photos between 1–3MB, quality 75 typically produces a 100–200KB output. For larger originals (3–8MB), try quality 65–70. For photos that are already under 1MB, quality 80–85 is usually enough to land under 200KB. Always check the output size shown after compression and adjust as needed.',
    },
    {
      q: 'Which image format gives the smallest file size under 200KB?',
      a: 'JPG produces the smallest file size for photographs at equivalent quality, making it the easiest format to compress under 200KB. PNG files of photographs are much larger than JPG at the same image content. If you have a PNG photo that needs to be under 200KB, convert it to JPG first using the PNG to JPG tool, then compress the JPG to reach 200KB more easily.',
    },
    {
      q: 'Why does my image not compress to 200KB even at low quality?',
      a: 'High-resolution images (over 3000px wide) contain more data that must be encoded regardless of quality setting. Even at low quality, a 4000×3000px image may exceed 200KB. The solution is to resize the image dimensions first — reducing a 4000px photo to 1200px wide using the Resize tool cuts file size by 85% before any quality compression is applied, making 200KB easily achievable.',
    },
    {
      q: 'Can I compress a PNG image to 200KB?',
      a: 'Yes, but PNG is a lossless format and compresses less efficiently than JPG for photographs. For a PNG photo, convert it to JPG first using the PNG to JPG tool, then compress the JPG to under 200KB. This two-step process typically produces a much better result — clearer image at the same or smaller file size — compared to trying to compress a PNG directly.',
    },
    {
      q: 'Does compressing to 200KB change the image dimensions?',
      a: 'No. This tool compresses image quality without changing the image dimensions. A 3000×2000px photo compressed to 200KB remains 3000×2000px — only the quality encoding is reduced. If you need to change dimensions, use the Resize Image tool separately before or after compression.',
    },
    {
      q: 'What websites require photos under 200KB?',
      a: 'Common platforms with 200KB photo limits include government visa and identity portals, university online applications, civil service job application systems, professional networking profile photos, forum and community avatar uploads, and email signature management systems. The 200KB limit is one of the most commonly used thresholds for form image uploads globally.',
    },
    {
      q: 'Are my images uploaded to a server when compressing to 200KB?',
      a: 'No. All compression runs entirely in your browser using JavaScript. No image file is ever sent to any server. Your photos — including ID documents, passport photos, and sensitive personal images — never leave your device during the compression process. The tool is completely private with no data transmission.',
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
