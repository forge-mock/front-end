"use client";

import React from "react";
import { IconButton } from "@shared/components";

function Account(): React.JSX.Element {
  return <IconButton src={"/layout/account.svg"} height={30} width={30} alt={"logo"} />;
}

export default Account;
