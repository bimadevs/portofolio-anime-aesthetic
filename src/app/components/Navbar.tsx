"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/30 backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between p-5">
        <Link
          href="/"
          className="text-xl font-bold text-white"
          aria-label="Home"
        >
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Anime
          </span>
          Portfolio
        </Link>

        <div className="hidden space-x-8 md:flex">
          {["About", "Projects", "Skills", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-gray-300 transition-colors hover:text-white"
              aria-label={item}
            >
              <span className="relative">
                {item}
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 w-0 bg-purple-400"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </span>
            </Link>
          ))}
        </div>

        <button
          className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white dark:focus:ring-blue-800 md:hidden"
          aria-label="Menu"
          tabIndex={0}
        >
          <span className="relative rounded-md bg-white px-4 py-2 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
            Menu
          </span>
        </button>
      </div>
    </motion.nav>
  );
}; 