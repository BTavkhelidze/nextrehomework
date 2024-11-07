'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Define the props interface
interface NavLinkProps {
  href: string;
  name: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, name }) => {
  const path = usePathname();

  return (
    <li
      className={`${
        path === href ? 'text-black' : 'text-[#8987a7] '
      } cursor-pointer`}
    >
      <Link
        href={href}
        className={`${path === href ? 'font-bold' : 'font-normal'} text-nowrap`}
      >
        {name}
      </Link>
    </li>
  );
};

export default NavLink;
