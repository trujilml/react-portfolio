import React from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import './App.css';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
      <About></About>
      <Contact></Contact>
      <Portfolio></Portfolio>
      {/* <Resume></Resume> */}
      {/* Make it a link to resume pdf - refer older portfolio */}
       {/* <Footer></Footer> */}
        {/*  This is the footer! Make me as a seperate component. */}
      </main>
    </div>
  );
}

export default App;
