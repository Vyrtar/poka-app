import React, {useState, useEffect} from 'react';
import "./App.css";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase'; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Replayer from './components/hands-replayer/Replayer';
import Upload from './pages/Upload';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

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
              <NavDropdown.Item href="/login">
                Login
              </NavDropdown.Item>
             
              <NavDropdown.Item href="/register">
                Register
              </NavDropdown.Item>
             
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
            <p>{user ? user.email : "Login"}</p>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <hr />

        <Routes>
          <Route path="/hands" element={<Upload />} />
          <Route path="/upload" element={<Replayer />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
 
  );
}

export default App;
