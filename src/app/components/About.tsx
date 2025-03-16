"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { images } from "@/app/lib/images";

export const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-[#1a1a1a] py-20"
    >
      {/* Anime-style background patterns */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div 
          className="absolute top-0 left-0 w-full h-full bg-repeat opacity-5"
          style={{ backgroundImage: `url(${images.patternDots})` }}
        ></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full filter blur-[100px]"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full filter blur-[100px]"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Visual Novel Style Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="inline-block text-sm font-semibold text-pink-400 tracking-wider uppercase">
            第一章 • Chapter One
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            開発者の物語 • The Developer's Story
          </p>
          <div className="mt-4 mx-auto w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-8 backdrop-blur-sm border border-white/10"
        >
          {/* Visual Novel Dialog Box */}
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
          
          <div className="relative grid gap-8 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="prose prose-invert max-w-none"
              >
                {/* Visual Novel Style Dialog */}
                <div className="mb-6 p-4 bg-black/40 backdrop-blur-sm rounded-lg border border-white/10 shadow-lg">
                  <div className="flex items-center mb-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mr-2"></div>
                    <p className="text-pink-400 font-medium">デベロッパー • Developer</p>
                  </div>
                  <p className="mb-4 text-gray-300">
                    「私の開発者としての旅では、様々な最新技術やフレームワークを探求し、魅力的なデジタル体験を創造してきました。」
                  </p>
                  <p className="text-sm text-gray-400 italic">
                    Dalam perjalanan sebagai developer, saya telah mengeksplorasi berbagai teknologi
                    dan framework modern untuk menciptakan pengalaman digital yang memukau.
                  </p>
                </div>

                <div className="mb-6 p-4 bg-black/40 backdrop-blur-sm rounded-lg border border-white/10 shadow-lg">
                  <div className="flex items-center mb-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mr-2"></div>
                    <p className="text-pink-400 font-medium">デベロッパー • Developer</p>
                  </div>
                  <p className="mb-4 text-gray-300">
                    「アニメと漫画の世界への情熱を持ち、日本のビジュアル美学と最新のウェブ技術を組み合わせて、ユニークで印象的な作品を生み出しています。」
                  </p>
                  <p className="text-sm text-gray-400 italic">
                    Dengan passion dalam dunia anime dan manga, saya menggabungkan estetika
                    visual Jepang dengan teknologi web modern untuk menciptakan karya-karya
                    yang unik dan berkesan.
                  </p>
                </div>

                <div className="mt-8 flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white dark:focus:ring-blue-800"
                    role="button"
                    tabIndex={0}
                    aria-label="Download Resume"
                  >
                    <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
                      履歴書をダウンロード
                    </span>
                  </motion.button>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="relative aspect-square overflow-hidden rounded-xl"
            >
              {/* Anime Character Frame */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20" />
              <div className="absolute inset-0 border-[3px] border-white/10 rounded-xl z-10"></div>
              <Image
                src={images.characterPortrait}
                alt="Developer portrait in anime style"
                fill
                className="object-cover"
              />
              
              {/* Anime-style character info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/60 backdrop-blur-sm">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-white font-medium">デベロッパー</p>
                    <p className="text-xs text-gray-300">Creative Developer</p>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 