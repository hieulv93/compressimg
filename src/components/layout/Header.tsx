import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full border-b border-border bg-white sticky top-0 z-10">
      <div className="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between">
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
          <ul className="flex items-center gap-1 sm:gap-3 text-sm">
            <li>
              <Link
                href="/compress-image"
                className="text-text-muted hover:text-primary transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1"
              >
                Compress
              </Link>
            </li>
            <li>
              <Link
                href="/resize-image"
                className="text-text-muted hover:text-primary transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1"
              >
                Resize
              </Link>
            </li>
            <li>
              <Link
                href="/convert-image"
                className="text-text-muted hover:text-primary transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1"
              >
                Convert
              </Link>
            </li>
            <li>
              <Link
                href="/crop-image"
                className="text-text-muted hover:text-primary transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1"
              >
                Crop
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
