export const SITE_URL = 'https://compressimg.pro'
export const ORG_ID = `${SITE_URL}/#organization`
export const SITE_ID = `${SITE_URL}/#website`
export const APP_ID = `${SITE_URL}/#webapp`
export const OG_IMAGE = `${SITE_URL}/og-image.png`

export const ORG_NAME = 'CompressImg'
export const APP_NAME = 'CompressImg — Free Online Image Compressor'
export const APP_CATEGORY = 'MultimediaApplication'

/** Appends trailing slash and prepends SITE_URL. Idempotent. */
export function pageUrl(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`
  const withSlash = normalized.endsWith('/') ? normalized : `${normalized}/`
  return `${SITE_URL}${withSlash}`
}

export enum PageType {
  Homepage = 'Homepage',
  ToolGeneric = 'ToolGeneric',
  ToolTarget = 'ToolTarget',
  BlogPost = 'BlogPost',
  Help = 'Help',
  Category = 'Category',
  Legal = 'Legal',
}
