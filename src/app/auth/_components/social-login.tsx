import { Button } from "@/components/ui/button";
import Link from "next/link";
import GoogleIcon from "assets/icons/google.svg";
import TwitterIcon from "assets/icons/twitter.svg";
import FacebookIcon from "assets/icons/facebook.svg";
import AppleIcon from "assets/icons/apple.svg";
import Image from "next/image";

export default function SocialLogin() {
  return (
    <div className="w-full h-14 flex gap-6 px-14 py-3">
      <Button variant={"secondary"} className="bg-white border rounded-xl drop-shadow-lg w-14 h-14">
        <Image src={GoogleIcon} width={56} height={56} alt="Google Icon" />
      </Button>
      <Button variant={"secondary"} className="bg-white border rounded-xl drop-shadow-lg w-14 h-14">
        <Image src={TwitterIcon} width={56} height={56} alt="Twitter Icon" />
      </Button>
      <Button variant={"secondary"} className="bg-white border rounded-xl drop-shadow-lg w-14 h-14">
        <Image src={FacebookIcon} width={56} height={56} alt="Facebook Icon" />
      </Button>
      <Button variant={"secondary"} className="bg-white border rounded-xl drop-shadow-lg w-14 h-14">
        <Image src={AppleIcon} width={56} height={56} alt="Apple Icon" />
      </Button>
    </div>
  );
}
