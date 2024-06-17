// BentoGridItem.tsx

import React from "react";
import { cn } from "@/utils/cn"; // Adjust path as needed
import Image from "next/image";

interface BentoGridItemProps {
  className?: string;
  imgSrc?: string;
}

const BentoGridItem: React.FC<BentoGridItemProps> = ({ className, imgSrc }) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-0 dark:bg-black dark:border-white/[0.2] bg-cyan-200 border border-transparent justify-between flex flex-col space-y-0",
        className
      )}
    >
      {imgSrc && (
        <Image
          src={imgSrc}
          alt="Bento Grid Item Image"
          className="w-full h-full object-cover rounded-xl"
        />
      )}
    </div>
  );
};

export default BentoGridItem;
