"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

// Data skills
const skills = [
  {
    category: "フロントエンド",
    categoryEn: "Frontend",
    items: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "TailwindCSS", level: 95 },
    ],
  },
  {
    category: "バックエンド",
    categoryEn: "Backend",
    items: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "PostgreSQL", level: 70 },
    ],
  },
  {
    category: "デザイン",
    categoryEn: "Design",
    items: [
      { name: "Figma", level: 85 },
      { name: "Adobe XD", level: 75 },
      { name: "Photoshop", level: 70 },
      { name: "Illustrator", level: 65 },
    ],
  },
  {
    category: "その他",
    categoryEn: "Others",
    items: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "Firebase", level: 80 },
    ],
  },
];

export const Skills = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Anime-style particle animation
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        
        // Anime-style colors
        const colors = ["#f472b6", "#a78bfa", "#60a5fa", "#34d399"];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create particles
    const particles: Particle[] = [];
    const particleCount = Math.min(50, Math.floor(window.innerWidth / 30));
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        
        // Connect particles with lines (anime-style network effect)
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <section
      id="skills"
      className="relative min-h-screen bg-[#0a0a14] py-20"
    >
      {/* Anime-style particle background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 relative z-10">
        {/* Anime-style section header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="inline-block text-sm font-semibold text-purple-400 tracking-wider uppercase">
            スキル • Skills
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            技術力 • Technical Abilities
          </p>
          <div className="mt-4 mx-auto w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full"></div>
        </motion.div>

        {/* Anime-style skill cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900/90 to-black/90 p-6 shadow-xl border border-white/10"
            >
              {/* Anime-style card header */}
              <div className="mb-6 pb-4 border-b border-white/10">
                <h3 className="text-xl font-bold text-white">
                  {skillGroup.category}
                  <span className="block text-sm font-normal text-gray-400 mt-1">
                    {skillGroup.categoryEn}
                  </span>
                </h3>
              </div>

              {/* Skill bars with anime styling */}
              <div className="space-y-4">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Anime-style decorative elements */}
              <div className="absolute top-2 right-2 flex space-x-1">
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 border border-purple-500/20 rounded-full"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 