import { Home, HomeIcon } from "lucide-react";
import React from "react";

function OtherServices() {
  return (
    <div className="container my-20  px-2 md:px-20 py-10">
      <h1 className="text-4xl font-bold text-center my-12">Other Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center  gap-5 ">
        <div className="flex  gap-2 w-full min-h-[200px]  bg-[#ECF5FF] p-5">
          <div className="bg-[#EE6611] flex-grow size-[50px] px-3 rounded-[4px]">
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
        <div className="flex  gap-2 w-full min-h-[200px]  bg-[#ECF5FF] p-5">
          <div className="bg-[#EE6611] flex-grow size-[50px] px-3 rounded-[4px]">
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
        <div className="flex  gap-2 w-full min-h-[200px]  bg-[#ECF5FF] p-5">
          <div className="bg-[#EE6611] flex-grow size-[50px] px-3 rounded-[4px]">
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
