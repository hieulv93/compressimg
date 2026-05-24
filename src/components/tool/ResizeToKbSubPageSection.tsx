import Link from 'next/link'
import FAQItem from './FAQItem'

interface UseCaseData {
  title: string
  intro: string
  useCases: { portal: string; requirement: string }[]
  tip: string
}

function getUseCaseData(targetKb: number): UseCaseData {
  if (targetKb === 30) {
    return {
      title: 'Who Needs Images Under 30KB?',
      intro:
        'A 30KB limit is the standard for government exam signature uploads across SSC, IBPS, UPSC, and railway recruitment portals in India. Signature images must be small, clean, and within strict byte limits for form submission to succeed.',
      useCases: [
        { portal: 'SSC CGL / CHSL / MTS', requirement: 'Signature: 10–30KB, 140×60px JPEG' },
        { portal: 'UPSC Civil Services', requirement: 'Signature: 20–30KB, 140×60px' },
        { portal: 'IBPS PO / Clerk / SO', requirement: 'Signature: 10–30KB, 140×60px' },
        { portal: 'RRB (Railway Recruitment)', requirement: 'Signature: 10–30KB' },
        { portal: 'NEET UG (NTA portal)', requirement: 'Signature: 10–30KB' },
        { portal: 'State PSC portals', requirement: 'Signature: typically 10–30KB' },
      ],
      tip: 'For signature scans: use a white background, sign with a black or dark pen, crop tightly to the signature boundaries, and resize to 140×60px. A clean signature image at these dimensions typically lands at 5–15KB — well under 30KB.',
    }
  }
  if (targetKb === 20) {
    return {
      title: 'Who Needs Images Under 20KB?',
      intro:
        'A 20KB limit is common for signature images and small government form uploads. Most applications that require your signature as an image file — rather than a scanned document — set limits in the 10–20KB range to keep form data lightweight.',
      useCases: [
        { portal: 'SSC CGL / CHSL / MTS', requirement: 'Signature: 10–20KB, 140×60px' },
        { portal: 'UPSC Civil Services', requirement: 'Signature: 20KB, 140×60px' },
        { portal: 'IBPS PO / Clerk', requirement: 'Signature: 20KB, 140×60px' },
        { portal: 'RRB (Railway Recruitment)', requirement: 'Signature: 10–20KB' },
        { portal: 'State PSC portals', requirement: 'Signature: 10–20KB' },
        { portal: 'Aadhaar enrollment', requirement: 'Signature scans: under 20KB' },
      ],
      tip: 'For signatures: scan or photograph on white paper, crop tightly to the signature, then resize to 140×60px before uploading. Clean background (no shadows) helps reach 20KB easily.',
    }
  }
  if (targetKb === 50) {
    return {
      title: 'Who Needs Images Under 50KB?',
      intro:
        'A 50KB limit is the most common threshold for exam application photos in India and for passport portal photo uploads internationally. Most smartphones produce photos of 2–5MB, which is 40–100× over the limit — making automatic resizing essential.',
      useCases: [
        { portal: 'US Passport Application (DS-160)', requirement: 'Under 240KB (50KB is safe)' },
        { portal: 'NEET UG', requirement: 'Photo: 10–200KB (50KB recommended)' },
        { portal: 'JEE Main', requirement: 'Photo: 10–100KB' },
        { portal: 'SSC CGL / CHSL', requirement: 'Photo: 20–50KB' },
        { portal: 'UPSC Civil Services', requirement: 'Photo: 40KB max' },
        { portal: 'IBPS Bank exams', requirement: 'Photo: 50KB max' },
        { portal: 'India Post GDS', requirement: 'Photo: 50KB max' },
      ],
      tip: 'For passport photos: the US State Department requires JPEG under 240KB, but uploading under 50KB ensures compatibility with most portal validators that are stricter than the official spec.',
    }
  }
  if (targetKb === 100) {
    return {
      title: 'Who Needs Images Under 100KB?',
      intro:
        'A 100KB limit is the standard for resume photos on Indian job portals, many government recruitment sites, and professional profile uploads. Most phone cameras produce 2–5MB photos — 20–50× over this limit.',
      useCases: [
        { portal: 'Naukri.com', requirement: 'Profile photo: under 100KB' },
        { portal: 'IBPS SO (Specialist Officer)', requirement: 'Photo: under 100KB' },
        { portal: 'GATE application', requirement: 'Photo: 5–100KB' },
        { portal: 'UPSC IAS (some forms)', requirement: 'Under 100KB' },
        { portal: 'State government recruitment', requirement: 'Photo: 20–100KB' },
        { portal: 'NDA / CDS application', requirement: 'Photo: under 100KB' },
        { portal: 'University admissions portals', requirement: '20–100KB typical' },
      ],
      tip: 'For resume photos: a 600×600px JPEG at quality 70 typically lands at 30–70KB — well under 100KB. If you start with an iPhone portrait (4032×3024px), the tool handles the full resize + compress automatically.',
    }
  }
  if (targetKb === 200) {
    return {
      title: 'Who Needs Images Under 200KB?',
      intro:
        'A 200KB limit is common for document scans, Aadhaar/PAN card images, visa application documents, and higher-quality ID photos. This size allows for larger dimensions while still keeping forms manageable.',
      useCases: [
        { portal: 'Aadhaar update portal (UIDAI)', requirement: 'Documents: under 200KB' },
        { portal: 'PAN card application', requirement: 'Documents: under 200KB' },
        { portal: 'DigiLocker documents', requirement: 'Up to 200KB each' },
        { portal: 'Australia eVisitor / ETA', requirement: 'Passport scan: under 500KB' },
        { portal: 'Canada eTA', requirement: 'Photo: under 4MB (200KB is safe)' },
        { portal: 'Schengen visa application', requirement: 'Photo: under 500KB' },
        { portal: 'Bank KYC document', requirement: 'Under 200KB typical' },
      ],
      tip: 'For document scans: scan at 150–200 DPI (not 600 DPI), crop to the document edges, and save as JPEG. Most scans at 1024px wide land at 100–180KB — within the 200KB limit without further reduction.',
    }
  }
  if (targetKb === 150) {
    return {
      title: 'Who Needs Images Under 150KB?',
      intro:
        'A 150KB limit covers the majority of Indian college admission portals, entrance exam applications, and government recruitment photo requirements. It balances good image quality with the file size constraints of high-traffic government and educational portals.',
      useCases: [
        { portal: 'NEET UG (NTA portal)', requirement: 'Photo: 10–200KB, JPEG' },
        { portal: 'JEE Main (NTA portal)', requirement: 'Photo: 10–200KB, JPEG' },
        { portal: 'DU (Delhi University) admission', requirement: 'Photo: up to 200KB' },
        { portal: 'CUET UG application', requirement: 'Photo: 10–200KB, JPEG' },
        { portal: 'National Scholarship Portal (NSP)', requirement: 'Photo: under 200KB' },
        { portal: 'State-level CET portals', requirement: 'Photo: 20–200KB typical' },
      ],
      tip: 'For exam photos: use a plain white or light blue background, face forward, no glasses. A 300×400px JPEG at quality 75 typically produces 30–80KB — well under 150KB while meeting most minimum dimension requirements.',
    }
  }
  if (targetKb === 300) {
    return {
      title: 'Who Needs Images Under 300KB?',
      intro:
        'A 300KB limit allows for higher-quality images suitable for professional profiles, blog content, visa applications, and website uploads. It is larger than exam portal requirements but still small enough for fast loading on web pages.',
      useCases: [
        {
          portal: 'LinkedIn profile photo',
          requirement: '300×300px JPEG, under 8MB (300KB optimal)',
        },
        { portal: 'Schengen visa (EU embassies)', requirement: 'Digital photo: under 500KB' },
        { portal: 'Australia ETA / eVisitor', requirement: 'Passport scan: under 500KB' },
        { portal: 'WordPress blog images', requirement: '100–400KB recommended for speed' },
        { portal: 'Email newsletter images', requirement: 'Under 500KB per image' },
        { portal: 'Company career portals', requirement: 'Profile photo: under 500KB typical' },
      ],
      tip: 'For LinkedIn: upload a 400×400px or 800×800px JPEG at quality 85. This produces 150–280KB — sharp on high-DPI screens and well under 300KB. LinkedIn recompresses on upload, so higher quality input = better output.',
    }
  }
  // 500KB
  return {
    title: 'Who Needs Images Under 500KB?',
    intro:
      'A 500KB limit allows for larger, higher-quality images — common for blog posts, email newsletters, online store previews, and some visa and passport portal uploads. You get more flexibility with quality and dimensions than lower KB limits.',
    useCases: [
      { portal: 'WordPress featured images', requirement: '100–500KB recommended for speed' },
      { portal: 'Shopify product previews', requirement: 'Under 20MB (500KB optimal for speed)' },
      { portal: 'Email newsletters (Mailchimp, etc.)', requirement: 'Under 500KB per image' },
      { portal: 'Schengen visa (EU)', requirement: 'Photo: under 500KB' },
      { portal: 'Australia ETA / eVisitor', requirement: 'Passport scan: under 500KB' },
      { portal: 'Vietnam e-Visa', requirement: 'Photo: 2MB (500KB is safe)' },
      { portal: 'LinkedIn background photo', requirement: 'Under 8MB (500KB for fast load)' },
    ],
    tip: 'For blog images: 1280×720px JPEG at quality 80 typically produces 150–350KB — high enough quality for retina screens, well within 500KB, and fast enough to not hurt Core Web Vitals.',
  }
}

