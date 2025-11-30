"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import Gols from "./gols";
export default function CEOSection() {
  const ceos = [
    {
      name: "John Doe",
      position: "Chief Executive Officer",
      image: "/logo.png",
      intro:
        "John brings 15+ years of leadership experience, driving innovation and shaping our company vision.",
      email: "john.doe@example.com",
      phone: "+91 98765 43210",
    },
    {
      name: "Sarah Williams",
      position: "Co-Founder & CEO",
      image: "/logo.png",
      intro:
        "Sarah leads strategic growth, product innovation, and global expansion initiatives.",
      email: "sarah.williams@example.com",
      phone: "+91 87654 12345",
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-black mb-14">
        Meet Our Leadership
      </h2>
      <section
        className="relative py-9 bg-cover bg-center bg-no-repeat  "
        style={{ backgroundImage: "url('/p/image3.png')" }}
      >
        <div className="relative max-w-7xl mx-auto px-6 z-10 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
            {ceos.map((ceo, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row bg-white/80 backdrop-blur-lg shadow-lg border border-white/30 rounded-3xl overflow-hidden"
              >
                <Card className="w-full md:w-auto border-r-2 rounded-3xl shadow-blue-600">
                  <Image
                    src={ceo.image}
                    alt={ceo.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover bg-white "
                  />
                </Card>

                {/* RIGHT SIDE DETAILS BLOCK */}
                <Card className="w-full md:w-2/3 rounded-none md:rounded-r-2xl bg-transparent border-none shadow-none">
                  <CardHeader className="pt-8">
                    <CardTitle className="text-2xl font-semibold text-gray-900">
                      {ceo.name}
                    </CardTitle>
                    <p className="text-sm text-gray-600">{ceo.position}</p>
                  </CardHeader>

                  <CardContent className="space-y-4 text-gray-700 pb-8 pr-6">
                    <p>{ceo.intro}</p>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <span>{ceo.email}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        <span>{ceo.phone}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Gols />
    </div>
  );
}
