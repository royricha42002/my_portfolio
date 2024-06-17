"use client"
import React, { useEffect } from 'react';
import { cn } from "@/utils/cn";

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  useEffect(() => {
    const generateMeteors = () => {
      const meteors = new Array(number || 20).fill(true);
      meteors.forEach((el, idx) => {
        const meteor = document.createElement('span');
        meteor.className = cn(
          "animate-meteor-effect absolute top-0 w-0.5 h-[2px] bg-slate-500 rounded-full",
          className
        );
        meteor.style.animationDelay = `${Math.random() * (0.8 - 0.2) + 0.2}s`;
        meteor.style.animationDuration = `${Math.floor(Math.random() * (10 - 2) + 2)}s`;
        document.body.appendChild(meteor);
        positionMeteor(meteor);
      });
    };

    const positionMeteor = (meteor: HTMLElement) => {
      meteor.style.left = `${getRandomPosition()}px`;
    };

    const getRandomPosition = () => {
      const maxLeft = window.innerWidth;
      return Math.floor(Math.random() * maxLeft);
    };

    generateMeteors();

    return () => {
      // Clean up meteors when component unmounts
      document.querySelectorAll('.animate-meteor-effect').forEach((meteor) => {
        meteor.remove();
      });
    };
  }, [number, className]);

  return null; // Meteors are created dynamically, no need to render anything in JSX
};
//  <Meteors number={50} />