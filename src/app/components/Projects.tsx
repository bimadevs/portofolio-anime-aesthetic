"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { images } from "@/app/lib/images";

// Data proyek
const projects = [
  {
    id: 1,
    title: "アニメポータル",
    subtitle: "Anime Portal",
    description: "Platform streaming anime dengan UI yang terinspirasi dari estetika cyberpunk Jepang.",
    image: images.project1,
    tags: ["React", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    id: 2,
    title: "マンガリーダー",
    subtitle: "Manga Reader",
    description: "Aplikasi pembaca manga dengan animasi halaman yang mulus dan tema yang dapat disesuaikan.",
    image: images.project2,
    tags: ["Next.js", "TailwindCSS", "Firebase"],
    link: "#",
  },
  {
    id: 3,
    title: "アキバショップ",
    subtitle: "Akiba Shop",
    description: "E-commerce untuk merchandise anime dengan UI yang terinspirasi dari Akihabara.",
    image: images.project3,
    tags: ["Vue.js", "Express", "PostgreSQL"],
    link: "#",
  },
  {
    id: 4,
    title: "ビジュアルノベル",
    subtitle: "Visual Novel Engine",
    description: "Engine untuk membuat visual novel dengan sistem dialog dan percabangan cerita.",
    image: images.project4,
    tags: ["React", "TypeScript", "Canvas API"],
    link: "#",
  },
];

export const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-[#0f0f13] py-20"
    >
      {/* Anime-style background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div 
          className="absolute top-0 right-0 w-full h-full bg-repeat opacity-5"
          style={{ backgroundImage: `url(${images.patternHex})` }}
        ></div>
        <div className="absolute top-20 left-20 w-60 h-60 bg-pink-500 rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-40 right-20 w-60 h-60 bg-blue-500 rounded-full filter blur-[120px]"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 relative z-10">
        {/* Anime-style section header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="inline-block text-sm font-semibold text-blue-400 tracking-wider uppercase">
            プロジェクト • Projects
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            創造的な作品 • Creative Works
          </p>
          <div className="mt-4 mx-auto w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full"></div>
        </motion.div>

        {/* Anime-style project cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900/90 to-black/90 shadow-xl border border-white/10"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Anime-style card header with Japanese text */}
              <div className="relative p-5 border-b border-white/10">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                    <span className="block text-sm font-normal text-gray-400 mt-1">
                      {project.subtitle}
                    </span>
                  </h3>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Project image with anime-style overlay */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                
                {/* Anime-style glowing border on hover */}
                <div className={`absolute inset-0 border-2 border-blue-500/0 transition-all duration-300 ${activeProject === project.id ? 'border-blue-500/70 shadow-[0_0_15px_rgba(59,130,246,0.5)]' : ''}`}></div>
              </div>

              {/* Project details with anime styling */}
              <div className="p-5">
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                {/* Tech tags with anime-style pills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Anime-style button */}
                <a
                  href={project.link}
                  className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span>詳細を見る</span>
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 