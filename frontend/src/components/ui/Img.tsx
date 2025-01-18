import { DetailedHTMLProps, useState } from "react"

type ReactImageProps = DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>

type ImageProps = ReactImageProps & {
  src?: string
}

export const Img = ({
  src, className: _className, ...props
}: ImageProps) => {
  const [hasError, setHasError] = useState(false)

  const className = [
    'bg-baseWhite',
    'select-none',
    _className
  ]
  .filter(Boolean)
  .join(' ')
  
  return hasError ? (
    <div className={`${className} flex items-center h-screen`}>
      이미지가 존재하지 않습니다.
    </div>
  ) : (
    <img
    {...props}
    src={src}
    className={className}
    draggable={false}
    onContextMenu={(e) => e.preventDefault()}
    onError={() => setHasError(true)}
    />
  )
}