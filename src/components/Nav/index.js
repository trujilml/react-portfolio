import React from 'react';
// import Navbar from 'react-bootstrap/Navbar'
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


function Nav() {
    return(
        <div className="main-nav">
            <Navbar expand="lg" bg="light" sticky="top">
            <Navbar.Brand href="/">Mekayla Trujillo</Navbar.Brand>

            <div className="topnav-right">
                <NavLink
                    activeClassName="navbar_link--active"
                    className="navbar_link"
                    to="/about"
                >
                About
                </NavLink>


                <NavLink
                    activeClassName="navbar_link--active"
                    className="navbar_link"
                    to="/portfolio"
                >
                Portfolio
                </NavLink>

                <NavLink
                    activeClassName="navbar_link--active"
                    className="navbar_link"
                    to="/contact"
                >
                Contact
                </NavLink>

                <NavLink
                    activeClassName="navbar_link--active"
                    className="navbar_link"
                    to="/resume"
                >
                Resume
                </NavLink>

            </div>
            </Navbar>
        </div>
    );
}


export default Nav;