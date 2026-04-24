"use client";
import { useState, useEffect } from 'react';
import logo from '@/assets/img/header-logo.webp'
import Link from 'next/link';
import Image from 'next/image';
import NavLink from './ui/navlink';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'unset';
        }
    
        return () => {
          document.body.style.overflow = 'unset';
        };
      }, [isMenuOpen]);

    return (
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/20 backdrop-blur-md shadow-lg border-b"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="shrink-0 mr-4">
            <Image
              src={logo}
              alt="Logo"
              className={`w-24.5! h-12.5 object-contain transition-transform duration-300 ${isScrolled ? "scale-90" : "scale-100"}`}
            />
          </Link>
          <nav className="hidden md:block shrink-0">
            <ul className="flex items-center gap-8 text-dark-blue text-sm">
              <li>
                <NavLink href={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink href={"/services"}>Services</NavLink>
              </li>
              <li>
                <NavLink href={"/about"}>About</NavLink>
              </li>
              <li>
                <NavLink href={"/contact"}>Contact</NavLink>
              </li>
            </ul>
          </nav>

          <button
            className="md:hidden focus:outline-none z-50  cursor-pointer ml-auto"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
                }
              ></path>
            </svg>
          </button>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden fixed inset-0 bg-white/50 backdrop-blur-lg pt-32 h-screen transition-transform duration-300 ease-in-out overflow-hidden  ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
          >
            <nav className="container mx-auto px-4">
              <ul className="flex flex-col items-center gap-8 text-dark-blue text-sm">
                <li>
                  <NavLink href={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink href={"/services"}>Services</NavLink>
                </li>
                <li>
                  <NavLink href={"/about"}>About</NavLink>
                </li>
                <li>
                  <NavLink href={"/contact"}>Contact</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
}

export default Header;