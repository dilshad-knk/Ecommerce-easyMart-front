
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row,Col,Button,Table } from 'react-bootstrap';
import instance from '../../axios/axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import SubNav from './SubNav'



const AdminDashboard = () => {
  
  
  const name = useSelector((state) => state.admin.adminName);
  const [activeIndex, setActiveIndex] = useState(0);
  
  
  const navigate =useNavigate()

 


 // Function to handle logout
 const handleLogout = async () => {
 

  try {
    // Send a logout request to the server
    const res = await instance.post('admin/logout',null, {
        
      withCredentials: true,
    })

    navigate('/admin-login');
  } catch (error) {
    console.error('Logout failed:', error);
    // Handle error (e.g., display a message to the user)
  }
};






  return (
    <Container>
     
      <Row className='mt-3'>
        <Col>
              <h1>Admin DashBoard</h1>
        </Col>
        <Col className='text-end'>
          <Button variant="danger" onClick={handleLogout}>
            Logout
          </Button>
        </Col>
          
      </Row>
     
      <Row>
        <Col>
            <h4><strong>Admin name :</strong>{name} </h4>

        </Col>
      </Row>
      <Row>
         
         <Col className='m-4'><SubNav/></Col>
           
     </Row>
      <Row>
          
        
        
      </Row>
    </Container>
  );
};

export default AdminDashboard;
