"use client";
import React, { useState } from "react";
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { cn } from "@/utils/cn";

// Dynamically import components
const LinkPreview = dynamic(() => import("./ui/link-preview"), { ssr: false });
const Meteors = dynamic(() => import("./ui/meteors").then(mod => mod.Meteors), { ssr: false });

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn(
        "fixed top-0 w-full z-[1000] shadow-md shadow-purple-500 bg-black font-mono text-xl",
        className
      )}
    >
      <Meteors number={50} />
      <div className="flex justify-between">
        <Image src="/logo.png" className="h-12 m-5" alt="Logo" />
        
        <div className=" text-white flex flex-row space-x-8 mx-10 my-4">
          <LinkPreview url="https://github.com/royricha42002" className="font-bold">
            <Image src="/github.png" className="h-12" alt="github img" />
          </LinkPreview>
          <LinkPreview url="https://www.linkedin.com/in/richaroy42002/" className="font-bold">
            <Image src="/linkedin.png" className="h-12" alt="linkedin img" />
          </LinkPreview>
          <LinkPreview url="mailto:your-email@example.com" className="font-bold">
            <Image src="/mail.png" className="h-12" alt="mail img" />
          </LinkPreview>
          <LinkPreview url="https://www.instagram.com/richaroy.in?igsh=anE0OGZyamZtYWx3" className="font-bold">
            <Image src="/insta.png" className="h-12" alt="insta img" />
          </LinkPreview>
        </div>
      </div>
    </div >
  );
};

export default Navbar;
