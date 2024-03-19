import React, { useState, useEffect } from 'react';
import "./App.css";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { signOut } from 'firebase/auth';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Replayer from './components/hands-replayer/Replayer';
import Upload from './pages/Upload';
import Register from './pages/Register';
import Login from './pages/Login';
import Session from './pages/Session';
import DummyDataPusher from './pages/SessionDataPusher';

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out");
    } catch (error) {
      console.error("Logout error", error);
    }
  };

  return (

    <Router>
      <div className='App'>
        <Navbar bg="dark" variant="dark" expand="lg" className="body">
          <Container>
            <Navbar.Brand href="/">pkHands.com</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/hands">see Hands</Nav.Link>
                <Nav.Link href="/upload">upload Hand</Nav.Link>
                {
                  !user ?
                    <NavDropdown title="Login" id="basic-nav-dropdown">
                      <NavDropdown.Item href="/login">
                        login
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/register">
                        register
                      </NavDropdown.Item>
                    </NavDropdown>
                    :
                    <NavDropdown title={user.email} id="basic-nav-dropdown">
                      <NavDropdown.Item href="/myhands">
                        my Hands
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/mygraph">
                        my Graph
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/mysessions">
                        my Sessions
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item onClick={handleLogout}>
                        logout
                      </NavDropdown.Item>
                    </NavDropdown>
                }
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
          <Route path="/mysessions" element={<Session user={user} />} />
          
        </Routes>
      </div>
    </Router>

  );
}

export default App;
