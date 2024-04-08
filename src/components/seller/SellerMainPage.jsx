import React from 'react'
import { Accordion, Button, Col, Container, Row ,Navbar} from 'react-bootstrap'
import { FaSmile } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';



function SellerMainPage() {
  return (
    <Container>
           
      <Row>
        <Col>
          <h1 className='fw-bold'>Unlock the potential of your business by joining Easy Mart as a Seller <FaSmile className='text-primary' /></h1>
        </Col>
      </Row>
      <Row>
        <Col md={4} className='m-5'>
          <Col className='mb-5 text-center'>
            <div className='mb-2'>An Existing User ?</div>
            <div>
              <NavLink to="/sellers/signin" >
                <Button variant="primary">SignIn</Button>
              </NavLink>
            </div>

          </Col>
          <Col className='my-2 text-center'>
            <div className='mb-2'>New to Easy Mart Selling ?</div>
            <div>
              <NavLink to="/sellers/signup" >
                <Button variant="primary" className='' >Create a Seller Account</Button>
              </NavLink>
            </div>



          </Col>
        </Col>
        <Col md={6}  className='ps-5'>   
         <Accordion>
          <Accordion.Item eventKey="0" >
            <Accordion.Header >How to sell</Accordion.Header>
            <Accordion.Body>
              Read full Guidlines
              </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Support Team</Accordion.Header>
            <Accordion.Body>
              Contact : easymart.seller.support.com
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="0" >
            <Accordion.Header >Real-Time Analytics</Accordion.Header>
            <Accordion.Body>
              
              </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Storage&Shipping</Accordion.Header>
            <Accordion.Body>
              Contact : easymart.seller.support.com
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Grow Faster</Accordion.Header>
            <Accordion.Body>
              Contact : easymart.seller.support.com
            </Accordion.Body>
          </Accordion.Item>
        </Accordion></Col>
      </Row>
    </Container>
  )
}

export default SellerMainPage