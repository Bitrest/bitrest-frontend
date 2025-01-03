import Image from "next/image";
import logo from "@/public/icons/Bitrest full.svg";
import Link from "next/link";

export default function Page() {
  return (
    <div className="w-full bg-[#063D37] min-h-screen text-white relative flex flex-col justify-center items-center justify-items-center  overflow-hidden  font-carbonic">
      <Link href={"/"}>
        <Image src={logo} alt="logo" />
      </Link>
      <div className="h-full px-[40px] w-full items-start py-[80px] grid grid-cols-1 gap-[50px]">
        <div className="col-span-1  flex justify-center ">
          <div className="h-fit bg-[#10352F] w-[497px] rounded-[12px] border-[2px]  py-8 px-8 z-10  border-white/[11%]">
            <p className="text-[30px] text-left font-[500]">
              Forgot your Password?
            </p>
            <p className="text-[16px] text-white/60 text-left mt-[7px]">
              Enter your email below to get started!{" "}
            </p>

            <div className="w-full space-y-[12px] my-[34px]">
              <p className="text-white/80">Email</p>
              <input
                type="text"
                className="h-[50px] w-full bg-white/[8%] rounded-[8px] px-4"
                placeholder="Enter Email Address"
              />
            </div>

            <button className="bg-[#D4FAFE] w-full px-4 border  text-[#063D37] py-2">
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
