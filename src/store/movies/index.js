import { createSlice } from "@reduxjs/toolkit";
import {
  GetNowPlaying,
  GetPopularMovies,
  GetTopRatedMovies,
  GetUpcomingMovies,
  GetMovieById,
  GetSimilarMovie
} from "./apiActions";

export const nowPlaying = createSlice({
  name: "nowPlaying",
  initialState: {
    data: [],
    error: null,
    loading: false,
  },
  extraReducers: {
    [GetNowPlaying.fulfilled]: (state, action) => {
      state.data = action.payload.data;
      state.loading = false;
    },
    [GetNowPlaying.pending]: (state, action) => {
      state.loading = true;
    },
    [GetNowPlaying.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});
export const popularMovies = createSlice({
  name: "popularMovies",
  initialState: {
    data: [],
    error: null,
    loading: false,
  },
  extraReducers: {
    [GetPopularMovies.fulfilled]: (state, action) => {
      state.data = action.payload.data;
      state.loading = false;
    },
    [GetPopularMovies.pending]: (state, action) => {
      state.loading = true;
    },
    [GetPopularMovies.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});
export const topRatedMovies = createSlice({
  name: "topRatedMovies",
  initialState: {
    data: [],
    error: null,
    loading: false,
  },
  extraReducers: {
    [GetTopRatedMovies.fulfilled]: (state, action) => {
      state.data = action.payload.data;
      state.loading = false;
    },
    [GetTopRatedMovies.pending]: (state, action) => {
      state.loading = true;
    },
    [GetTopRatedMovies.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});
export const upcomingMovies = createSlice({
  name: "upcomingMovies",
  initialState: {
    data: [],
    error: null,
    loading: false,
  },
  extraReducers: {
    [GetUpcomingMovies.fulfilled]: (state, action) => {
      state.data = action.payload.data;
      state.loading = false;
    },
    [GetUpcomingMovies.pending]: (state, action) => {
      state.loading = true;
    },
    [GetUpcomingMovies.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});


export const getMovieById = createSlice({
  name: "getMovieById",
  initialState: {
    data: [],
    error: null,
    loading: false,
  },
  extraReducers: {
    [GetMovieById.fulfilled]: (state, action) => {
      state.data = action.payload.data;
      state.loading = false;
    },
    [GetMovieById.pending]: (state, action) => {
      state.loading = true;
    },
    [GetMovieById.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});
export const getSimilarMovie = createSlice({
  name: "getSimilarMovie",
  initialState: {
    data: [],
    error: null,
    loading: false,
  },
  extraReducers: {
    [GetSimilarMovie.fulfilled]: (state, action) => {
      state.data = action.payload.data.results;
      state.loading = false;
    },
    [GetSimilarMovie.pending]: (state, action) => {
      state.loading = true;
    },
    [GetSimilarMovie.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const nowPLayingReducer = nowPlaying.reducer;
export const popularMoviesReducer = popularMovies.reducer;
export const topRatedMoviesReducer = topRatedMovies.reducer;
export const upcomingMoviesReducer = upcomingMovies.reducer;
export const getMovieByIdReducer = getMovieById.reducer;
export const getSimilarMovieReducer = getSimilarMovie.reducer;
