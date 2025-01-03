import React from "react";
import Image from "next/image";

function Account(): React.JSX.Element {
  return (
    <div className="cursor-pointer p-1.5 rounded-full bg-slate-100">
      <Image src="./layout/account.svg" height={24} width={24} alt="logo" priority />
    </div>
  );
}

export default Account;
