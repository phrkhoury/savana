import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Wine, Award, ShieldCheck, Truck } from 'lucide-react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-savana-black/80 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-4xl bg-savana-cream rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
        >
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-savana-green transition-all"
          >
            <X size={24} />
          </button>

          <div className="w-full md:w-1/2 h-64 md:h-auto relative">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-6 left-6">
              <span className="px-4 py-2 bg-savana-gold text-savana-green text-xs uppercase tracking-[0.2em] font-bold rounded-full shadow-lg">
                {product.category}
              </span>
            </div>
          </div>

          <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-savana-green mb-4">{product.name}</h2>
              <div className="w-20 h-1 bg-savana-gold mb-6"></div>
              <p className="text-savana-earth/80 text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="bg-white/50 p-6 rounded-2xl border border-savana-gold/20">
              <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-savana-gold mb-3 flex items-center gap-2">
                <Wine size={16} />
                Perfil Sensorial
              </h4>
              <p className="text-savana-green italic text-lg">
                "{product.sensoryProfile}"
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-savana-gold/10 rounded-lg text-savana-gold">
                  <Award size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-savana-green">Qualidade</p>
                  <p className="text-xs text-savana-earth/60">Artesanal Premium</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-savana-gold/10 rounded-lg text-savana-gold">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-savana-green">Garantia</p>
                  <p className="text-xs text-savana-earth/60">Origem Controlada</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-black/5 flex flex-col sm:flex-row gap-4">
              <button className="flex-1 py-4 bg-savana-green text-white rounded-xl font-bold uppercase tracking-widest hover:bg-savana-gold transition-all shadow-lg shadow-savana-green/20">
                Solicitar Orçamento
              </button>
              <button className="flex-1 py-4 border border-savana-green text-savana-green rounded-xl font-bold uppercase tracking-widest hover:bg-savana-green hover:text-white transition-all">
                Falar com Especialista
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
