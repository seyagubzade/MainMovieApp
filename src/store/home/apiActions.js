import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const apiKey = process.env.REACT_APP_TMDB_API_KEY; // Use environment variable for API key
const apiKey =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjN2Q1N2FlY2NlMmRiZjhlN2UwMDVkNzliMDNjY2UwNCIsInN1YiI6IjY0NGUxYWQ3OWFmZmMwMDJmYmRmZGMwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dx7oZt0jO5BJK4FmCJK71irizs-3Lshv-x11ts6H55A"; // Use environment variable for API key

export const GetTrendingAll = createAsyncThunk(
  `GetTrendingAll`,
  async (config, thunkApi) => {
    try {
      const options = {
        method: "GET",
        url: "https://api.themoviedb.org/3/trending/all/week",
        params: { language: "en-US", page: "1" },
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      };
      const response = await axios(options);
      return response; // Assuming you want to return the data
    } catch (error) {
      throw error;
    }
  }
);
export const GetTrendingMovies = createAsyncThunk(
  `GetTrendingMovies`,
  async (config, thunkApi) => {
    try {
      const options = {
        method: "GET",
        url: "https://api.themoviedb.org/3/trending/movie/week",
        params: { language: "en-US", page: "1" },
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      };
      const response = await axios(options);
      return response; // Assuming you want to return the data
    } catch (error) {
      throw error;
    }
  }
);
export const GetTrendingTv = createAsyncThunk(
  `GetTrendingTv`,
  async (config, thunkApi) => {
    try {
      const options = {
        method: "GET",
        url: "https://api.themoviedb.org/3/trending/tv/week",
        params: { language: "en-US", page: "1" },
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      };
      const response = await axios(options);
      return response; // Assuming you want to return the data
    } catch (error) {
      throw error;
    }
  }
);


