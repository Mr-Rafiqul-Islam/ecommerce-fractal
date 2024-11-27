"use client";
import Container from "@/components/custom/Container";
import React from "react";
// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useSWR, { Fetcher } from "swr";
import { Slide } from "@/types";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {m} from "framer-motion"
import "./style.css";

export default function HomeSlide() {
  const animation = {
    hide: {
      opacity: 0,
      x: 82,
    },
    show: {
      opacity: 1,
      x: 0,
    },
  };
  // client side data fethcing
  const fetcher: Fetcher<Slide[], string> = (...args) =>
    fetch(...args)
      .then((res) => res.json())
      .then((data) => data.data);

  const { data, error } = useSWR<Slide[]>(
    process.env.NEXT_PUBLIC_API_URL + "/api/slides",
    fetcher
  );
  if (error)
    return <div>Failed to load due to Slides data Fetching error!</div>;
  return (
    <section>
      <Container>
        <Swiper
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          spaceBetween={50}
          slidesPerView={1}
          navigation={true}
          pagination={true}
          modules={[Navigation, Pagination, Autoplay]}
        >
          {data &&
            data
              .filter((item: Slide) => item.slug === "banner-home")
              .map((item: Slide) => (
                <SwiperSlide
                  key={item._id}
                  className="relative [&>button]:block hover:animate-heart-beating"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    height: "700px",
                    width: "100%",
                    backgroundPosition: "top",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  {item?.title !== "" ? (
                    <div className="absolute drop-shadow-2xl grid grid-cols-1 place-content-start justify-items-center lg:justify-items-start gap-4 capitalize m-auto top-100 lg:top-30 lg:left-20 w-fit text-white">
                      <m.h4 
                      initial={animation.hide}
                      whileInView={animation.show}
                      transition={{delay:0.4}}
                      className="max-w-60 lg:max-w-screen-md text-2xl ">
                        {item.subtitle.substring(0, 65)}
                      </m.h4>
                      <m.h1 initial={animation.hide}
                      whileInView={animation.show}
                      transition={{delay:0.6}} className="text-2xl lg:text-h1">
                        {item.title.substring(0, 65)}
                      </m.h1>
                      <m.h6 initial={animation.hide}
                      whileInView={animation.show}
                      transition={{delay:1}} className="font-normal">{item.description}</m.h6>
                      <m.a
                      initial={animation.hide}
                      whileInView={animation.show}
                      transition={{delay:1.2,type:"spring"}}
                        className="p-4 rounded-sm bg-white text-black hover:text-white hover:bg-black "
                        href={item.link}
                      >
                        {item.btn}
                      </m.a>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Button
                        variant={"default"}
                        size={"lg"}
                        className="px-12 py-8 bg-white text-black hover:text-white"
                      >
                        <Link className="text-xl" href={item.link}>BUY NOW</Link>
                      </Button>
                    </div>
                  )}
                </SwiperSlide>
              ))}
        </Swiper>
      </Container>
    </section>
  );
}
