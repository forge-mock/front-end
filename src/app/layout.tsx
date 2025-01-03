import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@widgets/navbar";
import { Footer } from "@widgets/footer";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Forge Mock",
  description: "Generate any mock data you need for your project",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>): React.JSX.Element {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen">
        <Navbar />
        <div className="flex flex-col justify-between overflow-auto h-screen">
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
