import type { Metadata } from "next";
import React from "react";

import "./globals.css";
import { kanit } from "./fonts/fonts";
import Providers from "@/providers";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body className={cn(" !overflow-x-hidden min-h-screen", kanit.className)}>
          <Providers>{children}</Providers>
        </body>
      </html>
    </>
  );
}
