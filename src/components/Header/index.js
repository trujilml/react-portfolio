import React from "react";
import { HashRouter as Router, Switch, Route, Redirect} from "react-router-dom";
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
            <Route exact path="/">
                <Redirect to ="/about" />
            </Route>
        <Route path="/about">
            <About />
            </Route>
       <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact}/>
         <Route path="/resume" component={Resume}/>
        </Switch>
   </Router>
    );
  }


export default Header;