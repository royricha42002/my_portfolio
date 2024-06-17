// text-generate-effect.tsx
"use client"
import React from "react";
import { motion } from "framer-motion"; // Adjust imports as needed

const TextGenerateEffect = ({ words }: { words: string }) => {
  const wordsArray = words.split(" ");

  return (
    <div className="text-white">
      {wordsArray.map((word, idx) => (
        <motion.span
          key={word + idx}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: idx * 0.2 }}
          className="opacity-0"
        >
          {word}{" "}
        </motion.span>
      ))}
    </div>
  );
};

export default TextGenerateEffect; // Export as default
