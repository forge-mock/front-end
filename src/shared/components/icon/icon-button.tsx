"use client";

import React from "react";
import Image from "next/image";
import { FocusRing } from "react-aria";
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
    <FocusRing focusRingClass="ring ring-offset-2 ring-[var(--blue-outline)]">
      <Button onPress={() => onClick?.()} className={`${styles.iconButton} ${classes}`} type="button">
        <Image src={src} width={width} height={height} alt={alt} className={styles.icon} />
      </Button>
    </FocusRing>
  );
}

export default IconButton;
