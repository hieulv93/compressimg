export function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 B'
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
}

export function calcReduction(original: number, compressed: number): number {
  if (original === 0) return 0
  return Math.max(0, Math.round(((original - compressed) / original) * 100))
}

export function generateFilename(originalName: string, format?: string): string {
  const ext = format ?? originalName.split('.').pop() ?? 'jpg'
  const base = originalName.replace(/\.[^.]+$/, '').replace(/[^a-zA-Z0-9._-]/g, '-')
  return `compressed-${base}.${ext}`
}

export const ACCEPTED_TYPES = ['image/jpeg', 'image/png', 'image/webp']
export const MAX_FILE_SIZE_MB = 20
export const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024
