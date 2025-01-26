import { DetailedHTMLProps, InputHTMLAttributes } from "node_modules/@types/react"

type ReactInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

type InputProps = ReactInputProps & {
  name: string
  type: string
  placeholder: string
  value?: string
}

export const Input = ({
  className: _className, name, type, placeholder, value, ...props
}: InputProps ) => {
  
  const className = [
    _className,
    'mb-5 block pl-7 py-5 w-full h-16',
    'border border-baseGray rounded-lg bg-white',
    'focus:outline-none focus:border-baseBlack',
    'placeholder-baseGray text-xl font-bold'
  ]
  .filter(Boolean)
  .join(' ')

  return (
    <div className="flex flex-col items-center justify-center">
      <input 
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      className={className}
      {...props}
      />
    </div>
  )
}