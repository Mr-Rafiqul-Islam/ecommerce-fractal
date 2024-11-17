import { cn } from "@/lib/utils";
import { Category, Page, SubCategory } from "@/types";
import { m, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import useSWR, { Fetcher } from "swr";

export default function MainMenu() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  // client side data fethcing
  const fetcher: Fetcher<Category[], string> = (...args) =>
    fetch(...args)
      .then((res) => res.json())
      .then((data) => data.data);

  const { data, error, isLoading } = useSWR<Category[]>(
    process.env.NEXT_PUBLIC_API_URL + "/api/categories",
    fetcher
  );
  const pageApi = useSWR<Page[]>(
    process.env.NEXT_PUBLIC_API_URL + "/api/pages",
    fetcher
  );
  if (error)
    return <div>Failed to load due to Categories data Fetching error!</div>;
  if (pageApi.error)
    return <div>Failed to load due to Pages data Fetching error!</div>;

  return (
    <section className="hidden lg:block z-[9] relative">
      <ul className="flex gap-32 justify-between items-center">
        {pageApi.data &&
          pageApi.data.map((page: Page) => (
            <li className="relative" key={page._id}>
              <Link
                href={page.link}
                className={cn(
                  "h-full duration-300 after:absolute after:w-0 after:h-1 after:bg-primary-700 after:top-[24px] after:left-0 after:duration-100 after:ease-linear  capitalize hover:after:w-full",
                  pathname === page.link && "border-b-4 border-primary-400"
                )}
              >
                {page.name}
              </Link>
            </li>
          ))}
        {/* categories */}
        <li className="group">
          <button
            className="capitalize inline-flex items-center"
            onClick={() => setShow(!show)}
          >
            categories
            <ChevronDown size={20} className="mt-1" />
          </button>
          <AnimatePresence>
            {show && (
              <m.div
                initial={{ opacity: 0, y: -15 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: { duration: 0.7, type: "spring" },
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                  filter: "blur(5px)",
                  transition: { duration: 0.22, ease: "easeIn" },
                }}
                className="grid grid-cols-4 justify-items-center auto-rows-auto absolute top-[54px] right-0 gap-12 bg-white p-4 shadow-neutral-500 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] h-[660px] w-[1100px] z-[9999]"
              >
                {data &&
                  data.slice(0, 8).map((item: Category) => (
                    <ul key={item._id} className="flex flex-col gap-4 text-xl p-2">
                      <li>
                        <Link
                          href={`/categories/${item.link}/products`}
                          className="capitalize font-bold group/item w-full transitions-all flex items-center gap-2 duration-100 ease-linear hover:translate-x-1"
                        >
                          <h5 className="transitions ease-in-out hover:text-primary-500">
                          {item.name}
                          </h5>
                        </Link>
                      </li>
                      {
                        item.submenu && item.submenu.length > 0 && item.submenu.map((subCat: SubCategory, idx:number) => (
                          <li key={idx} className="font-normal duration-300 hover:translate-x-1 capitalize">
                            <Link
                              href={`/categories/${subCat.link}/products`}
                              className="hover:text-primary-500"
                            >
                               {subCat.name}
                            </Link>
                          </li>
                          
                        ))
                      }
                    </ul>
                  ))}
              </m.div>
            )}
          </AnimatePresence>
        </li>
      </ul>
    </section>
  );
}
