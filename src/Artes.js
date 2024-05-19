import React from 'react';
import Martialarts from './components/martialarts';
import './styles/martialarts.css';

function Artes() {
    return (
        <div className="App">
            <div className="container">
                <Martialarts
                    image="/images/bjj.png"
                    name="BJJ"
                    content={(
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{ flex: 1 }}>
                                <h3 className="title4">BJJ</h3>
                                <p className="title5">-S/.250,00 (POR PERSONA)<br />(2 VECES POR SEMANA)</p>
                                <p className="title5">-S/.350,00 (POR PERSONA)<br />(3 VECES POR SEMANA)</p>
                                <p className="title5">Horarios<br />(LUNES MIERCOLES VIERNES)<br />8:00PM a 9:00PM<br /></p>
                                <p className="title5">No aplica congelamiento Vigencia de 1 mes<br />*Incluye IGV<br />* 5% adicional por POS</p>
                                <button className="button-reservar">RESERVAR</button>
                            </div>
                            <div style={{ flex: 1, marginLeft: '20px' }}>
                                <video width="100%" height="auto" controls autoplay loop>
                                    <source src="/videos/qenqo1.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    )}
                />
                <Martialarts
                    image="/images/kick.png"
                    name="KICKBOXING"
                    content={(
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{ flex: 1 }}>
                                <h3 className="title4">KICKBOXING</h3>
                                <p className="title5">-S/.300,00 (POR PERSONA)<br />(2 VECES POR SEMANA)</p>
                                <p className="title5">-S/.350,00 (POR PERSONA)<br />(3 VECES POR SEMANA)</p>
                                <p className="title5">-S/.400,00 (POR PERSONA)<br />(+ 4 VECES POR SEMANA)</p>
                                <p className="title5">Horarios<br />KICKBOXING (LUNES A VIERNES)<br />9:00AM<br /></p>
                                <p className="title5">Horarios<br />BOXEO MUJERES (MARTES - JUEVES)<br />5:00PM<br /></p>
                                <p className="title5">Horarios<br />BOXEO MIXTO (SABADOS)<br />9:00AM<br /></p>
                                <p className="title5">No aplica congelamiento Vigencia de 1 mes<br />*Incluye IGV<br />* 5% adicional por POS</p>
                                <button className="button-reservar">RESERVAR</button>
                            </div>
                            <div style={{ flex: 1, marginLeft: '20px' }}>
                                <video width="100%" height="auto" controls autoplay loop>
                                    <source src="/videos/qenqo1.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    )}
                />
            </div>
        </div>
    );
}

export default Artes;