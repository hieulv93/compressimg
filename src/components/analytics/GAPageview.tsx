'use client'
import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export default function GAPageview() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (typeof window === 'undefined' || !window.gtag) return
    const qs = searchParams?.toString()
    const url = window.location.origin + pathname + (qs ? `?${qs}` : '')
    window.gtag('event', 'page_view', {
      page_location: url,
      page_path: pathname + (qs ? `?${qs}` : ''),
      page_title: document.title,
    })
  }, [pathname, searchParams])

  return null
}
