import React from "react";
import { PinContainer } from "../ui/3d-pin";

const skills = [
  { name: 'Java', image: '/java.png', href: '/java' },
  { name: 'React.js', image: '/react.png', href: '/react' },
  { name: 'Next.js', image: '/nextjs.png', href: '/next' },
  { name: 'Tailwind CSS', image: '/tailwind.png', href: '/node' },
  { name: 'Node.js', image: '/node.png', href: '/node' },
  { name: 'MongoDB', image: '/mongo.png', href: '/mongodb' },
  { name: 'MySQL', image: '/mysql.png', href: '/mysql' },
  { name: 'Prompt Engineering', image: '/prompt.png', href: '/prompt-engineering' },
];

export function AnimatedPinDemo() {
  return (
    <div className=" min-h-fit w-full flex flex-wrap justify-center my-24 items-center gap-24">
      {skills.map((skill) => (
        <PinContainer
          key={skill.name}
          title={skill.name}
          href={skill.href}
        >
          <div className="flex flex-col items-center p-2 tracking-tight text-slate-100/50 w-[10rem] h-[10rem]">
            <h3 className="font-bold text-xs text-slate-100 mb-1">
              {skill.name}
            </h3>
            <div className="flex flex-1 w-full rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 items-center justify-center">
              <img src={skill.image} alt={skill.name} className="w-14 h-14" />
            </div>
          </div>
        </PinContainer>
      ))}
    </div>
  );
}
