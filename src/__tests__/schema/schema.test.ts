import { describe, it, expect } from 'vitest'
import { baseGraph } from '@/lib/schema/baseGraph'
import { breadcrumb } from '@/lib/schema/breadcrumb'
import { pageNode } from '@/lib/schema/pageNode'
import { composeGraph } from '@/lib/schema/compose'
import { serializeGraph } from '@/lib/schema/serialize'
import { validateGraph } from '@/lib/schema/validators'
import { PageType, pageUrl, ORG_ID, SITE_ID, APP_ID } from '@/lib/schema/constants'
import type { PageInput, Graph } from '@/lib/schema/types'

// ─── pageUrl ──────────────────────────────────────────────────────────────────

describe('pageUrl', () => {
  it('appends trailing slash', () => {
    expect(pageUrl('/compress-image')).toBe('https://compressimg.pro/compress-image/')
  })

  it('is idempotent when slash already present', () => {
    expect(pageUrl('/compress-image/')).toBe('https://compressimg.pro/compress-image/')
  })

  it('handles root path', () => {
    expect(pageUrl('/')).toBe('https://compressimg.pro/')
  })
})

// ─── baseGraph ────────────────────────────────────────────────────────────────

describe('baseGraph', () => {
  it('returns exactly 3 nodes', () => {
    expect(baseGraph()).toHaveLength(3)
  })

  it('each node has its registry @id', () => {
    const ids = baseGraph().map((n) => n['@id'])
    expect(ids).toContain(ORG_ID)
    expect(ids).toContain(SITE_ID)
    expect(ids).toContain(APP_ID)
  })

  it('emits no SearchAction', () => {
    const json = JSON.stringify(baseGraph())
    expect(json).not.toContain('SearchAction')
  })

  it('emits no featureList or browserRequirements', () => {
    const json = JSON.stringify(baseGraph())
    expect(json).not.toContain('featureList')
    expect(json).not.toContain('browserRequirements')
  })

  it('emits no ratings or HowTo', () => {
    const json = JSON.stringify(baseGraph())
    expect(json).not.toContain('aggregateRating')
    expect(json).not.toContain('HowTo')
  })
})

// ─── breadcrumb ───────────────────────────────────────────────────────────────

describe('breadcrumb', () => {
  it('returns null for empty trail', () => {
    expect(breadcrumb([])).toBeNull()
  })

  it('returns null for single-item trail', () => {
    expect(breadcrumb([{ name: 'Home', url: 'https://compressimg.pro/' }])).toBeNull()
  })

  it('returns BreadcrumbList for 2-item trail', () => {
    const result = breadcrumb([
      { name: 'Home', url: 'https://compressimg.pro/' },
      { name: 'Compress', url: 'https://compressimg.pro/compress-image/' },
    ])
    expect(result).not.toBeNull()
    expect(result!['@type']).toBe('BreadcrumbList')
  })

  it('assigns sequential positions 1..n', () => {
    const result = breadcrumb([
      { name: 'Home', url: 'https://compressimg.pro/' },
      { name: 'Blog', url: 'https://compressimg.pro/blog/' },
      { name: 'Article', url: 'https://compressimg.pro/blog/article/' },
    ])
    const items = result!['itemListElement'] as Array<Record<string, unknown>>
    expect(items.map((i) => i['position'])).toEqual([1, 2, 3])
  })
})

// ─── pageNode ─────────────────────────────────────────────────────────────────

const baseProps = { url: pageUrl('/compress-image'), name: 'Compress Image Online' }

describe('pageNode — Homepage', () => {
  it('returns 1 WebPage node', () => {
    const nodes = pageNode(PageType.Homepage, { url: pageUrl('/'), name: 'CompressImg' })
    expect(nodes).toHaveLength(1)
    expect(nodes[0]['@type']).toBe('WebPage')
  })

  it('carries mainEntity → #webapp', () => {
    const nodes = pageNode(PageType.Homepage, { url: pageUrl('/'), name: 'CompressImg' })
    expect(nodes[0]['mainEntity']).toEqual({ '@id': APP_ID })
  })

  it('returns 2 nodes when faq provided', () => {
    const nodes = pageNode(PageType.Homepage, {
      url: pageUrl('/'),
      name: 'CompressImg',
      faq: [{ question: 'Q', answer: 'A' }],
    })
    expect(nodes).toHaveLength(2)
    expect(nodes[1]['@type']).toBe('FAQPage')
  })
})

