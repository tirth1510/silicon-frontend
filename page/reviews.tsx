"use client";

import { Star } from "lucide-react";
import Image from "next/image";

export default function GoogleReviewSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-auto mx-auto px-6">
        

        {/* Google Rating Summary */}
        <div className="bg-white shadow-lg rounded-2xl p-8 mb-16 text-center max-w-full mx-auto border">
          
          <Image 
            src="/name2.png"
            alt="Google Rating"
            width={250}
            height={30}
            className="mx-auto mb-10"
          />
         

          {/* Total Reviews */}
          <script src="https://elfsightcdn.com/platform.js" async></script>
          <div
            className="elfsight-app-30549634-3cb4-4564-abad-80b8740e390e"
            data-elfsight-app-lazy
          ></div>
        </div>

        
      </div>
    </section>
  );
}
