import { Button } from "@/components/ui/Button"
import { Div } from "@/components/ui/Div"
import  logo  from "../../assets/react.svg"
import { Link } from "react-router-dom"
import { Img } from "@/components/ui/Img"

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Div>
        <p className="text-2xl text-center select-none">
        매일매일 실천하는 하루 플래너
        </p>
      </Div>
      <Img
        src={logo}
        alt="BoxIt Logo"
        className="w-[24rem] h-[9rem] mt-4 mb-8"
      />
      <Div>
        <Link to="/login">
          <Button className="h-16 text-2xl text-white bg-orange-500 rounded-lg hover:bg-orange-500 w-80">
            시작하기
          </Button>
        </Link>
      </Div>
    </div>
  )
}