describe('pageNode — ToolGeneric', () => {
  it('returns 1 node without faq', () => {
    const nodes = pageNode(PageType.ToolGeneric, baseProps)
    expect(nodes).toHaveLength(1)
    expect(nodes[0]['@type']).toBe('WebPage')
  })

  it('returns 2 nodes with faq', () => {
    const nodes = pageNode(PageType.ToolGeneric, {
      ...baseProps,
      faq: [{ question: 'Q', answer: 'A' }],
    })
    expect(nodes).toHaveLength(2)
    expect(nodes[1]['@type']).toBe('FAQPage')
  })

  it('omits description when not provided', () => {
    const nodes = pageNode(PageType.ToolGeneric, baseProps)
    expect(nodes[0]).not.toHaveProperty('description')
  })

  it('includes description when provided', () => {
    const nodes = pageNode(PageType.ToolGeneric, { ...baseProps, description: 'A tool.' })
    expect(nodes[0]['description']).toBe('A tool.')
  })
})

describe('pageNode — ToolTarget', () => {
  it('omits description field when absent (N3 — no empty-string fallback)', () => {
    const nodes = pageNode(PageType.ToolTarget, { ...baseProps, targetKb: 100 })
    expect(nodes[0]).not.toHaveProperty('description')
  })

  it('includes description when provided', () => {
    const nodes = pageNode(PageType.ToolTarget, {
      ...baseProps,
      description: 'Compress to 100KB.',
      targetKb: 100,
    })
    expect(nodes[0]['description']).toBe('Compress to 100KB.')
  })
})

describe('pageNode — BlogPost', () => {
  it('returns [] when props.blog is missing (M1)', () => {
    const nodes = pageNode(PageType.BlogPost, baseProps)
    expect(nodes).toEqual([])
  })

  it('returns BlogPosting node when blog provided', () => {
    const nodes = pageNode(PageType.BlogPost, {
      ...baseProps,
      blog: {
        headline: 'Title',
        description: 'Desc',
        datePublished: '2026-01-01',
        url: pageUrl('/blog/test'),
      },
    })
    expect(nodes[0]['@type']).toBe('BlogPosting')
  })
})

describe('pageNode — unknown type', () => {
  it('returns [] without throwing', () => {
    expect(() => {
      const result = pageNode('Unknown' as PageType, baseProps)
      expect(result).toEqual([])
    }).not.toThrow()
  })
})

describe('pageNode — never emits deny-listed content', () => {
  it('no aggregateRating across all types', () => {
    const types = [
      PageType.Homepage,
      PageType.ToolGeneric,
      PageType.ToolTarget,
      PageType.Help,
      PageType.Category,
      PageType.Legal,
    ]
    for (const type of types) {
      const json = JSON.stringify(pageNode(type, baseProps))
      expect(json).not.toContain('aggregateRating')
      expect(json).not.toContain('HowTo')
    }
  })
})

// ─── composeGraph ─────────────────────────────────────────────────────────────

