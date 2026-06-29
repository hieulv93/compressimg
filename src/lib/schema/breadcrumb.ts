import type { Trail, SchemaNode } from './types'

export function breadcrumb(trail: Trail): SchemaNode | null {
  if (!trail || trail.length < 2) return null
  return {
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
