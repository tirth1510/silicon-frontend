import { useState } from "react";
import { ShoppingCart, Eye, Filter, DoorClosedIcon } from "lucide-react";
import { ImageWithFallback } from "./figma/imageWithFallback";
import type { Product } from "../app/page";

type ProductsProps = {
  addToCart: (product: Product) => void;
  viewProduct: (product: Product) => void;
};

export function Products({ addToCart, viewProduct }: ProductsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const products: Product[] = [
    {
      id: 1,
      name: "Digital X-Ray System",
      category: "Imaging",
      price: 45000,
      image:
        "https://images.unsplash.com/photo-1666214280250-41f16ba24a26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaW1hZ2luZ3xlbnwxfHx8fDE3NjQ0NzczNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description:
        "High-resolution digital radiography system with advanced image processing",
      specs: [
        '17" x 17" detector',
        "Wireless connectivity",
        "Fast image acquisition",
        "Low radiation dose",
      ],
      inStock: true,
    },
    {
      id: 2,
      name: "Patient Monitor Pro",
      category: "Monitoring",
      price: 8500,
      image:
        "https://images.unsplash.com/photo-1763070282903-cbe9922ab7ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVjaG5vbG9neSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjQ0MTAwMDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description:
        "Multi-parameter patient monitoring system for critical care",
      specs: [
        "ECG, SpO2, NIBP, Temp",
        '15" touchscreen display',
        "Trend recording",
        "Alarm management",
      ],
      inStock: true,
    },
    {
      id: 3,
      name: "Automated Lab Analyzer",
      category: "Laboratory",
      price: 32000,
      image:
        "https://images.unsplash.com/photo-1602052577122-f73b9710adba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWJvcmF0b3J5JTIwZXF1aXBtZW50fGVufDF8fHx8MTc2NDQyMzI0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description:
        "High-throughput automated chemistry analyzer for clinical laboratories",
      specs: [
        "400 tests/hour",
        "Random access testing",
        "Minimal sample volume",
        "LIS connectivity",
      ],
      inStock: true,
    },
    {
      id: 4,
      name: "Surgical Instrument Set",
      category: "Surgical",
      price: 3500,
      image:
        "https://images.unsplash.com/photo-1668453598237-27098d2575ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXJnaWNhbCUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjQ0NzczNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Premium surgical instrument set with 50+ pieces",
      specs: [
        "Stainless steel construction",
        "Autoclavable",
        "Ergonomic design",
        "Lifetime warranty",
      ],
      inStock: true,
    },
    {
      id: 5,
      name: "Portable Ultrasound",
      category: "Imaging",
      price: 18500,
      image:
        "https://images.unsplash.com/photo-1516549655169-df83a0774514?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZGV2aWNlc3xlbnwxfHx8fDE3NjQ0NzczNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description:
        "Compact portable ultrasound system for point-of-care imaging",
      specs: [
        "Multiple transducer support",
        "2-hour battery life",
        "Cloud storage",
        "AI-assisted imaging",
      ],
      inStock: true,
    },
    {
      id: 6,
      name: "Vital Signs Monitor",
      category: "Monitoring",
      price: 2800,
      image:
        "https://images.unsplash.com/photo-1763070282903-cbe9922ab7ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVjaG5vbG9neSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjQ0MTAwMDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Compact vital signs monitor for routine patient assessment",
      specs: [
        "BP, SpO2, Pulse, Temp",
        "Portable design",
        "Data storage",
        "USB connectivity",
      ],
      inStock: true,
    },
    {
      id: 7,
      name: "Centrifuge System",
      category: "Laboratory",
      price: 4200,
      image:
        "https://images.unsplash.com/photo-1602052577122-f73b9710adba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWJvcmF0b3J5JTIwZXF1aXBtZW50fGVufDF8fHx8MTc2NDQyMzI0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "High-speed refrigerated centrifuge for clinical samples",
      specs: [
        "15,000 RPM max speed",
        "Temperature control",
        "Multiple rotor options",
        "Safety interlock",
      ],
      inStock: false,
    },
    {
      id: 8,
      name: "Defibrillator AED",
      category: "Emergency",
      price: 1850,
      image:
        "https://images.unsplash.com/photo-1516549655169-df83a0774514?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZGV2aWNlc3xlbnwxfHx8fDE3NjQ0NzczNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description:
        "Automated external defibrillator for emergency cardiac care",
      specs: [
        "Voice prompts",
        "Automatic shock delivery",
        "Adult/pediatric modes",
        "Carry case included",
      ],
      inStock: true,
    },
    {
      id: 9,
      name: "Sterilization Autoclave",
      category: "Surgical",
      price: 12000,
      image:
        "https://images.unsplash.com/photo-1668453598237-27098d2575ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXJnaWNhbCUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjQ0NzczNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Steam sterilization autoclave for surgical instruments",
      specs: [
        "23L capacity",
        "Quick cycle time",
        "Digital controls",
        "Validation port",
      ],
      inStock: true,
    },
  ];

  const categories = [
    "All",
    ...Array.from(new Set(products.map((p) => p.category))),
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        

        {/* Category Filter */}
        <div className="mb-8 py-4 flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden group">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {!product.inStock && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full">
                    Out of Stock
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="text-blue-600 mb-2">{product.category}</div>
                <h3 className="text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {product.description}
                </p>

                <div className="text-gray-900 mb-4">
                  ${product.price.toLocaleString()}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => viewProduct(product)}
                    className="flex-1 border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Details</span>
                  </button>
                  <button
                    onClick={() => addToCart(product)}
                    disabled={!product.inStock}
                    className={`flex-1 px-4 py-2 rounded-lg transition-colors flex items-center justify-center space-x-2 ${
                      product.inStock
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </button>
                  

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
