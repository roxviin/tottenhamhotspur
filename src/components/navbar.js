import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarDarkExample() {
  return (
    <div className="navigation">
      
 <Navbar variant="dark" bg="white" expand="lg" >
      <Container fluid>
      <Navbar.Brand href="/">
      <img
          alt=""
          src={process.env.PUBLIC_URL + '/img/Tot_logo.png'}
          width="200"
          height="70"
          className="d-inline-block align-top"
       />{' '}
     </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">

        <div class="w-20 p-3">

          <Nav class="text-secondary">
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="TOTTENHAM"
              menuVariant="white"
              
            >
                
            <NavDropdown.Item href="/team" basename="/tottenhamhotspur">구단연혁</NavDropdown.Item>
            <NavDropdown.Divider /> 
              <NavDropdown.Item href="/team2">구단영예</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          </div>

          <div class="w-20 p-3">
          <Nav class="text-secondary">
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="PLAYERS"
              menuVariant="white"
            >
            <NavDropdown.Item href="/player">출전선수</NavDropdown.Item>
            <NavDropdown.Divider /> 
              <NavDropdown.Item href="/player2">임대선수</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          </div>

          <div class="w-20 p-3">
          <Nav class="text-secondary">
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="GAME"
              menuVariant="white"
            >
            <NavDropdown.Item href="/game">경기일정</NavDropdown.Item>
            <NavDropdown.Divider /> 
              <NavDropdown.Item href="/game2"> 입장권 안내  </NavDropdown.Item>
              <NavDropdown.Divider /> 
              <NavDropdown.Item href="/game3"> 스타디움  </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          </div>


          <div class="w-20 p-3">
          <Nav class="text-secondary">
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="NEWS"
              menuVariant="white"
            >
            <NavDropdown.Item href="/news">토트넘 소식</NavDropdown.Item>
            <NavDropdown.Divider /> 
              <NavDropdown.Item href="/video"> 비디오 </NavDropdown.Item>
            </NavDropdown>
          </Nav>


          </div>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
   
  );
}

export default NavbarDarkExample;