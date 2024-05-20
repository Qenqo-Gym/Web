import React from 'react';
import TrainingPlan from './components/trainingplanimages';
import './styles/trainingplan.css';

const Training = () => {
    return (
        <div className="App">
            <div className="container">
                <TrainingPlan
                    image="/images/service1.jpg"
                    name="INTIHUA"
                    content={(
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{ flex: 2 }}>
                                <h3 className="title4">PLAN INTIHUA</h3>
                                <p className="title5">S/.295,00 (POR PERSONA)<br />(3 VECES POR SEMANA + 1 GUÍA NUTRICIONAL)</p>
                                <p className="title5">S/.350,00 (POR PERSONA)<br />(5 VECES POR SEMANA + 1 GUÍA NUTRICIONAL)</p>
                                <p className="title5">Horarios<br />(LUNES A VIERNES)<br />5:00AM a 8:00AM<br />6:00AM a 8:00PM</p>
                                <p className="title5">No aplica congelamiento Vigencia de 1 mes<br />*Incluye IGV<br />* 5% adicional por POS</p>
                                <button className="button-reservar">RESERVAR</button>
                            </div>
                            <div className='video' style={{ flex: 1, marginLeft: '20px' }}>
                                <video controls autoplay loop>
                                    <source src="/videos/qenqo1.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    )}
                />
                <TrainingPlan
                    image="/images/service2.jpg"
                    name="ANTISUYO"
                    content={(
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{ flex: 1 }}>
                                <h2>PLAN ANTISUYO</h2>
                                <p>S/.295,00 (POR PERSONA)<br />(3 VECES POR SEMANA + 1 GUÍA NUTRICIONAL)</p>
                                <p>S/.350,00 (POR PERSONA)<br />(5 VECES POR SEMANA + 1 GUÍA NUTRICIONAL)</p>
                                <p>Horarios<br />(LUNES A VIERNES)<br />5:00AM a 8:00AM<br />6:00AM a 8:00PM</p>
                                <p>No aplica congelamiento Vigencia de 1 mes<br />*Incluye IGV<br />* 5% adicional por POS</p>
                                <button className="button-reservar">RESERVAR</button>
                            </div>
                            <div className='video' style={{ flex: 1, marginLeft: '20px' }}>
                                <video width="100%" height="auto" controls autoplay loop>
                                    <source src="/videos/qenqo1.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    )}
                />
                <TrainingPlan
                    image="/images/service3.jpg"
                    name="QENQO"
                    content={(
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{ flex: 1 }}>
                                <h3>PLAN QENQO</h3>
                                <p>S/.295,00 (POR PERSONA)<br />(3 VECES POR SEMANA + 1 GUÍA NUTRICIONAL)</p>
                                <p>S/.350,00 (POR PERSONA)<br />(5 VECES POR SEMANA + 1 GUÍA NUTRICIONAL)</p>
                                <p>Horarios<br />(LUNES A VIERNES)<br />5:00AM a 8:00AM<br />6:00AM a 8:00PM</p>
                                <p>No aplica congelamiento Vigencia de 1 mes<br />*Incluye IGV<br />* 5% adicional por POS</p>
                                <button className="button-reservar">RESERVAR</button>
                            </div>
                            <div className='video' style={{ flex: 1, marginLeft: '20px' }}>
                                <video width="100%" height="auto" controls autoplay loop>
                                    <source src="/videos/qenqo1.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    )}
                />
                <TrainingPlan
                    image="/images/service4.jpg"
                    name="PUMA"
                    content={(
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{ flex: 1 }}>
                                <h2>PLAN PUMA</h2>
                                <p>S/.295,00 (POR PERSONA)<br />(3 VECES POR SEMANA + 1 GUÍA NUTRICIONAL)</p>
                                <p>S/.350,00 (POR PERSONA)<br />(5 VECES POR SEMANA + 1 GUÍA NUTRICIONAL)</p>
                                <p>Horarios<br />(LUNES A VIERNES)<br />5:00AM a 8:00AM<br />6:00AM a 8:00PM</p>
                                <p>No aplica congelamiento Vigencia de 1 mes<br />*Incluye IGV<br />* 5% adicional por POS</p>
                                <button className="button-reservar">RESERVAR</button>
                            </div>
                            <div className='video' style={{ flex: 1, marginLeft: '20px' }}>
                                <video width="100%" height="auto" controls autoplay loop>
                                    <source src="/videos/qenqo1.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    )}
                />
                <TrainingPlan
                    image="/images/service5.jpg"
                    name="FORTALEZA"
                    content={(
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{ flex: 1 }}>
                                <h2>PLAN FORTALEZA</h2>
                                <p>S/.295,00 (POR PERSONA)<br />(3 VECES POR SEMANA + 1 GUÍA NUTRICIONAL)</p>
                                <p>S/.350,00 (POR PERSONA)<br />(5 VECES POR SEMANA + 1 GUÍA NUTRICIONAL)</p>
                                <p>Horarios<br />(LUNES A VIERNES)<br />5:00AM a 8:00AM<br />6:00AM a 8:00PM</p>
                                <p>No aplica congelamiento Vigencia de 1 mes<br />*Incluye IGV<br />* 5% adicional por POS</p>
                                <button className="button-reservar">RESERVAR</button>
                            </div>
                            <div className='video' style={{ flex: 1, marginLeft: '20px' }}>
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
};

export default Training;
