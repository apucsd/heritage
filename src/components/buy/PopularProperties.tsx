"use client";
import Loading from "../../loader/Loading";
import Slider from "./Slider";
import { useGetAllPropertyQuery } from "@/redux/api/propertyApi";

const PopularProperties = () => {
  const { data, isFetching } = useGetAllPropertyQuery({});
  if (isFetching) {
    return <Loading />;
  }

  return (
    <div className="my-10 px-20 ">
      <Slider data={data} />
    </div>
  );
};

export default PopularProperties;
