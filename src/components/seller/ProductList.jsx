import React, { useState, useEffect } from 'react';
import instance from '../../axios/axios';
import { Accordion, Button, Col, Container, Row ,Navbar,Nav} from 'react-bootstrap'
import SellerProducts from "./SellerProducts";

const ProductList = ({ sellerId }) => {

const [products, setProducts] = useState([]);

console.log(products)
console.log(sellerId)



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get(`/sellers/listProducts/${sellerId}`, {
          withCredentials: true
        });
        if(response.data.success){
          
          
          setProducts(response.data.products);


        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, [sellerId]); 

  return (
    
    <Container>

    
    <Row>

        {products && (

              products.map((product) => ( 
            
            <Col className='py-3' md={3} key={product._id}>  
                <SellerProducts product={product}/> 
            
            </Col>))
        )

        }
          
      
    </Row>
    </Container>         
  ) 
   
};

export default ProductList;
