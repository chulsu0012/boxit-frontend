import Banner from "./Banner";
import JoinButton from "./JoinArea";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <div className="bg-white page-layout">
      <section className="horizontal-equal-layout">
        <Banner/>
      </section>
      <section className="flex flex-col horizontal-equal-layout">
        <div className="px-5 w-96">
          <LoginForm/>
          <hr className="my-10"/>
          <JoinButton/>
        </div>
      </section>
    </div>
  )
}