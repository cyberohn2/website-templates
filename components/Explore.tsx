import { Separator } from "./ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// import car1 from "@/assets/img/car-1.webp"
// import car2 from "@/assets/img/car-2.webp"
// import car3 from "@/assets/img/car-3.webp"
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
// import Image from "next/image";
import { WobbleCard } from "./ui/wobble-card";
import { DirectionAwareHover } from "./ui/direction-aware-hover";

const Explore = () => {
  const sampleCars = [
    {
      name: "Tesla Model 3",
      state: "Used",
      year: "2023",
      model: "LC76",
      fuel: "Petrol",
      price: 36620,
      img: "/img/car-1.webp",
    },
    {
      name: "Tesla Model 3",
      state: "Used",
      year: "2023",
      model: "LC76",
      fuel: "Petrol",
      price: 36620,
      img: "/img/car-2.webp",
    },
    {
      name: "Tesla Model 3",
      state: "Used",
      year: "2023",
      model: "LC76",
      fuel: "Petrol",
      price: 36620,
      img: "/img/car-3.webp",
    },
  ];

  return (
    <section className="py-16 bg-gray-200">
      <div className="mb-25 flex items-center gap-6 text-(--body-1) container mx-auto">
        <Separator className="flex-1" />
        <p>Explore</p>
        <Separator className="flex-1" />
      </div>
      <Tabs defaultValue="cars" className="px-6">
        <TabsList className="mx-auto flex-col lg:flex-row mb-28 lg:mb-10 bg-transparent ">
          <TabsTrigger className="rounded-full py-6 px-4" value="cars">
            Cars & Minivan
          </TabsTrigger>
          <TabsTrigger className="rounded-full py-6 px-4" value="trucks">
            Trucks
          </TabsTrigger>
          <TabsTrigger className="rounded-full py-6 px-4" value="suvs">
            Crossovers & SUVs
          </TabsTrigger>
          <TabsTrigger className="rounded-full py-6 px-4" value="electrified">
            Electrified
          </TabsTrigger>
        </TabsList>
        {["cars", "trucks", "suvs", "electrified"].map((value) => (
          <TabsContent key={value} value={value} className="container mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent className="gap-30 h-94.5!">
                {sampleCars.map((car) => (
                  <CarouselItem key={car.img} className="relative h-full lg:basis-[30%]">
                    <DirectionAwareHover
                      imageClassName="object-cover"
                      imageUrl={car.img}
                    >
                      <div className="bg-white p-4 rounded-md">
                        <div className="mb-8.5">
                          <h3 className="text-pry-blue font-normal!">
                            {car.name}
                          </h3>
                          <p className="text-gray-400">Used</p>
                        </div>
                        <div className="text-xs lg:text-base">
                          <div className="flex items-center justify-between mb-3.25">
                            <p className="text-gray-400 font-semibold">
                              Model Year
                            </p>
                            <p className="text-gray-400">{car.year}</p>
                          </div>
                          <div className="flex items-center justify-between mb-3.25">
                            <p className="text-gray-400 font-semibold">Model</p>
                            <p className="text-gray-400">{car.model}</p>
                          </div>
                          <div className="flex items-center justify-between mb-3.25">
                            <p className="text-gray-400 font-semibold">Fuel</p>
                            <p className="text-gray-400">{car.fuel}</p>
                          </div>
                          <div>
                            <p className="my-5 text-(--body-1) ">
                              ${car.price.toLocaleString("USD")}
                            </p>
                            <Button className="bg-pry-blue rounded-full py-6 px-4 w-full">
                              Order Now <ArrowRight />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </DirectionAwareHover>
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
          </TabsContent>
        ))}
        <TabsContent value="trucks"></TabsContent>
        <TabsContent value="suvs"></TabsContent>
        <TabsContent value="electrified"></TabsContent>
      </Tabs>
    </section>
  );
}

export default Explore
