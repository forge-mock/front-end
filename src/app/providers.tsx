"use client";

import { ThemeProvider } from "next-themes";

interface ProvidersProps {
  children: React.ReactNode;
}

function Providers({ children }: Readonly<ProvidersProps>) {
  return (
    <ThemeProvider attribute="data-theme" defaultTheme="light">
      {children}
    </ThemeProvider>
  );
}

export default Providers;
