import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { MoviesService } from "../../services/movieServices";

export default function MovieModal(props) {
  const [detail, setSetail] = useState({})
  const {overview, runtime, original_title, genres, title} = detail;

  useEffect(() => {
    MoviesService.getMovieDetail(props.id).then(res => setSetail(res))
  }, [])

  if (!props.modalIsOpen) {
    return null;
  } else {
    return ReactDOM.createPortal(
      <div className="Modal-background">
        <div className="Modal-window animate__animated animate__fadeIn">
        <img src={props.img ? `http://image.tmdb.org/t/p/w500/${props.img}` : `https://cdn1.iconfinder.com/data/icons/photo-editor-3/24/i24_photoedit_effects-512.png`} className="col-12" />
        <div>
          {(props)}
          <p>{title}</p>
          <p>{original_title}</p>
          <p>{runtime}</p>
          <p>Genres: {genres.map(e => <p>#{e.name}</p>)}</p>
          <p>{overview}</p>
        </div>
          <button
            className="Modal__close-button btn btn-default"
            onClick={props.closeModal}
          >
            X
          </button>
        </div>
      </div>,
      document.getElementById("modal")
    );
  }
}