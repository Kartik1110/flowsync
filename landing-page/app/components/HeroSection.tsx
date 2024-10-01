"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="dark:bg-gray-900">
      <section className="max-w-5xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 mb-8 md:mb-0"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 font-playfair">
            Automate Your Workflow with Ease
          </h1>
          <p className="text-xl mb-8 max-w-md">
            Connect your apps and automate workflows in minutes. No coding
            required.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-indigo-600 text-white hover:bg-indigo-700 h-11 px-8"
          >
            Get Started
            <ChevronRight className="ml-2" />
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:w-1/2"
        >
          <Image
            src="/hero-section.avif?height=400&width=600"
            width={600}
            height={400}
            alt="Workflow Automation"
            className="rounded-md"
          />
        </motion.div>
      </section>
    </div>
  );
}
