import { useEffect, useState } from "react"

export const useInterval = (
  callback: () => void,
  duration: number = 4000,
  handleOnHover: boolean = true
) => {
  const [isHover, setIsHover] = useState(false)

  useEffect(() => {
    if (isHover) return

    const id = setInterval(callback, duration)
    return () => clearInterval(id)
  }, [callback, duration, isHover])

  return {
    onMouseOver: () => handleOnHover && setIsHover(true),
    onMouseLeave: () => handleOnHover && setIsHover(false)
  }
}