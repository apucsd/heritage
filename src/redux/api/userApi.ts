import { baseApi } from "./baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllUser: build.query({
      query: () => {
        return {
          url: "/users",
          method: "GET",
          //   params,
        };
      },
      providesTags: ["user"],
    }),

    getSingleProperty: build.query({
      query: (email) => {
        return {
          url: `/users/${email}`,
          method: "GET",
        };
      },
      providesTags: ["user"],
    }),
  }),
});

export const { useGetAllUserQuery, useGetSinglePropertyQuery } = userApi;
