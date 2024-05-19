import React from 'react';
import { Link } from 'react-router-dom';
import './styles/nutricion.css';

function Nutricion() {
    return (
        <div className="nutricion" style={{ backgroundImage: "url('/images/Nutricion.jpg')" }}>
            <h2>Nutrición</h2>  {/* Asegurarse de que el título está fuera del contenedor de detalles */}
            <div className="details-container">
                <h3>Plan de Alimentación Mensual: S/.200,00</h3>
                <h1 >-Se envía una semana de menú el cual cambia mensualmente</h1>
                <h1>-Incluye 4 evaluaciones semanales</h1>
                <h3>Plan de Alimentación Quincenal:: S/.300,00</h3>
                <h1 >-Se te envía una semana de menú el cual cambia cada dos semanas</h1>
                <h1>-Incluye 4 evaluaciones semanales</h1>
                <h3>Plan de Alimentación Semanal:: S/.400,00</h3>
                <h1 >-Se te envía una semana de menú el cual cambia cada semana</h1>
                <h1>-Incluye 4 evaluaciones semanales</h1>
                <h3>Evaluación Antropométrica: S/.40,00</h3>
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

export default Nutricion;

