import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import car4 from "@/assets/img/car-img-4.jpg";
import car3 from "@/assets/img/car-img-3.webp";
import car2 from "@/assets/img/car-img-2.webp";

const Services = () => {
  const serviceList = [
    {
      img: car4,
      title: "Entry level detail",
      desc: "Treat your luxury car to a thorough hand wash and wax application",
    },
    {
      img: car3,
      title: "Maintenance detail",
      desc: "Ensure your car's longevity with a periodic exterior protection treatment.",
    },
    {
      img: car2,
      title: "Full detail",
      desc: "Pamper your vehicle with a complete treatment, leaving no detail overlooked.",
    },
  ];

  return (
    <div className="py-[3.75rem]">
      <h2 className="text-[20px] text-[#999999] font-medium border-b pb-10 border-[#999999] mb-12">
        Luxury car detailing
      </h2>
      <div className="grid lg:grid-cols-2 items-center mb-20">
        <h2 className="text-[48px] font-medium">Love in Every Detail</h2>
        <p className="text-[20px] text-[#999999]">
          Immerse yourself in luxury with our bespoke detailing packages
          tailored to your car's unique needs
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center md:gap-8 gap-4">
        {serviceList.map((service) => (
          <div className=" flex flex-col gap-8" key={service.title}>
            <div>
              <Image
                width={352}
                height={352}
                className="mb-8 aspect-square h-[22rem] w-[22rem] object-cover"
                src={service.img}
                alt="luxury-car-service"
              />
              <h3 className="mb-5 font-medium text-[24px]">{service.title}</h3>
              <p className="text-[#999999]">{service.desc}</p>
            </div>
            <Link className="" href={"#"}>
              <span>Learn more</span> <ArrowRight className="ml-2 inline" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services
