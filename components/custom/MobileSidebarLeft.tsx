import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { ArrowDownZA } from "lucide-react";
import ProductsFilter from "./ProductsFilter";

export default function MobileSidebarLeft({
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  loading,
  setLoading,
}: {
  minPrice: number;
  setMinPrice: (v: number) => void;
  maxPrice: number;
  setMaxPrice: (v: number) => void;
  loading: boolean;
  setLoading: (v: boolean) => void;
}) {
  return (
    <div className="block lg:hidden">
      <Sheet>
        <SheetTrigger>
          <span className="flex items-center gap-2">
            <ArrowDownZA
              size={20}
              className="h-4 w-4 hover:text-primary-900 hover:font-bold"
            />
            Filters
          </span>
        </SheetTrigger>
        <SheetContent className="px-4 w-full md:w-[400px] p-0" side='left'>
          <SheetHeader className="bg-backgroundDisabled p-1 border-b flex justify-start">
            <SheetTitle className="text-sm">Filters</SheetTitle>  
            <SheetDescription> Filters by Price</SheetDescription>
          </SheetHeader>
          <div className="flex flex-col h-screen p-4">
            <ProductsFilter minPrice={minPrice} setMinPrice={setMinPrice} maxPrice={maxPrice} setMaxPrice={setMaxPrice} loading={loading} setLoading={setLoading}/>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
