import React from "react";

const TestimonialCard = () => {
  return (
    <div className="">
      <div className="flex justify-center space-x-1 mt-4">
        {[1, 2, 3, 4].map((item) => (
          <svg
            key={item}
            className="w-4 fill-[#FEC84B]"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
        ))}
      </div>

      <div className="mt-4">
        <p className="text-sm leading-relaxed text-gray-800">
          The service was amazing. I never had to wait that long for my food.
          The staff was friendly and attentive, and the delivery was
          impressively prompt.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <img
          src="https://readymadeui.com/team-2.webp"
          className="size-[48px] rounded-full shadow-xl border-2 border-white"
        />
        <div className="mt-4">
          <h4 className="text-sm font-extrabold text-gray-800">John Doe</h4>
          <p className="text-xs text-blue-600 font-bold mt-1">CEO, Company</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
