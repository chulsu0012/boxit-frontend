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
    'text-white w-full h-16 text-xl font-bold rounded-lg',
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

export const LandingButton = ({
  onClick, disabled, className: _className, ...buttonProps
}: ButtonProps ) => {

  const className = [
    'btn', _className,
  ]
  .filter(Boolean)
  .join(' ');

  return (
    <button
    onClick={onClick}
    disabled={disabled}
    className={className}
    {...buttonProps}
    />
  )
}