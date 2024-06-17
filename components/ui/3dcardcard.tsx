import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";

interface ThreeDCardDemoProps {
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
}

export const ThreeDCardDemo: React.FC<ThreeDCardDemoProps> = ({
  title,
  description,
  imageUrl,
  linkUrl,
}) => {
  return (
    <CardContainer className="group inter-var hover:shadow-cyan-white">
      <CardBody className="bg-gray-50 relative group-hover:shadow-cyan-white border-black/[0.1] w-full h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={imageUrl}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href={linkUrl}
            target="__blank"
            className="px-4 py-2 rounded-xl text-sm bg-black text-white font-bold"
          >
            Try now →
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default ThreeDCardDemo;
