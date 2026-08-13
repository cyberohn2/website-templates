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
        title: "Female Native",
        category: "FEMALE_NATIVE",
        description:
          "Explore our latest collection of women's clothing.",
        imageUrl: "/img/avatar.jpg",
      },
      {
        title: "Male Native",
        category: "MALE_NATIVE",
        description: "Discover the newest trends in men's fashion.",
        imageUrl: "/img/avatar.jpg",
      },
      {
        title: "Corporate Male",
        category: "CORPORATE_MALE",
        description: "Find the perfect corporate attire for men.",
        imageUrl: "/img/avatar.jpg",
      },
      {
        title: "Corporate Female",
        category: "CORPORATE_FEMALE",
        description: "Find the perfect corporate attire for women.",
        imageUrl: "/img/avatar.jpg",
      },
      {
        title: "Street Wears",
        category: "STREET_WEAR",
        description:
          "Explore our latest collection of streetwear clothing and accessories.",
        imageUrl: "/img/avatar.jpg",
      },
    ];

  return (
    <section id="myworks" className="py-14 md:pt-24 border-t">
      <div className="container mx-auto px-4">
        <h2 className="lg:text-5xl md:text-4xl text-2xl lg:leading-18 md:leading-10 font-bold">
          Categories
        </h2>
        <Carousel className="mt-8">
          <CarouselContent className="isolate overflow-x-visible!">
            {sampleCategories.map((category, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                key={index}
              >
                <CarouselItem
                  className="bg-transparent md:basis-1/2 lg:basis-1/3 py-0 pl-0! min-w-[320px]"
                >
                  <CategoryCard
                    title={category.title}
                    description={category.description}
                    imageUrl={category.imageUrl}
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
