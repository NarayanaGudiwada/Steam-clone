import React from 'react';
import type { Game } from '../types';
import { Play, Heart, ShoppingCart } from 'lucide-react';

interface FeaturedGameProps {
  game: Game;
}

export default function FeaturedGame({ game }: FeaturedGameProps) {
  const discountedPrice = game.discount 
    ? game.price * (1 - game.discount / 100) 
    : game.price;

  return (
    <div className="relative h-[500px] w-full overflow-hidden rounded-xl">
      <img 
        src={game.coverImage} 
        alt={game.title} 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent">
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h2 className="text-4xl font-bold text-white mb-4">{game.title}</h2>
          <p className="text-gray-200 mb-6 max-w-2xl">{game.description}</p>
          
          <div className="flex flex-wrap gap-3 mb-6">
            {game.tags.map(tag => (
              <span 
                key={tag} 
                className="px-3 py-1 bg-gray-800/80 text-gray-200 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
              <Play className="h-5 w-5" />
              <span>Play Now</span>
            </button>
            <button className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors">
              <ShoppingCart className="h-5 w-5" />
              <span>${discountedPrice.toFixed(2)}</span>
            </button>
            <button className="p-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors">
              <Heart className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}