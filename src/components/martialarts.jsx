
import React, { useState } from 'react';
import Modal from './modal';
import '../styles/martialarts.css';

const Martialarts = ({ image, name, content }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div className="martial-arts">
      <img src={image} alt={name} onClick={openModal} />
      <div className="overlay" onClick={openModal}>{name}</div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} content={content} />
    </div>
  );
};

export default Martialarts;
