import { SearchIcon } from "lucide-react";
import React from "react";
import FindCard from "./FindCard";

const BuyListing = () => {
  return (
    <div>
      <div className="relative">
        <img
          className="w-full h-[409px] object-center"
          src="https://img.freepik.com/free-photo/large-sunny-room-with-wide-views-peaceful-feel_157027-4459.jpg?t=st=1723376593~exp=1723380193~hmac=06edc149db42c4f8638d206662eb4b861a7bd04b365b6a802fd8eaf3b4e72a29&w=1060"
          alt="img"
        />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[990px] h-[400px] p-4 rounded-[4px] bg-white">
          <FindCard />
        </div>
      </div>
    </div>
  );
};

export default BuyListing;