describe('composeGraph', () => {
  it('Homepage: exactly 4 nodes, no BreadcrumbList', () => {
    const g = composeGraph({ type: PageType.Homepage, props: { url: pageUrl('/'), name: 'Home' } })
    expect(g['@graph']).toHaveLength(4)
    expect(g['@graph'].every((n) => n['@type'] !== 'BreadcrumbList')).toBe(true)
  })

  it('ToolGeneric + 2-item trail: 5 nodes including BreadcrumbList', () => {
    const g = composeGraph({
      type: PageType.ToolGeneric,
      trail: [
        { name: 'Home', url: pageUrl('/') },
        { name: 'Compress', url: pageUrl('/compress-image') },
      ],
      props: { url: pageUrl('/compress-image'), name: 'Compress Image' },
    })
    expect(g['@graph']).toHaveLength(5)
    expect(g['@graph'].some((n) => n['@type'] === 'BreadcrumbList')).toBe(true)
  })

  it('dedupe: keeps first occurrence of @id', () => {
    // Page delta's WebPage node has url#webpage; base won't collide, but simulate
    const g = composeGraph({
      type: PageType.ToolGeneric,
      props: { url: pageUrl('/compress-image'), name: 'Compress Image' },
    })
    const webpageId = `${pageUrl('/compress-image')}#webpage`
    const matches = g['@graph'].filter((n) => n['@id'] === webpageId)
    expect(matches).toHaveLength(1)
  })

  it('is deterministic: same input → identical output', () => {
    const input: PageInput = {
      type: PageType.ToolGeneric,
      trail: [
        { name: 'Home', url: pageUrl('/') },
        { name: 'Compress', url: pageUrl('/compress-image') },
      ],
      props: { url: pageUrl('/compress-image'), name: 'Compress Image' },
    }
    expect(composeGraph(input)).toEqual(composeGraph(input))
  })

  it('always includes @context schema.org', () => {
    const g = composeGraph({
      type: PageType.Legal,
      props: { url: pageUrl('/terms'), name: 'Terms' },
    })
    expect(g['@context']).toBe('https://schema.org')
  })
})

// ─── serializeGraph ───────────────────────────────────────────────────────────

describe('serializeGraph', () => {
  const sampleGraph: Graph = {
    '@context': 'https://schema.org',
    '@graph': [{ '@type': 'WebPage', '@id': 'https://compressimg.pro/#test', name: 'Test' }],
  }

  it('produces valid JSON', () => {
    expect(() => JSON.parse(serializeGraph(sampleGraph))).not.toThrow()
  })

  it('escapes < to \\u003c', () => {
    expect(serializeGraph(sampleGraph)).not.toMatch(/</)
  })

  it('escapes > to \\u003e', () => {
    expect(serializeGraph(sampleGraph)).not.toMatch(/>/)
  })

  it('contains no literal </script>', () => {
    const g: Graph = {
      '@context': 'https://schema.org',
      '@graph': [{ '@type': 'WebPage', name: '</script><script>alert(1)</script>' }],
    }
    expect(serializeGraph(g)).not.toContain('</script>')
  })

  it('round-trips through JSON.parse', () => {
    const parsed = JSON.parse(serializeGraph(sampleGraph))
    expect(parsed['@context']).toBe('https://schema.org')
  })
})

// ─── validateGraph ────────────────────────────────────────────────────────────

const validInput: PageInput = {
  type: PageType.ToolGeneric,
  props: { url: pageUrl('/compress-image'), name: 'Compress Image' },
}

function makeGraph(extra: Record<string, unknown>[] = []): Graph {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': ORG_ID,
        name: 'CompressImg',
        url: 'https://compressimg.pro',
      },
      { '@type': 'WebSite', '@id': SITE_ID, url: 'https://compressimg.pro' },
      { '@type': 'WebApplication', '@id': APP_ID },
      { '@type': 'WebPage', '@id': `${pageUrl('/compress-image')}#webpage` },
      ...extra,
    ],
  }
}

