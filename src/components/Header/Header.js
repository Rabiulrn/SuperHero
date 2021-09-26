import React from 'react';
import logo from '../../image/image.jpg'
import logo1 from '../../image/image2.jpg'
import logo2 from '../../image/image3.jpg'
import './Header.css'
const Header = () => {
    return (
        <div>
            <div id="carouselExampleCaptions container c-size" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={logo} className="d-block w-100 tree" alt="..."></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className="quote">“If you have a garden and a library, you have everything you need. ”
Marcus Tullius Cicero</h5>
                            <p></p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='img-size'>
                        <img src={logo2} className="d-block w-100 tree" alt="..."></img>
                        </div>
                        
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className="quote">Gardening is how I relax. It’s another form of creating and playing with colors.</h5>
                            <p></p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={logo1} className="d-block w-100 tree" alt="..."></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className="quote">Gardening is how I relax. It’s another form of creating and playing with colors.</h5>
                            <p></p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Header;