"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { images } from "@/app/lib/images";

export const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen bg-[#0f0f13] py-10 md:py-20 overflow-x-hidden"
    >
      {/* Manga-style background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div 
          className="absolute top-0 left-0 w-full h-full bg-repeat opacity-5"
          style={{ backgroundImage: `url(${images.patternManga})` }}
        ></div>
        <div className="absolute top-20 right-20 w-40 md:w-60 h-40 md:h-60 bg-pink-500 rounded-full filter blur-[80px] md:blur-[120px]"></div>
        <div className="absolute bottom-40 left-20 w-40 md:w-60 h-40 md:h-60 bg-purple-500 rounded-full filter blur-[80px] md:blur-[120px]"></div>
      </div>

      {/* Manga-style speed lines - reduced number for mobile */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-white h-full w-[1px]"
            style={{
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.1,
              transform: `rotate(${Math.random() * 10 - 5}deg)`,
            }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:py-12 md:py-16 sm:px-6 lg:px-8 relative z-10">
        {/* Manga-style section header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-16 text-center"
        >
          <h2 className="inline-block text-sm font-semibold text-pink-400 tracking-wider uppercase">
            お問い合わせ • Contact
          </h2>
          <p className="mt-2 text-2xl md:text-3xl font-bold tracking-tight text-white sm:text-4xl">
            メッセージを送る • Send a Message
          </p>
          <div className="mt-4 mx-auto w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-600 rounded-full"></div>
        </motion.div>

        <div className="grid gap-6 md:gap-8 grid-cols-1 lg:grid-cols-2">
          {/* Manga-style contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900/90 to-black/90 p-5 md:p-8 shadow-xl border border-white/10 h-full">
              {/* Manga-style speech bubble */}
              <div className="relative mb-6 md:mb-8 p-4 md:p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <div className="absolute -bottom-4 left-8 w-8 h-8 bg-white/10 border-r border-b border-white/20 transform rotate-45"></div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
                  一緒に素晴らしいものを作りましょう！
                </h3>
                <p className="text-sm md:text-base text-gray-300">
                  Mari berkolaborasi untuk menciptakan sesuatu yang luar biasa! Jangan ragu untuk menghubungi saya untuk diskusi proyek, pertanyaan, atau hanya untuk menyapa.
                </p>
              </div>

              {/* Manga-style contact details */}
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-pink-500/20 p-2 md:p-3 rounded-lg">
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-pink-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="ml-3 md:ml-4">
                    <h4 className="text-base md:text-lg font-medium text-white">メール • Email</h4>
                    <p className="mt-1 text-sm md:text-base text-gray-300">hello@example.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-purple-500/20 p-2 md:p-3 rounded-lg">
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-purple-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div className="ml-3 md:ml-4">
                    <h4 className="text-base md:text-lg font-medium text-white">場所 • Location</h4>
                    <p className="mt-1 text-sm md:text-base text-gray-300">Tokyo, Japan</p>
                  </div>
                </div>

                {/* Manga-style social links */}
                <div className="pt-4 md:pt-6 mt-4 md:mt-6 border-t border-white/10">
                  <h4 className="text-base md:text-lg font-medium text-white mb-3 md:mb-4">ソーシャル • Social</h4>
                  <div className="flex flex-wrap gap-2 md:space-x-4">
                    {["GitHub", "Twitter", "LinkedIn", "Instagram"].map((social) => (
                      <a
                        key={social}
                        href="#"
                        className="bg-white/10 hover:bg-white/20 transition-colors p-2 md:p-3 rounded-lg"
                        aria-label={social}
                      >
                        <span className="text-xs md:text-sm text-gray-300">{social}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Manga-style contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900/90 to-black/90 p-5 md:p-8 shadow-xl border border-white/10">
              {/* Manga-style form header */}
              <div className="mb-4 md:mb-6 pb-3 md:pb-4 border-b border-white/10">
                <h3 className="text-lg md:text-xl font-bold text-white">
                  メッセージフォーム • Message Form
                </h3>
              </div>

              {/* Success message with manga style */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-4 md:mb-6 p-3 md:p-4 bg-green-500/20 border border-green-500/30 rounded-lg"
                >
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 text-green-400 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <p className="text-sm md:text-base text-green-300">
                      ありがとうございます！メッセージを受け取りました。
                    </p>
                  </div>
                  <p className="text-xs md:text-sm text-green-300/70 mt-1">
                    Terima kasih! Pesan Anda telah diterima.
                  </p>
                </motion.div>
              )}

              {/* Manga-style form */}
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs md:text-sm font-medium text-gray-300 mb-1 md:mb-2"
                  >
                    お名前 • Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500/50 text-white text-sm md:text-base"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs md:text-sm font-medium text-gray-300 mb-1 md:mb-2"
                  >
                    メール • Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500/50 text-white text-sm md:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs md:text-sm font-medium text-gray-300 mb-1 md:mb-2"
                  >
                    メッセージ • Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500/50 text-white text-sm md:text-base"
                    placeholder="Your message..."
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-4 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm md:text-base font-medium rounded-lg hover:from-pink-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-3 w-3 md:h-4 md:w-4 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        <span className="text-xs md:text-sm">送信中... • Sending...</span>
                      </span>
                    ) : (
                      "送信 • Send Message"
                    )}
                  </button>
                </div>
              </form>

              {/* Manga-style decorative elements */}
              <div className="absolute top-2 right-2 flex space-x-1">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-pink-500 rounded-full"></div>
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-purple-500 rounded-full"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 