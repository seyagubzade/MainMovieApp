import React from "react";
import "./Home/Home.css";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Card = (props) => {
  const navigate = useNavigate();
  return (
    <div className="card">
      <Link to={`/home/${props.props.id}`} > 
      <div className="card-item">
        <div className="film-poster">
          <img
            title={props.props.title}
            className="film-poster-img lazyloaded"
            src={`https://image.tmdb.org/t/p/original/${props.props.poster_path}`}
          />
          <div className="appearOnHover">
            <div className="playIcon">
              <i class="fa-solid fa-play"></i>
            </div>
            <p className="description">
              {props.props.overview ? props.props.overview.slice(0, 100) : null}...
            </p>
          </div>
        </div>
        <div className="film-detail">
          <h3 className="film-name">
            <a href="#" title="Meg 2: The Trench">
              {props.props.title ? props.props.title : props.props.name}
            </a>
          </h3>
          <div className="fd-infor">
            <span className="fdi-item">{props.props.release_date ? props.props.release_date.slice(0,4) : props.props.first_air_date ? props.props.first_air_date.slice(0,4) : null}</span>
            <span className="dot"></span>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default Card;