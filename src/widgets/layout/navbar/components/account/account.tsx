"use client";

import React from "react";
import { IconLink } from "@shared/components";

function Account(): React.JSX.Element {
  return <IconLink path="/account" src={"/layout/account.svg"} height={30} width={30} alt={"logo"} />;
}

export default Account;
