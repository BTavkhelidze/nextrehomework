import React from 'react';
import logoIcon from '@/assets/logoIcon.svg';
import logoName from '@/assets/logoName.svg';
import Image from 'next/image';
import NavLink from '../NavLink/NavLink';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

interface menuType {
  id: number;
  name: string;
  href: string;
}

const menu: menuType[] = [
  {
    id: 1,
    name: 'Home',
    href: '/home',
  },
  {
    id: 2,
    name: 'About',
    href: '/about',
  },
  {
    id: 3,
    name: 'How it Works',
    href: '/howItWorks',
  },
  {
    id: 4,
    name: 'Services',
    href: '/services',
  },
];

const Header = () => {
  return (
    <header className='flex justify-between'>
      <div className='flex gap-[12.4px]'>
        <Image src={logoIcon} alt='logo icon' width={37} height={37} />
        <Image src={logoName} alt='logo name' className='w-[80px]' />
      </div>
      <nav className='hidden lg:flex'>
        <ul className='flex 2xl:gap-[46px] lg:gap-[40px]  gap-[10px] lg:px-[56px] px-[15px] lg:py-[22px] py-[10px] bg-white lg:rounded-[20px] rounded-[12px]'>
          {menu.map((menu) => {
            return <NavLink key={menu.id} href={menu.href} name={menu.name} />;
          })}
        </ul>
      </nav>
      <div className='space-x-2 hidden lg:flex'>
        <Button variant='ghost'>
          <Link href='/signIn'>Sign In</Link>
        </Button>
        <Link href='/signUp'>
          <Button
            variant='default'
            className='bg-[#4e47ff] lg:rounded-[10px] rounded-[8px] '
          >
            Sign Up
          </Button>
        </Link>
      </div>

      {/* <AppSidebar /> */}
      <div className='lg:hidden '>
        <Sheet>
          <SheetTrigger>Open</SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Nav Menu</SheetTitle>
              <SheetDescription>
                <div>
                  <nav className=''>
                    <ul className='flex flex-col 2xl:gap-[46px] lg:gap-[40px]   w-full gap-4 lg:py-[22px] py-[10px]   '>
                      {menu.map((menu) => {
                        return (
                          <NavLink
                            key={menu.id}
                            href={menu.href}
                            name={menu.name}
                          />
                        );
                      })}
                    </ul>
                  </nav>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
