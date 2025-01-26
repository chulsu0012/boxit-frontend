import { DetailedHTMLProps, HTMLAttributes } from "node_modules/@types/react"
import logo from "../../assets/react.svg"
import { Img } from "../ui/Img"
import { Title01 } from "../ui/Texts"

type ReactDivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

type HeaderProps = ReactDivProps & {
  title: string
}

export const Header = ({
  title, className:_className
}: HeaderProps ) => {

  const className = [
    _className,
    'top-0 left-0 w-full h-[189px] py-12',
    'box-shadow'
  ]
  .filter(Boolean)
  .join(' ')

  return (
    <div
    className={className}
    >
      <div
      className="flex flex-col"
      >
        <Img
        src={logo}
        alt="BoxIt Logo"
        className="mb-[5px] h-[42px]"
        />
        <Title01>{title}</Title01>
      </div>
    </div>
  )
}
