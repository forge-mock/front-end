"use client";

import React, { useState } from "react";
import AccountIcon from "@assets/layout/account.svg";
import { IconLink, Menu, MenuItem } from "@shared/components";
import { AuthModal } from "@features/auth-modal";

function Account(): React.JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const handleSignClick = (isLogin: boolean) => {
    setIsOpen(true);
    setIsLogin(isLogin);
  };

  return (
    <>
      <Menu menuChildren={<IconLink path="/account" Icon={AccountIcon} height={30} width={30} />}>
        <MenuItem onAction={() => handleSignClick(true)}>Sign In</MenuItem>
        <MenuItem onAction={() => handleSignClick(false)}>Sign Up</MenuItem>
      </Menu>

      <AuthModal isLogin={isLogin} isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export default Account;
