"use client";
import React from "react";
import { LinkPreview } from "@/components/ui/link-preview"; // Ensure this path is correct
import { MemoizedStars } from "./ui/stars";

const Contact = () => {
    return (
        <div className="font-mono bg-gradient-to-b from-cyan-500 to-black py-12">
            <MemoizedStars />
            <div className="text-4xl font-bold text-center text-black mb-8">
                Reach Out
            </div>
            <MemoizedStars />
            <div className="text-2xl font-medium text-center text-cyan-200 mb-8">
                Got an idea? Let's make magic happen!
            </div>
            <div className="text-white flex flex-row justify-center space-x-8 mx-10 my-4">
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
            <MemoizedStars />
        </div>
    );
}

export default Contact;
