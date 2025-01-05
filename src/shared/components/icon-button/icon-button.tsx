import React from "react";
import Image from "next/image";
import { Button } from "react-aria-components";

interface IconButtonProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  onClick?: () => void;
}

function IconButton({ src, alt, width = 24, height = 24, onClick }: IconButtonProps) {
  return (
    <Button
      onPress={() => onClick?.()}
      className={({ isHovered, isPressed, isFocused }) => `
    flex shrink-0 flex-row items-center p-1 rounded-full border-2 border-solid border-violet-600 transition duration-300
    ${isHovered && "bg-slate-300"}
    ${isPressed && "transition-none bg-slate-400"}
    ${isFocused && "outline-none"}
  `}
    >
      <Image src={src} width={width} height={height} alt={alt} />
    </Button>
  );
}

export default IconButton;
