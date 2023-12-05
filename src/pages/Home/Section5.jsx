import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import andriod from "../../assets/andriod.png";
import ios from "../../assets/ios.png";
import shop from "../../assets/shop.png";
import brand1 from '../../assets/brand1.png';
import brand2 from '../../assets/brand2.png';
import brand3 from '../../assets/brand3.png';
import brand4 from '../../assets/brand4.png';
import brand5 from '../../assets/brand5.png';
import brand6 from '../../assets/brand6.png';
import brand7 from '../../assets/brand7.png';
import brand8 from '../../assets/brand8.png';

const Section5 = () => {
  return (
    <>
      <section className="shop_section">
        <Container>
          <Row className="align-item-center">
            <Col className="text-center text-lg-start mb-5 mb-lg-0">
              <h4>Download Mobile App &</h4>
              <h2>save upto 20%</h2>
              <p>
                Advertising burgers aren't like restaurant burgers. When burger
                patties are lightly roasted, they stay raw.
              </p>
              <Link to="/">
                <img src={andriod} alt="Andriod" className="img-fluid store me-3" />
              </Link>
              <Link to="/">
                <img src={ios} alt="IOS" className="img-fluid store me-3" />
              </Link>
            </Col>
            <Col lg={6}>
              <img src={shop} alt="e-shop" className="img-fluid e-shop" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="brad_section">
        <Container>
          <Row>
            <Carousel>
              <Carousel.Item>
                <Carousel.Caption>
                  <div className="d-flex align-items-center jusitify-content-between">
                    <div className="brand_img">
                        <img src={brand1} className="img-fluid" alt="brand1"/>
                    </div>
                    <div className="brand_img">
                        <img src={brand2} className="img-fluid" alt="brand2"/>
                    </div>
                    <div className="brand_img">
                        <img src={brand3} className="img-fluid" alt="brand3"/>
                    </div>
                    <div className="brand_img">
                        <img src={brand4} className="img-fluid" alt="brand4"/>
                    </div>
                    <div className="brand_img">
                        <img src={brand5} className="img-fluid" alt="brand5"/>
                    </div>
                    <div className="brand_img">
                        <img src={brand6} className="img-fluid" alt="brand6"/>
                    </div>
                    <div className="brand_img">
                        <img src={brand7} className="img-fluid" alt="brand7"/>
                    </div>
                    <div className="brand_img">
                        <img src={brand8} className="img-fluid" alt="brand8"/>
                    </div>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <Carousel.Caption>
                  <div className="d-flex align-items-center jusitify-content-between">
                    <div className="brand_img">
                        <img src={brand3} className="img-fluid" alt="brand3"/>
                    </div>
                    <div className="brand_img">
                        <img src={brand4} className="img-fluid" alt="brand4"/>
                    </div>
                    <div className="brand_img">
                        <img src={brand5} className="img-fluid" alt="brand5"/>
                    </div>
                    <div className="brand_img">
                        <img src={brand6} className="img-fluid" alt="brand6"/>
                    </div>
                    <div className="brand_img">
                        <img src={brand7} className="img-fluid" alt="brand7"/>
                    </div>
                    <div className="brand_img">
                        <img src={brand8} className="img-fluid" alt="brand8"/>
                    </div>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Section5;
