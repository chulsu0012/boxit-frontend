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

type ProfileImgProps = ReactImageProps & {
  src?: string
  size?: number | string
}

export const ProfileImg = ({
  src, size="100%", className: _className
}: ProfileImgProps) => {

  const className = [
    _className,
    'select-none rounded-full bg-baseWhite border-none',
  ]
  .filter(Boolean)
  .join(' ')

  const dimension = typeof size === "number" ? `${size}px` : size;

  return src ? (
    <div
    style={{ minWidth: dimension, minHeight: dimension }}
    >
      <img
      src={src}
      draggable={false}
      className={className}
      />
    </div>
  ) : (
    <div
    className={className}
    style={{ minWidth: dimension, minHeight: dimension }}
    >
    </div>
  )
}