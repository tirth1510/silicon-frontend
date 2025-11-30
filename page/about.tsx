"use client";

import { motion } from "framer-motion";
import { Calendar, Building2, Users, Globe, Wallet } from "lucide-react";
import router from "next/router";

export default function AboutUs() {
  const data = [
    { icon: <Building2 className="w-6 h-6 text-purple-600" />, title: "Nature of Business", value: "Traders & Wholesale Supplier" },
    { icon: <Users className="w-6 h-6 text-orange-600" />, title: "Number of Employees", value: "10 People" },
    { icon: <Globe className="w-6 h-6 text-red-600" />, title: "Market Covered", value: "PAN India" },
    { icon: <Wallet className="w-6 h-6 text-yellow-600" />, title: "Annual Turnover", value: "Below Rs. 0.5 Crore Approx." },
  ];

  return (
    <section className="relative py-16 bg-gray-50">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* ===== LEFT: ABOUT ===== */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-8 border border-gray-200"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Silicon Meditech
              </span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
              Silicon Meditech is a proficient medical product supplier delivering high-quality healthcare equipment at cost-effective rates since 2013. We provide certified hospital solutions including Criticare devices, cardiology machines, gynecology instruments, ventilators, suction machines, and more. Our CEO, Mr. Ankit H Patel, ensures the company remains a trusted name in medical technology with strict adherence to quality standards.
            </p>
            <button
              className="text-blue-600 font-semibold hover:underline hover:text-blue-800 transition"
            >
              Read more →
            </button>
          </motion.div>

          {/* ===== RIGHT: ACHIEVEMENTS ===== */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {data.map((item, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 text-center shadow-md border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-2xl bg-gray-100 shadow-inner">
                    {item.icon}
                  </div>
                </div>
                <p className="text-gray-900 font-semibold text-sm mb-1 tracking-wide">{item.title}</p>
                <p className="text-gray-600 text-sm font-medium">{item.value}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
