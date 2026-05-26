import Link from 'next/link'
import FAQItem from '@/components/tool/FAQItem'

export default function ResumeResizeContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to resizing resume and CV photos"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Resume Photo Sizes by Platform</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Resume and CV photo requirements vary by country, industry, and job portal. Most platforms
          accept a square or portrait JPEG between 200×200px and 400×400px. Here are the standard
          sizes for the most common use cases:
        </p>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-surface">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">
                  Platform / Use case
                </th>
                <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">
                  Recommended size
                </th>
                <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">
                  Max file size
                </th>
                <th className="text-left px-4 py-3 font-semibold text-text-main text-xs">Format</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-text-muted text-xs">
              {[
                {
                  platform: 'LinkedIn Profile',
                  size: '400×400px (1:1)',
                  limit: '8MB',
                  fmt: 'JPEG or PNG',
                },
                {
                  platform: 'Naukri (India)',
                  size: '200×200px (1:1)',
                  limit: '50KB',
                  fmt: 'JPEG',
                },
                {
                  platform: 'Indeed / Shine',
                  size: '200×200px to 400×400px',
                  limit: '2MB',
                  fmt: 'JPEG',
                },
                {
                  platform: 'European CV (Europass)',
                  size: '300×400px or 35×45mm equiv.',
                  limit: '5MB',
                  fmt: 'JPEG',
                },
                {
                  platform: 'Printed CV / Resume',
                  size: '150×200px at 300 DPI',
                  limit: 'N/A — embed in doc',
                  fmt: 'JPEG or PNG',
                },
                {
                  platform: 'Online application form',
                  size: '200×200px',
                  limit: '100KB–500KB',
                  fmt: 'JPEG',
                },
              ].map(({ platform, size, limit, fmt }) => (
                <tr key={platform}>
                  <td className="px-4 py-2.5 font-medium text-text-main">{platform}</td>
                  <td className="px-4 py-2.5">{size}</td>
                  <td className="px-4 py-2.5">{limit}</td>
                  <td className="px-4 py-2.5">{fmt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Should Your Resume Have a Photo?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              title: 'Countries where a photo is expected',
              points: [
                'India, Pakistan, Bangladesh — standard on most CVs',
                'Germany, France, Austria — common but not required since 2006',
                'South Korea, Japan, China — expected on most applications',
                'Middle East — typically required',
                'Spain, Italy, Portugal — common practice',
              ],
            },
            {
              title: 'Countries where a photo is not recommended',
              points: [
                'United States — strongly discouraged (anti-discrimination laws)',
                'United Kingdom — not recommended (Equality Act 2010)',
                'Canada and Australia — not standard practice',
                'Netherlands, Sweden — generally avoided',
                'Always check the job posting for specific guidance',
              ],
            },
          ].map(({ title, points }) => (
            <div key={title} className="rounded-xl border border-border bg-surface p-4">
              <p className="font-semibold text-text-main text-xs mb-2">{title}</p>
              <ul className="space-y-1">
                {points.map((p) => (
                  <li key={p} className="text-text-muted text-xs flex gap-1.5">
                    <span className="text-primary shrink-0">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-text-muted text-sm leading-relaxed">
          When in doubt, check the job posting. If it asks for a photo, add one. If it does not
          specify and you are applying in the US, UK, Canada, or Australia, leave it out.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          LinkedIn Profile Photo vs CV Photo — Different Rules
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          LinkedIn and a printed CV have very different requirements, even though both show your
          face. Here is what changes between the two:
        </p>
        <div className="space-y-2">
          {[
            {
              aspect: 'Size',
              linkedin: '400×400px or larger (square)',
              cv: '150×200px to 300×400px (portrait)',
            },
            {
              aspect: 'Crop',
              linkedin: 'Shoulders and head, close crop',
              cv: 'Full head and upper shoulders visible',
            },
            {
              aspect: 'Background',
              linkedin: 'Plain or subtle — blue, grey, white',
              cv: 'White or light grey',
            },
            {
              aspect: 'Expression',
              linkedin: 'Professional but approachable',
              cv: 'Neutral or slight smile',
            },
            {
              aspect: 'File size',
              linkedin: 'Up to 8MB — larger is fine',
              cv: 'Keep under 100KB when embedded in PDF',
            },
          ].map(({ aspect, linkedin, cv }) => (
            <div
              key={aspect}
              className="grid grid-cols-3 gap-2 text-xs rounded-xl border border-border bg-surface p-3"
            >
              <span className="font-semibold text-text-main">{aspect}</span>
              <span className="text-text-muted">{linkedin}</span>
              <span className="text-text-muted">{cv}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Resume Photo Requirements for Indian Job Portals
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Naukri, Shine, and Monster India are the most visited job portals in India. All three
          expect a professional headshot, and Naukri has strict file size limits. Here is what each
          requires:
        </p>
        <div className="space-y-2">
          {[
            {
              portal: 'Naukri',
              reqs: [
                'Max file size: 50KB — strictly enforced',
                'Dimensions: 200×200px recommended',
                'JPEG format only',
                'Plain white or light background',
                'Upload via profile → Edit Profile Photo',
              ],
            },
            {
              portal: 'Shine.com',
              reqs: [
                'Max file size: 2MB',
                'Dimensions: flexible — 200×200px to 400×400px',
                'JPEG or PNG accepted',
                'Professional headshot expected',
              ],
            },
            {
              portal: 'Monster India',
              reqs: [
                'Max file size: 2MB',
                'Minimum 100×100px, recommended 300×300px',
                'JPEG or PNG format',
              ],
            },
          ].map(({ portal, reqs }) => (
            <div key={portal} className="rounded-xl border border-border bg-surface p-4">
              <p className="font-semibold text-text-main text-sm mb-2">{portal}</p>
              <ul className="space-y-1">
                {reqs.map((r) => (
                  <li key={r} className="text-text-muted text-xs flex gap-1.5">
                    <span className="text-primary shrink-0">✓</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-text-muted text-sm leading-relaxed">
          For Naukri, use the Naukri / Portal preset (200×200px) and then compress the result to
          under 50KB using our compress tool. A 200×200px JPEG at quality 75 is typically 8–20KB —
          well within the limit.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Tips for a Professional Resume Photo</h2>
        <div className="space-y-2">
          {[
            {
              tip: 'Use a plain background',
              detail:
                'White, light grey, or a solid muted colour. Avoid busy backgrounds, outdoor shots, or blurred backgrounds that still show recognizable objects.',
            },
            {
              tip: 'Dress professionally for the industry',
              detail:
                'Business formal for finance, law, and corporate roles. Smart casual for tech and startups. The photo should reflect how you would dress for the interview.',
            },
            {
              tip: 'Use a recent photo',
              detail:
                'Taken within the last 12 months. Interviewers need to recognise you when you walk in — a 5-year-old photo creates an awkward first impression.',
            },
            {
              tip: 'Frame from the shoulders up',
              detail:
                'Your face should fill 60–80% of the frame. Too close looks cramped; too far away makes your face too small to read at thumbnail size.',
            },
            {
              tip: 'Keep file size small when embedding in a PDF',
              detail:
                'A CV PDF over 5MB can cause issues with email attachments and ATS systems. Compress your photo to under 100KB before embedding — 200×200px at quality 75 is typically 10–25KB.',
            },
          ].map(({ tip, detail }) => (
            <div key={tip} className="rounded-xl border border-border bg-surface p-3">
              <p className="font-semibold text-text-main text-xs">✓ {tip}</p>
              <p className="text-text-muted text-xs mt-0.5">{detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-border bg-surface p-4 space-y-2">
        <h2 className="font-semibold text-text-main">Your Photos Stay Private</h2>
        <p className="text-text-muted text-xs leading-relaxed">
          All resizing runs entirely in your browser. Your resume photos are never uploaded to any
          server — there is no upload step. Free with no limits, no watermarks, and no account
          required.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">More Free Tools for Resume Photos</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            {
              href: '/compress-image-to-50kb/',
              label: 'Compress to 50KB',
              desc: 'For Naukri and strict portals',
            },
            {
              href: '/compress-image-to-100kb/',
              label: 'Compress to 100KB',
              desc: 'For PDF embedding',
            },
            {
              href: '/resize-image-to-200kb/',
              label: 'Resize to 200KB',
              desc: 'For most job portals',
            },
            { href: '/crop-image/', label: 'Crop Image', desc: 'Square crop for LinkedIn' },
            {
              href: '/resize-image-for-linkedin/',
              label: 'Resize for LinkedIn',
              desc: '400×400px profile photo',
            },
            { href: '/resize-image/', label: 'Resize Image', desc: 'Custom pixel dimensions' },
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
          Frequently Asked Questions About Resume Photo Size
        </h2>
        <div className="space-y-2">
          {[
            {
              q: 'What size should a resume photo be?',
              a: 'For LinkedIn: 400×400px (square). For Naukri (India): 200×200px under 50KB. For most European CVs: 300×400px (3:4 ratio, similar to a passport photo). For a printed CV: 150×200px at 300 DPI when embedded in a Word or PDF document.',
            },
            {
              q: 'Should I put a photo on my resume?',
              a: 'It depends on the country. In India, Germany, France, South Korea, Japan, and the Middle East, a photo is expected. In the US, UK, Canada, and Australia, photos are discouraged or actively avoided due to anti-discrimination laws. Always check the job posting.',
            },
            {
              q: 'How do I make my Naukri profile photo under 50KB?',
              a: 'Resize to 200×200px using this tool, then compress using our Compress to 50KB tool. A 200×200px JPEG at quality 72 is typically 8–20KB — well under the 50KB Naukri limit.',
            },
            {
              q: 'What background should a resume photo have?',
              a: 'Plain white or light grey for most countries. Avoid busy backgrounds, outdoor photos, or blurred bokeh backgrounds — they look unprofessional at small sizes. A solid, neutral background keeps the focus on your face.',
            },
            {
              q: 'What aspect ratio should a CV photo be?',
              a: 'Square (1:1) for LinkedIn and Indian job portals. Portrait (3:4 or 2:3) for European CVs and printed resumes. Use the preset in the tool above that matches your use case.',
            },
            {
              q: 'How do I keep my CV PDF file size small with a photo?',
              a: 'Compress your photo to under 100KB before embedding it in Word or Google Docs. A 200×200px JPEG at quality 75 is typically 10–25KB. Embedding a large 2MB photo in a CV PDF can produce a 5–10MB file that email servers reject.',
            },
            {
              q: 'Is this resume photo resizer free?',
              a: 'Yes, completely free. No sign-up, no watermarks, no usage limits. All processing runs in your browser — your photos never leave your device.',
            },
          ].map(({ q, a }) => (
            <FAQItem key={q} question={q} answer={a} />
          ))}
        </div>
      </div>
    </section>
  )
}
