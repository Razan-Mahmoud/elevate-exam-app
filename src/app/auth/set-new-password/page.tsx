import ContinueWith from "../_components/continue-with";
import SocialLogin from "../_components/social-login";
import SetNewPasswordForm from "./_components/recover-password-form";

export default function SetNewPasswordPage() {
  return (
    <div className="ms-14 pb-4">
      <h2 className="mb-6 font-semibold text-xl">Set a new password</h2>
      <SetNewPasswordForm />
      <ContinueWith />
      <div className="pb-6">
        <SocialLogin />
      </div>
    </div>
  );
}
