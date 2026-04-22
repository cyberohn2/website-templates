import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import ctaCar from "@/assets/img/cta-car.webp"

const Cta = () => {
  return (
    <section className="py-16 relative max-w-360 lg:container px-4 flex flex-col md:flex-row items-center mx-auto">
      <div>
        <Image
          src={ctaCar}
          alt="cta car"
          className="lg:absolute xl:w-1/2! lg:w-[50%]! top-[25%] rounded-[15px] basis-1/2"
        />
      </div>
      <div className="lg:p-22.75 p-4 bg-white ml-auto lg:max-w-151.25 rounded-[15px] basis-1/2">
        <p className="lg:text-[32px] text-xl font-bold text-pry-blue lg:mb-9 mb-4">
          EVs For Everyone
        </p>
        <p className="text-gray-400 lg:mb-20.25 mb-10">
          We Provide Many of The Best Services For You and You Will Get The Best
          Benefit Here.
        </p>
        <Button className="bg-pry-blue rounded-full py-6 px-4">
          Read More <ArrowRight />
        </Button>
      </div>
    </section>
  );
}

export default Cta
