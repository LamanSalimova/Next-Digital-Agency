import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <>
      <div className="text-4xl pb-5 md:text-7xl px-6 text-center  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
        Create, grow, and <br /> scale your business
      </div>
      <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto px-4">
        Custom tailored solutions for your business. We are a team of creatives
        who are excited to help you grow your business.
      </p>

      <Link
        href={"/book"}
        className="cursor-pointer flex items-center justify-center border rounded-full w-48 p-2  mx-auto my-6 text-white "
      >
        Book a call
      </Link>
    </>
  );
}
