"use client";
import React from "react";
import dynamic from 'next/dynamic';

// Dynamically import components
const PinContainer = dynamic(() => import("../ui/3d-pin").then(mod => mod.PinContainer), { ssr: false });
const Image = dynamic(() => import("next/image"), { ssr: false });

const skills = [
  { name: 'Java', image: '/java.png', href: 'https://www.java.com/en/' },
  { name: 'React.js', image: '/react.png', href: 'https://react.dev/' },
  { name: 'Next.js', image: '/nextjs.png', href: 'https://nextjs.org/' },
  { name: 'Tailwind CSS', image: '/tailwind.png', href: 'https://tailwindcss.com/' },
  { name: 'Node.js', image: '/node.png', href: 'https://nodejs.org/en' },
  { name: 'MongoDB', image: '/mongo.png', href: 'https://www.mongodb.com/' },
  { name: 'MySQL', image: '/mysql.png', href: 'https://www.mysql.com/' },
  { name: 'Prompt Engineering', image: '/prompt.png', href: 'https://en.wikipedia.org/wiki/Prompt_engineering' },
];

export function AnimatedPinDemo() {
  return (
    <div className=" min-h-fit w-full flex flex-wrap justify-center my-24 items-center gap-24">
      {skills.map((skill) => (
        <PinContainer
          key={skill.name}
          title={skill.name}
          href={skill.href}
        >
          <div className="flex flex-col items-center p-2 tracking-tight text-slate-100/50 w-[10rem] h-[10rem]">
            <h3 className="font-bold text-xs text-slate-100 mb-1">
              {skill.name}
            </h3>
            <div className="flex flex-1 w-full rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 items-center justify-center">
              <Image src={skill.image} alt={skill.name} className="w-14 h-14" />
            </div>
          </div>
        </PinContainer>
      ))}
    </div>
  );
}

export default AnimatedPinDemo;
