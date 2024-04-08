import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Home from "./components/Home";

import { Route, BrowserRouter as Router, Routes,Navigate} from "react-router-dom";
import SignUp from "./components/seller/SignUp";
import SignIn from "./components/seller/SignIn";
import SellerMainPage from "./components/seller/SellerMainPage";
import MoreEditDltSellerProducts from "./components/seller/MoreEditDltSellerProducts";
import SellerDashboard from "./components/seller/SellerDashboard";
import AdminDashboard from './components/admin/AdminDashboard';
import ProductAdd from "./components/seller/ProductAdd";
import { useSelector } from "react-redux";
import ProtectedRoute from "./Utils/ProtectedRoute";
import ProtectedRouteAdmin from "./Utils/ProtectedRouteAdmin";
import AdminSignin from "./components/admin/AdminSignin";
import { useEffect, useState } from "react";
import { jwtDecode as jwt_decode, InvalidTokenError } from 'jwt-decode';
import instance from './axios/axios';
import { useDispatch } from 'react-redux';
import LoadingIndicator from "./LoadingIndicator";
import CategorySection from './components/CategorySection'
import NotFound from './components/NotFound'
import MoreDetails from './components/MoreDetails'
import MainLayout from './MainLayout'
import useProductCategories from './components/data/useProductCategories';
import UserSignUp from "./components/user/UserSignUp";
import UserSignin from "./components/user/UserSignin";
import UserProtectedRoute from "./Utils/UserProtectedRoute";
import Cart from "./components/user/Cart";
import Profile from "./components/user/Profile";


function App() {


  const isadminAuthenticated = useSelector((state) => state.admin.isadminAuthenticated);
 
  const categories = useProductCategories();

  console.log(categories);
  
  
 



  return (
    <Router>
      
                <Routes>
                                  
                    <Route element={<MainLayout />}>
                          <Route path="/" element={<Home />} />
                          {categories.map(category => (
                            <Route key={category._id} path={`${category.slug}`} element={<CategorySection slug={category.slug} categoryName={category.name} />} />
                          ))}
                          <Route path="/:slug/:productId" element={<MoreDetails/>} />
                          <Route path="/signup" element={<UserSignUp/>} />
                          <Route path="/signin" element={<UserSignin/>} />
                              

                              

                          <Route  element={<UserProtectedRoute />}>

                              <Route path="/cart" element={<Cart />} />
                              <Route path="/profile" element={<Profile/>} />

                          </Route>


                    </Route>
                                          
                    <Route path="/sellers" element={<SellerMainPage />} />
                    <Route path="/sellers/signin" element={<SignIn />} />
                    <Route path="/sellers/signup" element={<SignUp />} />
                     
                    <Route element={<ProtectedRoute/>}>
                        <Route path="/sellers/sellerDashboard" element={ <SellerDashboard /> }/>
                        <Route path="/sellers/product/:id" element={  <MoreEditDltSellerProducts />}/>
                    </Route>
      
                    <Route
                          path="/admin"
                          element={
                              <ProtectedRouteAdmin isadminAuthenticated={isadminAuthenticated}>
                                <AdminDashboard />
                              </ProtectedRouteAdmin>
                            
                          }
                          />
                    <Route path="/admin-login" element={ <AdminSignin/> } />
            
                    <Route path="/*" element={<NotFound />} />
                </Routes>
    </Router>
  );
}

export default App;
