import { HTMLAttributes } from "react";

export interface FieldProps extends HTMLAttributes<HTMLDivElement> {
  id: string;
  withOpacity?: boolean;
  isDragging?: boolean;
}
