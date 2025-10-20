"use client";

import { Mail, Linkedin, Github } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ProjectShowcase from "./components/ProjectShowcase";
import MovingLogos from "./components/MovingImages";

export default function Home() {
  const roles = [
    "Graphic Design",
    "UI/UX",
    "Front End Developer",
    "Database Developer",
    "Data Science",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <main className="bg-sky-50 text-gray-900">
      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center bg-sky-100 px-4">
        <div className="border-[3px] border-[#8ec5fc] rounded-[30px] sm:rounded-[40px] p-6 sm:p-10 w-full max-w-[800px] relative text-center">
          {/* Top Text */}
          <div className="absolute -top-5 left-6 sm:left-10 bg-sky-200 rounded-3xl px-3 sm:px-4">
            <span className="text-pink-500 font-semibold text-base sm:text-lg">
              Welcome to my
            </span>
          </div>

          {/* Title */}
          <h1 className="text-[48px] sm:text-[80px] md:text-[120px] font-bold text-[#70b4ff] leading-none">
            Portfolio
          </h1>

          {/* Animated Role */}
          <div className="flex justify-center mt-4 h-8">
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[index]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="border border-pink-400 text-pink-500 px-3 sm:px-4 py-1 rounded-full text-sm sm:text-lg font-medium"
              >
                {roles[index]}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Stars */}
          <div className="flex justify-center mt-8 gap-4 text-[#70b4ff] text-xl sm:text-2xl">
            <span>✦</span>
            <span>✦</span>
            <span>✦</span>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="bg-sky-100 text-black px-6 py-16 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-7xl md:text-9xl text-pink-500 text-center md:text-left">
              Hello <span>!</span>
            </h1>
            <p className="text-sm sm:text-base leading-relaxed text-justify">
              I&apos;m <b>Rezan Mohammed</b>, a passionate UI/UX designer dedicated
              to crafting exceptional digital experiences. With a keen eye for
              detail and a user-centric approach, I specialize in creating
              intuitive and visually appealing designs that resonate with users.
              <br />
              My portfolio showcases a diverse range of projects, blending
              creativity with functionality.
            </p>

            <div className="space-y-3">
              <Link
                href="mailto:Rezanmoh002@gmail.com"
                className="flex items-center gap-2 text-gray-800 hover:text-pink-500 transition-colors"
              >
                <Mail className="text-pink-500" size={28} />
                <span className="break-all">Rezanmoh002@gmail.com</span>
              </Link>

              <Link
                href="https://www.linkedin.com/in/rezan-m/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-800 hover:text-pink-500 transition-colors"
              >
                <Linkedin className="text-pink-500" size={28} />
                <span className="truncate">linkedin.com/in/rezan-m/</span>
              </Link>

              <Link
                href="https://github.com/Rezan01"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-800 hover:text-pink-500 transition-colors"
              >
                <Github className="text-pink-500" size={28} />
                <span className="truncate">github.com/Rezan01</span>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <Image
              src="/sece.png"
              alt="Secondary illustration"
              width={400}
              height={400}
              className="rounded-xl object-contain w-full max-w-[300px] sm:max-w-[400px]"
            />
          </div>
        </div>
      </section>

      {/* EXPERIENCE + EDUCATION + SKILLS */}
      <section className="bg-sky-50 py-16 px-6 sm:px-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          {/* Flipping Image */}
          <div className="relative w-[280px] sm:w-[400px] lg:w-[500px] h-[280px] sm:h-[400px] lg:h-[500px] animate-flip3DBounce">
            <div className="absolute inset-0 backface-hidden">
              <Image
                src="/algorithms.png"
                alt="Front side"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="absolute inset-0 backface-hidden rotateY-180">
              <Image
                src="/rezan.png"
                alt="Back side"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Divider (hidden on mobile) */}
          <div className="hidden lg:block w-[1px] h-[500px] bg-gray-300"></div>

          {/* Right Text */}
          <div className="max-w-[600px] w-full space-y-8">
            <div>
              <h2 className="font-semibold mb-4 text-4xl sm:text-6xl text-pink-500">
                Experience
              </h2>
              <ul className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                <li>👩‍💻 UI/UX Intern — DirectEd</li>
                <li>🌐 Freelance Designer</li>
                <li>💼 Front-End Developer (Personal Projects)</li>
                <li>🎨 Graphic Design for Digital Campaigns</li>
              </ul>
            </div>

            <hr className="border-gray-300" />

            <div>
              <h2 className="font-semibold mb-4 text-4xl sm:text-6xl text-pink-500">
                Education
              </h2>
              <ul className="list-disc pl-6 text-sm space-y-1">
                <li>BSc in Computer Science — Ethiopia (Expected 2026)</li>
                <li>DirectEd Design Bootcamp (2025)</li>
                <li>Udemy — Front-End Nanodegree</li>
                <li>Udacity — Data Analyst Nanodegree</li>
                <li>Udacity — Git & GitHub Certification</li>
                <li>iScore Tech — Web Design Certificate</li>
              </ul>
            </div>

            <hr className="border-gray-300" />

            <div>
              <h2 className="font-semibold mb-4 text-4xl sm:text-6xl text-pink-500">
                Skills
              </h2>
              <ul className="grid sm:grid-cols-2 gap-2 text-sm text-gray-700">
                <li>✦ Wireframing & Prototyping</li>
                <li>✦ User Research & Testing</li>
                <li>✦ Accessibility (WCAG)</li>
                <li>✦ Responsive Design</li>
                <li>✦ Design Systems & Components</li>
                <li>✦ UI/UX Design & Visual Systems</li>
                <li>✦ Journey Mapping</li>
                <li>✦ Inclusive Design</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* MOVING LOGOS */}
      <section className="p-3 bg-sky-50">
        <MovingLogos />
      </section>

      {/* PROJECTS */}
      <section className="flex flex-col items-center justify-center bg-sky-100 p-6 sm:p-12">
        <h1 className="text-4xl sm:text-6xl text-pink-500 font-bold mb-8">
          My Projects
        </h1>
        <ProjectShowcase />
      </section>
    </main>
  );
}
