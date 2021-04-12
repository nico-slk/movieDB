import React, { useState } from 'react'
import CloseModal from './Modals/CloseModal'

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
    return (
        <div className="container">
            <div className="row">
                <img src={`http://image.tmdb.org/t/p/w200/${props.img}`} />
                <h3>{props.name}</h3>
                <button className="btn btn-success" onClick={handleOpenModal}>
                More info
                </button>
                <CloseModal
                    closeModal={handleCloseModal}
                    modalIsOpen={modalOpen.modalIsOpen}
                    img={props.img}
                    />
            </div>
        </div>
    )
}
