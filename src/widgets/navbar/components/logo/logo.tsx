import React from "react";
import Image from "next/image";
import Link from "next/link";

function Logo(): React.JSX.Element {
  return (
    <Link href="/">
      <div className="p-1.5 border-2 border-solid border-violet-600 rounded-full bg-slate-100">
        <Image src="/logo/forge-mock.svg" height={30} width={30} alt="logo" priority />
      </div>
    </Link>
  );
}

export default Logo;
