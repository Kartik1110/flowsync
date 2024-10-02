"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../providers";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { darkMode } = useTheme();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="dark:bg-gray-900">
      <nav
        className={`max-w-5xl mx-auto px-4 py-4 flex justify-between items-center`}
      >
        <div className="flex items-center">
          <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 font-sans">
            FlowSync
          </span>
        </div>
        <div className="hidden md:flex space-x-4">
          <a
            href="#"
            className="hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            Solutions
          </a>
          <a
            href="#"
            className="hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            Pricing
          </a>
          <a
            href="#"
            className="hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            Resources
          </a>
          <a
            href="#"
            className="hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            Customers
          </a>
        </div>
        <div className="flex items-center">
          <button className="hidden md:inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-indigo-600 text-white hover:bg-indigo-700 h-10 px-4 py-2">
            Sign Up
          </button>
          <button onClick={toggleMobileMenu} className="md:hidden">
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        <AnimatePresence>{mobileMenuOpen && <MobileMenu />}</AnimatePresence>
      </nav>
    </div>
  );
}
