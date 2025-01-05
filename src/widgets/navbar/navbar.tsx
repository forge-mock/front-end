import React from "react";
import Logo from "./components/logo/logo";
import Title from "./components/title/title";
import Account from "./components/account/account";

function Navbar(): React.JSX.Element {
  return (
    <header className="flex shrink-0 items-center justify-between h-14 w-screen px-2.5 border-2 border-solid border-b-slate-400 bg-slate-200">
      <nav>
        <Logo />
      </nav>
      <Title />
      <Account />
    </header>
  );
}

export default Navbar;
