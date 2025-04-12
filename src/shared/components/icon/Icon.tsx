"use client";

import React from "react";
import styles from "./icon.module.scss";

interface IconProps {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  width?: number;
  height?: number;
  classes?: string;
}

function Icon({ Icon, width = 24, height = 24, classes = "" }: Readonly<IconProps>) {
  return (
    <div className={`flex ${styles.iconContainer} ${classes}`}>
      <Icon width={width} height={height} />
    </div>
  );
}

export default Icon;
