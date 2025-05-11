import React from "react";
import { Account } from "@widgets/account";

function AccountPage(): React.JSX.Element {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold my-5">User Profile</h1>

      <Account />
    </div>
  );
}

export default AccountPage;
