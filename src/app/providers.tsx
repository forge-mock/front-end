"use client";

import { ThemeProvider } from "next-themes";

function Providers({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ThemeProvider attribute="data-theme" defaultTheme="light">
      {children}
    </ThemeProvider>
  );
}

export default Providers;
