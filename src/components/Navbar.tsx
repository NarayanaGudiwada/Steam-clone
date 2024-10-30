import React from 'react';
import { Search, ShoppingCart, Heart, User, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-blue-500">Steam</span>
            </div>
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-4">
                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800">Store</a>
                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800">Library</a>
                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800">Community</a>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search games..."
                  className="bg-gray-800 text-white px-4 py-2 pr-10 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <button className="p-2 rounded-full hover:bg-gray-800">
                <ShoppingCart className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-800">
                <Heart className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-800">
                <User className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button className="p-2 rounded-md hover:bg-gray-800">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}