"use client";
import Header from "./components/header";
import Image from "next/image";
import globe from "@/public/images/bitcoin_globe.svg";
import handshake from "@/public/images/handshake.svg";
import security from "@/public/images/security copy.svg";
import liquidate from "@/public/images/liquidate.svg";
import twitter from "@/public/images/twitter_x.svg";
import linkedIn from "@/public/images/linkedin.svg";
import logo from "@/public/images/Bitrest logo.svg";
import { availableProperties } from "./constants";
import bitCard from "@/public/images/bitrest_card_image.png";
import PropertiesBlock from "./components/properties/bitPropertiesBlock";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function Home() {
  const [email, setEmail] = useState<string>("");

  const router = useRouter();
  return (
    <div className="w-screen overflow-x-hidden bg-black text-white relative items-center justify-items-center min-h-screen  font-carbonic">
      {/*The Property Section*/}
      <div className="relative w-screen h-[500px] md:h-[1000px] ">
        <Header />
        <Image
          className="hidden sm:absolute sm:block inset-0 w-full h-full object-cover"
          src="/images/bitrest_hero.png"
          alt="hero"
          width={1512}
          height={975}
          quality={100}
        />
        <div className="absolute inset-0 flex flex-col justify-center px-4 md:px-12 lg:px-20 max-w-6xl pt-[100px]">
          <p className=" text-[24px] md:text-[60px] leading-tight font-[500] mb-[6px] md:mb-[6px] z-10">
            Leverage your bitcoin for <br /> real estate & residency <br />{" "}
            investments
          </p>
          <p className="text-[14px] font-aeonik md:text-[20px] text-white/[55%] z-10 max-w-3xl">
            Unlock property ownership & citizenship opportunities in the UK &
            Dubai without selling your BTC
          </p>
          <div className="w-full flex mt-[40px] relative flex-row px-[10px] md:w-[547px] py-[10px] items-center justify-between bg-[#202123] h-[48px] md:h-[68px] rounded-[14px] border-white border-[1px]/[11%]">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              className="bg-transparent text-[12px] md:text-[14px]  absolute outline-none left-[10px] w-full placeholder:font-aeonik placeholder:text-[12px] placeholder:md:text-[14px] placeholder:text-white/[60%]"
              placeholder="Enter your email address"
            />

            <button
              onClick={() => router.push(`/signup?email=${email}`)}
              className="rounded-[8px] absolute right-[10px] text-[14px] md:text-[17px] cursor-pointer text-black bg-[#D4FAFE] px-4 py-2 hover:bg-[#5BC6A3] hover:text-[#02291B] transition-all"
            >
              Join Us
            </button>
          </div>
        </div>
      </div>

      {/* Your BTC Section */}
      <div className="w-full px-[40px] bg-black lg:px-[120px] flex py-[108px]   items-center flex-col">
        <p className="text-center text-[30px] text-wrap lg:text-[45px]">
          Your BTC, your future – fund property &<br /> residency investments
          with ease
        </p>
        <p className="text-center w-[90%] font-aeonik mb-[113px] text-white/[55%] sm:w-[50%] flex justify-center items-center text-[14px] md:text-[16px]">
          At Bitrest, we assist high-net-worth individuals and investors in
          utilizing their Bitcoin for real estate and residency or citizenship
          programs in the UK and Dubai—without selling their BTC.
        </p>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-[8px] w-full">
          {availableProperties.slice(0, 3).map((property, index) => (
            <PropertiesBlock
              key={index}
              title={property.title}
              returns={property.returns}
              units={property.units}
              address={property.address}
              price={property.price}
              images={property.images}
              bath={property.bath}
              bed={property.bed}
              value={property.value}
              dimensions={property.dimensions}
              id={index.toString()}
              active={property.active}
            />
          ))}
        </div>
      </div>

      {/* How BitRest Works Section */}

      <div className="w-full flex  relative border-dashed px-[40px] py-[100px]  items-start flex-col">
        <p className="text-left text-[30px] lg:text-[45px] mb-[20px]">
          How BitRest Works
        </p>
        <p className="flex justify-start items-start text-[14px] text-white/[55%]  lg:text-[16px] mb-[32px]  w-full sm:w-[80%]">
          Buy and sell real estate with Bitcoin—secure, fast, and hassle-free.
        </p>

        <div className="w-full grid lg:grid-cols-2 grid-cols-1 rounded-[34px] bg-[#0D0E0E] overflow-hidden">
          {/* List */}
          <div className="w-full text-white py-16 px-4 md:px-8 lg:px-16">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col space-y-[10px]">
                {/* Feature 1 */}
                <div className="grid grid-cols-[auto_1fr] gap-4">
                  <div className="flex flex-col items-center">
                    <span className="text-[18px] md:text-[28px] font-[500] text-white mb-2">
                      01.
                    </span>
                    <div className="h-24 w-0.5 bg-white/[10%]"></div>
                  </div>
                  <div>
                    <p className="text-[18px] md:text-[28px] font-[500] text-white mb-2">
                      Collateralize your BTC
                    </p>
                    <p className="text-[14px] md:text-[16px] text-white/[40%]">
                      Secure financing for real estate or residency investments.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="grid grid-cols-[auto_1fr] gap-4">
                  <div className="flex flex-col items-center">
                    <span className="text-[18px] md:text-[28px] font-[500] text-white mb-2">
                      02.
                    </span>
                    <div className="h-24 w-0.5 bg-white/[10%]"></div>
                  </div>
                  <div>
                    <p className="text-[18px] md:text-[28px] font-[500] text-white mb-2">
                      Residency & citizenship access
                    </p>
                    <p className="text-[14px] md:text-[16px] text-white/[40%]">
                      Leverage BTC-backed funding for investor visa programs
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="grid grid-cols-[auto_1fr] gap-4">
                  <div className="flex flex-col items-center">
                    <span className="text-[18px] md:text-[28px] font-[500] text-white mb-2">
                      03.
                    </span>
                    <div className="h-24 w-0.5 bg-white/[10%]"></div>
                  </div>
                  <div>
                    <p className="text-[18px] md:text-[28px] font-[500] text-white mb-2">
                      Keep your BTC exposure
                    </p>
                    <p className="text-[14px] md:text-[16px] text-white/[40%]">
                      Retain ownership while accessing structured financing.
                    </p>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="grid grid-cols-[auto_1fr] gap-4">
                  <div className="flex flex-col items-center">
                    <span className="text-[18px] md:text-[28px] font-[500] text-white mb-2">
                      04.
                    </span>
                  </div>
                  <div>
                    <p className="text-[18px] md:text-[28px] font-[500] text-white mb-2">
                      Flexible exit strategies
                    </p>
                    <p className="text-[14px] md:text-[16px] text-white/[40%]">
                      Tailored repayment options based on asset appreciation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image column */}
          <div className="hidden lg:relative lg:block  h-full min-h-[500px] lg:min-h-full">
            <Image
              alt="Bit card"
              src={bitCard}
              fill
              className="object-cover rounded-b-[34px] lg:rounded-r-[34px] lg:rounded-bl-none"
            />
          </div>
        </div>
      </div>

      {/* Why Bitrest Section */}
      <div className="w-full mt-[170px] z-40 px-[40px]">
        <p className="text-left text-[30px] lg:text-[45px] mb-[24px]">
          Why Bitrest?
        </p>
        <p className="flex justify-start items-start text-[14px] text-white/[55%] lg:text-[16px] mb-[32px]  w-full sm:w-[80%]">
          Tailored BTC-Backed Financing for High-Value Assets{" "}
        </p>
        <div className="w-full  grid grid-cols-1 sm:grid-cols-2 items-end gap-[40px]">
          <div className="bg-[#0D0E0E] items-start flex flex-col justify-between px-[50px] py-[55px] rounded-[70px] h-[300px]  md:h-[370px]">
            <Image
              className="h-[40px] w-[40px] md:h-[65px] md:w-[65px]"
              src={globe}
              alt="globe"
            />
            <div className="space-y-[14px]">
              <p className="text-[18px] md:text-[24px] text-white font-carbonic">
                Specialized in UK & Dubai Markets
              </p>
              <p className="text-[14px] font-aeonik md:text-[20px] text-white/[50%]">
                Gain access to prime real estate and top-tier investor visa
                programs.{" "}
              </p>
            </div>
          </div>

          <div className="bg-[#0D0E0E] flex flex-col justify-between px-[50px] py-[55px] rounded-[70px] h-[300px] md:h-[370px]">
            <Image
              className="h-[40px] w-[40px] md:h-[65px] md:w-[65px]"
              src={handshake}
              alt="handshake"
            />
            <div className="space-y-[14px]">
              <p className="text-[18px]  md:text-[24px] text-white font-carbonic">
                Exclusive Investment Opportunities{" "}
              </p>
              <p className="text-[14px] font-aeonik md:text-[20px] text-white/[50%]">
                Partnering with leading developers and immigration experts.
              </p>
            </div>
          </div>

          <div className="bg-[#0D0E0E] flex flex-col justify-between px-[50px] py-[55px] rounded-[70px] h-[300px] md:h-[370px]">
            <Image
              className="h-[40px] w-[40px] md:h-[65px] md:w-[65px]"
              src={liquidate}
              alt="liquidate"
            />
            <div className="space-y-[14px]">
              <p className="text-[18px] md:text-[24px] text-white font-carbonic">
                No Need to Liquidate BTC
              </p>
              <p className="text-[14px] md:text-[20px] font-aeonik text-white/[50%]">
                Use structed financing to keep your crypto exposure
              </p>
            </div>
          </div>

          <div className="bg-[#0D0E0E] flex flex-col justify-between px-[50px] py-[55px] rounded-[70px] h-[300px] md:h-[370px]">
            <Image
              className="h-[40px] w-[40px] md:h-[65px] md:w-[65px]"
              src={security}
              alt="security"
            />
            <div className="space-y-[14px]">
              <p className="text-[18px] md:text-[24px] text-white font-carbonic">
                Regulated & Secure{" "}
              </p>
              <p className="text-[14px] font-aeonik md:text-[20px] text-white/[50%]">
                Institutional-grade asset protection for peace of mind{" "}
              </p>
            </div>
          </div>
        </div>

        {/* Banner Image */}

        <div className="relative w-full mt-[170px] rounded-[28px] h-[450px]">
          <Image
            className="absolute inset-0 w-full h-full object-cover"
            src="/images/bitrest_hero.png"
            alt="hero"
            width={1512}
            height={975}
            quality={100}
          />
          <div className="absolute inset-0 flex flex-col justify-center px-4 md:px-12 lg:px-20">
            <div className="max-w-xl">
              <p className="text-[20px] font-aeonik md:text-[40px] font-[500] mb-[32px] z-10">
                Explore investment-backed <br /> residency & real estate
                programs
              </p>
              <button className="font-aeonik rounded-[8px] text-[12px] md:text-[14px] lg:text-[17px] cursor-pointer text-black bg-white px-4 py-2 hover:bg-gray-100 transition-all w-fit">
                Request a consultation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full h-fit mt-[85px] py-[85px] bg-[#0D0E0E]">
        <div className="flex flex-col gap-[40px] md:flex-row w-full bg-[#0D0E0E] px-[40px] justify-between  h-fit items-start ">
          <div className="w-full flex flex-col  h-full  items-start">
            <Image className="mb-[36px] h-[28px]" src={logo} alt="logo" />
            <div className="flex  items-center gap-[8px]">
              <div className="h-[58px] rounded-[18px] flex items-center w-fit p-[14px] bg-[#171A1A]">
                <Image src={twitter} alt="twitter" />
              </div>
              <div className="h-[58px] rounded-[18px] flex items-center w-fit p-[14px] bg-[#171A1A]">
                <Image src={linkedIn} alt="linkedIn" />
              </div>
              <div className="h-[58px] rounded-[18px] flex items-center w-fit p-[14px] bg-[#171A1A]">
                <p className="text-[16px] text-white">👋 osahon@bitrest.xyz</p>
              </div>
            </div>
          </div>
          <div className="w-full grid items-end grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="w-full">
              <p className="text-[16px] font-[500]">Product</p>
              <hr className="bg-white/[60%] w-[50px] my-[15px] border-1" />

              <div className="space-y-[32px] text-white/[60%]">
                <p className="text-[16px] font-manrope">Crowdfunding</p>
                <p className="text-[16px] font-manrope">Broker Management</p>
                <p className="text-[16px] font-manrope">Residency Programs</p>
              </div>
            </div>
            <div className="w-full ">
              <p className="text-[16px] font-[500]">Company</p>
              <hr className="bg-white/[60%] w-[50px] my-[15px] border-1" />
              <div className="space-y-[32px] text-white/[60%]">
                <p className="text-[16px] font-manrope">How It Works</p>
                <p className="text-[16px] font-manrope">Contact</p>
                <p className="text-[16px] font-manrope">About Us</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-[40px] mt-[114px] flex  text-white/[20%] justify-between">
          <p className="font-manrope text-[12px]">
            © 2024 Bitrest All rights reserved
          </p>
          <div className="flex justify-between">
            <p className="font-manrope text-[12px]">Privacy Policy</p>
            <p className="font-manrope text-[12px]">Terms of Use</p>
          </div>
        </div>
      </div>
    </div>
  );
}
