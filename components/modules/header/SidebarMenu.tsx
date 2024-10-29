/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { CiMenuFries } from "react-icons/ci";
import { cn } from "@/lib/utils";
import useSWR, { Fetcher } from "swr";
import { Category, Page } from "@/types";

export default function SidebarMenu() {
  // client side data fethcing

  const fetcher: Fetcher<Category[], string> = (...args) =>
    fetch(...args)
      .then((res) => res.json())
      .then((data) => data.data);

  const { data, error, isLoading } = useSWR<Category[]>(
    process.env.NEXT_PUBLIC_API_URL + "/api/categories",
    fetcher
  );
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  // const { data, error, isLoading } = useSWR<Page[]>(
  //   process.env.NEXT_PUBLIC_API_URL + "/api/pages",
  //   fetcher
  // );
  return (
    <Sheet>
      <SheetTrigger>
        <CiMenuFries size={34} />
      </SheetTrigger>
      <SheetContent
        className={cn("px-4 w-full [&>#closeBtn]:text-3xl", "md:w-[400px]")}
      >
        <div className="mt-10">
          <Tabs defaultValue="categories">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="category">Categories</TabsTrigger>
              <TabsTrigger value="pages">Pages</TabsTrigger>
            </TabsList>
            <TabsContent value="category">
              <div className="flex flex-col gap-8 h-full">
                {data && data.slice(0,20).map((item: Category) => (
                  <div key={item._id} className="group px-4 py-2">
                    <div className="flex items-center gap-4">
                      <span className="capitalize hover:text-primary-500 cursor-pointer">
                        {item.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="pages">{/* TODO: Api Call  */}</TabsContent>
          </Tabs>
        </div>
      </SheetContent>
    </Sheet>
  );
}
