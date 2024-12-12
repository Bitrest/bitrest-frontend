import Image from "next/image";
import hero from "@/public/real estate 1.svg";
import blur1 from "@/public/top left blur.svg";
import logo from "@/public/images/plain logo.svg";

export default function Page() {
  return (
    <div className="w-full  text-white relative items-center justify-items-center min-h-screen pb-20 gap-16 font-carbonic">
      <Image className="absolute top-0 left-0 -z-10" src={blur1} alt="hero" />
      <Image className="absolute bottom-0 left-0 -z-10" src={hero} alt="hero" />

      {/* Hero Section */}
      <div className="h-[50%] px-8 items-center py-10 grid grid-cols-1 space-y-8 sm:space-y-0 sm:grid-cols-3">
        <div className="col-span-1">
          <Image src={logo} alt="logo" />
          <p className="text-[50px]">Welcome Back</p>
          <p className="font-roboto text-[20px]">
            Log in to explore new real estate opportunities and manage your
            Bitcoin investments securely.
          </p>
        </div>
        <div className="col-span-2  h-fit bg-[#10352F] w-full  py-8 px-8 z-10 border border-[#5BC6A3]">
          <p className="text-[32px]">Log in to Bitrest</p>
          <p className="text-[16px]">
            Don&apos; have an account?{" "}
            <span className="text-[#5BC6A3]">Sign up</span>{" "}
          </p>
          <div className="mt-[20px] space-y-4">
            <div>
              <p>Email</p>
              <input
                type="text"
                className="h-[50px] w-full px-4"
                placeholder="Enter Email Address"
              />
            </div>
            <div className="w-full">
              <p>Password</p>
              <div className="w-full bg-white">
                <input
                  type="text"
                  className="h-[50px] bg-transparent w-full px-4"
                  placeholder="Enter Password"
                />
              </div>
            </div>
          </div>

          <div className="w-full mt-5 space-y-4">
            <div className="flex w-full space-x-4 items-center">
              <input type="checkbox" defaultChecked />
              <p className="text-[10px] sm:text-[16px] font-roboto">
                Remember Me
              </p>
            </div>
          </div>
          <button className="bg-[#5BC6A3] w-full px-4 mt-8 border border-[#D4FAFE] text-[#111111] py-2">
            Log In
          </button>
        </div>
      </div>
      <div className="absolute inset-0 right-0 z-[-1] h-[714px] w-[714px] bg-gradient-to-[131.19deg] from-[#5BC6A3] to-black opacity-50"></div>
    </div>
  );
}
