"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion"
import { CategoryCard } from "./category-card";

const Categories = () => {
    const sampleCategories = [
      {
        title: "Brand Identity Design",
        description: "Distinct visual identities that make brands memorable.",
        url: "https://drive.google.com/drive/folders/1jzGpY2StDNFiY6Y8KamX1PX3P7SEaI5P?usp=sharing",
        images: [
          "/img/brand-1.jpg",
          "/img/brand-2.jpg",
          "/img/brand-3.jpg",
          "/img/brand-4.png",
        ],
      },
      {
        title: "Flyer Design",
        description:
          "Eye-catching flyers designed to grab attention and inform.",
        url: "https://drive.google.com/drive/folders/16SIyVnleg0z4SSS-1LwB3PB3Omhhy9ay?usp=sharing",
        images: [
          "/img/flyer-1.jpg",
          "/img/flyer-2.jpg",
          "/img/flyer-3.jpg",
          "/img/flyer-4.jpg",
        ],
      },
      {
        title: "Poster Design",
        description: "Bold, creative posters that communicate at a glance.",
        url: "https://drive.google.com/drive/folders/10GWusNsn4FwzfccjiaqzjfVCE9vGlJxp?usp=sharing",
        images: [
          "/img/poster-1.jpg",
          "/img/poster-2.jpg",
          "/img/poster-3.jpg",
          "/img/poster-4.jpg",
        ],
      },
    ];

  return (
    <section id="myworks" className="py-14 md:pt-24 border-t">
      <div className="container mx-auto px-4">
        <h2 className="lg:text-5xl md:text-4xl text-2xl lg:leading-18 md:leading-10 font-bold">
          Portfolio
        </h2>
        <Carousel className="mt-8 overflow-visible!">
          <CarouselContent className="isolate overflow-x-visible! gap-2">
            {sampleCategories.map((category, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                key={index}
              >
                <CarouselItem
                  className="bg-transparent md:basis-1/2 lg:basis-1/3 py-0 pl-0! min-w-[320px] overflow-x-visible "
                >
                  <CategoryCard
                    title={category.title}
                    description={category.description}
                    images={category.images}
                    url={category.url}
                  />
                </CarouselItem>
              </motion.div>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-6 gap-4">
            <CarouselPrevious
              variant={"outline"}
              size={"icon-lg"}
              className="static bg-white shadow-sm text-black!"
            />
            <CarouselNext
              variant={"outline"}
              size={"icon-lg"}
              className="static bg-white shadow-sm text-black!"
            />
          </div>
        </Carousel>
      </div>
    </section>
  );
}

export default Categories
