import Link from 'next/link'
import FAQItem from './FAQItem'

export default function GifToPngContentSection() {
  return (
    <div className="space-y-8 text-sm leading-relaxed text-text-muted border-t border-border pt-8">
      <section className="space-y-3">
        <h2 className="text-base font-bold text-text-main">Why Convert GIF to PNG?</h2>
        <p>
          GIF was designed in 1987 for simple web graphics and animation. Its major technical
          limitation is the 256-color palette — only 256 distinct colors can appear in a single GIF
          frame. For photographs, gradients, and detailed artwork, this produces visible color
          banding, dithering artifacts, and a grainy appearance that is impossible to fix without
          converting to a better format.
        </p>
        <p>
          PNG (Portable Network Graphics) was created specifically to replace GIF for static images.
          PNG supports 24-bit true color — up to 16.7 million colors — and uses lossless compression
          that preserves every pixel exactly. Converting GIF to PNG removes the color restriction
          entirely, producing a visually accurate, high-quality image that opens on every platform.
        </p>
        <p>
          PNG also supports full alpha transparency (0–255 opacity per pixel), which is a major
          upgrade from GIF&apos;s binary transparency (a pixel is either fully transparent or fully
          opaque). When transparency matters — for logos, icons, and overlays — PNG is the correct
          format.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-text-main">What Happens to the GIF Animation?</h2>
        <p>
          PNG is a static image format and cannot store animation. When you convert a GIF to PNG,
          this tool extracts the first frame and produces a static PNG image. The remaining
          animation frames are not included in the output.
        </p>
        <p>
          For static GIFs (single-frame images), the output PNG represents the entire image
          perfectly. For animated GIFs, you receive the first frame as a still PNG.
        </p>
        <p>
          If you need to preserve the animation, consider converting the GIF to a video format (MP4
          or WebM) using a dedicated video converter. MP4 and WebM are far more efficient than GIF
          for animation and are supported by all modern browsers.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-text-main">GIF vs PNG — Format Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-surface">
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  Property
                </th>
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  GIF
                </th>
                <th className="text-left p-3 border border-border font-semibold text-text-main">
                  PNG
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Colors', '256 max per frame', '16.7 million (24-bit)'],
                ['Animation', 'Yes (multiple frames)', 'No (static only)'],
                ['Transparency', 'Binary (on/off)', 'Full alpha (0–255 per pixel)'],
                ['Compression', 'Lossless (LZW)', 'Lossless (DEFLATE)'],
                ['Best for', 'Simple graphics, animation', 'Graphics, logos, screenshots'],
                ['Quality', 'Limited by 256-color palette', 'Perfect — every pixel preserved'],
                ['Browser support', 'Universal', 'Universal'],
              ].map(([prop, gif, png]) => (
                <tr key={prop} className="border-t border-border">
                  <td className="p-3 border border-border font-medium text-text-main">{prop}</td>
                  <td className="p-3 border border-border">{gif}</td>
                  <td className="p-3 border border-border">{png}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-text-main">Common Use Cases for GIF to PNG</h2>
        <ul className="space-y-2 list-disc list-inside">
          <li>
            <strong className="text-text-main">Logos and icons saved as GIF</strong> — Older
            websites often stored logos as GIF. Converting to PNG removes the 256-color limit and
            enables full alpha transparency, making the logo look crisp on any background color
            without a white box around it.
          </li>
          <li>
            <strong className="text-text-main">Screenshots with text</strong> — Screenshots saved as
            GIF often show dithering artifacts around text. PNG renders text with pixel-perfect
            sharpness, making it the preferred format for screenshots, tutorials, and UI
            documentation.
          </li>
          <li>
            <strong className="text-text-main">Editing in Photoshop or Figma</strong> — Design tools
            handle PNG better than GIF. Converting to PNG before editing in Photoshop, GIMP, or
            Figma prevents color degradation and gives you a proper starting point for further work.
          </li>
          <li>
            <strong className="text-text-main">App and web development</strong> — PNG is the
            standard for web UI assets, icons, and sprites. Converting legacy GIF assets to PNG
            ensures compatibility with modern development workflows and design systems.
          </li>
          <li>
            <strong className="text-text-main">Images with transparency</strong> — If your GIF uses
            transparency (common for logos and overlays), converting to PNG preserves the
            transparency correctly and upgrades it from binary (on/off) to full alpha.
          </li>
          <li>
            <strong className="text-text-main">Platform requirements</strong> — Some platforms, CMS
            systems, and upload forms explicitly require PNG. Converting your GIF ensures
            compatibility.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-text-main">How GIF to PNG Conversion Works</h2>
        <p>
          This tool converts GIF to PNG entirely in your browser using the HTML5 Canvas API. The GIF
          is loaded into a browser image element, the first frame is drawn onto an off-screen canvas
          at full resolution, and the canvas is exported as a lossless PNG. No file is ever sent to
          a server.
        </p>
        <p>
          Because PNG uses lossless compression, there is no quality slider — the output is always
          the best possible quality. The PNG output has the same pixel dimensions as the original
          GIF. For GIFs with transparent areas, the Canvas API preserves the transparency in the PNG
          alpha channel.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-text-main">File Size: GIF vs PNG</h2>
        <p>PNG file size relative to GIF depends on the image content:</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Simple flat-color GIF</p>
            <p className="text-xs text-text-muted">
              GIF: ~5&ndash;30KB &rarr; PNG: ~5&ndash;40KB. Similar size — both compress flat colors
              efficiently. GIF may be smaller here.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Photo-based GIF</p>
            <p className="text-xs text-text-muted">
              GIF: ~100&ndash;500KB &rarr; PNG: ~50&ndash;300KB. PNG is often smaller for
              photographic content since it handles gradients better.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Logo / icon GIF</p>
            <p className="text-xs text-text-muted">
              GIF: ~5&ndash;20KB &rarr; PNG: ~5&ndash;25KB. Very similar size — PNG adds full alpha,
              which is worth the minor size increase.
            </p>
          </div>
        </div>
        <p>
          If the PNG file size is too large for your use case, consider{' '}
          <Link href="/gif-to-jpg" className="text-primary hover:underline">
            converting to JPG instead
          </Link>{' '}
          for a much smaller file size. Or{' '}
          <Link href="/compress-image" className="text-primary hover:underline">
            compress the PNG
          </Link>{' '}
          after conversion to reduce its size without visible quality loss.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-text-main">GIF to PNG vs GIF to JPG</h2>
        <ul className="space-y-2 list-disc list-inside">
          <li>
            <strong className="text-text-main">Choose PNG</strong> when quality is the priority —
            for logos, icons, screenshots, images with text, design assets, and any image where
            transparency needs to be preserved.
          </li>
          <li>
            <strong className="text-text-main">
              Choose{' '}
              <Link href="/gif-to-jpg" className="text-primary hover:underline">
                JPG
              </Link>
            </strong>{' '}
            when file size is the priority — for photographs, social media, email attachments, and
            web publishing where the smallest possible file is needed.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-base font-bold text-text-main">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <FAQItem
            question="Why convert GIF to PNG?"
            answer="GIF is limited to 256 colors, producing visible banding and poor quality for photographs and complex images. PNG supports 16.7 million colors, uses lossless compression, and supports full alpha transparency. Converting GIF to PNG removes the color restriction and gives you a higher-quality, more versatile image."
          />
          <FAQItem
            question="What happens to the GIF animation when converting to PNG?"
            answer="PNG is a static format. This tool extracts the first frame of the GIF and produces a still PNG image. The animation data is not preserved. If you need to keep the animation, use a video converter to export the GIF as MP4 or WebM."
          />
          <FAQItem
            question="Does GIF to PNG preserve transparency?"
            answer="Yes. GIF supports binary transparency (on/off), and the converted PNG preserves these transparent areas as transparent pixels with full alpha support. PNG transparency is actually more flexible than GIF transparency — PNG supports partial transparency (semi-transparent pixels), which GIF cannot do."
          />
          <FAQItem
            question="Will the PNG be higher quality than the GIF?"
            answer="PNG removes the 256-color restriction, so colors and gradients will look smoother and more accurate. For images with text, logos, and fine details, the PNG will look noticeably sharper than the GIF. The PNG cannot recover detail that was lost when the original GIF was created."
          />
          <FAQItem
            question="Will the PNG be larger than the GIF?"
            answer="It depends on the image content. For simple flat-color graphics, GIF may be smaller than PNG. For photographs and complex images, PNG is often similar in size or even smaller. PNG removes the 256-color limit, which can actually improve compression efficiency for complex images."
          />
          <FAQItem
            question="Should I use GIF to PNG or GIF to JPG?"
            answer="Choose PNG when you need lossless quality, transparency support, or an image for further editing. Choose JPG when file size is the priority — for photographs, social media uploads, and email. PNG is ideal for logos, icons, and screenshots; JPG is ideal for photos."
          />
          <FAQItem
            question="Are my GIF files safe to convert here?"
            answer="Yes. All conversion happens entirely in your browser using the HTML5 Canvas API — no file is ever sent to a server. Your GIF files stay on your device throughout the entire process."
          />
          <FAQItem
            question="Can I compress the PNG after converting from GIF?"
            answer="Yes. After converting, use the Compress Image tool to reduce the PNG file size. PNG compression reduces file size without any quality loss — the image looks identical but takes up less space."
          />
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-text-main">Related Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              href: '/gif-to-jpg',
              label: 'GIF to JPG',
              desc: 'Smaller file size — best for photos and email',
            },
            {
              href: '/compress-gif-online',
              label: 'Compress GIF',
              desc: 'Reduce GIF file size while keeping animation',
            },
            {
              href: '/compress-image',
              label: 'Compress PNG',
              desc: 'Reduce PNG file size after conversion',
            },
            {
              href: '/png-to-jpg',
              label: 'PNG to JPG',
              desc: 'Convert PNG to JPG for smaller file size',
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
      </section>
    </div>
  )
}
