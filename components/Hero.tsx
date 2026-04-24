import { Button } from "./ui/button";
import priceTag from "@/assets/img/price-tag.png"
import deliveryBasket from "@/assets/img/delivery-basket.png"
import shieldMark from "@/assets/img/shield-mark.png"
import calendar from "@/assets/img/calendar.png"
import Image from "next/image";

const Hero = () => {
  return (
    <div className="pb-20 md:pt-40 pt-25">
      <div className="grid md:grid-cols-2">
        <div className="md:space-y-8 space-y-4 text-center md:text-left">
          <p className="uppercase md:font-semibold text-primary text-xs font-normal">
            Quality cleaning at a fair price.{" "}
          </p>
          <h1 className="lg:text-[56px] text-[28px] text-(--dark-blue) font-bold">
            Happiness is Freshly <span className="text-primary">Cleaning</span>{" "}
            House
          </h1>
          <p className="text-[#838B95] text-sm">
            We provide top-notch cleaning for homes and businesses. Specialized,
            efficient, and thorough cleaning services.
          </p>
          <div className="flex gap-5 items-center flex-col md:flex-row ">
            <Button className="py-6 px-10.5 rounded-full">Get Quote</Button>
            <Button className="py-6 px-10.5 rounded-full" variant={"outline"}>
              Our Services
            </Button>
          </div>
        </div>
        <div
          className="bg-cover bg-center min-h-94.5"
          style={{ backgroundImage: "url('/hero-img.webp')" }}
        ></div>
      </div>
      <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between md:mt-20 mt-5">
        {[
          {
            feat: "Best Price",
            desc: "Cheap and best price",
            img: priceTag,
          },
          {
            feat: "Free Delivery",
            desc: "Cheap and best price",
            img: deliveryBasket,
          },
          {
            feat: "Customer's Protection",
            desc: "Cheap and best price",
            img: shieldMark,
          },
          {
            feat: "Live Support",
            desc: "Cheap and best price",
            img: calendar,
          },
        ].map((feat, index) => (
          <div
            key={index}
            className={`flex items-center gap-3.25 flex-1 px-6 ${index !== 3 && "md:border-r"}`}
          >
            <Image src={feat.img} alt={feat.feat} />
            <div>
              <p className="lg:text-base text-sm font-bold text-(--dark-blue) ">
                {feat.feat}
              </p>
              <p className="lg:text-sm text-xs text-[#838B95]">{feat.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero
