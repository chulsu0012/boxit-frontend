import type { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react'
import type { LeftRightTopBottom } from './LeftRightTopBottom'
import type { WidthHeight } from './WidthHeight'

type ReactDivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>
type DivProps = ReactDivProps &
  PropsWithChildren<WidthHeight> & 
  LeftRightTopBottom & {
    src?: string
  }
  
export const Div = ({
  width, height, style: _sytle, src, className: _className,
  left, right, top, bottom, ...props
}: DivProps ) => {
  const style = {
    ..._sytle, width, height, backgroundImage: src && `url(${src})`,
    left, right, top, bottom
  }
  const className = ['box-sizing', src && 'bg-baseGray', _className].join(' ')
  return <div {...props} className={className} style={style} />
}