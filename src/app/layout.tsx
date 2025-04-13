import React from "react";
import type { Metadata } from "next";
import Providers from "./providers";
import { Toast } from "@shared/components";
import { Navbar, DesktopSidebar, MobileSidebar, Footer } from "@widgets/layout";
import "./globals.scss";

export const dynamic = "force-dynamic";

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
              <Toast />
              <Footer />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
