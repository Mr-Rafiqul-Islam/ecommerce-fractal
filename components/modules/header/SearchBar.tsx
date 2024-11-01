"use client";
import React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useSWR, { Fetcher } from "swr";
import { Product } from "@/types";
import Image from "next/image";
import { getBestPriceWithDiscountFromProduct } from "@/lib/utils";

export default function SearchBar({
  openSearchBar,
  setOpenSearchBar,
}: {
  openSearchBar: boolean;
  setOpenSearchBar: (v: boolean) => void;
}) {

    // client side data fethcing
  const fetcher: Fetcher<Product[], string> = (...args) =>
    fetch(...args)
      .then((res) => res.json())
      .then((data) => data.data);

  const { data, error, isLoading } = useSWR<Product[]>(
    process.env.NEXT_PUBLIC_API_URL + "/api/products",
    fetcher
  );
  if (error)
    return <div>Failed to load due to Categories data Fetching error!</div>;
  console.log(data);
  const handleSearch = () => {
    // todo call api
  };
  return (
    <Dialog open={openSearchBar}>
      <DialogContent className="lg:max-w-screen-xl z-[9999] [&>.closeBtn]:hidden ">
        <div className="flex items-center w-full gap-4">
          <Search className="text-slate-300" />
          <Input
            placeholder="type any product here"
            onInput={handleSearch}
            className=" text-slate-500"
          />
          <Button
            onClick={() => setOpenSearchBar(false)}
            variant="outline"
            size={"icon"}
            className="hover:bg-primary-500 group"
          >
            <X className="group-hover:text-white" />
          </Button>
        </div>
        <div className="flex overflow-y-auto w-full py-12 gap-12 flex-col justify-start">
          {
            data && data.map((item: Product) => (
              <div
                key={item._id}
                className="w-full flex flex-col justify-start gap-8 px-8 items-center"
              >
                <Image src={item.subProducts[0].options[0].images[0]} alt={item.name} width={60} height={80} className="object-contain"/>
                <h6>{getBestPriceWithDiscountFromProduct(item)}</h6>
              </div>
            ))
          }
        </div>
      </DialogContent>
    </Dialog>
  );
}
