import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movie";
import Footer from "./components/Footer";
import TvShows from "./pages/TVShow";
import SearchResults from "./pages/SearchResults";
import TvShowsDetail from "./pages/TVShow/CardDetail";
import MoviesDetail from "./pages/Movie/CardDetail"
import HomeDetails from "./pages/Home/CardDetail"
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home/:id" element={<HomeDetails />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MoviesDetail />} />
        <Route path="/tv-shows" element={<TvShows />} />
        <Route path="/tv-shows/:id" element={<TvShowsDetail />} />
        <Route path="/search/:keyword" element={<SearchResults />} />

        {/* Must work on Home Section 
            Similiar Movie or TV Shows list on Card Details Page
         */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
