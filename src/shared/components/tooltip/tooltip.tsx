"use client";

import React from "react";
import { Tooltip } from "react-tooltip";
import styles from "./tooltip.module.scss";

interface TooltipProps {
  id: string;
  text: string;
  place?:
    | "top"
    | "top-start"
    | "top-end"
    | "right"
    | "right-start"
    | "right-end"
    | "bottom"
    | "bottom-start"
    | "bottom-end"
    | "left"
    | "left-start"
    | "left-end";
  offset?: number;
  children: React.ReactNode;
}

function TooltipV2({ id, text, place = "top", offset = 10, children }: TooltipProps) {
  return (
    <>
      <p data-tooltip-id={id} data-tooltip-content={text}>
        {children}
      </p>
      <Tooltip id={id} place={place} offset={offset} opacity={1} className={styles.tooltip} />
    </>
  );
}

export default TooltipV2;
