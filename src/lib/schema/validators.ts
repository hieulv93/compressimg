import { ORG_ID, SITE_ID, APP_ID, PageType } from './constants'
import type { Graph, ValidationResult, PageInput } from './types'

const DENY_TYPES = ['HowTo', 'HowToStep', 'HowToSection', 'AggregateRating', 'Review']
const DENY_PROPS = ['aggregateRating', 'Review', 'ratingValue', 'ratingCount']
const REQUIRED_IDS = [ORG_ID, SITE_ID, APP_ID]

// N1: input is a required first parameter — type-conditional Hard invariants must not be bypassable
export function validateGraph(input: PageInput, graph: Graph): ValidationResult {
  const errors: string[] = []
  const nodes = graph['@graph']

  // Hard: three base singletons must be present
  for (const id of REQUIRED_IDS) {
    if (!nodes.some((n) => n['@id'] === id)) {
      errors.push(`Missing required singleton: ${id}`)
    }
  }

  // Hard: no duplicate @ids
  const ids = nodes.map((n) => n['@id']).filter(Boolean) as string[]
  const dupes = ids.filter((id, i) => ids.indexOf(id) !== i)
  if (dupes.length > 0) errors.push(`Duplicate @ids: ${dupes.join(', ')}`)

  // Hard: anti-spam — no deny-listed types or props (including nested)
  for (const node of nodes) {
    checkNode(node, errors)
  }

  // Hard: FAQPage must have at least 1 Q&A pair
  const faqNode = nodes.find((n) => n['@type'] === 'FAQPage')
  if (faqNode) {
    const entities = faqNode['mainEntity'] as unknown[] | undefined
    if (!Array.isArray(entities) || entities.length === 0) {
      errors.push('FAQPage has no mainEntity Q&A pairs')
    }
  }

  // Hard: BlogPost page must have a BlogPosting node (M1)
  if (input.type === PageType.BlogPost) {
    if (!nodes.some((n) => n['@type'] === 'BlogPosting')) {
      errors.push(
        `BlogPost page at ${input.props.url} has no BlogPosting node — props.blog is missing`
      )
    }
  }

  // Hard: ToolTarget requires targetKb and non-empty description (H3)
  if (input.type === PageType.ToolTarget) {
    if (!input.props.targetKb) {
      errors.push(`ToolTarget page at ${input.props.url} is missing props.targetKb`)
    }
    if (!input.props.description) {
      errors.push(`ToolTarget page at ${input.props.url} is missing props.description`)
    }
  }

  return errors.length === 0 ? { ok: true } : { ok: false, errors }
}

function checkNode(obj: unknown, errors: string[]): void {
  if (!obj || typeof obj !== 'object') return
  const rec = obj as Record<string, unknown>

  const type = rec['@type'] as string | undefined
  if (type && DENY_TYPES.includes(type)) {
    errors.push(`Deny-listed @type: ${type}`)
  }

  for (const [key, val] of Object.entries(rec)) {
    if (DENY_PROPS.includes(key)) {
      errors.push(`Deny-listed property: ${key}`)
    }
    if (Array.isArray(val)) {
      val.forEach((v) => checkNode(v, errors))
    } else if (val && typeof val === 'object') {
      checkNode(val, errors)
    }
  }
}
