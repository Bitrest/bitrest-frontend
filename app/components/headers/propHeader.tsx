"use client";
import Image from "next/image";
import logo from "@/public/icons/black bit.svg";
import Link from "next/link";
import notif from "@/public/icons/notif.svg";
import moon from "@/public/icons/moon.svg";
import search from "@/public/icons/search.svg";
import { useState } from "react";

export default function PropHeader() {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <div className="w-full bg-[#101313] px-[36px] border-b-[1px] border-[#D4FAFE05]">
      <div className="w-full relative bg-transparent flex justify-between items-center py-8">
        <Image className="mr-[40px]" src={logo} alt="logo" />
        <div className="w-[450px] hidden lg:flex items-center rounded-[8px] bg-white/[8%]">
          <input
            type="text"
            className="h-[40px] text-[14px] outline-none bg-transparent w-full px-4 text-white placeholder-white/60"
            placeholder="Search Properties"
          />
          <Image
            className="w-[20px] h-[20px] mr-4 cursor-pointer"
            src={search}
            alt="Search"
          />
        </div>
        <div className="font-outfit text-white hidden text-[14px] lg:flex items-center space-x-3">
          <p>Invest</p>
          <p>Portfolio</p>
          <p>Profile</p>
        </div>
        <div className="h-[40px] hidden lg:block bg-white/[30%] w-[1px]"></div>

        <div
          onClick={() => setShowMenu(!showMenu)}
          className="flex z-40 lg:hidden flex-col space-y-2"
        >
          <div
            className={`w-[50px] ${
              showMenu ? "rotate-45 translate-y-2" : ""
            } h-[2px] rounded-sm transition-transform bg-white`}
          ></div>
          <div
            className={`w-[50px] ${
              showMenu ? "hidden" : "block"
            } h-[2px] rounded-sm transition-transform bg-white`}
          ></div>
          <div
            className={`w-[50px] ${
              showMenu ? "-rotate-45 -translate-y-2" : ""
            } h-[2px] rounded-sm transition-transform bg-white`}
          ></div>{" "}
        </div>

        <div className="font-outfit hidden lg:flex items-center space-x-4">
          <Link
            className="h-[40px] bg-white/[8%] items-center justify-center flex flex-col w-[40px]"
            href={"/signin"}
          >
            <Image className="z-40" src={notif} alt="Notification" />
          </Link>
          <Link
            className="h-[40px] bg-white/[8%] items-center justify-center flex flex-col w-[40px]"
            href={"/signin"}
          >
            <Image className="z-40" src={moon} alt="Night Mode" />
          </Link>
        </div>
        <button className="bg-[#D4FAFE] hidden lg:block w-fit px-4 border text-[#063D37] py-2">
          Connect Wallet
        </button>
      </div>
      {showMenu && (
        <div className="absolute top-0 left-0 flex  px-[36px] items-start justify-start text-white text-[20px] bg-[#101313] flex-col space-y-5 z-50 w-full h-screen">
          <div className="w-full flex py-8 justify-between mb-[30px] ">
            <Image className="" src={logo} alt="logo" />
            <div
              onClick={() => setShowMenu(!showMenu)}
              className="flex z-40 lg:hidden flex-col space-y-2"
            >
              <div
                className={`w-[50px]  h-[2px] rounded-sm transition-transform bg-white`}
              ></div>
              <div
                className={`w-[50px]  h-[2px] rounded-sm transition-transform bg-white`}
              ></div>
              <div
                className={`w-[50px]  h-[2px] rounded-sm transition-transform bg-white`}
              ></div>
            </div>
          </div>

          <div className="w-[90%] max-w-[450px] text-white flex items-center rounded-[8px] bg-white/[8%]">
            <input
              type="text"
              className="h-[40px] text-[14px] outline-none bg-transparent w-full px-4 text-white placeholder-white/60"
              placeholder="Search Properties"
            />
            <Image
              className="w-[20px] h-[20px] mr-4 cursor-pointer"
              src={search}
              alt="Search"
            />
          </div>

          <p>Invest</p>
          <p>Portfolio</p>
          <p>Profile</p>
          <div className="font-outfit flex items-center space-x-4">
            <Link
              className="h-[40px] bg-white/[8%] items-center justify-center flex flex-col w-[40px]"
              href={"/signin"}
            >
              <Image className="z-40" src={notif} alt="Notification" />
            </Link>
            <Link
              className="h-[40px] bg-white/[8%] items-center justify-center flex flex-col w-[40px]"
              href={"/signin"}
            >
              <Image className="z-40" src={moon} alt="Night Mode" />
            </Link>
          </div>
          <button className="bg-[#D4FAFE] w-fit px-4 border text-[#063D37] py-2">
            Connect Wallet
          </button>
        </div>
      )}
    </div>
  );
}
