import React from 'react';
import { Carousel, Container, Row } from 'react-bootstrap';
import user1 from '../../assets/user1.png';
import user2 from '../../assets/user2.png';
import user3 from '../../assets/user3.png';
import user4 from '../../assets/user4.jpg';

const Section6 = () => {
  return (
    <>
        <section className='blog_section'>
            <Container>
                <Row>
                <Carousel>
              <Carousel.Item>
                <Carousel.Caption>
                    <div className="user_img">
                        <img src={user1} className="img-fluid" alt="user1"/>
                    </div>
                    <p>William Shakespeare is listed as the best-selling fiction author of all time having sold between 2 – 4 billion copies. More impressive still, he did so whilst only releasing 42 different books.</p>
                    <div className='item_rating mb-2'>
                        <i className='bi bi-star-fill'></i>
                        <i className='bi bi-star-fill'></i>
                        <i className='bi bi-star-fill'></i>
                        <i className='bi bi-star-fill'></i>
                        <i className='bi bi-star-fill'></i>
                    </div>
                    <h5>By XYZ</h5>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Carousel.Caption>
                    <div className="user_img">
                        <img src={user2} className="img-fluid" alt="user2"/>
                    </div>
                    <p>William Shakespeare is listed as the best-selling fiction author of all time having sold between 2 – 4 billion copies. More impressive still, he did so whilst only releasing 42 different books.</p>
                    <div className='item_rating mb-2'>
                        <i className='bi bi-star-fill'></i>
                        <i className='bi bi-star-fill'></i>
                        <i className='bi bi-star-fill'></i>
                        <i className='bi bi-star-fill'></i>
                        <i className='bi bi-star-fill'></i>
                    </div>
                    <h5>By XYZ</h5>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Carousel.Caption>
                    <div className="user_img">
                        <img src={user3} className="img-fluid" alt="user3"/>
                    </div>
                    <p>William Shakespeare is listed as the best-selling fiction author of all time having sold between 2 – 4 billion copies. More impressive still, he did so whilst only releasing 42 different books.</p>
                    <div className='item_rating mb-2'>
                        <i className='bi bi-star-fill'></i>
                        <i className='bi bi-star-fill'></i>
                        <i className='bi bi-star-fill'></i>
                        <i className='bi bi-star-fill'></i>
                        <i className='bi bi-star-fill'></i>
                    </div>
                    <h5>By XYZ</h5>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Carousel.Caption>
                    <div className="user_img">
                        <img src={user4} className="img-fluid" alt="user4"/>
                    </div>
                    <p>William Shakespeare is listed as the best-selling fiction author of all time having sold between 2 – 4 billion copies. More impressive still, he did so whilst only releasing 42 different books.</p>
                    <div className='item_rating mb-2'>
                        <i className='bi bi-star-fill'></i>
                        <i className='bi bi-star-fill'></i>
                        <i className='bi bi-star-fill'></i>
                        <i className='bi bi-star-fill'></i>
                        <i className='bi bi-star-fill'></i>
                    </div>
                    <h5>By XYZ</h5>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Section6