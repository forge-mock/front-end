"use client";

import React from "react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
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
      <IconButton src="/layout/sun.svg" alt="light mode" height={30} width={30} onClick={() => setUserTheme("dark")} />
    );
  }

  return (
    <IconButton src="/layout/moon.svg" alt="dark mode" height={30} width={30} onClick={() => setUserTheme("light")} />
  );
}

export default ThemeSwitch;
