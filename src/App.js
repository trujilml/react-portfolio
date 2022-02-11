import React from 'react';
// import Header from './components/Header'; 
import Footer from './components/Footer';
import Nav from "./components/Nav"; 
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from './components/Contact';
import Resume from './components/Resume';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <main>
      {/* <Header></Header> */}
      <Nav></Nav>
      <About></About>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Resume></Resume>
      <Footer></Footer>
      </main>
  );
}

export default App;
