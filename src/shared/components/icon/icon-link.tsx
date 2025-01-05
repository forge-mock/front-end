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
    <Link
      href={path}
      className="flex shrink-0 focus-visible:transition focus-visible:duration-300 focus-visible:outline-none 
        focus-visible:ring-offset-2 focus-visible:ring focus-visible:ring-blue-500 focus-visible:rounded-full"
    >
      <div className={`flex ${styles.iconLink} ${classes}`}>
        <Image src={src} width={width} height={height} alt={alt} />
      </div>
    </Link>
  );
}

export default IconLink;
