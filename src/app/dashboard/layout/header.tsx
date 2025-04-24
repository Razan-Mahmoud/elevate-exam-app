import Image from "next/image";
import Avatar from "@/public/assets/images/avatar.png";
import SearchIcon from "@/public/assets/icons/search-icon.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Header() {
  return (
    <>
      <div className="w-full h-16 flex gap-6 justify-end align-baseline px-2">
        {/* search input */}
        <div className=" relative ">
          <Input
            className="w-96 h-14 drop-shadow-lg rounded-2xl p-4"
            type="text"
            placeholder="Search for a quiz.."
          />
          <Image
            src={SearchIcon}
            width={25}
            height={25}
            alt="Search Icon"
            className="absolute top-4 right-4 "
          />
        </div>

        {/* start button */}
        <div>
          <Button className="w-48 h-14 rounded-2xl py-4 px-8 font-semibold text-white text-2xl">
            Start Quiz
          </Button>
        </div>

        {/* avatar image */}
        <div>
          <Image
            src={Avatar}
            width={61}
            height={61}
            alt="avatar of exam profile"
            className="rounded-full "
          />
        </div>
      </div>
    </>
  );
}
