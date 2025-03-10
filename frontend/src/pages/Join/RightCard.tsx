import { ProfileImg } from "@/components/ui/Img";
import { Label } from "@/components/ui/Texts";
import { ProfileButton } from "./ProfileButton";
import { images } from "@/data/TempPath";
import { Button } from "@/components/ui/Button";

export default function RightBox() {
  return (
    <div className="hidden h-full box-shadow box-layout lg:block">
      <form className="flex flex-col h-full gap-[50px]">
        <div>
          <Label className="mb-[35px]">프로필 사진 등록</Label>
          <div className="flex flex-row gap-7">
            <div className="flex-1">
              <ProfileImg
              src={images[0]}
              />
            </div>
            <div className="flex flex-col flex-1 gap-2 min-w-10">
              <ProfileButton
              >
                파일에서 찾기
              </ProfileButton>
              <ProfileButton
              >
                랜덤 적용
              </ProfileButton>
              <ProfileButton
              >
                이미지 선택하기
              </ProfileButton>
            </div>
          </div>
        </div>
        <div>
          <Label className="mb-[10px]">소개글 작성</Label>
          <textarea
          maxLength={100}
          placeholder="프로필에 전시될 소개글을 작성해 주세요"
          className="resize-none w-full h-[118px] inline-block align-text-top p-4 text-sm font-medium border rounded-lg border-baseGray text-baseGray"
          />
        </div>
        <div
        className="flex flex-1 w-full"
        >
          <Button
          className="max-w-[264px] self-end w-1/2 mt-auto ml-auto border border-baseBlue text-baseBlue"
          >
            회원가입하기
          </Button>      
        </div>
      </form>
    </div>
  )
}