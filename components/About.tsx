import { Target, Eye } from "lucide-react";
import { ImageWithFallback } from "./figma/imageWithFallback";
import { motion } from "framer-motion";
import router from "next/router";
import CEOSection from "@/page/Ceo";

export function About() {
  return (
    <section>
      <div className="py-20">
        {/* Story Section */}
        <div className="max-w-7xl mt-5 mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-12 items-center">
            {/* LEFT SIDE SMALLER IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative h-[610px] rounded-3xl overflow-hidden shadow-xl"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1730181731087-ed9a04ca8406"
                alt="Our Story"
                className="w-full h-full] object-cover"
              />
            </motion.div>

            {/* RIGHT SIDE WIDER CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl p-10 border border-gray-200 w-full"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Silicon Meditech
                </span>
              </h2>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                Silicon Meditech has been a trusted supplier of advanced medical
                technologies since 2013. We deliver hospital equipment including
                critical care devices, cardiology systems, gynecology
                instruments, ventilators, and more. Under the leadership of
                <strong> Mr. Ankit H Patel</strong>, our mission is to support
                healthcare excellence with certified, reliable, and
                cost-effective solutions.
              </p>

              <button
                
                className="text-blue-600 font-semibold hover:underline hover:text-blue-800 transition mb-10"
              >
                Read more →
              </button>

              {/* Mission & Vision */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Mission */}
                <div className="bg-gray-50 p-7 rounded-xl shadow-sm border border-gray-200">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-gray-900 font-semibold mb-3">
                    Our Mission
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Empower healthcare providers with innovative technology that
                    enhances patient care and diagnostic accuracy worldwide.
                  </p>
                </div>

                {/* Vision */}
                <div className="bg-gray-50 p-7 rounded-xl shadow-sm border border-gray-200">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Eye className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-gray-900 font-semibold mb-3">
                    Our Vision
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    To be the most trusted global partner in medical technology,
                    recognized for innovation, reliability, and exceptional
                    service.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <CEOSection />
        
      </div>
    </section>
  );
}
