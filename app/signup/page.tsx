import Image from "next/image";
import logo from "@/public/images/plain logo.svg";
import Link from "next/link";
import estate from "@/public/images/estate bit sv.svg";
import google from "@/public/icons/google.svg";
import apple from "@/public/icons/apple.svg";

export default function Page() {
  return (
    <div className="w-full bg-[#063D37] text-white relative items-center justify-items-center min-h-screen overflow-hidden font-carbonic">
      <Image
        className="absolute bottom-0 left-0 z-10"
        src={estate}
        alt="hero"
      />

      <div className="h-full px-[40px] w-full items-start py-[80px] grid grid-cols-1 gap-[50px] space-y-8 sm:space-y-0 sm:grid-cols-2">
        <div className="col-span-1">
          <Link href={"/"}>
            <Image src={logo} alt="logo" />
          </Link>
          <p className="text-[40px] xl:text-[50px] mt-[32px] mb-[16px]">
            Explore Real Estate <br /> investment with Ease
          </p>
          <p className="font-manrope xl:text-[24px] text-[16px] text-white/60">
            Create your account and explore global real estate investments with
            Bitcoin
          </p>
        </div>
        <div className="col-span-1  flex justify-center ">
          <div className="h-fit bg-[#10352F] w-[578px]  py-8 px-8 z-10 border border-[#5BC6A3]">
            <p className="text-[30px] text-center">Create Account</p>
            <p className="text-[16px] text-white/60 text-center mt-[7px]">
              Already have an account?{" "}
              <span className="text-[#5BC6A3]">Log in</span>{" "}
            </p>

            {/* Auth Buttons */}
            <div className="w-full flex gap-[20px]">
              <button className="border-[#D4FAFE1A] flex justify-center items-center gap-[10px] rounded-[10px] text-[#D4FAFE] bg-white/[8%] w-full px-4 mt-8 border  py-2">
                Sign Up With Google
                <Image src={google} alt="google icon" />
              </button>
              <button className="border-[#D4FAFE1A] flex gap-[10px] justify-center items-center rounded-[10px] text-[#D4FAFE] bg-white/[8%] w-full px-4 mt-8 border  py-2">
                Sign Up With Apple
                <Image src={apple} alt="apple icon" />
              </button>
            </div>

            <div className="flex w-full my-[32px] items-center">
              <hr className="flex-grow h-[1px] bg-white/[22%]" />
              <p className="px-4 text-white/[22%]">or</p>
              <hr className="flex-grow h-[1px] bg-white/[22%]" />
            </div>

            <div className="space-y-[32px]">
              <div className="flex w-full space-x-2">
                <div className="w-full space-y-[12px]">
                  <p className="text-white/80">First Name</p>
                  <input
                    type="text"
                    className="h-[50px] w-full bg-white/[8%] rounded-[8px] px-4"
                    placeholder="Enter First Name"
                  />
                </div>
                <div className="w-full space-y-[12px]">
                  <p className="text-white/80">Last Name</p>
                  <input
                    type="text"
                    className="h-[50px] w-full bg-white/[8%] rounded-[8px] px-4"
                    placeholder="Enter Last Name"
                  />
                </div>
              </div>
              <div className="w-full space-y-[12px]">
                <p className="text-white/80">Email</p>
                <input
                  type="text"
                  className="h-[50px] w-full bg-white/[8%] rounded-[8px] px-4"
                  placeholder="Enter Email Address"
                />
              </div>
              <div className="w-full">
                <div className="w-full space-y-[12px]">
                  <p className="text-white/80">Password</p>
                  <input
                    type="text"
                    className="h-[50px] w-full bg-white/[8%] rounded-[8px] px-4"
                    placeholder="Enter Password"
                  />
                </div>
              </div>
            </div>

            <div className="w-full mt-[40px] mb-[20px] space-y-4">
              <div className="flex w-full space-x-4 items-center">
                <input
                  type="checkbox"
                  defaultChecked
                  className="accent-[#5BC6A3]"
                />
                <p
                  className={`text-[14px] sm:text-[16px] font-manrope text-white/80 `}
                >
                  By creating an account, I agree to our{" "}
                  <span className="underline">Terms</span> of use and{" "}
                  <span className="underline">Privacy </span>
                  Policy{" "}
                </p>
              </div>
            </div>
            <button className="bg-[#5BC6A3] w-full px-4 mt-8 border border-[#D4FAFE] text-[#111111] py-2">
              Create Account
            </button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 right-0 z-[-1] h-[714px] w-[714px] bg-gradient-to-[131.19deg] from-[#5BC6A3] to-black opacity-50"></div>
    </div>
  );
}
