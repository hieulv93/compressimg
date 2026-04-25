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
  'src/lib/crop.ts',
  'src/lib/analytics.ts',
  'src/lib/utils.ts',
  'src/app/compress-image/page.tsx',
  'src/app/compress-image/layout.tsx',
  'src/app/resize-image/page.tsx',
  'src/app/resize-image/layout.tsx',
  'src/app/convert-image/page.tsx',
  'src/app/convert-image/layout.tsx',
  'src/app/crop-image/page.tsx',
  'src/app/crop-image/layout.tsx',
  'src/components/tool/ContentSection.tsx',
  'src/components/tool/ResizeContentSection.tsx',
  'src/components/tool/ConvertContentSection.tsx',
  'src/components/tool/CropContentSection.tsx',
  'src/components/tool/FormatSelector.tsx',
  'src/hooks/useCropState.ts',
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
  ['src/components/tool/CropContentSection.tsx', 'crop'],
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
  ['crop', 'src/app/crop-image/layout.tsx'],
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
  'imageCropped',
  'resizeError',
  'convertError',
  'cropError',
]) {
  check(`analytics.${event}`, hasPattern(analyticsFile, event))
}

// ─── Common pitfalls (lessons from previous builds) ───────────────
console.log('\n── Pitfall checks ──')
// processingLabel must be set on resize + convert + crop (not default "Compressing...")
check('resize: processingLabel set', hasPattern('src/app/resize-image/page.tsx', 'processingLabel'))
check(
  'convert: processingLabel set',
  hasPattern('src/app/convert-image/page.tsx', 'processingLabel')
)
check('crop: processingLabel set', hasPattern('src/app/crop-image/page.tsx', 'processingLabel'))
// ProgressBar color override (no quality slider on resize/convert/crop)
check('resize: ProgressBar color prop', hasPattern('src/app/resize-image/page.tsx', 'color='))
check('convert: ProgressBar color prop', hasPattern('src/app/convert-image/page.tsx', 'color='))
check('crop: ProgressBar color prop', hasPattern('src/app/crop-image/page.tsx', 'color='))
// generateFilename prefix
check(
  "resize: uses 'resized' prefix",
  hasPattern('src/components/tool/ResizeResultCard.tsx', "'resized'")
)
check(
  "convert: uses 'converted' prefix",
  hasPattern('src/components/tool/ConvertResultCard.tsx', "'converted'")
)
check(
  "crop: uses 'cropped' prefix",
  hasPattern('src/components/tool/CropResultCard.tsx', "'cropped'")
)
// AdSense lazyOnload
check('layout: AdSense/GA4 lazyOnload', hasPattern('src/app/layout.tsx', 'lazyOnload'))
// setTimeout yield before canvas ops
check('resize: setTimeout yield', hasPattern('src/app/resize-image/page.tsx', 'setTimeout'))
check('convert: setTimeout yield', hasPattern('src/app/convert-image/page.tsx', 'setTimeout'))
check('crop: setTimeout yield', hasPattern('src/app/crop-image/page.tsx', 'setTimeout'))
// AdSlot placeholder returns null
check('AdSlot: null when placeholder', hasPattern('src/components/ads/AdSlot.tsx', 'return null'))
// Crop-specific
check('crop: useCropState hook used', hasPattern('src/app/crop-image/page.tsx', 'useCropState'))
check('crop: CropBox component used', hasPattern('src/app/crop-image/page.tsx', 'CropBox'))
check('crop: CropPresets component used', hasPattern('src/app/crop-image/page.tsx', 'CropPresets'))
check(
  'crop: revokeCropPreview on reset',
  hasPattern('src/app/crop-image/page.tsx', 'revokeCropPreview')
)

