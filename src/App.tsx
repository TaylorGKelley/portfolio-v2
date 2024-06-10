import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import Home from './Pages/Home';

function App() {
  return (
    <>
      <header>
        <NavBar
          links={[
            { title: 'About', url: '/#About' },
            { title: 'My Work', url: '/#Projects' },
            { title: 'Contact', url: '/#Contact' },
          ]}
        />
      </header>
      <main>
        <Home />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
