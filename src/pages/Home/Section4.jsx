import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Promotion from '../../assets/promotion.jpg';
const Section4 = () => {
  return (
    <>
      <section className='promotion_section'>
        <Container>
          <Row className='align-items-center'>
            <Col lg={6} className='text-center mb-5 mb-lg-0'>
              <img src={Promotion} className='img-fluid' alt='Promotion'/>
            </Col>
            <Col lg={6} className='px-5'>
              <h2>Nothing brings together like a good burger</h2>
              <p>Advertising is a form of communication that attempts to influence the behavior of a defined target audience. Any message developed and placed with the ultimate intention of persuading a group to take a specific action (such as buying a product) can be considered an ad</p>
              <ul>
                <li>
                  <p>Advertising design is the intersection of marketing and design. It refers to the visual artwork created specifically for advertisements</p>
                </li>
                <li>
                  <p>Ad design, which is usually used synonymously with graphic design advertising</p>
                </li>
                <li>
                  <p>Advertising design is the intersection of marketing and design. It refers to the visual artwork created specifically for advertisements (or, simply, “ads”). Ad design, which is usually used synonymously with graphic design advertising, differs in the fact that its sole purpose is to sell products and services.</p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* BG Parallax Scroll */}
      <section className='bg_parallax_scroll'></section> 
    </>
  )
}

export default Section4