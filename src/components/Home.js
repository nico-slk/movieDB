import React, { useEffect, useState } from "react";
import MovieSearch from "./MovieSearch";
import ListCards from "./ListCards";
import { MoviesService } from "../services/movieServices";
import Loading from "./Loading";
import Footer from "./Footer";

export default function Home() {
	const [data, setData] = useState([]);
	const [multi, setMulti] = useState({
		multi: true,
	});

	useEffect(() => {
		getPopularMovies()
	}, []);

	const getPopularMovies = () => {
		MoviesService.getPopularMovies().then(res => setData(res))
	}

	if (data && !data.results) {
		return <Loading />;
	} else {
		return (
			<div className="container col-lg-8 p-0 pb-50">
				<MovieSearch onSearchResult={(res) => setData(res)} emptyQuery={() => getPopularMovies()} />
				<ListCards results={data.results}/>
				<Footer />
			</div>
		);
	}
}
