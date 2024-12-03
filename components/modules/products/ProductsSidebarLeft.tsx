import HeadingSidebar from "@/components/custom/HeadingSidebar";
import ProductsCatAccordion from "@/components/custom/ProductsCatAccordion";
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
  return <div className={cn("lg:max-w-[360px] h-full",className)}>
    <div className="flex flex-col gap-8 items-center">
      <div className="flex flex-col gap-2 items-center w-full">
        <HeadingSidebar name="Product Categories" />
        <ProductsCatAccordion />
      </div>
    </div>
  </div>;
}
