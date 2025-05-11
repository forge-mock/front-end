"use client";

import React, { useState, useEffect } from "react";
import AccountIcon from "@assets/layout/account.svg";
import { IconButton, Menu, MenuItem } from "@shared/components";
import { LOCAL_STORAGE_ITEMS } from "@shared/constants";
import { getLocalStorageItem } from "@shared/helpers";
import { useLoginStore } from "@entities/user-info";
import { AuthModal } from "@features/auth-modal";
import { LogoutModal } from "@features/logout-modal";

function Account(): React.JSX.Element {
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);
  const [isLogoutOpen, setIsLogoutOpen] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const { isLoggedIn, setIsLoggedIn } = useLoginStore();

  useEffect(() => {
    const loggedIn = getLocalStorageItem<boolean>(LOCAL_STORAGE_ITEMS.isLoggedIn) ?? false;
    setIsLoggedIn(loggedIn);
  }, []);

  const handleSignClick = (isLogin: boolean) => {
    setIsLoginOpen(true);
    setIsLogin(isLogin);
  };

  return (
    <>
      <Menu isButton menuChildren={<IconButton Icon={AccountIcon} ariaLabel="Account" height={30} width={30} />}>
        {isLoggedIn ? (
          <>
            <MenuItem>Welcome, biba</MenuItem>
            <MenuItem onAction={() => setIsLogoutOpen(true)}>Profile</MenuItem>
            <MenuItem onAction={() => setIsLogoutOpen(true)}>Sign Out</MenuItem>
          </>
        ) : (
          <>
            <MenuItem onAction={() => handleSignClick(true)}>Sign In</MenuItem>
            <MenuItem onAction={() => handleSignClick(false)}>Sign Up</MenuItem>
          </>
        )}
      </Menu>

      <AuthModal isLogin={isLogin} isOpen={isLoginOpen} setIsLogin={setIsLogin} setIsOpen={setIsLoginOpen} />

      <LogoutModal isOpen={isLogoutOpen} setIsOpen={setIsLogoutOpen} setIsLoggedIn={setIsLoggedIn} />
    </>
  );
}

export default Account;
