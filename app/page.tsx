// page.tsx

import NavbarDemo from "@/components/Navbar";
import { TextGenerateEffectDemo } from "@/components/About"; // Ensure correct import path
import SparklesPreview from "@/components/Hero";
import Skills from "@/components/Skills";
import Project from "@/components/Project";
import Contact from "@/components/Contact";
import { MemoizedStars } from "@/components/ui/stars";

export default function Home() {
  return (
    <div className="bg-[#003153] font-mono">
      <NavbarDemo />
      
      <SparklesPreview />
      <MemoizedStars />
      <TextGenerateEffectDemo />
      <Skills />
      <Project />
      <Contact/>
    </div>
  );
}
