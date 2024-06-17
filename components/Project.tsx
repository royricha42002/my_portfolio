"use client";
import React from "react";
import dynamic from 'next/dynamic';

// Dynamically import components
const MemoizedStars = dynamic(() => import("./ui/stars").then(mod => mod.MemoizedStars), { ssr: false });
const ThreeDCardDemo = dynamic(() => import("./ui/3dcardcard").then(mod => mod.default), { ssr: false });

const Project = () => {
  const cardDataArray = [
    {
      title: "EDGE RUNNER",
      description:
        "The game involves a player-controlled sprite moving left and right to avoid enemies descending the screen. The game board handles rendering and logic, with a game loop updating the state regularly, and the game ends upon collision detection.",
      imageUrl: "/edgerunner.png",
      linkUrl: "https://github.com/royricha42002/Edge-Runner---Java-Game",
    },
    {
      title: "FOODERS",
      description:
        "A fully responsive restaurant website FOODERS, made using the MERN stack. The site includes a home page, a menu page displaying available dishes, a success page confirming order placements, and a 404 page for invalid routes. Additionally, it features form validation for reservation submissions to ensure proper data entry.",
      imageUrl: "/fooders.png",
      linkUrl: "https://github.com/royricha42002/FOODERS",
    },
    {
      title: "NOTESWORLD",
      description:
        "NotesApp is a full-stack application for creating and managing notes, featuring user authentication and personalized note management. Built with React, Node.js, Express, and MongoDB, it provides a responsive and user-friendly interface for seamless note-taking.",
      imageUrl: "/notesworld.png", // Ensure this path is correct
      linkUrl: "https://github.com/royricha42002/NotesApp", // Ensure this URL is correct
    },
  ];

  return (
    <div className="bg-gradient-to-b from-black to-cyan-500 min-h-screen">
      <MemoizedStars />
      <div className="text-center pt-16">
        <h1 className="text-4xl text-cyan-200 font-bold mb-5">Projects</h1>
        <MemoizedStars />
      </div>
      <div className="flex flex-wrap justify-center p-5 gap-8">
        {cardDataArray.map((cardData, index) => (
          <div key={index} className="flex-grow min-w-[280px] max-w-[400px] p-4">
            <ThreeDCardDemo
              title={cardData.title}
              description={cardData.description}
              imageUrl={cardData.imageUrl}
              linkUrl={cardData.linkUrl}
            />
          </div>
        ))}
      </div>
      <MemoizedStars />
    </div>
  );
};

export default Project;
