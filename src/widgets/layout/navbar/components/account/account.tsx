"use client";

import React from "react";
import AccountIcon from "@assets/layout/account.svg";
import { IconLink } from "@shared/components";

function Account(): React.JSX.Element {
  return <IconLink path="/account" Icon={AccountIcon} height={30} width={30} />;
}

export default Account;
