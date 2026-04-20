"use client";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion"


const Cta = () => {
  return (
    <div className="py-1.5">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="rounded-lg border-b bg-cover bg-center bg-no-repeat px-10 py-20"
        style={{ backgroundImage: "url('/img/car-img-5.jpg')" }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-[1.2rem] lg:text-[3rem] font-medium md:mb-10 mb-5"
        >
          Book your luxury <br />
          car detailing today
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-[#cccccc] font-medium mb-12 "
        >
          Click the link below. Fill out the details and <br /> we'll get back
          to you in less than 24 hours.
        </motion.p>
        <Link
          href="/contact"
          className="inline-block border p-2 rounded-xs mt-2 hover:underline underline-offset-2 font-medium text-[20px] "
        >
          <span>Get a Quote Now</span> <ArrowUpRight className="ml-2 inline" />
        </Link>
      </motion.div>
    </div>
  );
}

export default Cta
