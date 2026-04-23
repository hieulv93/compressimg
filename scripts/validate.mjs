// Persistent validation script — run before every deploy
// Usage: node scripts/validate.mjs
import { readFileSync, existsSync } from 'fs'

const GREEN = '\x1b[32m'
const RED = '\x1b[31m'
const RESET = '\x1b[0m'
let passed = 0
let failed = 0

function ok(label) {
  console.log(`${GREEN}✓${RESET} ${label}`)
  passed++
}
function fail(label, detail = '') {
  console.log(`${RED}✗${RESET} ${label}${detail ? ' — ' + detail : ''}`)
  failed++
}
function check(label, condition, detail = '') {
  condition ? ok(label) : fail(label, detail)
}
function hasPattern(filepath, pattern) {
  if (!existsSync(filepath)) return false
  return readFileSync(filepath, 'utf-8').includes(pattern)
}
function countWords(filepath) {
  if (!existsSync(filepath)) return 0
  const text = readFileSync(filepath, 'utf-8')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[{}`]/g, ' ')
    .replace(/&apos;|&amp;|&quot;/g, ' ')
  return text.split(/\s+/).filter((w) => w.length > 2).length
}

console.log('\n📋 Validate — compressimg.pro\n')

// ─── File existence ───────────────────────────────────────────────
console.log('── Files ──')
const required = [
  'src/lib/compress.ts',
  'src/lib/resize.ts',
  'src/lib/convert.ts',
  'src/lib/analytics.ts',
  'src/lib/utils.ts',
  'src/app/compress-image/page.tsx',
  'src/app/compress-image/layout.tsx',
  'src/app/resize-image/page.tsx',
  'src/app/resize-image/layout.tsx',
  'src/app/convert-image/page.tsx',
  'src/app/convert-image/layout.tsx',
  'src/components/tool/ContentSection.tsx',
  'src/components/tool/ResizeContentSection.tsx',
  'src/components/tool/ConvertContentSection.tsx',
  'src/components/tool/FormatSelector.tsx',
  'src/components/layout/Header.tsx',
  'src/components/layout/Footer.tsx',
  'public/sitemap-0.xml',
  'public/ads.txt',
]
for (const f of required) check(`exists: ${f}`, existsSync(f))

// ─── Word count ───────────────────────────────────────────────────
console.log('\n── Content word count (≥1000) ──')
const contentFiles = [
  ['src/components/tool/ContentSection.tsx', 'compress'],
  ['src/components/tool/ResizeContentSection.tsx', 'resize'],
  ['src/components/tool/ConvertContentSection.tsx', 'convert'],
]
for (const [fp, name] of contentFiles) {
  const n = countWords(fp)
  check(`${name}: ${n} words`, n >= 1000, `need ≥1000`)
}

// ─── SEO metadata ─────────────────────────────────────────────────
console.log('\n── SEO: canonical + JSON-LD ──')
for (const [name, fp] of [
  ['compress', 'src/app/compress-image/layout.tsx'],
  ['resize', 'src/app/resize-image/layout.tsx'],
  ['convert', 'src/app/convert-image/layout.tsx'],
]) {
  check(`${name}: canonical`, hasPattern(fp, 'canonical'))
  check(`${name}: FAQPage`, hasPattern(fp, 'FAQPage'))
  check(`${name}: WebApplication`, hasPattern(fp, 'WebApplication'))
}

// ─── Analytics events ─────────────────────────────────────────────
console.log('\n── Analytics events ──')
const analyticsFile = 'src/lib/analytics.ts'
for (const event of [
  'imageCompressed',
  'imageResized',
  'imageConverted',
  'resizeError',
  'convertError',
]) {
  check(`analytics.${event}`, hasPattern(analyticsFile, event))
}

// ─── Common pitfalls (lessons from previous builds) ───────────────
console.log('\n── Pitfall checks ──')
// processingLabel must be set on resize + convert (not default "Compressing...")
check('resize: processingLabel set', hasPattern('src/app/resize-image/page.tsx', 'processingLabel'))
check(
  'convert: processingLabel set',
  hasPattern('src/app/convert-image/page.tsx', 'processingLabel')
)
// ProgressBar color override (no quality slider on resize/convert)
check('resize: ProgressBar color prop', hasPattern('src/app/resize-image/page.tsx', 'color='))
check('convert: ProgressBar color prop', hasPattern('src/app/convert-image/page.tsx', 'color='))
// generateFilename prefix
check(
  "resize: uses 'resized' prefix",
  hasPattern('src/components/tool/ResizeResultCard.tsx', "'resized'")
)
check(
  "convert: uses 'converted' prefix",
  hasPattern('src/components/tool/ConvertResultCard.tsx', "'converted'")
)
// AdSense lazyOnload
check('layout: AdSense/GA4 lazyOnload', hasPattern('src/app/layout.tsx', 'lazyOnload'))
// setTimeout yield before canvas ops
check('resize: setTimeout yield', hasPattern('src/app/resize-image/page.tsx', 'setTimeout'))
check('convert: setTimeout yield', hasPattern('src/app/convert-image/page.tsx', 'setTimeout'))
// AdSlot placeholder returns null
check('AdSlot: null when placeholder', hasPattern('src/components/ads/AdSlot.tsx', 'return null'))

// ─── Sitemap ──────────────────────────────────────────────────────
console.log('\n── Sitemap ──')
for (const route of ['/compress-image/', '/resize-image/', '/convert-image/']) {
  check(`sitemap: ${route}`, hasPattern('public/sitemap-0.xml', route))
}

// ─── Summary ──────────────────────────────────────────────────────
const total = passed + failed
console.log(`\n${'─'.repeat(44)}`)
console.log(
  `Total ${total} | ${GREEN}Pass ${passed}${RESET} | ${failed > 0 ? RED : GREEN}Fail ${failed}${RESET}`
)
if (failed === 0) console.log(`\n${GREEN}✅ All checks passed — safe to deploy${RESET}\n`)
else console.log(`\n${RED}❌ ${failed} check(s) failed — fix before deploying${RESET}\n`)

process.exit(failed > 0 ? 1 : 0)
