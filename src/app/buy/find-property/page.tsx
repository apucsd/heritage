"use client";

import { useGetAllPropertyBySearchQueryQuery } from "@/redux/api/propertyApi";

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
  const { data } = useGetAllPropertyBySearchQueryQuery(newSearchParams);
  console.log(data);
  return (
    <div className="px-20">
      <div>
        <hr />
        <h1 className="text-2xl font-semibold">
          {data.length} results for rental
        </h1>
      </div>
    </div>
  );
};

export default FindProperty;
