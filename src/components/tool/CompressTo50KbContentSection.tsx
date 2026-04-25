import Link from 'next/link'
import FAQItem from '@/components/tool/FAQItem'

export default function CompressTo50KbContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to compressing images to 50KB"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Why Compress an Image to 50KB?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          A 50KB file size limit is one of the strictest requirements you will encounter for image
          uploads. It commonly appears on government identity portals, civil service exam
          registration forms, competitive exam systems, national scholarship applications, and
          certain banking and financial institution portals. These systems impose the 50KB limit to
          minimize database storage and ensure fast rendering on low-bandwidth government networks.
          When your photo exceeds 50KB, the submission is rejected outright — often without a clear
          explanation of what file size is required or how to achieve it.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          A typical smartphone selfie or passport photo export is 1–5MB — 20 to 100 times over the
          50KB limit. Reducing a photo to 50KB requires a combination of lower quality settings and,
          for very large originals, reducing the image dimensions first. This tool compresses JPG,
          PNG, and WebP images with an adjustable quality slider starting at 65, which typically
          produces results under 50KB for most portrait photos at 600–800px wide. All processing
          happens entirely in your browser with no server upload.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How to Compress an Image to 50KB — 3 Steps
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
                Start at quality 65 for a 50KB target
              </p>
              <p className="text-sm text-text-muted leading-relaxed">
                Quality 65 is the recommended starting point for a 50KB target. Check the output
                size shown in the result — for most phone photos at 600–800px wide, quality 65
                produces 30–60KB. If still above 50KB, reduce to quality 55 or 50. For very large
                originals, first{' '}
                <Link href="/resize-image" className="text-primary underline">
                  resize the dimensions
                </Link>{' '}
                to 600–800px wide, then compress.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              3
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Download and verify the size</p>
              <p className="text-sm text-text-muted leading-relaxed">
                The compressed file downloads directly to your device. Verify the file size in your
                file manager before uploading to the form. The output size is also shown in the
                result card — check this before downloading to confirm the file is under 50KB.
              </p>
            </div>
          </li>
        </ol>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Common Platforms That Require Images Under 50KB
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          The 50KB limit is most commonly enforced by government and examination systems. Here are
          the most frequent use cases where you will encounter this strict requirement:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Government Exam Registration</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Civil service exams, competitive national examinations, and government recruitment
              portals in many countries (India&apos;s SSC, UPSC, banking exams; government portals
              in Southeast Asia) enforce 50KB limits on passport-style profile photos submitted with
              applications. The photo must also meet specific dimension requirements — typically
              200×200px or 35×45mm.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Scholarship Applications</p>
            <p className="text-xs text-text-muted leading-relaxed">
              National scholarship portals and university financial aid systems commonly require
              student photos and signature scans under 50KB. The strict limit minimizes server
              storage costs for high-volume application processing systems that receive hundreds of
              thousands of submissions.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Identity Verification Forms</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Online identity verification forms for banking, SIM card registration, and national ID
              enrollment sometimes enforce 50KB limits on selfie uploads and ID document scans.
              These systems prioritize low storage costs and fast processing over image fidelity.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Forum Avatars and Profile Photos</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Older forum platforms, membership systems, and community management tools sometimes
              enforce 50KB avatar limits. These limits reflect the original storage costs when the
              platforms were built and are rarely updated despite modern storage being inexpensive.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">E-Learning and LMS Portals</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Learning management systems and online course platforms sometimes enforce 50KB limits
              on student profile photos. These systems are often built on legacy infrastructure with
              strict per-user storage quotas that make large profile photo uploads impractical.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Digital Signatures</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Many application forms require a scanned signature image in addition to a profile
              photo, both under 50KB. Signature scans should be white background with a dark ink
              signature — converting to JPG at quality 60 at 300×100px typically produces a 10–25KB
              output that meets both quality and size requirements.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Recommended Settings to Hit 50KB</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          The combination of image dimensions and quality setting determines the output file size.
          Here is a practical guide for the most common scenarios:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">
              Portrait / passport photo (600px wide)
            </p>
            <p className="text-xs text-text-muted leading-relaxed">
              Resize to 600px wide first. Then compress at quality 65. Output: typically 20–45KB.
              This is the most common configuration for government exam photo uploads — clear enough
              to identify the person, small enough to meet strict limits.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">General photo (800px wide)</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Resize to 800px wide. Then compress at quality 60–65. Output: typically 30–55KB. If
              the result is still above 50KB, reduce quality to 55 or resize to 600px wide.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Screenshot or document scan</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Crop to the relevant area only first using the{' '}
              <Link href="/crop-image" className="text-primary underline">
                Crop Image
              </Link>{' '}
              tool. Then compress at quality 65–70. Black-and-white document scans often reach 50KB
              even at quality 80 due to their simple content.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">
              Signature scan (white background)
            </p>
            <p className="text-xs text-text-muted leading-relaxed">
              Crop tightly around the signature. Compress at quality 60. White background with dark
              ink compresses extremely efficiently — a 300×100px signature at quality 60 typically
              produces 5–15KB, well under any limit.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          What to Do If Your Image Will Not Compress Below 50KB
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          If quality 55 still produces a file above 50KB, the image dimensions are too large for the
          quality setting to reach the target. Follow these steps:
        </p>
        <ul className="space-y-2 text-sm text-text-muted">
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5 shrink-0">→</span>
            <span>
              <strong className="text-text-main">Resize dimensions first:</strong> Use the{' '}
              <Link href="/resize-image" className="text-primary underline">
                Resize Image
              </Link>{' '}
              tool to reduce the image to 400–600px wide. Halving the width reduces pixel count by
              75%, dramatically reducing the compressed file size regardless of quality setting.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5 shrink-0">→</span>
            <span>
              <strong className="text-text-main">Convert PNG photos to JPG first:</strong> PNG
              photographs compress much less efficiently than JPG. If your original is a PNG photo,
              use the{' '}
              <Link href="/png-to-jpg" className="text-primary underline">
                PNG to JPG converter
              </Link>{' '}
              first, then compress the JPG to reach 50KB easily.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold mt-0.5 shrink-0">→</span>
            <span>
              <strong className="text-text-main">Crop to the required area only:</strong> If the
              portal only needs a headshot, use the{' '}
              <Link href="/crop-image" className="text-primary underline">
                Crop Image
              </Link>{' '}
              tool to remove any background or unnecessary portions of the image before compressing.
              Smaller pixel area = smaller file at the same quality.
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
          for a government portal, exam registration, or scholarship application, no file is
          transmitted to any server. The compression and download happen locally on your computer or
          phone, making the tool completely safe for passport photos, ID document scans, signature
          images, and other sensitive personal documents. There is no account required, no usage
          limit, and no watermark on the compressed output. The tool is entirely free for any number
          of compressions.
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
              Target 100KB — for portals with slightly less strict size requirements.
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
              Reduce dimensions to 600px wide before compressing to reach 50KB.
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
              Crop to headshot or signature area before compressing for smallest output.
            </p>
          </Link>
        </div>
      </div>

      <CompressTo50KbFAQSection />
    </section>
  )
}

