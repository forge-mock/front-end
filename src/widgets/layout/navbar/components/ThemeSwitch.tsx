"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import SunIcon from "@assets/layout/sun.svg";
import MoonIcon from "@assets/layout/moon.svg";
import { IconButton } from "@shared/components";

function ThemeSwitch(): React.JSX.Element {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <></>;
  }

  function setUserTheme(theme: string) {
    const root = document.documentElement;
    root.classList.add("disable-transitions");
    setTheme(theme);

    setTimeout(() => {
      root.classList.remove("disable-transitions");
    }, 100);
  }

  if (theme === "light") {
    return (
      <IconButton Icon={SunIcon} ariaLabel="Light Theme" height={30} width={30} onClick={() => setUserTheme("dark")} />
    );
  }

  return (
    <IconButton Icon={MoonIcon} ariaLabel="Dark Theme" height={30} width={30} onClick={() => setUserTheme("light")} />
  );
}

export default ThemeSwitch;
