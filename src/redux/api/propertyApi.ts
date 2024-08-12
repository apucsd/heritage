import { baseApi } from "./baseApi";

const propertyApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllProperty: build.query({
      query: (args) => {
        // const params = new URLSearchParams();
        // if (args) {
        //   args.forEach((item: any) => {
        //     params.append(item.name, item.value as string);
        //   });
        // }

        return {
          url: "/properties",
          method: "GET",
          //   params,
        };
      },
      providesTags: ["property"],
    }),
    getAllPropertyBySearchQuery: build.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: any) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/properties/search-query",
          method: "GET",
          params,
        };
      },
      providesTags: ["property"],
    }),

    getSingleProperty: build.query({
      query: (id) => {
        return {
          url: `/properties/${id}`,
          method: "GET",
        };
      },
      providesTags: ["property"],
    }),

    updateBid: build.mutation({
      query: (args) => {
        return {
          url: `/properties/${args.id}/bid`,
          method: "PATCH",
          body: args.data,
        };
      },
      invalidatesTags: ["property"],
    }),
  }),
});

export const {
  useGetAllPropertyQuery,
  useGetSinglePropertyQuery,
  useUpdateBidMutation,
  useGetAllPropertyBySearchQueryQuery,
} = propertyApi;
