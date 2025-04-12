"use client";

import React, { useState, useEffect } from "react";
import AccountIcon from "@assets/layout/account.svg";
import { LOCAL_STORAGE_ITEMS } from "@shared/constants";
import { getLocalStorageItem, removeLocalStorageItem } from "@shared/helpers";
import { IconButton, Menu, MenuItem } from "@shared/components";
import { AuthModal } from "@features/auth-modal";

function Account(): React.JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const loggedIn = getLocalStorageItem<boolean>(LOCAL_STORAGE_ITEMS.isLoggedIn) ?? false;
    setIsLoggedIn(loggedIn);
  }, []);

  const handleSignClick = (isLogin: boolean) => {
    setIsOpen(true);
    setIsLogin(isLogin);
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
    removeLocalStorageItem(LOCAL_STORAGE_ITEMS.accessToken);
    removeLocalStorageItem(LOCAL_STORAGE_ITEMS.isLoggedIn);
  };

  return (
    <>
      <Menu isButton menuChildren={<IconButton Icon={AccountIcon} height={30} width={30} />}>
        {isLoggedIn ? (
          <MenuItem onAction={handleSignOut}>Sign Out</MenuItem>
        ) : (
          <>
            <MenuItem onAction={() => handleSignClick(true)}>Sign In</MenuItem>
            <MenuItem onAction={() => handleSignClick(false)}>Sign Up</MenuItem>
          </>
        )}
      </Menu>

      <AuthModal
        isLogin={isLogin}
        isOpen={isOpen}
        setIsLogin={setIsLogin}
        setIsOpen={setIsOpen}
        setIsLoggedIn={setIsLoggedIn}
      />
    </>
  );
}

export default Account;
