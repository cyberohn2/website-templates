"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import img1 from "@/assets/img/car-5.webp";
import img2 from "@/assets/img/car-4.webp";
import img3 from "@/assets/img/car-3.webp";
import { Separator } from "./ui/separator";

const posts = [
  {
    title: "Is the 2024 Porsche Cayenne S a Good SUV? 4 Pros and 3 Cons",
    image: img1,
  },
  {
    title: "Compact Steamroller: 2024 Toyota RAV4 Starts at $29,825",
    image: img2,
  },
  {
    title: "2024 Kia Niro EV Costs $50 More, Nearly Unchanged Otherwise",
    image: img3,
  },
];

const Blog = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-16">
      <div className="mb-10 flex items-center gap-6 text-(--body-1)">
        <Separator className="flex-1" />
        <p>Blogs</p>
        <Separator className="flex-1" />
      </div>
      <div className="mx-auto grid gap-7 md:grid-cols-3">
        {posts.map((blog, index) => (
          <motion.div
            key={blog.title}
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.65,
              delay: index * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative isolate flex h-93.75 flex-col justify-end overflow-hidden rounded-[15px] space-y-3.5"
          >
            <Image
              src={blog.image}
              alt={blog.title}
              className="absolute inset-0 -z-50 h-full w-full object-cover"
            />
            <div className="rounded-[15px] bg-white p-5 text-xl text-pry-blue">
              {blog.title}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
