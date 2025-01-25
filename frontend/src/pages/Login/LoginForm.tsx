import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Title01 } from "@/components/ui/Texts";
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
    <div className="flex flex-col items-center justify-center w-full">
      <Title01 className="mb-7">
        로그인
      </Title01>
      <form className="w-full">
        <Input
        name="id"
        placeholder="아이디"
        type="text"
        value={formData.id}
        onChange={handleInputChange}
        />      
        <Input
        name="user_pwd"
        placeholder="비밀번호"
        type="password"
        value={formData.user_pwd}
        onChange={handleInputChange}
        />      
      </form>
      <Link to={"/api/user/login"} className="w-full">
        <Button
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
      </Link>
      <div className="flex justify-end w-full mt-5 underline text-baseGray ">
        <Link to="find-password">
        비밀번호 찾기
        </Link>
      </div>
    </div>
  )
}