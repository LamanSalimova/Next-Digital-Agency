"use client";

import { motion } from "framer-motion";

export default function GraphicDesign() {
  return (
    <div>
      <div className=" p-4   mx-auto relative z-10  w-full pt-20 md:pt-32">
        <div className="text-4xl md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
          Graphic Design <br />
        </div>

        <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto">
          We create stunning visuals for your brand. From logos to social media
          posts, we&apos;ve got you covered.
        </p>
        <div className="items-center md:flex justify-center md:mx-auto md:space-x-10"></div>
      </div>
    </div>
  );
}
