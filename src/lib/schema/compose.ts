import { baseGraph } from './baseGraph'
import { breadcrumb } from './breadcrumb'
import { pageNode } from './pageNode'
import type { PageInput, Graph, SchemaNode } from './types'

export function composeGraph(input: PageInput): Graph {
  const base = baseGraph()
  const trail = input.trail ?? []
  const crumb = breadcrumb(trail)
  const delta = pageNode(input.type, input.props)

  const all: SchemaNode[] = [...base, ...delta, ...(crumb ? [crumb] : [])]

  // Dedupe by @id: first-writer wins (base first → singletons cannot be overwritten).
  // Nodes without @id (BreadcrumbList, FAQPage) have no identity to dedupe — always included.
  const seen = new Set<string>()
  const out: SchemaNode[] = []
  for (const node of all) {
    const id = node['@id'] as string | undefined
    if (id) {
      if (seen.has(id)) continue
      seen.add(id)
    }
    out.push(node)
  }

  return { '@context': 'https://schema.org', '@graph': out }
}
