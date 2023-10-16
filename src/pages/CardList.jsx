import React, { useEffect, useState } from "react";
import Card from "./Card";

const CardList = (props) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    setData(props.data.results);
  }, [props.data]);
  return (
    <div className="category-container">
      <span className="list-text">{props.title}</span>

      <div className="movie-cards">
        {
          data?.map((item) => {
            return item.poster_path ? <Card props={item} key={item.id} /> : null; /// Returns only the ones with the poster 
          })
        }
      </div>
    </div>
  );
};

export default CardList;