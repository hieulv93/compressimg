import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-white mt-auto">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-text-muted">
          <p>© {new Date().getFullYear()} CompressImg.pro — Free online image compression.</p>
          <nav aria-label="Footer navigation">
            <ul className="flex items-center gap-4 flex-wrap justify-center">
              <li>
                <Link
                  href="/compress-image"
                  className="hover:text-primary transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                >
                  Compress Image
                </Link>
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
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
