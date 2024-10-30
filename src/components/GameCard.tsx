import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import type { Game } from '../types';

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  const discountedPrice = game.discount 
    ? game.price * (1 - game.discount / 100) 
    : game.price;

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden transition-transform hover:scale-105">
      <img 
        src={game.coverImage} 
        alt={game.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-white">{game.title}</h3>
          <div className="flex space-x-2">
            {game.discount ? (
              <span className="bg-green-600 text-white px-2 py-1 rounded text-sm">
                -{game.discount}%
              </span>
            ) : null}
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-3">
          {game.tags.slice(0, 3).map(tag => (
            <span 
              key={tag} 
              className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            {game.discount ? (
              <div className="flex flex-col">
                <span className="text-gray-400 line-through text-sm">
                  ${game.price.toFixed(2)}
                </span>
                <span className="text-white font-bold">
                  ${discountedPrice.toFixed(2)}
                </span>
              </div>
            ) : (
              <span className="text-white font-bold">
                ${game.price.toFixed(2)}
              </span>
            )}
          </div>
          
          <div className="flex space-x-2">
            <button className="p-2 rounded-full hover:bg-gray-700 text-gray-300 hover:text-white transition-colors">
              <Heart className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-700 text-gray-300 hover:text-white transition-colors">
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}