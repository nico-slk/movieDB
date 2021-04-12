import React from "react";
import ReactDOM from "react-dom";

export default function MovieModal(props) {
  if (!props.modalIsOpen) {
    return null;
  } else {
    return ReactDOM.createPortal(
      <div className="Modal-FONDO">
        <div className="Modal-VENTANA ">
        <img src={`http://image.tmdb.org/t/p/w500/${props.img}`} className="col-12" />
          <button
            className="Modal__close-button btn btn-default"
            onClick={props.closeModal}
          >
            Close
          </button>
          {props.children}
        </div>
      </div>,
      document.getElementById("modal")
    );
  }
}