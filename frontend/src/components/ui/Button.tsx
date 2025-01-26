import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

type ReactButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

type ButtonProps = ReactButtonProps & {}

export const Button = ({
  disabled, className: _className, ...buttonProps
}: ButtonProps ) => {

  const className = [
    _className,
    'h-16 text-xl font-bold rounded-lg select-none',
  ]
  .filter(Boolean)
  .join(' ');

  return (
    <button
    disabled={disabled}
    className={className}
    {...buttonProps}
    />
  )
}