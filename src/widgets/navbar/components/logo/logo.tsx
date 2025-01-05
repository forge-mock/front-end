import React from "react";
import { IconLink } from "@shared/components";

function Logo(): React.JSX.Element {
  return <IconLink path="/" src="/logo/forge-mock.svg" alt="logo" height={30} width={30} classes="p-1.5" />;
}

export default Logo;
