"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./icon.module.scss";

interface IconLinkProps {
  path: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
  classes?: string;
}

function IconLink({ path, src, alt, width = 24, height = 24, classes = "" }: IconLinkProps) {
  return (
    <Link href={path} className={`flex outline-default shrink-0 focus-visible:rounded-full ${styles.iconLink} `}>
      <div className={`flex ${classes}`}>
        <Image src={src} width={width} height={height} alt={alt} className={styles.icon} />
      </div>
    </Link>
  );
}

export default IconLink;
