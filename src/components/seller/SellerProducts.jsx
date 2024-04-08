import React from 'react'
import { Button, Col, Container, Form, Row , Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './SellerProducts.css'

function SellerProducts({product}) {
  return (


<Link to ={`/sellers/product/${product._id}`} className='text-decoration-none'>
      <Card>
            <Card.Img variant="top" src={process.env.REACT_APP_SERVER_URL + product.image}   className="custom-card-img"/>
            <Card.Body>
                <div className=" title-wrapper">
                  <Card.Title className='m-0'>{product.name}</Card.Title>
              </div>
              <div className='mb-2 mt-4'>
                      <Card.Text className='m-0 ' >
                                {product.price}
                      </Card.Text>
                    <Card.Text className='m-0' >
              
                    </Card.Text>
              </div>
                              
            </Card.Body>
      </Card>
</Link>
  )
}
  


export default SellerProducts




