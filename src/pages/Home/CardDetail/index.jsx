import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CardDetails = () => {
  const { id } = useParams();
  const [finalData, setFinalData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [movieSuccess, setMovieSuccess] = useState(false);
  const [showsSuccess, setShowsSuccess] = useState(false);

  useEffect(() => {
    
    const optionsMovie = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${id}`,
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjN2Q1N2FlY2NlMmRiZjhlN2UwMDVkNzliMDNjY2UwNCIsInN1YiI6IjY0NGUxYWQ3OWFmZmMwMDJmYmRmZGMwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dx7oZt0jO5BJK4FmCJK71irizs-3Lshv-x11ts6H55A",
      },
    };
    const optionsShow = {
      method: "GET",
      url: `https://api.themoviedb.org/3/tv/${id}`,
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjN2Q1N2FlY2NlMmRiZjhlN2UwMDVkNzliMDNjY2UwNCIsInN1YiI6IjY0NGUxYWQ3OWFmZmMwMDJmYmRmZGMwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dx7oZt0jO5BJK4FmCJK71irizs-3Lshv-x11ts6H55A",
      },
    };
    axios
      .request(optionsMovie)
      .then((response) => {
        setMovieSuccess(true);
        setFinalData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        // setError(error);
        setLoading(false);
      });
    axios
      .request(optionsShow)
      .then((response) => {
        setShowsSuccess(true);
         setFinalData(response.data) 
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);

  const convertMinsToHours = (minutes) => {
    if (isNaN(minutes) || minutes < 0) {
      return "Invalid input";
    }

    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    if (hours === 0) {
      return `${remainingMinutes} mins`;
    } else if (remainingMinutes === 0) {
      return `${hours} hr`;
    } else {
      return `${hours}hr ${remainingMinutes}mins`;
    }
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : movieSuccess ? (
        <div
        className="card-detail-holder"
        style={
          finalData.adult ? null :
          movieSuccess 
            ? {
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${finalData.backdrop_path})`,
              }
            : null
        }
      >
        <div className="popular-movie-slider">
          <img
            src={`https://image.tmdb.org/t/p/original/${finalData.poster_path}`}
            className="poster"
          />
          <div className="popular-movie-slider-content">
            <h2 className="movie-name">{finalData.title ? finalData.title : finalData.name}</h2> 
            <p className="movie-name">{finalData.tagline ? finalData.tagline : finalData.type}</p>
            <p className="release">Released: {finalData.release_date? finalData.release_date?.slice(0, 4) : finalData.first_air_date?.slice(0,4)}</p>
            <ul className="category">
              Genres:
              {finalData.genres.map((item) => {
                return <li>{item.name}</li>;
              })}
            </ul>
            <ul className="category">
              Countries:
              {finalData.production_countries.map((item) => {
                return <li>{item.name}</li>;
              })}
            </ul>
            <ul className="category">
              Languages:
              {finalData.spoken_languages.map((item) => {
                return <li>{item.name}</li>;
              })}
            </ul>
            <p className="desc">{finalData.overview}</p>
            <div className="movie-info">
              <i className="fa fa-clock-o">
                &nbsp;&nbsp;&nbsp;
                <span>{finalData.runtime ? convertMinsToHours(finalData.runtime) : finalData.number_of_seasons}</span>
              </i>
              <i className="fa fa-circle">
                &nbsp;&nbsp;&nbsp;
                <span>
                  Imdb: <b>{finalData.vote_average}/10</b>
                </span>
              </i>
            </div>
            {finalData.homepage ? <div className="movie-btns">
              <button>
                <a href={finalData.homepage} target="blank">
                <i className="fa fa-info"></i> &nbsp; More Info
                </a>
                
              </button>
            </div> : null}
          </div>
        </div>
        </div>
      ) : showsSuccess ? (
        <div
        className="card-detail-holder"
        style={
          finalData.adult ? null :
          showsSuccess 
            ? {
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${finalData.backdrop_path})`,
              }
            : null
        }
      >
        <div className="popular-movie-slider">
          <img
            src={`https://image.tmdb.org/t/p/original/${finalData.poster_path}`}
            className="poster"
          />
          <div className="popular-movie-slider-content">
            <h2 className="movie-name">{finalData.title ? finalData.title : finalData.name}</h2> 
            <p className="movie-name">{finalData.tagline ? finalData.tagline : finalData.type}</p>
            <p className="release">Released: {finalData.release_date? finalData.release_date?.slice(0, 4) : null}</p>
            <ul className="category">
              Genres:
              {finalData.genres.map((item) => {
                return <li>{item.name}</li>;
              })}
            </ul>
            <ul className="category">
              Countries:
              {finalData.production_countries.map((item) => {
                return <li>{item.name}</li>;
              })}
            </ul>
            <ul className="category">
              Languages:
              {finalData.spoken_languages.map((item) => {
                return <li>{item.name}</li>;
              })}
            </ul>
            <p className="desc">{finalData.overview}</p>
            <div className="movie-info">
              <i className="fa fa-clock-o">
                &nbsp;&nbsp;&nbsp;
                <span>{finalData.runtime ? convertMinsToHours(finalData.runtime) : finalData.number_of_seasons}</span>
              </i>
              <i className="fa fa-circle">
                &nbsp;&nbsp;&nbsp;
                <span>
                  Imdb: <b>{finalData.vote_average}/10</b>
                </span>
              </i>
            </div>
            {finalData.homepage ? <div className="movie-btns">
              <button>
                <a href={finalData.homepage} target="blank">
                <i className="fa fa-info"></i> &nbsp; More Info
                </a>
                
              </button>
            </div> : null}
            
          </div>
        </div>
        </div>
      ) : null}
      
    </div>
  );
};

export default CardDetails;