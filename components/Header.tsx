"use client"
import { useEffect, useState } from 'react'
import gsap from "gsap";


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
    <header className={`w-full -translate-y-10 opacity-0 py-4 px-4 md:px-8 flex items-center justify-between fixed top-0 z-50 transition-all duration-300 ${isScrolled && "bg-linear-to-r from-(--foreground)/80 via-black/70 to-(--foreground)/80 backdrop-blur-md shadow-lg border-b"}`}>
      <h1 className="md:text-[20px] font-medium">LexureDetails</h1>
      <nav className="hidden md:block">
        <ul className="flex items-center gap-8  ">
          {["Services", "Pricing", "About", "Contact"].map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:text-gray-600 transition-colors duration-300"
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
      <button className="hidden md:block px-4 py-2 border border-white text-white rounded hover:bg-white transition-colors duration-300">
        Get a Quote
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
              {["Services", "Pricing", "About", "Contact"].map((item) => (
                <li
                  key={item}
                  className="cursor-pointer hover:text-gray-600 transition-colors duration-300"
                >
                  {item}
                </li>
              ))}
            </ul>
            <button className="px-4 py-2 border border-white text-white rounded hover:bg-white transition-colors duration-300">
              Get a Quote
            </button>
          </nav>
        </nav>
      </div>
    </header>
  );
}

export default Header
