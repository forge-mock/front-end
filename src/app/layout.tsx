import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@widgets/navbar";
import { DesktopSidebar, MobileSidebar } from "@widgets/sidebar";
import { Footer } from "@widgets/footer";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Forge Mock",
  description: "Generate any mock data you need for your project",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>): React.JSX.Element {
  return (
    <html lang="en">
      <body className="flex flex-col">
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

          <div className="flex flex-col justify-between overflow-auto h-[calc(100vh-3.5rem)]">
            <main>{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
