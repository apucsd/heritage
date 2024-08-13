import PropertySearchCard from "./PropertySearchCard";
import NotFoundProduct from "./NotFoundProduct";
import { NEXT_PUBLIC_BACKEND_URl } from "@/const";

interface PropertySearch {
  location?: string;
  propertyType?: string;
  budget?: string;
  searchField?: string;
}
const FindProperty = async ({
  searchParams,
}: {
  searchParams: PropertySearch;
}) => {
  const newSearchParams = Object.entries(searchParams)
    .filter(([key, value]) => value)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");

  const url = `${NEXT_PUBLIC_BACKEND_URl}/properties/search-query?${newSearchParams}`;

  const res = await fetch(url);
  const data = await res.json();

  return (
    <div className="px-2 md:px-20 w-full">
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
