import React from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
      <About></About>
      <Contact></Contact>
      <Portfolio></Portfolio>
      <Resume></Resume>
      <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
