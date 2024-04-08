import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup, Container, Dropdown, Form, Modal, Nav, NavDropdown, NavItem, Navbar, Offcanvas } from 'react-bootstrap'
import { BsShop } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { FaRegMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Header.css';
import { useDispatch, useSelector } from 'react-redux';
import { setDarkMode } from '../redux/darkModeReducer';
import { sellerLogout } from '../redux/sellerAuthenticate';


function Home() {



 
  return (
  
   <>Home Page</>
  )
}

export default Home