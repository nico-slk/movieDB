import React from 'react'
import MovieCard from './MovieCard';

export default function ListCards(props) {

    return (
        <ul className="p-0 row">
        {props.results && props.results.map((e) => (
            <li key={e.id} className="col-4 col-lg-3 col-sm-6 col-12 mt-3 heightCard movieCard">
                <MovieCard 
                    name={e.original_title}
                    title={e.title}
                    img={e.poster_path}
                    id={e.id}
                />
            </li>
        ))}
    </ul>
    )
}
