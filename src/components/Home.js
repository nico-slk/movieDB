import React, { useEffect, useState } from "react";
import MovieSearch from "./MovieSearch";
import ListCards from "./ListCards";
import { MoviesService } from "../services/movieServices";
import Footer from "./Footer";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getPopularMovies();
  }, []);

  const getPopularMovies = () =>
    MoviesService.getPopularMovies().then((res) => setData(res));

  return (
    <>
      <div className="container col-lg-8 mb-3 pb-5">
        <MovieSearch
          onSearchResult={(res) => setData(res)}
          emptyQuery={() => getPopularMovies()}
        />
        <ListCards results={data.results} />
        <Footer />
      </div>
    </>
  );
}
