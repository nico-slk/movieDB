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


	return (
		<div className="container">
			<div
				className="row he-100 bord align-items-start flex-column bd-highlight"
				style={{
					backgroundImage: `url("http://image.tmdb.org/t/p/w200/${props.img}")`,
					backgroundSize: "cover",
				}}
			>
				<p className="fs-6 fw-bold mt-2">{props.name}</p>
				<div>
					<button className="btn btn-success pt-auto " onClick={handleOpenModal}>
						More info
          			</button>
					<CloseModal
						closeModal={handleCloseModal}
						modalIsOpen={modalOpen.modalIsOpen}
						img={props.img}
					/>
				</div>
			</div>
		</div>
  );
}
