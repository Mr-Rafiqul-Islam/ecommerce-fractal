/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState } from "react";
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
import { Category, Page, SubCategory } from "@/types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SidebarMenu() {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [subCategories, setSubCategories] = useState<SubCategory[]>();
  // client side data fethcing
  const fetcher: Fetcher<Category[], string> = (...args) =>
    fetch(...args)
      .then((res) => res.json())
      .then((data) => data.data);

  const { data, error, isLoading } = useSWR<Category[]>(
    process.env.NEXT_PUBLIC_API_URL + "/api/categories",
    fetcher
  );
  if (error)
    return <div>Failed to load due to Categories data Fetching error!</div>;

  const pageApi = useSWR<Page[]>(
    process.env.NEXT_PUBLIC_API_URL + "/api/pages",
    fetcher
  );
  if (pageApi.error)
    return <div>Failed to load due to Pages data Fetching error!</div>;

  return (
    <>
      {isLoading && <div>Loading...</div>}
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
                  {data &&
                    data.slice(0, 20).map((item: Category) => (
                      <div key={item._id} className="group px-4 py-2">
                        <div className="flex items-center gap-4">
                          <span
                            onClick={() =>
                              router.push(`/categories/${item.link}/products`)
                            }
                            className="capitalize hover:text-primary-500 cursor-pointer"
                          >
                            {item.name}
                          </span>
                          {item.submenu && item.submenu.length > 0 && (
                            <ChevronRight
                              className="ms-auto h-5 w-5 text-iconsInside"
                              onClick={() => {
                                setShow(!show);
                                setSubCategories(item?.submenu);
                              }}
                            />
                          )}
                        </div>
                      </div>
                    ))}
                </div>
              </TabsContent>
              <TabsContent value="pages">
                {pageApi.data &&
                  pageApi.data.map((item: Page) => (
                    <div
                      key={item._id}
                      className="group inline-flex px-4 py-2 gap-4 w-full hover:text-primary-700 capitalize cursor-pointer"
                    >
                      <div className="flex items-center gap-4 w-full">
                        <span
                          onClick={() => {
                            router.push(`${item.link}`);
                          }}
                          className=""
                        >
                          {item.name}
                        </span>
                        {item?.subPage && item?.subPage.length > 0 && (
                          <ChevronRight
                            size={14}
                            className="ms-auto h-5 w-5 text-iconsInside"
                          />
                        )}
                      </div>
                    </div>
                  ))}
              </TabsContent>
            </Tabs>
          </div>
        </SheetContent>
      </Sheet>

      <Sheet open={show}>
        <SheetTrigger></SheetTrigger>
        <SheetContent
          className="px-4 w-full [&>#closeBtn]:hidden md:w-[400px]"
          side={"left"}
        >
          <div className="duration-300 ease-in absolute top-0 h-screen left-0 bg-white w-[260px] p-8">
            <Button
              onClick={() => setShow(!show)}
              variant="default"
              title="back"
              className="hover:bg-black hover:text-white"
            >
              <ChevronLeft />
            </Button>
            <div className="flex flex-col gap-8 justify-center mt-12">
              {subCategories?.map((item: SubCategory, idx: number) => (
                <div key={idx} className="group py-2">
                  <Link
                    href={`/categories/${item.link}/products`}
                    className="capitalize hover:text-primary-500 cursor-pointer"
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
