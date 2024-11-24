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

export default function Categories() {
  // client side data fethcing
  const fetcher: Fetcher<Slide[], string> = (...args) =>
    fetch(...args)
      .then((res) => res.json())
      .then((data) => data.data);

  const { data, error, isLoading } = useSWR<Slide[]>(
    process.env.NEXT_PUBLIC_API_URL + "/api/slides",
    fetcher
  );
  return (
    <section className="py-10 w-full">
      <Container>
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            575: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
          }}
          spaceBetween={50}
          slidesPerView={5}
          navigation={false}
          pagination={true}
          modules={[Navigation, Pagination, Autoplay]}
          className="shadow-xl w-full flex items-center justify-center border border-gray-200 rounded-md px-20 py-10"
        >
          { data && data.filter((item: Slide) => item.slug === "top-categories-home").map((item: Slide) => (
            <SwiperSlide key={item._id}
            className="relative [&>button]:block hover:scale-105 duration-300 ease-linear cursor-pointer"
            style={{
              backgroundImage:`url(${item.image})`,
              height:"600px",
              width: "auto",
              backgroundPosition: "top",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            >
              {
                item.title !==""?(
                  <div>
                    <h6>{item.title}</h6>
                  </div>
                ):(
                  <div>
                    <Button>
                      view details
                    </Button>
                  </div>
                )
              }
            </SwiperSlide>
          ))

          }
        </Swiper>
      </Container>
    </section>
  );
}