function CompressTo50KbFAQSection() {
  const faqs = [
    {
      q: 'How do I compress an image to under 50KB?',
      a: 'Upload your image and set the quality slider to 65. Check the output size shown in the result. For most portrait photos resized to 600–800px wide, quality 65 produces 20–50KB. If still above 50KB, reduce quality to 55 or use the Resize Image tool to reduce dimensions to 600px wide first, then compress again.',
    },
    {
      q: 'What quality setting should I use to get a 50KB image?',
      a: 'Quality 65 is the recommended starting point for a 50KB target. For phone photos between 1–3MB at full resolution, resize to 600–800px wide first, then compress at quality 65. For images already under 500KB, quality 60–65 usually produces a result under 50KB. Adjust down to 55 or 50 if needed and check the output size.',
    },
    {
      q: 'Can I compress a passport photo to 50KB?',
      a: 'Yes. Resize your passport photo to 600px wide using the Resize Image tool, then compress at quality 65. A passport photo at 600px wide and quality 65 typically produces a 20–40KB JPG — well under the 50KB limit. The image remains clear enough to identify the person at the display sizes used by form portals.',
    },
    {
      q: 'Why do government exam portals require photos under 50KB?',
      a: 'Government exam and scholarship portals impose strict 50KB limits to minimize database storage costs and ensure fast loading on government network infrastructure, which may have limited bandwidth. These systems process hundreds of thousands of applications and calculate storage costs per applicant — a 50KB limit versus a 5MB limit means 100x less storage per application.',
    },
    {
      q: 'Does compressing to 50KB make the image look bad?',
      a: 'At 50KB for a portrait photo at 600px wide, the image is visibly compressed but still suitable for the form portals that require it — these systems display photos at small sizes (100–200px) where compression artifacts are less noticeable. For photos that will be viewed at larger sizes, 50KB is the absolute minimum and quality 65+ should be used.',
    },
    {
      q: 'Can I compress a signature to 50KB?',
      a: 'Yes, and it is easy. A signature scan on white background at 300×100px compressed at quality 60 typically produces 5–15KB — far under 50KB. Crop tightly around the signature first using the Crop Image tool to remove excess white space, then compress. Black ink on white background compresses extremely efficiently.',
    },
    {
      q: 'Does compressing to 50KB change the image dimensions?',
      a: 'No. This tool compresses image quality without changing dimensions. A 1000×1000px image compressed to 50KB remains 1000×1000px — only the quality encoding changes. If you need to change dimensions, use the Resize Image tool separately. For very large originals that cannot reach 50KB through quality compression alone, resize first then compress.',
    },
    {
      q: 'Are my images uploaded to a server when compressing to 50KB?',
      a: 'No. All compression runs entirely in your browser using JavaScript. No image file is ever sent to any server. Your photos — including passport photos, ID document scans, signature images, and personal photos — never leave your device during the compression process. The tool is completely private.',
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