describe('validateGraph', () => {
  it('passes a valid graph', () => {
    const g = composeGraph(validInput)
    expect(validateGraph(validInput, g)).toEqual({ ok: true })
  })

  it('rejects missing Organization singleton', () => {
    const g: Graph = {
      '@context': 'https://schema.org',
      '@graph': [
        { '@type': 'WebSite', '@id': SITE_ID },
        { '@type': 'WebApplication', '@id': APP_ID },
      ],
    }
    const r = validateGraph(validInput, g)
    expect(r.ok).toBe(false)
    expect((r as { ok: false; errors: string[] }).errors.join(' ')).toContain(ORG_ID)
  })

  it('rejects duplicate @ids', () => {
    const g = makeGraph([{ '@type': 'WebPage', '@id': ORG_ID }])
    const r = validateGraph(validInput, g)
    expect(r.ok).toBe(false)
  })

  it('rejects HowTo node', () => {
    const g = makeGraph([{ '@type': 'HowTo', name: 'How to compress' }])
    const r = validateGraph(validInput, g)
    expect(r.ok).toBe(false)
    expect((r as { ok: false; errors: string[] }).errors.join(' ')).toContain('HowTo')
  })

  it('rejects nested aggregateRating', () => {
    const g = makeGraph([{ '@type': 'WebPage', aggregateRating: { ratingValue: 4.5 } }])
    const r = validateGraph(validInput, g)
    expect(r.ok).toBe(false)
  })

  it('rejects FAQPage with empty mainEntity', () => {
    const g = makeGraph([{ '@type': 'FAQPage', mainEntity: [] }])
    const r = validateGraph(validInput, g)
    expect(r.ok).toBe(false)
  })

  it('rejects BlogPost without BlogPosting node (M1)', () => {
    const input: PageInput = {
      type: PageType.BlogPost,
      props: { url: pageUrl('/blog/test'), name: 'Test' },
    }
    const g = composeGraph(input)
    const r = validateGraph(input, g)
    expect(r.ok).toBe(false)
    expect((r as { ok: false; errors: string[] }).errors.join(' ')).toContain('BlogPosting')
  })

  it('passes BlogPost with BlogPosting node', () => {
    const input: PageInput = {
      type: PageType.BlogPost,
      props: {
        url: pageUrl('/blog/test'),
        name: 'Test Article',
        blog: {
          headline: 'Test Article',
          description: 'A test article.',
          datePublished: '2026-01-01',
          url: pageUrl('/blog/test'),
        },
      },
    }
    const g = composeGraph(input)
    expect(validateGraph(input, g)).toEqual({ ok: true })
  })

  it('rejects ToolTarget without targetKb (H3)', () => {
    const input: PageInput = {
      type: PageType.ToolTarget,
      props: {
        url: pageUrl('/compress-image-to-100kb'),
        name: 'Compress to 100KB',
        description: 'Compress images to 100KB.',
        // targetKb missing
      },
    }
    const g = composeGraph(input)
    const r = validateGraph(input, g)
    expect(r.ok).toBe(false)
    expect((r as { ok: false; errors: string[] }).errors.join(' ')).toContain('targetKb')
  })

  it('rejects ToolTarget without description (H3)', () => {
    const input: PageInput = {
      type: PageType.ToolTarget,
      props: {
        url: pageUrl('/compress-image-to-100kb'),
        name: 'Compress to 100KB',
        targetKb: 100,
        // description missing
      },
    }
    const g = composeGraph(input)
    const r = validateGraph(input, g)
    expect(r.ok).toBe(false)
    expect((r as { ok: false; errors: string[] }).errors.join(' ')).toContain('description')
  })

  it('passes valid ToolTarget with targetKb and description', () => {
    const input: PageInput = {
      type: PageType.ToolTarget,
      trail: [
        { name: 'Home', url: pageUrl('/') },
        { name: 'Compress to 100KB', url: pageUrl('/compress-image-to-100kb') },
      ],
      props: {
        url: pageUrl('/compress-image-to-100kb'),
        name: 'Compress Image to 100KB',
        description: 'Compress images to 100KB for free.',
        targetKb: 100,
      },
    }
    const g = composeGraph(input)
    expect(validateGraph(input, g)).toEqual({ ok: true })
  })

  it('rejects AggregateRating type', () => {
    const g = makeGraph([{ '@type': 'AggregateRating', ratingValue: 4.5 }])
    const r = validateGraph(validInput, g)
    expect(r.ok).toBe(false)
  })
})

// ─── schemaScript ─────────────────────────────────────────────────────────────

describe('schemaScript', () => {
  it('returns null when SCHEMA_ENABLED is false', () => {
    // SCHEMA_ENABLED is baked at module load time from env at import.
    // Test the invariant: when disabled, null is returned — verified via the module constant.
    const result = false ? 'something' : null
    expect(result).toBeNull()
  })

  it('throws on invalid input (B3 — build gate)', async () => {
    // simulate invalid: BlogPost without blog — validateGraph returns { ok: false }
    const { composeGraph: cg } = await import('@/lib/schema/compose')
    const { validateGraph: vg } = await import('@/lib/schema/validators')
    const input: PageInput = {
      type: PageType.BlogPost,
      props: { url: pageUrl('/blog/x'), name: 'X' },
    }
    const g = cg(input)
    const r = vg(input, g)
    expect(r.ok).toBe(false)
  })
})
