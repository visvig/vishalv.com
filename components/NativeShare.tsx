'use client'

import { useEffect, useState } from 'react'

type NativeShareProps = {
  title: string
  text?: string
  className?: string
}

export default function NativeShare({ title, text, className }: NativeShareProps) {
  const [canShare, setCanShare] = useState(false)

  useEffect(() => {
    setCanShare(typeof navigator !== 'undefined' && typeof navigator.share === 'function')
  }, [])

  if (!canShare) {
    return null
  }

  return (
    <button
      type="button"
      className={[
        'border-primary-500/25 bg-primary-500/10 text-primary-600 hover:bg-primary-500/15 dark:border-primary-400/25 dark:bg-primary-400/10 dark:text-primary-300 dark:hover:bg-primary-400/15 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold shadow-sm transition',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      onClick={async () => {
        try {
          await navigator.share({
            title,
            text,
            url: window.location.href,
          })
        } catch {
          // Ignore cancellation errors from closing the native share sheet.
        }
      }}
      aria-label={`Share ${title}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <path d="M12 16V4" />
        <path d="m7 9 5-5 5 5" />
        <path d="M5 20h14" />
      </svg>
      Share
    </button>
  )
}
