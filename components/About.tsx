"use client";
import Image from "next/image"
import car1 from "@/assets/img/car-img-1.webp"
import { ArrowUpRight, LocateFixed, ShieldCheck } from "lucide-react"
import Link from "next/link";
import { motion } from "framer-motion"

const About = () => {
  return (
    <div className="grid py-20 lg:grid-cols-2 text-white!">
      <div className="flex flex-col items-center gap-16 border-[#9999994b] lg:border-r lg:pr-27">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-[1.5rem] lg:text-[3rem] font-medium"
        >
          My Toolkit
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-center">
            From the first word to the final pixel, I make brands feel like themselves.
          </p>
        </motion.div>
      </div>
      <div className="lg:pl-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="border-b border-[#9999994b] pb-10 space-y-6"
        >
          <h3 className="text-[24px] font-medium">
            <LocateFixed className="inline mr-4" />
            <span>Brand Strategy</span>
          </h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-b border-[#9999994b] py-10 space-y-6"
        >
          <h3 className="text-[24px] font-medium">
            <LocateFixed className="inline mr-4" />
            <span>Visual Identity</span>
          </h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className=" pt-10 space-y-6"
        >
          <h3 className="text-[24px] font-medium">
            <ShieldCheck className="inline mr-4" />
            <span>Digital Experiences</span>
          </h3>
        </motion.div>
        <Link
          href="https://wa.me/2349138456384?text=Hello%20there%20"
          className="inline-block mt-16 hover:underline underline-offset-2 bg-[white] text-black p-2"
        >
          <span className="text-black">Hire Me</span> <ArrowUpRight className="ml-2 inline text-black" stroke="black" />
        </Link>
      </div>
    </div>
  );
}

export default About
