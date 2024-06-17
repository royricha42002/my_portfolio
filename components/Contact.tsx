"use client";
import React from "react";
import dynamic from 'next/dynamic';
import Image from 'next/image';

// Dynamically import components
const LinkPreview = dynamic(() => import("./ui/link-preview").then(mod => mod.default), { ssr: false });
const MemoizedStars = dynamic(() => import("./ui/stars").then(mod => mod.MemoizedStars), { ssr: false });

const Contact = () => {
    return (
        <div className="font-mono bg-gradient-to-b from-cyan-500 to-black py-12">
            <MemoizedStars />
            <div className="text-4xl font-bold text-center text-black mb-8">
                Reach Out
            </div>
            <MemoizedStars />
            <div className="text-2xl font-medium text-center text-cyan-200 mb-8">
                Got an idea? Let&apos;s make magic happen!
            </div>
            <div className="text-white flex flex-row justify-center space-x-8 mx-10 my-4">
                <LinkPreview url="https://github.com/royricha42002" className="font-bold">
                    <Image src="/github.png" className="h-12"  alt="github img" />
                </LinkPreview>
                <LinkPreview url="https://www.linkedin.com/in/richaroy42002/" className="font-bold">
                    <Image src="/linkedin.png" className="h-12" alt="linkedin img"  />
                </LinkPreview>
                <LinkPreview url="mailto:your-email@example.com" className="font-bold">
                    <Image src="/mail.png" className="h-12" alt="mail img"  />
                </LinkPreview>
                <LinkPreview url="https://www.instagram.com/richaroy.in?igsh=anE0OGZyamZtYWx3" className="font-bold">
                    <Image src="/insta.jpg" className="h-12" alt="insta img"  />
                </LinkPreview>
            </div>
            <MemoizedStars />
        </div>
    );
}

export default Contact;
