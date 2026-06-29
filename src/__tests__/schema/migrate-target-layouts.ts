/**
 * Generator script for all compress-image-to-* layout.tsx migrations.
 * Run: npx tsx src/__tests__/schema/migrate-target-layouts.ts
 */
import { writeFileSync, readFileSync } from 'fs'
import { join } from 'path'

interface TargetPage {
  slug: string
  targetKb: number
  label: string
  description: string
  name: string
}

const pages: TargetPage[] = [
  {
    slug: 'compress-image-to-20kb',
    targetKb: 20,
    label: '20KB',
    name: 'Compress Image to 20KB Online Free',
    description:
      'Free online tool to compress images to 20KB or less. Reduce JPG, PNG for government exams, ID uploads, and online forms. No upload — 100% browser-based.',
  },
  {
    slug: 'compress-image-to-30kb',
    targetKb: 30,
    label: '30KB',
    name: 'Compress Image to 30KB Online Free',
    description:
      'Free online tool to compress images to 30KB or less. Reduce JPG, PNG, WebP for online exam forms and government portals. Browser-based, no upload required.',
  },
  {
    slug: 'compress-image-to-50kb',
    targetKb: 50,
    label: '50KB',
    name: 'Compress Image to 50KB Online Free',
    description:
      'Free online tool to compress images to 50KB or less. Reduce JPG, PNG file size for government portals, exam registration, and official forms. 100% browser-based, no upload.',
  },
  {
    slug: 'compress-image-to-100kb',
    targetKb: 100,
    label: '100KB',
    name: 'Compress Image to 100KB Online Free',
    description:
      'Free online tool to compress images to 100KB or less. Reduce JPG, PNG, WebP file size instantly. No upload to server — 100% browser-based and private.',
  },
  {
    slug: 'compress-image-to-150kb',
    targetKb: 150,
    label: '150KB',
    name: 'Compress Image to 150KB Online Free',
    description:
      'Free online tool to compress images to 150KB or less. Reduce JPG, PNG, WebP for SSC, college applications, and job portals. Browser-based, no upload required.',
  },
  {
    slug: 'compress-image-to-200kb',
    targetKb: 200,
    label: '200KB',
    name: 'Compress Image to 200KB Online Free',
    description:
      'Free online tool to compress images to under 200KB. Reduce JPG, PNG file size for LinkedIn, visa forms, and portals. No upload, 100% browser-based and private.',
  },
  {
    slug: 'compress-image-to-300kb',
    targetKb: 300,
    label: '300KB',
    name: 'Compress Image to 300KB Online Free',
    description:
      'Free online tool to compress images to 300KB or less. Reduce JPG, PNG, WebP file size instantly. No upload to server — 100% browser-based and private.',
  },
  {
    slug: 'compress-image-to-400kb',
    targetKb: 400,
    label: '400KB',
    name: 'Compress Image to 400KB Online Free',
    description:
      'Free online tool to compress images to 400KB or less. Reduce JPG, PNG, WebP for email, web, and platform uploads. Browser-based, no upload required.',
  },
  {
    slug: 'compress-image-to-500kb',
    targetKb: 500,
    label: '500KB',
    name: 'Compress Image to 500KB Online Free',
    description:
      'Free online tool to compress images to under 500KB. Reduce JPG, PNG, WebP file size instantly. No upload to server — 100% browser-based and private.',
  },
  {
    slug: 'compress-image-to-800kb',
    targetKb: 800,
    label: '800KB',
    name: 'Compress Image to 800KB Online Free',
    description:
      'Free online tool to compress images to 800KB or less. Reduce JPG, PNG, WebP for email, web uploads, and platform limits. Browser-based, no upload required.',
  },
  {
    slug: 'compress-image-to-1mb',
    targetKb: 1024,
    label: '1MB',
    name: 'Compress Image to 1MB Online Free',
    description:
      'Free online tool to compress images to under 1MB. Reduce JPG, PNG, WebP file size instantly. No upload to server — 100% browser-based and private.',
  },
  {
    slug: 'compress-image-to-2mb',
    targetKb: 2048,
    label: '2MB',
    name: 'Compress Image to 2MB Online Free',
    description:
      'Free online tool to compress images to under 2MB. Reduce JPG, PNG, WebP file size instantly. No upload to server — 100% browser-based and private.',
  },
  {
    slug: 'compress-image-to-3mb',
    targetKb: 3072,
    label: '3MB',
    name: 'Compress Image to 3MB Online Free',
    description:
      'Free online tool to compress images to under 3MB. Reduce JPG, PNG, WebP file size instantly. No upload to server — 100% browser-based and private.',
  },
  {
    slug: 'compress-image-to-4mb',
    targetKb: 4096,
    label: '4MB',
    name: 'Compress Image to 4MB Online Free',
    description:
      'Free online tool to compress images to under 4MB. Reduce JPG, PNG, WebP file size instantly. No upload to server — 100% browser-based and private.',
  },
  {
    slug: 'compress-image-to-5mb',
    targetKb: 5120,
    label: '5MB',
    name: 'Compress Image to 5MB Online Free',
    description:
      'Free online tool to compress images to under 5MB. Reduce JPG, PNG, WebP file size instantly. No upload to server — 100% browser-based and private.',
  },
  {
    slug: 'compress-image-to-10mb',
    targetKb: 10240,
    label: '10MB',
    name: 'Compress Image to 10MB Online Free',
    description:
      'Free online tool to compress images to under 10MB. Reduce large JPG, PNG, or WebP files to fit 10MB upload limits — 100% browser-based, no upload to server.',
  },
]

const APP_DIR = join(process.cwd(), 'src', 'app')

for (const page of pages) {
  // Read existing layout to preserve metadata
  const existingPath = join(APP_DIR, page.slug, 'layout.tsx')
  const existing = readFileSync(existingPath, 'utf-8')

  // Extract metadata title and description from existing file
  const titleMatch = existing.match(/title:\s*['"]([^'"]+)['"]/)
  const title = titleMatch ? titleMatch[1] : page.name

  const metaDescMatch = existing.match(/description:\s*\n?\s*['"]([^'"]+)['"]/)
  const metaDesc = metaDescMatch ? metaDescMatch[1] : page.description

  const content = `import type { Metadata } from 'next'
import { schemaScript, PageType, pageUrl } from '@/lib/schema'

const PAGE_URL = pageUrl('/${page.slug}')

export const metadata: Metadata = {
  title: '${title}',
  description:
    '${metaDesc}',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: '${title}',
    description:
      '${metaDesc}',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [{ url: 'https://compressimg.pro/og-image.png', width: 1200, height: 630, alt: 'Compress Image to ${page.label} Online' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '${title}',
    description: 'Reduce any image to under ${page.label} for free. 100% browser-based — no uploads.',
    images: ['https://compressimg.pro/og-image.png'],
  },
}

const schema = schemaScript({
  type: PageType.ToolTarget,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: '${page.name}', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: '${page.name}',
    description:
      '${page.description}',
    targetKb: ${page.targetKb},
  },
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
      )}
      {children}
    </>
  )
}
`

  writeFileSync(existingPath, content, 'utf-8')
  console.log(`Migrated: ${page.slug}`)
}
