import React from 'react';
import Home from './Pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Project from './Pages/Project/Project';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/Project/:projectId" Component={Project} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
