import Link from 'next/link'
import FAQItem from '@/components/tool/FAQItem'

export default function PassportPhotoContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Passport photo size guide and requirements"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Passport Photo Sizes by Country</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-text-muted border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 font-semibold text-text-main">Country</th>
                <th className="text-left py-2 pr-4 font-semibold text-text-main">Size</th>
                <th className="text-left py-2 pr-4 font-semibold text-text-main">
                  Pixels (300 DPI)
                </th>
                <th className="text-left py-2 font-semibold text-text-main">Background</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                {
                  country: '🇺🇸 US Passport / Visa',
                  size: '2×2 inch (51×51mm)',
                  px: '600×600px',
                  bg: 'White',
                },
                {
                  country: '🇬🇧 UK Passport',
                  size: '35×45mm',
                  px: '413×531px',
                  bg: 'Light grey or cream',
                },
                {
                  country: '🇪🇺 Schengen Visa (EU)',
                  size: '35×45mm',
                  px: '413×531px',
                  bg: 'White or light grey',
                },
                { country: '🇮🇳 India Passport', size: '35×45mm', px: '413×531px', bg: 'White' },
                {
                  country: '🇮🇳 India PAN / Aadhaar',
                  size: '25×35mm',
                  px: '295×413px',
                  bg: 'White',
                },
                { country: '🇨🇦 Canada Passport', size: '50×70mm', px: '591×827px', bg: 'White' },
                {
                  country: '🇦🇺 Australia Passport',
                  size: '35×45mm',
                  px: '413×531px',
                  bg: 'Plain light',
                },
                { country: '🇨🇳 China Visa', size: '33×48mm', px: '390×567px', bg: 'White' },
                { country: '🇯🇵 Japan Passport', size: '35×45mm', px: '413×531px', bg: 'Plain' },
                {
                  country: '🇻🇳 Vietnam Passport',
                  size: '40×60mm',
                  px: '472×708px',
                  bg: 'White or blue',
                },
              ].map(({ country, size, px, bg }) => (
                <tr key={country}>
                  <td className="py-2 pr-4 font-medium text-text-main">{country}</td>
                  <td className="py-2 pr-4">{size}</td>
                  <td className="py-2 pr-4">{px}</td>
                  <td className="py-2">{bg}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-text-muted text-sm leading-relaxed">
          35×45mm is the most common passport photo size globally — used in the UK, EU, India,
          Australia, Japan, and most of Asia. The US uses a unique 2×2 inch (51×51mm) square format.
          Always verify with the official requirements for your specific document and country.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Photo Requirements — What Officials Check
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              name: 'Background',
              detail:
                'Plain white or off-white background with no patterns, shadows, or objects. The background must be uniform — walls, doors, or bedsheets often create shadows that cause rejections.',
            },
            {
              name: 'Face position',
              detail:
                'Face must be centered and front-facing. Eyes open, looking directly at the camera. For US passports, the face must take up 70–80% of the frame.',
            },
            {
              name: 'Expression',
              detail:
                'Neutral expression with mouth closed. No smiling, squinting, or raised eyebrows. Some countries accept a slight natural expression.',
            },
            {
              name: 'Lighting',
              detail:
                'Even, shadow-free lighting across the face and background. Avoid flash reflections, harsh shadows under the nose or chin, or bright spots on the forehead.',
            },
            {
              name: 'Glasses',
              detail:
                'Most countries — including the US, UK, and Schengen — now require photos without glasses. India and some others still permit them with conditions.',
            },
            {
              name: 'Head coverings',
              detail:
                'Head coverings are not permitted unless worn for religious reasons, and must not obscure any part of the face. The full face from chin to forehead must be visible.',
            },
          ].map(({ name, detail }) => (
            <div key={name} className="rounded-xl border border-border bg-surface p-3 text-sm">
              <p className="font-semibold text-text-main text-xs">{name}</p>
              <p className="text-text-muted text-xs mt-0.5">{detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How to Take a Good Passport Photo at Home
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          A good passport photo does not require a professional studio. Natural window light —
          facing a window on an overcast day — is often better than flash. Stand against a white
          wall or hang a white sheet behind you. Hold the phone at eye level and 18–24 inches away
          so your face fills most of the frame.
        </p>
        <div className="space-y-2">
          {[
            'Face a window with natural daylight — avoids harsh shadows from flash',
            'Use a white or off-white plain wall as background — no patterns',
            'Hold the camera at eye level — looking down creates unflattering angles',
            'Take 5–10 photos and choose the sharpest one with the best lighting',
            'Remove glasses before shooting — most countries now require this',
            'Wear dark clothing so it contrasts clearly with the white background',
          ].map((tip) => (
            <div key={tip} className="flex gap-2 text-sm text-text-muted">
              <span className="text-primary shrink-0 mt-0.5">✓</span>
              <span>{tip}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">How to Print Your Passport Photo</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Download the JPG from this tool and take it to any photo print shop or pharmacy
          (Walgreens, CVS, Walmart in the US; Boots or Snappy Snaps in the UK; DM or Rossmann in
          Germany). Print at the native pixel size — do not rescale — and the dimensions will be
          exactly right.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          For a US 2×2 inch photo, request a 4×6 print and the shop can fit 4 passport photos on one
          sheet. For 35×45mm photos, request a standard print and confirm the shop will not rescale
          the image.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-text-muted border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 font-semibold text-text-main">Format</th>
                <th className="text-left py-2 pr-4 font-semibold text-text-main">Output size</th>
                <th className="text-left py-2 font-semibold text-text-main">
                  Photos per 4×6 sheet
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="py-2 pr-4 font-medium">US Passport (2×2 inch)</td>
                <td className="py-2 pr-4">600×600px</td>
                <td className="py-2">4 photos</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">35×45mm (UK/EU/India)</td>
                <td className="py-2 pr-4">413×531px</td>
                <td className="py-2">6 photos</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">Canada (50×70mm)</td>
                <td className="py-2 pr-4">591×827px</td>
                <td className="py-2">2 photos</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Digital Passport Photo Uploads</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Many passport and visa applications now accept digital photo uploads. For online portals
          (DS-160 US visa, UK Government Gateway, India Passport Seva, Schengen e-visa), the
          uploaded JPEG must meet specific file size limits — typically 10KB to 240KB.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          The JPG this tool produces is typically 60–180KB depending on photo complexity — within
          the accepted range for all major government portals. If the portal requires under 50KB,
          use{' '}
          <Link href="/resize-image-to-50kb/" className="text-primary hover:underline">
            Resize to 50KB
          </Link>{' '}
          after downloading your passport photo.
        </p>
      </div>

      <div className="rounded-xl border border-border bg-surface p-4 text-sm space-y-2">
        <h2 className="font-semibold text-text-main">Your Photos Never Leave Your Device</h2>
        <p className="text-text-muted text-xs leading-relaxed">
          All processing runs in your browser using the Canvas API. Your photo is cropped and
          resized locally — nothing is uploaded to any server. The output JPG is generated and
          downloaded directly to your device. Free, no sign-up, no watermark.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">More Free Image Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            {
              href: '/compress-image/',
              label: 'Compress Image',
              desc: 'Reduce file size up to 90%',
            },
            {
              href: '/resize-image-to-50kb/',
              label: 'Resize to 50KB',
              desc: 'For passport portals',
            },
            {
              href: '/resize-image-to-20kb/',
              label: 'Resize to 20KB',
              desc: 'SSC / IBPS signature size',
            },
            { href: '/crop-image/', label: 'Crop Image', desc: 'Custom crop any photo' },
            { href: '/heic-to-jpg/', label: 'HEIC to JPG', desc: 'Convert iPhone photos' },
            {
              href: '/compress-image-for-passport/',
              label: 'Compress for Passport',
              desc: 'Under 240KB for DS-160',
            },
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
          Frequently Asked Questions About Passport Photos
        </h2>
        <div className="space-y-2">
          {[
            {
              q: 'Will this passport photo be accepted?',
              a: 'This tool produces photos at the correct dimensions and 300 DPI for each country preset. Your photo must also meet requirements for expression (neutral), lighting (even, shadow-free), and background (plain white). Check the official requirements for your country before submitting.',
            },
            {
              q: 'What is the US passport photo size?',
              a: 'US passport photos must be exactly 2×2 inches (51×51mm). At 300 DPI, this is 600×600 pixels. The face must fill 70–80% of the frame. The background must be plain white.',
            },
            {
              q: 'What is the passport photo size for UK, India, and Europe?',
              a: '35×45mm — this is the most common passport photo size globally. At 300 DPI, this is 413×531 pixels. Used for UK passports, Schengen visas, Indian passports, Australia, Japan, and most countries outside North America.',
            },
            {
              q: 'Can I use a selfie for a passport photo?',
              a: 'You can upload a selfie taken with a smartphone, but it must meet requirements: plain white background, front-facing, good lighting, no shadows on the face or background, and no glasses. A selfie against a textured wall or with visible furniture in the background will likely be rejected.',
            },
            {
              q: 'How do I make my passport photo under 50KB for a government portal?',
              a: 'Download your passport photo from this tool, then use the Resize to 50KB tool on this site. It will automatically compress the JPEG while preserving image quality to fit within the 50KB limit used by portals like India Passport Seva and DS-160.',
            },
            {
              q: 'What DPI should a passport photo be?',
              a: '300 DPI is the standard for print-quality passport photos. This tool outputs all photos at 300 DPI. For digital-only submissions, the portal checks pixel dimensions rather than DPI — the pixel sizes output by this tool are correct for all major portals.',
            },
            {
              q: 'Can I use this for Aadhaar, PAN, or OCI photos?',
              a: 'Yes. Select "India PAN / Aadhaar" for the 25×35mm format used by PAN card and Aadhaar applications. For OCI, select "India Passport" (35×45mm) or "US Passport" (51×51mm) depending on whether you are applying through an Indian or overseas mission.',
            },
            {
              q: 'Is this passport photo maker free?',
              a: 'Yes — completely free with no limits, no watermark, and no sign-up. All processing runs in your browser. Your photo is never uploaded to any server.',
            },
          ].map(({ q, a }) => (
            <FAQItem key={q} question={q} answer={a} />
          ))}
        </div>
      </div>
    </section>
  )
}
