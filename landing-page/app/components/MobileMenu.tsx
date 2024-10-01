"use client";

import React from "react";
import { motion } from "framer-motion";

export default function MobileMenu() {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      className="md:hidden bg-white dark:bg-gray-800 px-4 py-2"
    >
      <a
        href="#"
        className="block py-2 hover:text-indigo-600 dark:hover:text-indigo-400"
      >
        Solutions
      </a>
      <a
        href="#"
        className="block py-2 hover:text-indigo-600 dark:hover:text-indigo-400"
      >
        Pricing
      </a>
      <a
        href="#"
        className="block py-2 hover:text-indigo-600 dark:hover:text-indigo-400"
      >
        Resources
      </a>
      <a
        href="#"
        className="block py-2 hover:text-indigo-600 dark:hover:text-indigo-400"
      >
        Customers
      </a>
      <button className="mt-2 w-full inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-indigo-600 text-white hover:bg-indigo-700 h-10 px-4 py-2">
        Sign Up
      </button>
    </motion.div>
  );
}
