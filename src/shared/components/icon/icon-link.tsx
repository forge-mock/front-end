"use client";

import React from "react";
import Link from "next/link";
import styles from "./icon.module.scss";

interface IconLinkProps {
  path: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  width?: number;
  height?: number;
  classes?: string;
}

function IconLink({ path, Icon, width = 24, height = 24, classes = "" }: IconLinkProps) {
  return (
    <Link href={path} className={`flex outline-border-default shrink-0 focus-visible:rounded-full ${styles.iconLink} `}>
      <div className={`flex ${classes}`}>
        <Icon width={width} height={height} className={styles.icon} />
      </div>
    </Link>
  );
}

export default IconLink;
