"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { audiowide } from "../fonts";

const menuItems = ["Products", "Features", "Pricing", "Support"];

const mobileMenuVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Scroll Lock with cleanup
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#191818]/80  ">

      <div className="max-w-[1200px] mx-auto h-[80px] flex items-center justify-between px-6">

        {/* Logo */}
        <div className="flex items-center ">
          <Image
            src="/logo.png"
            alt="Bemaxz Logo"
            width={42}
            height={40}
            priority
          />
          <span className={`${audiowide.className} text-xl text-white`}>
            Bemaxz
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10">
          {menuItems.map((item) => (
            <motion.a
              key={item}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative text-sm font-semibold text-white group cursor-pointer"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#4EA62F] transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}

          <button className="h-[40px] px-6 border-2 border-white rounded-lg text-sm font-semibold text-white hover:bg-[#4EA62F] hover:border-[#4EA62F] transition-all duration-300">
            Start free trial
          </button>
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="w-6 h-[2px] bg-white mb-1"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-[2px] bg-white mb-1"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="w-6 h-[2px] bg-white"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-[80px] left-0 w-full h-screen bg-[#111111] flex flex-col items-center pt-16 gap-8"
          >
            {menuItems.map((item, i) => (
              <motion.a
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setIsOpen(false)}
                className="text-lg font-semibold text-white hover:text-[#4EA62F]"
              >
                {item}
              </motion.a>
            ))}

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 h-[40px] px-6 border-2 border-white rounded-lg text-sm font-semibold text-white hover:bg-[#4EA62F] hover:border-[#4EA62F] transition-all duration-300"
            >
              Start free trial
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
