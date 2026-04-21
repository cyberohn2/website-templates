"use client";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import gsap from "gsap";
import audiImage from "@/assets/img/audi.webp";
import hondaImage from "@/assets/img/honda.webp";
import toyotaImage from "@/assets/img/toyota.webp";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import SplitType from "split-type";

const Hero = () => {
  const [api, setApi] = useState<CarouselApi>();
  const heroTextRefs = useRef<Array<HTMLDivElement | null>>([]);
  const heroImageRefs = useRef<Array<HTMLImageElement | null>>([]);
  const splitInstances = useRef<Array<SplitType | null>>([]);
  const animationRef = useRef<gsap.core.Tween | null>(null);
  const imageAnimationRef = useRef<gsap.core.Tween | null>(null);

  const items = [
    {
      name: "AUDI",
      img: audiImage,
    },
    {
      name: "HONDA",
      img: hondaImage,
    },
    {
      name: "TOYOTA",
      img: toyotaImage,
    },
  ];

  const resetSplitText = useCallback(() => {
    animationRef.current?.kill();
    animationRef.current = null;
    imageAnimationRef.current?.kill();
    imageAnimationRef.current = null;

    splitInstances.current.forEach((instance, index) => {
      instance?.revert();
      splitInstances.current[index] = null;
    });
  }, []);

  const animateHero = useCallback(
    (index: number) => {
      const heroText = heroTextRefs.current[index];

      if (!heroText) {
        return;
      }

      resetSplitText();

      const splitText = new SplitType(heroText, { types: "words,chars" });
      splitInstances.current[index] = splitText;

      splitText.chars?.forEach((char) => {
        char.classList.add("cliptext");
      });

      gsap.set(splitText.chars, { yPercent: 100 });

      animationRef.current = gsap.to(splitText.chars, {
        duration: 0.5,
        stagger: 0.1,
        yPercent: 0,
        delay: 0,
        overwrite: true,
      });

      const heroImage = heroImageRefs.current[index];

      if (!heroImage) {
        return;
      }

      imageAnimationRef.current = gsap.fromTo(
        heroImage,
        {
          x: 40,
          opacity: 0,
        },
        {
        duration: 1,
        x: 0,
        opacity: 1,
        delay: 0.1,
        overwrite: true,
      },
      );
    },
    [resetSplitText],
  );

  useEffect(() => {
    animateHero(0);

    return () => {
      resetSplitText();
    };
  }, [animateHero, resetSplitText]);

  useEffect(() => {
    if (!api) {
      return;
    }

    const handleSelect = () => {
      animateHero(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect);
    };
  }, [api, animateHero]);

  return (
    <section className="py-20 relative overflow-hidden">
      <Carousel
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className=" w-full isolate">
          {items.map((item, index) => (
            <CarouselItem
              className="basis-full bg-transparent lg:h-113 relative pt-30"
              key={index}
            >
              <div
                ref={(element) => {
                  heroTextRefs.current[index] = element;
                }}
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                  fontKerning: "none",
                }}
                className={` ${index === 0 ? "lg:text-[304px] text-9xl" : "lg:text-[200px] text-6xl"} text-gray-100 font-bold absolute inset-x-0 top-0 w-full h-full flex items-start justify-center text-center -z-50`}
              >
                {item.name}
              </div>
              <div className="flex flex-col-reverse md:flex-row h-full items-center justify-between px-5">
                <div className="flex-1">
                  <h1 className="text-pry-blue text-center md:text-left font-bold text-[30px]! lg:text-[50px]!">
                    Find Your Dream <span className="text-pry-red">CAR</span>
                  </h1>
                  <div className="flex items-center justify-center md:justify-normal gap-10">
                    <Button className="bg-pry-blue rounded-full py-6 px-4">
                      Order Now <ArrowRight />
                    </Button>
                  </div>
                </div>
                <Image
                  width={696}
                  height={373}
                  ref={(element) => {
                    heroImageRefs.current[index] = element;
                  }}
                  className="object-contain flex-1 w-60 h-35 md:w-100! md:h-70! lg:w-174 lg:h-93.25 hero-image opacity-0 translate-x-4"
                  src={item.img}
                  alt={item.name}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-6 gap-4">
          <CarouselPrevious
            variant={"outline"}
            size={"icon-lg"}
            className="static bg-white shadow-sm"
          />
          <CarouselNext
            variant={"outline"}
            size={"icon-lg"}
            className="static bg-white shadow-sm "
          />
        </div>
      </Carousel>
    </section>
  );
};

export default Hero;
