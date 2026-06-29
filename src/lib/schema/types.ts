import type { PageType } from './constants'

export interface TrailItem {
  name: string
  url: string
}

export type Trail = TrailItem[]

export interface FaqItem {
  question: string
  answer: string
}

export interface BlogProps {
  headline: string
  description: string
  datePublished: string
  dateModified?: string
  url: string
}

export interface PageProps {
  url: string
  name: string
  description?: string
  faq?: FaqItem[]
  blog?: BlogProps
  targetKb?: number
}

export interface PageInput {
  type: PageType
  trail?: Trail
  props: PageProps
}

export type SchemaNode = Record<string, unknown>

export interface Graph {
  '@context': 'https://schema.org'
  '@graph': SchemaNode[]
}

export type ValidationResult = { ok: true } | { ok: false; errors: string[] }
