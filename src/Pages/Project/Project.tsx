import React from 'react';
import './Project.css';
import { useParams } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';

export default function Project() {
  const { projectId } = useParams();

  return (
    <>
      <header>
        <Navbar
          links={[
            { title: 'About', url: '/#About' },
            { title: 'My Work', url: '/#Projects' },
            { title: 'Contact', url: '/#Contact' },
          ]}
        />
      </header>
      <main></main>
      <footer></footer>
    </>
  );
}
