import React, { useState, useMemo } from 'react';
import { Search, ChevronDown, ChevronUp, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PriceItem {
  name: string;
  volume: string;
  price: number;
}

const PRICE_DATA: PriceItem[] = [
  { name: "10 ouro", volume: "500ml", price: 32.00 },
  { name: "100 LIMITE BLACK", volume: "750ml", price: 108.00 },
  { name: "100 LIMITE diamante", volume: "700ml", price: 435.00 },
  { name: "100 LIMITE ouro", volume: "700ml", price: 67.00 },
  { name: "100 LIMITE prata", volume: "700ml", price: 56.00 },
  { name: "1000 MONTES 3AOB carvalho", volume: "500ml", price: 79.00 },
  { name: "1000 MONTES 3AOB Strong", volume: "500ml", price: 89.00 },
  { name: "1000 MONTES SUPER BRUTA", volume: "700ml", price: 131.00 },
  { name: "1922 envelheccida", volume: "700ml (SP)", price: 89.50 },
  { name: "1922 prata", volume: "700ml (SP)", price: 66.50 },
  { name: "30 LUAS PREMIUM", volume: "500ml (RS)", price: 189.00 },
  { name: "6 ANNAS prata", volume: "700ml (ES)", price: 47.00 },
  { name: "A LOCOMOTIVA ouro", volume: "700ml (RS)", price: 82.00 },
  { name: "A PREFERIDA", volume: "600ml", price: 30.00 },
  { name: "ABAÍRA ouro", volume: "670ml (BA)", price: 62.00 },
  { name: "ABAÍRA prata", volume: "670ml (BA)", price: 59.00 },
  { name: "ALAMBIQUE BRASIL amburana", volume: "700ml (PR)", price: 86.00 },
  { name: "ALAMBIQUE BRASIL prata", volume: "700ml (PR)", price: 63.00 },
  { name: "ANÍSIO SANTIAGO", volume: "600ml", price: 575.00 },
  { name: "ANÍSIO SANTIAGO ed. comemorativa 80anos", volume: "500ml", price: 900.00 },
  { name: "BALANGA BICHA", volume: "600ml", price: 62.35 },
  { name: "BEM ME QUER amburana", volume: "700ml", price: 59.50 },
  { name: "BOAZINHA", volume: "700ml", price: 50.50 },
  { name: "CABARÉ extra premium", volume: "700ml (SP)", price: 390.00 },
  { name: "CANARINHA", volume: "600ml", price: 175.00 },
  { name: "DOM BRÉ extra premium carvalho", volume: "700ml", price: 149.60 },
  { name: "ESPÍRITO DE MINAS", volume: "700ml", price: 113.50 },
  { name: "GERMANA BRASIL", volume: "700ml", price: 174.00 },
  { name: "HAVANA", volume: "600ml", price: 830.00 },
  { name: "MAGNÍFICA reserva Soleira", volume: "700ml (RJ)", price: 430.00 },
  { name: "PRINCESA ISABEL soleira brasileira", volume: "750ml (ES)", price: 1100.00 },
  { name: "VALE VERDE 12 anos ed especial", volume: "700ml", price: 718.00 },
  { name: "WEBER HAUS XII anos lote 48 estojo", volume: "750ml (RS)", price: 3710.00 },
];

export const PriceTable: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showTable, setShowTable] = useState(false);
  const [sortConfig, setSortConfig] = useState<{ key: keyof PriceItem; direction: 'asc' | 'desc' } | null>(null);

  const filteredData = useMemo(() => {
    return PRICE_DATA.filter(item => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const sortedData = useMemo(() => {
    let items = [...filteredData];
    if (sortConfig !== null) {
      items.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return items;
  }, [filteredData, sortConfig]);

  const requestSort = (key: keyof PriceItem) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const isSearching = searchTerm.length > 0;
  const shouldShowTable = showTable || isSearching;

  return (
    <section id="precos" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-savana-gold font-bold uppercase tracking-widest text-sm mb-4 inline-block">Transparência</span>
          <h2 className="text-4xl md:text-5xl text-savana-green mb-6">Tabela de Preços</h2>
          <p className="text-savana-earth/70 text-lg">
            Consulte os valores de nossos rótulos exclusivos. Digite o nome da cachaça para ver o preço instantaneamente.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="mb-12 flex flex-col md:flex-row gap-6 items-center justify-center">
            <div className="relative w-full md:w-[500px]">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-savana-earth/40" size={20} />
              <input
                type="text"
                placeholder="Qual cachaça você procura?"
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-black/10 bg-savana-cream/20 focus:outline-none focus:ring-2 focus:ring-savana-gold/30 transition-all text-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <button 
              onClick={() => setShowTable(!showTable)}
              className="px-8 py-4 bg-savana-green text-white rounded-2xl font-bold uppercase tracking-widest hover:bg-savana-gold transition-all flex items-center gap-2 whitespace-nowrap"
            >
              {showTable ? 'Ocultar Tabela' : 'Ver Tabela Completa'}
            </button>
          </div>

          <AnimatePresence>
            {shouldShowTable && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                <div className="flex justify-between items-center px-2">
                  <div className="text-xs text-savana-earth/50 font-bold uppercase tracking-widest">
                    {sortedData.length} itens encontrados
                  </div>
                </div>

                <div className="overflow-x-auto rounded-3xl border border-black/5 shadow-xl bg-white">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-savana-green text-white">
                        <th 
                          className="px-8 py-5 cursor-pointer hover:bg-savana-green/90 transition-colors"
                          onClick={() => requestSort('name')}
                        >
                          <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold">
                            Produto
                            {sortConfig?.key === 'name' && (sortConfig.direction === 'asc' ? <ChevronUp size={14} /> : <ChevronDown size={14} />)}
                          </div>
                        </th>
                        <th className="px-8 py-5">
                          <div className="text-xs uppercase tracking-widest font-bold">Volume</div>
                        </th>
                        <th 
                          className="px-8 py-5 cursor-pointer hover:bg-savana-green/90 transition-colors text-right"
                          onClick={() => requestSort('price')}
                        >
                          <div className="flex items-center justify-end gap-2 text-xs uppercase tracking-widest font-bold">
                            Preço (R$)
                            {sortConfig?.key === 'price' && (sortConfig.direction === 'asc' ? <ChevronUp size={14} /> : <ChevronDown size={14} />)}
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-black/5">
                      {sortedData.map((item, index) => (
                        <motion.tr 
                          key={index}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: index * 0.01 }}
                          className="hover:bg-savana-cream/30 transition-colors group"
                        >
                          <td className="px-8 py-5 font-serif text-savana-green text-lg">{item.name}</td>
                          <td className="px-8 py-5 text-sm text-savana-earth/60">{item.volume}</td>
                          <td className="px-8 py-5 text-right font-mono font-bold text-savana-gold text-lg">
                            {item.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                          </td>
                        </motion.tr>
                      ))}
                      {sortedData.length === 0 && (
                        <tr>
                          <td colSpan={3} className="px-8 py-20 text-center text-savana-earth/40 italic text-lg">
                            Nenhum resultado encontrado para "{searchTerm}"
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          <div className="mt-12 p-8 bg-savana-cream/30 rounded-3xl border border-dashed border-savana-gold/20">
            <p className="text-sm text-savana-earth/60 leading-relaxed text-center italic">
              * Valores para pedidos no atacado. Sujeitos a alteração sem aviso prévio. 
              Para orçamentos personalizados, entre em contato com nossa equipe comercial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
