import facebook from "@/public/icons/Facebook.svg";
import instagram from "@/public/icons/Instagram.svg";
import twitter from "@/public/icons/Twitter.svg";
import Image from "next/image";
import email from "@/public/icons/email small.svg";
export default function PropFooter() {
  return (
    <div className="w-full mt-[150px] px-[40px] py-[20px]">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col gap-[120px] mb-[70px] lg:flex-row justify-between">
          <div className="text-[14px] text-white/80">
            <p className="mb-[24px] text-white/60 font-[500] text-[12px]">
              INVESTING
            </p>
            <div className="space-y-[16px]">
              <p>Listings</p>
              <p>Portfolio</p>
              <p>Investment Advisors</p>
            </div>
          </div>
          <div className="text-[14px] text-white/80">
            <p className="mb-[24px] text-white/60 font-[500] text-[12px]">
              COMPANY
            </p>
            <div className="space-y-[16px]">
              <p>Our Team</p>
              <p>Careers</p>
              <p>About Us</p>
            </div>
          </div>
          <div className="text-[14px] text-white/80">
            <p className="mb-[24px] text-white/60 font-[500] text-[12px]">
              LEARN MORE
            </p>
            <div className="space-y-[16px]">
              <p>Blogs</p>
              <p>Market Insights</p>
              <p>Press Releases</p>
            </div>
          </div>
        </div>
        <div className="w-[360px] text-white/60 text-[12px]">
          <p>INVESTING PORTAL</p>
          <p className="mt-[12px] mb-[40px]">
            Get occasional updates on news, insights and opportunities
          </p>
          <div className="flex justify-between items-center h-[56px] w-[360px] px-[8px] py-[13px]">
            <Image src={email} alt="email" />
            <input
              type="text"
              placeholder="Email Address"
              className="w-full bg-transparent px-[10px]"
            />
            <button className="h-[30px] text-[14px] text-[#063D37] w-[68px] rounded-[3px] bg-[#d4fafe]">
              Send
            </button>
          </div>
        </div>
      </div>
      <hr className="w-full border-[0.5px] border-white/60" />
      <div className="w-full py-[48px] items-center  flex justify-between">
        <p className="text-[14px] text-white/60">© 2025 Bitrest.</p>
        <div className="flex gap-[32px]">
          <Image src={instagram} alt="instagram" />
          <Image src={facebook} alt="facebook" />
          <Image src={twitter} alt="twitter" />
        </div>
      </div>
    </div>
  );
}
