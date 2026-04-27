import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-white mt-auto">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-text-muted">
          <p>© {new Date().getFullYear()} CompressImg.pro — Free online image tools.</p>
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center gap-4">
              <li>
                <a
                  href="https://click-thumb.com"
                  target="_blank"
                  rel="noopener"
                  className="hover:text-primary transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                >
                  ClickThumb — Thumbnail Maker
                </a>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-primary transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-primary transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                >
                  Terms
                </Link>
              </li>
              <li>
                <a
                  href="/sitemap.xml"
                  className="hover:text-primary transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                >
                  Sitemap
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
