import { composeGraph } from './compose'
import { serializeGraph } from './serialize'
import { validateGraph } from './validators'
import type { PageInput } from './types'

export const SCHEMA_ENABLED = process.env.NEXT_PUBLIC_SCHEMA_ENABLED === 'true'

export function schemaScript(input: PageInput): string | null {
  if (!SCHEMA_ENABLED) return null
  const graph = composeGraph(input)
  const result = validateGraph(input, graph)
  if (!result.ok) {
    throw new Error(
      `[schema] Invalid graph for ${input.props.url}:\n  ${result.errors.join('\n  ')}`
    )
  }
  return serializeGraph(graph)
}
