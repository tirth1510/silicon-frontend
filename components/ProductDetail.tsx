import { ArrowLeft, ShoppingCart, Check } from 'lucide-react';
import { ImageWithFallback } from './figma/imageWithFallback';
import type { Product } from '../app/page';

type ProductDetailProps = {
  product: Product;
  addToCart: (product: Product) => void;
  setCurrentSection: (section: 'home' | 'portfolio' | 'shop' | 'about' | 'contact') => void;
};

export function ProductDetail({ product, addToCart, setCurrentSection }: ProductDetailProps) {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => setCurrentSection('shop')}
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Products</span>
        </button>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image */}
            <div className="h-96 lg:h-full">
              <ImageWithFallback 
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details */}
            <div className="p-8 lg:p-12">
              <div className="text-blue-600 mb-2">{product.category}</div>
              <h1 className="text-gray-900 mb-4">{product.name}</h1>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-gray-900">${product.price.toLocaleString()}</div>
                {product.inStock ? (
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full flex items-center space-x-1">
                    <Check className="w-4 h-4" />
                    <span>In Stock</span>
                  </span>
                ) : (
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full">
                    Out of Stock
                  </span>
                )}
              </div>

              <p className="text-gray-600 mb-8">{product.description}</p>

              {/* Specifications */}
              <div className="mb-8">
                <h3 className="text-gray-900 mb-4">Key Specifications</h3>
                <ul className="space-y-2">
                  {product.specs.map((spec, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Additional Info */}
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h4 className="text-gray-900 mb-3">Whats Included</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• Product unit</li>
                  <li>• User manual and documentation</li>
                  <li>• 2-year warranty</li>
                  <li>• Installation support</li>
                  <li>• Technical training</li>
                </ul>
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <button
                  onClick={() => addToCart(product)}
                  disabled={!product.inStock}
                  className={`flex-1 px-6 py-3 rounded-lg transition-colors flex items-center justify-center space-x-2 ${
                    product.inStock
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Add to Cart</span>
                </button>
              </div>

              {/* Support */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-gray-600">
                  Questions about this product? Contact our sales team at{' '}
                  <a href="mailto:sales@meditech.com" className="text-blue-600 hover:underline">
                    sales@meditech.com
                  </a>{' '}
                  or call <span className="text-blue-600">+1 (555) 123-4567</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-gray-900 mb-8">You May Also Like</h2>
          <p className="text-gray-600 text-center">Related products would appear here</p>
        </div>
      </div>
    </div>
  );
}
