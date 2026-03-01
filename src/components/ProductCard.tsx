import React from 'react';
import { motion } from 'motion/react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-black/5"
    >
      <div className="relative h-80 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-savana-green/90 backdrop-blur-sm text-white text-[10px] uppercase tracking-widest font-bold rounded-full border border-white/10">
            {product.category}
          </span>
        </div>
      </div>
      <div className="p-8 space-y-4">
        <h3 className="text-2xl font-serif text-savana-green">{product.name}</h3>
        <p className="text-savana-earth/70 text-sm leading-relaxed">
          {product.description}
        </p>
        <div className="pt-4 border-t border-black/5">
          <p className="text-[11px] uppercase tracking-wider text-savana-gold font-bold mb-1">Perfil Sensorial</p>
          <p className="text-xs italic text-savana-earth/60">{product.sensoryProfile}</p>
        </div>
        <button 
          onClick={() => onViewDetails(product)}
          className="w-full py-3 mt-4 border border-savana-green text-savana-green hover:bg-savana-green hover:text-white transition-all duration-300 rounded-lg text-sm font-semibold uppercase tracking-widest"
        >
          Ver Detalhes
        </button>
      </div>
    </motion.div>
  );
};
