"use client";

import { motion } from "framer-motion";

interface ImageSlideProps {
  src: string;
  active: boolean;
}

export default function ImageSlide({ src, active }: ImageSlideProps) {
  return (
    <motion.img
      src={src}
      alt="slide"
      className="absolute inset-0 w-full h-full object-cover rounded-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: active ? 1 : 0 }}
      transition={{ duration: 1 }}
    />
  );
}
