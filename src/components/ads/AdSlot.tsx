'use client'

import { useEffect, useState } from 'react'

interface AdSlotProps {
  compressionDone: boolean
  slot: string
  format?: 'auto' | 'rectangle' | 'horizontal'
}

const isPlaceholder = (slot: string) => slot === 'placeholder-slot-id' || !slot

export default function AdSlot({ compressionDone, slot, format = 'auto' }: AdSlotProps) {
  const [showAd, setShowAd] = useState(false)
  const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_ID
  const hasRealSlot = !isPlaceholder(slot) && !!adsenseId

  useEffect(() => {
    if (!hasRealSlot || !compressionDone) return
    const timer = setTimeout(() => setShowAd(true), 500)
    return () => clearTimeout(timer)
  }, [hasRealSlot, compressionDone])

  useEffect(() => {
    if (!showAd) return
    try {
      // @ts-expect-error adsbygoogle is injected by Google
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch {}
  }, [showAd])

  if (!hasRealSlot) return null

  return (
    <div
      style={{ minHeight: '250px' }}
      className="w-full flex items-center justify-center overflow-hidden"
      aria-hidden={!showAd}
    >
      {showAd && (
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
