import {
  SITE_URL,
  ORG_ID,
  SITE_ID,
  APP_ID,
  ORG_NAME,
  APP_NAME,
  APP_CATEGORY,
  OG_IMAGE,
} from './constants'
import type { SchemaNode } from './types'

export function baseGraph(): SchemaNode[] {
  return [
    {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: ORG_NAME,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: OG_IMAGE,
        width: 1200,
        height: 630,
      },
    },
    {
      '@type': 'WebSite',
      '@id': SITE_ID,
      url: SITE_URL,
      name: ORG_NAME,
      publisher: { '@id': ORG_ID },
    },
    {
      '@type': 'WebApplication',
      '@id': APP_ID,
      name: APP_NAME,
      applicationCategory: APP_CATEGORY,
      operatingSystem: 'All',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      provider: { '@id': ORG_ID },
    },
  ]
}
