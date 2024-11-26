"use client";
import React from "react";
import Container from "@/components/custom/Container";
import useSWR, { Fetcher } from "swr";
import { Slide } from "@/types";
import { m } from "framer-motion";
import { useRouter } from "next/navigation";
import Countdown from "react-countdown";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function CtaOne() {
  // client side data fethcing
  const fetcher: Fetcher<Slide[], string> = (...args) =>
    fetch(...args)
      .then((res) => res.json())
      .then((data) => data.data);

  const { data, error, isLoading } = useSWR<Slide[]>(
    process.env.NEXT_PUBLIC_API_URL + "/api/slides",
    fetcher
  );
  const slide = data?.filter((item: Slide) => item.slug === "cta-home")[0];
  const router = useRouter();
  return (
    <section className="my-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
          <m.div
            initial={{
              x: -100,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.3, type:"tween",
            }}
          className="flex flex-col items-center gap-12">
            <h3 className="inline-flex capitalize">{slide?.title}</h3>
            <p className="text-center">{slide?.subtitle}</p>
            <Countdown date={Date.now() + 1000000} className="text-2xl" />
            <Button
              variant={"default"}
              size={"lg"}
              className="uppercase text-xl py-8 px-6"
              onClick={() => router.push(slide?.link ? slide?.link : "")}
            >
              {slide?.btn}
            </Button>
          </m.div>
          <m.div
            initial={{
              x: 400,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              type: "tween",
              delay: 0.5,
            }}
            className="flex justify-end"
          >
            <Image
              src={slide?.image ? slide.image : ""}
              alt="cta"
              width={800}
              height={800}
            />
          </m.div>
        </div>
      </Container>
    </section>
  );
}
