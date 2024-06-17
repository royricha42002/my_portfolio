"use client";
import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import components
const AnimatedPinDemo = dynamic(() => import('./ui/3dpincard').then(mod => mod.AnimatedPinDemo), { ssr: false });
const MemoizedStars = dynamic(() => import('./ui/stars').then(mod => mod.MemoizedStars), { ssr: false });

const Skills = () => {
  return (
    <div className='bg-gradient-to-b from-cyan-500 to-black py-12'>
      <h2 className='text-4xl font-bold text-center text-black mb-8'>Skills</h2>
      <AnimatedPinDemo />
      <MemoizedStars />
    </div>
  );
}

export default Skills;
