import React, { useRef } from 'react';
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
          {links.map(
            ({ title, url }: { title: string; url: string }, index: number) => (
              <li className="nav-link" key={index}>
                <a href={url}>{title}</a>
              </li>
            ),
          )}
        </ul>
      </div>
    </nav>
  );
}
