"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { images } from "@/app/lib/images";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0a0a0a] py-16">
      {/* Anime-style background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div 
          className="absolute top-0 left-0 w-full h-full bg-repeat opacity-5"
          style={{ backgroundImage: `url(${images.patternDots})` }}
        ></div>
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-80 h-80 bg-purple-500 rounded-full filter blur-[120px]"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and description */}
          <div className="space-y-4">
            <Link href="/" className="text-xl font-bold text-white" aria-label="Home">
              <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                Anime
              </span>
              Portfolio
            </Link>
            <p className="text-gray-400 text-sm">
              ポートフォリオサイト • Portfolio Website
              <span className="block mt-1">
                Dibuat dengan 💜 dan teknologi modern
              </span>
            </p>
            <div className="pt-4 flex space-x-3">
              {["GitHub", "Twitter", "LinkedIn", "Instagram"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="bg-white/5 hover:bg-white/10 transition-colors p-2 rounded-lg"
                  aria-label={social}
                >
                  <span className="text-xs text-gray-400">{social}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium mb-4">
              クイックリンク • Quick Links
            </h3>
            <ul className="space-y-2">
              {["About", "Projects", "Skills", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center"
                  >
                    <span className="text-pink-500 mr-2">›</span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-medium mb-4">
              サービス • Services
            </h3>
            <ul className="space-y-2">
              {[
                "Web Development",
                "UI/UX Design",
                "Mobile Apps",
                "Consulting",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center"
                  >
                    <span className="text-blue-500 mr-2">›</span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-medium mb-4">
              ニュースレター • Newsletter
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              最新情報を受け取る • Get the latest updates
            </p>
            <form className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500/50 text-white text-sm"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs rounded-md"
                >
                  登録 • Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Divider with anime style */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {currentYear} AnimePortfolio. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-gray-300 text-xs">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-300 text-xs">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-300 text-xs">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Anime-style decorative elements */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
        </div>
      </div>
    </footer>
  );
}; 