import { DetailedHTMLProps, HTMLAttributes } from "node_modules/@types/react"

type ReactTextProps = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>

type Title01Props = ReactTextProps & {
  lineclamp?: number
}

export const Title01 = ({
  className: _className, lineclamp, ...props
}: Title01Props ) => {
  
  const className = [
    _className,
    lineclamp,
    'text-4xl font-bold text-center select-none'
  ]
  .filter(Boolean)
  .join(' ')

  return (
    <p
    {...props}
    className={className}
    />
  )
}

type Title02Props = ReactTextProps & {
  lineclamp?: number
}

export const Title02 = ({
  className: _className, lineclamp, ...props
}: Title02Props ) => {
  
  const className = [
    _className,
    lineclamp,
    'text-3xl font-bold text-center select-none'
  ]
  .filter(Boolean)
  .join(' ')

  return (
    <p
    {...props}
    className={className}
    />
  )
}


type Text01Props = ReactTextProps & {
  lineclamp?: number
}

export const Text01 = ({
  className: _className, lineclamp, ...props
}: Text01Props ) => {
  
  const className = [
    _className,
    lineclamp,
    'text-2xl font-medium select-none'
  ]
  .filter(Boolean)
  .join(' ')

  return (
    <p
    {...props}
    className={className}
    />
  )
}

type Text02Props = ReactTextProps & {
  lineclamp?: number
}

export const Text02 = ({
  className: _className, lineclamp, ...props
}: Text02Props ) => {
  
  const className = [
    _className,
    lineclamp,
    'text-xl font-bold select-none'
  ]
  .filter(Boolean)
  .join(' ')

  return (
    <p
    {...props}
    className={className}
    />
  )
}

type Desc01Props = ReactTextProps & {
  lineclamp?: number
}

export const Desc01 = ({
  className: _className, lineclamp, ...props
}: Desc01Props ) => {
  
  const className = [
    _className,
    lineclamp,
    'text-sm font-medium select-none'
  ]
  .filter(Boolean)
  .join(' ')

  return (
    <p
    {...props}
    className={className}
    />
  )
}

type LabelProps = ReactTextProps & {
  lineclamp?: number
}

export const Label = ({
  className: _className, lineclamp, ...props
}: LabelProps ) => {
  
  const className = [
    _className,
    lineclamp,
    'text-2xl font-bold select-none'
  ]
  .filter(Boolean)
  .join(' ')

  return (
    <p
    {...props}
    className={className}
    />
  )
}

