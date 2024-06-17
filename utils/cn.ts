import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


// <div className="relative z-20 flex items-center justify-between w-2/3 px-12">
//         <div className="text-left space-y-2">
//           <h1 className={cn("md:text-5xl text-2xl text-white")}>
//             Richa Roy
//           </h1>
//           <p className="text-neutral-300 text-lg">
//             Full Stack Developer
//           </p>
//         </div>

//         <div className="relative z-20 ml-12">
//           <img src="/file.png" alt="Profile" className="h-48 w-48 rounded-full"/>
//         </div>
//       </div>