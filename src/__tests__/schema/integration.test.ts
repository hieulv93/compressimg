/**
 * Integration suite — requires `next build` to have run first (reads from out/).
 * Run separately: npx vitest run --config vitest.integration.config.ts
 * N2: kept separate from unit/snapshot suite so unit tests never fail with ENOENT.
 */
import { describe, it, expect, beforeAll } from 'vitest'
import { readFileSync, existsSync } from 'fs'
import { join } from 'path'

const OUT_DIR = join(process.cwd(), 'out')

beforeAll(() => {
  if (!existsSync(OUT_DIR)) {
    throw new Error(
      '[schema integration] out/ directory not found — run `next build` before this suite.'
    )
  }
})

function readPage(relPath: string): string {
  const full = join(OUT_DIR, relPath)
  if (!existsSync(full)) throw new Error(`[schema integration] Page not found: ${full}`)
  return readFileSync(full, 'utf-8')
}

function extractJsonLdScripts(html: string): string[] {
  const matches: string[] = []
  const re = /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi
  let m: RegExpExecArray | null
  while ((m = re.exec(html)) !== null) {
    matches.push(m[1])
  }
  return matches
}

const PAGES = [
  { label: 'Homepage', path: 'index.html' },
  { label: 'compress-image', path: 'compress-image/index.html' },
  { label: 'compress-image-to-100kb', path: 'compress-image-to-100kb/index.html' },
]

describe('JSON-LD integration', () => {
  for (const { label, path } of PAGES) {
    describe(label, () => {
      let html: string

      beforeAll(() => {
        html = readPage(path)
      })

      it('has exactly one application/ld+json script', () => {
        const scripts = extractJsonLdScripts(html)
        expect(scripts).toHaveLength(1)
      })

      it('script content is valid JSON', () => {
        const [content] = extractJsonLdScripts(html)
        expect(() => JSON.parse(content)).not.toThrow()
      })

      it('@graph has at least 4 nodes', () => {
        const [content] = extractJsonLdScripts(html)
        const parsed = JSON.parse(content)
        expect(parsed['@graph'].length).toBeGreaterThanOrEqual(4)
      })

      it('contains no SearchAction', () => {
        const [content] = extractJsonLdScripts(html)
        expect(content).not.toContain('SearchAction')
      })

      it('contains no HowTo', () => {
        const [content] = extractJsonLdScripts(html)
        expect(content).not.toContain('HowTo')
      })

      it('contains no aggregateRating', () => {
        const [content] = extractJsonLdScripts(html)
        expect(content).not.toContain('aggregateRating')
      })

      it('serialized content has no unescaped <', () => {
        const [content] = extractJsonLdScripts(html)
        // The script tag itself has </ at the end — check the JSON value, not the tag wrapper
        const parsed = JSON.parse(content)
        const reSerialised = JSON.stringify(parsed)
        expect(reSerialised).not.toMatch(/<(?!\/)/)
      })
    })
  }
})

// CI-F3 regression: blog/layout.tsx must not inject schema into blog post pages
describe('Blog JSON-LD isolation (CI-F3 regression)', () => {
  describe('/blog/ index', () => {
    let html: string
    beforeAll(() => {
      html = readPage('blog/index.html')
    })

    it('has exactly one JSON-LD block', () => {
      expect(extractJsonLdScripts(html)).toHaveLength(1)
    })

    it('contains CollectionPage', () => {
      const [content] = extractJsonLdScripts(html)
      expect(content).toContain('CollectionPage')
    })

    it('does not contain BlogPosting', () => {
      const [content] = extractJsonLdScripts(html)
      expect(content).not.toContain('BlogPosting')
    })
  })

  describe('/blog/jpg-vs-jpeg/', () => {
    let html: string
    beforeAll(() => {
      html = readPage('blog/jpg-vs-jpeg/index.html')
    })

    it('has exactly one JSON-LD block', () => {
      expect(extractJsonLdScripts(html)).toHaveLength(1)
    })

    it('contains BlogPosting', () => {
      const [content] = extractJsonLdScripts(html)
      expect(content).toContain('BlogPosting')
    })

    it('does not contain CollectionPage', () => {
      const [content] = extractJsonLdScripts(html)
      expect(content).not.toContain('CollectionPage')
    })
  })

  it('no blog post page has more than one JSON-LD block', () => {
    const slugs = ['jpg-vs-jpeg', 'png-vs-jpg', 'avif-vs-webp', 'what-is-webp-format']
    for (const slug of slugs) {
      const html = readPage(`blog/${slug}/index.html`)
      const scripts = extractJsonLdScripts(html)
      expect(scripts).toHaveLength(1)
    }
  })
})
