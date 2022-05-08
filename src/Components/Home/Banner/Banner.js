import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://demo.vehica.com/wp-content/uploads/2020/12/slide-1.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className='carousel-h font'>Find Your Perfect Car</h3>
                    <p className='carousel-p'>Accelerate your dream. Buy your car from IMPEL car dealer.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://demo.vehica.com/wp-content/uploads/2020/12/slide-2.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 className='carousel-h font'>Find Your Perfect Car</h3>
                    <p className='carousel-p'>Accelerate your dream. Buy your car from IMPEL car dealer.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://demo.vehica.com/wp-content/uploads/2020/12/slide-3.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 className='carousel-h font'>Find Your Perfect Car</h3>
                    <p className='carousel-p'>Accelerate your dream. Buy your car from IMPEL car dealer.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;