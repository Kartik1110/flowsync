"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

interface Testimonial {
  name: string;
  handle: string;
  content: string;
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      name: "Hikmet Atçeken",
      handle: "@hiatceken",
      content:
        "FlowSync's our daily tool to bypass averages and reveal true insights, for the whole team!",
    },
    {
      name: "Arda Guler",
      handle: "@ardaguler_",
      content:
        "FlowSync levels the analytics field for our team, enabling both beginners and pros to easily bypass average data and uncover the actionable insights that truly shape our marketing strategies.",
    },
    {
      name: "Maria Ancelotti",
      handle: "@maria_ancelotti",
      content:
        "From novice to pro, FlowSync helps our team uncover the extraordinary in our marketing data!",
    },
    {
      name: "Ragip Diler",
      handle: "@rdiler",
      content:
        "FlowSync empowers our whole team, techies or not, to dive into marketing analytics and spot the insights that really matter—no more average data!",
    },
    {
      name: "Jenny Wilson",
      handle: "@wilson_jenny_19",
      content:
        "FlowSync's user-friendly analytics let our whole team, regardless of skill, bypass averages to unearth and act on true, game-changing marketing insights every day.",
    },
    {
      name: "Guy Hawkins",
      handle: "@ghawkins",
      content:
        "FlowSync is a game-changer for our team—easy for beginners and powerful for digging beyond average data. It's our daily ally in unearthing those pivotal marketing insights that really drive strategy!",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-pink-100 via-white to-blue-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4 font-playfair">
            Public Cheers for Us!
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Find out how our users are spreading the word!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg relative"
            >
              <div className="flex items-center mb-4">
                <Image
                  src="/placeholder.svg"
                  width={40}
                  height={40}
                  alt={testimonial.name}
                  className="rounded-full mr-3"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.handle}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                {testimonial.content}
              </p>
              <X className="absolute top-2 right-2 w-4 h-4 text-gray-400" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
