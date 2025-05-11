import React from "react";
import UpdateItem from "./components/UpdateItem";
import UserInfoUpdate from "./components/UserInfoUpdate";
import PasswordUpdate from "./components/PasswordUpdate";

function Account(): React.JSX.Element {
  return (
    <div className="flex flex-col xl:flex-row items-center justify-center h-full w-full gap-10">
      <UpdateItem title="Data">
        <UserInfoUpdate />
      </UpdateItem>

      <UpdateItem title="Password">
        <PasswordUpdate />
      </UpdateItem>
    </div>
  );
}

export default Account;
