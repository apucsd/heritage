"use client";
import Slider from "./Slider";
import { useGetAllPropertyQuery } from "@/redux/api/propertyApi";

const PopularProperties = () => {
  const { data, isFetching } = useGetAllPropertyQuery({});
  if (isFetching) {
    return <p>Loading...</p>;
  }

  return (
    <div className="my-10 px-20 ">
      <Slider data={data} />
    </div>
  );
};

export default PopularProperties;
