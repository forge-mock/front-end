import React from "react";
import type { Metadata } from "next";
import Providers from "./providers";
import { Navbar } from "@widgets/layout/navbar";
import { DesktopSidebar, MobileSidebar } from "@widgets/layout/sidebar";
import { Footer } from "@widgets/layout/footer";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Forge Mock",
  description: "Generate any mock data you need for your project",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>): React.JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col">
        <Providers>
          <Navbar />
          <div className="flex flex-row">
            <div>
              <div className="h-full hidden sm:block">
                <DesktopSidebar />
              </div>

              <div className="h-full block sm:hidden">
                <MobileSidebar />
              </div>
            </div>

            <div className="flex grow flex-col justify-between overflow-auto h-[calc(100vh-3.5rem)]">
              <main className="p-2">{children}</main>
              <Footer />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
