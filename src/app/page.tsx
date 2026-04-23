import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Free Online Image Tools — Compress & Resize Images | CompressImg',
  description:
    'Free browser-based image tools. Compress images up to 90% smaller or resize to any dimension. No upload, no login — 100% private and instant.',
  alternates: { canonical: 'https://compressimg.pro' },
}

const tools = [
  {
    href: '/compress-image',
    icon: (
      <svg
        className="w-8 h-8 text-primary"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        aria-hidden="true"
      >
        <path
          d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polyline points="17 8 12 3 7 8" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="12" y1="3" x2="12" y2="15" strokeLinecap="round" />
      </svg>
    ),
    title: 'Compress Image',
    description:
      'Reduce file size up to 90% without losing visible quality. Supports JPG, PNG, WebP.',
    cta: 'Compress Now',
    badge: 'Most Popular',
  },
  {
    href: '/resize-image',
    icon: (
      <svg
        className="w-8 h-8 text-primary"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        aria-hidden="true"
      >
        <polyline points="15 3 21 3 21 9" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="9 21 3 21 3 15" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="21" y1="3" x2="14" y2="10" strokeLinecap="round" />
        <line x1="3" y1="21" x2="10" y2="14" strokeLinecap="round" />
      </svg>
    ),
    title: 'Resize Image',
    description:
      'Change photo dimensions for any platform. Presets for Instagram, YouTube, and more.',
    cta: 'Resize Now',
    badge: null,
  },
]

export default function HomePage() {
  return (
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 py-12 sm:py-20 space-y-10">
        <div className="text-center space-y-3">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-main">Free Online Image Tools</h1>
          <p className="text-text-muted text-sm sm:text-base max-w-lg mx-auto">
            Fast, private, browser-based. Your images never leave your device.
          </p>
          <div className="flex items-center justify-center gap-4 text-xs text-text-muted flex-wrap pt-1">
            <span>⚡ Instant processing</span>
            <span>·</span>
            <span>🔒 No uploads</span>
            <span>·</span>
            <span>✓ Free, no sign-up</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group relative rounded-2xl border border-border bg-white p-6 space-y-4 hover:border-primary hover:shadow-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              {tool.badge && (
                <span className="absolute top-4 right-4 text-xs font-semibold text-primary bg-blue-50 border border-primary/20 rounded-full px-2.5 py-0.5">
                  {tool.badge}
                </span>
              )}
              <div className="w-14 h-14 rounded-xl bg-surface border border-border flex items-center justify-center group-hover:bg-drag-active transition-colors duration-200">
                {tool.icon}
              </div>
              <div className="space-y-1.5">
                <h2 className="font-bold text-text-main text-base group-hover:text-primary transition-colors duration-150">
                  {tool.title}
                </h2>
                <p className="text-text-muted text-sm leading-relaxed">{tool.description}</p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                {tool.cta}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
