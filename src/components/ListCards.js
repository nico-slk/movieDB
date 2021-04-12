import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard';

export default function ListCards(props) {
    const [state, setState] = useState([])

    useEffect(() => {
        setState(props.movieList);
    }, [props])

    return (
        <div>
            <div>
                {props.movieList && props.movieList.map(e => 
                    <div>
                        <MovieCard 
                            name={e.name} 
                            title={e.title} 
                            img={e.poster_path} 
                            url={e.url} 
                            description={e.description}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}
