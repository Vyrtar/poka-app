import React from 'react';
import "./App.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Replayer from './components/hands-replayer/Replayer';
import Upload from './pages/Upload';

function App() {
  return (
   
    <Router>
      <div className='App'>
      <Navbar bg="dark" variant="dark" expand="lg" className="body">
      <Container>
        <Navbar.Brand href="/">pkHands.com</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/hands">See Hands</Nav.Link>
            <Nav.Link href="/upload">Upload Hand</Nav.Link>
            <NavDropdown title="Dropdownthingy" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Login
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Login even harder
              </NavDropdown.Item>
             
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <hr />

        <Routes>
          <Route path="/hands" element={<Upload />} />
          <Route path="/upload" element={<Replayer />} />
        </Routes>
      </div>
    </Router>
 
  );
}

export default App;
