import React from "react";
import Link from "next/link";
export default function Fotter() {
  return (
    <footer className="w-full bg-sky-800 text-white py-6 ">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Rezan Ahmed. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="mailto:rezan.ahmed@example.com" className="hover:underline">Contact me</Link>
        </div>
      </div>
    </footer>
  );
}
