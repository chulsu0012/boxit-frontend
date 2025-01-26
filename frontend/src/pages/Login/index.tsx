import Banner from "./Banner";
import JoinButton from "./JoinArea";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <div className="bg-white page-layout">
      <section className="horizontal-equal">
        <Banner/>
      </section>
      <section className="flex-col horizontal-equal">
        <div className="px-3 w-96">
          <LoginForm/>
          <hr className="my-10"/>
          <JoinButton/>
        </div>
      </section>
    </div>
  )
}