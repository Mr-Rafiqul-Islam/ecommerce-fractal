"use client";
import usePagination from "@/hooks/usePagination";
import { cn } from "@/lib/utils";
import { Product } from "@/types";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "@/components/custom/Loading";

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

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>, p: number ) => {
    setPage(p);
    _DATA.jump(p);
  };

  // get products

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      await axios 
        .get(process.env.NEXT_PUBLIC_API_URL + "/api/products", {
          params: { minPrice, maxPrice, filter},
        })
        .then((res) => {
          const data = res.data;
          setProducts(data.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        })
    };
    getProducts();
  }, [page, minPrice, maxPrice, filter]);

  return (
    <>
    {loading && <Loading isLoading={loading} />}
    <div className={cn("border", className)}>ProductsMainContent</div>
    </>
  );
}
