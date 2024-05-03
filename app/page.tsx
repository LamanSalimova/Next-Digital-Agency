import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SliderComp from "@/components/ui/SliderComp";
import { SpotLight } from "@/components/ui/SpotLight";

export default function Home() {
  return (
    <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar />

      <SpotLight className="hidden md:flex md:-top-80 left-80  " fill="white" />

      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <Hero />
        <div className="w-full pt-20">
          <SliderComp />
        </div>
      </div>
    </div>
  );
}
