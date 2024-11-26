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
import { m } from "framer-motion";
import { useRouter } from "next/navigation";
import Row from "@/components/custom/Row";
import Heading from "@/components/custom/Heading";

export default function Categories() {

  const animation ={
    hide:{scale:0, opacity:0},
    show:{scale:1, opacity:1},
  }


  // client side data fethcing
  const fetcher: Fetcher<Slide[], string> = (...args) =>
    fetch(...args)
      .then((res) => res.json())
      .then((data) => data.data);

  const { data, error, isLoading } = useSWR<Slide[]>(
    process.env.NEXT_PUBLIC_API_URL + "/api/slides",
    fetcher
  );
  const router = useRouter();
  const handleClick =(link: string) =>{
    router.push(link);
  };
  return (
    <section className="py-10 w-full">
      <Container>
        <Row className="mb-10">
          <Heading name="Shop By Top Categories"/>
        </Row>
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
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          spaceBetween={50}
          slidesPerView={5}
          navigation={false}
          pagination={true}
          modules={[Navigation, Pagination, Autoplay]}
          className=""
        >
          { data && data.filter((item: Slide) => item.slug === "top-categories-home").map((item: Slide,idx:number) => (
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
                  <div className="absolute bg-white p-4 rounded-md bottom-10 shadow-xl cursor-pointer hover:text-white hover:bg-black duration-300 ease-linear capitalize drop-shadow-xl"
                  onClick={() => handleClick(item.link)}
                  >
                    <m.h6
                    initial={animation.hide}
                    whileInView={animation.show}
                    transition={{delay:0.1+ idx/6}}
                    >{item.title}</m.h6>
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
