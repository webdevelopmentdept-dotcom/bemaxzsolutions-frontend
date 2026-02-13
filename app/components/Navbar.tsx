"use client";

import { useState } from "react";
import Image from "next/image";
import { audiowide } from "../fonts";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-[#191818] relative">

      {/* Main Container */}
      <div className="max-w-[1173px] mx-auto h-[80px] flex items-center justify-between px-4 ">

        {/* LEFT - Logo */}
     
        <div className="flex items-center md:ml-6">
  <Image
    src="/logo.png"
    alt="Bemaxz Icon"
    width={42}
    height={40}
    priority
    className="block"
  />

  <span
    className={`${audiowide.className} text-[20px] md:text-[24px] text-white`}
  >
    Bemaxz
  </span>
</div>


        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4 md:gap-[60px] mr-4 md:mr-6">

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-[40px]">
            <a className="text-[16px] font-semibold text-white hover:text-[#4EA62F] transition-colors duration-300 cursor-pointer">
              Products
            </a>
            <a className="text-[16px] font-semibold text-white hover:text-[#4EA62F] transition-colors duration-300 cursor-pointer">
              Features
            </a>
            <a className="text-[16px] font-semibold text-white hover:text-[#4EA62F] transition-colors duration-300 cursor-pointer">
              Pricing
            </a>
            <a className="text-[16px] font-semibold text-white hover:text-[#4EA62F] transition-colors duration-300 cursor-pointer">
              Support
            </a>
          </nav>

          {/* Desktop CTA */}
          <button className="hidden md:block h-[40px] px-[24px] border-[2.5px] border-white rounded-[8px] text-[16px] font-semibold text-white bg-transparent hover:bg-[#4EA62F] hover:border-[#4EA62F] transition-all duration-300">
            Start free trial
          </button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-3xl"
          >
            {isOpen ? "✕" : "☰"}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-[80px] left-0 w-full bg-[#111111] transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center gap-6 py-8">

          <a
            className="text-[18px] font-semibold text-white hover:text-[#4EA62F] transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Products
          </a>

          <a
            className="text-[18px] font-semibold text-white hover:text-[#4EA62F] transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Features
          </a>

          <a
            className="text-[18px] font-semibold text-white hover:text-[#4EA62F] transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </a>

          <a
            className="text-[18px] font-semibold text-white hover:text-[#4EA62F] transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Support
          </a>

          <button className="mt-4 h-[40px] px-[24px] border-[2.5px] border-white rounded-[8px] text-[16px] font-semibold text-white hover:bg-[#4EA62F] hover:border-[#4EA62F] transition-all duration-300">
            Start free trial
          </button>

        </div>
      </div>

    </header>
  );
}
