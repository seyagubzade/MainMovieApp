import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ImageSlider from "../ImageSlider";
import "../Home/Home.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  GetNowPlaying,
  GetPopularMovies,
  GetTopRatedMovies,
  GetUpcomingMovies,
} from "../../store/movies/apiActions";
import CardList from "./CardList";


const Movies = () => {
  const slidesArr = [];
  const [slides, setSlides] = useState([]);
  const [isSuccessCall, setIsSuccessCall] = useState(false);
  const { data: nowPlayingData, loading: nowPlayingLoading } = useSelector(
    (state) => state.nowPLaying
  );
  const { data: popularMoviesData, loading: popularMoviesLoading } = useSelector(
    (state) => state.popularMovies
  );
  const { data: topRatedMoviesData, loading: topRatedMoviesLoading } = useSelector(
    (state) => state.topRatedMovies
  );
  const { data: upcomingMoviesData, loading: upcomingMoviesLoading } =
    useSelector((state) => state.upcomingMovies);

    
  const dispatch = useDispatch();

  
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/now_playing",
    params: {
      include_adult: "false",
      include_video: "false",
      language: "en-US",
      page: "1",
      sort_by: "popularity.desc",
    },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjN2Q1N2FlY2NlMmRiZjhlN2UwMDVkNzliMDNjY2UwNCIsInN1YiI6IjY0NGUxYWQ3OWFmZmMwMDJmYmRmZGMwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dx7oZt0jO5BJK4FmCJK71irizs-3Lshv-x11ts6H55A",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        response.data.results.map((item, index) => {
          if (index < 8) {
            slidesArr.push(item);
          }
        });
        setSlides(slidesArr);
        setIsSuccessCall(true);
      })
      .catch(function (error) {
        console.error(error);
      });

    //   GetNowPlaying
    dispatch(GetNowPlaying());

    // GetPopularMovies API
    dispatch(GetPopularMovies());

    // GetTopRatedMovies API
    dispatch(GetTopRatedMovies());

    // GetUpcomingMovies API
    dispatch(GetUpcomingMovies());

  }, []);

  const containerStyles = {
    width: "100%",
    height: "80vh",
    margin: "0 auto",
  };
  return (
    <div className="home">
      <div style={containerStyles}>
        {isSuccessCall ? <ImageSlider slides={slides} /> : null}
      </div>
      <main id="main" style={{ ...containerStyles, height: "max-content" }}>
        {!nowPlayingLoading ? (
          <CardList
            data={nowPlayingData?.results}
            title={"Now Playing Movies"}
          />
        ) : (
          <div>Loading...</div>
        )}
        {!popularMoviesLoading ? (
          <CardList data={popularMoviesData?.results} title={"Popular Movies"} />
        ) : (
          <div>Loading...</div>
        )}

        {!topRatedMoviesLoading ? (
          <CardList data={topRatedMoviesData?.results} title={"Top Rated Movies"} />
        ) : (
          <div>Loading...</div>
        )}
        {!upcomingMoviesLoading ? (
          <CardList data={upcomingMoviesData?.results} title={"Upcoming Movies"} />
        ) : (
          <div>Loading...</div>
        )}
      </main>
    </div>
  );;
};

export default Movies;
