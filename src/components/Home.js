import React, { useEffect, useState } from "react";
import MovieSearch from "./MovieSearch";
import ListCards from "./ListCards";

export default function Home() {
  const [data, setData] = useState({});
  const [multi, setMulti] = useState({
    multi: true,
  });

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${"e965adc31d877d6a743cb35c22347795"}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
    )
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  if (!data) {
    return <p>loading...</p>;
  } else {
    return (
      <div className="container">
        <MovieSearch setData={setData} />
        <ul className="row p-3">
          {console.log(data)}
          {data.results.map((e) => (
            <li key={e.original_title} className="col-4 $red-300">
              <ListCards
                name={e.original_title}
                title={e.title}
                img={e.poster_path}
                description={e.description}
                id={e.id}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
