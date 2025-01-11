import { HTMLAttributes } from "react";

export interface ItemProps extends HTMLAttributes<HTMLDivElement> {
  id: string;
  withOpacity?: boolean;
  isDragging?: boolean;
}
