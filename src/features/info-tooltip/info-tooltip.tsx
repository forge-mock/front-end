import React from "react";
import Image from "next/image";
import { Tooltip } from "@shared/components";

export interface InfoTooltipProps {
  text: string;
}

function InfoTooltip({ text }: InfoTooltipProps): React.JSX.Element {
  return (
    <div className="flex flex-row items-center gap-4">
      <div className="flex shrink-0">
        <Tooltip id={text} place="top" text={text}>
          <Image
            src="/shared/info.svg"
            alt="Info tooltip"
            width={24}
            height={24}
            className="cursor-pointer"
            style={{ filter: "var(--violet-icon)" }}
          />
        </Tooltip>
      </div>
    </div>
  );
}

export default InfoTooltip;
