import React from 'react';
import './Banner.css';
import { Carousel, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <Container fluid className="px-0 mt-5">
                        <Carousel fade>
                            <Carousel.Item>
                                <img
                                className="d-block w-100 height"
                                src="https://demo.bosathemes.com/html/travele/assets/images/slider-banner-1.jpg"
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                <h1 className="banner-title-design">TRAVELLING AROUND <br />THE WORLD</h1>
                                <NavLink className="btn btn-light text-dark mb-5" to="/login">Book Now</NavLink>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100 height"
                                src="https://demo.bosathemes.com/html/travele/assets/images/slider-banner-2.jpg"
                                alt="Second slide"
                                />

                                <Carousel.Caption>
                                <h1 className="banner-title-design">EXPERIENCE THE <br />NATURE'S BEAUTY</h1>
                                <NavLink className="btn btn-light text-dark mb-5" to="/login">Book Now</NavLink>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Container>
        </div>
    );
};

export default Banner;