import Link from 'next/link'
import FAQItem from './FAQItem'

export default function WebpToJpgContentSection() {
  return (
    <section
      className="space-y-8 pt-8 border-t border-border"
      aria-label="Guide to converting WebP to JPG"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Why Convert WebP to JPG?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          WebP is a modern image format developed by Google that produces smaller files than JPG at
          the same visual quality. All major modern browsers support WebP, but compatibility gaps
          still exist in older environments — older versions of Microsoft Office, some email
          clients, older photo editing software, and older operating systems may not open WebP files
          correctly. Converting WebP to JPG gives you universal compatibility: every device,
          application, and platform on the planet can open a JPG file.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          Common reasons to convert WebP to JPG include: downloading images from modern websites
          that serve WebP by default, preparing images for use in software that does not support
          WebP (older Photoshop versions, Microsoft Office, email attachments for Outlook), sharing
          photos with recipients who may use older devices, and printing — most print services and
          photo labs accept JPG but not always WebP.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          How to Convert WebP to JPG — 3 Simple Steps
        </h2>
        <ol className="space-y-4">
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              1
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Upload your WebP file</p>
              <p className="text-sm text-text-muted leading-relaxed">
                Click the upload area, drag and drop your WebP file, or paste from clipboard
                (Ctrl+V). Files up to 20MB are accepted. Your image is processed entirely in your
                browser — nothing is sent to any server.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              2
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">JPG is pre-selected as output</p>
              <p className="text-sm text-text-muted leading-relaxed">
                JPG is pre-selected as the output format on this page. If your WebP file contains
                transparency, transparent areas will be filled with a white background in the JPG
                output — JPG does not support transparency. Conversion is instant using your
                browser&apos;s Canvas API.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              3
            </span>
            <div>
              <p className="text-sm font-semibold text-text-main">Download your JPG file</p>
              <p className="text-sm text-text-muted leading-relaxed">
                The converted JPG downloads directly to your device with a &quot;converted-&quot;
                prefix and .jpg extension. The file is fully compatible with all devices,
                applications, email clients, and print services.
              </p>
            </div>
          </li>
        </ol>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">Where Is WebP Not Supported?</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          While WebP support has grown significantly, these are the most common environments where
          JPG is the safer choice:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Email clients</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Older versions of Microsoft Outlook (2019 and earlier) do not display WebP inline
              images or attachments — recipients see a broken image icon. Gmail and Apple Mail
              support WebP, but for guaranteed compatibility with all recipients, use JPG.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Microsoft Office</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Office 2019 and earlier versions of Word, PowerPoint, and Excel do not support
              inserting WebP images. Office 365 (Microsoft 365) added WebP support in 2023. Convert
              to JPG for documents that must open on older Office installations.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Photo editing software</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Adobe Photoshop added native WebP support in 2021 (version 23.2). Older Photoshop
              versions, GIMP versions before 2.10.20, and many other photo editors require a plugin
              or do not support WebP at all. Convert to JPG for maximum software compatibility.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Print services</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Most photo labs, print-on-demand services, and document printing platforms accept JPG
              and PNG but not WebP. Convert WebP images to JPG before uploading to any print or
              photo service.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">Social media uploads</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Most major platforms (Facebook, Instagram, Twitter/X, LinkedIn) accept WebP uploads
              from browsers but their mobile apps may not. If you are uploading images from a
              desktop application or via API, JPG is more universally accepted.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-1">
            <p className="font-semibold text-text-main text-sm">CMS and e-commerce platforms</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Some older CMS platforms, WordPress plugins, and e-commerce systems (older Shopify
              themes, Magento 1) do not handle WebP correctly in all contexts. JPG is the safe
              default for CMS uploads when WebP support is uncertain.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          WebP vs JPG: Quality and File Size Comparison
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          WebP is technically superior to JPG in both compression efficiency and feature support. At
          the same visual quality, WebP files are typically 25–35% smaller than equivalent JPG
          files. WebP also supports transparency (alpha channel) and animation, which JPG does not.
          The trade-off is compatibility — JPG has 30+ years of universal support across every
          device, application, and platform.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="rounded-xl border border-border p-4 space-y-2">
            <h3 className="font-semibold text-text-main text-sm">WebP advantages</h3>
            <ul className="space-y-1 text-xs text-text-muted">
              <li className="flex gap-1.5">
                <span className="text-primary shrink-0">→</span> 25–35% smaller than JPG
              </li>
              <li className="flex gap-1.5">
                <span className="text-primary shrink-0">→</span> Supports transparency
              </li>
              <li className="flex gap-1.5">
                <span className="text-primary shrink-0">→</span> Supports animation
              </li>
              <li className="flex gap-1.5">
                <span className="text-primary shrink-0">→</span> Better for web performance
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-2">
            <h3 className="font-semibold text-text-main text-sm">JPG advantages</h3>
            <ul className="space-y-1 text-xs text-text-muted">
              <li className="flex gap-1.5">
                <span className="text-primary shrink-0">→</span> Universal compatibility
              </li>
              <li className="flex gap-1.5">
                <span className="text-primary shrink-0">→</span> Opens in every app
              </li>
              <li className="flex gap-1.5">
                <span className="text-primary shrink-0">→</span> Accepted by all print services
              </li>
              <li className="flex gap-1.5">
                <span className="text-primary shrink-0">→</span> Safe for email attachments
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-border p-4 space-y-2">
            <h3 className="font-semibold text-text-main text-sm">When to convert WebP → JPG</h3>
            <ul className="space-y-1 text-xs text-text-muted">
              <li className="flex gap-1.5">
                <span className="text-primary shrink-0">→</span> Sending via email
              </li>
              <li className="flex gap-1.5">
                <span className="text-primary shrink-0">→</span> Inserting into Office docs
              </li>
              <li className="flex gap-1.5">
                <span className="text-primary shrink-0">→</span> Uploading to print service
              </li>
              <li className="flex gap-1.5">
                <span className="text-primary shrink-0">→</span> Opening in older software
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">
          Privacy — Your Images Never Leave Your Device
        </h2>
        <p className="text-text-muted text-sm leading-relaxed">
          This WebP to JPG converter runs entirely in your browser using the HTML5 Canvas API. When
          you upload a WebP file, it is loaded into browser memory and converted locally — no data
          is ever sent to any server. Your images are never stored, analyzed, or shared. Close the
          browser tab and the image data is permanently gone.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          For details on data handling, see our{' '}
          <Link href="/privacy-policy" className="text-primary underline">
            Privacy Policy
          </Link>{' '}
          and{' '}
          <Link href="/terms" className="text-primary underline">
            Terms of Service
          </Link>
          .
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-text-main">More Free Image Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link
            href="/jpg-to-png"
            className="block rounded-xl border border-border p-4 hover:border-primary transition-colors group"
          >
            <p className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors">
              JPG to PNG
            </p>
            <p className="text-xs text-text-muted mt-1">
              Convert JPG to lossless PNG for editing or transparency support.
            </p>
          </Link>
          <Link
            href="/compress-jpg-online"
            className="block rounded-xl border border-border p-4 hover:border-primary transition-colors group"
          >
            <p className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors">
              Compress JPG
            </p>
            <p className="text-xs text-text-muted mt-1">
              Reduce JPG file size further after conversion with quality control.
            </p>
          </Link>
          <Link
            href="/convert-image"
            className="block rounded-xl border border-border p-4 hover:border-primary transition-colors group"
          >
            <p className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors">
              Convert Any Format
            </p>
            <p className="text-xs text-text-muted mt-1">
              Convert between JPG, PNG, and WebP in any direction.
            </p>
          </Link>
        </div>
      </div>

      <WebpToJpgFAQSection />
    </section>
  )
}

