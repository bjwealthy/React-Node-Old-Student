import React from 'react'
import './App.css';
import {Nav, Navbar, Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreateOldie from './components/CreateOldie';
import EditOldie from './components/EditOldie';
import OldieList from './components/OldieList';

function App() {
  return (
    <Router>
      <div className="App">
      <header className='App-header'>
        <Navbar bg='dark' variant='dark'>
          <Container>
            <Navbar.Brand>
              <Link to={'/create-oldie'} className='nav-link'>React-Node Old Student Mgt App</Link>
            </Navbar.Brand>
            <Nav className='justify-content-end'>
              <Nav>
                <Link to={'/create-oldie'} className='nav-link'> Create Old Student</Link>
              </Nav>
            </Nav>
            <Nav>
              <Link to={'/oldie-list'} className='nav-link'>Old Students List</Link>
            </Nav>
          </Container>
        </Navbar>
      </header>

      <Container>
        <Row>
          <Col md={12}>
              <div className='wrapper'>
                <Routes>
                  <Route exact path='/' element={<CreateOldie/>}/>
                  <Route path='/create-oldie' element={<CreateOldie/>} />
                  <Route path='/edit-oldie/:id' element={<EditOldie/>} />
                  <Route path='/oldie-list' element={<OldieList/>}/>
                </Routes>
              </div>
          </Col>
        </Row>
      </Container>
    </div>
    </Router>
    
  );
}

export default App;
