// SearchResults.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CardList from "./CardList";

function SearchResults() {
  const { keyword } = useParams();
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/search/multi",
      params: {
        query: `${keyword}`,
        include_adult: "false",
        language: "en-US",
        page: "1",
      },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjN2Q1N2FlY2NlMmRiZjhlN2UwMDVkNzliMDNjY2UwNCIsInN1YiI6IjY0NGUxYWQ3OWFmZmMwMDJmYmRmZGMwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dx7oZt0jO5BJK4FmCJK71irizs-3Lshv-x11ts6H55A",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        setResults(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [keyword]);


  return (
    <div>
      
        {
            loading ? <p>Loading...</p> : 
            <CardList data={results}  title={"Search"}/>
        }
       
    </div>
  );
}

export default SearchResults;