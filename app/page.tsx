"use client";
import React from "react";
import dynamic from "next/dynamic";

// Dynamically import components
const NavbarDemo = dynamic(() => import("../components/Navbar"), { ssr: false });
const TextGenerateEffectDemo = dynamic(() => import("../components/About").then(mod => mod.TextGenerateEffectDemo), { ssr: false });
const SparklesPreview = dynamic(() => import("../components/Hero"), { ssr: false });
const Skills = dynamic(() => import("../components/Skills"), { ssr: false });
const Project = dynamic(() => import("../components/Project"), { ssr: false });
const Contact = dynamic(() => import("../components/Contact"), { ssr: false });
const MemoizedStars = dynamic(() => import("../components/ui/stars").then(mod => mod.MemoizedStars), { ssr: false });

export default function Home() {
  return (
    <div className="bg-[#003153] font-mono">
      <NavbarDemo />
      <SparklesPreview />
      <MemoizedStars />
      <TextGenerateEffectDemo />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}
