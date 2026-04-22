"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CarFront, PanelBottom, Wallet } from "lucide-react";
import { Separator } from "./ui/separator";

const services = [
  { title: "Top Buy & Sell Car", icon: CarFront },
  { title: "Easy Payment", icon: Wallet },
  { title: "Easy To Use", icon: PanelBottom },
];

const Services = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-16">
      <div className="mb-10 flex items-center gap-6 text-(--body-1)">
        <Separator className="flex-1" />
        <p>Our Services</p>
        <Separator className="flex-1" />
      </div>
      <p className="mb-15 text-center text-[18px] text-gray-400">
        We Provide Many of The Best Services For You and You Will Get The Best
        Benefit Here.
      </p>
      <div className="mx-auto grid max-w-255 gap-7 md:grid-cols-3">
        {services.map((serv, index) => (
          <motion.div
            key={serv.title}
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.65,
              delay: index * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="space-y-3.75 rounded-[15px] bg-white p-7.5"
          >
            <serv.icon />
            <h6 className="text-pry-blue">{serv.title}</h6>
            <p className="text-gray-400">
              We Provide Many of The Best Services For You and You Will Get The
              Best Benefit Here.
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
