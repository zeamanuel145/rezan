"use client";

import { useEffect, useState } from "react";
import ImageSlide from "./ImageSlide";
import Dots from "./Dots";

const images = [
  "/frame-1.png",
  "/frame-2.png",
  "/frame-3.png",
  "/frame-4.png",
  "/frame-5.png",
];

export default function FadeImages() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-2xl shadow-lg">
      {images.map((src, index) => (
        <ImageSlide key={index} src={src} active={index === current} />
      ))}

      <Dots
        count={images.length}
        activeIndex={current}
        onDotClick={(index) => setCurrent(index)}
      />
    </div>
  );
}
