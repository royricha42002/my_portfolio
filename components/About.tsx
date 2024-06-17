// About.tsx

import React from "react";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";

import { TextGenerateEffect2 } from "./ui/text-generate-effect-2";

const hi = `Hey!!! I am Richa 👋`;
const a = `As a final-year undergraduate student in Computer Science Engineering, I am deeply passionate about leveraging my strong academic foundation and hands-on expertise in web development and programming. Proficient in Java, Python, and JavaScript, my focus lies in crafting robust web applications using the MERN Stack and React.js.`;
const b = `Also, I proudly hold the 'C' Certificate in the National Cadet Corps, achieving an Alpha grade and serving as a Sergeant.`;

const items = [
  {
    imgSrc: "/img1.jpg",
  },
  {
    imgSrc: "/img2.jpg",
  },
  {
    imgSrc: "/img3.jpg",
  },
  {
    imgSrc: "/img4.png",
  },
  {
    imgSrc: "/img5.jpg",
  },
];

export function TextGenerateEffectDemo() {
  return (
    <div className="bg-gradient-to-b from-black to-cyan-500 py-12 flex flex-auto flex-row">
      {/* Left Section (Bento Grid) */}
      <div className="w-full md:w-1/2">
      
        <BentoGrid className="max-w-4xl m-12">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              imgSrc={item.imgSrc}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </div>
      {/* Right Section (TextGenerateEffect and TextGenerateEffect2) */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-20">
        <TextGenerateEffect2 words={hi} className="text-9xl text-cyan-200" />
        <TextGenerateEffect words={a} />
        <TextGenerateEffect words={b} />
      </div>
    </div>
  );
}

export default TextGenerateEffectDemo;
