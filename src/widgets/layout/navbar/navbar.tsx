import React from "react";
import Logo from "./components/Logo";
import Burger from "./components/Burger";
import ThemeSwitch from "./components/ThemeSwitch";
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

      <h1 className="text-2xl font-bold italic text-[var(--violet-title-color)]">Forge Mock</h1>

      <div className="flex items-center gap-4">
        <ThemeSwitch />
        <Account />
      </div>
    </header>
  );
}

export default Navbar;
