import React from 'react';
import { AnimatedPinDemo } from './ui/3dpincard';
import { MemoizedStars } from './ui/stars';



const Skills = () => {
  return (
    <div className='bg-gradient-to-b from-cyan-500 to-black py-12'>
      
      <h2 className='text-4xl font-bold text-center text-black mb-8'>Skills</h2>
      <AnimatedPinDemo/>
      <MemoizedStars />
    </div>
  );
}

export default Skills;
