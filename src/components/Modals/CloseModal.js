import React from "react";
import MovieModal from "./MovieModal";

export default function CloseModal(props) {
  return (
    <MovieModal 
      closeModal={props.closeModal} 
      modalIsOpen={props.modalIsOpen}
      img={props.img}
    >
      <button onClick={props.handleAlert} className="btn btn-danger">
        Delete
      </button>
      <button onClick={props.closeModal} className="btn btn-primary">
        Cancel
      </button>
    </MovieModal>
  );
}