import Link from 'next/link'

const posts: {
  slug: string
  title: string
  description: string
  date: string
  readTime: string
  category: string
}[] = [
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
