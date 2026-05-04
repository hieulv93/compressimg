import Link from 'next/link'

const posts = [
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
      <h1 className="text-3xl font-bold text-text-main mb-2">Blog</h1>
      <p className="text-text-muted mb-10">
        Image compression tips, format guides, and web performance best practices.
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
