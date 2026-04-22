'use client'

import { useState } from 'react'

export default function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-xl border border-border overflow-hidden">
      <dt>
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          className="w-full flex items-center justify-between gap-3 p-4 text-left hover:bg-surface transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
        >
          <span className="text-sm font-semibold text-text-main">{question}</span>
          <span className={`flex-shrink-0 text-text-muted transition-transform duration-200 ${open ? 'rotate-180' : ''}`} aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </button>
      </dt>
      <dd className={`text-sm text-text-muted leading-relaxed border-t border-border px-4 pt-3 pb-4 ${open ? '' : 'hidden'}`}>
        {answer}
      </dd>
    </div>
  )
}
