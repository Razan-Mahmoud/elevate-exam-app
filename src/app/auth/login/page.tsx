import ContinueWith from "../_components/continue-with";
import SocialLogin from "../_components/social-login";
import LoginForm from "./_components/login-form";

export default function page() {
  return (
    <div className="ms-14 ">
      <h2 className="mb-6 font-semibold text-xl">Sign In</h2>
      <LoginForm />
      <ContinueWith />
      <div className="pb-6">
        <SocialLogin />
      </div>
    </div>
  );
}
