"use client";
import React, { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import PropertyCard from "@/components/ui/PropertyCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Slider = ({ data }: { data: any }) => {
  const swiperRef = useRef<any>(null);
  return (
    <div className="relative">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          400: {
            slidesPerView: 2,
          },
          639: {
            slidesPerView: 2,
          },
          865: {
            slidesPerView: 3,
          },
          1000: {
            slidesPerView: 3,
          },
        }}
        autoplay={true}
        loop={true}
        autoHeight={true}
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        className="mySwiper w-full"
      >
        {data.map((item: any) => (
          <SwiperSlide className="" key={item._id}>
            <PropertyCard />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className="absolute top-1/2 -translate-y-1/2 -left-6 z-[99999] p-3 hover:cursor-pointer bg-primary text-white rounded-full"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <ChevronLeft />
      </div>
      <div
        className="absolute top-1/2 -translate-y-1/2 -right-6 z-[99999] p-3 hover:cursor-pointer bg-primary text-white rounded-full"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <ChevronRight />
      </div>
    </div>
  );
};

export default Slider;
