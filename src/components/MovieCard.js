import React, { useState } from "react";
import CloseModal from "./Modals/CloseModal";

export default function MovieCard(props) {
  const [modalOpen, setModalOpen] = useState({
    modalIsOpen: false,
  });

  const handleCloseModal = () => {
    setModalOpen({ modalIsOpen: false });
  };

  const handleOpenModal = () => {
    setModalOpen({ modalIsOpen: true });
  };

  const style = {
    backgroundImage: props.img
      ? `url("http://image.tmdb.org/t/p/w300/${props.img}")`
      : `url("https://cdn1.iconfinder.com/data/icons/photo-editor-3/24/i24_photoedit_effects-512.png")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100%",
  };

  return (
    <div className="heightCard">
      <div className="whiteTape heightCard">
        <div
          style={style}
          className="shadow mb-5 bg-body rounded animate__animated animate__fadeIn boxes"
        >
          <div className="box">
            <p className="text-white title_name fw-bold">{props.title}</p>
            <button className="btn btn-info boton" onClick={handleOpenModal}>
              More info
            </button>
            <CloseModal
              closeModal={handleCloseModal}
              modalIsOpen={modalOpen.modalIsOpen}
              img={props.img}
              id={props.id}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
