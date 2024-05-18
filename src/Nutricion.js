import React from 'react';
import { Link } from 'react-router-dom';
import './styles/ninos.css';

function Ninos() {
    const trainingOptions = [
        { id: 1, timesPerWeek: 2, price: 295, image: '/images/nino2.png', description: '2 veces por semana' },
        { id: 2, timesPerWeek: 3, price: 350, image: '/images/ninos3.png', description: '3 veces por semana' }
    ];

    return (
        <div className="ninos">
            <h2>KIDS</h2>
            <div className="options-container">
                {trainingOptions.map((option) => (
                    <div key={option.id} className="option">
                        <img src={option.image} alt={`${option.description}`} className="option-image" />
                        <div className="option-details">
                            <h3>{option.description}</h3>
                            <p>S/{option.price}.00 (por persona)</p>
                            <Link to="/reservar" className="reserve-button">Reservar</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Ninos;

