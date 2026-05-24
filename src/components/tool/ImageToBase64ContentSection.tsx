import Link from 'next/link'
import FAQItem from '@/components/tool/FAQItem'

export default function ImageToBase64ContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to converting images to Base64"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">What Is Base64 Encoding for Images?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Base64 is a binary-to-text encoding scheme that converts binary data — like the bytes of
          an image file — into a string of printable ASCII characters. The name comes from the 64
          characters used in the encoding alphabet: A–Z, a–z, 0–9, +, and /. A Base64-encoded image
          looks like a long string of seemingly random characters starting with something like{' '}
          <code className="bg-surface px-1 py-0.5 rounded text-[11px]">
            data:image/jpeg;base64,/9j/4AAQSkZJRgAB...
          </code>
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          When used for images, the full Base64 representation is called a data URL. It includes a
          MIME type prefix (
          <code className="bg-surface px-1 py-0.5 rounded text-[11px]">
            data:image/jpeg;base64,
          </code>
          ) that tells the browser what kind of data follows. Browsers can load a data URL directly
          as an image source — no separate HTTP request, no external file.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">When to Use Base64 for Images</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              name: 'Inline images in HTML emails',
              detail:
                "Email clients block external image requests by default. Embedding images as Base64 in HTML emails ensures they display without needing external URLs — no missing image icons, no tracking pixel concerns from the recipient's end.",
            },
            {
              name: 'Small icons and logos in CSS',
              detail:
                'For small images under 5 KB (favicons, SVG icons, loading spinners), inlining as Base64 in CSS eliminates an extra HTTP request. On fast connections the saving is minor; on slow connections or CDN-constrained origins, each saved request counts.',
            },
            {
              name: 'JSON API responses with embedded images',
              detail:
                'Some APIs or data formats cannot carry binary data. Base64 allows image data to be embedded in JSON responses, config files, or database text fields without needing a separate file upload or URL reference system.',
            },
            {
              name: 'Offline-first web apps',
              detail:
                'Progressive web apps that need to function offline can embed critical UI images as Base64 strings in their JavaScript bundle — guaranteeing those images are always available even without a network connection.',
            },
            {
              name: 'Canvas-generated images',
              detail:
                'When working with the HTML Canvas API, calling canvas.toDataURL() returns a Base64-encoded image. Converting between canvas output and embeddable data URLs is a common step in browser-based image editing.',
            },
            {
              name: 'Testing and prototyping',
              detail:
                'For rapid UI prototyping or API testing, Base64 strings let you include images without setting up file hosting. Paste the string directly into a src attribute to verify layout without any infrastructure.',
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
        <h2 className="text-xl font-bold text-text-main">Base64 Size Overhead</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Base64 encoding increases the size of binary data by approximately 33%. This is because
          every 3 bytes of binary data become 4 Base64 characters — a 4/3 ratio. The table below
          shows typical overhead for common image sizes:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-text-muted border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 font-semibold text-text-main">
                  Original image size
                </th>
                <th className="text-left py-2 pr-4 font-semibold text-text-main">
                  Base64 string size
                </th>
                <th className="text-left py-2 font-semibold text-text-main">Overhead</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="py-2 pr-4">5 KB (small icon)</td>
                <td className="py-2 pr-4">~6.7 KB</td>
                <td className="py-2">+1.7 KB</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">50 KB (thumbnail)</td>
                <td className="py-2 pr-4">~67 KB</td>
                <td className="py-2">+17 KB</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">200 KB (medium photo)</td>
                <td className="py-2 pr-4">~267 KB</td>
                <td className="py-2">+67 KB</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">1 MB (large photo)</td>
                <td className="py-2 pr-4">~1.33 MB</td>
                <td className="py-2">+330 KB</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text-muted text-sm leading-relaxed">
          For images larger than 10 KB, avoid Base64 for web page performance. Base64-encoded images
          cannot be cached separately by the browser — the entire HTML or CSS file must be
          re-downloaded whenever anything changes. External image files can be cached independently
          for much longer periods.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How to Use a Base64 Image String in HTML and CSS
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Once you have the Base64 data URL, you can use it anywhere a standard image URL would
          appear:
        </p>
        <div className="space-y-3">
          <div className="rounded-xl bg-surface border border-border p-3">
            <p className="text-xs font-semibold text-text-main mb-1">In an HTML img tag</p>
            <code className="text-xs text-text-muted font-mono break-all">
              {'<img src="data:image/jpeg;base64,/9j/4AAQ..." alt="Photo" />'}
            </code>
          </div>
          <div className="rounded-xl bg-surface border border-border p-3">
            <p className="text-xs font-semibold text-text-main mb-1">In CSS background-image</p>
            <code className="text-xs text-text-muted font-mono break-all">
              {'.hero { background-image: url("data:image/jpeg;base64,/9j/4AAQ..."); }'}
            </code>
          </div>
          <div className="rounded-xl bg-surface border border-border p-3">
            <p className="text-xs font-semibold text-text-main mb-1">In a JSON payload</p>
            <code className="text-xs text-text-muted font-mono break-all">
              {'{ "image": "data:image/jpeg;base64,/9j/4AAQ..." }'}
            </code>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-surface p-4 text-sm space-y-2">
        <h2 className="font-semibold text-text-main">Your Image Never Leaves Your Device</h2>
        <p className="text-text-muted text-xs leading-relaxed">
          All encoding runs in your browser using the FileReader API. The image is read and
          converted to Base64 entirely on your device — no file is uploaded to any server. The
          Base64 string only exists in your browser memory until you copy or download it.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">More Free Image Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            {
              href: '/base64-to-image/',
              label: 'Base64 to Image',
              desc: 'Decode Base64 back to photo',
            },
            {
              href: '/compress-image/',
              label: 'Compress Image',
              desc: 'Reduce file size up to 90%',
            },
            { href: '/exif-remover/', label: 'EXIF Remover', desc: 'Strip GPS & camera metadata' },
            { href: '/resize-image/', label: 'Resize Image', desc: 'Change pixel dimensions' },
            { href: '/jpg-to-webp/', label: 'JPG to WebP', desc: '30% smaller than JPG' },
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
          Frequently Asked Questions About Image to Base64 Conversion
        </h2>
        <div className="space-y-2">
          {[
            {
              q: 'What is Base64 encoding for images?',
              a: 'Base64 encoding converts the binary bytes of an image file into a text string using 64 printable ASCII characters. The resulting data URL (data:image/jpeg;base64,...) can be used directly as an image source in HTML, CSS, or JSON — no separate file or HTTP request needed.',
            },
            {
              q: 'How much larger is a Base64-encoded image?',
              a: 'Base64 encoding increases file size by approximately 33%. Every 3 bytes of binary data become 4 Base64 characters. A 100 KB image becomes roughly 133 KB as a Base64 string. For this reason, Base64 is recommended only for small images where the request-saving benefit outweighs the size overhead.',
            },
            {
              q: 'When should I use Base64 instead of an image URL?',
              a: 'Use Base64 for small icons and images under 5–10 KB where eliminating an HTTP request is worth the size increase, for HTML emails where external image loading may be blocked, and for JSON APIs that need to include image data in text format. Avoid Base64 for large images — the size penalty and loss of browser caching outweigh the benefits.',
            },
            {
              q: 'Is Base64 the same as compressing an image?',
              a: 'No. Base64 encoding makes images larger, not smaller. It is a representation format that converts binary data to text — not a compression algorithm. For reducing image file size, use our Compress Image tool.',
            },
            {
              q: 'Can I use the Base64 string in React or other frameworks?',
              a: 'Yes. In React, set the src attribute of an img element directly to the Base64 data URL: <img src={base64String} alt="..." />. In Next.js, use the unoptimized prop on the Image component. In Vue, Angular, and other frameworks, the data URL works as a standard image source string.',
            },
            {
              q: 'What image formats can I convert to Base64?',
              a: 'This tool accepts JPG, PNG, WebP, and HEIC up to 20MB. HEIC photos (from iPhone) are automatically converted to JPEG before encoding. The output data URL will have the correct MIME type prefix for the input format.',
            },
            {
              q: 'Is my image private when using this converter?',
              a: 'Yes. All encoding runs in your browser using the FileReader API. Your image is never sent to any server. The Base64 string is generated entirely on your device.',
            },
            {
              q: 'How do I decode a Base64 string back to an image?',
              a: 'Use our Base64 to Image converter. Paste the Base64 data URL or raw Base64 string, click Decode, preview the result, and download the image file.',
            },
          ].map(({ q, a }) => (
            <FAQItem key={q} question={q} answer={a} />
          ))}
        </div>
      </div>
    </section>
  )
}
