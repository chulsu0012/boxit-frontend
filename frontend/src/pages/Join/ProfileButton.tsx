import type { ButtonHTMLAttributes, DetailedHTMLProps, InputHTMLAttributes } from 'react';

type ReactButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

type ProfileButtonProps = ReactButtonProps & {}

export const ProfileButton = ({
  disabled, className: _className, ...buttonProps
}: ProfileButtonProps ) => {

  const className = [
    _className,
    'rounded-lg select-none',
    'flex-1 w-full h-fit',
    'py-[10px]',
    'border border-baseGray bg-white text-baseGray hover:border-black hover:text-black'
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

type ReactInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

type ProfileInputProps = ReactInputProps & {}

export const ProfileInput = ({
  className: _className
}: ProfileInputProps ) => {

  const className = [
    _className,
    'select-none',
    'h-fit py-[10px] rounded-lg ',
    'border border-baseGray bg-white text-baseGray hover:border-black hover:text-black'
  ]
  .filter(Boolean)
  .join(' ');

  return (
    <input
    type='file'
    accept='.jpeg,.JPEG,.jpg,.JPG,.png,.PNG'
    className={className}
    />
  )
}