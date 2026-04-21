interface ErrorMessageProps {
  message: string
  onDismiss?: () => void
}

export default function ErrorMessage({ message, onDismiss }: ErrorMessageProps) {
  if (!message) return null

  return (
    <div
      role="alert"
      className="flex items-start gap-3 p-4 rounded-xl bg-error-light border border-error/20 text-error"
    >
      <svg className="w-5 h-5 mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
      </svg>
      <p className="text-sm font-medium flex-1">{message}</p>
      {onDismiss && (
        <button
          onClick={onDismiss}
          className="text-error hover:text-error/70 touch-target flex items-center justify-center"
          aria-label="Dismiss error"
        >
          <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path d="M4.47 4.47a.75.75 0 011.06 0L8 6.94l2.47-2.47a.75.75 0 111.06 1.06L9.06 8l2.47 2.47a.75.75 0 11-1.06 1.06L8 9.06l-2.47 2.47a.75.75 0 01-1.06-1.06L6.94 8 4.47 5.53a.75.75 0 010-1.06z" />
          </svg>
        </button>
      )}
    </div>
  )
}
