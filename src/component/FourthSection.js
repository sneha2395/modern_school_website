import React from 'react';
import Image1 from "../assets/Layer 130.png";
import{
    Container,
    Row,
    Col,
  } from "react-bootstrap";


const FourthSection = () => {
  return (
    // <div className='Fourth-section-start'>
        <Container className='Fourth-section-start'>
            <Row className='Fourth-section-inner'>
             <Col sm={6} className='Fourth-section-left'>
                <p className="Fourth-section-text1"> WHY CHOOSE US</p>
                <br/>
                <p className="Fourth-section-text2">LOREN IPSUM 
                    <br/>
                    DOLOR SIT AMET
                </p>
                <p className="Fourth-section-text3"> One of the premier and most progressive
                <br/>
                educational institution in india! More<br/>
                about School.
                </p>
                <button className='banner-section-button'> Explore More</button>
             </Col>
             <Col sm={6} className='Fourth-section-right'>
                   <img src={Image1} className='Fourth-section-image'/>
             </Col>
             </Row>
        </Container>
    // </div>
  )
}

export default FourthSection