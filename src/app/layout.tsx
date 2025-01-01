import React from "react";
import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Forge Mock",
  description: "Generate any mock data you need for your project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
