import React from "react";
import { TooltipTrigger, Tooltip as AriaTooltip } from "react-aria-components";
import { tv } from "tailwind-variants";

interface TooltipProps {
  text: string;
  delay?: number;
  closeDelay?: number;
  offset?: number;
  placement?: "start" | "end" | "top" | "bottom";
  children: React.ReactNode;
}

// variants: {
//   isEntering: {
//     true: 'animate-in fade-in placement-bottom:slide-in-from-top-0.5 placement-top:slide-in-from-bottom-0.5 placement-left:slide-in-from-right-0.5 placement-right:slide-in-from-left-0.5 ease-out duration-200'
//   },
//   isExiting: {
//     true: 'animate-out fade-out placement-bottom:slide-out-to-top-0.5 placement-top:slide-out-to-bottom-0.5 placement-left:slide-out-to-right-0.5 placement-right:slide-out-to-left-0.5 ease-in duration-150'
//   }
// }

function Tooltip({ text, delay = 100, closeDelay = 100, offset = 10, placement = "start", children }: TooltipProps) {
  return (
    <TooltipTrigger delay={delay} closeDelay={closeDelay}>
      {children}
      <AriaTooltip
        offset={offset}
        placement={placement}
        className={({ isEntering, isExiting }) => `
    p-2 rounded-md text-slate-100 bg-violet-600
    ${isEntering && "text-red-500"}
    ${isExiting && "text-red-500"}
  `}
      >
        <p>{text}</p>
      </AriaTooltip>
    </TooltipTrigger>
  );
}

export default Tooltip;
