import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ImageSlider from "../ImageSlider";
import "../Home/Home.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAiringShows,
  GetOnAirShows,
  GetPopularShows,
  GetTopRatedShows,
} from "../../store/tv-shows/apiActions";
import CardList from "./CardList";

const TvShows = () => {
  const slidesArr = [];
  const [slides, setSlides] = useState([]);
  const [isSuccessCall, setIsSuccessCall] = useState(false);
  const { data: airingShowsData, loading: airingShowsLoading } = useSelector(
    (state) => state.airingShows
  );
  const { data: onAirShowsData, loading: onAirShowsLoading } = useSelector(
    (state) => state.onAirShows
  );
  const { data: popularShowsData, loading: popularShowsLoading } = useSelector(
    (state) => state.popularShows
  );
  const { data: topRatedShowsData, loading: topRatedShowsLoading } =
    useSelector((state) => state.topRatedShows);

  const dispatch = useDispatch();

  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/tv/top_rated",
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

    // GetAiringShows API
    dispatch(GetAiringShows());

    // GetOnAirShows API
    dispatch(GetOnAirShows());

    // GetPopularShows API
    dispatch(GetPopularShows());

    // GetTopRatedShows API
    dispatch(GetTopRatedShows());

    // console.log("Home>>DATA >>>>>", nowplayingData);
  }, []);
  console.log(popularShowsLoading);

  const containerStyles = {
    width: "100%",
    height: "80vh",
    margin: "0 auto",
  };
  // console.log("HOME SECTION >>", nowplayingData.data);
  return (
    <div className="home">
      <div style={containerStyles}>
        {isSuccessCall ? <ImageSlider slides={slides} /> : null}
      </div>
      <main id="main" style={{ ...containerStyles, height: "max-content" }}>
        {!topRatedShowsLoading ? (
          <CardList
            data={topRatedShowsData?.results}
            title={"Top Rated Shows"}
          />
        ) : (
          <div>Loading...</div>
        )}
        {!popularShowsLoading ? (
          <CardList data={popularShowsData?.results} title={"Popular Shows"} />
        ) : (
          <div>Loading...</div>
        )}

        {!airingShowsLoading ? (
          <CardList data={airingShowsData?.results} title={"Airing Today"} />
        ) : (
          <div>Loading...</div>
        )}
        {!onAirShowsLoading ? (
          <CardList data={onAirShowsData?.results} title={"On The Air"} />
        ) : (
          <div>Loading...</div>
        )}
      </main>
    </div>
  );
};

export default TvShows;
