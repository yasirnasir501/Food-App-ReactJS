import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pizza from '../../assets/pizza.png';
import Salad from '../../assets/salad.png';
import Delivery from '../../assets/delivery.png';

const Section2 = () => {

    const mockData = [
        {image: Pizza, title: 'Original', paragraph: `A hamburger, or simply burger, is a food consisting of fillings—usually a patty of ground meat, typically beef—placed inside a sliced bun or bread roll.`},
        {image: Salad, title: 'Quality Food', paragraph: `A hamburger, or simply burger, is a food consisting of fillings—usually a patty of ground meat, typically beef—placed inside a sliced bun or bread roll.`},
        {image: Delivery, title: 'Fastest Delivery', paragraph: `A hamburger, or simply burger, is a food consisting of fillings—usually a patty of ground meat, typically beef—placed inside a sliced bun or bread roll.`},
    ]

  return (
    <>
    <section className='about_section'>
        <Container>
            <Row>
                <Col lg={{span: 8, offset: 2}}>
                    <h2>The burger tastes better when you eat it with your family</h2>
                    <p>A burger is a patty of ground beef grilled and placed between two halves of a bun. Slices of raw onion, lettuce, bacon, mayonnaise, and other ingredients add flavor. Burgers are considered an American food but are popular around the world. In Japan, teriyaki burgers are popular.</p>
                    <Link to='/' className='order_now btn_red'>Explore Full Menu</Link>
                </Col>
            </Row>
        </Container>
    </section>
    
    <section className='about_wrapper'>
        <Container>
            <Row className='justify-content-md-center'>
                {mockData.map((cardData, index) => (
                    <Col md={6} lg={4} className='mb-4 mb-md-0' key={index}>
                        <div className='about_box text-center'>
                            <div className='about_icon'>
                                <img src={cardData.image} className='img-fluid' alt='icon'/>
                            </div>
                            <h4>{cardData.title}</h4>
                            <p>{cardData.paragraph}</p>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    </section>
    </>
  )
};

export default Section2;