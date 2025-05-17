import Image from "next/image";
import Link from "next/link";
import BroImage from "assets/images/bro.svg";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

type LayoutProps = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: LayoutProps) {
  return (
    <div className="flex flex-row relative pb-8">
      <div className="bg-blue-50 rounded-r-xl drop-shadow-xl h-[650px] w-1/2">
        <div className="w-[482px]  top-[20px] left-[40px] gap-[20px] flex flex-col absolute">
          <h1 className="font-bold text-4xl leading-relaxed">
            Welcome to
            <br />
            <span className="text-primary ps-4">Elevate</span>
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim alias molestiae voluptate rem nemo veniam tempore fugiat quis
            cupiditate odio.
          </p>
          <Image src={BroImage} width={350} height={370} alt="A student taking an exam" />
        </div>
      </div>

      <div className=" w-1/2 h-svh flex flex-col gap-12 pr-8">
        <div className="flex flex-row items-center gap-12 mt-7 mr-4 ms-auto h-11 w-[362px] ">
          <p className="flex justify-center items-center">
            English
            <span className="ps-1">
              <ChevronDown size={10} />
            </span>
          </p>
          <Link href="/auth/login">
            {" "}
            <p className="font-bold text-primary">Sign In</p>
          </Link>
          <Button variant={"outline"} className="text-primary h-10 w-32 rounded-lg p-4 ">
            <Link href="/auth/register"> Register</Link>
          </Button>
        </div>

        {children}
      </div>
    </div>
  );
}
