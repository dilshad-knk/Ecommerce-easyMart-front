import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import useGetProducts from './data/products';
import {Link} from 'react-router-dom';
import MoreDetails from './MoreDetails';

const CategorySection = ({ slug, categoryName }) => {
 
  const products = useGetProducts();
  const filteredProducts = products.filter(product => product.category.name === categoryName);

  return (
    <div id={slug}>
      <h2>{categoryName}</h2>
      <Row>


  
      {filteredProducts.map(product => (

      <Col key={product.id} xs={12} className='py-3' sm={6} md={4} lg={3}>
        <Link to ={`/${categoryName}/${product._id}`} state={{ product: product }} className='text-decoration-none'>
        
                  <Card>
                    <Card.Img variant="top" src={process.env.REACT_APP_SERVER_URL + product.image}   className="custom-card-img p-1"/>
                    <Card.Body>
                      <div className=" title-wrapper">
                        <Card.Title className='m-0'>{product.name}</Card.Title>
                      </div>
                      <div className='mb-2 mt-4 d-flex justify-content-between'>
                            <Card.Text className='m-0 fw-bolder' >
                            <span className='fw-bold'>Price :</span>{' '}
                             {product.price}
                            </Card.Text>
                          <Card.Text className='m-0' >
                           <span className='fw-bold'>{product.stock? "In Stock" : "Out of Stock"}</span>{' '}
                          </Card.Text>
                      </div>
                                    
                    </Card.Body>
             </Card>

          </Link>
          </Col>
        ))}

      </Row>
    </div>
  );
};

export default CategorySection;







