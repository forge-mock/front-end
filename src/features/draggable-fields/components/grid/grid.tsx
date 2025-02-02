import React, { forwardRef } from "react";

interface GridProps {
  columns: number;
  children: React.ReactNode;
}

function Grid({ children, columns }: GridProps, ref: React.Ref<HTMLDivElement>): React.JSX.Element {
  return (
    <div ref={ref} style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }} className="grid max-w-max gap-[10px]">
      {children}
    </div>
  );
}

export default forwardRef<HTMLDivElement, GridProps>(Grid);
