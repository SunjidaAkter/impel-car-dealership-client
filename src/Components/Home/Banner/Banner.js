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
                    <h3 className='carousel-h'>First slide label</h3>
                    <p className='carousel-p'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://demo.vehica.com/wp-content/uploads/2020/12/slide-2.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 className='carousel-h'>Second slide label</h3>
                    <p className='carousel-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://demo.vehica.com/wp-content/uploads/2020/12/slide-3.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 className='carousel-h'>Third slide label</h3>
                    <p className='carousel-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;