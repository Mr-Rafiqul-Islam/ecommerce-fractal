"use client";
import { ClerkProvider } from "@clerk/nextjs";
import React from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <ClerkProvider
      // add custom style

      appearance={{
        layout:{
          socialButtonsPlacement: "bottom",
          socialButtonsVariant: "blockButton",
        }
      }}
      >{children}</ClerkProvider>
    </div>
  );
}
