import Image from "next/image";
import { Button } from "./ui/button";
import featureImg from "@/assets/img/feature-img.webp"

const Feature = () => {
  return (
    <div className="grid md:grid-cols-2 py-16 items-center gap-8 p-4">
      <div className="space-y-5">
        <h1 className="md:text-3xl text-xl font-bold text-center md:text-left">
          Laundry Done Right-Every Time
        </h1>
        <p className="text-sm text-[#838B95] text-center md:text-left">
          Clean and professional We provide reliable laundry and dry cleaning
          services designed to make your life easier. From everyday wear to
          delicate fabrics, your clothes are handled with care, cleaned to a
          high standard, and delivered fresh and ready to wear.
        </p>
        <ul className="list-disc ml-6">
          <li>Fast and Reliable</li>
          <li>Careful cleaning</li>
          <li>Easy pickup and delivery</li>
        </ul>
        <Button className="py-6 px-10.5 rounded-full mx-auto ">Get Quote</Button>
      </div>
      <div>
        <Image src={featureImg} alt="Laundry Service" className="ml-auto" />
      </div>
    </div>
  );
}

export default Feature
