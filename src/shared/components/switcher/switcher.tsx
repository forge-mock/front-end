"use client";

import { motion } from "motion/react";

interface SwitcherProps {
  isLeft: boolean;
  setIsLeft: (isLeft: boolean) => void;
  textLeft: string;
  textRight: string;
}

function Switcher({ isLeft, setIsLeft, textLeft, textRight }: SwitcherProps) {
  return (
    <div className="relative flex items-center p-1 bg-gray-300 rounded-[15px] w-52 mt-10">
      <motion.div
        className="absolute top-0 left-0 w-1/2 h-full bg-purple-500 rounded-[15px]"
        animate={{ x: isLeft ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 500, damping: 20 }}
      />
      <button
        className={`relative flex-1 text-lg font-semibold text-center px-4 py-2 rounded-full transition-all duration-300 ${isLeft ? "text-white" : "text-black"}`}
        onClick={() => setIsLeft(true)}
      >
        {textLeft}
      </button>
      <button
        className={`relative flex-1 text-lg font-semibold text-center px-2 py-2 rounded-full transition-all duration-300 ${!isLeft ? "text-white" : "text-black"}`}
        onClick={() => setIsLeft(false)}
      >
        {textRight}
      </button>
    </div>
  );
}

export default Switcher;