const RELATED_SIZES: { kb: number; href: string }[] = [
  { kb: 20, href: '/resize-image-to-20kb/' },
  { kb: 30, href: '/resize-image-to-30kb/' },
  { kb: 50, href: '/resize-image-to-50kb/' },
  { kb: 100, href: '/resize-image-to-100kb/' },
  { kb: 150, href: '/resize-image-to-150kb/' },
  { kb: 200, href: '/resize-image-to-200kb/' },
  { kb: 300, href: '/resize-image-to-300kb/' },
  { kb: 500, href: '/resize-image-to-500kb/' },
]

function presetLabel(kb: number) {
  return kb >= 1024 ? `${kb / 1024}MB` : `${kb}KB`
}

export default function ResizeToKbSubPageSection({ targetKb }: { targetKb: number }) {
  const data = getUseCaseData(targetKb)
  const related = RELATED_SIZES.filter((s) => s.kb !== targetKb)

  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label={`Guide to resizing images to ${targetKb}KB`}
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">{data.title}</h2>
        <p className="text-text-muted text-sm leading-relaxed">{data.intro}</p>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-surface">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">
                  Portal / Form
                </th>
                <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">
                  Size requirement
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-text-muted text-xs">
              {data.useCases.map(({ portal, requirement }) => (
                <tr key={portal}>
                  <td className="px-4 py-3 font-medium text-text-main">{portal}</td>
                  <td className="px-4 py-3">{requirement}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted italic">{data.tip}</p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-text-main">
          How to Resize Image to {presetLabel(targetKb)} — 3 Steps
        </h2>
        <ol className="space-y-3">
          {[
            {
              step: '1',
              title: `Target is set to ${presetLabel(targetKb)}`,
              body: `The tool is pre-set to ${presetLabel(targetKb)}. You can change the target at any time using the preset buttons or by typing a custom value.`,
            },
            {
              step: '2',
              title: 'Upload your image',
              body: 'Click the upload area or drag and drop your JPG, PNG, WebP, or HEIC file. The tool starts processing immediately — no extra buttons to click. HEIC photos from iPhone are automatically converted.',
            },
            {
              step: '3',
              title: 'Download and use',
              body: `When the result shows "Under ${presetLabel(targetKb)} target ✓", the file is ready to upload to your portal, form, or application. Download the JPEG and attach it directly.`,
            },
          ].map(({ step, title, body }) => (
            <li key={step} className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                {step}
              </span>
              <div>
                <p className="text-sm font-semibold text-text-main">{title}</p>
                <p className="text-sm text-text-muted leading-relaxed">{body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="bg-surface border border-border rounded-xl p-5 space-y-2">
        <h2 className="text-base font-bold text-text-main">
          Privacy — Your Files Never Leave Your Device
        </h2>
        <p className="text-sm text-text-muted leading-relaxed">
          All resizing happens 100% in your browser. No image is ever uploaded to any server.
          Government IDs, passport photos, and application documents are sensitive — this tool never
          touches a server.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Other Target Sizes</h2>
        <div className="flex gap-2 flex-wrap">
          {related.map(({ kb, href }) => (
            <Link
              key={kb}
              href={href}
              className="text-sm px-4 py-2 rounded-xl border border-border text-text-muted hover:border-primary hover:text-primary transition-colors duration-150"
            >
              Resize to {presetLabel(kb)}
            </Link>
          ))}
          <Link
            href="/resize-image-in-kb/"
            className="text-sm px-4 py-2 rounded-xl border border-primary text-primary hover:bg-primary/5 transition-colors duration-150"
          >
            All sizes →
          </Link>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-text-main">More Free Image Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            {
              href: '/resize-image-in-kb/',
              label: 'Resize Image in KB',
              desc: 'Set any KB target',
            },
            { href: '/resize-image/', label: 'Resize by Pixels', desc: 'Set exact width & height' },
            { href: '/resize-images/', label: 'Batch Resize', desc: 'Resize 10 images at once' },
            { href: '/compress-image/', label: 'Compress Image', desc: 'Manual quality slider' },
            { href: '/heic-to-jpg/', label: 'HEIC to JPG', desc: 'Convert iPhone photos' },
            {
              href: '/compress-image-for-passport/',
              label: 'Passport Compressor',
              desc: 'US passport under 240KB',
            },
          ].map(({ href, label, desc }) => (
            <Link
              key={href}
              href={href}
              className="bg-surface border border-border rounded-xl p-3 hover:border-primary transition-colors duration-150 group"
            >
              <p className="text-sm font-semibold text-text-main group-hover:text-primary transition-colors">
                {label}
              </p>
              <p className="text-xs text-text-muted mt-0.5">{desc}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Frequently Asked Questions</h2>
        <dl className="space-y-2">
          {[
            {
              question: `How do I resize an image to under ${presetLabel(targetKb)}?`,
              answer: `Set the target to ${presetLabel(targetKb)} (the default on this page), upload your image, and the tool automatically finds the right combination of quality and dimensions to get under ${presetLabel(targetKb)}. The result shows the exact output size and a green checkmark when the target is met.`,
            },
            {
              question: `Will the output be exactly ${presetLabel(targetKb)}?`,
              answer: `The output is guaranteed to be at or below ${presetLabel(targetKb)}. The exact size depends on image content — you may get 38KB for a 50KB target, or 96KB for a 100KB target. Any file under the limit will pass portal validation.`,
            },
            {
              question: 'Does this work for government portal photo uploads?',
              answer: `Yes. This tool is designed specifically for government exam portals, visa applications, and job sites that set strict KB limits. The output is a standard JPEG file — the format accepted by all major portals.`,
            },
            {
              question: 'Can I resize a HEIC photo from my iPhone?',
              answer:
                'Yes. Upload HEIC files directly — they are automatically converted to JPEG before resizing. No separate conversion step needed.',
            },
            {
              question: 'What if the tool cannot reach my target size?',
              answer: `If the image cannot be reduced below ${presetLabel(targetKb)} even at minimum quality (very rare, typically only for very small targets under 10KB), the tool shows a warning and outputs the smallest possible file. For very small targets, try cropping the image first.`,
            },
            {
              question: 'Are my images uploaded to a server?',
              answer:
                'No. All processing runs 100% in your browser. Your files never leave your device and are never stored on any server.',
            },
          ].map(({ question, answer }) => (
            <FAQItem key={question} question={question} answer={answer} />
          ))}
        </dl>
      </div>
    </section>
  )
}
