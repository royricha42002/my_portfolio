// bento-grid.tsx

import React from "react";
import { cn } from "@/utils/cn"; // Adjust path as needed

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  imgSrc, // Add imgSrc prop if needed
}: {
  className?: string;
  imgSrc?: string; // Add imgSrc prop if needed
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-0 dark:bg-black dark:border-white/[0.2] bg-cyan-200 border border-transparent justify-between flex flex-col space-y-0",
        className
      )}
    >
      {imgSrc && (
        <img src={imgSrc} alt="Bento Grid Item Image" className="w-full h-full object-cover rounded-xl" />
      )}
    </div>
  );
};
