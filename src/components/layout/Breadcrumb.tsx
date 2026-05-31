import Link from 'next/link'

const SITE_URL = 'https://compressimg.pro'

interface BreadcrumbItem {
  label: string
  href?: string // relative path for Link navigation
  url?: string // absolute URL for JSON-LD (auto-computed from href if omitted)
}

function toAbsoluteUrl(href: string): string {
  const path = href.endsWith('/') ? href : href + '/'
  return SITE_URL + path
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items
      .map((item, i) => {
        const itemUrl = item.url ?? (item.href ? toAbsoluteUrl(item.href) : undefined)
        return itemUrl
          ? { '@type': 'ListItem', position: i + 1, name: item.label, item: itemUrl }
          : null
      })
      .filter(Boolean),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav
        aria-label="Breadcrumb"
        className="text-xs text-text-muted flex items-center gap-1.5 flex-wrap"
      >
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-1.5">
            {i > 0 && (
              <span aria-hidden="true" className="select-none">
                /
              </span>
            )}
            {item.href ? (
              <Link href={item.href} className="hover:text-primary transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-text-main font-medium">{item.label}</span>
            )}
          </span>
        ))}
      </nav>
    </>
  )
}
