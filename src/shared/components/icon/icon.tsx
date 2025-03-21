"use client";

import React from "react";
import styles from "./icon.module.scss";

interface IconProps {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  width?: number;
  height?: number;
  classes?: string;
}

function Icon({ Icon, width = 24, height = 24, classes = "" }: IconProps) {
  return (
    <div tabIndex={0} className={`flex ${styles.iconContainer} ${classes}`}>
      <Icon width={width} height={height} className={styles.icon} />
    </div>
  );
}

export default Icon;
