import React from "react";
import Image from "next/image";

function Draggable(): React.JSX.Element {
  return <Image src="/dragging/move.svg" width={18} height={18} alt="Move" style={{ filter: "var(--violet-icon)" }} />;
}

export default Draggable;
