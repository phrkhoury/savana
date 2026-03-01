export interface Product {
  id: string;
  name: string;
  category: 'Prata' | 'Ouro' | 'Envelhecida' | 'Edição Especial';
  description: string;
  sensoryProfile: string;
  image: string;
  price?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Caraçuípe Extra Premium',
    category: 'Edição Especial',
    description: 'Destilada em alambiques de cobre e armazenada em barris de Carvalho francês por 3 anos e 6 meses.',
    sensoryProfile: 'Aroma de baunilha, chocolate amargo e tabaco. Sabor de nozes e baunilha.',
    image: 'https://savanacachacas.com.br/wp-content/uploads/2023/02/cachaca-caracuipe-extrapremium-750ml.png',
  },
  {
    id: '2',
    name: 'Alavanca Estojo Luxo 18 Anos',
    category: 'Edição Especial',
    description: 'Envelhecida em barris de carvalho europeu por 18 anos. Acompanha estojo e taças de cristal.',
    sensoryProfile: 'Magnífica e equilibrada, ideal para momentos de celebração.',
    image: 'https://savanacachacas.com.br/wp-content/uploads/2023/02/cachaca-alavanca-estojoluxo-18anos-700ml.png',
  },
  {
    id: '3',
    name: 'Dom Tápparo Extra Premium',
    category: 'Envelhecida',
    description: 'Armazenada 7 anos em Amendoim e envelhecida 3 anos em Carvalho Americano.',
    sensoryProfile: 'Premiadíssima, com notas marcantes de carvalho americano.',
    image: 'https://savanacachacas.com.br/wp-content/uploads/2023/02/cachaca-domtapparo-extrapremium-750ml.png',
  },
  {
    id: '4',
    name: 'Major Faria 12 Anos',
    category: 'Edição Especial',
    description: 'Cachaça artesanal de alta qualidade envelhecida por 12 anos, com estojo de madeira.',
    sensoryProfile: 'Perfil amadeirado profundo, suave e persistente.',
    image: 'https://savanacachacas.com.br/wp-content/uploads/2023/02/cachaca-majorfaria-12anos-estojomadeira-500ml.png',
  },
];
