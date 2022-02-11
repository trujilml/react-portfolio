import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Nav from "../../components/Nav"; 
import About from "../../components/About";
import Portfolio from "../../components/Portfolio";
import Contact from '../../components/Contact';
import Resume from '../../components/Resume';


function Header() {
    return (
      <HashRouter>
        <header>
          <Nav></Nav>
        </header>

       <div className="content">
         <Route path="/#about" component={About} />
       <Route path="/#portfolio" component={Portfolio} />
        <Route path="/#contact" component={Contact}/>
         <Route path="/#resume" component={Resume}/>
         </div> 

   </HashRouter>
    );
  }


export default Header;