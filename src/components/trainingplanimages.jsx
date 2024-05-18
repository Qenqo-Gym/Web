
import React, { useState } from 'react';
import Modal from './modal';
import '../styles/trainingplanimages.css';

const TrainingPlan = ({ image, name, content }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div className="training-plan">
      <img src={image} alt={name} onClick={openModal} />
      <div className="overlay" onClick={openModal}>{name}</div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} content={content} />
    </div>
  );
};

export default TrainingPlan;
