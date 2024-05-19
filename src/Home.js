// import './styles/App.css';

// function Home() {
//     return (
//         <div className="App snap-container">
//           {/* Sección Hero */}
//           <div className="hero-section section " id="home">
//             <div>
//               <img src="/images/logo.png" alt="Logo" className="logo"
//               style={
//                 {
//                   position: 'absolute',
//                   objectFit: 'cover',
//                   zIndex: '2'
//                 }
//               }
//               />
//             </div>
//             <div>
//               <h1 className='title1'>"El resultado de tu entrenamiento</h1>
//               <h1 className='title2'>se ve en base a tu esfuerzo,</h1>
//               <h1 className='title1'>mótivate a superarte"</h1>
//             </div>
//           </div>
//           {/* Sección Contacto */}
//           <section className="contact section" id="contacto">
//           <div>
//               <h1 className='title2'>"Empieza <br></br> el cambio"</h1>
              
//             </div>
//             <div className="form-container">
//               <form>
//                 <input type="text" placeholder="Nombres" />
//                 <input type="text" placeholder="Apellidos" />
//                 <input type="text" placeholder="Dni" />
//                 <input type="text" placeholder="Correo/Número" />
//                 <select>
//                   <option>Tipo de consulta</option>
//                   <option>Personalizado</option>
//                   <option>Grupal 3 clases de prueba gratis</option>
//                 </select>
//                 <textarea placeholder="Déjanos un mensaje"></textarea>
//                 <button type="submit">Consultar</button>
//               </form>
//             </div>
//           </section>
//         </div>
//       );
// }
// export default Home

import React, { useState } from 'react';
import { sendWhatsapp } from './Functions';
import './styles/App.css';

function Home() {
    const [formData, setFormData] = useState({
        nombres: '',
        apellidos: '',
        dni: '',
        correoNumero: '',
        tipoConsulta: '',
        mensaje: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const whatsappMessage = `Hola, me gustaría hacer una consulta.
        Nombres: ${formData.nombres}
        Apellidos: ${formData.apellidos}
        DNI: ${formData.dni}
        Correo/Número: ${formData.correoNumero}
        Tipo de consulta: ${formData.tipoConsulta}
        Mensaje: ${formData.mensaje}`;

        sendWhatsapp('+51929838957', whatsappMessage);
        
    };

    return (
        <div className="App snap-container">
            {/* Sección Hero */}
            <div className="hero-section section" id="home">
                <div>
                    <img src="/images/logo.png" alt="Logo" className="logo"
                        style={{
                            position: 'absolute',
                            objectFit: 'cover',
                            zIndex: '2'
                        }}
                    />
                </div>
                <div>
                    <h1 className='title1'>"El resultado de tu entrenamiento</h1>
                    <h1 className='title2'>se ve en base a tu esfuerzo,</h1>
                    <h1 className='title1'>mótivate a superarte"</h1>
                </div>
            </div>
            {/* Sección Contacto */}
            <section className="contact section" id="contacto">
                <div>
                    <h1 className='title2'>"Empieza <br /> el cambio"</h1>
                </div>
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="nombres" placeholder="Nombres" value={formData.nombres} onChange={handleChange} />
                        <input type="text" name="apellidos" placeholder="Apellidos" value={formData.apellidos} onChange={handleChange} />
                        <input type="text" name="dni" placeholder="Dni" value={formData.dni} onChange={handleChange} />
                        <input type="text" name="correoNumero" placeholder="Correo/Número" value={formData.correoNumero} onChange={handleChange} />
                        <select name="tipoConsulta" value={formData.tipoConsulta} onChange={handleChange}>
                            <option value="">Tipo de consulta</option>
                            <option value="Personalizado">Personalizado</option>
                            <option value="Grupal 3 clases de prueba gratis">Grupal 3 clases de prueba gratis</option>
                        </select>
                        <textarea name="mensaje" placeholder="Déjanos un mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                        <button type="submit">Consultar</button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Home;
