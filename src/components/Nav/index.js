import React from 'react';
// import Navbar from 'react-bootstrap/Navbar'
import { Navbar, NavLink, Container } from 'react-bootstrap';
// import { NavLink } from 'react-router-dom';


function Nav() {
    return(
         <div>
            <Navbar expand="lg" bg="light" variant="light" sticky="top">
                <Container>
                    <Navbar.Brand href="/">Mekayla Trujillo</Navbar.Brand>
                <Nav className="me-auto">
                        <NavLink href="#about"> About </NavLink>
                        <NavLink href="#portfolio"> Portfolio </NavLink>
                        <NavLink href="#contact"> Contact </NavLink>
                        <NavLink href="#resume"> Resume </NavLink>
                  </Nav>
                </Container>
            </Navbar>
         </div> 
    );
}


export default Nav;