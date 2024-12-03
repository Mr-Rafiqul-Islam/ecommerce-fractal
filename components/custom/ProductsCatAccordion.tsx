"use client";
import { Category, SubCategory } from "@/types";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Skeleton } from "@mui/material";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function ProductsCatAccordion() {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);

  // get categories API call using useEffect

  useEffect(() => {
    const getCategories = async () => {
      setLoading(true);
      await axios
        .get(process.env.NEXT_PUBLIC_API_URL + "/api/categories")
        .then((res) => {
          const data = res.data;
          setCategories(data.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    };
    getCategories();
  }, []);
  return (
    <>
      {loading ? (
        
          <Skeleton width={200} height={600} />
        
      ) : (
        <Accordion type="single" collapsible className="w-full">
          {categories &&
            categories.slice(0, 20).map((item: Category) => (
              <AccordionItem value={item._id} key={item._id}>
                <AccordionTrigger className="!py-0">
                  <Link className="text-xl" href={`/categories/${item.link}/products`}>
                    <span className="text-xl capitalize">{item.name}</span>
                  </Link>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-4 ms-10">
                    {item?.submenu?.map((submenu: SubCategory) => (
                      <Link
                        key={submenu.name}
                        href={`/categories/${submenu.link}/products`}
                        className="text-xl min-w-40 hover:text-primary-900 capitalize"
                      >
                        {submenu.name}
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
        </Accordion>
      )}
    </>
  );
}
