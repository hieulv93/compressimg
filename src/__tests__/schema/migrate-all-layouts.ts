/**
 * Phase 8 migration: migrates all remaining layout.tsx files from
 * inline JSON.stringify(jsonLd) to schemaScript() calls.
 *
 * Run: npx tsx src/__tests__/schema/migrate-all-layouts.ts
 */

import { readFileSync, writeFileSync } from 'fs'
import { execSync } from 'child_process'

const SITE_URL = 'https://compressimg.pro'
const OG_IMAGE_LITERAL = `'${SITE_URL}/og-image.png'`

interface FaqItem {
  question: string
  answer: string
}

interface BlogData {
  headline: string
  description: string
  datePublished: string
  dateModified?: string
}

// ── Extractors ──────────────────────────────────────────────────────────────

function extractPagePath(content: string): string {
  const m = content.match(/PAGE_URL\s*=\s*`\$\{SITE_URL\}(\/[^`]+)`/)
  if (!m) throw new Error('PAGE_URL not found')
  const path = m[1]
  return path.endsWith('/') ? path.slice(0, -1) : path
}

function extractMetaTitle(content: string): string {
  // Scope to metadata block (before jsonLd)
  const jsonLdIdx = content.indexOf('\nconst jsonLd = ')
  const metaBlock = jsonLdIdx >= 0 ? content.slice(0, jsonLdIdx) : content
  const m = metaBlock.match(/\btitle:\s*(?:\{[^}]*absolute:\s*)?['"]([^'"]+)['"]\s*[,}]/)
  if (!m) throw new Error('metadata title not found')
  return m[1]
}

function extractMetaDescription(content: string): string {
  // Scope to top-level metadata description (before alternates:)
  const jsonLdIdx = content.indexOf('\nconst jsonLd = ')
  const metaBlock = jsonLdIdx >= 0 ? content.slice(0, jsonLdIdx) : content
  // Find the metadata description (before alternates: which is before openGraph:)
  const alternatesIdx = metaBlock.indexOf('alternates:')
  const descBlock = alternatesIdx >= 0 ? metaBlock.slice(0, alternatesIdx) : metaBlock
  const m = descBlock.match(/\bdescription:\s*\n?\s*(?:'([^']*)'|"([^"]*)")/)
  if (!m) throw new Error('metadata description not found')
  return m[1] ?? m[2]
}

function extractBreadcrumbNames(content: string): { pos2: string; pos3?: string } {
  const result: { pos2: string; pos3?: string } = { pos2: '' }
  const regex = /position:\s*(\d+),\s*name:\s*'([^']*)'/g
  let m: RegExpExecArray | null
  while ((m = regex.exec(content)) !== null) {
    const pos = parseInt(m[1])
    if (pos === 2 && !result.pos2) result.pos2 = m[2]
    if (pos === 3) result.pos3 = m[2]
  }
  if (!result.pos2) result.pos2 = 'Page'
  return result
}

function extractFaqs(content: string): FaqItem[] {
  const faqMarker = "'@type': 'FAQPage'"
  const faqStart = content.indexOf(faqMarker)
  if (faqStart === -1) return []

  const afterFaq = content.slice(faqStart)
  const questionBlocks = afterFaq.split("'@type': 'Question'").slice(1)

  const faqs: FaqItem[] = []
  for (const block of questionBlocks) {
    const nameM = block.match(/\bname:\s*'([^']*)'/) ?? block.match(/\bname:\s*"([^"]*)"/)
    const textM = block.match(/\btext:\s*'([^']*)'/) ?? block.match(/\btext:\s*"([^"]*)"/)
    if (nameM && textM) {
      faqs.push({ question: nameM[1], answer: textM[1] })
    }
  }
  return faqs
}

function extractBlogData(content: string): BlogData {
  // Only extract from the jsonLd block
  const jsonLdStart = content.indexOf('\nconst jsonLd = ')
  if (jsonLdStart === -1) throw new Error('jsonLd not found')
  const jsonLdContent = content.slice(jsonLdStart)

  const extractStr = (key: string): string => {
    const m = jsonLdContent.match(new RegExp(`\\b${key}:\\s*\\n?\\s*(?:'([^']*)'|"([^"]*)")`))
    if (!m) throw new Error(`${key} not found in jsonLd`)
    return m[1] ?? m[2]
  }

  return {
    headline: extractStr('headline'),
    description: extractStr('description'),
    datePublished: extractStr('datePublished'),
    dateModified: jsonLdContent.includes('dateModified:') ? extractStr('dateModified') : undefined,
  }
}

// ── Helpers ─────────────────────────────────────────────────────────────────

/** Wrap string in appropriate quote style. */
function qs(s: string): string {
  if (s.includes("'") && !s.includes('"')) return `"${s}"`
  if (s.includes("'") && s.includes('"')) return `\`${s}\``
  return `'${s}'`
}

function faqToTs(faq: FaqItem[], baseIndent: string): string {
  if (faq.length === 0) return ''
  const items = faq
    .map(
      ({ question, answer }) =>
        `${baseIndent}  {\n${baseIndent}    question: ${qs(question)},\n${baseIndent}    answer:\n${baseIndent}      ${qs(answer)},\n${baseIndent}  }`
    )
    .join(',\n')
  return `,\n${baseIndent}faq: [\n${items},\n${baseIndent}]`
}

// ── Schema section builders ──────────────────────────────────────────────────

