import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Image1 from '../../assets/burger11.jpg';
import Image2 from '../../assets/burger2.jpg';
import Image3 from '../../assets/burger3.jpg';
import Image4 from '../../assets/burger4.jpg';
import Image5 from '../../assets/burger5.jpg';
import Image6 from '../../assets/burger6.jpg';
import Image7 from '../../assets/burger7.jpg';
import Image8 from '../../assets/burger8.jpg';
import Cards from '../../components/Layouts/Cards';
import { Link } from 'react-router-dom';

const Section3 = () => {
    
    const mockData = [
        {
            id: '0001',
            image: Image1,
            title: 'Crispy Chicken',
            paragraph:'Chicken Breast, Chilli Sauce, Tomatos, Pickles, Coleslaw',
            rating: 5,
            price: 99.15,
        },
        {
            id: '0002',
            image: Image2,
            title: 'Crispy Chicken',
            paragraph:'Chicken Breast, Chilli Sauce, Tomatos, Pickles, Coleslaw',
            rating: 4,
            price: 91.15,
        },
        {
            id: '0003',
            image: Image3,
            title: 'Crispy Chicken',
            paragraph:'Chicken Breast, Chilli Sauce, Tomatos, Pickles, Coleslaw',
            rating: 3,
            price: 94.15,
        },
        {
            id: '0004',
            image: Image4,
            title: 'Crispy Chicken',
            paragraph:'Chicken Breast, Chilli Sauce, Tomatos, Pickles, Coleslaw',
            rating: 2,
            price: 81.15,
        },
        {
            id: '0005',
            image: Image5,
            title: 'Crispy Chicken',
            paragraph:'Chicken Breast, Chilli Sauce, Tomatos, Pickles, Coleslaw',
            rating: 5,
            price: 99.15,
        },
        {
            id: '0006',
            image: Image6,
            title: 'Crispy Chicken',
            paragraph:'Chicken Breast, Chilli Sauce, Tomatos, Pickles, Coleslaw',
            rating: 4,
            price: 199.15,
        },
        {
            id: '0007',
            image: Image7,
            title: 'Crispy Chicken',
            paragraph:'Chicken Breast, Chilli Sauce, Tomatos, Pickles, Coleslaw',
            rating: 5,
            price: 299.15,
        },
        {
            id: '0008',
            image: Image8,
            title: 'Crispy Chicken',
            paragraph:'Chicken Breast, Chilli Sauce, Tomatos, Pickles, Coleslaw',
            rating: 5,
            price: 499.15,
        },
    ]

    const renderRatingIcons = (rating) => {
        const stars = [];

        for(let i=0; i<5; i++){
           if(rating > 0.5) {stars.push(<i key={i} className='bi bi-star-fill'></i>)
            rating--
        } else if(rating > 0 && rating < 1){
            stars.push(<i key={'half'} className='bi bi-star-half'></i>)
            rating--
        }else{
            stars.push(<i key={`empty${i}`} className='bi bi-star'></i>)
        }
    }
    return stars;
    }

  return (
    <section className='menu_section'>
        <Container>
            <Row>
                <Col lg={{span:8, offset: 2}} className='text-center mb-5'>
                    <h2>OUR CRAZY BURGERS</h2>
                    <p className='para'>"Burger bachas" is a slang term used in Pakistan to refer to elite, westernized youth from upper class families. Here are some</p>

                </Col>
            </Row>
            <Row>
                {mockData.map((cardData, index) => (
                    <Cards 
                        key={index}
                        image={cardData.image}
                        rating={cardData.rating}
                        paragraph={cardData.paragraph}
                        title={cardData.title}
                        price={cardData.price}
                        renderRatingIcons={renderRatingIcons}
                    />
                ))}
            </Row>
            <Row className='pt-5'>
                <Col sm={6} lg={5}>
                    <div className='ads_box ads_img1 mb-5 mb-md-0'>
                        <h4 className='mb-0'>GET YOUR FREE</h4>
                        <h5>CHEESE FRIES</h5>
                        <Link to='/' className='btn_red px-4 rounded-0'>
                            Learn More
                        </Link>
                    </div>
                </Col>
                <Col sm={6} lg={7}>
                    <div className='ads_box ads_img2'>
                        <h4 className='mb-0'>GET YOUR FREE</h4>
                        <h5>CHEESE FRIES</h5>
                        <Link to='/' className='btn_red px-4 rounded-0'>
                            Learn More
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Section3;