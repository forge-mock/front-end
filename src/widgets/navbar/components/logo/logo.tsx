import React from "react";
import Image from "next/image";
import Link from "next/link";

function Logo(): React.JSX.Element {
  return (
    <Link href="/">
      <div className="p-1.5 rounded-full bg-slate-100">
        <Image src="./logo/forge-mock.svg" height={32} width={32} alt="logo" priority />
      </div>
    </Link>
  );
}

export default Logo;
