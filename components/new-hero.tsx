"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight";
import SplitType from "split-type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowUpRight } from "lucide-react";



const Hero = () => {
  gsap.registerPlugin(ScrollTrigger);
  const isMobile  = useIsMobile()

  useEffect(() => {
    const parallaxAnimation = () => {
      gsap.to(".hero-image", {
        scrollTrigger: {
          trigger: ".hero",
          start: "20px 20px",
          end: "bottom top",
          scrub: 2,
          // pin: true,
          // markers: true,
        },
        position: "absolute",
        top: isMobile ? "105%" : "160%",
        left: isMobile ? 0 : 50,
        scale: !isMobile ? 0.9 : 1,
        duration: 5,
        ease: "power1.out",
      });
    };

    parallaxAnimation();
  }, [isMobile]);


  useEffect(() => {
    let herotext = new SplitType("#hero-text", {types: "words"});
    let heroChars = document.querySelectorAll(".word");

    for (let i = 0; i < heroChars.length; i++) {
      heroChars[i].classList.add("translate-y-full");
      heroChars[i].classList.add("cliptext");
    }

    gsap.to(".word", {
      duration: 1,
      stagger: 0.1,
      y: 0,
    });
    gsap.to(".hero-para", {
      duration: 1,
      stagger: 0.1,
      x: 0,
      y: -8,
      opacity: 1,
      delay: 0.3,
    });
    gsap.to(".hero-image", {
      duration: 1.5,
      stagger: 0.1,
      x: 0,
      opacity: 1,
      delay: 0.5,
    });
  }, []);


  return (
    <section className="hero py-44 relative h-screen flex items-center justify-center isolate border-b">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60 w-120%!"
        fill="white"
      />
      <div className="absolute inset-0 -z-50 opacity-60 bg-size-[40px_40px] " />

      <div className=" grid grid-rows-2 gap-8 md:gap-0 md:grid-cols-2 md:grid-rows-1 container mx-auto px-4 relative ">
        <div className="pt-60 md:pt-20 md:row-start-auto text-center md:text-left flex flex-col align-center">
          <h1 className="lg:text-7xl md:text-5xl text-3xl lg:leading-24 md:leading-14 font-bold ">
            <TextGenerateEffect
              className="lg:text-7xl md:text-5xl text-4xl lg:leading-24 md:leading-14 font-bold text-white!"
              duration={1}
              words={"Make your meaning visible"}
            />{" "}
          </h1>
          <p
            id="hero-text"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
            className="hero-para mt-4 mb-6 text-white"
          >
            Independent Brand Designer
            <br /> Creating Designs that speaks, sell and Structures.
          </p>
          <div>
            <Button
              style={{ backgroundColor: "#08178f" }}
              className="py-6 rounded-sm mr-4 border bg-[#586af4]"
            >
              <Link
                className=""
                href="https://wa.me/2349138456384?text=Hello%20there%20"
              >
                Hire Me
                <ArrowUpRight className="ml-2 inline" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="md:pt-20 lg:pt-4 max-w-125 min-h-125">
          <img
            className="md:w-[35%]! aspect-square hero-image opacity-0 absolute mx-auto right-0 md:right-auto md:left-2/3 rounded-md shadow-lg border"
            width={350}
            height={350}
            src={"/img/avatar.jpg"}
            alt="graphical ralph"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero
