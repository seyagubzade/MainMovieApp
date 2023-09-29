import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const GetAiringShows = createAsyncThunk(
  "GetAiringShows",
  // config - view terefden gelen data ucun ozu obj, thunkAPi response ucun
  async (config, thunkApi) => {
    // console.log("works");
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/tv/airing_today",
      params: { language: "en-US", page: "1" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjN2Q1N2FlY2NlMmRiZjhlN2UwMDVkNzliMDNjY2UwNCIsInN1YiI6IjY0NGUxYWQ3OWFmZmMwMDJmYmRmZGMwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dx7oZt0jO5BJK4FmCJK71irizs-3Lshv-x11ts6H55A",
      },
    };
    const response = await axios(options);
    // console.log("GetAiringShows >>> API CALL RESPONSE", response);
    return response;
  }
);

export const GetOnAirShows = createAsyncThunk(
  "GetOnAirShows",
  // config - view terefden gelen data ucun ozu obj, thunkAPi response ucun
  async (config, thunkApi) => {
    // console.log("works");
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/tv/on_the_air",
      params: { language: "en-US", page: "1" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjN2Q1N2FlY2NlMmRiZjhlN2UwMDVkNzliMDNjY2UwNCIsInN1YiI6IjY0NGUxYWQ3OWFmZmMwMDJmYmRmZGMwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dx7oZt0jO5BJK4FmCJK71irizs-3Lshv-x11ts6H55A",
      },
    };
    const response = await axios(options);
    // console.log("GetOnAirShows >>> API CALL RESPONSE", response);
    return response;
  }
);

export const GetPopularShows = createAsyncThunk(
  "GetPopularShows",
  // config - view terefden gelen data ucun ozu obj, thunkAPi response ucun
  async (config, thunkApi) => {
    // console.log("works");
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/tv/popular",
      params: { language: "en-US", page: "1" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjN2Q1N2FlY2NlMmRiZjhlN2UwMDVkNzliMDNjY2UwNCIsInN1YiI6IjY0NGUxYWQ3OWFmZmMwMDJmYmRmZGMwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dx7oZt0jO5BJK4FmCJK71irizs-3Lshv-x11ts6H55A",
      },
    };
    const response = await axios(options);
    // console.log("GetOnAirShows >>> API CALL RESPONSE", response);
    return response;
  }
);
export const GetTopRatedShows = createAsyncThunk(
  "GetTopRatedShows",
  // config - view terefden gelen data ucun ozu obj, thunkAPi response ucun
  async (config, thunkApi) => {
    // console.log("works");
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/tv/top_rated",
      params: { language: "en-US", page: "1" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjN2Q1N2FlY2NlMmRiZjhlN2UwMDVkNzliMDNjY2UwNCIsInN1YiI6IjY0NGUxYWQ3OWFmZmMwMDJmYmRmZGMwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dx7oZt0jO5BJK4FmCJK71irizs-3Lshv-x11ts6H55A",
      },
    };
    const response = await axios(options);
    // console.log("GetOnAirShows >>> API CALL RESPONSE", response);
    return response;
  }
);

export const GetTVShowById = createAsyncThunk(
  "GetTVShowById",
  async ({ id }, thunkApi) => {
    try {
      const options = {
        method: "GET",
        url: `https://api.themoviedb.org/3/tv/${id}`,
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

export const GetSimilarTVShow = createAsyncThunk(
  "GetSimilarTVShow",
  async ({ id }, thunkApi) => {
    try {
      const options = {
        method: "GET",
        url: `https://api.themoviedb.org/3/tv/${id}/similar?language=en-US&page=1`,
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
