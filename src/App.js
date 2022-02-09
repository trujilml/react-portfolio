import React from 'react';
import About from './components/About';
import Nav from './components/Nav';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <main>
      <About></About>
      {/* <Portfolio></Portfolio> */}
      {/* <Contact></Contact> */}
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
