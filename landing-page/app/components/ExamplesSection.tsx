"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ExamplesSection() {
  const [activeTab, setActiveTab] = useState("Marketing");

  const tabs = ["Marketing", "Sales", "Finance", "HR"];

  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-16">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold text-center mb-12 font-playfair"
        >
          Automate Anything
        </motion.h2>
        <div className="flex justify-center space-x-4 mb-8">
          {tabs.map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 ${
                activeTab === tab
                  ? "bg-indigo-600 text-white hover:bg-indigo-700"
                  : "bg-white text-gray-900 hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600"
              }`}
            >
              {tab}
            </motion.button>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6"
        >
          <div className="aspect-w-16 aspect-h-9 h-[400px]">
            <Image
              src="/placeholder.svg"
              alt="Workflow Example"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
