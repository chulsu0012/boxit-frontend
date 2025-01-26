import { Button } from "@/components/ui/Button"
import { Div } from "@/components/ui/Div"
import { Img } from "@/components/ui/Img"
import { Text01 } from "@/components/ui/Texts"
import { Link } from "react-router-dom"
import logo from "../../assets/react.svg"

export default function Hero() {
  return (
    <div className="flex-col h-screen horizontal-eqaul">
      <Div>
        <Text01>
        매일매일 실천하는 하루 플래너
        </Text01>
      </Div>
      <Img
        src={logo}
        alt="BoxIt Logo"
        className="w-[24rem] h-[9rem] mt-4 mb-8"
      />
      <Div className="w-80">
        <Link to="/user/login">
          <Button className="h-16 text-2xl text-white rounded-lg bg-baseOrange hover:bg-baseOrange">
            시작하기
          </Button>
        </Link>
      </Div>
    </div>
  )
}