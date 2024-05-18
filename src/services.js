import './styles/services.css';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
function Services() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
    };
    const images = [
        { id: 1, src: '/images/open_gym.jpg', alt: 'Planes de Entrenamiento', title: 'PLANES DE ENTRENAMIENTO', url: "/planes-de-entrenamiento" },
        { id: 2, src: '/images/artes_marciales.jpg', alt: 'Artes Marciales', title: 'ARTES MARCIALES', url: "/artes-marciales" },
        { id: 3, src: '/images/img2aboutus.jpg', alt: 'Open Gym', title: 'OPEN GYM', url: "/open-gym" },
        { id: 4, src: '/images/niños.jpg', alt: 'Niños', title: 'NIÑOS', url: "/ninos" },
        { id: 5, src: '/images/nutricion.jpg', alt: 'Nutrición', title: 'NUTRICIÓN', url: "/nutricion" },
    ];

    return (
        <div>
            <section className="services section" id="servicios">
                <h2>SERVICIOS</h2>
                <h3>CENTRO DE PREPARACIÓN FÍSICA Y NUTRICIÓN</h3>
                <Slider {...settings}>
                    {images.map((image) => (
                        <div key={image.id} className="carousel-slide">
                            <Link to={image.url}>
                                <div className="image-container">
                                    <img src={image.src} alt={image.alt} className="carousel-image" />
                                    <h3>{image.title}</h3>
                                </div>
                            </Link>
                        </div>
                    ))}
                </Slider>
            </section>
        </div>
    )
}

export default Services