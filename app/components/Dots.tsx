"use client";

interface DotsProps {
  count: number;
  activeIndex: number;
  onDotClick?: (index: number) => void;
}

export default function Dots({ count, activeIndex, onDotClick }: DotsProps) {
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          onClick={() => onDotClick && onDotClick(i)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            activeIndex === i ? "bg-white scale-125" : "bg-white/50"
          }`}
        />
      ))}
    </div>
  );
}
