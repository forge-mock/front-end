"use client";

import React from "react";
import Image from "next/image";
import { Button } from "react-aria-components";
import styles from "./icon.module.scss";

interface IconButtonProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  classes?: string;
  onClick?: () => void;
}

function IconButton({ src, alt, width = 24, height = 24, onClick, classes = "" }: IconButtonProps) {
  return (
    <Button onPress={() => onClick?.()} className={`${styles.iconButton} ${classes}`}>
      <Image src={src} width={width} height={height} alt={alt} />
    </Button>
  );
}

export default IconButton;
