"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/imageWithFallback";
import About from "@/page/about";
import Review from "@/page/reviews";
type HeroProps = {
  setCurrentSection: (
    section: "home" | "portfolio" | "shop" | "about" | "contact"
  ) => void;
};

const sliderImages = ["./p/image.png", "./p/image2.png"];

export function Hero({ setCurrentSection }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 10000); // <-- 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <section className="relative bg-white pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 rounded-b-3xl shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-4">
              <div className="inline-block bg-blue-500/20 backdrop-blur-sm px-3 py-1 rounded-full mb-4 border border-blue-400/30 text-sm">
                <span className="text-blue-600">
                  ✨ Trusted by 500+ Healthcare Facilities
                </span>
              </div>
              <h1 className="text-gray-900 text-2xl sm:text-3xl lg:text-4xl font-bold">
                Advanced Medical Technology for Better Healthcare
              </h1>
              <p className="text-gray-600 text-base sm:text-lg lg:text-xl">
                Empowering healthcare professionals with cutting-edge medical
                equipment and innovative solutions. Quality, reliability, and
                precision in every product.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-10 sm:mt-20 justify-center lg:justify-start">
                <button
                  onClick={() => setCurrentSection("shop")}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all hover:shadow-lg flex items-center space-x-2"
                >
                  <span>Browse Products</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setCurrentSection("portfolio")}
                  className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-all hover:shadow-lg"
                >
                  View Portfolio
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative w-full h-[250px] sm:h-[350px] lg:h-[450px] flex items-center justify-center">
              {sliderImages.map((src, index) => (
                <ImageWithFallback
                  key={index}
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className={`absolute w-full h-full object-contain transition-opacity duration-1000 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section>
        <About />
        <Review />
      </section>
    </div>
  );
}
