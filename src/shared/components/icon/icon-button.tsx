"use client";

import React from "react";
import { FocusRing } from "react-aria";
import { Button } from "react-aria-components";
import styles from "./icon.module.scss";

interface IconButtonProps {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  width?: number;
  height?: number;
  classes?: string;
  isDisabled?: boolean;
  onClick?: () => void;
}

function IconButton({ Icon, width = 24, height = 24, onClick, classes = "", isDisabled }: IconButtonProps) {
  const className = !isDisabled ? `${styles.iconButton} ${classes}` : styles.iconButtonDisabled;

  return (
    <FocusRing focusRingClass="outline-border-default">
      <Button isDisabled={isDisabled} onPress={() => onClick?.()} className={className} type="button">
        <Icon width={width} height={height} className={styles.icon} />
      </Button>
    </FocusRing>
  );
}

export default IconButton;
