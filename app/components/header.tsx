"use client";
import Image from "next/image";
import logo from "@/public/images/Bitrest logo.svg";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <div className="w-full px-[20px] lg:px-[40px] bg-none relative">
      <div className="w-full bg-transparent flex justify-between items-center  py-8">
        <Link href="/" className="z-40">
          <Image src={logo} alt="logo" className="h-[26px]" />
        </Link>

        <div className="font-outfit z-40 text-white text-[16px] hidden bg-[#151717]  sm:flex items-center py-[19px] px-[25px] rounded-[20px] space-x-[43px]">
          <Link
            href="/"
            className="cursor-pointer hover:text-[#5BC6A3] transition-colors"
          >
            Home
          </Link>

          <Link
            href="/"
            className="cursor-pointer hover:text-[#5BC6A3] transition-colors"
          >
            Products
          </Link>
          <Link
            href="/"
            className="cursor-pointer hover:text-[#5BC6A3] transition-colors"
          >
            Features
          </Link>
          <Link
            href="/"
            className="cursor-pointer hover:text-[#5BC6A3] transition-colors"
          >
            Contact
          </Link>
        </div>

        <button
          onClick={() => setShowMenu(!showMenu)}
          className="flex z-50 sm:hidden flex-col space-y-2"
          aria-label="Toggle menu"
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
          ></div>
        </button>

        <div className="font-outfit hidden sm:flex items-center space-x-4 z-40">
          <Link
            className="text-[16px] cursor-pointer hover:text-[#5BC6A3] transition-colors"
            href="/signin"
          >
            Log In
          </Link>
          <Link
            href="/signup"
            className="border  text-[16px] rounded-[16px] cursor-pointer text-black bg-[#D4FAFE] px-4 py-2 hover:bg-[#5BC6A3] hover:text-[#02291B] transition-all"
          >
            Sign Up
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black transition-transform duration-300 z-40 sm:hidden ${
          showMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col px-8 space-y-5 pt-[30%] text-[20px]">
          <Link
            href="/"
            className="hover:text-[#5BC6A3] transition-colors"
            onClick={() => setShowMenu(false)}
          >
            Home
          </Link>
          <Link
            href="/"
            className="hover:text-[#5BC6A3] transition-colors"
            onClick={() => setShowMenu(false)}
          >
            Product
          </Link>
          <Link
            href="/"
            className="hover:text-[#5BC6A3] transition-colors"
            onClick={() => setShowMenu(false)}
          >
            Features
          </Link>
          <Link
            href="/"
            className="hover:text-[#5BC6A3] transition-colors"
            onClick={() => setShowMenu(false)}
          >
            Contact
          </Link>
          <Link
            className="text-[16px] cursor-pointer hover:text-[#5BC6A3] transition-colors"
            href="/signin"
          >
            Log In
          </Link>
          <Link
            href="/signup"
            className="border w-fit text-[16px] rounded-[16px] cursor-pointer text-black bg-[#D4FAFE] px-4 py-2 hover:bg-[#5BC6A3] hover:text-[#02291B] transition-all"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
