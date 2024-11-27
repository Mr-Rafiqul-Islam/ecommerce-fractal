"use client";
import usePagination from "@/hooks/usePagination";
import { cn } from "@/lib/utils";
import { Product } from "@/types";
import React, { useState } from "react";

export default function ProductsMainContent({
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
  const [products, setProducts] = useState<Product[]>([]);
  const [perpages, setPerpages] = useState<number>(10);
  const [filter, setFilter] = useState<string>('latest');
  const [page, setPage] = useState<number>(1);

  const count = Math.ceil(products.length / perpages);
  const _DATA = usePagination(products, perpages);

  

  return <div className={cn("border", className)}>ProductsMainContent</div>;
}
