import { describe, it, expect, vi, beforeAll } from 'vitest'
import { compressToTarget, QualityExhaustedError } from '@/lib/compress-target'

// Deterministic mock: output size = file.size × quality × 0.7
// First pass (maxSizeMB set): returns 10% overshoot if reachable, else minimum quality result
vi.mock('browser-image-compression', () => ({
  default: vi.fn(
    async (
      file: Blob,
      opts: { maxSizeMB?: number; initialQuality?: number; fileType?: string }
    ) => {
      const sizeAtQuality = (q: number) => Math.round(file.size * q * 0.7)
      let resultSize: number
      if (opts.maxSizeMB !== undefined) {
        const maxBytes = Math.round(opts.maxSizeMB * 1_048_576)
        const minPossible = sizeAtQuality(0.3)
        resultSize =
          minPossible <= maxBytes
            ? Math.round(maxBytes * 1.1) // slight overshoot to drive binary search
            : minPossible // can't reach target even at min quality
      } else {
        resultSize = sizeAtQuality(opts.initialQuality ?? 0.8)
      }
      const type = opts.fileType ?? (file as File).type ?? 'image/jpeg'
      return new Blob([new Uint8Array(Math.max(1, resultSize))], { type })
    }
  ),
}))

vi.mock('@/lib/heic', () => ({
  isHeicFile: () => false,
  convertHeicToJpeg: vi.fn(),
}))

beforeAll(() => {
  Object.defineProperty(URL, 'createObjectURL', {
    value: vi.fn(() => 'blob:mock-url'),
    writable: true,
    configurable: true,
  })
  Object.defineProperty(URL, 'revokeObjectURL', {
    value: vi.fn(),
    writable: true,
    configurable: true,
  })
})

function makeFile(sizeKb: number, type: string, name: string): File {
  return new File([new Uint8Array(sizeKb * 1024)], name, { type })
}

const NEVER_ABORT = () => false
const NO_PROGRESS = () => {}

// ───────────────────────────────────────────────────────────────
// IMP-10: Fixture matrix 50 KB / 100 KB / 500 KB × Photo / Graphic / Transparent PNG
// Target: 80 KB
//   50 KB input  → edge case (file ≤ target)  → returns compressedSize = 50 KB ≤ 80 KB ✓
//   100 KB input → binary search succeeds     → returns compressedSize ≤ 80 KB ✓
//   500 KB input → quality exhausted          → throws QualityExhaustedError (no output)
// ───────────────────────────────────────────────────────────────
const TARGET_KB = 80
const TARGET_BYTES = TARGET_KB * 1024

const fixtures = [
  { label: 'Photo JPEG — 50 KB', type: 'image/jpeg', sizeKb: 50, name: 'photo.jpg' },
  { label: 'Photo JPEG — 100 KB', type: 'image/jpeg', sizeKb: 100, name: 'photo.jpg' },
  { label: 'Photo JPEG — 500 KB', type: 'image/jpeg', sizeKb: 500, name: 'photo.jpg' },
  { label: 'Graphic PNG — 50 KB', type: 'image/png', sizeKb: 50, name: 'graphic.png' },
  { label: 'Graphic PNG — 100 KB', type: 'image/png', sizeKb: 100, name: 'graphic.png' },
  { label: 'Graphic PNG — 500 KB', type: 'image/png', sizeKb: 500, name: 'graphic.png' },
  { label: 'Transparent PNG — 50 KB', type: 'image/png', sizeKb: 50, name: 'transparent.png' },
  { label: 'Transparent PNG — 100 KB', type: 'image/png', sizeKb: 100, name: 'transparent.png' },
  { label: 'Transparent PNG — 500 KB', type: 'image/png', sizeKb: 500, name: 'transparent.png' },
]

describe('IMP-10: compressToTarget size invariant', () => {
  for (const fx of fixtures) {
    it(`[${fx.label}] result ≤ ${TARGET_KB} KB or throws QualityExhaustedError`, async () => {
      const file = makeFile(fx.sizeKb, fx.type, fx.name)

      try {
        const result = await compressToTarget(file, TARGET_BYTES, NEVER_ABORT, NO_PROGRESS)
        // Core invariant: output never exceeds target on the success path
        expect(result.compressedSize).toBeLessThanOrEqual(TARGET_BYTES)
        expect(result.status).toBe('success')
      } catch (e) {
        if (e instanceof QualityExhaustedError) {
          // Acceptable: quality was exhausted, no over-target result was returned
          return
        }
        throw e
      }
    })
  }
})
