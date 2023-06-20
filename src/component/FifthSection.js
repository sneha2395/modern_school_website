import React from 'react';
import{
    Container,
    Row,
    Col,
  } from "react-bootstrap";

const FifthSection = () => {
  return (
    <div className='fifth-section-start'>
        <i className="fa fa-chevron-circle-right"></i>
       <p className='fifth-section-text'> LOREN IPSUM 
       <br/>
        <span >INFRASTUCTURE
            </span></p> 

            <Container>
                <Row className='fifth-section-row'>  
                <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6"> TRANSPORT</Col>
                <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6"> MEDICAL FACILITIES</Col>
                <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6"> LIBRARY</Col> 
                <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6"> SPORTS</Col>
                <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6"> CLASSROOMS</Col>
                <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6"> LABS</Col> 
                <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6"> CAFETERIA</Col>                
                </Row>
            </Container>
    </div>
  )
}

export default FifthSection