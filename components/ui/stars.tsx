"use client";
import React, { memo } from "react";
import { motion } from "framer-motion";

const Stars = () => {
  const randomMove = () => Math.random() * 4 - 2;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();

  return (
    <div className="relative w-full h-full">
      {[...Array(80)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          initial={{
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            opacity: randomOpacity(),
            scale: random() * 0.5 + 0.5,
          }}
          animate={{
            y: randomMove() * 50,
            x: randomMove() * 50,
            opacity: [randomOpacity(), randomOpacity()],
            scale: [1, 1.2, 0.8],
          }}
          transition={{
            duration: random() * 10 + 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-0.5 h-0.5 bg-white rounded-full"
        />
      ))}
    </div>
  );
};

export const MemoizedStars = memo(Stars);
