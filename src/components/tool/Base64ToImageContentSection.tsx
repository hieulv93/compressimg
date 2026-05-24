import Link from 'next/link'
import FAQItem from '@/components/tool/FAQItem'

export default function Base64ToImageContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to converting Base64 to image"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">What Is a Base64 Image String?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          A Base64 image string is a text representation of a binary image file. Instead of storing
          the image as a separate file, the image data is encoded into a long string of ASCII
          characters and prefixed with a MIME type declaration. The complete string is called a data
          URL and looks like:
        </p>
        <div className="rounded-xl bg-surface border border-border p-3">
          <code className="text-xs text-text-muted font-mono break-all">
            data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEBAQEBAQ...
          </code>
        </div>
        <p className="text-text-muted text-sm leading-relaxed">
          The prefix{' '}
          <code className="bg-surface px-1 py-0.5 rounded text-[11px]">
            data:image/jpeg;base64,
          </code>{' '}
          tells the browser the data type and encoding. The long string after the comma is the
          actual image — the same binary data you would find in a .jpg file, just represented as
          text. Decoding reverses this: the text is converted back to binary, producing the original
          image.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Where Do Base64 Image Strings Come From?
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-text-muted border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 font-semibold text-text-main">Source</th>
                <th className="text-left py-2 font-semibold text-text-main">
                  How to get the string
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="py-2 pr-4">HTML source code</td>
                <td className="py-2">
                  Right-click → View Source, find img src=&quot;data:image/...&quot;
                </td>
              </tr>
              <tr>
                <td className="py-2 pr-4">CSS stylesheet</td>
                <td className="py-2">
                  Find background-image: url(&quot;data:image/...&quot;) in CSS
                </td>
              </tr>
              <tr>
                <td className="py-2 pr-4">JSON API response</td>
                <td className="py-2">
                  Copy the value of an image field from the API response body
                </td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Database record</td>
                <td className="py-2">Images stored as text in a database column</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Our Image to Base64 tool</td>
                <td className="py-2">Upload any photo to generate its Base64 string</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">JavaScript canvas</td>
                <td className="py-2">canvas.toDataURL() returns a Base64 data URL</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How to Convert Base64 to Image — 3 Steps
        </h2>
        <ol className="space-y-4">
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              1
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Paste your Base64 string</p>
              <p className="text-sm text-text-muted leading-relaxed">
                Paste the full data URL (starting with{' '}
                <code className="bg-surface px-1 py-0.5 rounded text-[11px]">
                  data:image/jpeg;base64,
                </code>
                ) or a raw Base64 string without the prefix. The tool handles both.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              2
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Click Decode Image</p>
              <p className="text-sm text-text-muted leading-relaxed">
                The tool validates the string and renders the decoded image as a preview. If the
                string is invalid or incomplete, an error message explains what went wrong.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              3
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Download the image</p>
              <p className="text-sm text-text-muted leading-relaxed">
                Click Download to save the decoded image as a JPEG file. The file contains only
                pixel data — ready to use like any other image file.
              </p>
            </div>
          </li>
        </ol>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Supported Base64 Image Formats</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          This tool accepts Base64 strings for the following image types:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              name: 'data:image/jpeg;base64,...',
              detail: 'JPEG images — the most common format for photographs and compressed images.',
            },
            {
              name: 'data:image/png;base64,...',
              detail: 'PNG images — lossless compression, supports transparency.',
            },
            {
              name: 'data:image/webp;base64,...',
              detail: 'WebP images — modern format with better compression than JPEG and PNG.',
            },
            {
              name: 'data:image/gif;base64,...',
              detail: 'GIF images — limited palette, often used for simple animations.',
            },
            {
              name: 'Raw Base64 (no prefix)',
              detail:
                'Plain Base64 strings without the data URL prefix are treated as JPEG by default.',
            },
          ].map(({ name, detail }) => (
            <div key={name} className="rounded-xl border border-border bg-surface p-3 text-sm">
              <code className="font-mono text-text-main text-[11px] break-all">{name}</code>
              <p className="text-text-muted text-xs mt-1">{detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-border bg-surface p-4 text-sm space-y-2">
        <h2 className="font-semibold text-text-main">Decoding Is Lossless</h2>
        <p className="text-text-muted text-xs leading-relaxed">
          Base64 decoding reconstructs the exact original binary data. The decoded image is
          pixel-identical to what was encoded — no quality loss occurs during the encoding or
          decoding process. Any quality difference you notice is from the original JPEG compression
          that was applied before encoding, not from the Base64 step itself.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">More Free Image Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            {
              href: '/image-to-base64/',
              label: 'Image to Base64',
              desc: 'Encode photos to Base64 string',
            },
            {
              href: '/compress-image/',
              label: 'Compress Image',
              desc: 'Reduce file size up to 90%',
            },
            { href: '/exif-remover/', label: 'EXIF Remover', desc: 'Strip GPS & metadata' },
            { href: '/resize-image/', label: 'Resize Image', desc: 'Change pixel dimensions' },
            { href: '/heic-to-jpg/', label: 'HEIC to JPG', desc: 'Convert iPhone photos' },
            { href: '/jpg-to-webp/', label: 'JPG to WebP', desc: '30% smaller than JPG' },
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
          Frequently Asked Questions About Base64 to Image Conversion
        </h2>
        <div className="space-y-2">
          {[
            {
              q: 'What is a Base64 image string?',
              a: 'A Base64 image string is a text representation of a binary image file. The image bytes are encoded using 64 ASCII characters and combined with a MIME type prefix to create a data URL — a self-contained image that browsers can display directly without a separate file or HTTP request.',
            },
            {
              q: 'How do I find the Base64 string for an image on a webpage?',
              a: 'Right-click the page and choose View Page Source. Search for "data:image" to find inline Base64 images. Alternatively, open DevTools → Elements tab and inspect img src attributes or CSS background-image values for data URLs.',
            },
            {
              q: 'What if my Base64 string does not have the data:image prefix?',
              a: 'Paste the raw Base64 string without the prefix and click Decode. The tool will assume the image is JPEG and attempt decoding. If the image type is different (PNG, WebP), add the appropriate prefix manually: data:image/png;base64, or data:image/webp;base64, before the raw string.',
            },
            {
              q: 'Is decoding lossless — does it restore the exact original image?',
              a: 'Yes. Base64 decoding is a mathematically exact reversal of the encoding process. The binary data produced is identical to what was encoded. Any quality difference you see is from the JPEG compression in the original image, not from the Base64 encoding step.',
            },
            {
              q: 'Can I convert a Base64 PNG to keep transparency?',
              a: 'This tool downloads the decoded image as JPEG, which does not support transparency — transparent areas appear white. If you need to preserve transparency, note the image type from the data URL prefix (data:image/png;base64,...) and open the preview in a browser tab to save it directly as PNG using Save As.',
            },
            {
              q: 'Is my data private when using this tool?',
              a: 'Yes. The Base64 string is decoded entirely in your browser. No data is sent to any server. The decoding and image rendering happen locally using standard browser JavaScript.',
            },
          ].map(({ q, a }) => (
            <FAQItem key={q} question={q} answer={a} />
          ))}
        </div>
      </div>
    </section>
  )
}
