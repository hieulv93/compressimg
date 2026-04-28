'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/compress-image', label: 'Compress' },
  { href: '/resize-image', label: 'Resize' },
  { href: '/convert-image', label: 'Convert' },
  { href: '/crop-image', label: 'Crop' },
  { href: '/blog', label: 'Blog' },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="w-full border-b border-border bg-white sticky top-0 z-10">
      <div className="max-w-3xl mx-auto px-4 py-2 sm:h-14 sm:py-0 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 sm:gap-0">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-text-main hover:text-primary transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
          aria-label="CompressImg - Home"
        >
          <svg
            className="w-6 h-6 text-primary"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
          <span className="flex flex-col leading-tight">
            <span className="text-sm sm:text-base font-bold">CompressImg</span>
            <span className="text-[10px] font-normal text-text-muted hidden sm:block">
              Free Image Tools
            </span>
          </span>
        </Link>

        <nav aria-label="Main navigation">
          <ul className="flex flex-wrap gap-x-3 gap-y-1 text-xs sm:text-sm sm:flex-nowrap sm:gap-3">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href || pathname === href + '/'
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1 ${
                      isActive ? 'text-primary font-semibold' : 'text-text-muted hover:text-primary'
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
