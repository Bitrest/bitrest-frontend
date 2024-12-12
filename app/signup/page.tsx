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

          <p className="text-[50px]">
            Explore Real Estate investment with Ease
          </p>
          <p className="font-roboto text-[20px]">
            Create your account and explore global real estate investments with
            Bitcoin
          </p>
        </div>
        <div className="col-span-2  h-fit bg-[#10352F] w-full  py-8 px-8 z-10 border border-[#5BC6A3]">
          <p className="text-[32px]">Create Account</p>
          <p className="text-[16px]">
            Already have an account?{" "}
            <span className="text-[#5BC6A3]">Log in</span>{" "}
          </p>
          <div className="mt-[20px] space-y-4">
            <div className="flex w-full space-x-2">
              <div className="w-full">
                <p>First Name</p>
                <input
                  type="text"
                  className="h-[50px] w-full px-4"
                  placeholder="Enter First Name"
                />
              </div>
              <div className="w-full">
                <p>Last Name</p>
                <input
                  type="text"
                  className="h-[50px] w-full px-4"
                  placeholder="Enter Last Name"
                />
              </div>
            </div>
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
              <p className="text-[#D4FAFE] mt-2 text-[14px] font-roboto">
                Use 8 or more characters with a mix of letters, numbers &
                symbols
              </p>
            </div>
          </div>

          <div className="w-full mt-5 space-y-4">
            <div className="flex w-full space-x-4 items-center">
              <input type="checkbox" defaultChecked />
              <p className="text-[10px] sm:text-[16px] font-roboto">
                By creating an account, I agree to our Terms of use and Privacy
                Policy{" "}
              </p>
            </div>
            <div className="flex space-x-4 items-center w-full">
              <input type="checkbox" defaultChecked />
              <p className="text-[10px]  sm:text-[16px] font-roboto">
                By creating an account, I am also consenting to receive SMS
                messages and emails, including product new feature updates,
                events, and marketing promotions.{" "}
              </p>
            </div>
          </div>
          <button className="bg-[#5BC6A3] w-full px-4 mt-8 border border-[#D4FAFE] text-[#111111] py-2">
            Create Account
          </button>
        </div>
      </div>
      <div className="absolute inset-0 right-0 z-[-1] h-[714px] w-[714px] bg-gradient-to-[131.19deg] from-[#5BC6A3] to-black opacity-50"></div>
    </div>
  );
}
