"use client";

import {
  ShoppingCart,
  Menu,
  X,
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
  MessageCircle,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { Products } from "@/components/Products";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Cart } from "@/components/Cart";
import { ProductDetail } from "@/components/ProductDetail";
import { useState } from "react";
import Image from "next/image";

export type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  specs: string[];
  inStock: boolean;
};

export default function Home() {
  const [currentSection, setCurrentSection] = useState<
    "home" | "portfolio" | "shop" | "about" | "contact" | "product"
  >("home");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const addToCart = (product: Product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
          image: product.image,
        },
      ]);
    }
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
    } else {
      setCart(
        cart.map((item) => (item.id === id ? { ...item, quantity } : item))
      );
    }
  };

  const viewProduct = (product: Product) => {
    setSelectedProduct(product);
    setCurrentSection("product");
  };

  const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white">
      <Navbar
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        cartItemsCount={cartItemsCount}
        setIsCartOpen={setIsCartOpen}
      />

      <main>
        {currentSection === "home" && (
          <Hero setCurrentSection={setCurrentSection} />
        )}
        {currentSection === "portfolio" && <Portfolio />}
        {currentSection === "shop" && (
          <Products addToCart={addToCart} viewProduct={viewProduct} />
        )}
        {currentSection === "about" && <About />}
        {currentSection === "contact" && <Contact />}
        {currentSection === "product" && selectedProduct && (
          <ProductDetail
            product={selectedProduct}
            addToCart={addToCart}
            setCurrentSection={setCurrentSection}
          />
        )}
      </main>

      <Cart
        isOpen={isCartOpen}
        setIsOpen={setIsCartOpen}
        cart={cart}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
      />

      <footer className="bg-white text-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Info */}
            <div className="flex flex-col items-center space-y-4">
              {/* Top social icons */}

              {/* Logo */}
              <Image
                src="/name2.png"
                alt="Logo"
                width={200}
                height={50}
                className="object-contain transition-all duration-300"
              />
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="w-6 h-6 text-blue-600 hover:text-blue-800 transition-colors" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-6 h-6 text-blue-400 hover:text-blue-600 transition-colors" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-6 h-6 text-blue-700 hover:text-blue-900 transition-colors" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-6 h-6 text-pink-500 hover:text-pink-700 transition-colors" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-4 text-blue-600 font-semibold">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setCurrentSection("home")}
                    className="hover:text-blue-600 transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentSection("portfolio")}
                    className="hover:text-blue-600 transition-colors"
                  >
                    Portfolio
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentSection("shop")}
                    className="hover:text-blue-600 transition-colors"
                  >
                    Shop
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentSection("about")}
                    className="hover:text-blue-600 transition-colors"
                  >
                    About
                  </button>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="mb-4 text-blue-600 font-semibold">Support</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-600 transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 transition-colors">
                    Technical Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 transition-colors">
                    Warranty Info
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 transition-colors">
                    Training
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="mb-4 text-blue-600 font-semibold">Contact</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Email: info@meditech.com</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Address: 123 Medical Blvd</li>
                <li>New York, NY 10001</li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-500">
            <p>&copy; 2025 MediTech Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
