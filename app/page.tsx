import Header from "./components/header";
import Image from "next/image";
import hero from "@/public/real estate 1.svg";
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

export default function Home() {
  return (
    <div className="w-full  text-white relative items-center justify-items-center min-h-screen pb-20 gap-16 font-carbonic">
      <Header />
      <Image className="absolute top-0 left-0 -z-10" src={blur1} alt="hero" />

      {/* Hero Section */}
      <div className="h-[50%] px-8 items-center py-10 grid grid-cols-1 space-y-8 sm:space-y-0 sm:grid-cols-2">
        <div>
          <p className="text-[50px]">
            Invest in Real Estate
            <br />
            with <span className="text-[#CAFBFF]">Bitcoin</span>
          </p>
          <p className="font-roboto text-[20px]">
            Unlock real estate opportunities across the globe. Use your bitcoin
            to securely invest in high-potential properties through a
            streamlined, transparent crowdfunding platform designed for modern
            investors.
          </p>
          <div className="mt-[10px] font-outfit flex space-x-8 items-center">
            <p className="bg-[#CAFBFF] rounded-[4px] px-4 py-2 text-[#02291B]">
              Invest Now
            </p>
            <p className="border rounded-[4px] w-fit border-[#5BC6A3] bg-[#02291B] px-4 py-2">
              Learn More
            </p>
          </div>
        </div>
        <div className="">
          <Image src={hero} alt="hero" />

          <div className="absolute inset-0 right-0 z-[-1] h-[714px] w-[714px] bg-gradient-to-[131.19deg] from-[#5BC6A3] to-black opacity-50"></div>
        </div>
      </div>
      {/* About Us Section */}
      <div className="w-full flex py-[100px]  border-b border-b-[#D4FAFE] items-center flex-col">
        <p className="text-center text-[45px]">About Us</p>
        <p className="text-center flex justify-center items-center text-[16px] w-[50%]">
          At Bitrest, we believe that real estate should be accessible to
          everyone, regardless of location or financial status. By combining
          real estate crowdfunding with bitcoin, we’ve created a platform that
          democratizes investment and empowers individuals to grow their wealth
          with ease.
        </p>

        <div className="flex flex-col lg:space-x-8 mt-[20px] lg:space-y-0 space-y-8 lg:flex-row">
          <div className="min-h-[253px] px-8 py-8 flex flex-col bg-inherit w-[300px] border border-[#5BC6A3]">
            <div className="flex  space-x-4">
              <Image src={globe} alt="global" />
              <p className="text-[26px]">Global Reach</p>
            </div>
            <p>
              Invest in real estate projects from different parts of the world
              without the limitations of traditional banking systems.
            </p>
          </div>
          <div className="min-h-[253px] px-8 py-8 flex flex-col bg-inherit w-[300px] border border-[#5BC6A3]">
            <div className="flex items-center space-x-4">
              <Image src={security} alt="security" />
              <p className="text-[26px]">Security</p>
            </div>
            <p>
              Blockchain ensures all investments are recorded and verified on a
              decentralized ledger, providing maximum security.{" "}
            </p>
          </div>
          <div className="min-h-[253px] px-8 py-8 flex flex-col bg-inherit w-[300px] border border-[#5BC6A3]">
            <div className="flex  space-x-4">
              <Image src={inclusivity} alt="inclusivity" />
              <p className="text-[26px]">Inclusivity</p>
            </div>
            <p>
              Whether you&apos;re an experienced investor or just starting,
              Bitrest is designed for everyone. You don&apos;t need millions to
              start.
            </p>
          </div>
        </div>
      </div>

      {/* Products Sections */}
      <div className="w-full flex relative border-dashed py-[100px] border-b border-b-[#D4FAFE] items-center flex-col">
        {/* Top blur */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px]"
          style={{
            background:
              "linear-gradient(131.19deg, #5BC6A3 17.5%, #000000 125.95%)",
            filter: "blur(300px)",
            zIndex: -1,
          }}
        />

        {/* Bottom left blur */}
        <div
          className="absolute -bottom-8 left-0 w-[600px] h-[400px]"
          style={{
            background:
              "linear-gradient(131.19deg, rgba(91, 198, 163, 0.76) 26.14%, rgba(0, 0, 0, 0.76) 134.59%)",
            filter: "blur(300px)",
            zIndex: -1,
          }}
        />

        <p className="text-center text-[45px]">Products</p>
        <p className="text-center flex justify-center items-center text-[16px] w-[50%]">
          At Bitrest, we offer a range of products and services designed to help
          you seamlessly integrate bitcoin into your real estate investments.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 mt-[20px] gap-8">
          <div className="min-h-[253px] px-8 py-8 flex flex-col bg-inherit w-[400px] border border-[#5BC6A3]">
            <div className="justify-start items-start space-y-2">
              <Image src={estate} alt="estate" />
              <p className="text-[26px]">Real Estate Crowdfunding</p>
            </div>
            <p className="text-[18px] font-roboto">
              Gain access to a wide range of real estate projects across
              different regions. Pool your bitcoin assets with others to
              collectively invest in high-potential properties and developments.
            </p>
            <p className="border mt-4 rounded-[4px] w-fit border-[#5BC6A3] bg-[#02291B] px-4 py-2">
              Learn More
            </p>
          </div>
          <div className="min-h-[253px] px-8 py-8 flex flex-col bg-inherit w-[400px] border border-[#5BC6A3]">
            <div className="justify-start items-start space-y-2">
              <Image src={bitcoin} alt="bitcoin" />
              <p className="text-[26px]">Bitcoin-backed Investments</p>
            </div>
            <p className="text-[18px] font-roboto">
              Use your bitcoin holdings to invest directly in real estate
              without converting to fiat. This option allows for faster, more
              secure transactions, all managed through blockchain technology.
            </p>
            <p className="border mt-4 rounded-[4px] w-fit border-[#5BC6A3] bg-[#02291B] px-4 py-2">
              Learn More
            </p>
          </div>
          <div className="min-h-[253px] px-8 py-8 flex flex-col bg-inherit w-[400px] border border-[#5BC6A3]">
            <div className="justify-start items-start space-y-2">
              <Image src={estate} alt="estate" />
              <p className="text-[26px]">Portfolio Diversification</p>
            </div>
            <p className="text-[18px] font-roboto">
              Gain access to a wide range of real estate projects across
              different regions. Pool your bitcoin assets with others to
              collectively invest in high-potential properties and developments.
            </p>
            <p className="border mt-4 rounded-[4px] w-fit border-[#5BC6A3] bg-[#02291B] px-4 py-2">
              Learn More
            </p>
          </div>
          <div className="min-h-[253px] px-8 py-8 flex flex-col bg-inherit w-[400px] border border-[#5BC6A3]">
            <div className="justify-start items-start space-y-2">
              <Image src={bitcoin} alt="bitcoin" />
              <p className="text-[26px]">Transparent Reporting & Analytics</p>
            </div>
            <p className="text-[18px] font-roboto">
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
      <div className="w-full py-14 px-8">
        <div className="w-full border grid grid-cols-1 sm:grid-cols-2 items-end gap-8  border-[#5BC6A3] px-8 py-8">
          <div>
            <p className="text-[45px]">Ready to get started?</p>
            <p className="text-[18px] font-roboto">
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
      <div className="grid w-full px-8 gap-8 grid-cols-1 items-end sm:grid-cols-2">
        <div className="w-full flex flex-col space-y-6 justify-between h-full  items-start">
          <Image className="mb-[12px]" src={logo} alt="logo" />
          <p className="text-[18px] font-roboto">
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
            <p className="text-[18px] font-roboto">RE Crowdfunding</p>
            <p className="text-[18px] font-roboto">Tokenized Assets</p>
            <p className="text-[18px] font-roboto">Auto Portfolios</p>
            <p className="text-[18px] font-roboto">Staking Funds</p>
          </div>
          <div className="w-full space-y-4">
            <p className="text-[26px] font-[500]">Business</p>
            <p className="text-[18px] font-roboto">CryptoMange</p>
            <p className="text-[18px] font-roboto">BlockCunsult</p>
            <p className="text-[18px] font-roboto">Global Exchange</p>
            <p className="text-[18px] font-roboto">TokenTrade</p>
          </div>
          <div className="w-full space-y-4">
            <p className="text-[26px] font-[500]">Socials</p>
            <p className="text-[18px] font-roboto">Facebook</p>
            <p className="text-[18px] font-roboto">Discord</p>
            <p className="text-[18px] font-roboto">Youtube</p>
            <p className="text-[18px] font-roboto">Telegram</p>
          </div>
        </div>
      </div>
      <div className="w-full px-8">
        <div className="w-full h-[0.5px] mt-[50px] text-[#26CE92] bg-[#26CE92]" />
        <p className="mt-[20px] font-roboto text-[18px]">
          © 2024 Bitrest All rights reserved | info@bitrest.xyz
        </p>
      </div>
    </div>
  );
}
