import React from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <main>
      <About></About>
      <Contact></Contact>
      {/* <Portfolio></Portfolio> */}
      {/* <Resume></Resume> */}
      </main>
      <footer>
        This is the footer!
        {/* <Footer></Footer> */}
      </footer>
    </div>
  );
}

export default App;
