"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

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
        isScrolled || isMobileMenuOpen
          ? "bg-black/50 backdrop-blur-lg"
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
          className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:text-white dark:focus:ring-blue-800 md:hidden"
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
          tabIndex={0}
          onClick={handleMobileMenuToggle}
          onKeyDown={(e) => e.key === 'Enter' && handleMobileMenuToggle()}
        >
          <span className="relative rounded-md bg-white px-4 py-2 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
            {isMobileMenuOpen ? "Close" : "Menu"}
          </span>
        </button>
      </div>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="absolute left-0 top-full w-full bg-black/80 backdrop-blur-lg p-5 flex flex-col gap-4 border-t border-gray-800"
        >
          {["About", "Projects", "Skills", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-white py-3 px-4 hover:bg-white/5 rounded-lg transition-colors"
              aria-label={item}
              onClick={closeMobileMenu}
              onKeyDown={(e) => e.key === 'Enter' && closeMobileMenu()}
              tabIndex={0}
            >
              <span className="relative">
                {item}
              </span>
            </Link>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}; 