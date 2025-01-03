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
              Verify Your Identity
            </p>
            <p className="text-[16px] text-white/60 text-left mt-[7px]">
              We&apos;ve sent a verification code to test@bitrest.com Enter the
              code below to continue.
            </p>
            <div className="w-full mt-[40px] mb-[20px]">
              <div className="flex justify-between space-x-3">
                {Array.from({ length: 6 }).map((_, index: number) => (
                  <input
                    key={index}
                    type="text"
                    maxLength={1}
                    className="w-[62px] h-[62px] bg-white/[8%] rounded-[8px] px-4 text-center text-lg   text-white focus:outline-none focus:ring focus:ring-[#5BC6A3]"
                  />
                ))}
              </div>
            </div>

            <div className="w-full mt-[40px] mb-[20px] space-y-4">
              <div className="flex w-full space-x-4 items-center">
                <input
                  type="checkbox"
                  defaultChecked
                  className="accent-[#5BC6A3]"
                />
                <p className="text-[16px] text-white/60 text-center mt-[7px]">
                  Didn&apos;t receive the code ?{" "}
                  <span className="text-[#5BC6A3]"> Resend Code</span>{" "}
                </p>
              </div>
            </div>
            <button className="bg-[#D4FAFE] w-full px-4 mt-8 border  text-[#063D37] py-2">
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
