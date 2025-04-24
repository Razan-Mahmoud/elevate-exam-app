import ContinueWith from "../_components/continue-with";
import SocialLogin from "../_components/social-login";
import VerifyCodeForm from "./_components/verify-code-form";

export default function VerifyCodePage() {
  return (
    <div className="ms-14 pb-4">
      <h2 className="mb-6 font-semibold text-xl">Verify code</h2>
      <VerifyCodeForm />
      <ContinueWith />
      <div className="pb-6">
        <SocialLogin />
      </div>
    </div>
  );
}
