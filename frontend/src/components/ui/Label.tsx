import { DetailedHTMLProps, HTMLAttributes } from "node_modules/@types/react"

type ReactLabelProps = DetailedHTMLProps<
  HTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
>

type LabelProps = ReactLabelProps & {}

export const Label = ({
  className: _className, ...props
}: LabelProps ) => {
  
  const className = [
    _className,
    'text-2xl font-bold select-none'
  ]
  .filter(Boolean)
  .join(' ')

  return (
    <label
    {...props}
    className={className}
    />
  )
}