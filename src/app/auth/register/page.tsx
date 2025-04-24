import ContinueWith from "../_components/continue-with";
import SocialLogin from "../_components/social-login";
// import { registerActions } from "./_actions/register-action";
import RegisterForm from "./_components/register-form";

export default function RegisterPage() {
  // await registerActions(registrationFields)
  return (
    <div className="ms-14 pb-4">
      <h2 className="mb-6 font-semibold text-xl">Sign Up</h2>
      <RegisterForm />
      <ContinueWith />
      <div className="pb-6">
        <SocialLogin />
      </div>
    </div>
  );
}
// create server action. if registration is successful, go to login with router.push().
