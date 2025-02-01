import React from "react";
import { IconLink } from "@shared/components";

function Logo(): React.JSX.Element {
  return <IconLink path="/" src="/logo/forge-mock.svg" alt="logo" height={26} width={26} classes="p-1" />;
}

export default Logo;
