import React from "react";
import Logo from "./components/logo/logo";
import Title from "./components/title/title";
import Account from "./components/account/account";

function Navbar(): React.JSX.Element {
  return (
    <header className="flex fixed items-center justify-between h-12 w-screen px-2.5 bg-violet-600">
      <nav>
        <Logo />
      </nav>
      <Title />
      <Account />
    </header>
  );
}

export default Navbar;
