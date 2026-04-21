'use client'

import { useEffect, useState } from 'react'

interface AdSlotProps {
  compressionDone: boolean
  slot: string
  format?: 'auto' | 'rectangle' | 'horizontal'
}

export default function AdSlot({ compressionDone, slot, format = 'auto' }: AdSlotProps) {
  const [showAd, setShowAd] = useState(false)
  const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_ID

  useEffect(() => {
    if (!compressionDone) return
    const timer = setTimeout(() => setShowAd(true), 500)
    return () => clearTimeout(timer)
  }, [compressionDone])

  useEffect(() => {
    if (!showAd || !adsenseId) return
    try {
      // @ts-expect-error adsbygoogle is injected by Google
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch {}
  }, [showAd, adsenseId])

  // Pre-sized container always present — prevents CLS
  return (
    <div
      style={{ minHeight: '250px' }}
      className="w-full flex items-center justify-center overflow-hidden"
      aria-hidden={!showAd}
    >
      {showAd && adsenseId && (
        <ins
          className="adsbygoogle"
          style={{ display: 'block', width: '100%' }}
          data-ad-client={adsenseId}
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive="true"
        />
      )}
    </div>
  )
}
