import React from "react";
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Nav from "../../components/Nav"; 
import About from "../../components/About";
import Portfolio from "../../components/Portfolio";
import Contact from '../../components/Contact';
import Resume from '../../components/Resume';


function Header() {
    return (
      <Router>
        <Nav />
        <Switch>
        <Route exact path="/"><Redirect to="/about" /></Route>
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/resume" component={Resume}/>
        </Switch>
   </Router>
    );
  }


export default Header;