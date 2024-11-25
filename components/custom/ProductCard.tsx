"use client";
import {
  getBestPriceWithDiscountFromProduct,
  getBestPriceWithoutDiscountFromProduct,
} from "@/lib/utils";
import { Product } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function ProductCard({ item }: { item: Product }) {
  const router = useRouter();

  const active = 0;
  const product = item?.subProducts[active];
  const options = product?.options[active];
  const images = options?.images;
  const bestPriceWithDiscount = getBestPriceWithDiscountFromProduct(item);
  const bestPriceWithoutDiscount = getBestPriceWithoutDiscountFromProduct(item);

  return (
    <div className="flex flex-col gap-4 items-center cursor-pointer ">
      <div
        onClick={() => router.push(`/products/${item.slug}`)}
        className="flex group/image h-[500px] relative overflow-hidden"
      >
        <Image src={images[0]} alt={item.name} width={300} height={450} />
      </div>
    </div>
  );
}
