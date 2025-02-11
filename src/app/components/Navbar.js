'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { RiMenu5Line } from 'react-icons/ri';
import { IoMdClose } from 'react-icons/io';

export default function Navbar() {
    const pathname = usePathname();
    const [showMenu, setShowMenu] = useState(false);

    const handleMenu = () => setShowMenu(!showMenu);

    return (
        <nav className='fixed top-0 w-full bg-foreground text-text font-main flex items-center justify-between py-2.5 px-6'>
            {/* Logo & Title */}
            <Link href='/' className='flex items-center space-x-2 md:space-x-4'>
                <Image
                    src='/popcorn.png'
                    width={40}
                    height={40}
                    alt='Cartoon picture of a bucket of movie popcorn'
                />
                <h1 className='font-light text-2xl'>
                    Pickster<span className='text-accent'>.</span>
                </h1>
            </Link>

            {/* Desktop Links */}
            <div className='text-base font-extralight space-x-10 hidden md:block'>
                <Link className={pathname === '/' ? 'hidden' : ''} href='/'>
                    Home
                </Link>
                <Link
                    className={
                        pathname === '/login'
                            ? 'bg-accent font-light rounded py-1 px-2'
                            : 'border border-accent rounded py-1 px-2'
                    }
                    href='/login'
                >
                    Log In
                </Link>
                <Link
                    className={
                        pathname === '/signup'
                            ? 'bg-accent font-light rounded py-1 px-2'
                            : 'border border-accent rounded py-1 px-2'
                    }
                    href='/signup'
                >
                    Sign Up
                </Link>
            </div>

            {/* Mobile Links */}
            <div className='md:hidden'>
                {showMenu ? (
                    <IoMdClose
                        onClick={handleMenu}
                        className='text-accent'
                        size={40}
                    />
                ) : (
                    <RiMenu5Line
                        onClick={handleMenu}
                        className='text-accent'
                        size={40}
                    />
                )}
                <div
                    className={`overflow-hidden transition-all ease-in-out duration-300 flex bg-foreground rounded-b flex-col justify-evenly w-44 text-lg font-light py-8 space-y-4 absolute top-[58px] right-0
                            ${
                                showMenu
                                    ? 'max-h-52 opacity-100'
                                    : 'max-h-0 opacity-0'
                            }`}
                >
                    <Link
                        onClick={handleMenu}
                        className={
                            pathname === '/'
                                ? 'hidden'
                                : 'border border-accent/30 rounded py-1 px-2 w-28 mx-auto'
                        }
                        href='/'
                    >
                        Home
                    </Link>
                    <Link
                        onClick={handleMenu}
                        className={
                            pathname === '/login'
                                ? 'bg-accent font-light rounded py-1 px-2 w-28 mx-auto'
                                : 'border border-accent/30 rounded py-1 px-2 w-28 mx-auto'
                        }
                        href='/login'
                    >
                        Log In
                    </Link>
                    <Link
                        onClick={handleMenu}
                        className={
                            pathname === '/signup'
                                ? 'bg-accent font-light rounded py-1 px-2 w-28 mx-auto'
                                : 'border border-accent/30 rounded py-1 px-2 w-28 mx-auto'
                        }
                        href='/signup'
                    >
                        Sign Up
                    </Link>
                </div>
            </div>
        </nav>
    );
}
