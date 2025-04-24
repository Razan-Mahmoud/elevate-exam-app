import Image from "next/image";
import Avatar from "@/public/assets/images/avatar.png";
import Flag from "@/public/assets/icons/flag-filled.svg";
import TimeIcon from "@/public/assets/icons/time-icon.svg";
import CircleCheck from "@/public/assets/icons/circle-check-fill.svg";

export default function Profile() {
  return (
    <section className="bg-white flex gap-10 w-full h-52 rounded-xl py-4 px-4 mt-4">
      {/* Person's image */}
      <div>
        <Image
          src={Avatar}
          width={190}
          height={190}
          alt="Profile photo"
          className="rounded-lg"
        />
      </div>

      <div className="w-[646px] h-[214px] flex flex-col space-y-3">
        {/* Person's name and description */}
        <h4 className="text-primary">Ahmed Mohamed</h4>
        <p className="text-slate-400">Lorem ipsum dolor sit.</p>

        {/* Progress bar section */}
        <div className="relative">
          <div className="w-[619px] h-3 rounded-xl bg-slate-200"></div>
          <div className="w-[490px] h-3 rounded-xl bg-primary absolute top-0 left-0"></div>
        </div>

        {/* Icons section */}
        <div className="flex gap-6">
          <div className="flex gap-4 ">
            <div className="w-16 h-16 rounded-lg  shadow-2xl flex justify-center items-center">
              <Image
                src={Flag}
                width={35}
                height={35}
                className=""
                alt="Flag icon"
              />
            </div>
            <div className="pt-3">
              <p className="text-slate-500 font-semibold">27</p>
              <p className="text-slate-500">Quizz passed</p>
            </div>
          </div>
          <div className="flex gap-4 ">
            <div className="w-16 h-16 rounded-lg  shadow-2xl flex justify-center items-center">
              <Image
                src={TimeIcon}
                width={35}
                height={35}
                className=""
                alt="Flag icon"
              />
            </div>
            <div className="pt-3">
              <p className="text-slate-500 font-semibold">13 min</p>
              <p className="text-slate-500">Fastest time</p>
            </div>
          </div>
          <div className="flex gap-4 ">
            <div className="w-16 h-16 rounded-lg  shadow-2xl flex justify-center items-center">
              <Image
                src={CircleCheck}
                width={35}
                height={35}
                className=""
                alt="Flag icon"
              />
            </div>
            <div className="pt-3">
              <p className="text-slate-500 font-semibold">200</p>
              <p className="text-slate-500">Correct answers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
