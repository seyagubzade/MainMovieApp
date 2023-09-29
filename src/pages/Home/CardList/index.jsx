import React from "react";
import CardItem from "../CardItem";

const CardList = ({ data, title }) => {
  return (
    <div className="category-container">
      <span className="list-text">{title}</span>

      <div className="movie-cards">
        {data?.map((item) => {
          return item.poster_path ? (
            <CardItem item={item} key={item.id} id={data.id} title={title}/>
          ) : null; // Returns only the ones with the poster
        })}
      </div>
    </div>
  );
};

export default CardList;
