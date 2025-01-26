import { Input } from "@/components/form/Input";
import { Button } from "@/components/ui/Button";
import { Desc01, Label } from "@/components/ui/Texts";

export default function LeftBox() {
  return (
    <div className="box-shadow box-layout">
      <div className="w-full mb-[50px]">
        <Label className="mb-[10px]">
          아이디<span className="text-errorRed">*</span>
        </Label>
        <form
        action=""
        method="POST"
        className="flex gap-[10px] mb-[10px] w-full">
          <Input
          name={"id"}
          type={"text"}
          placeholder={"아이디"}
          className="w-3/4"
          required
          />
          <Button
          type="submit"
          className="flex-1 min-w-[129px] bg-baseWhite text-baseGray hover:bg-baseGray hover:text-white"
          >
            중복 확인
          </Button>
        </form>
        <Desc01
        className="text-baseGray"
        >
          아이디 중복을 확인해 주세요.
        </Desc01>
      </div> 
      <div className="mb-[50px]">
        <Label className="mb-[5px]">
          비밀번호<span className="text-errorRed">*</span>
        </Label>
        <Desc01
        className="text-baseGray mb-[10px]"
        >
          6~14자리의 영어와 숫자의 조합
        </Desc01>
        <Input
        name={"user_pwd"}
        placeholder={"비밀번호"}
        type={"password"}
        className="mb-[10px]"
        />
        <Input
        name={"user_pwd_check"}
        placeholder={"비밀번호 확인"}
        type={"password"}
        />
      </div>
      <div className="mb-[50px]">
        <Label className="mb-[10px]">
          닉네임<span className="text-errorRed">*</span>
        </Label>
        <Input
        name={"user_nickname"}
        placeholder={"닉네임"}
        type={"text"}
        />
      </div>
      <div
      className="float-right justify-items-end"
      >
        <Desc01
        className="text-errorRed"
        >
        * 는 필수 항목입니다.
        </Desc01>
      </div>
    </div>
  )
}