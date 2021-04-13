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
        <div className="data m-3">
          <p className="fs-4 fw-bold mt-4 mb-1" >Title: </p><p className="fs-5 mb-0 ml-3">{title}</p> <hr />
          <p className="fw-bold mt-4 mb-1" >Original title: </p><p  className="fs-5 mb-0 ml-3 fst-italic">{original_title}</p> <hr />
          <p className="fw-bold mt-4 mb-1" >Runtime: </p><p  className="fs-5 mb-0 ml-3 fw-light">{runtime} min</p> <hr />
          <p className="fw-bold mt-4 mb-1" >Genres: </p><p  className="fs-5 mb-0 ml-3">{genres.map(e => <p className="fs-5 mb-0 fst-italic" key={props.id + e.name}>#{e.name}</p>)}</p> <hr />
          <p className="fw-bold mt-4 mb-1" >Overview: </p><p  className="fs-5 mb-0 ml-3 fw-light">{overview}</p>
        </div>
          <button
            className="Modal__close-button btn btn-default"
            onClick={props.closeModal}
          >
            X
          </button>
          {props.children}
        </div>
      </div>,
      document.getElementById("modal")
    );
  }
}