function WebpToJpgFAQSection() {
  const faqs = [
    {
      q: "Why can't I open a WebP file on my computer?",
      a: 'WebP is a modern format that older software does not support. Windows Photo Viewer (pre-Windows 10 update), older Photoshop versions (before 2021), and older Office versions cannot open WebP files. Converting WebP to JPG gives you a file that opens in every application on every operating system.',
    },
    {
      q: 'Does converting WebP to JPG reduce quality?',
      a: 'A small quality reduction is introduced because JPG uses lossy compression. However, this tool converts at high quality (92/100), which is virtually indistinguishable from the original at normal viewing sizes. The result is a JPG that looks identical to the WebP on screen, just with full universal compatibility.',
    },
    {
      q: 'What happens to WebP transparency when converting to JPG?',
      a: 'JPG does not support transparency. Transparent areas in your WebP file are filled with a white background in the JPG output. If you need to preserve transparency, convert to PNG instead — PNG supports alpha channel transparency fully.',
    },
    {
      q: 'Will the JPG file be larger or smaller than the WebP?',
      a: 'Generally larger. WebP is 25–35% more efficient than JPG at the same quality, so converting WebP to JPG typically increases file size. This is the expected trade-off for gaining universal compatibility. To keep the JPG as small as possible, use our compress tool after conversion.',
    },
    {
      q: 'Can I convert animated WebP to JPG?',
      a: 'This tool converts the first frame of an animated WebP file to a static JPG image. Animated WebP files are not common for photographs, but if you have one, the resulting JPG will show only the first frame of the animation.',
    },
    {
      q: 'Why do websites use WebP instead of JPG?',
      a: 'WebP produces smaller file sizes than JPG at the same visual quality, which improves website loading speed and Google Core Web Vitals scores. Modern browsers all support WebP, so websites serve it automatically. When you save or download these images, you get a WebP file — converting to JPG makes them compatible with all applications.',
    },
    {
      q: 'Can I convert WebP to JPG on my iPhone or Android?',
      a: 'Yes. This tool works fully on iOS Safari and Android Chrome. Tap the upload area to select a WebP file from your device, wait for conversion, and download the JPG — no app installation required. The downloaded JPG will be compatible with all apps on your phone.',
    },
    {
      q: 'Are my WebP files uploaded to a server during conversion?',
      a: 'No. All conversion happens entirely in your browser using the Canvas API. Your files never leave your device and are never sent to any server. The tool works completely offline once the page has loaded.',
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
