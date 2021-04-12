import React from 'react'
import MovieCard from './MovieCard';

export default function ListCards(props) {

    return (
        <div>
            <div>
                <MovieCard 
                    name={props.name}
                    title={props.title}
                    img={props.img}
                    id={props.id}
                    handleCloseModal={props.handleCloseModal}
                    handleOpenModal={props.handleOpenModal}
                />
            </div>
        </div>
    )
}
