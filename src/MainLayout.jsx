
import { Outlet } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Subnavbar from "./components/Subnavbar";
import { Container } from "react-bootstrap";

function MainLayout() {
  return (
    <>
      <Container fluid className="d-flex p-0 m-0 flex-column vh-100">
          
          <Header/>
          <Subnavbar/>
          <main className="flex-grow-1 px-3">
            <Outlet /> 
          </main>
          <footer className='p-0'><Footer/></footer>

      </Container>

    
    </>
  );
}

export default MainLayout;
