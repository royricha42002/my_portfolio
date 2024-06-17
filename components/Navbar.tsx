

"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "../components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import { LinkPreview } from "@/components/ui/link-preview";
import { Meteors } from "./ui/meteors";

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
        <img src="/logo.png" className="h-12 m-5" alt="Logo" />
        
        <div className=" text-white flex flex-row space-x-8 mx-10 my-4">
        <LinkPreview url="https://github.com/royricha42002" className="font-bold">
                    <img src="/github.png" className="h-12" />
                </LinkPreview>
                <LinkPreview url="https://www.linkedin.com/in/richaroy42002/" className="font-bold">
                    <img src="/linkedin.png" className="h-12" />
                </LinkPreview>
                <LinkPreview url="mailto:your-email@example.com" className="font-bold">
                    <img src="/mail.png" className="h-12" />
                </LinkPreview>
                <LinkPreview url="https://www.instagram.com/richaroy.in?igsh=anE0OGZyamZtYWx3" className="font-bold">
                    <img src="/insta.png" className="h-12" />
                </LinkPreview>


        </div>
      </div>
      
    </div >
  );
};

export default Navbar;