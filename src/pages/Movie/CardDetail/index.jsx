import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  GetMovieById,
  GetSimilarMovie,
} from "../../../store/movies/apiActions";
import CardList from "../CardList";
const CardDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {
    data: movieData,
    loading: movieLoading,
    error: movieError,
  } = useSelector((state) => state.getMovieById);
  const {
    data: similarMovieData,
    loading: similarMovieLoading,
    error: similarMovieError,
  } = useSelector((state) => state.getSimilarMovie);

  useEffect(() => {
    dispatch(GetMovieById({ id }));
    dispatch(GetSimilarMovie({ id }));
  }, [id]);

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
  if (movieLoading) {
    return "loading...";
  }
  if (movieError) {
    return "error";
  }

  return (
    <>
      <div
        className="card-detail-holder"
        style={
          !movieData.adult
            ? {
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieData?.backdrop_path})`,
              }
            : null
        }
      >
        <div className="popular-movie-slider">
          <img
            src={`https://image.tmdb.org/t/p/original/${movieData?.poster_path}`}
            className="poster"
          />
          <div className="popular-movie-slider-content">
            <h2 className="movie-name">
              {movieData?.title ? movieData?.title : movieData?.name}
            </h2>
            <p className="movie-name">
              {movieData?.tagline ? movieData?.tagline : movieData?.type}
            </p>
            <p className="release">
              Released:{" "}
              {movieData?.release_date
                ? movieData?.release_date?.slice(0, 4)
                : movieData?.first_air_date?.slice(0, 4)}
            </p>
            <ul className="category">
              Genres:
              {movieData?.genres?.map((item) => {
                return <li>{item.name}</li>;
              })}
            </ul>
            <ul className="category">
              Countries:
              {movieData?.production_countries?.map((item) => {
                return <li>{item.name}</li>;
              })}
            </ul>
            <ul className="category">
              Languages:
              {movieData?.spoken_languages?.map((item) => {
                return <li>{item.name}</li>;
              })}
            </ul>
            <p className="desc">{movieData?.overview}</p>
            <div className="movie-info">
              <i className="fa fa-clock-o">
                &nbsp;&nbsp;&nbsp;
                <span>
                  {movieData?.runtime
                    ? convertMinsToHours(movieData?.runtime)
                    : movieData?.number_of_seasons}
                </span>
              </i>
              <i className="fa fa-circle">
                &nbsp;&nbsp;&nbsp;
                <span>
                  Imdb: <b>{movieData?.vote_average}/10</b>
                </span>
              </i>
            </div>
            {movieData?.homepage ? (
              <div className="movie-btns">
                <button>
                  <a href={movieData?.homepage} target="blank">
                    <i className="fa fa-info"></i> &nbsp; More Info
                  </a>
                </button>
              </div>
            ) : null}
          </div>
        </div>
        
      </div>
      {!similarMovieLoading ? (
          <CardList data={similarMovieData} title={"Similar Movie"} />
        ) : null}
    </>
  );
};

export default CardDetail;
