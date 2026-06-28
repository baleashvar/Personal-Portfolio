import { useState, useEffect } from 'react'

export function useScrollSpy(sectionIds: string[], offset = 100): string {
  const [active, setActive] = useState(sectionIds[0])

  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY
      let current = sectionIds[0]
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.offsetTop - offset <= scrollY) {
          current = id
        }
      }
      setActive(current)
    }

    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return active
}
