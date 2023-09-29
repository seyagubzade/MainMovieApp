import { createSlice } from "@reduxjs/toolkit";
import {
  GetTrendingAll,
  GetTrendingMovies,
  GetTrendingTv,

} from "./apiActions";

export const trendingAll = createSlice({
  name: "trendingAll",
  initialState: {
    data: [],
    error: null,
    loading: false,
  },
  extraReducers: {
    [GetTrendingAll.fulfilled]: (state, action) => {
      state.data = action.payload.data;
      state.loading = false;
    },
    [GetTrendingAll.pending]: (state, action) => {
      state.loading = true;
    },
    [GetTrendingAll.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});
export const trendingMovies = createSlice({
  name: "trendingMovies",
  initialState: {
    data: [],
    error: null,
    loading: false,
  },
  extraReducers: {
    [GetTrendingMovies.fulfilled]: (state, action) => {
      state.data = action.payload.data;
      state.loading = false;
    },
    [GetTrendingMovies.pending]: (state, action) => {
      state.loading = true;
    },
    [GetTrendingMovies.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});
export const trendingTV = createSlice({
  name: "trendingTV",
  initialState: {
    data: [],
    error: null,
    loading: false,
  },
  extraReducers: {
    [GetTrendingTv.fulfilled]: (state, action) => {
      state.data = action.payload.data;
      state.loading = false;
    },
    [GetTrendingTv.pending]: (state, action) => {
      state.loading = true;
    },
    [GetTrendingTv.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});




export const trendingAllReducer = trendingAll.reducer;
export const trendingMoviesReducer = trendingMovies.reducer;
export const trendingTVReducer = trendingTV.reducer;
