import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'

// Isolated watchdog logic — mirrors the pattern in CompressToTargetTool.tsx
// without requiring React or @testing-library/react.
function makeWatchdog(timeoutMs: number) {
  let runId = 0
  let timer: ReturnType<typeof setTimeout> | null = null

  function clearWatchdog() {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
  }

  function armWatchdog(onTimeout: () => void) {
    clearWatchdog()
    const watchRunId = runId
    timer = setTimeout(() => {
      if (runId !== watchRunId) return // stale guard
      onTimeout()
    }, timeoutMs)
  }

  function abort() {
    ++runId
  } // simulates ++runIdRef.current in component

  return { armWatchdog, abort, clearWatchdog }
}

describe('Watchdog timer — unit evidence (CR-03)', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  afterEach(() => {
    vi.useRealTimers()
  })

  it('fires exactly once after 30 000 ms', () => {
    const { armWatchdog } = makeWatchdog(30_000)
    const onTimeout = vi.fn()
    armWatchdog(onTimeout)
    vi.advanceTimersByTime(29_999)
    expect(onTimeout).not.toHaveBeenCalled()
    vi.advanceTimersByTime(1) // now at 30 000 ms
    expect(onTimeout).toHaveBeenCalledOnce()
  })

  it('does not fire before 30 000 ms', () => {
    const { armWatchdog } = makeWatchdog(30_000)
    const onTimeout = vi.fn()
    armWatchdog(onTimeout)
    vi.advanceTimersByTime(29_000)
    expect(onTimeout).not.toHaveBeenCalled()
  })

  it('stale guard: abort before timeout prevents fire', () => {
    const { armWatchdog, abort } = makeWatchdog(30_000)
    const onTimeout = vi.fn()
    armWatchdog(onTimeout)
    abort() // simulates reset / new upload
    vi.advanceTimersByTime(30_001)
    expect(onTimeout).not.toHaveBeenCalled()
  })

  it('stale guard: multiple aborts before timeout all prevent fire', () => {
    const { armWatchdog, abort } = makeWatchdog(30_000)
    const onTimeout = vi.fn()
    armWatchdog(onTimeout)
    abort()
    abort()
    abort()
    vi.advanceTimersByTime(30_001)
    expect(onTimeout).not.toHaveBeenCalled()
  })

  it('clearWatchdog before timeout prevents fire', () => {
    const { armWatchdog, clearWatchdog } = makeWatchdog(30_000)
    const onTimeout = vi.fn()
    armWatchdog(onTimeout)
    clearWatchdog()
    vi.advanceTimersByTime(30_001)
    expect(onTimeout).not.toHaveBeenCalled()
  })

  it('re-arming cancels the previous timer', () => {
    const { armWatchdog } = makeWatchdog(30_000)
    const first = vi.fn()
    const second = vi.fn()
    armWatchdog(first)
    vi.advanceTimersByTime(15_000) // half-way through
    armWatchdog(second) // re-arm resets the clock
    vi.advanceTimersByTime(29_999) // 29 999 ms into second arm
    expect(first).not.toHaveBeenCalled()
    expect(second).not.toHaveBeenCalled()
    vi.advanceTimersByTime(1) // completes second arm at 30 000 ms
    expect(first).not.toHaveBeenCalled()
    expect(second).toHaveBeenCalledOnce()
  })
})
