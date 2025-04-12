"use client";

import React from "react";
import { motion } from "framer-motion";

interface LoaderProps {
  size: number;
}

function Loader({ size = 20 }: Readonly<LoaderProps>) {
  return (
    <motion.div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        border: `${size / 10}px solid rgba(79, 70, 229, 0.2)`,
        borderTop: `${size / 10}px solid var(--violet-border)`,
        boxSizing: "border-box",
      }}
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        ease: "linear",
        duration: 1,
      }}
    />
  );
}

export default Loader;
