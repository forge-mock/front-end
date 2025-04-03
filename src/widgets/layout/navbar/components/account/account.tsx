"use client";

import React from "react";
import AccountIcon from "@assets/layout/account.svg";
import { IconLink, Menu, MenuItem } from "@shared/components";

function Account(): React.JSX.Element {
  return (
    <Menu menuChildren={<IconLink path="/account" Icon={AccountIcon} height={30} width={30} />}>
      <MenuItem>Sign In</MenuItem>
      <MenuItem>Sign Up</MenuItem>
    </Menu>
  );
}

export default Account;
