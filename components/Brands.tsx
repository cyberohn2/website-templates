"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import audiLogo from "@/assets/img/audi.png";
import ferrariLogo from "@/assets/img/ferrari.png";
import hondaLogo from "@/assets/img/honda.png";
import teslaLogo from "@/assets/img/tesla.png";
import toyotaLogo from "@/assets/img/toyota.png";
import { Separator } from "@/components/ui/separator";

const brands = [
  { src: audiLogo, alt: "Audi Logo" },
  { src: ferrariLogo, alt: "Ferrari Logo" },
  { src: hondaLogo, alt: "Honda Logo" },
  { src: teslaLogo, alt: "Tesla Logo" },
  { src: toyotaLogo, alt: "Toyota Logo" },
];

const Brands = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-16">
      <div className="mb-15 flex items-center gap-6 text-(--body-1)">
        <Separator className="flex-1" />
        <p>Brands</p>
        <Separator className="flex-1" />
      </div>
      <div className="flex flex-wrap items-center justify-between gap-6 md:gap-8">
        {brands.map((brand, index) => (
          <motion.div
            key={brand.alt}
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{
              duration: 0.6,
              delay: index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={shouldReduceMotion ? undefined : { scale: 1.06 }}
            className="origin-center will-change-transform"
          >
            <Image
              src={brand.src}
              alt={brand.alt}
              width={152}
              height={130}
              className="h-10! w-11! object-contain md:h-16.25! md:w-19! lg:h-32.5! lg:w-38!"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Brands;
