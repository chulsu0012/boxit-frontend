import { useEffect } from "node_modules/@types/react"

export const useInterval = (callback: () => void, duration: number = 4000) => {
  useEffect(() => {
    const id = setInterval(callback, duration)
    return () => clearInterval(id)
  }, [callback, duration])
}