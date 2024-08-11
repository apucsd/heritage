"use client";
import { ChevronLeft, ChevronRight, MoveLeft, MoveRight } from "lucide-react";
import { useSwiper } from "swiper/react";
const SlideButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flex text-primary  justify-end gap-2 items-center">
      {/* <Minus /> */}
      <div
        className="p-3 hover:cursor-pointer bg-primary text-white rounded-full"
        onClick={() => swiper.slideNext()}
      >
        <ChevronRight />
      </div>
    </div>
  );
};

export default SlideButton;
