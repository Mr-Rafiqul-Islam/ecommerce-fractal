import { cn } from "@/lib/utils";
import React from "react";

export default function ProductsSidebarLeft({
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  loading,
  setLoading,
  className,
}: {
  minPrice: number;
  setMinPrice: (v: number) => void;
  maxPrice: number;
  setMaxPrice: (v: number) => void;
  loading: boolean;
  setLoading: (v: boolean) => void;
  className?: string;
}) {
  return <div className={cn("",className)}>ProductsSidebarLeft</div>;
}
