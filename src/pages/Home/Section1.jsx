import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Burger from '../../assets/burger1.png'
import { Link } from 'react-router-dom'

const Section1 = () => {
  return (
    <section className='hero_section'>
        <Container>
            <Row>
                <Col lg={7} className='mb-5 mb-lg-0'>
                    <div className='position:relative'>
                        <img src={Burger} alt='Hero' className='img-fluid'/>
                        <div className='price_badge'>
                            <div className='badge_text'>
                                <h4 className='h4_xs'>Only</h4>
                                <h4 className='h3_lg'>RS:400</h4>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={5}>
                    <div className='hero_text text-center'>
                        <h1 className='text-white'>Newn Burger</h1>
                        <h2 className='text-white'>With Onion</h2>
                        <p className='text-white pt-2 pb-4'>Cheeseburger Whopper Veggie burger Hamburger Buffalo burger, burger king, food, cheese</p>
                        <Link to={'/'} className='btn order_now'>Order Now</Link>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Section1