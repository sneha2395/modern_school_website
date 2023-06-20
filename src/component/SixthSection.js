import React from 'react';
import Image3 from "../assets/Layer 131.png";
import{
    Container,
    Row,
    Col,
  } from "react-bootstrap";

const SixthSection = () => {
  return (
    <div>
        <Container className='Fourth-section-start'>
            <Row className='Fourth-section-inner'>
             
             <Col sm={6} className='Sixth-section-left'>
                   <img src={Image3} className='sixth-section-image'/>
             </Col>
             <Col sm={6} className='Sixth-section-right'>
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
             </Row>
        </Container>
        
    </div>
  )
}

export default SixthSection