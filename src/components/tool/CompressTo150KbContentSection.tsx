import Link from 'next/link'
import FAQItem from '@/components/tool/FAQItem'

export default function CompressTo150KbContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to compressing images to 150KB"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Why Compress an Image to 150KB?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          A 150KB limit commonly appears on college admission portals, university application forms,
          scholarship systems (NSP, state scholarship portals), Aadhaar enrollment forms, and some
          job application systems. These platforms allow slightly more than the stricter 50–100KB
          government exam limits, enabling better image quality while still keeping server storage
          manageable. A photo at 150KB and 600×800px delivers a clear, professional headshot
          suitable for most official submission purposes.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          Reaching 150KB from a typical smartphone photo (3–8MB) requires quality 70–75. This tool
          starts at quality 72, which compresses a standard 600×800px portrait to 60–140KB — right
          at the target. All compression runs in your browser with no server upload.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How to Compress an Image to 150KB — 3 Steps
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
                WebP, and HEIC up to 20MB. For very large photos (4000px+), consider resizing to
                800px wide first using the{' '}
                <Link href="/resize-image/" className="text-primary hover:underline">
                  Resize Image
                </Link>{' '}
                tool before compressing.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              2
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Set quality to 70–75</p>
              <p className="text-sm text-text-muted leading-relaxed">
                Quality 72 is the sweet spot for 150KB targets. At 600×800px and quality 72, output
                is typically 60–140KB — under 150KB with good visual quality. If still above 150KB,
                lower to quality 65–68. For very large originals (2000px+), resize to 800px wide
                first.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              3
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Download when under 150KB</p>
              <p className="text-sm text-text-muted leading-relaxed">
                The result card shows the exact compressed size. Download when under 150KB and
                upload to your portal. No account or watermark — the file is yours.
              </p>
            </div>
          </li>
        </ol>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Portals That Commonly Use a 150KB Limit
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              name: 'College Admissions (DU, JNU, IGNOU)',
              detail: 'Photo under 100–200KB, JPG/PNG',
            },
            {
              name: 'NSP Scholarship Portal',
              detail: 'Photo under 200KB for scholarship applications',
            },
            {
              name: 'State University Applications',
              detail: 'Varies: 100–200KB, check the specific portal',
            },
            { name: 'Aadhaar Update Form', detail: 'Supporting documents under 200KB' },
            { name: 'Job Portals (Shine, TimesJobs)', detail: 'Profile photo under 200KB' },
            { name: 'Bank Account Opening (KYC)', detail: 'Photo under 100–200KB, JPG' },
          ].map(({ name, detail }) => (
            <div key={name} className="rounded-xl border border-border bg-surface p-3 text-sm">
              <p className="font-semibold text-text-main text-xs">{name}</p>
              <p className="text-text-muted text-xs mt-0.5">{detail}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-text-muted">
          Always verify the exact limit on the official portal — requirements change between
          application cycles.
        </p>
      </div>

      <div className="rounded-xl border border-border bg-surface p-4 text-sm space-y-2">
        <h2 className="font-semibold text-text-main">Your Images Never Leave Your Device</h2>
        <p className="text-text-muted text-xs leading-relaxed">
          All compression runs entirely in your browser. Your photos, documents, and ID images are
          never uploaded to any server. Free with no limits, no account required.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">More Free Image Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            {
              href: '/compress-image-to-100kb/',
              label: 'Compress to 100KB',
              desc: 'Most common limit',
            },
            {
              href: '/compress-image-to-200kb/',
              label: 'Compress to 200KB',
              desc: 'Visa, Aadhaar docs',
            },
            {
              href: '/compress-image-to-50kb/',
              label: 'Compress to 50KB',
              desc: 'Naukri, exam portals',
            },
            { href: '/resize-image/', label: 'Resize Image', desc: 'Change pixel dimensions' },
            { href: '/compress-image/', label: 'Compress Image', desc: 'Any format, any size' },
            { href: '/heic-to-jpg/', label: 'HEIC to JPG', desc: 'Convert iPhone photos' },
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
          Frequently Asked Questions About Compressing Images to 150KB
        </h2>
        <div className="space-y-2">
          {[
            {
              q: 'How do I compress an image to under 150KB?',
              a: 'Set quality to 70–75 and upload your image. For a 600×800px photo at quality 72, output is typically 60–140KB. If still over 150KB, lower to quality 65. For very large photos (2000px+), resize to 800px wide first using the Resize Image tool.',
            },
            {
              q: 'What quality setting is best for 150KB?',
              a: 'Quality 72–75 is the sweet spot. At this quality, a 600×800px JPEG shows no visible compression artifacts for face photos. Only lower below 70 if the original photo is very large (1200px+) and still above 150KB at quality 72.',
            },
            {
              q: 'Can I compress a PNG to 150KB?',
              a: 'This tool converts PNG to JPEG during compression, which produces much smaller files. A 600×800px PNG portrait at quality 72 will output a JPEG of 60–140KB — under 150KB. If the PNG has transparency and you need to preserve it, use the Compress Image tool with PNG output instead.',
            },
            {
              q: 'Does compressing to 150KB reduce image dimensions?',
              a: 'No. Only file size is reduced through quality compression — dimensions stay the same. If your portal also requires specific dimensions (e.g., 600×800px), use the Resize Image tool to set the right dimensions first, then compress to reach 150KB.',
            },
            {
              q: 'Can I compress an iPhone HEIC photo to 150KB?',
              a: 'Yes. Upload your iPhone HEIC photo directly — it is automatically converted to JPEG during compression. iPhone 12MP photos are 4032×3024px, so a quality 72 compression will output around 800KB–1.5MB. Resize to 800px wide first using the Resize Image tool to easily get under 150KB.',
            },
            {
              q: 'Is this tool free and safe?',
              a: 'Yes — completely free with no limits. All compression runs in your browser; your photos are never uploaded to any server. No sign-up required.',
            },
          ].map(({ q, a }) => (
            <FAQItem key={q} question={q} answer={a} />
          ))}
        </div>
      </div>
    </section>
  )
}
