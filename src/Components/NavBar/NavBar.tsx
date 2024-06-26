import React from 'react';

type NavbarProps = {
  links: {
    title: string;
    url: string;
  }[];
};

export default function NavBar({ links }: NavbarProps) {
  return <div>NavBar</div>;
}
