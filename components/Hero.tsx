"use client";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import heroImg from "@/assets/img/hero-car-img.webp";
import Image from "next/image";
import SplitType from "split-type";
import gsap from "gsap";
import { useEffect, useLayoutEffect } from "react";

const Hero = () => {
  useEffect(()=>{
    let herotext = new SplitType('#hero-text')
    let heroChars = document.querySelectorAll('.word');

    for (let i = 0; i < heroChars.length; i++) {
      heroChars[i].classList.add('translate-y-full')
      heroChars[i].classList.add('cliptext')
    }

    gsap.to('.word', {
      duration: 1,
      stagger: 0.1,
      y: 0,
    })
    gsap.to(".hero-para", {
      duration: 1,
      stagger: 0.1,
      x: 0,
      y: -8,
      opacity: 1,
      delay: 1,
    });
    gsap.to(".hero-image", {
      duration: 1.5,
      stagger: 0.1,
      x: 0,
      opacity: 1,
      delay: 2,
    });
  }, [])

  return (
    <div className="min-h-[80vh] md:min-h-[40vh] lg:min-h-screen relative overflow-hidden py-20 text-center">
      <div className="space-y-6">
        <h1
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
          id="hero-text"
          className="text-[2rem] md:text-[4rem] lg:text-[6rem] font-medium"
        >
          Luxury car detailing
        </h1>
        <p
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
          className="hero-para mx-auto max-w-[22.5rem] translate-y-2.5 text-sm opacity-0 lg:text-[1.25rem]"
        >
          Experience the prestige of a professionally detailed car, radiating elegance and refinement at every turn.
        </p>
        <Link
          href="/contact"
          className="inline-block py-2 px-6 rounded hover:underline underline-offset-2 hero-para opacity-0 translate-y-2.5"
        >
          <span>Get Quote</span> <ArrowUpRight className="ml-2 inline" />
        </Link>
      </div>
      <div>
        <Image
          className="object-cover hero-image opacity-0"
          src={heroImg}
          width={1400}
          height={542}
          alt="luxurious car"
        />
      </div>
    </div>
  );
}

export default Hero
