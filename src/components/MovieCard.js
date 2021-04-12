import React from 'react'

export default function MovieCard(props) {
    return (
        <div>
            HOLA
            <div>
                <img src={props.img}/>
                <h3>{props.name}</h3>
                <h5>{props.title}</h5>
                <p>{props.description}</p>
            </div>
        </div>
    )
}
