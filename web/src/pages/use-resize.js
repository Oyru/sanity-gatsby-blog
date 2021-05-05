import React, { useEffect } from 'react'
export default function useResize(callback) {
  useEffect(() => {
    callback()
    window.addEventListener('resize', callback)

    return () => window.removeEventListener('resize', callback)
  }, [])
}
