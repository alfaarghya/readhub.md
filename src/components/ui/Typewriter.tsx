import { TypewriterEffectSmooth } from "./typewriter-effect";

export const Typewriter = () => {
  const words = [
    {
      text: "Generate",
    },
    {
      text: "Modern",
      className: "text-[#95D2EE]",
    },
    {
      text: "Github",
    },
    {
      text: "Profile",
    },
  ];
  return (
    <div className="">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
};
