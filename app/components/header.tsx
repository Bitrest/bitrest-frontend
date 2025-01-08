"use client";
import Image from "next/image";
import logo from "@/public/images/Bitrest logo.svg";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <div className="w-full bg-[#10352F] relative">
      <div className="w-full bg-transparent flex justify-between items-center px-[40px] lg:px-[120px] py-8">
        <Link href="/" className="z-40">
          <Image src={logo} alt="logo" />
        </Link>

        <div className="font-outfit hidden text-[20px] sm:flex items-center space-x-3">
          <Link
            href="/about"
            className="cursor-pointer hover:text-[#5BC6A3] transition-colors"
          >
            About
          </Link>
          <Link
            href="/product"
            className="cursor-pointer hover:text-[#5BC6A3] transition-colors"
          >
            Product
          </Link>
          <Link
            href="/contact"
            className="cursor-pointer hover:text-[#5BC6A3] transition-colors"
          >
            Contact Us
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
            } h-[2px] rounded-sm transition-transform bg-[#5BC6A3]`}
          ></div>
          <div
            className={`w-[50px] ${
              showMenu ? "hidden" : "block"
            } h-[2px] rounded-sm transition-transform bg-[#5BC6A3]`}
          ></div>
          <div
            className={`w-[50px] ${
              showMenu ? "-rotate-45 -translate-y-2" : ""
            } h-[2px] rounded-sm transition-transform bg-[#5BC6A3]`}
          ></div>
        </button>

        <div className="font-outfit hidden sm:flex items-center space-x-4 z-40">
          <Link
            className="text-[20px] cursor-pointer hover:text-[#5BC6A3] transition-colors"
            href="/signin"
          >
            Log In
          </Link>
          <Link
            href="/signup"
            className="border text-[20px] cursor-pointer border-[#5BC6A3] bg-[#02291B] px-4 py-2 hover:bg-[#5BC6A3] hover:text-[#02291B] transition-all"
          >
            Sign Up
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-custom-gradient transition-transform duration-300 z-40 sm:hidden ${
          showMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col px-8 space-y-5 pt-[30%] text-[20px]">
          <Link
            href="/about"
            className="hover:text-[#5BC6A3] transition-colors"
            onClick={() => setShowMenu(false)}
          >
            About
          </Link>
          <Link
            href="/product"
            className="hover:text-[#5BC6A3] transition-colors"
            onClick={() => setShowMenu(false)}
          >
            Product
          </Link>
          <Link
            href="/contact"
            className="hover:text-[#5BC6A3] transition-colors"
            onClick={() => setShowMenu(false)}
          >
            Contact Us
          </Link>
          <Link
            href="/signin"
            className="hover:text-[#5BC6A3] transition-colors"
            onClick={() => setShowMenu(false)}
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="border w-fit text-[20px] border-[#5BC6A3] bg-[#02291B] px-4 py-2 hover:bg-[#5BC6A3] hover:text-[#02291B] transition-all"
            onClick={() => setShowMenu(false)}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
