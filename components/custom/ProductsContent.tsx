import React from "react";
import { Product } from "@/types";
import { ShoppingBasket } from "lucide-react";
import ProductCardTwo from "./ProductCardTwo";

export default function ProductsContent({ products }: { products?: Product[] }) {
  return (
    <>
      {products && products.length === 0 ? (
        <div className="flex flex-col justify-center items-center py-20 px-20 w-full">
          <ShoppingBasket className="font-bold"/>
          <h3 className="">No Product Found</h3>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 relative">
            {   products &&
                products?.map((item : Product )=>(
                    <ProductCardTwo key={item._id} item={item} />
                ))
            }
        </div>
      )}
    </>
  );
}
