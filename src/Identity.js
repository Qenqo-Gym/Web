import './styles/App.css';

function Identity() {
    return (
        <div className="App snap-container">
          {/* Sección Quiénes Somos */}
          <section className="about-us section" id="quienes-somos">
            <div className='text'>
              <h2 className='title2'>IDENTIDAD QENQO </h2>
              <p className='title3'>Ayudamos a potenciar tu performance, desarrollar tu fuerza y exigirte en cada entrenamiento para llegar
                a tu máximo nivel físico y mental, trabajando en base a la pirámide de rendimiento usando regresiones y progresiones.</p>
            </div>
            <div className='img'>
              <img src="/images/img1aboutus.jpg" alt="img1aboutus" className="imgaboutus1" />
              <img src="/images/img2aboutus.jpg" alt="img2aboutus" className="imgaboutus2" />
            </div>
          </section>
        </div>
      );
}
export default Identity