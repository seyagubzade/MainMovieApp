import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Movies from "../pages/Movie";
import TvShows from "../pages/TVShow";
import SearchResults from "../pages/SearchResults";
import TvShowsDetail from "../pages/TVShow/CardDetail";
import MoviesDetail from "../pages/Movie/CardDetail"
import HomeDetails from "../pages/Home/CardDetail"

const AllRoutes = () => {
  return (
   <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home/:id" element={<HomeDetails />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MoviesDetail />} />
        <Route path="/tv-shows" element={<TvShows />} />
        <Route path="/tv-shows/:id" element={<TvShowsDetail />} />
        <Route path="/search/:keyword" element={<SearchResults />} />
      </Routes>
   </>
  )
}

export default AllRoutes