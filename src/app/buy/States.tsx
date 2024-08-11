import { Button } from "@nextui-org/react";
import { ArrowDownCircleIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
Button;

const States = () => {
  return (
    <section className="mt-32 mb-10 mx-20">
      <div className="grid grid-cols-4 gap-5">
        <div className="bg-[#FDF0E7] space-y-3 relative mb-3 p-5">
          <p className="relative text-3xl font-black text-orange-500 sm:text-5xl">
            2K+
          </p>
          <p>New Flat Listed</p>
          <div className="flex justify-between">
            <Link className="text-orange-500 underline" href="/buy">
              View all
            </Link>
            <div>
              <ArrowDownCircleIcon className="size-6 text-orange-500" />
            </div>
          </div>
        </div>
        <div className="bg-[#ECF5FF] space-y-3 relative mb-3 p-5">
          <p className="relative text-3xl font-black text-blue-500 sm:text-5xl">
            2K+
          </p>
          <p>New Flat Listed</p>
          <div className="flex justify-between">
            <Link className="text-blue-500 underline" href="/buy">
              View all
            </Link>
            <div>
              <ArrowDownCircleIcon className="size-6 text-blue-500" />
            </div>
          </div>
        </div>
        <div className="bg-[#FDF0E7] space-y-3 relative mb-3 p-5">
          <p className="relative text-3xl font-black text-orange-500 sm:text-5xl">
            2K+
          </p>
          <p>New Flat Listed</p>
          <div className="flex justify-between">
            <Link className="text-orange-500 underline" href="/buy">
              View all
            </Link>
            <div>
              <ArrowDownCircleIcon className="size-6 text-orange-500" />
            </div>
          </div>
        </div>
        <div className="bg-[#ECF5FF] space-y-3 relative mb-3 p-5">
          <p className="relative text-3xl font-black text-blue-500 sm:text-5xl">
            2K+
          </p>
          <p>New Flat Listed</p>
          <div className="flex justify-between">
            <Link className="text-blue-500 underline" href="/buy">
              View all
            </Link>
            <div>
              <ArrowDownCircleIcon className="size-6 text-blue-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default States;