// ─── Long-tail pages ──────────────────────────────────────────────
console.log('\n── Long-tail pages ──')
const longtailPages = [
  ['src/app/compress-jpg-online/layout.tsx', 'compress-jpg-online'],
  ['src/app/compress-png-online/layout.tsx', 'compress-png-online'],
  ['src/app/compress-image-to-100kb/layout.tsx', 'compress-image-to-100kb'],
  ['src/app/compress-image-for-email/layout.tsx', 'compress-image-for-email'],
  ['src/app/jpg-to-png/layout.tsx', 'jpg-to-png'],
  ['src/app/png-to-jpg/layout.tsx', 'png-to-jpg'],
  ['src/app/webp-to-jpg/layout.tsx', 'webp-to-jpg'],
  ['src/app/compress-image-for-whatsapp/layout.tsx', 'compress-image-for-whatsapp'],
  ['src/app/jpg-to-webp/layout.tsx', 'jpg-to-webp'],
  ['src/app/webp-to-png/layout.tsx', 'webp-to-png'],
  ['src/app/compress-image-for-instagram/layout.tsx', 'compress-image-for-instagram'],
  ['src/app/png-to-webp/layout.tsx', 'png-to-webp'],
  ['src/app/compress-image-to-200kb/layout.tsx', 'compress-image-to-200kb'],
  ['src/app/compress-image-for-facebook/layout.tsx', 'compress-image-for-facebook'],
  ['src/app/compress-image-for-twitter/layout.tsx', 'compress-image-for-twitter'],
  ['src/app/compress-image-to-50kb/layout.tsx', 'compress-image-to-50kb'],
  ['src/app/compress-image-for-linkedin/layout.tsx', 'compress-image-for-linkedin'],
  ['src/app/heic-to-jpg/layout.tsx', 'heic-to-jpg'],
]
for (const [fp, name] of longtailPages) {
  check(`exists: ${name}/layout.tsx`, existsSync(fp))
  check(`exists: ${name}/page.tsx`, existsSync(fp.replace('layout', 'page')))
  check(`${name}: canonical`, hasPattern(fp, 'canonical'))
  check(`${name}: FAQPage`, hasPattern(fp, 'FAQPage'))
  check(`${name}: WebApplication`, hasPattern(fp, 'WebApplication'))
}

// ─── Long-tail content sections ───────────────────────────────────
console.log('\n── Long-tail content word count (≥1000) ──')
const longtailContent = [
  ['src/components/tool/JpgContentSection.tsx', 'compress-jpg'],
  ['src/components/tool/PngContentSection.tsx', 'compress-png'],
  ['src/components/tool/CompressTo100KbContentSection.tsx', 'compress-to-100kb'],
  ['src/components/tool/CompressForEmailContentSection.tsx', 'compress-for-email'],
  ['src/components/tool/JpgToPngContentSection.tsx', 'jpg-to-png'],
  ['src/components/tool/PngToJpgContentSection.tsx', 'png-to-jpg'],
  ['src/components/tool/WebpToJpgContentSection.tsx', 'webp-to-jpg'],
  ['src/components/tool/CompressForWhatsAppContentSection.tsx', 'compress-for-whatsapp'],
  ['src/components/tool/JpgToWebpContentSection.tsx', 'jpg-to-webp'],
  ['src/components/tool/WebpToPngContentSection.tsx', 'webp-to-png'],
  ['src/components/tool/CompressForInstagramContentSection.tsx', 'compress-for-instagram'],
  ['src/components/tool/PngToWebpContentSection.tsx', 'png-to-webp'],
  ['src/components/tool/CompressTo200KbContentSection.tsx', 'compress-to-200kb'],
  ['src/components/tool/CompressForFacebookContentSection.tsx', 'compress-for-facebook'],
  ['src/components/tool/CompressForTwitterContentSection.tsx', 'compress-for-twitter'],
  ['src/components/tool/CompressTo50KbContentSection.tsx', 'compress-to-50kb'],
  ['src/components/tool/CompressForLinkedInContentSection.tsx', 'compress-for-linkedin'],
  ['src/components/tool/HeicToJpgContentSection.tsx', 'heic-to-jpg'],
]
for (const [fp, name] of longtailContent) {
  const n = countWords(fp)
  check(`${name}: ${n} words`, n >= 1000, `need ≥1000`)
}

// ─── Internal links ───────────────────────────────────────────────
console.log('\n── Internal links (Related Tools) ──')
check(
  'ContentSection: has Related Tools',
  hasPattern('src/components/tool/ContentSection.tsx', 'More Free Image Tools')
)
check(
  'ResizeContentSection: has Related Tools',
  hasPattern('src/components/tool/ResizeContentSection.tsx', 'More Free Image Tools')
)
check(
  'ConvertContentSection: has Related Tools',
  hasPattern('src/components/tool/ConvertContentSection.tsx', 'More Free Image Tools')
)
check(
  'CropContentSection: has Related Tools',
  hasPattern('src/components/tool/CropContentSection.tsx', 'More Free Image Tools')
)

// ─── Sitemap ──────────────────────────────────────────────────────
console.log('\n── Sitemap ──')
for (const route of [
  '/compress-image/',
  '/resize-image/',
  '/convert-image/',
  '/crop-image/',
  '/compress-jpg-online/',
  '/compress-png-online/',
  '/compress-image-to-100kb/',
  '/compress-image-for-email/',
  '/jpg-to-png/',
  '/png-to-jpg/',
  '/webp-to-jpg/',
  '/compress-image-for-whatsapp/',
  '/jpg-to-webp/',
  '/webp-to-png/',
  '/compress-image-for-instagram/',
  '/png-to-webp/',
  '/compress-image-to-200kb/',
  '/compress-image-for-facebook/',
  '/compress-image-for-twitter/',
  '/compress-image-to-50kb/',
  '/compress-image-for-linkedin/',
  '/heic-to-jpg/',
]) {
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
