"use client";

import React from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
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
  classes?: string;
  children: React.ReactNode;
}

function Tooltip({ id, text, place = "top", offset = 10, classes = "", children }: Readonly<TooltipProps>) {
  return (
    <>
      <div data-tooltip-id={id} data-tooltip-content={text}>
        {children}
      </div>
      <ReactTooltip id={id} place={place} offset={offset} opacity={1} className={`${styles.tooltip} ${classes}`} />
    </>
  );
}

export default Tooltip;
