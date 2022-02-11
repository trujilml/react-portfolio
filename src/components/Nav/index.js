import React from 'react';
// import {Route, HashRouter} from 'react-router-dom';
import { Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
// import About from '../../components/About';
// import Contact from '../../components/Contact';
// import Portfolio from '../../components/Portfolio';
// import Resume from '../../components/Resume';

function Nav() {
    return(
         <div>
            <Navbar expand="lg" bg="light" sticky="top">
                <NavLink className="nav-link" to="/">
                    <div class="text-dark">
                    <h2 id ="nav-title-font">Mekayla Trujillo</h2>
                    </div>
                    {/* remove clicked link asset */}
                  </NavLink>
                  <ul class="navbar-nav ml-auto navitem-indent">
                    <li class="nav-item">
                        <NavLink to ="/about">
                            <div class="nav-font text-dark">About</div>
                        </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to ="/portfolio">
                            <div class="nav-font text-dark">Portfolio</div>
                        </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to ="/contact">
                            <div class="nav-font text-dark">Contact</div>
                        </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to ="/resume">
                            <div class="nav-font text-dark">Resume</div>
                        </NavLink>
                    </li>

                  </ul>
            </Navbar>
         </div> 

    // <div className="content">
    // <Route exact path="/" />
    // <Route path="/about" component={About} />
    // <Route path="/portfolio" component={Portfolio} />
    // <Route path="/contact" component={Contact}/>
    // <Route path="/resume" component={Resume}/>
    // </div>
    );
}


export default Nav;