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

  if (theme === "light") {
    return (
      <IconButton src="/layout/sun.svg" alt="light mode" height={30} width={30} onClick={() => setTheme("dark")} />
    );
  }

  return <IconButton src="/layout/moon.svg" alt="dark mode" height={30} width={30} onClick={() => setTheme("light")} />;
}

export default ThemeSwitch;
