"use client";
import usePagination from "@/hooks/usePagination";
import { cn } from "@/lib/utils";
import { Product } from "@/types";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "@/components/custom/Loading";
import { Pagination } from "@mui/material";
import ProductTopBar from "@/components/custom/ProductTopBar";
import ProductsContent from "@/components/custom/ProductsContent";

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
  const [filter, setFilter] = useState<string>("latest");
  const [page, setPage] = useState<number>(1);

  const count = Math.ceil(products.length / perpages);
  const _DATA = usePagination(products, perpages);

  const handleChange = (e: React.ChangeEvent<unknown>, p: number) => {
    setPage(p);
    _DATA.jump(p);
  };

  // get products

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      await axios
        .get(process.env.NEXT_PUBLIC_API_URL + "/api/products", {
          params: { minPrice, maxPrice, filter },
        })
        .then((res) => {
          const data = res.data;
          setProducts(data.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    };
    getProducts();
  }, [page, minPrice, maxPrice, filter, perpages]);

  return (
    <>
      {loading && <Loading isLoading={loading} />}
      <div className={cn("", className)}>
        <div className="flex flex-col gap-4">
          <ProductTopBar  minPrice={minPrice} setMinPrice={setMinPrice} maxPrice={maxPrice} setMaxPrice={setMaxPrice} loading={loading} setLoading={setLoading} perpages={perpages} setPerpages={setPerpages} products={products}
          filter={filter} setFilter={setFilter}
          page={page}
          maxPage={_DATA.maxPage}
          />
          <ProductsContent products={_DATA.currentData()} />
          <div className="flex justify-between mt-auto py-10">
            <Pagination count={count} page={page} color="primary" variant="outlined" shape="rounded" 
            onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </>
  );
}
