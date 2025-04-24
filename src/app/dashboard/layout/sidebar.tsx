import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Logo from "@/public/assets/images/Final-Logo-1.png";
import History from "@/public/assets/icons/goHistory.svg";
import Dashboard from "@/public/assets/icons/dashboard.svg";
import LogoutForm from "../_components/logout-form";

export default function Sidebar() {
  return (
    <>
      <nav className="w-40">
        <div className="flex flex-col gap-14 flex-1 w-48 h-80 ">
          <Link href="/">
            <Image
              src={Logo}
              width={151}
              height={29}
              alt="website logo"
              className=""
            />
          </Link>

          <Button
            className="w-full h-11 flex gap-8 rounded-xl p-2 text-xl font-semibold text-slate-600"
            variant={"outline"}
          >
            <Image
              src={Dashboard}
              width={24}
              height={24}
              alt="Dashboard icon"
            />
            Dashboard
          </Button>

          <Button
            className="w-full h-11 flex gap-8 rounded-xl p-2 text-xl font-semibold text-slate-600 "
            variant={"outline"}
          >
            <Image src={History} width={24} height={24} alt="History icon" />
            Quiz History
          </Button>
          <LogoutForm />
        </div>
      </nav>
    </>
  );
}
