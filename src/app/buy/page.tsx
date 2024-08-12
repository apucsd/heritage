"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import States from "../../components/buy/States";

import PopularProperties from "../../components/buy/PopularProperties";
import NewProperty from "../../components/buy/NewProperty";
import FindCard from "@/components/buy/FindCard";
import Testimonial from "@/components/buy/Testimonial";
import Link from "next/link";

const BuyListing = () => {
  return (
    <div className="w-full h-full">
      <div className="relative  ">
        <img
          className="w-full h-[409px] object-center"
          src="https://img.freepik.com/free-photo/large-sunny-room-with-wide-views-peaceful-feel_157027-4459.jpg?t=st=1723376593~exp=1723380193~hmac=06edc149db42c4f8638d206662eb4b861a7bd04b365b6a802fd8eaf3b4e72a29&w=1060"
          alt="img"
        />
        <div className="absolute z-10 shadow-2xl top-20 left-1/2 -translate-x-1/2 w-[990px] h-[400px] p-4 rounded-[4px] bg-white">
          <FindCard />
        </div>
        <States />

        <div className="flex justify-between gap-1 items-center my-5 mx-20">
          <h1 className="text-2xl md:text-4xl font-semibold  my-3 text-nowrap">
            Popular Properties
          </h1>

          <Link className="text-primary underline" href="/buy">
            See all property
          </Link>
        </div>
        <PopularProperties />

        <NewProperty />
        <Testimonial />
      </div>
    </div>
  );
};

export default BuyListing;
