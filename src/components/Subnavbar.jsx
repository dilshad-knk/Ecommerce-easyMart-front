import React, {useState,useEffect} from 'react';
import { Nav, Navbar,NavDropdown } from 'react-bootstrap';
import useProductCategories from './data/useProductCategories';
import { Link, NavLink, useLocation } from 'react-router-dom';




const Subnavbar = () => {


    const categories = useProductCategories();
   


    const mainCategories = categories.slice(0, 5); 
    const overflowCategories = categories.slice(5); 
  return (
    <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='mx-2'>
            Categories
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {mainCategories.map(category => (
              <Nav.Link as={Link} to={`${category.slug}`} key={category._id}>
                {category.name}
              </Nav.Link>
            ))}
            {overflowCategories.length > 0 && (
              <NavDropdown title="More Categories" id="basic-nav-dropdown">
                {overflowCategories.map(category => (
                  <NavDropdown.Item as={Link} to={`${category.slug}`} key={category._id}>
                    {category.name}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
};

export default Subnavbar;
