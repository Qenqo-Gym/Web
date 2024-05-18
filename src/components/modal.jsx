import React from 'react';
import ReactModal from 'react-modal';
import "../styles/modal.css";
ReactModal.setAppElement('#root');

const Modal = ({ isOpen, onRequestClose, content }) => {
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="Modal"
            overlayClassName="Overlay"
        >
            <button onClick={onRequestClose} className="close-button">X</button>
            <div className="modal-content">
                {content}
            </div>
        </ReactModal>
    );
};
export default Modal;