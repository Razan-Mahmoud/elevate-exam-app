import ContinueWith from "../_components/continue-with";
import SocialLogin from "../_components/social-login";
import ForgotPasswordForm from "./_components/forgot-password-form";

export default function ForgotPassword() {
  return (
    <div className="ms-14 space-y-10">
      <h2 className="mb-6 font-semibold text-xl">Forgot your password?</h2>
      <ForgotPasswordForm />
      <ContinueWith />
      <div className="pb-6">
        <SocialLogin />
      </div>
    </div>
  );
}
