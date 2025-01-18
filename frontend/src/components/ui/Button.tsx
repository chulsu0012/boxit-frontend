import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export type ReactButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export type ButtonProps = ReactButtonProps & {}

export const Button = ({
  className: _className,
  ...buttonProps
}: ButtonProps ) => {
  const className = ['btn', _className].filter(Boolean).join(' ');
  return (
    <button {...buttonProps} className={className}>
    </button>
  );
};