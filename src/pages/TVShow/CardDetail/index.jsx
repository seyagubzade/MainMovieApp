import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  GetSimilarTVShow,
  GetTVShowById,
} from "../../../store/tv-shows/apiActions";
import CardList from "../CardList";
const CardDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {
    data: tvShowData,
    loading: tvShowLoading,
    error: tvShowError,
  } = useSelector((state) => state.getTVShowById);
  const {
    data: similarTvShowData,
    loading: similarTvShowLoading,
    error: similarTvShowError,
  } = useSelector((state) => state.getSimilarTVShow);

  useEffect(() => {
    dispatch(GetTVShowById({ id }));
    dispatch(GetSimilarTVShow({ id }));
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
  if (tvShowLoading) {
    return "loading...";
  }
  if (tvShowError) {
    return "error";
  }
  return (
    <>
      <div
        className="card-detail-holder"
        style={
          !tvShowData.adult
            ? {
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${tvShowData?.backdrop_path})`,
              }
            : null
        }
      >
        <div className="popular-movie-slider">
          <img
            src={`https://image.tmdb.org/t/p/original/${tvShowData?.poster_path}`}
            className="poster"
          />
          <div className="popular-movie-slider-content">
            <h2 className="movie-name">
              {tvShowData.title ? tvShowData.title : tvShowData.name}
            </h2>
            <p className="movie-name">
              {tvShowData.tagline ? tvShowData.tagline : tvShowData.type}
            </p>
            <p className="release">
              Released:{" "}
              {tvShowData.release_date
                ? tvShowData.release_date?.slice(0, 4)
                : tvShowData.first_air_date?.slice(0, 4)}
            </p>
            <ul className="category">
              Genres:
              {tvShowData.genres?.map((item) => {
                return <li>{item.name}</li>;
              })}
            </ul>
            <ul className="category">
              Countries:
              {tvShowData.production_countries?.map((item) => {
                return <li>{item.name}</li>;
              })}
            </ul>
            <ul className="category">
              Languages:
              {tvShowData.spoken_languages?.map((item) => {
                return <li>{item.name}</li>;
              })}
            </ul>
            <p className="desc">{tvShowData.overview}</p>
            <div className="movie-info">
              <i className="fa fa-clock-o">
                &nbsp;&nbsp;&nbsp;
                <span>
                  {tvShowData.runtime
                    ? convertMinsToHours(tvShowData.runtime)
                    : tvShowData.number_of_seasons}
                </span>
              </i>
              <i className="fa fa-circle">
                &nbsp;&nbsp;&nbsp;
                <span>
                  Imdb: <b>{tvShowData.vote_average}/10</b>
                </span>
              </i>
            </div>

            {tvShowData.homepage ? (
              <div className="movie-btns">
                <button>
                  <a href={tvShowData.homepage} target="blank">
                    <i className="fa fa-info"></i> &nbsp; More Info
                  </a>
                </button>
              </div>
            ) : null}
          </div>
        </div>
        
      </div>
      {!similarTvShowLoading ? (
          <CardList data={similarTvShowData} title={"Similar Shows"} />
        ) : null}
    </>
  );
};

export default CardDetail;
