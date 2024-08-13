import { CoinsIcon } from "lucide-react";
import React from "react";

const Amentites = ({ data }: { data: any }) => {
  return (
    <div className="p-5 space-y-3 -mb-5 px-2 md:px-20">
      <h1 className="text-4xl font-semibold">Amenities</h1>
      <div className=" grid grid-cols-1 md:grid-cols-4 p-3 shadow-lg">
        {data?.amenities?.map((item: string) => (
          <div key={item} className="flex items-center gap-2">
            <CoinsIcon className="size-5" />
            <p> {item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amentites;
