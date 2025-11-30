"use client";

import { Card, CardContent } from "@/components/ui/card";
import { UserCheck, ShieldCheck, Smile } from "lucide-react";

export default function WhyChooseUs() {
  const data = [
    {
      title: "Our Mentor",
      icon: <UserCheck className="w-10 h-10 text-blue-600" />,
      description:
        "Under the leadership and farsightedness of our CEO, Mr. Ankit H Patel has helped the enterprise to become a well-known name in the industry.",
    },
    {
      title: "Quality Assurance",
      icon: <ShieldCheck className="w-10 h-10 text-green-600" />,
      description:
        "We are one of the fastest-growing companies supplying hospital equipment with strict quality measures, and our team follows international quality standards.",
    },
    {
      title: "Customer Satisfaction",
      icon: <Smile className="w-10 h-10 text-yellow-600" />,
      description:
        "We are empowered with a skilled workforce offering top-quality products at economical prices. We are committed to achieving complete client satisfaction.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-gray-900">
          Why Choose Us
        </h2>

        {/* Three Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {data.map((item, index) => (
            <Card
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 border border-gray-200 hover:-translate-y-1"
            >
              <CardContent className="text-center space-y-4">

                {/* Icon */}
                <div className="flex justify-center">{item.icon}</div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>

              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
