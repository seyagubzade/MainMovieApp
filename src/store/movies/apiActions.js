import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const apiKey = process.env.REACT_APP_TMDB_API_KEY; // Use environment variable for API key
const apiKey =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjN2Q1N2FlY2NlMmRiZjhlN2UwMDVkNzliMDNjY2UwNCIsInN1YiI6IjY0NGUxYWQ3OWFmZmMwMDJmYmRmZGMwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dx7oZt0jO5BJK4FmCJK71irizs-3Lshv-x11ts6H55A"; // Use environment variable for API key

export const GetNowPlaying = createAsyncThunk(
  `GetNowPlaying`,
  async (config, thunkApi) => {
    try {
      const options = {
        method: "GET",
        url: "https://api.themoviedb.org/3/movie/now_playing",
        params: { language: "en-US", page: "1" },
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      };
      const response = await axios(options);
      return response; // Assuming you want to return the data
    } catch (error) {
      // Handle errors here, e.g., dispatch an error action
      throw error;
    }
  }
);
export const GetPopularMovies = createAsyncThunk(
  `GetPopularMovies`,
  async (config, thunkApi) => {
    try {
      const options = {
        method: "GET",
        url: "https://api.themoviedb.org/3/movie/popular",
        params: { language: "en-US", page: "1" },
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      };
      const response = await axios(options);
      return response; // Assuming you want to return the data
    } catch (error) {
      // Handle errors here, e.g., dispatch an error action
      throw error;
    }
  }
);
export const GetTopRatedMovies = createAsyncThunk(
  `GetTopRatedMovies`,
  async (config, thunkApi) => {
    try {
      const options = {
        method: "GET",
        url: "https://api.themoviedb.org/3/movie/top_rated",
        params: { language: "en-US", page: "1" },
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      };
      const response = await axios(options);
      return response; // Assuming you want to return the data
    } catch (error) {
      // Handle errors here, e.g., dispatch an error action
      throw error;
    }
  }
);
export const GetUpcomingMovies = createAsyncThunk(
  `GetUpcomingMovies`,
  async (config, thunkApi) => {
    try {
      const options = {
        method: "GET",
        url: "https://api.themoviedb.org/3/movie/upcoming",
        params: { language: "en-US", page: "1" },
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      };
      const response = await axios(options);
      return response; // Assuming you want to return the data
    } catch (error) {
      // Handle errors here, e.g., dispatch an error action
      throw error;
    }
  }
);

export const GetMovieById = createAsyncThunk(
  "GetMovieById",
  async ({ id }, thunkApi) => {
    try {
      const options = {
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${id}`,
        params: { language: "en-US" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjN2Q1N2FlY2NlMmRiZjhlN2UwMDVkNzliMDNjY2UwNCIsInN1YiI6IjY0NGUxYWQ3OWFmZmMwMDJmYmRmZGMwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dx7oZt0jO5BJK4FmCJK71irizs-3Lshv-x11ts6H55A",
        },
      };
      const response = await axios(options);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response);
    }
  }
);

export const GetSimilarMovie = createAsyncThunk(
  "GetSimilarMovie",
  async ({ id }, thunkApi) => {
    try {
      const options = {
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`,
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjN2Q1N2FlY2NlMmRiZjhlN2UwMDVkNzliMDNjY2UwNCIsInN1YiI6IjY0NGUxYWQ3OWFmZmMwMDJmYmRmZGMwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dx7oZt0jO5BJK4FmCJK71irizs-3Lshv-x11ts6H55A",
        },
      };
      const response = await axios(options);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response);
    }
  }
);
