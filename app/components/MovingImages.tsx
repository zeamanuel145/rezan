"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

const items = [
  {
    logo: "/frame-1.png",
    link: "https://www.figma.com/design/uFpDUXX7QA80NNaa5xRBNI/Plantfuel-Landing-page?node-id=0-1&p=f", 
  },
  {
    logo: "/frame-2.png",
    link: "https://www.figma.com/design/viaa1o9gS70dtztinEUoGV/plateful?node-id=0-1&p=f",
  },
  {
    logo: "/frame-3.png",
    link: "https://www.figma.com/design/lu0zCikZ6CfBjc3CUaMOw3/meskot?node-id=0-1&p=f",
  },
  {
    logo: "/frame-4.png",
    link: "https://www.figma.com/design/RGvOdHFPFY26qIfshKsuIl/Final-Project?t=Lc0UTQ3cbBKwiMTf-1",
  },
  {
    logo: "/frame-5.png",
    link: "https://www.figma.com/design/xIaV8pTU5Mkh4dDRZ1KR6i/DirectEd-E-learning-Website?node-id=0-1&p=f",
  },
];

export default function MovingLogos() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: ["0%", "-100%"],
      transition: { repeat: Infinity, duration: 30, ease: "linear" },
    });
  }, [controls]);

  const handleHoverStart = () => controls.stop();
  const handleHoverEnd = () =>
    controls.start({
      x: ["0%", "-100%"],
      transition: { repeat: Infinity, duration: 30, ease: "linear" },
    });

  return (
    <div className="w-full h-40 overflow-hidden bg-gray-100 flex items-center">
      <motion.div
        className="flex gap-45 items-center"
        animate={controls}
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
      >
        {[...items, ...items].map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 min-w-fit group hover:scale-105 transition-transform"
          >
            <Image
              src={item.logo}
              alt="logo"
               width={96}
              height={96}               
              className="h-24 w-auto object-contain"
            />
          </a>
        ))}
      </motion.div>
    </div>
  );
}
