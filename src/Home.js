import './styles/App.css';

function Home() {
    return (
        <div className="App snap-container">
          {/* Sección Hero */}
          <div className="hero-section section " id="home">
            <div>
              <img src="/images/logo.png" alt="Logo" className="logo"
              style={
                {
                  position: 'absolute',
                  objectFit: 'cover',
                  zIndex: '2'
                }
              }
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
              <h1 className='title2'>"Empieza <br></br> el cambio"</h1>
              
            </div>
            <div className="form-container">
              <form>
                <input type="text" placeholder="Nombres" />
                <input type="text" placeholder="Apellidos" />
                <input type="text" placeholder="Dni" />
                <input type="text" placeholder="Correo/Número" />
                <select>
                  <option>Tipo de consulta</option>
                  <option>Personalizado</option>
                  <option>Grupal 3 clases de prueba gratis</option>
                </select>
                <textarea placeholder="Déjanos un mensaje"></textarea>
                <button type="submit">Consultar</button>
              </form>
            </div>
          </section>
        </div>
      );
}
export default Home