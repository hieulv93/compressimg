'use client'

import ResizeTool from '@/components/tool/ResizeTool'
import ResizeGifContentSection from '@/components/tool/ResizeGifContentSection'
import { ACCEPTED_TYPES } from '@/lib/utils'

const GIF_ACCEPT = ['image/gif', ...ACCEPTED_TYPES].join(',') + ',.gif'

function isValidGifOrImage(file: File): boolean {
  if (file.type === 'image/gif' || ACCEPTED_TYPES.includes(file.type)) return true
  const lower = file.name.toLowerCase()
  return lower.endsWith('.gif') || lower.endsWith('.heic') || lower.endsWith('.heif')
}

export default function ResizeGifPage() {
  return (
    <ResizeTool
      h1="Resize GIF Online Free"
      tagline="Change GIF width and height by pixel — no upload, 100% browser-based"
      contentSection={<ResizeGifContentSection />}
      accept={GIF_ACCEPT}
      customValidate={isValidGifOrImage}
      formatHint="GIF, JPG, PNG, WebP, HEIC — max 20MB"
      formatErrorMsg="Unsupported format. Use GIF, JPG, PNG, or WebP."
    />
  )
}
