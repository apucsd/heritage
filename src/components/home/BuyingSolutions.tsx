/* eslint-disable @next/next/no-img-element */
import React from "react";
import VideoIcon from "../ui/VideoIcon";
import { Button } from "../ui/button";
import { Search } from "lucide-react";

const properties = [
  {
    id: 1,
    image1:
      "https://asset-a.grid.id/crop/0x0:0x0/750x500/photo/2020/03/02/1470776390.jpg",
    image2:
      "https://avatars.mds.yandex.net/i?id=e93387c788c491b9464db4c4b596ef5f_l-5850342-images-thumbs&ref=rim&n=13&w=640&h=640",
    title: "Efficient and Transparent Home Buying Solutions",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    link: "#",
  },
  {
    id: 2,
    image1:
      "https://img.alicdn.com/imgextra/i3/6000000006791/O1CN01SIypLt202KDRWcBj2_!!6000000006791-0-tbvideo.jpg",
    image2:
      "https://avatars.mds.yandex.net/i?id=659462e23df7a4a2c5890d97af574925ff9dadb0-6945470-images-thumbs&n=13",
    title: "Efficient and Transparent Home Buying Solutions",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    link: "#",
  },
  {
    id: 3,
    image1:
      "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/113341923.jpg?k=19dc8438e5dba5060428a74c19770b6d520f08de2fd4a9ced309a5dc029d959b&o=",
    image2:
      "https://avatars.mds.yandex.net/i?id=a517731a8655f7e1a5ba1e07ed644c46271c7603-9066494-images-thumbs&n=13",
    title: "Efficient and Transparent Home Buying Solutions",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    link: "#",
  },
];

const PropertySolutions = () => {
  return (
    <div className="container px-10 mx-auto py-12 my-10">
      <div className="mx-10 space-y-[200px]">
        {properties.map((property) => (
          <div
            key={property.id}
            className={`flex ${
              property.id % 2 !== 0 ? "flex-row" : "flex-row-reverse"
            } gap-4 h-full justify-between items-start`}
          >
            <div className="relative w-full">
              <img
                className="w-[458px] rounded-[8px] h-[400px] object-cover"
                src={property.image1}
                alt={`Property ${property.id}`}
              />
              <img
                className={`absolute  left-[104px] ${
                  property.id % 2 !== 0
                    ? "top-[264px]"
                    : "-top-[100px] left-[104px]"
                } shadow-lg rounded-[8px] w-[452px] h-[240px] object-cover`}
                src={property.image2}
                alt={`Property ${property.id}`}
              />
              <div
                className={`absolute ${
                  property.id % 2 !== 0
                    ? " top-[228px] left-[422px]"
                    : "-top-[45px] left-[68px]"
                }`}
              >
                <VideoIcon />
              </div>
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-xl flex items-center gap-5 text-[#F06711] font-semibold mb-4">
                <span className="block h-2 w-20 bg-[#F06711]"></span>Property
                buying
              </h3>
              <h3 className="text-2xl font-semibold mb-4">{property.title}</h3>
              <p className="text-gray-600 mb-4">{property.description}</p>
              <Button className="bg-[#ECF5FF] gap-4 text-blue-500 hover:bg-primary/10">
                <Search className="w-6" /> Find Property
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertySolutions;
