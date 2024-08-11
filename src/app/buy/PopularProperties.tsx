"use client";

import { Button } from "@nextui-org/react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import PropertyCard from "@/components/ui/PropertyCard";

const PopularProperties = () => {
  const newBooks = [
    { _id: 1, title: "Book 1" },
    { _id: 2, title: "Book 2" },
    { _id: 3, title: "Book 3" },
    { _id: 4, title: "Book 4" },
    { _id: 5, title: "Book 5" },
  ]; // Added _id and title for illustration

  return (
    <div className="my-10 mx-20">
      <div className="flex justify-between gap-1 items-center my-5">
        <h1 className="text-2xl md:text-4xl font-semibold  my-3 text-nowrap">
          Popular Properties
        </h1>

        <Link className="text-primary underline" href="/buy">
          See all property
        </Link>
      </div>
      <Swiper
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
        {newBooks.map((item: any) => (
          <SwiperSlide className="" key={item._id}>
            <PropertyCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularProperties;
