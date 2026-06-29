/**
 * Run once to generate snapshot baselines. Not part of normal test suite.
 * Usage: npx tsx src/__tests__/schema/generate-snapshots.ts
 */
import { writeFileSync, mkdirSync } from 'fs'
import { join } from 'path'
import { composeGraph } from '../../lib/schema/compose'
import { PageType, pageUrl } from '../../lib/schema/constants'
import type { PageInput } from '../../lib/schema/types'

const SNAPSHOTS_DIR = join(__dirname, 'snapshots')
mkdirSync(SNAPSHOTS_DIR, { recursive: true })

const fixtures: Array<{ name: string; input: PageInput }> = [
  {
    name: 'Homepage',
    input: {
      type: PageType.Homepage,
      props: { url: pageUrl('/'), name: 'Free Online Image Tools — CompressImg' },
    },
  },
  {
    name: 'ToolGeneric',
    input: {
      type: PageType.ToolGeneric,
      trail: [
        { name: 'Home', url: pageUrl('/') },
        { name: 'Compress Image', url: pageUrl('/compress-image') },
      ],
      props: {
        url: pageUrl('/compress-image'),
        name: 'Compress Image Online Free',
        description: 'Free online image compressor.',
      },
    },
  },
  {
    name: 'ToolTarget',
    input: {
      type: PageType.ToolTarget,
      trail: [
        { name: 'Home', url: pageUrl('/') },
        { name: 'Compress Image to 100KB', url: pageUrl('/compress-image-to-100kb') },
      ],
      props: {
        url: pageUrl('/compress-image-to-100kb'),
        name: 'Compress Image to 100KB Online Free',
        description: 'Free online tool to compress images to 100KB or less.',
        targetKb: 100,
      },
    },
  },
  {
    name: 'BlogPost',
    input: {
      type: PageType.BlogPost,
      trail: [
        { name: 'Home', url: pageUrl('/') },
        { name: 'Blog', url: pageUrl('/blog') },
        { name: 'Best Image Format for Web', url: pageUrl('/blog/best-image-format-for-web') },
      ],
      props: {
        url: pageUrl('/blog/best-image-format-for-web'),
        name: 'Best Image Format for Web: JPEG vs PNG vs WebP in 2026',
        blog: {
          headline: 'Best Image Format for Web: JPEG vs PNG vs WebP in 2026',
          description:
            'Choosing the wrong image format costs performance. This guide explains when to use JPEG, PNG, and WebP.',
          datePublished: '2026-04-28',
          url: pageUrl('/blog/best-image-format-for-web'),
        },
      },
    },
  },
  {
    name: 'Help',
    input: {
      type: PageType.Help,
      trail: [
        { name: 'Home', url: pageUrl('/') },
        { name: 'Help', url: pageUrl('/help') },
      ],
      props: {
        url: pageUrl('/help'),
        name: 'Help — CompressImg',
        faq: [
          {
            question: 'How do I compress an image?',
            answer: 'Drop your image and click Download.',
          },
        ],
      },
    },
  },
  {
    name: 'Category',
    input: {
      type: PageType.Category,
      trail: [
        { name: 'Home', url: pageUrl('/') },
        { name: 'Blog', url: pageUrl('/blog') },
      ],
      props: {
        url: pageUrl('/blog'),
        name: 'Image Optimization Blog — CompressImg',
      },
    },
  },
  {
    name: 'Legal',
    input: {
      type: PageType.Legal,
      trail: [
        { name: 'Home', url: pageUrl('/') },
        { name: 'Privacy Policy', url: pageUrl('/privacy-policy') },
      ],
      props: {
        url: pageUrl('/privacy-policy'),
        name: 'Privacy Policy — CompressImg',
      },
    },
  },
]

for (const { name, input } of fixtures) {
  const graph = composeGraph(input)
  const path = join(SNAPSHOTS_DIR, `${name}.json`)
  writeFileSync(path, JSON.stringify(graph, null, 2) + '\n', 'utf-8')
  console.log(`Written: ${name}.json`)
}
