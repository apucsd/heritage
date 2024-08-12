"use client";
import { useUpdateBidMutation } from "@/redux/api/propertyApi";
import { Button, Slider } from "@nextui-org/react";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

const BidProperty = ({ data }: { data: any }) => {
  const [rangeValue, setRangeValue] = useState<number[]>([0, 0]);

  useEffect(() => {
    if (data.current_bid) {
      const minBid = data?.current_bid;
      const maxBid = minBid * 1.1; // Assuming max bid is 10% above the starting bid
      setRangeValue([minBid, maxBid]);
    }
  }, [data.current_bid]);

  const [updateBid] = useUpdateBidMutation();

  const handleUpdateBid = async () => {
    const updateBidInfo = {
      id: data._id,
      data: {
        bid_amount: rangeValue[1] - rangeValue[0] + data?.current_bid,
        bidder_id: "00",
        name: "apucsd",
        email: "apu@gmail.com",
        phone: "01222222222",
      },
    };

    try {
      const res = await updateBid(updateBidInfo).unwrap();
      // console.log(res);
      if (res.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your bid is successful",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full mt-[70px] bg-[#ECF3FE] p-4 rounded-lg">
      <div className="mb-2 text-sm text-gray-700 font-medium">
        Property Value
      </div>
      <div className="mb-4 text-[28px] font-bold text-gray-900">
        $ {rangeValue ? rangeValue[0].toFixed(2) : 0} - ${" "}
        {rangeValue ? rangeValue[1].toFixed(2) : 0}
      </div>
      <div className="mb-4 text-sm text-gray-600">
        Your bid can not be more than 10% above the starting bid.
      </div>
      <div className="mb-2 text-sm text-gray-700 font-medium">Min</div>
      <input
        type="text"
        value={`$${rangeValue ? rangeValue[0].toFixed(2) : 0}`}
        className="w-full mb-4 p-2 text-gray-900 text-lg bg-white border border-gray-300 rounded-md"
        readOnly
      />
      <div className="mb-2 text-sm text-gray-700 font-medium">Max</div>
      <input
        type="text"
        value={`$${rangeValue ? rangeValue[1].toFixed(2) : 0}`}
        className="w-full mb-4 p-2 text-gray-900 text-lg bg-white border border-gray-300 rounded-md"
        readOnly
      />
      <div className="flex items-center justify-between mb-6">
        <Slider
          onChange={(value) => {
            if (value) {
              setRangeValue(value as any);
            }
          }}
          step={10} // Adjust step as needed
          color="secondary"
          minValue={data?.starting_bid}
          maxValue={data?.starting_bid * 1.1} // Example maximum bid, adjust if needed
          defaultValue={[data?.starting_bid, data?.starting_bid * 1.1]}
          formatOptions={{ style: "currency", currency: "USD" }}
          className="max-w-md"
        />
      </div>
      <Button onClick={handleUpdateBid} className="w-full" color="primary">
        Bid Property
      </Button>
    </div>
  );
};

export default BidProperty;
