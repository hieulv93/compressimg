import Link from 'next/link'
import FAQItem from './FAQItem'

export default function GifToJpgContentSection() {
  return (
    <div className="space-y-8 text-sm leading-relaxed text-text-muted border-t border-border pt-8">
      <section className="space-y-3">
        <h2 className="text-base font-bold text-text-main">Why Convert GIF to JPG?</h2>
        <p>
          GIF was introduced in 1987 and remains widely used for animated images and simple
          graphics. However, GIF has a critical technical limitation: it supports only 256 colors
          per frame. For photographs, gradients, and complex images, this 256-color ceiling creates
          visible banding, dithering patterns, and washed-out colors.
        </p>
        <p>
          JPG (JPEG) supports up to 16.7 million colors and uses advanced lossy compression designed
          specifically for photographic content. Converting a photo-based GIF to JPG removes the
          color restriction entirely, producing a smoother, more accurate image. JPG files are also
          typically 60–80% smaller than equivalent GIF files for photographic content.
        </p>
        <p>
          Common reasons to convert GIF to JPG include uploading to platforms that require JPG,
          reducing file size for email attachments, improving image quality for product photos saved
          as GIF, and converting old GIF screenshots or graphics into a more compatible format.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-text-main">What Happens to the Animation?</h2>
        <p>
          JPG is a static image format — it cannot store multiple frames or animation data. When you
          convert a GIF to JPG, this tool extracts the first frame of the GIF and converts it to a
          JPEG image. All subsequent frames are discarded.
        </p>
        <p>
          This is the expected behavior for GIF-to-JPG conversion. If your GIF is a single-frame
          image (a static GIF), the output JPG will represent the complete image. If your GIF is
          animated, you receive the first frame as a still photo.
        </p>
        <p>
          If you need to convert an animated GIF to a video format (MP4 or WebM), use a dedicated
          video conversion tool instead. For static GIFs that you want converted to a higher-quality
          still image, GIF to JPG is the right choice.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-text-main">GIF vs JPG — Format Comparison</h2>
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
                  JPG
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Colors', '256 max per frame', '16.7 million (24-bit)'],
                ['Animation', 'Yes (multiple frames)', 'No (static only)'],
                ['Transparency', 'Binary (on/off)', 'Not supported'],
                ['Compression', 'Lossless (LZW)', 'Lossy (DCT)'],
                ['Best for', 'Simple graphics, animation', 'Photographs, complex images'],
                ['File size (photos)', 'Large for photo content', 'Small — optimized for photos'],
                ['Browser support', 'Universal', 'Universal'],
              ].map(([prop, gif, jpg]) => (
                <tr key={prop} className="border-t border-border">
                  <td className="p-3 border border-border font-medium text-text-main">{prop}</td>
                  <td className="p-3 border border-border">{gif}</td>
                  <td className="p-3 border border-border">{jpg}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-text-main">Common Use Cases for GIF to JPG</h2>
        <ul className="space-y-2 list-disc list-inside">
          <li>
            <strong className="text-text-main">Product photos saved as GIF</strong> — Some older
            e-commerce systems and image editors save product photos as GIF. Converting to JPG
            removes the 256-color limit, producing sharper, more accurate product images at a
            fraction of the file size.
          </li>
          <li>
            <strong className="text-text-main">Old website graphics and banners</strong> — Web
            graphics from the 1990s and 2000s were often saved as GIF. Converting to JPG gives you a
            modern, widely compatible format that loads faster and looks better on high-DPI
            displays.
          </li>
          <li>
            <strong className="text-text-main">Email attachments</strong> — Many email clients
            handle JPG more reliably than GIF for inline images. Converting GIF attachments to JPG
            ensures consistent display across all email platforms.
          </li>
          <li>
            <strong className="text-text-main">Social media uploads</strong> — Platforms like
            Facebook, Instagram, and LinkedIn compress uploaded images. Starting with a JPG (which
            handles their re-compression better than GIF) produces cleaner results in your feed.
          </li>
          <li>
            <strong className="text-text-main">Screenshots and scanned documents</strong> — Some
            scanners and screenshot tools default to GIF output. Converting to JPG produces a more
            compressed, shareable file.
          </li>
          <li>
            <strong className="text-text-main">Platform upload requirements</strong> — Some forms,
            CMS platforms, and file upload systems explicitly require JPG. Converting your GIF
            ensures the upload is accepted.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-text-main">How GIF to JPG Conversion Works</h2>
        <p>
          This tool converts GIF to JPG entirely in your browser using the HTML5 Canvas API. The
          process works as follows: the GIF file is loaded into a browser image element, the first
          frame is drawn onto an off-screen canvas, and the canvas is exported as a JPEG image at
          high quality (92%). No file is ever sent to a server.
        </p>
        <p>
          The Canvas API handles GIF decoding natively — no external libraries are needed. The
          output JPEG is generated at the same pixel dimensions as the original GIF. Because JPG
          supports millions of colors, the output will look smoother than the original GIF for
          photographic content, though the canvas draws the GIF at its original 256-color rendered
          appearance.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-text-main">File Size: GIF vs JPG</h2>
        <p>The size difference between GIF and JPG depends heavily on the image content:</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Photographic GIF</p>
            <p className="text-xs text-text-muted">
              GIF: ~500KB&ndash;2MB &rarr; JPG: ~80&ndash;300KB. JPG is 5&ndash;10&times; smaller
              for photo content.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Simple graphic GIF</p>
            <p className="text-xs text-text-muted">
              GIF: ~10&ndash;50KB &rarr; JPG: ~15&ndash;60KB. JPG may be slightly larger for
              flat-color graphics.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Animated GIF (first frame)</p>
            <p className="text-xs text-text-muted">
              Full GIF: ~500KB&ndash;5MB &rarr; JPG of first frame: ~50&ndash;200KB. Large size
              reduction since animation data is removed.
            </p>
          </div>
        </div>
        <p>
          If you need to further reduce the JPG file size after conversion, use the{' '}
          <Link href="/compress-image" className="text-primary hover:underline">
            Compress Image tool
          </Link>{' '}
          to reduce it without visible quality loss.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-text-main">GIF to JPG vs GIF to PNG</h2>
        <p>Both JPG and PNG offer more colors than GIF, but they serve different purposes:</p>
        <ul className="space-y-2 list-disc list-inside">
          <li>
            <strong className="text-text-main">Choose JPG</strong> when file size matters — for
            photographs, social media uploads, email attachments, and web publishing. JPG produces
            the smallest file size for photographic content.
          </li>
          <li>
            <strong className="text-text-main">
              Choose{' '}
              <Link href="/gif-to-png" className="text-primary hover:underline">
                PNG
              </Link>
            </strong>{' '}
            when you need lossless quality (no compression artifacts), when the image has sharp
            edges or text, when transparency needs to be preserved, or when you plan to edit the
            image further in a design tool.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-base font-bold text-text-main">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <FAQItem
            question="What happens to the animation when I convert a GIF to JPG?"
            answer="JPG is a static image format. This tool extracts the first frame of the GIF and converts it to a JPEG image. The remaining animation frames are discarded. If you need all frames, use a video converter to export the GIF as MP4 or WebM."
          />
          <FAQItem
            question="Why convert GIF to JPG instead of keeping the GIF?"
            answer="GIF is limited to 256 colors, which produces visible banding and poor quality for photographs and complex images. JPG supports 16.7 million colors and is 60–80% smaller for photographic content. Converting improves quality and reduces file size at the same time."
          />
          <FAQItem
            question="Will the JPG look better than the original GIF?"
            answer="For photographs and complex images, yes — the 256-color limit of GIF causes visible quality loss that JPG removes. However, JPG cannot recover detail that was never in the GIF. If the GIF was a low-quality source, the JPG will still reflect that."
          />
          <FAQItem
            question="What happens to GIF transparency when converting to JPG?"
            answer="JPG does not support transparency. Transparent areas in your GIF are filled with a white background in the JPG output. If you need to preserve transparency, convert to PNG instead."
          />
          <FAQItem
            question="Will the JPG file be smaller than the GIF?"
            answer="For photographic content, yes — typically 60–80% smaller. For simple graphics with few colors and flat areas, GIF may already be smaller than the resulting JPG. The size difference depends on the image content."
          />
          <FAQItem
            question="Can I convert multiple GIF files at once?"
            answer="This tool converts one file at a time. For batch conversion of multiple GIFs to JPG, use the Batch Compress tool which supports multiple files simultaneously."
          />
          <FAQItem
            question="Are my GIF files safe to convert here?"
            answer="Yes. All conversion happens entirely in your browser using the HTML5 Canvas API — no file is ever sent to a server. Your GIF files stay on your device throughout the entire process."
          />
          <FAQItem
            question="Can I convert GIF to PNG instead?"
            answer="Yes. Use the GIF to PNG converter for a lossless output that preserves sharp edges and supports transparency. PNG is better for graphics and logos. JPG is better for photographs where file size matters."
          />
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-text-main">Related Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              href: '/gif-to-png',
              label: 'GIF to PNG',
              desc: 'Lossless output with transparency preserved',
            },
            {
              href: '/compress-gif-online',
              label: 'Compress GIF',
              desc: 'Reduce GIF file size while keeping animation',
            },
            {
              href: '/compress-image',
              label: 'Compress JPG',
              desc: 'Reduce JPG file size after conversion',
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
