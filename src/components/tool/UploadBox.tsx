'use client'

import { useRef, useState, useCallback, DragEvent, ChangeEvent, ClipboardEvent } from 'react'
import { isValidImageFile, MAX_FILE_SIZE_BYTES, MAX_FILE_SIZE_MB } from '@/lib/utils'

type UploadState = 'idle' | 'dragging' | 'processing' | 'done' | 'error'

interface UploadBoxProps {
  onFileSelect: (file: File) => void
  state: UploadState
  errorMessage?: string
  processingLabel?: string
  accept?: string
  customValidate?: (file: File) => boolean
  formatHint?: string
}

export default function UploadBox({
  onFileSelect,
  state,
  errorMessage,
  processingLabel = 'Compressing...',
  accept,
  customValidate,
  formatHint,
}: UploadBoxProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isDragging, setIsDragging] = useState(false)

  const validateAndSelect = useCallback(
    (file: File) => {
      const isValid = customValidate ? customValidate(file) : isValidImageFile(file)
      if (!isValid) {
        onFileSelect(Object.assign(file, { _invalid: 'format' }))
        return
      }
      if (file.size > MAX_FILE_SIZE_BYTES) {
        onFileSelect(Object.assign(file, { _invalid: 'size' }))
        return
      }
      onFileSelect(file)
    },
    [onFileSelect, customValidate]
  )

  const handleClick = () => inputRef.current?.click()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) validateAndSelect(file)
    e.target.value = ''
  }

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files?.[0]
    if (file) validateAndSelect(file)
  }

  const handlePaste = useCallback(
    (e: ClipboardEvent<HTMLDivElement>) => {
      const item = Array.from(e.clipboardData.items).find((i) => i.type.startsWith('image/'))
      if (!item) return
      const file = item.getAsFile()
      if (file) validateAndSelect(file)
    },
    [validateAndSelect]
  )

  if (state === 'done') return null

  const isProcessing = state === 'processing'
  const isError = state === 'error'
  const isActive = isDragging || state === 'dragging'

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label="Upload image: click, drag and drop, or paste"
      onClick={!isProcessing ? handleClick : undefined}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onPaste={handlePaste}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && !isProcessing && handleClick()}
      aria-disabled={isProcessing}
      className={[
        'relative w-full rounded-2xl border-2 border-dashed transition-all duration-200',
        'flex flex-col items-center justify-center gap-4 cursor-pointer select-none',
        'min-h-[220px] sm:min-h-[280px] px-6 py-10',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary',
        isProcessing && 'cursor-not-allowed opacity-70',
        isActive && !isProcessing && 'border-primary bg-drag-active scale-[1.01]',
        isError && 'border-error bg-error-light',
        !isActive &&
          !isError &&
          !isProcessing &&
          'border-border bg-surface hover:border-primary hover:bg-drag-active',
        isProcessing && 'border-primary bg-drag-active',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <input
        ref={inputRef}
        type="file"
        accept={accept ?? 'image/jpeg,image/png,image/webp,image/heic,image/heif,.heic,.heif'}
        className="hidden"
        onChange={handleChange}
        aria-hidden="true"
      />

      {isProcessing ? (
        <>
          <div
            className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin"
            aria-hidden="true"
          />
          <p className="text-text-muted font-medium">{processingLabel}</p>
        </>
      ) : (
        <>
          <UploadIcon isError={isError} isActive={isActive} />
          <div className="text-center">
            <p className="font-semibold text-text-main text-lg">
              {isError ? 'Try again' : 'Drop image here or click to upload'}
            </p>
            <p className="text-text-muted text-sm mt-1">
              {formatHint ?? `JPG, PNG, WebP, HEIC — max ${MAX_FILE_SIZE_MB}MB`}
            </p>
            {!isError && (
              <p className="text-text-muted text-xs mt-1">You can also paste an image (Ctrl+V)</p>
            )}
          </div>
          {isError && errorMessage && (
            <p role="alert" className="text-error text-sm font-medium text-center px-4">
              {errorMessage}
            </p>
          )}
        </>
      )}
    </div>
  )
}

function UploadIcon({ isError, isActive }: { isError: boolean; isActive: boolean }) {
  const color = isError ? '#DC2626' : isActive ? '#2563EB' : '#9CA3AF'
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect
        width="48"
        height="48"
        rx="12"
        fill={isError ? '#FEE2E2' : isActive ? '#EFF6FF' : '#F3F4F6'}
      />
      <path
        d="M24 14L24 30M24 14L18 20M24 14L30 20"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M14 34H34" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}
