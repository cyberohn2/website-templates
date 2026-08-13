"use client";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion"


const Cta = () => {
  return (
    <div id="contact" className="py-1.5 text-white!">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="rounded-lg border-b bg-cover md:bg-center bg-left bg-no-repeat px-10 py-20"
        style={{ backgroundImage: "url('/img/Portfolio banner.jpg')" }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-[2.2rem] lg:text-[3rem] font-medium md:mb-10 mb-5"
        >
          Let's make something <br /> that matters.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-[#cccccc] font-medium mb-12 "
        >
          Have a project, a question, or just a good feeling ? Drop a line.
        </motion.p>
        <Link
          href="https://wa.me/2349138456384?text=Hello%20there%20"
          className="inline-block border p-2 rounded-xs mt-2 hover:underline underline-offset-2 font-medium text-sm md:text-[20px] "
        >
          <span>Start a Conversation</span>{" "}
          <ArrowUpRight className="ml-2 inline" />
        </Link>
      </motion.div>
    </div>
  );
}

export default Cta
