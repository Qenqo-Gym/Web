import React from 'react';
import { Link } from 'react-router-dom';
import './styles/opengym.css';

function OpenGym() {
    return (
        <div className="opengym" style={{ backgroundImage: "url('/images/opengym.png')" }}>
            <h2>OPEN GYM</h2>  {/* Asegurarse de que el título está fuera del contenedor de detalles */}
            <div className="details-container">
                <p className="highlight">¡Realiza tu rutina en nuestra fortaleza!</p>
                <p >ABRIMOS PUERTAS de LUNES a VIERNES de 10AM a 5PM</p>
                <p >INSCRÍBETE POR S/.150,00 (por persona)</p>
                <li>Este servicio NO cuenta con asistencia de un entrenador</li>
                <li>Tiempo máximo 60min a 90min</li>
                <li>No aplica congelamiento. Vigencia 1 mes</li>
                <li>Incluye IGV</li>
                <li>5% adicional por POS</li>
                <Link to="/reservar" className="reserve-button">Reservar</Link>
            </div>
            <div className="video-container">
                    <video autoPlay loop muted>
                        <source src="/videos/qenqo1.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
        </div>
        
    );
}

export default OpenGym;

