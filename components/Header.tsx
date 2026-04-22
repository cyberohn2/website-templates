"use client";
import { useEffect, useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-4 z-50 transition-all duration-300 rounded-full px-5 py-3 backdrop-blur-xl flex ${
        isScrolled
          ? "border border-white/38 bg-white/44 shadow-[0_16px_40px_rgba(15,23,42,0.08)]"
          : ""
      }`}
    >
      <h1 className="md:hidden uppercase text-pry-red text-[1rem]!">
        <span className="text-pry-blue text-[1.4rem]!">Car</span> Dealership
      </h1>
      <nav className="hidden md:flex items-center justify-between gap-4 lg:gap-16 container mx-auto">
        <ul className="flex items-center flex-1 lg:gap-13.5 justify-between lg:justify-normal">
          <li>About</li>
          <li>Services</li>
          <li>Brands</li>
        </ul>
        <h1 className=" uppercase text-pry-red text-[1rem]! lg:text-[1.2rem]!">
          <span className="text-[1.4rem]! lg:text-[1.85rem]! text-pry-blue">
            Car
          </span>{" "}
          Dealership
        </h1>
        <ul className="flex items-center flex-1 lg:gap-13.5 justify-between lg:justify-end">
          <li>Explore</li>
          <li>Blogs</li>
          <li>Feedbacks</li>
        </ul>
      </nav>
      <button
        className="md:hidden text-primary focus:outline-none z-50 cursor-pointer ml-auto "
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
        className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-lg pt-32 h-screen transition-transform duration-300 ease-in-out overflow-hidden   ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="container mx-auto px-4">
          <ul className="flex flex-col items-center gap-8 justify-between">
            <li>About</li>
            <li>Services</li>
            <li>Brands</li>
            <li>Explore</li>
            <li>Blogs</li>
            <li>Feedbacks</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;