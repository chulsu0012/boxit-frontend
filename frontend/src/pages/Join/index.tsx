import { Header } from "@/components/layout/Header";
import RightCard from "./RightCard";
import LeftCard from "./LeftCard";

export default function JoinPage() {
  return (
    <div className="flex-col page-layout">
      <Header title={"회원가입"}/>
      <div className="flex h-full px-[71px] pt-[40px] pb-[61px]">
        <LeftCard/>
        <RightCard/>
      </div>
    </div>
  )
}