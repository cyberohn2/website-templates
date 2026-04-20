"use client";
import Image from "next/image"
import car1 from "@/assets/img/car-img-1.webp"
import { ArrowUpRight, LocateFixed, ShieldCheck } from "lucide-react"
import Link from "next/link";
import { motion } from "framer-motion"

const About = () => {
  return (
    <div className="grid py-15 lg:grid-cols-2">
      <div className="flex flex-col items-center gap-16 border-[#9999994b] lg:border-r lg:pr-27">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-[1.5rem] lg:text-[3rem] font-medium"
        >
          We will take good care of your car
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Image height={341} width={448} src={car1} alt="luxury car" />
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
            <span>Precise Work</span>
          </h3>
          <p className="font-medium text-[#cccccc]">
            We uphold the highest standards of professionalism when servicing
            your vehicles.
          </p>
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
            <span>Premium Product and Services</span>
          </h3>
          <p>
            Ensures your car longevity with a periodic exterior protection
            treatment.
          </p>
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
            <span>High-Level Security and Privacy</span>
          </h3>
          <p>
            We understand the importance of privacy and security for our
            clientele.
          </p>
        </motion.div>
        <Link
          href="/contact"
          className="inline-block mt-16 hover:underline underline-offset-2 "
        >
          <span>Get Quote Now</span> <ArrowUpRight className="ml-2 inline" />
        </Link>
      </div>
    </div>
  );
}

export default About
