import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const CardItem = ({ item }) => {
 
  return (
    <Link to={`/movies/${item?.id}`}>
      {
          <div className="card">
            <div className="card-item">
              <div className="film-poster">
                <img
                  title={item?.title}
                  className="film-poster-img lazyloaded"
                  src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`}
                />
                <div className="appearOnHover">
                  <div className="playIcon">
                    <i className="fa-solid fa-play"></i>
                  </div>
                  <p className="description">
                    {item.overview ? item.overview.slice(0, 100) : null}
                    ...
                  </p>
                </div>
              </div>
              <div className="film-detail">
                <h3 className="film-name">
                  <a href="#" title="Meg 2: The Trench">
                    {item?.title ? item?.title : item?.name}
                  </a>
                </h3>
                <div className="fd-infor">
                  <span className="fdi-item">
                    {item.release_date
                      ? item?.release_date.slice(0, 4)
                      : item?.first_air_date
                      ? item?.first_air_date.slice(0, 4)
                      : null}
                  </span>
                  <span className="dot"></span>
                </div>
              </div>
            </div>
          </div>
      }
    </Link>
  );
};
export default CardItem;
