import React, { useEffect, useState } from 'react'
import MovieSearch from './MovieSearch'
import ListCards from './ListCards'

export default function Home() {
    const [data, setData] = useState({})

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${"e965adc31d877d6a743cb35c22347795"}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
        .then((res) => res.json())
        .then((res) => setData(res))
    }, [])



    return (
        <div>
            <MovieSearch setData={setData}/>
            <ul>
                {data && data.results.map(e =>
                    <li>
                        <ListCards
                            mane={e.original_tittle}
                            title={e.title} 
                            img={e.img} 
                            url={e.url} 
                            description={e.description}
                        />
                    </li>
                )}
            </ul>
            {console.log(data)}
        </div>
    )
}
