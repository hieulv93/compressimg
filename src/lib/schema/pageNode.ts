import { APP_ID, SITE_ID, ORG_ID, PageType } from './constants'
import type { PageProps, SchemaNode, FaqItem } from './types'

export function pageNode(type: PageType, props: PageProps): SchemaNode[] {
  switch (type) {
    case PageType.Homepage:
      return [
        {
          '@type': 'WebPage',
          '@id': `${props.url}#webpage`,
          url: props.url,
          name: props.name,
          isPartOf: { '@id': SITE_ID },
          mainEntity: { '@id': APP_ID },
        },
        ...(props.faq && props.faq.length > 0 ? [buildFaqPage(props.faq)] : []),
      ]

    case PageType.ToolGeneric: {
      const nodes: SchemaNode[] = [
        {
          '@type': 'WebPage',
          '@id': `${props.url}#webpage`,
          url: props.url,
          name: props.name,
          isPartOf: { '@id': SITE_ID },
          mainEntity: { '@id': APP_ID },
          ...(props.description ? { description: props.description } : {}),
        },
      ]
      if (props.faq && props.faq.length > 0) nodes.push(buildFaqPage(props.faq))
      return nodes
    }

    case PageType.ToolTarget: {
      // N3: emit description only when present — validator enforces it must be non-empty
      const nodes: SchemaNode[] = [
        {
          '@type': 'WebPage',
          '@id': `${props.url}#webpage`,
          url: props.url,
          name: props.name,
          isPartOf: { '@id': SITE_ID },
          mainEntity: { '@id': APP_ID },
          ...(props.description ? { description: props.description } : {}),
        },
      ]
      if (props.faq && props.faq.length > 0) nodes.push(buildFaqPage(props.faq))
      return nodes
    }

    case PageType.BlogPost: {
      // Missing blog props → [] — validator converts to build failure (M1)
      if (!props.blog) return []
      const blogNodes: SchemaNode[] = [
        {
          '@type': 'BlogPosting',
          '@id': `${props.url}#article`,
          headline: props.blog.headline,
          description: props.blog.description,
          url: props.blog.url,
          datePublished: props.blog.datePublished,
          ...(props.blog.dateModified ? { dateModified: props.blog.dateModified } : {}),
          author: { '@id': ORG_ID },
          publisher: { '@id': ORG_ID },
          isPartOf: { '@id': SITE_ID },
        },
      ]
      if (props.faq && props.faq.length > 0) blogNodes.push(buildFaqPage(props.faq))
      return blogNodes
    }

    case PageType.Help: {
      const nodes: SchemaNode[] = [
        {
          '@type': 'WebPage',
          '@id': `${props.url}#webpage`,
          url: props.url,
          name: props.name,
          isPartOf: { '@id': SITE_ID },
        },
      ]
      if (props.faq && props.faq.length > 0) nodes.push(buildFaqPage(props.faq))
      return nodes
    }

    case PageType.Category:
      return [
        {
          '@type': 'CollectionPage',
          '@id': `${props.url}#webpage`,
          url: props.url,
          name: props.name,
          isPartOf: { '@id': SITE_ID },
        },
      ]

    case PageType.Legal:
      return [
        {
          '@type': 'WebPage',
          '@id': `${props.url}#webpage`,
          url: props.url,
          name: props.name,
          isPartOf: { '@id': SITE_ID },
        },
      ]

    default:
      return []
  }
}

function buildFaqPage(faq: FaqItem[]): SchemaNode {
  return {
    '@type': 'FAQPage',
    mainEntity: faq.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  }
}
