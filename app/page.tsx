"use client";

import { Mail, Linkedin, Github, Dribbble } from 'lucide-react';
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';
import Link from "next/link";
import ProjectShowcase from "./components/ProjectShowcase";
import MovingLogos from './components/MovingImages';
export default function Home() {

  const roles = [
    "Graphic Design",
    "UI/UX",
    "Front End Developer",
    "Database Developer",
    "Data Science",
  ];

  const [index, setIndex] = useState(0);

  // Automatically change text every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <main className='bg-sky-50'>
        <section className="min-h-screen flex items-center justify-center bg-sky-100">
      <div className="border-[3px] border-[#8ec5fc] rounded-[40px] p-10 w-[90%] md:w-[800px] relative text-center">
        {/* Top Text */}
        <div className="absolute -top-5 left-10 bg-sky-200 rounded-3xl px-2">
          <span className="text-pink-500 font-semibold text-lg">
            Welcome to my
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-[80px] md:text-[120px] font-bold text-[#70b4ff] leading-none">
          Portfolio
        </h1>

        {/* Animated Changing Role */}
        <div className="flex justify-center mt-4 h-8">
          <AnimatePresence mode="wait">
            <motion.span
              key={roles[index]}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="border border-pink-400 text-pink-500 px-4 py-1 rounded-full text-lg font-medium"
            >
              {roles[index]}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Decorative Stars */}
        <div className="flex justify-center mt-8 gap-4 text-[#70b4ff] text-2xl">
          <span>✦</span>
          <span>✦</span>
          <span>✦</span>
        </div>
      </div>
    </section>


      <section className='bg-sky-100 text-black p-20 '>
        <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-10'>
          <div>
            <h1 className='text-9xl text-pink-500 text-center'>Hello <span>!</span></h1>
            <hr className='h-2 w-170' />
            <p>
              I&apos;m Rezan Mohammed, a passionate UI/UX designer dedicated to crafting exceptional digital experiences. With a keen eye for detail and a user-centric approach, I specialize in creating intuitive and visually appealing designs that resonate with users. 
              <br />  My portfolio showcases a diverse range of projects, highlighting my ability to blend creativity with functionality. Explore my work to see how I bring ideas to life through innovative design solutions.
            </p>
            <div >
              <Link
        href="Rezanmoh002@gmail.com"
        className="flex items-center gap-2 text-gray-800 hover:text-pink-500 transition-colors"
      >
        <Mail className="text-pink-500 fill-pink-200/50" size={35} />
        Rezanmoh002@gmail.com
      </Link>

      {/* LinkedIn */}
      <Link
        href="https://www.linkedin.com/in/rezan-m/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-gray-800 hover:text-pink-500 transition-colors"
      >
        <Linkedin className="text-pink-500 fill-pink-200" size={35} />
        https://www.linkedin.com/in/rezan-m/
      </Link>

      {/* GitHub */}
      <Link
        href="https://github.com/Rezan01"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-gray-800 hover:text-pink-500 transition-colors"
      >
        <Github className="text-pink-500 fill-pink-200" size={35} />
        https://github.com/Rezan01
      </Link>
            </div>

          </div>
          {/* second section image */}
           <div>
              <Image
          src="/sece.png"
          alt="Secondary illustration"
          height={212}
          width={308}
          className="overflow-hidden"/>

  </div>
        </div>
      </section>
      
      <section className="bg-sky-50 py-20">
  <div className="flex flex-col md:flex-row items-center justify-center gap-10">
    
    {/* Left: Image */}
    <div className="flex justify-center items-center p-10 perspective-1000">
  <div className="relative w-[500px] h-[500px] animate-flip3DBounce">
    {/* Front side */}
    <div className="absolute inset-0 backface-hidden">
      <Image
        src="/algorithms.png"
        alt="Front side"
        fill
        className="object-cover rounded-lg"
      />
    </div>

    {/* Back side */}
    <div className="absolute inset-0 backface-hidden rotateY-180">
      <Image
        src="/rezan.png"
        alt="Back side"
        fill
        className="object-cover rounded-lg"
      />
    </div>
    
  </div>
</div>



    {/* Vertical Divider */}
    <div className="w-[1px] h-100 bg-gray-400 mx-4"></div>

    {/* Right: Experience / Education / Skills */}
    <div className="text-black pb-5">
      <div>
      <h2 className="font-semibold mb-2 text-6xl text-pink-500">Experience</h2>
      <ul className="grid md:grid-cols-2 gap-6 text-sm ">
        <li>2018 - UI/UX Designer at XYZ Company</li>
        <li>2020 - Senior Designer at ABC Agency</li>
        <li>2022 - Lead Designer at DEF Corp</li>
        <li>2023 - Principal Designer at GHI Inc</li>
      </ul>
      </div>

      
        <hr className='w-130 bg-gray-400 m-4 '/>
      
      
      {/* Education */}
      <div>
      <h2 className="font-semibold mb-2 mt-4 text-6xl text-pink-500">Education</h2>
      <ul className=" gap-2 text-sm">
        <li>🎓 Bachelor of Science in Computer Science
          University Name  Ethiopia
          Expected Graduation: 2026</li>
                  <li>🎓 DirectEd Design Bootcamp (2025)
          </li>
          <li>🎓 Specialized in Human-Centered Design, Accessibility, and Prototyping
          </li>
          <li>🎓 Built responsive projects like Reboot Health, Plateful, and Meskott
          </li>
          <li>💻 Udemy Nanodegree — Front-End Web Developer
          </li>
          <li>💻 Udacity Nanodegree — Data Analyst

          Data Cleaning, Visualization, and Interpretation

          </li>
          <li>💻 Udacity — Git & GitHub Certification

          Version Control, Collaboration, and Open Source Contributions
          </li>
          <li>💻 iScore Tech — Web Design Certificate

          Web Design Principles, HTML/CSS, and Layout Design</li>
      </ul>

      </div>
      <hr className='w-130 bg-gray-400 m-4 '/>

      {/* Skills */}
      <div>
      <h2 className="font-semibold mb-2 mt-4 text-6xl text-pink-500">Skills</h2>
      <ul className="grid md:grid-cols-2 gap-2 text-sm">
        <li><span>✦</span> Wireframing & Prototyping (Low to High Fidelity)</li>
        <li><span>✦</span>User Research & Testing</li>
        <li><span>✦</span>Information Architecture & Usability Testing</li>
        <li><span>✦</span>Accessibility & Inclusive Design (WCAG Standards)</li>
        <li><span>✦</span>User Flow Mapping & Journey Design</li>
        <li><span>✦</span>User Research & Persona Development</li>
        <li><span>✦</span>Design & Research</li>
        <li><span>✦</span>UI/UX Design & Visual Systems</li>
        <li><span>✦</span>Responsive & Adaptive Design Principles</li>
        <li><span>✦</span>Design Systems & Component Libraries</li>
      </ul>
      </div>
    </div>

  </div>

      </section>

      {/* the frame motion */}

      <section  className="p-3 bg-sky-50 flex m-0 ">
    
        <MovingLogos /> 
        
      </section>

      {/* the projects description */}

      <section className=" flex flex-col items-center justify-center bg-sky-100 p-6">
        <h1 className="text-6xl text-pink-500 font-bold mb-8">My Projects</h1>
      <ProjectShowcase />

      </section>

    </main>
  );
}
