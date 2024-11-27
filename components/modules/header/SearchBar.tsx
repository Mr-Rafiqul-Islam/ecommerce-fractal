"use client";
import React, { useState } from "react";

import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useSWR, { Fetcher } from "swr";
import { Product } from "@/types";
import Image from "next/image";
import { getBestPriceWithDiscountFromProduct } from "@/lib/utils";
import { useRouter } from "next/navigation";
import Loading from "@/components/custom/Loading";

export default function SearchBar({
  openSearchBar,
  setOpenSearchBar,
}: {
  openSearchBar: boolean;
  setOpenSearchBar: (v: boolean) => void;
}) {

  const [search, setSearch] = useState("");
  const router = useRouter();
    // client side data fethcing
  const fetcher: Fetcher<Product[], string> = (...args) =>
    fetch(...args)
      .then((res) => res.json())
      .then((data) => data.data);

  const { data, error, isLoading, isValidating } = useSWR<Product[]>(
    process.env.NEXT_PUBLIC_API_URL + "/api/products?search=" + search,
    fetcher
  );
  if (error)
    return <div>Failed to load due to Categories data Fetching error!</div>;
  console.log(data);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    // todo call api
    setSearch(e.currentTarget.value);
  };
  return (
    <>
    {(isValidating||isLoading) && <Loading isLoading={isValidating} />}
    <Dialog open={openSearchBar}>
      <DialogContent className="lg:max-w-screen-xl z-[9999] [&>.closeBtn]:hidden ">
        <div className="flex items-center w-full gap-4">
          <Search className="text-slate-300" />
          <Input
            placeholder="type any product here"
            onInput={handleSearch}
            className=" text-slate-500 font-medium text-xl"
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
        <div className="flex overflow-y-auto w-full py-12 gap-12 flex-col justify-start h-[600px] px-8">
          {
            data && data.map((item: Product) => (
              <div
                key={item._id}
                className="w-full group flex flex-col justify-start gap-8 px-8 cursor-pointer items-center lg:h-fit lg:flex-row lg:justify-between hover:border-gray-50 hover:scale-105 transition-all hover:shadow-lg py-4" role="button"
                onClick={() =>
                  router.push(`/products/${item.slug}`)
                }
              >
                <Image src={item.subProducts[0].options[0].images[0]} alt={item.name} width={60} height={80} className="object-contain"/>
                <span className="text-center">{item.name.substring(0, 100)}</span>
                <div className="w-40 text-center  font-bold text-xl text-primary-900">
                {getBestPriceWithDiscountFromProduct(item)}$
                </div>
              </div>
            ))
          }
        </div>
      </DialogContent>
    </Dialog>
    </>
  );
}
