import { useEffect, useState } from "react"

let globalIsHydrated = false

export const useIsHydrated = () => {
  const [isHydrated, setIsHydrated] = useState(globalIsHydrated)

  useEffect(() => {
    setIsHydrated(true)
    globalIsHydrated = true
  }, [])

  return isHydrated
}
