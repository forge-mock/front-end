"use client";

import React from "react";
import Link from "next/link";
import styles from "./icon.module.scss";

interface IconLinkProps {
  path: string;
  ariaLabel: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  width?: number;
  height?: number;
  classes?: string;
}

function IconLink({ path, ariaLabel, Icon, width = 24, height = 24, classes = "" }: Readonly<IconLinkProps>) {
  return (
    <Link
      href={path}
      className={`flex outline-border-default shrink-0 focus-visible:rounded-full ${styles.iconLink}`}
      aria-label={ariaLabel}
    >
      <div className={`flex ${classes}`}>
        <Icon width={width} height={height} />
      </div>
    </Link>
  );
}

export default IconLink;
