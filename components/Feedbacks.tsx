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
import user1 from "@/assets/img/user-1.png"
import user2 from "@/assets/img/user-2.png"
import user3 from "@/assets/img/user-3.png"
import user4 from "@/assets/img/user-4.png"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";


const Feedbacks = () => {
  const [api, setApi] = useState<CarouselApi>();

    const testimonials = [
      {
        author: "Alexa Bliss",
        img: user1,
        testi:
          "Excellent service! The team was punctual, thorough, and left my home sparkling clean. Highly recommend for anyone needing a reliable and detailed cleaning service",
      },
      {
        author: "Avril Lavigne",
        img: user2,
        testi:
          "Excellent service! The team was punctual, thorough, and left my home sparkling clean. Highly recommend for anyone needing a reliable and detailed cleaning service",
      },
      {
        author: "Steave Smith",
        img: user3,
        testi:
          "Excellent service! The team was punctual, thorough, and left my home sparkling clean. Highly recommend for anyone needing a reliable and detailed cleaning service",
      },
      {
        author: "Jessica",
        img: user4,
        testi:
          "Excellent service! The team was punctual, thorough, and left my home sparkling clean. Highly recommend for anyone needing a reliable and detailed cleaning service",
      },
    ];
  const imgRefs = useRef<Array<HTMLDivElement | null>>([]);

  const scaleImg = (index: number) => {
    const imgRef = imgRefs.current[index];
    if (!imgRef) {
      return;
    }

    imgRefs.current.forEach((img) => {
        if(img) {
            img.style.scale = "100%"
            img.style.border = "none"};
    })

    imgRef.style.scale = "120%"
    imgRef.style.border = "1px solid #4977E5";

    // imgRef.classList.add("hello")
  }

  useEffect(() => {
    scaleImg(0)
  },[])

  useEffect(() => {
    api?.on("select", () => {
      scaleImg(api?.selectedScrollSnap());
    });

    return () => {
      api?.off("select", () => {
        scaleImg(api?.selectedScrollSnap());
      });
    };
  }, [api, scaleImg]);


  return (
    <section className="py-20">
      <div className="flex items-center gap-4 justify-center mb-8">
        {testimonials.map((users, index) => (
          <div>
            <Image
              key={index}
              ref={(element) => {
                imgRefs.current[index] = element;
              }}
              src={users.img}
              alt={users.author}
              width={56.89}
              height={56.89}
              className="md:w-14.5 w-7.25 aspect-square rounded-full transition"
            />
            {/* <p className="text-[18px] text-(--dark-blue) mt-6">
              {index === api?.selectedScrollSnap() && users.author}
            </p> */}
          </div>
        ))}
      </div>
      <Carousel setApi={setApi}>
        <CarouselContent>
          {testimonials.map((user) => (
            <CarouselItem
              className="basis-full bg-transparent "
              key={user.author}
            >
              <p className="text-center">{user.testi}</p>
              <p className="text-sm text-center text-[#8b8b8b]">{user.author}</p>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          variant={"outline"}
          size={"icon-lg"}
          className=" bg-white shadow-sm"
        />
        <CarouselNext
          variant={"outline"}
          size={"icon-lg"}
          className=" bg-white shadow-sm "
        />
      </Carousel>
    </section>
  );
}

export default Feedbacks