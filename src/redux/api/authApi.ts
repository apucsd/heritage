import { baseApi } from "./baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    registerUser: build.mutation({
      query: (userInfo) => {
        return {
          url: "/register",
          method: "POST",
          body: userInfo,
        };
      },
    }),
    loginUser: build.mutation({
      query: (userInfo) => {
        return {
          url: "/login",
          method: "POST",
          body: userInfo,
        };
      },
    }),
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation } = authApi;
