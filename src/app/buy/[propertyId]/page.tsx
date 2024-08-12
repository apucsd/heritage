"use client";
/* eslint-disable @next/next/no-img-element */
import PopularProperties from "@/components/buy/PopularProperties";
import OtherServices from "@/components/home/OtherServices";
import { useGetSinglePropertyQuery } from "@/redux/api/propertyApi";
import { BathIcon, BedIcon, Boxes, Building, MapPin } from "lucide-react";
import React from "react";
import BidProperty from "./BidProperty";
import Map from "./Map";
import Amentites from "./Amentites";

const PropertyDetails = ({ params }: { params: { propertyId: string } }) => {
  const id = params.propertyId;
  const { data, isFetching } = useGetSinglePropertyQuery(id);
  if (isFetching && !data) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <div className="px-20 my-2 grid grid-cols-12 gap-4">
        <div className="col-span-8">
          <div className="flex justify-start gap-8">
            <h2 className="text-lg font-semibold">
              {data?.title} for Sale in {data?.location}
            </h2>
            <h1 className="text-2xl font-bold">$ {data?.starting_bid}k</h1>
          </div>
          <p className="text-slate-400 mt-1 flex items-center gap-2">
            <MapPin className="size-4 text-orange-500" /> {data?.location}
          </p>

          <div className="my-3 rounded">
            <img
              className="w-full h-[400px] rounded  object-cover"
              src={data?.images[0]}
              alt="img"
            />
          </div>

          <div className="my-3 grid grid-cols-3 gap-3 ">
            {data?.images.map((img: string, id: string) => (
              <img
                key={id}
                className="w-fit h-[160px] rounded "
                src={img}
                alt="img"
              />
            ))}
          </div>

          {/* overview */}
          <div className="p-5 space-y-3 bg-[#F9FAFB]">
            <h1 className="text-4xl font-semibold">Overview</h1>
            <div className="bg-white grid grid-cols-4 p-3 shadow-lg">
              <div className="flex items-center gap-2">
                <BedIcon className="size-5" />
                <p>{data?.bedrooms ? data.bedrooms : 0} Beds</p>
              </div>
              <div className="flex items-center gap-2">
                <BathIcon className="size-5" />
                <p>{data?.bathrooms ? data.bathrooms : 0} Bath</p>
              </div>
              <div className="flex items-center gap-2">
                <Building className="size-5" />
                <p>{data?.balcony ? data?.balcony : 0} Balcony</p>
              </div>
              <div className="flex items-center gap-2">
                <Boxes className="size-5" />
                <p>{data?.floors ? data?.floors : 0} Fully Furnished</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 p-4">
            <div>
              <p className="text-[#5C5C5C]">Carpet Area</p>
              <h3>{data?.total_area ? data.total_area : 100}</h3>
              <p className="text-[#5C5C5C]">#$ 225/sqft</p>
            </div>
            <div>
              <p className="text-[#5C5C5C]">Floor</p>
              <h3>{data?.total_area ? data.total_area : 100}</h3>
              <p className="text-[#5C5C5C]">2nd Floor</p>
            </div>
            <div>
              <p className="text-[#5C5C5C]">Transaction Type</p>
              <h3>{200} sqrt</h3>
              <p className="text-[#5C5C5C]">Transaction Type</p>
            </div>
          </div>
          <div className="grid grid-cols-3 p-4">
            <div>
              <p className="text-[#5C5C5C]">Facing Area</p>
              <h3>{200} sqrt</h3>
              <p className="text-[#5C5C5C]">#$ 225/sqft</p>
            </div>
            <div>
              <p className="text-[#5C5C5C]">Additional Rooms</p>
              <h3>{200} sqrt</h3>
              <p className="text-[#5C5C5C]">2nd Floor</p>
            </div>
            <div>
              <p className="text-[#5C5C5C]">Age of construction</p>
              <h3>{200} sqrt</h3>
              <p className="text-[#5C5C5C]">New Construction</p>
            </div>
          </div>
        </div>

        <div className="col-span-4  min-h-screen">
          <BidProperty data={data} />
          <div className="my-2">
            <h3>
              Current Bid: {data?.current_bid ? data?.current_bid : data.price}k
            </h3>
          </div>
          <Map />
        </div>
      </div>
      <Amentites data={data} />
      <OtherServices />
      <PopularProperties />
    </>
  );
};

export default PropertyDetails;
