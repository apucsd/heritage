"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import FindCard from "./FindCard";
import States from "./States";

import PopularProperties from "./PopularProperties";

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
        {/*  */}
        <PopularProperties />
        {/*  */}
      </div>
    </div>
  );
};

export default BuyListing;
