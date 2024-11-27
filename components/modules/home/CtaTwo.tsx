"use client";
import React from "react";

import useSWR, { Fetcher } from "swr";
import { Slide } from "@/types";
import { m } from "framer-motion";
export default function CtaTwo() {
  // client side data fethcing
  const fetcher: Fetcher<Slide[], string> = (...args) =>
    fetch(...args)
      .then((res) => res.json())
      .then((data) => data.data);

  const { data } = useSWR<Slide[]>(
    process.env.NEXT_PUBLIC_API_URL + "/api/slides",
    fetcher
  );
  

  return (
    <m.section
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4, type: "tween", delay: 0.2 }}
      className="my-10 hover:cursor-pointer"
    >
      <div
        className="flex w-full"
        style={{
          backgroundImage: `url(${
            data?.filter((item: Slide) => item.slug === "cta-home-two")[0].image
          })`,
          height: "400px",
          width: "auto",
          backgroundPosition: "top",
          backgroundRepeat: "repeat",
          backgroundSize: "contain",
        }}
      ></div>
    </m.section>
  );
}
