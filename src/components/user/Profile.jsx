import React, { useEffect,useState } from 'react';
import { Col, ListGroup, Row, Container, Tab,Card,Form,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CiEdit } from "react-icons/ci";

function Profile() {
  const [activeKey, setActiveKey] = useState('#link1');
  const user = useSelector(state => state.user.user)

 const location = window.location.hash
  const handleSelect = (selectedKey) => {
    setActiveKey(selectedKey);

    
    window.location.hash = selectedKey;
  };

 
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setActiveKey(hash);
    }
  }, [location]);

console.log(user,'usssser');
  return (
    <Container fluid className='m-1 p-1'>
      <Tab.Container id="list-group-tabs-example" activeKey={activeKey} onSelect={handleSelect}>
        <Row>
          <Col sm={4} className=' p-2'>
               <Col className='text-center'><h4>Hi, {user.name}</h4></Col>
                <ListGroup>
                  <ListGroup.Item  eventKey="#link1" className={activeKey === '#link1' ? 'bg-primary text-white' : ''}>
                    Personal Info
                  </ListGroup.Item>
                  <ListGroup.Item eventKey="#link2" className={activeKey === '#link2' ? 'bg-primary text-white' : ''}>
                    Order Details
                  </ListGroup.Item>
                  <ListGroup.Item  eventKey="#link3" className={activeKey === '#link3' ? 'bg-primary text-white' : ''}>
                    Address
                  </ListGroup.Item>
                </ListGroup>
          </Col>
          <Col sm={7} className=' flex-grow-1 ms-1'>
            <Tab.Content>
              <Tab.Pane eventKey="#link1" id="link1">
                  <PersonalInfo user={user}/>
              </Tab.Pane>
              <Tab.Pane eventKey="#link2" id="link2">
              </Tab.Pane>
              <Tab.Pane eventKey="#link3" id="link3">
                  <AddressInfo/>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
}

export default Profile;



function PersonalInfo({user}) {



  return (

    <>
        <Card className='p-3'>
              <Form>
                <Row>
                  <Form.Group as={Col} md={6} className="mb-3 " controlId="formBasicEmail">
                    <Form.Label className='d-flex justify-content-between'>Name <CiEdit/></Form.Label>
                    <Form.Control type="text" placeholder="Enter email" defaultValue={user.name} />
                  </Form.Group>
                </Row>
                <Row>
                    <Form.Group  as={Col} md={6}  className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='d-flex justify-content-between'>Email <CiEdit/></Form.Label>
                      <Form.Control type="email" placeholder="Enter email" defaultValue={user.email}/>
                    </Form.Group>
                </Row>

            </Form>

        </Card>
    </>

  )

}


function AddressInfo() {

  return(

       <Card className='p-3'>
             <Form>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>


            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>

             
            </Row>
                <Form.Group className='w-25 mb-2' as={Col} controlId="formGridZip">
                    <Form.Label>Pin</Form.Label>
                    <Form.Control />
                  </Form.Group>
          
            <div className='d-flex justify-content-center'>
                <Button  variant="primary" type="submit">
                  Submit
                </Button>
            </div>
           
      </Form>

  </Card>
  )
}