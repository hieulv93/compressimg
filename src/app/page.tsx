import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'CompressImg — Free Online Image Compressor',
  description: 'Free online image compressor. Reduce JPG, PNG, WebP file size up to 90% without losing quality. No uploads — 100% browser-based and private.',
  alternates: { canonical: 'https://compressimg.pro/compress-image' },
}

export default function Home() {
  redirect('/compress-image')
}
