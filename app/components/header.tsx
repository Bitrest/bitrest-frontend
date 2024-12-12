"use client";
import Image from "next/image";
import logo from "@/public/images/Bitrest logo.svg";
import { useState } from "react";

export default function Header() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <div className="w-full">
      <div className="w-full relative bg-transparent flex justify-between items-center px-8 py-8">
        <Image src={logo} alt="logo" />
        <div className="font-outfit hidden  sm:flex items-center space-x-3">
          <p>About</p>
          <p>Product</p>
          <p>Contact Us</p>
        </div>

        <div
          onClick={() => setShowMenu(!showMenu)}
          className="flex sm:hidden flex-col space-y-2"
        >
          <div
            className={`w-[50px] ${
              showMenu ? "rotate-45 translate-y-2" : ""
            } h-[5px] rounded-sm transition-transform bg-[#5BC6A3]`}
          ></div>
          <div
            className={`w-[50px] ${
              showMenu ? "hidden" : "block"
            } h-2 rounded-sm  transition-transform bg-[#5BC6A3]`}
          ></div>
          <div
            className={`w-[50px] ${
              showMenu ? "-rotate-45 -translate-y-2" : ""
            } h-[5px] rounded-sm transition-transform bg-[#5BC6A3]`}
          ></div>{" "}
        </div>

        <div className="font-outfit hidden sm:flex items-center space-x-4">
          <p>Login</p>
          <p className="border border-[#5BC6A3] bg-[#02291B] px-4 py-2">
            Sign Up
          </p>
        </div>
      </div>
      {showMenu && (
        <div className="absolute flex flex-col px-8 space-y-5 pt-[30%] bg-custom-gradient min-h-screen  w-full">
          <p>About</p>
          <p>Product</p>
          <p>Contact Us</p>
          <p>Login</p>
          <p className="border w-fit border-[#5BC6A3] bg-[#02291B] px-4 py-2">
            Sign Up
          </p>
        </div>
      )}
    </div>
  );
}
