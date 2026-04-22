"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import img1 from "@/assets/img/img-1.png";
import img2 from "@/assets/img/img-2.png";
import img3 from "@/assets/img/img-3.png";
import { Separator } from "./ui/separator";

const feedback = [
  { author: "Orlaith Parastu", image: img1 },
  { author: "Melina Nesterenko", image: img2 },
  { author: "Eve Artie", image: img3 },
];

const Feedback = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-16">
      <div className="mb-10 flex items-center gap-6 text-(--body-1)">
        <Separator className="flex-1" />
        <p>Our Customer Feedback</p>
        <Separator className="flex-1" />
      </div>

      <div className="mx-auto grid gap-7 md:grid-cols-3">
        {feedback.map((auth, index) => (
          <motion.div
            key={auth.author}
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.65,
              delay: index * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="space-y-3.5 rounded-[15px] bg-white p-7.5"
          >
            <div className="flex flex-col gap-[17.28px] lg:flex-row lg:items-center">
              <Image
                src={auth.image}
                alt={auth.author}
                className="aspect-square w-[60.48px]! rounded-full"
              />
              <div>
                <p className="font-bold text-pry-blue">{auth.author}</p>
                <p className="text-xs text-pry-blue">
                  Bought Tesla Model 3 For $85,000
                </p>
              </div>
            </div>
            <div className="text-sm text-gray-400">
              The listing was hot (more than 170 bids). Everything worked well.
              We appreciated a simple process. Listing page, chat with a seller,
              the auction, escrow service - everything was great and we did not
              need anything on top.
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Feedback;
