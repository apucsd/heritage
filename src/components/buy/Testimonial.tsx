import React from "react";
import TestimonialSlider from "./TestimonialSlider";

const Testimonial = () => {
  return (
    <div className="my-10 mx-20 ">
      <h1 className="text-2xl my-10 md:text-4xl text-center font-semibold text-nowrap">
        Testimonials
      </h1>

      <TestimonialSlider />
    </div>
  );
};

export default Testimonial;
