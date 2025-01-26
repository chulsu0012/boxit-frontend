import { Button } from "@/components/ui/Button";
import { Input } from "@/components/form/Input";
import { Desc01, Title01 } from "@/components/ui/Texts";
import { useState } from "react";
import { Link } from "node_modules/react-router-dom/dist";

export default function LoginForm() {
  const [formData, setFormData] = useState({id: "", user_pwd: ""})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const isFormValid = formData.id.trim() && formData.user_pwd.trim()
  
  return (
    <div className="flex-col w-full horizontal-equal">
      <Title01 className="mb-7">
        로그인
      </Title01>
      <form className="w-full" action="/api/user/login" method="POST">
        <Input
        name="id"
        placeholder="아이디"
        type="text"
        value={formData.id}
        className="mb-5"
        onChange={handleInputChange}
        required
        />      
        <Input
        name="user_pwd"
        placeholder="비밀번호"
        type="password"
        value={formData.user_pwd}
        className="mb-5 "
        onChange={handleInputChange}
        required
        />      
        <Button
        type="submit"
        disabled={!isFormValid}
        className={
          `text-white
          ${
            !isFormValid
            ? 'bg-baseGray'
            : 'bg-baseOrange hover:bg-baseOrange'
          }`
        }
        >
          로그인하기
        </Button>
      </form>
      <div className="flex justify-end w-full mt-5 underline text-baseGray ">
        <Link to="/user/find-password">
          <Desc01>
        비밀번호 찾기
          </Desc01>
        </Link>
      </div>
    </div>
  )
}