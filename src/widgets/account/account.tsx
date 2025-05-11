"use client";

import React from "react";
import UserInfoUpdate from "./components/UserInfoUpdate";

function Account(): React.JSX.Element {
  return (
    <div className="flex shrink-0 items-center justify-between h-14 w-screen px-2.5">
      <UserInfoUpdate />
    </div>
  );
}

export default Account;
