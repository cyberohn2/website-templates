"use client"
import { useEffect, useState } from 'react'
import gsap from "gsap";
import Image from 'next/image';
import Link from 'next/link';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);


  useEffect(() => {
    gsap.to("header", {
      duration: 1,
      stagger: 0.1,
      y: 0,
      opacity: 1,
    });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <header
      className={`w-full opacity-0 py-1 px-4 md:px-8 flex items-center justify-between fixed top-0 z-50 transition-all duration-300 ${isScrolled && "bg-linear-to-r from-(--black)/80 via-black/70 to-(--foreground)/80 backdrop-blur-md shadow-lg"}`}
    >
      <Image src="/img/logo.png" alt="Logo" width={100} height={50} />
      <nav className="hidden md:block">
        <ul className="flex items-center gap-8  ">
          {["About", "My works", "Contact"].map((item) => (
            <li
              key={item}
              className="cursor-pointer text-white hover:text-gray-600 transition-colors duration-300"
            >
              <Link href={`#${item.toLowerCase().replace(/\s/g, "")}`}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button className="md:flex items-center gap-1 text-white hidden">
        <span>Available For Work</span>
        <span className=" animate-pulse w-2.5 h-2.5 bg-[#08178f] rounded-full"></span>
      </button>
      <button
        className="md:hidden text-white focus:outline-none z-50  cursor-pointer ml-auto"
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
            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
          ></path>
        </svg>
      </button>

      <div
        className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-lg pt-32 h-screen transition-transform duration-300 ease-in-out overflow-hidden  ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="container mx-auto px-4">
          <nav className="flex flex-col gap-4 items-center">
            <ul className="flex flex-col items-center gap-8  ">
              {["About", "My works", "Contact"].map((item) => (
                <li
                  key={item}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="cursor-pointer text-white hover:text-gray-600 transition-colors duration-300"
                >
                  <Link href={`#${item.toLowerCase().replace(/\s/g, "")}`}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <button className="">
              <span>Available For Work</span>
              <span className="w-12.5 h-12.5 bg-[#08178f] rounded-full ml-2"></span>
            </button>
          </nav>
        </nav>
      </div>
    </header>
  );
}

export default Header
