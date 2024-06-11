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
          {links.map(
            ({ title, url }: { title: string; url: string }, index: number) => (
              <NavLink title={title} url={url} />
            ),
          )}
        </ul>
      </div>
    </nav>
  );
}
