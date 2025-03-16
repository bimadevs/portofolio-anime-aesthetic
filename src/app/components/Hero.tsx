"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { images } from "@/app/lib/images";

export const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background dengan efek parallax */}
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
        <Image
          src={images.heroBg}
          alt="Anime aesthetic background"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Sakura petals animation */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-pink-300 rounded-full opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-5%`,
            }}
            animate={{
              y: ["0vh", "100vh"],
              x: [
                `${Math.random() * 10 - 5}px`,
                `${Math.random() * 100 - 50}px`,
                `${Math.random() * 50 - 25}px`,
              ],
              rotate: [0, 360],
              opacity: [0.7, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Anime-style decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ delay: 1, duration: 2 }}
          className="absolute top-10 right-10 w-40 h-40 border-2 border-pink-500/30 rounded-full"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ delay: 1.5, duration: 2 }}
          className="absolute bottom-20 left-10 w-60 h-60 border-2 border-purple-500/30 rounded-full"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 2, duration: 2 }}
          className="absolute top-1/3 left-1/4 w-80 h-80 border-2 border-blue-500/20 rounded-full"
        />
      </div>

      {/* Konten Hero */}
      <div className="relative z-20 flex min-h-screen items-center justify-center px-4">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-4 flex justify-center"
          >
            <div className="inline-block px-3 py-1 text-sm font-medium text-white bg-purple-500/20 backdrop-blur-sm rounded-full border border-purple-500/30">
              ポートフォリオ • Portfolio
            </div>
          </motion.div>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-6 text-6xl font-bold tracking-tight text-white md:text-8xl"
          >
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              クリエイティブ
            </span>{" "}
            <span className="block md:inline">デベロッパー</span>
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mb-8 text-lg text-gray-300 md:text-xl"
          >
            アニメの美学で<span className="text-pink-400">デジタル世界</span>を創造する
            <span className="block mt-1">Mengubah ide menjadi realitas digital dengan sentuhan anime aesthetic</span>
          </motion.p>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white dark:focus:ring-blue-800 w-full sm:w-auto"
              role="button"
              tabIndex={0}
              aria-label="Explore Projects"
            >
              <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900 w-full">
                プロジェクト探索
              </span>
            </button>
            <button
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg p-0.5 text-sm font-medium border border-pink-500/50 text-white hover:text-pink-300 focus:outline-none focus:ring-4 focus:ring-pink-300/30 w-full sm:w-auto mt-3 sm:mt-0"
              role="button"
              tabIndex={0}
              aria-label="Contact Me"
            >
              <span className="relative rounded-md px-5 py-2.5 transition-all duration-75 ease-in w-full">
                お問い合わせ
              </span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center">
          <span className="mb-2 text-sm text-gray-400">スクロールダウン</span>
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="h-6 w-4 rounded-full border-2 border-white"
          >
            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="mx-auto mt-1 h-2 w-1 rounded-full bg-white"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}; 