import React, { forwardRef } from "react";

interface GridProps {
  columns: number;
  children: React.ReactNode;
}

function Grid({ children, columns }: GridProps, ref: React.Ref<HTMLDivElement>): React.JSX.Element {
  return (
    <div
      ref={ref}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridGap: 10,
        maxWidth: "800px",
      }}
    >
      {children}
    </div>
  );
}

export default forwardRef<HTMLDivElement, GridProps>(Grid);
