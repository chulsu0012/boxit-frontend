import Banner from "./Banner";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <div className="bg-white page-layout">
      <section className="horizontal-equal-layout">
        <Banner/>
      </section>
      <section className="horizontal-equal-layout">
        <LoginForm/>
      </section>
    </div>
  )
}