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
  isDisabled?: boolean;
  onClick?: () => void;
}

function IconButton({ src, alt, width = 24, height = 24, onClick, classes = "", isDisabled }: IconButtonProps) {
  const className = !isDisabled ? `${styles.iconButton} ${classes}` : `${styles.iconButtonDisabled}`;

  return (
    <FocusRing focusRingClass="outline-border-default">
      <Button isDisabled={isDisabled} onPress={() => onClick?.()} className={className} type="button">
        <Image src={src} width={width} height={height} alt={alt} className={styles.icon} />
      </Button>
    </FocusRing>
  );
}

export default IconButton;
