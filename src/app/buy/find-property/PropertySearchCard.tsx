/* eslint-disable @next/next/no-img-element */
import { Button } from "@nextui-org/react";
import { LoaderIcon, MapPin } from "lucide-react";
import Link from "next/link";
import React from "react";

const PropertySearchCard = ({ data }: { data: any }) => {
  return (
    <div className="w-full md:w-[80vw] bg-[#F9FAFB]  md:flex rounded p-[24px]">
      <div className="">
        <img
          className="h-full rounded w-[252px] object-fill"
          src={data?.images[0]}
          alt=""
        />
      </div>
      <div className="  space-y-3 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div>
          <div className="flex justify-start gap-8">
            <h2 className="text-lg font-semibold">
              {data?.title} for Sale in {data?.location}
            </h2>
            <h1 className="text-2xl text-nowrap font-bold">$ {data?.price}k</h1>
          </div>
          <div className="flex items-center my-1 justify-between">
            <p className="text-slate-400 mt-1 flex items-center gap-2">
              <MapPin className="size-4 text-orange-500" />{" "}
              {"Meadowshire Park, Greenfield, USA"}
            </p>
            <Link href={`/buy/${data?._id}`}>
              <Button
                className="border-black rounded border"
                radius="none"
                variant="bordered"
              >
                Bid Property
              </Button>
            </Link>
          </div>
          <div className="flex gap-4 items-center">
            <h1 className=" text-nowrap">Property Details</h1>
            <span className="block h-[2px] w-full bg-slate-200"></span>
          </div>
          <div
            className="grid grid-cols-3 my-2
           space-y-3 w-full  items-center"
          >
            <div className="flex gap-3 w-full">
              <div className="bg-orange-500 p-1 flex items-center">
                <LoaderIcon className="text-white" />
              </div>
              <div>
                <h1 className="font-bold"> Total Area</h1>
                <p>{data?.total_area}</p>
              </div>
            </div>
            <div className="flex gap-3 w-full">
              <div className="bg-orange-500 p-1 flex items-center ">
                <LoaderIcon className="text-white" />
              </div>
              <div>
                <h1 className="font-bold"> Status</h1>
                <p className="text-nowrap">{data?.status}</p>
              </div>
            </div>
            <div className="flex gap-3 w-full">
              <div className="bg-orange-500 p-1 flex items-center">
                <LoaderIcon className="text-white" />
              </div>
              <div>
                <h1 className="font-bold"> Bid Deadline</h1>
                <p className="text-nowrap">
                  {new Date(data?.bid_deadline).toISOString().split("T")[0]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertySearchCard;
