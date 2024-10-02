"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../providers";

export default function Footer() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    // <footer className="bg-gray-100 dark:bg-gray-800 py-16">
    //   <div className="max-w-6xl mx-auto px-4">
    //     {/* Footer content */}
    //     <div className="border-t border-gray-200 dark:border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
    //       <p>&copy; 2023 AutoFlow. All rights reserved.</p>
    //       <div className="flex space-x-4 mt-4 md:mt-0">
    //         <a
    //           href="#"
    //           className="text-sm hover:text-indigo-600 dark:hover:text-indigo-400"
    //         >
    //           Privacy Policy
    //         </a>
    //         <a
    //           href="#"
    //           className="text-sm hover:text-indigo-600 dark:hover:text-indigo-400"
    //         >
    //           Terms of Service
    //         </a>
    //         <a
    //           href="#"
    //           className="text-sm hover:text-indigo-600 dark:hover:text-indigo-400"
    //         >
    //           Cookie Policy
    //         </a>
    //       </div>
    //       <motion.button
    //         whileHover={{ scale: 1.1 }}
    //         whileTap={{ scale: 0.9 }}
    //         onClick={toggleDarkMode}
    //         className="mt-4 md:mt-0 inline-flex items-center justify-center rounded-full w-10 h-10 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600"
    //       >
    //         {darkMode ? (
    //           <Sun className="w-5 h-5" />
    //         ) : (
    //           <Moon className="w-5 h-5" />
    //         )}
    //       </motion.button>
    //     </div>
    //   </div>
    // </footer>

    <footer className="bg-gray-100 dark:bg-gray-800 py-16">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-12">
          <Image
            src="/placeholder.svg?height=80&width=240"
            width={240}
            height={80}
            alt="FlowSync Logo"
            className="mx-auto"
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  Integrations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  Enterprise
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  Community
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  Developers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  Partners
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Apps</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  Slack
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  Google Sheets
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  Trello
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  Salesforce
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2023 FlowSync. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              className="text-sm hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-sm hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              Cookie Policy
            </a>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleDarkMode}
            className="mt-4 md:mt-0 inline-flex items-center justify-center rounded-full w-10 h-10 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600"
          >
            {darkMode ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
