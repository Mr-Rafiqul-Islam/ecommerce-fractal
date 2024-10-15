import { cn } from "@/lib/utils";
import React from "react";

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("flex items-center flex-wrap h-full", className)}>{children}</div>;
}
