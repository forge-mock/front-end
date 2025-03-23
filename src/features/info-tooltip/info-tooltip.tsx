import React from "react";
import InfoIcon from "@assets/shared/info.svg";
import { Tooltip } from "@shared/components";

export interface InfoTooltipProps {
  text: string;
}

function InfoTooltip({ text }: Readonly<InfoTooltipProps>): React.JSX.Element {
  return (
    <div className="flex flex-row items-center gap-4">
      <div className="flex shrink-0">
        <Tooltip id={text} place="top" text={text}>
          <InfoIcon />
        </Tooltip>
      </div>
    </div>
  );
}

export default InfoTooltip;
