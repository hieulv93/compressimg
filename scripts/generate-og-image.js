/**
 * Generates public/og-image.png (1200x630) — placeholder with CompressImg branding.
 * Run: node scripts/generate-og-image.js
 * Replace with a proper designed image before launch.
 */
const zlib = require('zlib')
const fs = require('fs')
const path = require('path')

const WIDTH = 1200
const HEIGHT = 630

// Brand colors
const BG_R = 37, BG_G = 99, BG_B = 235   // primary #2563EB
const FG_R = 255, FG_G = 255, FG_B = 255  // white

// CRC32 lookup table
const crcTable = (() => {
  const t = new Uint32Array(256)
  for (let i = 0; i < 256; i++) {
    let c = i
    for (let j = 0; j < 8; j++) c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1)
    t[i] = c
  }
  return t
})()

function crc32(buf) {
  let c = 0xFFFFFFFF
  for (let i = 0; i < buf.length; i++) c = crcTable[(c ^ buf[i]) & 0xFF] ^ (c >>> 8)
  return (c ^ 0xFFFFFFFF) >>> 0
}

function makeChunk(type, data) {
  const typeBytes = Buffer.from(type, 'ascii')
  const lenBuf = Buffer.alloc(4)
  lenBuf.writeUInt32BE(data.length)
  const crcInput = Buffer.concat([typeBytes, data])
  const crcBuf = Buffer.alloc(4)
  crcBuf.writeUInt32BE(crc32(crcInput))
  return Buffer.concat([lenBuf, typeBytes, data, crcBuf])
}

function generatePNG(width, height) {
  // Build scanlines: 1 filter byte (0 = None) + RGB pixels per row
  const rowSize = 1 + width * 3
  const raw = Buffer.alloc(height * rowSize)

  for (let y = 0; y < height; y++) {
    const off = y * rowSize
    raw[off] = 0 // filter: None

    // Background color
    let r = BG_R, g = BG_G, b = BG_B

    // White border (20px)
    const border = 20
    if (y < border || y >= height - border) { r = FG_R; g = FG_G; b = FG_B }

    for (let x = 0; x < width; x++) {
      let pr = r, pg = g, pb = b
      if (x < border || x >= width - border) { pr = FG_R; pg = FG_G; pb = FG_B }

      // Lighter horizontal stripe in center (decorative)
      if (y > height / 2 - 4 && y < height / 2 + 4 && x >= border && x < width - border) {
        pr = 96; pg = 165; pb = 250 // #60A5FA lighter blue
      }

      raw[off + 1 + x * 3] = pr
      raw[off + 2 + x * 3] = pg
      raw[off + 3 + x * 3] = pb
    }
  }

  const compressed = zlib.deflateSync(raw)

  const ihdrData = Buffer.alloc(13)
  ihdrData.writeUInt32BE(width, 0)
  ihdrData.writeUInt32BE(height, 4)
  ihdrData[8] = 8  // bit depth
  ihdrData[9] = 2  // color type: RGB
  // compression=0, filter=0, interlace=0 already zero

  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])
  const ihdr = makeChunk('IHDR', ihdrData)
  const idat = makeChunk('IDAT', compressed)
  const iend = makeChunk('IEND', Buffer.alloc(0))

  return Buffer.concat([sig, ihdr, idat, iend])
}

const outPath = path.join(__dirname, '../public/og-image.png')
fs.mkdirSync(path.dirname(outPath), { recursive: true })
fs.writeFileSync(outPath, generatePNG(WIDTH, HEIGHT))
console.log(`✅ og-image.png generated (${WIDTH}×${HEIGHT}) → ${outPath}`)
console.log('⚠️  This is a placeholder. Replace with a proper designed og-image before launch.')
