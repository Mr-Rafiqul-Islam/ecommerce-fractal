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
import { Product } from "@/types";
import { Button } from "@/components/ui/button";
import { m } from "framer-motion";
import { useRouter } from "next/navigation";
import ProductCard from "@/components/custom/ProductCard";
import Loading from "@/components/custom/Loading";
import Row from "@/components/custom/Row";
import Heading from "@/components/custom/Heading";

export default function FeaturesProducts() {


  // client side data fethcing
  const fetcher: Fetcher<Product[], string> = (...args) =>
    fetch(...args)
      .then((res) => res.json())
      .then((data) => data.data);

  const { data, error, isLoading } = useSWR<Product[]>(
    process.env.NEXT_PUBLIC_API_URL + "/api/products",
    fetcher
  );
  if(error) return <div>Failed to load due to Products data Fetching error!</div>;

  const router = useRouter();
  const handleClick =(link: string) =>{
    router.push(link);
  };
  return (
    <section className="py-10 w-full">
      {isLoading && <Loading isLoading={true} />}
      <Container>
      <Row className="mb-10">
          <Heading name="Featured Products"/>
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
          { data && data.filter((item: Product) => item.featured === true).map((item: Product) => (
            <SwiperSlide key={item._id}>
              <ProductCard item={item}/>
            </SwiperSlide>
          ))
    }
        </Swiper>
      </Container>
    </section>
  );
}
