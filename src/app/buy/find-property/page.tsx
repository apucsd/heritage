"use client";

import { useGetAllPropertyBySearchQueryQuery } from "@/redux/api/propertyApi";
import PropertySearchCard from "./PropertySearchCard";
import NotFoundProduct from "./NotFoundProduct";

interface PropertySearch {
  location?: string;
  propertyType?: string;
  budget?: string;
  searchField?: string;
}

const FindProperty = ({ searchParams }: { searchParams: PropertySearch }) => {
  const newSearchParams = Object.entries(searchParams)
    .filter(([key, value]) => value)
    .map(([key, value]) => ({ name: key, value }));
  const { data, isLoading } =
    useGetAllPropertyBySearchQueryQuery(newSearchParams);
  if (isLoading) return <p>Loading...</p>;
  console.log(data);
  return (
    <div className="px-20">
      <div>
        <hr />
        <h1 className="text-2xl font-semibold p-3">
          {data?.length} results for rental
        </h1>
      </div>

      {data.length > 0 ? (
        <div>
          {data?.map((property: any) => (
            <PropertySearchCard key={property._id} data={property} />
          ))}
        </div>
      ) : (
        <NotFoundProduct />
      )}
    </div>
  );
};

export default FindProperty;
