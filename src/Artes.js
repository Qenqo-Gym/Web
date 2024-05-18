import React from 'react';
import { Link } from 'react-router-dom';
import './styles/artes.css';

function Artes() {
    const trainingOptions = [
        { id: 1, timesPerWeek: 2, price: 295, image: '/images/kick.png', description: 'KICKBOXING' },
        { id: 2, timesPerWeek: 3, price: 350, image: '/images/bjj.png', description: 'BJJ' }
    ];

    return (
        <div className="ninos">
            <h2>ARTES MARCIALES</h2>
            <div className="options-container">
                {trainingOptions.map((option) => (
                    <div key={option.id} className="option">
                        <img src={option.image} alt={`${option.description}`} className="option-image" />
                        <div className="option-details">
                            <h3 className="overlay">{option.description}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Artes;