import React from "react";
import Logo from "./components/logo/logo";
import Burger from "./components/burger/burger";
import Title from "./components/title/title";
import ThemeSwitch from "./components/theme-switch/theme-switch";
import Account from "./components/Account";

function Navbar(): React.JSX.Element {
  return (
    <header className="flex shrink-0 items-center justify-between h-14 w-screen px-2.5">
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
        <Account />
      </div>
    </header>
  );
}

export default Navbar;
