import { Button } from "@/components/ui/Button";
import { Text02 } from "@/components/ui/Texts";
import { Link } from "node_modules/react-router-dom/dist";

export default function JoinButton () {
  return (
    <div className="flex-col w-full horizontal-layout">
      <Text02 className="text-baseBlue">
        아직 회원이 아니신가요?
      </Text02>
      <Link to="/user/create" className="w-full">
        <Button
        className="my-5 border border-baseBlue text-baseBlue"
        >
          회원가입하기          
        </Button>
      </Link>
    </div>
  )
}