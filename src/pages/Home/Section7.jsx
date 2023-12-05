import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Section7 = () => {
  return (
    <>
        <section className='contact_section'>
            <Container>
                <Row className='justify-content-center'>
                    <Col sm={8} className='text-center'>
                        <h4>We Guarantee</h4>
                        <h2>30 Minutes Delivery</h2>
                        <p>You don’t have to use React Bootstrap together with React but it is a popular library for integrating Bootstrap with React apps. If you need it, you can integrate it with Create React App by following these steps</p>
                        <Link to='/' className='btn_red px-4 py-2 rounded-0'>
                            Call: 777-888-999
                        </Link>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Section7