"use client";

import React from "react";
import Image from "next/image";
import styles from "./icon.module.scss";

interface IconProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  classes?: string;
}

function Icon({ src, alt, width = 24, height = 24, classes = "" }: IconProps) {
  return (
    <div tabIndex={0} className={`flex ${styles.iconContainer} ${classes}`}>
      <Image src={src} width={width} height={height} alt={alt} className={styles.icon} />
    </div>
  );
}

export default Icon;
