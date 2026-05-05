import Link from 'next/link'
import FAQItem from '@/components/tool/FAQItem'

export default function AvifToJpgContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to converting AVIF to JPG"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">What Is AVIF and Why Convert to JPG?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          AVIF (AV1 Image File Format) is one of the newest and most efficient image formats
          available. It is based on the AV1 video codec developed by the Alliance for Open Media,
          and achieves approximately 50% smaller file sizes than JPEG at equivalent visual quality.
          Google, Netflix, and major CDN providers have adopted AVIF for web image delivery because
          of its superior compression efficiency.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          Despite its advantages, AVIF is not yet universally supported. Older software, email
          clients, Windows Explorer thumbnails (before Windows 11), legacy mobile apps, and many
          enterprise tools still do not open AVIF files natively. Converting AVIF to JPG produces a
          universally compatible file that opens in every image viewer, email client, and photo
          editor without additional plugins.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">AVIF Browser Support</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          This converter uses your browser&apos;s native AVIF decoding engine. The table below shows
          which browsers support AVIF for both viewing and converting.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-surface">
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  Browser
                </th>
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  AVIF support
                </th>
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  Since version
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Chrome', 'Full support', '85 (Aug 2020)'],
                ['Firefox', 'Full support', '93 (Oct 2021)'],
                ['Safari (macOS)', 'Full support', '16 (Sep 2022)'],
                ['Safari (iOS)', 'Full support', 'iOS 16 (Sep 2022)'],
                ['Edge', 'Full support', '121 (Jan 2024)'],
                ['Internet Explorer', 'No support', 'Never'],
                ['Samsung Internet', 'Full support', '14 (2021)'],
              ].map(([browser, support, since]) => (
                <tr key={browser} className="border-t border-border">
                  <td className="p-3 border border-border font-medium text-text-main">{browser}</td>
                  <td className="p-3 border border-border text-text-muted">{support}</td>
                  <td className="p-3 border border-border text-text-muted">{since}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-text-muted text-sm leading-relaxed">
          If this converter shows an error, your browser does not support AVIF. Update Chrome,
          Firefox, or Safari to the latest version, or use a desktop browser on a modern OS.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Why AVIF Files Need Converting</h2>
        <div className="space-y-3">
          {[
            {
              title: 'Email attachments',
              desc: 'Outlook, Gmail, Apple Mail, and most email clients do not render AVIF files inline. Recipients see a file attachment instead of an image preview. Converting to JPG ensures the image displays inline in the email body, which is the expected behavior for photos and screenshots.',
            },
            {
              title: 'Windows compatibility',
              desc: 'Windows 10 does not display AVIF thumbnails in File Explorer or Photos app without the AV1 Video Extension from the Microsoft Store. Windows 11 adds AVIF support, but many corporate environments still run Windows 10 with restricted store access. Converting to JPG ensures the image opens immediately on any Windows version.',
            },
            {
              title: 'Legacy software and tools',
              desc: 'Adobe Lightroom Classic, older versions of Photoshop, image editing software, and medical or scientific imaging tools typically do not support AVIF. Converting to JPG makes the file compatible with any image editing or processing tool without format workarounds.',
            },
            {
              title: 'Web platform uploads',
              desc: 'Some web platforms, CMS systems, and file upload portals explicitly require JPEG or PNG and reject AVIF. Converting to JPG removes the compatibility barrier while retaining visual quality. The JPG output at quality 92 from this tool is suitable for any web platform that accepts JPEG.',
            },
          ].map(({ title, desc }) => (
            <div key={title} className="border border-border rounded-xl p-4 space-y-1">
              <p className="text-sm font-semibold text-text-main">{title}</p>
              <p className="text-sm text-text-muted leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">AVIF vs JPG: File Size Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-surface">
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  Image type
                </th>
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  AVIF size
                </th>
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  JPG at Q92 size
                </th>
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  Increase
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Smartphone photo (12MP)', '500KB–1MB', '2–4MB', '~3–5×'],
                ['Product photo on white', '200–400KB', '500KB–1.5MB', '~3–4×'],
                ['Landscape / nature', '300–700KB', '1–3MB', '~3–4×'],
                ['Screenshot (1080p)', '100–300KB', '200–600KB', '~2–3×'],
                ['Portrait / headshot', '150–400KB', '400KB–1.2MB', '~3×'],
              ].map(([type, avif, jpg, increase]) => (
                <tr key={type} className="border-t border-border">
                  <td className="p-3 border border-border font-medium text-text-main">{type}</td>
                  <td className="p-3 border border-border text-text-muted">{avif}</td>
                  <td className="p-3 border border-border text-text-muted">{jpg}</td>
                  <td className="p-3 border border-border text-text-muted">{increase}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-text-muted text-sm leading-relaxed">
          AVIF has better compression than JPEG, so converting AVIF to JPG will produce a larger
          file. If you need to reduce the JPG size further, use the{' '}
          <Link href="/compress-image" className="text-primary hover:underline font-medium">
            Compress Image tool
          </Link>{' '}
          after converting.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Other Format Converters</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              href: '/tiff-to-jpg',
              label: 'TIFF to JPG',
              desc: 'Convert large professional TIFF files to JPEG',
            },
            {
              href: '/bmp-to-jpg',
              label: 'BMP to JPG',
              desc: 'Convert Windows bitmap files to JPEG',
            },
            {
              href: '/heic-to-jpg',
              label: 'HEIC to JPG',
              desc: 'Convert iPhone HEIC photos to JPEG',
            },
            {
              href: '/webp-to-jpg',
              label: 'WebP to JPG',
              desc: 'Convert WebP images to JPEG',
            },
            {
              href: '/png-to-jpg',
              label: 'PNG to JPG',
              desc: 'Convert PNG to smaller JPEG files',
            },
            {
              href: '/compress-image',
              label: 'Compress Image',
              desc: 'Reduce any image file size with quality slider',
            },
          ].map(({ href, label, desc }) => (
            <Link
              key={href}
              href={href}
              className="block rounded-xl border border-border p-3 hover:border-primary transition-colors group"
            >
              <p className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors">
                {label}
              </p>
              <p className="text-xs text-text-muted mt-0.5">{desc}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-text-main">Frequently Asked Questions</h2>
        <div className="divide-y divide-border">
          {[
            {
              q: 'Will the JPG be larger than the original AVIF?',
              a: 'Yes — AVIF has more efficient compression than JPEG. A 500KB AVIF file will typically convert to 1.5–3MB as JPG at quality 92. AVIF achieves smaller files by using more advanced compression that JPEG cannot match. If you need a smaller JPG, use the Compress Image tool after converting to reduce the file size further.',
            },
            {
              q: 'Why does my browser show an error when uploading an AVIF file?',
              a: 'This converter requires a browser that supports AVIF natively: Chrome 85+, Firefox 93+, or Safari 16+. If you see a conversion error, update your browser to the latest version. Internet Explorer and older browsers do not support AVIF at all.',
            },
            {
              q: 'Does converting AVIF to JPG reduce visible quality?',
              a: 'At quality 92, the JPG output is visually identical to the AVIF for normal screen viewing. AVIF may have slight advantages at very aggressive compression settings, but at quality 92 JPEG, both formats look the same. The only difference visible to human eyes under these conditions is file size.',
            },
            {
              q: 'What happens to transparency in AVIF when converting to JPG?',
              a: 'AVIF supports transparency (alpha channel). When converting to JPG, this tool fills transparent areas with white, since JPEG does not support transparency. If you need to preserve transparency, convert to PNG instead.',
            },
            {
              q: 'What created my AVIF file?',
              a: 'AVIF files are most commonly downloaded from web browsers (Chrome and Firefox can save images as AVIF when the website serves them in that format), exported from modern image tools like Squoosh or GIMP with AVIF plugin, or created by web services that generate optimized images. Some stock photo services and CDN-delivered images are now served as AVIF.',
            },
            {
              q: 'Are my AVIF files safe to convert here?',
              a: 'Yes. All conversion happens entirely in your browser — no file is ever sent to a server. Your AVIF files stay on your device throughout the entire process.',
            },
          ].map(({ q, a }) => (
            <FAQItem key={q} question={q} answer={a} />
          ))}
        </div>
      </div>
    </section>
  )
}
