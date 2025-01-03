import Header from "./components/header";
import Image from "next/image";
//import hero from "@/public/real estate 1.svg";
import blur1 from "@/public/top left blur.svg";
import globe from "@/public/images/Global Reach.svg";
import inclusivity from "@/public/images/Inclusivity.svg";
import security from "@/public/images/Security.svg";
import estate from "@/public/images/estate.svg";
import bitcoin from "@/public/images/bitcoin.svg";
import mail from "@/public/icons/mail.svg";
import phone from "@/public/icons/phone.svg";
import pin from "@/public/icons/pin.svg";
import logo from "@/public/images/Bitrest logo.svg";
import arrow from "@/public/icons/arrow.svg";
import estateful from "@/public/images/real estate.svg";

export default function Home() {
  return (
    <div className="w-screen overflow-x-hidden  text-white relative items-center justify-items-center min-h-screen pb-20 gap-16 font-carbonic">
      <Header />
      <Image className="absolute top-0 left-0 z-10" src={blur1} alt="topblur" />

      {/* Hero Section */}
      <div className="relative bg-[#10352F] h-[50%] w-full py-10">
        <div className="max-w-[1440px grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
          <div className="px-[40px]  lg:px-[120px] z-10">
            <p className="text-[70px] mb-[36px]">
              Invest in Real Estate
              <br />
              with <span className="text-[#CAFBFF]">Bitcoin</span>
            </p>
            <p className="font-manrope text-[20px] mb-[40px]">
              Unlock real estate opportunities across the globe. Use your
              bitcoin to securely invest in high-potential properties through a
              streamlined, transparent crowdfunding platform designed for modern
              investors.
            </p>
            <div className="mt-[10px] font-outfit text-[20px] flex space-x-8 items-center">
              <p className="bg-[#CAFBFF] rounded-[4px] px-4 py-2 text-[#02291B]">
                Invest Now
              </p>
              <p className="border rounded-[4px] w-fit border-[#5BC6A3] bg-[#02291B] px-4 py-2">
                Learn More
              </p>
            </div>
          </div>
          <div className="relative flex justify-end">
            {/* Blur gradient under hero image */}
            <div
              className="absolute right-0 top-1/2 -translate-y-1/2 w-[714px] h-[714px] rounded-full"
              style={{
                background:
                  "linear-gradient(131.19deg, #5BC6A3 17.5%, #000000 125.95%)",
                filter: "blur(100px)",
                opacity: "0.5",
                zIndex: "0",
              }}
            />

            {/* Hero image */}
            <div className="relative z-10">
              <Image src={estateful} alt="hero" className="relative" />
            </div>
          </div>
        </div>
      </div>
      {/* About Us Section */}
      <div className="w-full px-[40px] bg-[#10352F] lg:px-[120px] flex py-[100px]  border-b border-b-[#D4FAFE] items-center flex-col">
        <p className="text-center text-[45px]">About Us</p>
        <p className="text-center w-[90%] sm:w-[50%] flex justify-center items-center text-[16px]">
          At Bitrest, we believe that real estate should be accessible to
          everyone, regardless of location or financial status. By combining
          real estate crowdfunding with bitcoin, we&apos;ve created a platform
          that democratizes investment and empowers individuals to grow their
          wealth with ease.
        </p>

        <div className="flex flex-col lg:space-x-8 mt-[20px] lg:space-y-0 space-y-8 lg:flex-row">
          <div className="h-[253px] justify-center px-8 py-8 flex flex-col bg-inherit w-full border border-[#5BC6A3]">
            <div className="flex  mb-[16px] space-x-4">
              <Image src={globe} alt="global" />
              <p className="text-[26px]">Global Reach</p>
            </div>
            <p className="text-[18px]">
              Invest in real estate projects from different parts of the world
              without the limitations of traditional banking systems.
            </p>
          </div>
          <div className="min-h-[253px] justify-center px-8 py-8 flex flex-col bg-inherit w-full border border-[#5BC6A3]">
            <div className="flex items-center   mb-[16px] space-x-4">
              <Image src={security} alt="security" />
              <p className="text-[26px]">Security</p>
            </div>
            <p className="text-[18px]">
              Blockchain ensures all investments are recorded and verified on a
              decentralized ledger, providing maximum security.{" "}
            </p>
          </div>
          <div className="min-h-[253px] justify-center px-8 py-8 flex flex-col bg-inherit w-full border border-[#5BC6A3]">
            <div className="flex  space-x-4  mb-[16px]">
              <Image src={inclusivity} alt="inclusivity" />
              <p className="text-[26px]">Inclusivity</p>
            </div>
            <p className="text-[18px]">
              Whether you&apos;re an experienced investor or just starting,
              Bitrest is designed for everyone. You don&apos;t need millions to
              start.
            </p>
          </div>
        </div>
      </div>

      {/* Products Sections */}

      <div className="w-full flex relative border-dashed px-[40px] lg:px-[120px] py-[100px] border-b border-b-[#D4FAFE] items-center flex-col">
        <div
          className="absolute z-10 top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px]"
          style={{
            background:
              "linear-gradient(131.19deg, #5BC6A3 17.5%, #000000 125.95%)",
            filter: "blur(300px)",
            zIndex: 0,
          }}
        />

        <div
          className="absolute z-10 -bottom-8 left-0 w-[600px] h-[400px]"
          style={{
            background:
              "linear-gradient(131.19deg, rgba(91, 198, 163, 0.76) 26.14%, rgba(0, 0, 0, 0.76) 134.59%)",
            filter: "blur(300px)",
            zIndex: 0,
          }}
        />

        <p className="text-center z-20 text-[45px] mb-[24px]">Products</p>
        <p className="text-center z-20 flex justify-center items-center text-[18px] mb-[32px]  w-full sm:w-[80%]">
          At Bitrest, we offer a range of products and services designed to help
          you seamlessly integrate bitcoin into your real estate investments.
        </p>

        <div className="grid z-40  grid-cols-1 w-full sm:grid-cols-2 mt-[20px] gap-[60px]">
          <div className="min-h-[408px] px-8 py-8 flex flex-col justify-center bg-inherit w-full border border-[#5BC6A3]">
            <div className="justify-start items-start space-y-[16px] mb-[16px]">
              <Image src={estate} alt="estate" />
              <p className="text-[26px]">Real Estate Crowdfunding</p>
            </div>
            <p className="text-[18px] mb-[32px]  font-manrope">
              Gain access to a wide range of real estate projects across
              different regions. Pool your bitcoin assets with others to
              collectively invest in high-potential properties and developments.
            </p>
            <p className="border mt-4 rounded-[4px] w-fit border-[#5BC6A3] bg-[#02291B] px-4 py-2">
              Learn More
            </p>
          </div>
          <div className="min-h-[408px] justify-center px-8 py-8 flex flex-col bg-inherit w-full border border-[#5BC6A3]">
            <div className="justify-start items-start space-y-[16px] mb-[16px]">
              <Image src={bitcoin} alt="bitcoin" />
              <p className="text-[26px]">Bitcoin-backed Investments</p>
            </div>
            <p className="text-[18px] mb-[32px]  font-manrope">
              Use your bitcoin holdings to invest directly in real estate
              without converting to fiat. This option allows for faster, more
              secure transactions, all managed through blockchain technology.
            </p>
            <p className="border mt-4 rounded-[4px] w-fit border-[#5BC6A3] bg-[#02291B] px-4 py-2">
              Learn More
            </p>
          </div>
          <div className="min-h-[408px] justify-center px-8 py-8 flex flex-col bg-inherit w-full border border-[#5BC6A3]">
            <div className="justify-start items-start space-y-[16px] mb-[16px]">
              <Image src={estate} alt="estate" />
              <p className="text-[26px]">Portfolio Diversification</p>
            </div>
            <p className="text-[18px] mb-[32px]  font-manrope">
              Gain access to a wide range of real estate projects across
              different regions. Pool your bitcoin assets with others to
              collectively invest in high-potential properties and developments.
            </p>
            <p className="border mt-4 rounded-[4px] w-fit border-[#5BC6A3] bg-[#02291B] px-4 py-2">
              Learn More
            </p>
          </div>
          <div className="min-h-[408px] justify-center px-8 py-8 flex flex-col bg-inherit w-full border border-[#5BC6A3]">
            <div className="justify-start items-start space-y-[16px] mb-[16px]">
              <Image src={bitcoin} alt="bitcoin" />
              <p className="text-[26px]">Transparent Reporting & Analytics</p>
            </div>
            <p className="text-[18px] mb-[32px] font-manrope">
              Track your investments in real-time with comprehensive reporting
              tools. View your portfolio&apos;s performance, real estate project
              updates, and other critical data directly from your dashboard.
            </p>
            <p className="border mt-4 rounded-[4px] w-fit border-[#5BC6A3] bg-[#02291B] px-4 py-2">
              Learn More
            </p>
          </div>
        </div>
      </div>
      {/* Contact Section */}
      <div className="w-full z-40 px-[40px] lg:px-[120px] py-14">
        <div className="w-full border grid grid-cols-1 sm:grid-cols-2 items-end gap-8  border-[#5BC6A3] px-8 py-8">
          <div>
            <p className="text-[45px]">Ready to get started?</p>
            <p className="text-[18px] font-manrope">
              Our team is here to help you take the next step in your real
              estate investment journey. Contact us today for personalized
              support, and let&apos;s discuss how we can help you achieve your
              investment goals.
            </p>
          </div>
          {/* Contact Session */}
          <div className="text-[18px]">
            <div className="flex space-x-4 items-center">
              <Image src={mail} alt="mail" />
              <p>invest@bitrest.xyz</p>
            </div>
            <div className="flex space-x-4 items-center">
              <Image src={phone} alt="mail" />
              <p>+123-456-7890</p>
            </div>
            <div className="flex space-x-4 items-center">
              <Image src={pin} alt="address" />
              <p>123 Real Estate Drive, Crypto City, Global Markets</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="grid w-full px-[40px] lg:px-[120px] gap-8 grid-cols-1 items-end sm:grid-cols-2">
        <div className="w-full flex flex-col space-y-6 justify-between h-full  items-start">
          <Image className="mb-[12px]" src={logo} alt="logo" />
          <p className="text-[18px] font-manrope">
            Subscribe to receive the latest updates, exclusive investment
            opportunities, and expert insights on bitcoin-powered real estate
            crowdfunding directly to your inbox.
          </p>
          <div className="w-full bg-[#106547] justify-between border border-[#5BC6A3] flex items-center px-4 h-[50px]">
            <p>Your Email</p>
            <input
              type="text"
              className="outline-none bg-transparent"
              name=""
              id=""
            />
            <div className="h-[40px] rounded-[4px] flex items-center justify-center w-[50px] bg-[#368E72]">
              <Image src={arrow} alt="arrow" />
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="w-full space-y-4">
            <p className="text-[26px] font-[500]">Product</p>
            <p className="text-[18px] font-manrope">RE Crowdfunding</p>
            <p className="text-[18px] font-manrope">Tokenized Assets</p>
            <p className="text-[18px] font-manrope">Auto Portfolios</p>
            <p className="text-[18px] font-manrope">Staking Funds</p>
          </div>
          <div className="w-full space-y-4">
            <p className="text-[26px] font-[500]">Business</p>
            <p className="text-[18px] font-manrope">CryptoMange</p>
            <p className="text-[18px] font-manrope">BlockCunsult</p>
            <p className="text-[18px] font-manrope">Global Exchange</p>
            <p className="text-[18px] font-manrope">TokenTrade</p>
          </div>
          <div className="w-full space-y-4">
            <p className="text-[26px] font-[500]">Socials</p>
            <p className="text-[18px] font-manrope">Facebook</p>
            <p className="text-[18px] font-manrope">Discord</p>
            <p className="text-[18px] font-manrope">Youtube</p>
            <p className="text-[18px] font-manrope">Telegram</p>
          </div>
        </div>
      </div>
      <div className="w-full px-[40px] lg:px-[120px]">
        <div className="w-full h-[0.5px] mt-[50px] text-[#26CE92] bg-[#26CE92]" />
        <p className="mt-[20px] font-manrope text-[18px]">
          © 2024 Bitrest All rights reserved | info@bitrest.xyz
        </p>
      </div>
    </div>
  );
}
