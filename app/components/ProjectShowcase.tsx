"use client";

import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const projects = [
  {
    logo: "/frame-2.png",
    title: "Plant Fule",
    desc: "PlantFuel is a modern landing page for a sustainable snack brand that promotes plant-based performance nutrition. The clean, energetic design reflects the brand’s commitment to health, balance, and eco-conscious living. Through bold visuals and crisp typography, PlantFuel inspires users to make smarter food choices  proving that sustainability and flavor can fuel an active lifestyle together.",
    color: "text-green-800",
    link: "https://www.figma.com/file/xxxx/Wegiene",
  },
  {
    logo: "/frame-1.png",
    title: "Plateful",
    desc: "Plateful is a purpose driven landing page that connects event organizers and hospitality businesses with local shelters to redistribute untouched leftover food. Designed with warm brown and cream tones, the interface communicates empathy, hope, and community. The project highlights how thoughtful UX can turn waste into impact, transforming generosity into a seamless, tech-enabled system for social good",
    color: "text-red-600",
    link: "https://www.figma.com/design/viaa1o9gS70dtztinEUoGV/plateful?node-id=0-1&p=f",
  },
  {
    logo: "/frame-3.png",
    title: "Meskott",
    desc: "Meskott is a high-end restaurant redesign project that blends luxury dining with cultural authenticity. The design reimagines the restaurant’s online presence with refined visuals, elegant typography, and a seamless reservation experience. By focusing on user flow and visual hierarchy, the new interface captures the essence of Meskott where fine dining meets artistry and tradition.",
    color: "text-orange-300/50",
    link: "https://www.figma.com/design/lu0zCikZ6CfBjc3CUaMOw3/meskot?node-id=0-1&p=f",
  },
  {
    logo: "/frame-4.png",
    title: "Meddical",
    desc: "Meddical is a telemedicine platform  Built with accessibility and trust at its core, it allows patients to consult doctors virtually, manage appointments, and access health resources easily. The design system focuses on clarity, comfort, and emotional reassurance bringing a modern, user-first approach to digital healthcare.",
    color: "text-blue-400",
    link: "https://www.figma.com/design/lu0zCikZ6CfBjc3CUaMOw3/meskot?t=Lc0UTQ3cbBKwiMTf-1 ",
  },
  {
    logo: "/frame-5.png",
    title: "DirectEd",
    desc: "DirectEd is an e-learning platform concept aimed at expanding access to quality education across Africa. The design emphasizes inclusivity, simplicity, and engagement, enabling students to learn anytime, anywhere. Through vibrant visuals and intuitive navigation, DirectEd empowers learners and educators to connect, share knowledge, and grow together.",
    color: "text-green-900",
    link: "https://www.figma.com/design/xIaV8pTU5Mkh4dDRZ1KR6i/DirectEd-E-learning-Website?node-id=0-1&p=f",
  },
];

export default function ProjectShowcase() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % projects.length);
  const prev = () => setIndex((prev) => (prev - 1 + projects.length) % projects.length);

  const project = projects[index];

  return (
    <div className="relative w-full max-w-4xl mx-auto bg-gray-50 rounded-2xl p-6 shadow-lg flex flex-col overflow-hidden">
      {/* Left button */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-gray-200 hover:bg-gray-300 text-black rounded-full shadow-md z-10"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Animated Project Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={project.title}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 px-4 md:px-8"
        >
          {/* Image on the left */}
          <Image
            src={project.logo}
            alt={project.title}
            className="h-32 w-32 object-contain md:h-40 md:w-40"
          />

          {/* Description on the right */}
          <div className="flex flex-col gap-3">
            <h2 className={`text-2xl font-semibold ${project.color}`}>
              {project.title}
            </h2>
            <p className="text-gray-600 max-w-md">{project.desc}</p>

            {/* Figma Link Button */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mt-2 text-sm font-medium text-blue-600 hover:underline hover:scale-105 transition-transform"
            >
              <ExternalLink className="w-4 h-4" />
              View Figma Design
            </a>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Right button */}
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-black  bg-gray-200 hover:bg-gray-300 rounded-full shadow-md z-10"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 gap-2">
        {projects.map((_, i) => (
          <motion.div
            key={i}
            className={`h-3 w-3 rounded-full ${i === index ? "bg-blue-600" : "bg-gray-300"}`}
            animate={{
              scale: i === index ? 1.3 : 1,
              opacity: i === index ? 1 : 0.6,
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </div>
  );
}
