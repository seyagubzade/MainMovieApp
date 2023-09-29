import { createSlice } from "@reduxjs/toolkit";
import {
  GetAiringShows,
  GetOnAirShows,
  GetPopularShows,
  GetTopRatedShows,
  GetTVShowById,
  GetSimilarTVShow
} from "./apiActions";

export const airingShows = createSlice({
  name: "airingShows",
  initialState: {
    data: [],
    error: null,
    loading: false,
  },
  extraReducers: {
    [GetAiringShows.fulfilled]: (state, action) => {
      state.data = action.payload.data;
      state.loading = false;
    },
    [GetAiringShows.pending]: (state, action) => {
      state.loading = true;
    },
    [GetAiringShows.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});
export const onAirShows = createSlice({
  name: "onAirShows",
  initialState: {
    data: [],
    error: null,
    loading: false,
  },
  extraReducers: {
    [GetOnAirShows.fulfilled]: (state, action) => {
      state.data = action.payload.data;
      state.loading = false;
    },
    [GetOnAirShows.pending]: (state, action) => {
      state.loading = true;
    },
    [GetOnAirShows.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});
export const popularShows = createSlice({
  name: "popularShows",
  initialState: {
    data: [],
    error: null,
    loading: false,
  },
  extraReducers: {
    [GetPopularShows.fulfilled]: (state, action) => {
      state.data = action.payload.data;
      state.loading = false;
    },
    [GetPopularShows.pending]: (state, action) => {
      state.loading = true;
    },
    [GetPopularShows.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});
export const topRatedShows = createSlice({
  name: "topRatedShows",
  initialState: {
    data: [],
    error: null,
    loading: false,
  },
  extraReducers: {
    [GetTopRatedShows.fulfilled]: (state, action) => {
      state.data = action.payload.data;
      state.loading = false;
    },
    [GetTopRatedShows.pending]: (state, action) => {
      state.loading = true;
    },
    [GetTopRatedShows.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});
export const getTVShowById = createSlice({
  name: "getTVShowById",
  initialState: {
    data: [],
    error: null,
    loading: false,
  },
  extraReducers: {
    [GetTVShowById.fulfilled]: (state, action) => {
      state.data = action.payload.data;
      state.loading = false;
    },
    [GetTVShowById.pending]: (state, action) => {
      state.loading = true;
    },
    [GetTVShowById.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});
export const getSimilarTVShow = createSlice({
  name: "getSimilarTVShow",
  initialState: {
    data: [],
    error: null,
    loading: false,
  },
  extraReducers: {
    [GetSimilarTVShow.fulfilled]: (state, action) => {
      state.data = action.payload.data.results;
      state.loading = false;
    },
    [GetSimilarTVShow.pending]: (state, action) => {
      state.loading = true;
    },
    [GetSimilarTVShow.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const airingShowsReducer = airingShows.reducer;
export const onAirShowsReducer = onAirShows.reducer;
export const popularShowsReducer = popularShows.reducer;
export const topRatedShowsReducer = topRatedShows.reducer;
export const getTVShowByIdReducer = getTVShowById.reducer;
export const getSimilarTVShowReducer = getSimilarTVShow.reducer;
