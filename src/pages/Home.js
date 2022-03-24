import React, { useState } from 'react';
import {Container, Carousel, Button, Stack} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';
import promo1 from '../images/promo1.jpg';
import promo2 from '../images/promo2.jpg';
import promo3 from '../images/promo3.jpg';

export default function Home() {
    
   
        const [index, setIndex] = useState(0);
      
        const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
        }


  return (

      <Container className='my-3'>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={promo1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Best Sellers</h3>
          <p>Pieces that speak for themselves.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={promo2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Luxury in Each Detail</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={promo3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Superior Fit and Function</h3>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
    <Stack className=" col-md-3 mx-auto my-2" >
    <LinkContainer to={"/store"}><Button variant="primary">View Store</Button></LinkContainer>
      
    </Stack>
    
    </Container>
 
    
  )
}

