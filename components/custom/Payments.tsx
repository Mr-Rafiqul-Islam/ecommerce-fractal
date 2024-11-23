'use client'
import Container from '@/components/custom/Container'
import React from 'react'
// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,Autoplay } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import useSWR, { Fetcher } from 'swr';
import { Slide } from '@/types';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import './style.css'
import { Headset } from 'lucide-react';

export default function Payments() {
  return (
    <section className='py-10'>
        <Container>
            <Swiper
            breakpoints={{
                360: {
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
                modules={[Navigation, Pagination,Autoplay]}
                className='shadow-xl w-full flex items-center justify-center border border-gray-200 rounded-md px-20 py-10'
            >
                <SwiperSlide className='relative py-10'>
                    <div className='flex items-center gap-4 lg:after:h-10 lg:after:w-[2px] after:translate-x-0 after:bg-neutral-200'>
                        <Headset className='h-6 w-6 text-primary-900' />
                        <div className="flex flex-col gap-4">
                            <h6 className='uppercase'>24/7</h6>
                            <span className='text-sm'> Support every time</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative py-10'>
                    <div className='flex items-center gap-4 lg:after:h-10 lg:after:w-[2px] after:translate-x-0 after:bg-neutral-200'>
                        <Headset className='h-6 w-6 text-primary-900' />
                        <div className="flex flex-col gap-4">
                            <h6 className='uppercase'>accept payment</h6>
                            <span className='text-sm'> visa, paypal, mastercard</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative py-10'>
                    <div className='flex items-center gap-4 lg:after:h-10 lg:after:w-[2px] after:translate-x-0 after:bg-neutral-200'>
                        <Headset className='h-6 w-6 text-primary-900' />
                        <div className="flex flex-col gap-4">
                            <h6 className='uppercase'>secured payment</h6>
                            <span className='text-sm'> 100% secured</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative py-10'>
                    <div className='flex items-center gap-4 lg:after:h-10 lg:after:w-[2px] after:translate-x-0 after:bg-neutral-200'>
                        <Headset className='h-6 w-6 text-primary-900' />
                        <div className="flex flex-col gap-4">
                            <h6 className='uppercase'>free shipping</h6>
                            <span className='text-sm'> order over $300</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative py-10'>
                    <div className='flex items-center gap-4 lg:after:h-10 lg:after:w-[2px] after:translate-x-0 after:bg-neutral-200'>
                        <Headset className='h-6 w-6 text-primary-900' />
                        <div className="flex flex-col gap-4">
                            <h6 className='uppercase'>30 days return</h6>
                            <span className='text-sm'> 30 days guarantee</span>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </Container>
    </section>
  )
}
