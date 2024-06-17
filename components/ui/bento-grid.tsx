// BentoGrid.tsx

import React from "react";
import { cn } from "@/utils/cn"; // Adjust path as needed

interface BentoGridProps {
  className?: string;
  children?: React.ReactNode;
}

const BentoGrid: React.FC<BentoGridProps> = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export default BentoGrid;
