import React from 'react';
import NavLink from './NavBarUI/NavLink';
import './NavBar.css';

type NavBarProps = {
  links: { title: string; url: string }[];
};

export default function NavBar({ links }: NavBarProps) {
  return (
    <nav className="nav-menu">
      <div className="nav-menu__container">
        <h1 className="nav-title">
          <a href="/#Home">taylorkelley.me</a>
        </h1>

        <ul className="nav-links__container">
          <NavLink title="About" url="/#About" />
          <NavLink title="My Work" url="/#Projects" />
          <NavLink title="Contact" url="/#Contact" />
        </ul>
      </div>
    </nav>
  );
}
