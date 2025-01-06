import React from "react";
import Logo from "./components/logo/logo";
import Burger from "./components/burger/burger";
import Title from "./components/title/title";
import ThemeSwitch from "./components/theme-switch/theme-switch";
import Account from "./components/account/account";

function Navbar(): React.JSX.Element {
  return (
    <header
      className="flex shrink-0 items-center justify-between h-14 w-screen px-2.5 
      border-2 border-solid border-b-slate-400 bg-slate-200"
    >
      <div>
        <nav className="hidden sm:block">
          <Logo />
        </nav>

        <div className="block sm:hidden">
          <Burger />
        </div>
      </div>

      <Title />

      <div className="flex items-center gap-4">
        <ThemeSwitch />

        <div className="hidden sm:block">
          <Account />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