function buildToolGenericSchema(
  pagePath: string,
  metaTitle: string,
  metaDescription: string,
  breadcrumbs: { pos2: string; pos3?: string },
  faq: FaqItem[]
): string {
  const faqPart = faqToTs(faq, '    ')
  const descPart = metaDescription ? `,\n    description:\n      ${qs(metaDescription)}` : ''

  return `const schema = schemaScript({
  type: PageType.ToolGeneric,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: ${qs(breadcrumbs.pos2)}, url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: ${qs(metaTitle)}${descPart}${faqPart},
  },
})`
}

function buildBlogPostSchema(
  metaTitle: string,
  breadcrumbs: { pos2: string; pos3?: string },
  blogData: BlogData,
  faq: FaqItem[]
): string {
  const faqPart = faqToTs(faq, '    ')
  const dateModLine = blogData.dateModified
    ? `\n      dateModified: '${blogData.dateModified}',`
    : ''
  const trailName = breadcrumbs.pos3 ?? metaTitle

  return `const schema = schemaScript({
  type: PageType.BlogPost,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Blog', url: pageUrl('/blog') },
    { name: ${qs(trailName)}, url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: ${qs(metaTitle)},
    blog: {
      headline: ${qs(blogData.headline)},
      description: ${qs(blogData.description)},
      datePublished: '${blogData.datePublished}',${dateModLine}
      url: PAGE_URL,
    }${faqPart},
  },
})`
}

function buildCategorySchema(metaTitle: string, metaDescription: string): string {
  const descPart = metaDescription ? `,\n    description:\n      ${qs(metaDescription)}` : ''

  return `const schema = schemaScript({
  type: PageType.Category,
  trail: [
    { name: 'Home', url: pageUrl('/') },
    { name: 'Blog', url: PAGE_URL },
  ],
  props: {
    url: PAGE_URL,
    name: ${qs(metaTitle)}${descPart},
  },
})`
}

// ── Content transformer ──────────────────────────────────────────────────────

function transformContent(content: string, schemaSection: string, pagePath: string): string {
  let result = content

  // 1. Add schema import after metadata import
  result = result.replace(
    "import type { Metadata } from 'next'\n",
    "import type { Metadata } from 'next'\nimport { schemaScript, PageType, pageUrl } from '@/lib/schema'\n"
  )

  // 2. Remove SITE_URL constant line
  result = result.replace(/\nconst SITE_URL = 'https:\/\/compressimg\.pro'\n/, '\n')

  // 3. Remove OG_IMAGE constant line
  result = result.replace(/\nconst OG_IMAGE = `\$\{SITE_URL\}\/og-image\.png`\n/, '\n')

  // 4. Replace PAGE_URL assignment (template literal → pageUrl call)
  result = result.replace(
    /const PAGE_URL = `\$\{SITE_URL\}\/[^`]+`/,
    `const PAGE_URL = pageUrl('${pagePath}')`
  )

  // 5. Replace all OG_IMAGE variable references with literal string
  result = result.replace(/\bOG_IMAGE\b/g, OG_IMAGE_LITERAL)

  // 6. Normalize multiple blank lines to one
  result = result.replace(/\n{3,}/g, '\n\n')

  // 7. Replace everything from '\nconst jsonLd = ' to end with new schema + layout
  const jsonLdStart = result.indexOf('\nconst jsonLd = ')
  if (jsonLdStart === -1) throw new Error('jsonLd not found after transformations')

  const newTail = [
    '',
    schemaSection,
    '',
    'export default function Layout({ children }: { children: React.ReactNode }) {',
    '  return (',
    '    <>',
    '      {schema && (',
    '        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />',
    '      )}',
    '      {children}',
    '    </>',
    '  )',
    '}',
    '',
  ].join('\n')

  return result.slice(0, jsonLdStart) + newTail
}

// ── Per-file migration ───────────────────────────────────────────────────────

function migrateLayout(filePath: string, content: string): string {
  const normalized = filePath.replace(/\\/g, '/')
  const isBlogIndex = normalized.endsWith('blog/layout.tsx')
  const isBlogPost = !isBlogIndex && normalized.includes('/blog/')

  const pagePath = extractPagePath(content)
  const metaTitle = extractMetaTitle(content)
  const metaDescription = extractMetaDescription(content)
  const breadcrumbs = extractBreadcrumbNames(content)
  const faq = extractFaqs(content)

  let schemaSection: string

  if (isBlogIndex) {
    schemaSection = buildCategorySchema(metaTitle, metaDescription)
  } else if (isBlogPost) {
    const blogData = extractBlogData(content)
    schemaSection = buildBlogPostSchema(metaTitle, breadcrumbs, blogData, faq)
  } else {
    schemaSection = buildToolGenericSchema(pagePath, metaTitle, metaDescription, breadcrumbs, faq)
  }

  return transformContent(content, schemaSection, pagePath)
}

// ── Main ─────────────────────────────────────────────────────────────────────

const rawOutput = execSync('grep -rl "JSON.stringify(jsonLd)" src/app/ --include="layout.tsx"', {
  encoding: 'utf-8',
  cwd: process.cwd(),
})

const layoutFiles = rawOutput.split('\n').filter(Boolean).sort()
let successCount = 0
let errorCount = 0

for (const filePath of layoutFiles) {
  try {
    const content = readFileSync(filePath, 'utf-8')
    const newContent = migrateLayout(filePath, content)
    writeFileSync(filePath, newContent, 'utf-8')
    console.log(`✓ ${filePath}`)
    successCount++
  } catch (err) {
    console.error(`✗ ${filePath}: ${(err as Error).message}`)
    errorCount++
  }
}

console.log(`\nDone: ${successCount} migrated, ${errorCount} errors`)
