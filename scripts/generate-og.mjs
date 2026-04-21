import sharp from 'sharp'
import { writeFileSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT = path.join(__dirname, '../public/og-image.png')

const W = 1200
const H = 630

const svg = `
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#EFF6FF"/>
      <stop offset="100%" stop-color="#FFFFFF"/>
    </linearGradient>
    <linearGradient id="btnGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#2563EB"/>
      <stop offset="100%" stop-color="#3B82F6"/>
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="130%">
      <feDropShadow dx="0" dy="4" stdDeviation="12" flood-color="#2563EB" flood-opacity="0.15"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="${W}" height="${H}" fill="url(#bg)"/>

  <!-- Decorative circles top-right -->
  <circle cx="1100" cy="-40" r="220" fill="#DBEAFE" opacity="0.5"/>
  <circle cx="1180" cy="80" r="120" fill="#BFDBFE" opacity="0.4"/>

  <!-- Decorative circles bottom-left -->
  <circle cx="60" cy="590" r="150" fill="#DBEAFE" opacity="0.35"/>

  <!-- Top accent bar -->
  <rect x="0" y="0" width="${W}" height="6" fill="url(#btnGrad)" rx="0"/>

  <!-- LEFT CONTENT — starts at x=80 -->

  <!-- Domain badge -->
  <rect x="80" y="60" width="220" height="36" rx="18" fill="#EFF6FF" stroke="#BFDBFE" stroke-width="1.5"/>
  <text x="190" y="83" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="600" fill="#2563EB" text-anchor="middle" letter-spacing="0.5">compressimg.pro</text>

  <!-- Main title line 1 -->
  <text x="80" y="175" font-family="system-ui, -apple-system, sans-serif" font-size="68" font-weight="800" fill="#111827" letter-spacing="-1">Compress Image</text>

  <!-- Main title line 2 — blue -->
  <text x="80" y="258" font-family="system-ui, -apple-system, sans-serif" font-size="68" font-weight="800" fill="#2563EB" letter-spacing="-1">Online Free</text>

  <!-- Divider -->
  <rect x="80" y="285" width="60" height="4" rx="2" fill="#2563EB"/>

  <!-- Subtitle -->
  <text x="80" y="340" font-family="system-ui, -apple-system, sans-serif" font-size="26" fill="#374151" font-weight="400">Reduce JPG, PNG, WebP size up to 90%</text>
  <text x="80" y="378" font-family="system-ui, -apple-system, sans-serif" font-size="26" fill="#374151" font-weight="400">without losing quality.</text>

  <!-- Feature pills -->
  <rect x="80" y="420" width="168" height="38" rx="19" fill="#F0FDF4" stroke="#BBF7D0" stroke-width="1.5"/>
  <text x="164" y="444" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="600" fill="#16A34A" text-anchor="middle">✓ No uploads</text>

  <rect x="264" y="420" width="188" height="38" rx="19" fill="#F0FDF4" stroke="#BBF7D0" stroke-width="1.5"/>
  <text x="358" y="444" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="600" fill="#16A34A" text-anchor="middle">✓ 100% browser</text>

  <rect x="468" y="420" width="148" height="38" rx="19" fill="#F0FDF4" stroke="#BBF7D0" stroke-width="1.5"/>
  <text x="542" y="444" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="600" fill="#16A34A" text-anchor="middle">✓ Always free</text>

  <!-- RIGHT CONTENT — icon card at x=820 -->
  <g filter="url(#shadow)">
    <rect x="820" y="120" width="300" height="370" rx="24" fill="white"/>
  </g>

  <!-- Upload icon circle -->
  <circle cx="970" cy="255" r="64" fill="#EFF6FF"/>
  <circle cx="970" cy="255" r="52" fill="#2563EB"/>
  <!-- Upload arrow -->
  <line x1="970" y1="230" x2="970" y2="274" stroke="white" stroke-width="5" stroke-linecap="round"/>
  <polyline points="950,248 970,228 990,248" fill="none" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
  <!-- Base line -->
  <line x1="950" y1="278" x2="990" y2="278" stroke="white" stroke-width="5" stroke-linecap="round"/>

  <!-- Size comparison inside card -->
  <text x="970" y="358" font-family="system-ui, -apple-system, sans-serif" font-size="16" fill="#6B7280" text-anchor="middle" font-weight="500">Original</text>
  <text x="970" y="385" font-family="system-ui, -apple-system, sans-serif" font-size="28" fill="#111827" text-anchor="middle" font-weight="700">5.2 MB</text>

  <!-- Arrow down -->
  <text x="970" y="420" font-family="system-ui, -apple-system, sans-serif" font-size="22" fill="#2563EB" text-anchor="middle">↓ 90% smaller</text>

  <text x="970" y="455" font-family="system-ui, -apple-system, sans-serif" font-size="28" fill="#16A34A" text-anchor="middle" font-weight="700">480 KB</text>

  <!-- Bottom bar -->
  <rect x="0" y="570" width="${W}" height="60" fill="#1E3A8A" opacity="0.04"/>
  <text x="80" y="605" font-family="system-ui, -apple-system, sans-serif" font-size="18" fill="#6B7280" font-weight="500">Free · Private · No sign-up required</text>
  <text x="${W - 80}" y="605" font-family="system-ui, -apple-system, sans-serif" font-size="18" fill="#2563EB" font-weight="600" text-anchor="end">compressimg.pro</text>
</svg>
`

const svgBuffer = Buffer.from(svg)

await sharp(svgBuffer)
  .png()
  .toFile(OUT)

console.log(`✅ og-image.png generated → ${OUT}`)
