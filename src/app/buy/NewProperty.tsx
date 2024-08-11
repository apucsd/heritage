"use client";
import Link from "next/link";

import Slider from "./Slider";

const NewProperty = () => {
  const slideData = [
    { _id: 1, title: "Book 1" },
    { _id: 2, title: "Book 2" },
    { _id: 3, title: "Book 3" },
    { _id: 4, title: "Book 4" },
    { _id: 5, title: "Book 5" },
  ];

  return (
    <div className="my-10 mx-20 ">
      <div className="flex justify-between gap-1 items-center my-5">
        <h1 className="text-2xl md:text-4xl font-semibold  my-3 text-nowrap">
          New Listed Properties
        </h1>

        <Link className="text-primary underline" href="/buy">
          See all property
        </Link>
      </div>
      <Slider data={slideData} />
    </div>
  );
};

export default NewProperty;
