import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {

  // Start Scroll To Top Button 

  const [isVisible, setIsVisible] = useState(false);
  
  const scrollTop  = () => {
    
    window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
} 

const listenToScroll = () => {
  let heightToHidden = 250;
  const windowScroll = document.body.scrollTop  || document.documentElement.scrollTop ;

  windowScroll > heightToHidden ? setIsVisible(true) : setIsVisible(false);
}

useEffect(() => {
  window.addEventListener('scroll', listenToScroll);
})

 // End Scroll To Top Button 

  return (
    <>
    <footer>
      <Container>
        <Row>
          <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
            <div className='text-center'>
              <h5>Location</h5>
              <p>550555 WaterFord District</p>
              <p>Dr, Pakistan, G#403</p>
              <p>Pakistan</p>
            </div>
          </Col>
          <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
            <div className='text-center'>
              <h5>Working Hours</h5>
              <p>Mon-Fri: 9:00AM - 10:00PM</p>
              <p>Saturday: 10:00AM - 8:50PM</p>
              <p>Sunday: 12:00AM - 6:50PM</p>
            </div>
          </Col>
          <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
            <div className='text-center'>
              <h5>Order Now</h5>
              <p>Quaerat newoi purus kosdjfk</p>
              <p><Link to='tel:777-888-999' className='calling'>777-888-999</Link></p>
            </div>
          </Col>
          <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
            <div className='text-center'>
              <h5>Follow US</h5>
              <p>Quaerat newoi purus kosdjfk</p>
              <ul className='list-unstyled text-center mt-2'>
                <li><Link to='/'><i className='bi bi-facebook'></i></Link></li>
                <li><Link to='/'><i className='bi bi-instagram'></i></Link></li>
                <li><Link to='/'><i className='bi bi-twitter'></i></Link></li>
                <li><Link to='/'><i className='bi bi-youtube'></i></Link></li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row className='copy_right'>
          <Col>
          <div>
            <ul className='list-unstyled text-center mb-0'>
              <li>
                <Link to='/'>
                  © 2023 <span> YASIRNASIR501@gmail.com</span> All Rights Reserved
                </Link>
              </li>
              <li>
                <Link to='/'>
                 About Us
                </Link>
              </li>
              <li>
                <Link to='/'>
                  Terms Of Use
                </Link>
              </li>
              <li>
                <Link to='/'>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          </Col>
        </Row>
      </Container>
    </footer>

    {/* Scroll On Top */}
    {isVisible && (
    <div className='scroll_top' onClick={scrollTop }>
    <i class="bi bi-arrow-up"></i>
    </div>
    )
    }
    </>
     
  )
}

export default Footer