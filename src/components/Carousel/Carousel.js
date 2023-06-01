import React from 'react';
import { Carousel } from 'react-bootstrap';

const MyCarousel = () => {
    return (
        <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://source.unsplash.com/random/?library"
            alt="First slide"
            height={400}
            fluid
            />
            <Carousel.Caption>
            <h3>Slide 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://source.unsplash.com/random/?books"
            alt="Second slide"
            height={400}
            fluid
            />
            <Carousel.Caption>
            <h3>Slide 2</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://source.unsplash.com/random/?reading"
            alt="Third slide"
            height={400}
            fluid
            />
            <Carousel.Caption>
            <h3>Slide 3</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    );
}

export default MyCarousel;
