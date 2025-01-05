import React from "react";
import Link from "next/link";
import { IconButton } from "@shared/components";

function Logo(): React.JSX.Element {
  return (
    <Link href="/">
      <IconButton src="/logo/forge-mock.svg" alt="logo" height={30} width={30} classes="p-1.5" />
    </Link>
  );
}

export default Logo;
