import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import PropertyCard from "../ui/PropertyCard";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import TestimonialCard from "./TestimonialCard";
const TestimonialSlider = () => {
  const data = [1, 2, 4, 5];
  return (
    <div>
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          400: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 2,
          },
        }}
        autoplay={true}
        loop={true}
        modules={[Autoplay, Pagination]}
        pagination={true}
        spaceBetween={30}
        className="mySwiper w-full"
      >
        {data.map((item: any) => (
          <SwiperSlide className="" key={item._id}>
            <TestimonialCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
