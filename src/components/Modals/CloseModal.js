import React from "react";
import MovieModal from "./MovieModal";

export default function CloseModal(props) {
  return (
    <MovieModal 
      closeModal={props.closeModal} 
      modalIsOpen={props.modalIsOpen}
      img={props.img}
      id={props.id}
    >
    </MovieModal>
  );
}