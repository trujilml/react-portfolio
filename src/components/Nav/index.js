import React from 'react';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


function Nav() {
    return(
        <div className="top-nav">
            <Navbar expand="xxl">
            <Navbar.Brand href="/">
                Mekayla Trujillo
            </Navbar.Brand>

                <ul class="navbar-nav"> 
                <li class="nav-item">
                <NavLink
                    activeClassName="navbar__link--active"
                    className="navbar__link"
                    to="about"
                >
                <div class="text-dark"> About </div>
                </NavLink>
                </li>
                <br></br>

                <li class="nav-item">
                <NavLink
                    activeClassName="navbar__link--active"
                    className="navbar__link"
                    to="portfolio"
                >
                <div class="text-dark"> Portfolio </div> 
                </NavLink>
                </li>
                <br></br>
               
                <li class="nav-item">
                <NavLink
                    activeClassName="navbar__link--active"
                    className="navbar__link"
                    to="contact"
                >
                 <div class="text-dark"> Contact</div>
                </NavLink>
                </li>
                <br></br>

                <li class="nav-item">
                <NavLink
                    activeClassName="navbar__link--active"
                    className="navbar__link"
                    to="resume"
                >
                 <div class="text-dark"> Resume </div>
                </NavLink>
                </li>

                   </ul>
            </Navbar>
        </div> 
    );
}


export default Nav;