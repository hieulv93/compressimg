import Link from 'next/link'

const posts = [
  {
    slug: 'dpi-vs-resolution-print-vs-web',
    title: 'DPI vs Resolution: Image Settings for Print vs Web (2026 Guide)',
    description:
      "DPI and resolution explained — what they mean for print (300 DPI) vs web (72 PPI), why they're different, and how to set the right values for your use case.",
    date: '2026-05-24',
    readTime: '9 min read',
    category: 'Guide',
  },
  {
    slug: 'compress-images-for-etsy',
    title: 'How to Compress Images for Etsy — Listing Photo Best Practices',
    description:
      'Compress Etsy listing photos to under 1MB for fast loading without losing detail. Covers the 10-image limit, recommended sizes, thumbnail tips, and Etsy image requirements.',
    date: '2026-05-24',
    readTime: '8 min read',
    category: 'Guide',
  },
  {
    slug: 'compress-images-for-shopify',
    title: 'How to Compress Images for Shopify — Speed Up Your Store (2026)',
    description:
      'Compress Shopify product images to under 500KB for faster store loading, better PageSpeed scores, and higher Google rankings. Step-by-step guide with recommended settings.',
    date: '2026-05-24',
    readTime: '9 min read',
    category: 'Guide',
  },
  {
    slug: 'image-seo-guide',
    title: 'Image SEO: Complete Guide to Optimizing Images for Google (2026)',
    description:
      'How to optimize images for Google search — file size, alt text, file names, structured data, Core Web Vitals, and next-gen formats. Complete image SEO guide for 2026.',
    date: '2026-05-24',
    readTime: '12 min read',
    category: 'Guide',
  },
  {
    slug: 'how-to-compress-images-on-android',
    title: 'How to Compress Images on Android — Free Methods That Work',
    description:
      'Compress photos on Android without an app — use your browser. Also covers Google Photos storage saver, Samsung Gallery tricks, and file manager methods. Free.',
    date: '2026-05-24',
    readTime: '7 min read',
    category: 'Guide',
  },
  {
    slug: 'how-to-compress-images-on-iphone',
    title: 'How to Compress Images on iPhone — Without Losing Quality (2026)',
    description:
      'Compress iPhone photos without losing quality — 5 free methods including browser-based tools, HEIC settings, AirDrop tricks, and the Files app. Works on iOS 16, 17, 18.',
    date: '2026-05-24',
    readTime: '7 min read',
    category: 'Guide',
  },
  {
    slug: 'avif-vs-webp',
    title: 'AVIF vs WebP: Which Modern Image Format Wins in 2026?',
    description:
      'AVIF produces 40–60% smaller files than JPEG — but WebP has broader browser support. Full comparison of file size, encoding speed, and browser support to pick the right format.',
    date: '2026-05-24',
    readTime: '8 min read',
    category: 'Guide',
  },
  {
    slug: 'jpg-vs-jpeg',
    title: "JPG vs JPEG: What's the Difference? (2026 Guide)",
    description:
      'JPG and JPEG are the same format. The two extensions exist for historical reasons from the Windows 3.x era. Full explanation of why both exist and which to use.',
    date: '2026-05-24',
    readTime: '6 min read',
    category: 'Guide',
  },
  {
    slug: 'how-to-add-watermark-to-photos',
    title: 'How to Add a Watermark to Photos Online — Free Guide',
    description:
      'Learn how to watermark photos in three steps — no Photoshop, no account. Covers position, opacity, color, and when to use each setting for branding or protection.',
    date: '2026-05-24',
    readTime: '8 min read',
    category: 'Guide',
  },
  {
    slug: 'what-is-base64-encoding',
    title: 'What Is Base64 Encoding? A Plain-English Explanation',
    description:
      'Base64 encodes binary data — like images — as text. Learn how it works, the 33% size overhead, when to use it in HTML/CSS/JSON, and when to avoid it.',
    date: '2026-05-24',
    readTime: '7 min read',
    category: 'Guide',
  },
  {
    slug: 'how-to-compress-images-for-wordpress',
    title: 'How to Compress Images for WordPress — Speed Up Your Site',
    description:
      'Uncompressed images are the most common cause of slow WordPress sites. Learn the right dimensions, quality settings, WebP support, and pre-upload workflow to keep your site fast.',
    date: '2026-05-11',
    readTime: '9 min read',
    category: 'Guide',
  },
  {
    slug: 'compress-images-without-losing-quality',
    title: 'How to Compress Images Without Losing Quality',
    description:
      'Compress JPG, PNG, and WebP images without visible quality loss. Learn which settings, methods, and formats minimize file size while keeping images sharp.',
    date: '2026-05-04',
    readTime: '8 min read',
    category: 'Guide',
  },
  {
    slug: 'what-is-webp-format',
    title: 'What Is WebP? The Complete Guide to WebP Images',
    description:
      'WebP produces 25–35% smaller files than JPEG at the same visual quality. Learn what WebP is, browser support, and how to convert images to and from WebP.',
    date: '2026-05-03',
    readTime: '7 min read',
    category: 'Guide',
  },
  {
    slug: 'what-is-heic-format',
    title: 'What Is HEIC? How to Open and Convert HEIC Images',
    description:
      'HEIC is the default photo format on iPhones. Learn why iPhones use HEIC, how to open HEIC files on Windows, and how to convert HEIC to JPG or PNG for free.',
    date: '2026-05-02',
    readTime: '8 min read',
    category: 'Guide',
  },
  {
    slug: 'why-photos-look-blurry-social-media',
    title: 'Why Do Photos Look Blurry on Social Media? (And How to Fix It)',
    description:
      'Instagram, Facebook, WhatsApp, and TikTok all recompress your photos automatically. Learn exactly why it happens and the pre-compression trick that keeps your photos sharp.',
    date: '2026-05-04',
    readTime: '10 min read',
    category: 'Guide',
  },
  {
    slug: 'how-to-reduce-image-file-size',
    title: 'How to Reduce Image File Size: 5 Methods That Actually Work',
    description:
      'Compress, resize, convert format, batch process — 5 proven techniques to reduce image file size for web, email, upload forms, and social media.',
    date: '2026-04-29',
    readTime: '9 min read',
    category: 'Guide',
  },
  {
    slug: 'best-image-format-for-web',
    title: 'Best Image Format for Web: JPEG vs PNG vs WebP in 2026',
    description:
      'JPEG, PNG, WebP, AVIF — which image format is best for your website? Full comparison of file size, quality, browser support, and when to use each format.',
    date: '2026-04-28',
    readTime: '8 min read',
    category: 'Guide',
  },
  {
    slug: 'how-to-compress-images-for-web',
    title: 'How to Compress Images for Web: The Complete Guide',
    description:
      'Learn the best techniques to reduce image file size for websites without losing quality. Covers JPEG, PNG, WebP, and the right format for every use case.',
    date: '2026-04-28',
    readTime: '8 min read',
    category: 'Guide',
  },
]

export default function BlogPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-text-main mb-2">
        Image Optimization Blog — Compression, Format &amp; Performance Tips
      </h1>
      <p className="text-text-muted mb-10 max-w-2xl">
        Practical guides on compressing JPG, PNG, WebP and HEIC images for web, email, and social
        media — without losing quality. All tools and techniques are browser-based and free.
      </p>

      <div className="space-y-8">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="border border-border rounded-xl p-6 hover:border-primary transition-colors duration-150"
          >
            <div className="flex items-center gap-2 text-xs text-text-muted mb-3">
              <span className="bg-surface px-2 py-0.5 rounded font-medium">{post.category}</span>
              <span>·</span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
            <h2 className="text-xl font-bold text-text-main mb-2">
              <Link
                href={`/blog/${post.slug}`}
                className="hover:text-primary transition-colors duration-150"
              >
                {post.title}
              </Link>
            </h2>
            <p className="text-text-muted text-sm leading-relaxed mb-4">{post.description}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="text-primary font-medium text-sm hover:underline"
            >
              Read article →
            </Link>
          </article>
        ))}
      </div>
    </main>
  )
}
