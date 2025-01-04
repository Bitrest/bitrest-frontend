"use client";
import Image from "next/image";
import logo from "@/public/images/Bitrest logo.svg";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <div className="w-full bg-[#10352F]">
      <div className="w-full relative bg-transparent flex justify-between items-center px-[40px] lg:px-[120px] py-8">
        <Image className="z-40" src={logo} alt="logo" />
        <div className="font-outfit  hidden text-[20px] sm:flex items-center space-x-3">
          <p>About</p>
          <p>Product</p>
          <p>Contact Us</p>
        </div>

        <div
          onClick={() => setShowMenu(!showMenu)}
          className="flex z-40 sm:hidden flex-col space-y-2"
        >
          <div
            className={`w-[50px] ${
              showMenu ? "rotate-45 translate-y-2" : ""
            } h-[2px] rounded-sm transition-transform bg-[#5BC6A3]`}
          ></div>
          <div
            className={`w-[50px] ${
              showMenu ? "hidden" : "block"
            } h-[2px] rounded-sm  transition-transform bg-[#5BC6A3]`}
          ></div>
          <div
            className={`w-[50px] ${
              showMenu ? "-rotate-45 -translate-y-2" : ""
            } h-[2px] rounded-sm transition-transform bg-[#5BC6A3]`}
          ></div>{" "}
        </div>

        <div className="font-outfit hidden sm:flex items-center space-x-4">
          <Link className="text-[20px]" href={"/signin"}>
            Login
          </Link>
          <Link
            href={"/signup"}
            className="border text-[20px] border-[#5BC6A3] bg-[#02291B] px-4 py-2"
          >
            Sign Up
          </Link>
        </div>
      </div>
      {showMenu && (
        <div className="absolute text-[20px] flex flex-col px-8 space-y-5 pt-[30%] bg-custom-gradient min-h-screen  w-full">
          <p>About</p>
          <p>Product</p>
          <p>Contact Us</p>
          <Link className="text-[20px]" href={"/signin"}>
            Login
          </Link>
          <Link
            href={"/signup"}
            className="border w-fit text-[20px] border-[#5BC6A3] bg-[#02291B] px-4 py-2"
          >
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
}
