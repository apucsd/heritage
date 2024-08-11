import { Home, HomeIcon } from "lucide-react";
import React from "react";

function OtherServices() {
  return (
    <div className="container my-20  px-4 py-10">
      <h1 className="text-4xl font-bold text-center my-12">Other Services</h1>
      <div className="flex justify-center gap-5 ">
        <div className="grid grid-cols-12 gap-2 w-[384px] h-[200px] bg-[#ECF5FF] p-5">
          <div className="bg-[#EE6611] col-span-2 size-[50px] rounded-[4px]">
            <Home className="m-auto h-full text-white" />
          </div>
          <div className="space-y-2 col-span-10">
            <h1 className="font-semibold text-2xl">Advanced Property Search</h1>
            <p>
              Effortlessly find your dream property with advanced search
              filters.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-2 w-[384px] h-[200px] bg-[#ECF5FF] p-5">
          <div className="bg-[#EE6611] col-span-2 size-[50px] rounded-[4px]">
            <Home className="m-auto h-full text-white" />
          </div>
          <div className="space-y-2 col-span-10">
            <h1 className="font-semibold text-2xl">
              Virtual Tours and Multimedia
            </h1>
            <p>
              Effortlessly find your dream property with advanced search
              filters.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-2 w-[384px] h-[200px] bg-[#ECF5FF] p-5">
          <div className="bg-[#EE6611] col-span-2 size-[50px] rounded-[4px]">
            <Home className="m-auto h-full text-white" />
          </div>
          <div className="space-y-2 col-span-10">
            <h1 className="font-semibold text-2xl">
              Secure Online Transactions
            </h1>
            <p>
              Effortlessly find your dream property with advanced search
              filters.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtherServices;
