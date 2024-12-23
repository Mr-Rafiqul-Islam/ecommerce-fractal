import { Product } from "@/types";
import React from "react";
import MobileSidebarLeft from "./MobileSidebarLeft";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export default function ProductTopBar({
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  loading,
  setLoading,
  perpages,
  setPerpages,
  filter,
  setFilter,
  page,
  maxPage,
  products,
}: {
  minPrice: number;
  setMinPrice: (v: number) => void;
  maxPrice: number;
  setMaxPrice: (v: number) => void;
  loading: boolean;
  setLoading: (v: boolean) => void;
  perpages: number;
  setPerpages: (v: number) => void;
  filter: string;
  setFilter: (v: string) => void;
  page: number;
  maxPage: number;
  products: Product[];
}) {
  return (
    <div className="lg:flex items-center justify-between w-full ">
      <div className="flex items-center justify-between gap-4 flex-1 w-full">
        <MobileSidebarLeft minPrice={minPrice} setMinPrice={setMinPrice} maxPrice={maxPrice} setMaxPrice={setMaxPrice} loading={loading} setLoading={setLoading}/>
        <div className="hidden lg:block">
          Showing {maxPage === page ? products.length : perpages * page} of{" "}
          {products.length} results
        </div>
        <div className="ms-auto">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="capitalize" size="sm">
                {filter}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value={"bottom"}>
                <DropdownMenuRadioItem
                  value="top"
                  onClick={() => setFilter("alphabetic")}
                >
                  Alphabetic
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  value={filter}
                  onClick={() => setFilter("priceLowToHigh")}
                >
                  Price: Low to high
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  value={filter}
                  onClick={() => setFilter("priceHighToLow")}
                >
                  Price : High to low
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  value={filter}
                  onClick={() => setFilter("latest")}
                >
                  Latest
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          {/* showing products on perpage */}
          <span className="ms-4 text-base">Show:</span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">{perpages}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value={"bottom"}>
                <DropdownMenuRadioItem
                  value="30"
                  onClick={() => setPerpages(30)}
                >
                  30
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  value="20"
                  onClick={() => setPerpages(20)}
                >
                  20
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  value="10"
                  onClick={() => setPerpages(10)}
                >
                  10
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
