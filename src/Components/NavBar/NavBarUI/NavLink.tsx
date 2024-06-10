import React from 'react';

type NavLinkProps = {
  title: string;
  url: string;
};

export default function NavLink({ title, url }: NavLinkProps) {
  return (
    <li>
      <a href={url} className="text-white text-xl font-semibold">
        {title}
      </a>
    </li>
  );
}
