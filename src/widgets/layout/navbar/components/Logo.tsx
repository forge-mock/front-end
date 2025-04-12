"use client";

import React from "react";
import ForgeMockIcon from "@assets/logo/forge-mock.svg";
import { IconLink } from "@shared/components";

function Logo(): React.JSX.Element {
  return <IconLink path="/" Icon={ForgeMockIcon} height={30} width={30} classes="p-0.5" />;
}

export default Logo;
