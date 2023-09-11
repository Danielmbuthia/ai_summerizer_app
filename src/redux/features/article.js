import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rapidKey = import.meta.env.VITE__RAPID_SUMMARY_KEY;

export const articleApi = createApi({
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", rapidKey),
        headers.set(
          "X-RapidAPI-Host",
          "article-extractor-and-summarizer.p.rapidapi.com"
        );
    },
  }),
  endpoints: (builder) => ({
    getArtilces: builder.query({
      query: (params) =>
        `/summarize?url=${encodeURIComponent(params.url)}&sentences=3`,
    }),
  }),
});

export const { useLazyGetArtilcesQuery } = articleApi;
