import React , {useState} from 'react';
import SellerHeader from "./SellerHeader";
import ProductAdd from "./ProductAdd";
import ProductList from "./ProductList";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Container, Form, Row, Accordion , Card } from 'react-bootstrap'
import { sellerLogout } from '../../redux/sellerAuthenticate';

const SellerDashboard = () => {

  const { name, id, businessAddress, isVerified, storeName } = useSelector((state) => state.seller.fetchedSeller);

  const [showAddProduct, setShowAddProduct] = useState(false);

  const dispatch = useDispatch()



  const handleAddProductClick = () => {
   
    setShowAddProduct(prevState => !prevState);
  };
 
  const handleLogout = () => {
    dispatch(sellerLogout());
  }

  
  return (
    <Container>
     
      <Row>
        < Col className='mt-md-5'>
              
              <h5>Hi {name}</h5>
              <h2>Welcome to your  Seller Page!</h2>
              

        </Col>
        <Col  className='mt-md-5 d-flex align-items-center justify-content-end'>
              <Button className='bg-danger' onClick={handleLogout}>Logout</Button>
        </Col>
        
      </Row>
     
        <Row>
          <Col className='m-md-5 border py-3 mx-auto' md={5}>
            <p className='text-center fs-3 fw-bold mb-2'>Business Details</p>
            <p className='px-3 mt-3'>
              <span>Store name</span> : {storeName}
            </p>
            <p className='px-3'>
              <span>Address</span> : {businessAddress.address}, {businessAddress.state}, {businessAddress.pincode}
            </p>
          </Col>
          <Col className='m-md-5 border py-3 mx-auto' md={4}>
            <p className='text-center fs-3 fw-bold mb-2'>Verification Status</p>
            {isVerified ? (
              <p className='px-3 bg-success text-white p-4'>Your account is verified. You can now add and edit products.</p>
            ) : (
              <p className='px-3'>Your account is pending verification by an admin.</p>
            )}
          </Col>
        </Row>

        {isVerified && <Row>

              <Col>
                   <Button onClick={handleAddProductClick}>Add Product</Button>
                   {showAddProduct && <ProductAdd handleAddProductClick={handleAddProductClick}/>}


              </Col>

              <h3 className='mt-5'>Listed Prodcuts</h3>

               <ProductList sellerId={id}/>
        </Row>}
     
     
     
  
    </Container>
      
  ) 
};

export default SellerDashboard;