export interface Product {
  id: string;
  name: string;
  category: 'Prata' | 'Ouro' | 'Envelhecida' | 'Edição Especial' | 'Tradicional' | 'Premium';
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
  {
    id: '5',
    name: '10 Ouro',
    category: 'Ouro',
    description: 'Cachaça artesanal envelhecida que traz o equilíbrio perfeito entre o frescor e a madeira.',
    sensoryProfile: 'Notas adocicadas e final suave.',
    image: 'https://savanacachacas.com.br/wp-content/uploads/2023/02/cachaca-10-ouro-500ml.png',
  },
  {
    id: '6',
    name: 'Acqua Benta Ouro',
    category: 'Ouro',
    description: 'Uma experiência divina em cada gole, com maturação cuidadosa.',
    sensoryProfile: 'Aroma complexo com toques de especiarias.',
    image: 'https://savanacachacas.com.br/wp-content/uploads/2023/02/cachaca-acquabenta-ouro-500ml.png',
  },
  {
    id: '7',
    name: 'Adega de Minas',
    category: 'Tradicional',
    description: 'A essência das montanhas mineiras em uma garrafa clássica.',
    sensoryProfile: 'Sabor robusto e tradicional de Minas Gerais.',
    image: 'https://savanacachacas.com.br/wp-content/uploads/2023/02/cachaca-adegademinas-700ml.png',
  },
  {
    id: '8',
    name: 'Bassi Ouro',
    category: 'Ouro',
    description: 'Produção limitada com foco na pureza e no sabor refinado da cana.',
    sensoryProfile: 'Leve toque de mel e amêndoas.',
    image: 'https://savanacachacas.com.br/wp-content/uploads/2023/02/cachaca-bassi-ouro-670ml.png',
  },
  {
    id: '9',
    name: 'Blend Nordestino',
    category: 'Premium',
    description: 'Um encontro de sabores que celebra a diversidade das madeiras brasileiras.',
    sensoryProfile: 'Equilíbrio entre o doce e o amadeirado.',
    image: 'https://savanacachacas.com.br/wp-content/uploads/2023/02/cachaca-blendnordestino-750ml.png',
  },
  {
    id: '10',
    name: 'Cabaré Carvalho',
    category: 'Envelhecida',
    description: 'Famosa pela sua maciez e cor âmbar profunda, resultado do carvalho.',
    sensoryProfile: 'Notas de baunilha e coco.',
    image: 'https://savanacachacas.com.br/wp-content/uploads/2023/02/cachaca-cabare-ouro-carvalho-700ml.png',
  },
  {
    id: '11',
    name: 'Calibrina Prata',
    category: 'Prata',
    description: 'Cristalina e pura, ideal para coquetéis ou para apreciar gelada.',
    sensoryProfile: 'Frescor intenso com notas vegetais.',
    image: 'https://savanacachacas.com.br/wp-content/uploads/2023/02/cachaca-calibrina-prata-700ml.png',
  },
  {
    id: '12',
    name: 'Biquinha',
    category: 'Tradicional',
    description: 'Uma cachaça que remete às origens, com sabor autêntico e direto.',
    sensoryProfile: 'Final seco e marcante.',
    image: 'https://savanacachacas.com.br/wp-content/uploads/2023/02/cachaca-biquinha-600ml.png',
  },
];
