/* eslint-disable @next/next/no-img-element */
import { Property } from "@/types";
import { ImageIcon, MapPin } from "lucide-react";
import Link from "next/link";
import React from "react";

const PropertyCard = ({ data }: { data: Property }) => {
  if (!data) return null;
  return (
    <Link
      href={`/buy/${data._id}`}
      className=" bg-[#F9FAFB] mx-auto  shadow-lg hover:shadow-xl"
    >
      <div className="relative flex items-end overflow-hidden ">
        <img
          className="w-full h-[200px]"
          src={data?.images[0]}
          alt="Hotel Photo"
        />
        <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
          <ImageIcon className="size-5 text-orange-400" />
          <span className="font-bold ml-2">{data?.images?.length}</span>
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-center my-3">
          <div className="bg-[#C5E2FF] p-1 rounded">
            <h1>Apartment</h1>
          </div>
          <div className="flex items-center gap-2">
            <span className="block size-2 bg-orange-500"></span>
            <p>Ready To Move</p>
          </div>
        </div>
        <div className="my-3">
          <h2 className="font-semibold text-xl">{data.title}</h2>
          <p className="text-slate-400 mt-1 flex items-center gap-2">
            <MapPin className="size-4 text-orange-500" /> {data.location}
          </p>

          <p className="font-semibold text-xl">$ {data.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
