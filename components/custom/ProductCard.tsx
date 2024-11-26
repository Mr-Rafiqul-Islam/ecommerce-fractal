"use client";
import {
  getBestPriceWithDiscountFromProduct,
  getBestPriceWithoutDiscountFromProduct,
  getDiscountRate,
} from "@/lib/utils";
import { Product } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";
import { Eye } from "lucide-react";
import CurrencyFormat from "./CurrencyFormat";

export default function ProductCard({ item }: { item: Product }) {
  const router = useRouter();

  const active = 0;
  const product = item?.subProducts[active];
  const options = product?.options[active];
  const images = options?.images;
  const bestPriceWithDiscount = getBestPriceWithDiscountFromProduct(item);
  const bestPriceWithoutDiscount = getBestPriceWithoutDiscountFromProduct(item);
  const discountRate = getDiscountRate(
    bestPriceWithoutDiscount,
    bestPriceWithDiscount
  );

  return (
    <div className="flex flex-col gap-4 items-center cursor-pointer ">
      {/* images */}
      <div
        onClick={() => router.push(`/products/${item.slug}`)}
        className="flex group/image w-full h-[500px] relative overflow-hidden"
      >
        <Image
          src={images[0]}
          alt={item.name}
          width="300"
          height="450"
          className="duration-300 ease-linear group-hover/image:translate-x-full"
        />
        <Image
          src={images[1]}
          alt={item.name}
          width="300"
          height="450"
          className="absolute  duration-300 top-0 -translate-x-full ease-linear group-hover/image:translate-x-0"
        />
        <div className="absolute top-4 right-4 hidden flex-col gap-4 group-hover/image:flex duration-300 ease-in">
          <Button
            onClick={() => router.push(`/products/${item.slug}`)}
            variant="outline"
            size="icon"
            className="hover:bg-black hover:text-white duration-300 rounded-md"
          >
            <Eye />
          </Button>
        </div>
      </div>
      {/* content */}
      <div className="flex flex-col gap-4 items-start py-4">
        <h5 className="capitalize">{item.name.substring(0, 20)}</h5>
        <p className="capitalize text-sm">
          {item.description.substring(0, 30)}..
        </p>
        <div className="inline-flex justify-center gap-4 items-center">
          {discountRate > 0 ? (
            <div className="flex flex-wrap gap-4">
              <CurrencyFormat
                value={bestPriceWithDiscount}
                className="font-bold text-primary-900 text-left w-20 text-3xl"
              />
              <CurrencyFormat
                value={bestPriceWithoutDiscount}
                className="line-through w-16 text-slate-600 hidden lg:flex"
              />
            </div>
          ) : (
            <div className="flex flex-wrap gap-4">
              <CurrencyFormat
                value={bestPriceWithDiscount}
                className="font-bold text-primary-900"
              />
              <CurrencyFormat
                value={bestPriceWithoutDiscount}
                className="line-through text-sm w-16 opacity-0 hidden lg:flex"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
