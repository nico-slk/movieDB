import React, { useState } from "react";
import { MoviesService } from "../services/movieServices";
import RatingStars from "./RatingStars";

export default function MovieSearch({ onSearchResult, emptyQuery }) {
  const [query, setQuery] = useState("")
  const [filter, setFilter] = useState(0)

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
	if(query){
		MoviesService.searchMovie(query).then(res =>{ 
			let movies = res
			if(filter){
				console.log(filter)
				movies.results = movies.results.filter(movie => movie.vote_average < filter)
				console.log(movies)
			}
			onSearchResult(movies);
			e.target.value = ""
		})
	} else {
		emptyQuery()
	}
  };

  return (
    <form onSubmit={handleClick} className="col-12 searcher">
		<div>
			<div className="input-group mb-3">
				<input type="text" className="form-control" placeholder="Search your movie" aria-describedby="button-addon2" value={query} onChange={handleChange} />
				<button className="btn btn-outline-secondary search_button" type="sumit" >Search</button>
			</div>
			<div className="rating_stars">
				<p className="text-white fw-bold rating">Rating</p>
				<RatingStars ratingSelected={(rating) => setFilter(rating * 2)} />
			</div>
		</div>
    </form>
  );
}
