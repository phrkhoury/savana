import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Wine, 
  ShieldCheck, 
  Truck, 
  Award, 
  ChevronRight, 
  Instagram, 
  Facebook, 
  Menu, 
  X,
  Quote
} from 'lucide-react';
import { PRODUCTS } from './types';
import { ProductCard } from './components/ProductCard';
import { SommelierSection } from './components/SommelierSection';
import { PriceTable } from './components/PriceTable';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);

  const testimonials = [
    {
      name: "Ricardo Mendes",
      role: "Sommelier Internacional",
      text: "A curadoria da Savana é impecável. Encontrei rótulos que expressam a alma do terroir brasileiro com uma sofisticação raramente vista.",
      avatar: "https://picsum.photos/seed/man1/100/100"
    },
    {
      name: "Helena Silveira",
      role: "Proprietária de Bistrô",
      text: "Nossos clientes exigem o melhor, e a Savana entrega exatamente isso. A Cachaça Reserva da Família é a estrela da nossa carta de digestivos.",
      avatar: "https://picsum.photos/seed/woman1/100/100"
    },
    {
      name: "Arthur Drummond",
      role: "Colecionador",
      text: "O atendimento especializado e a exclusividade dos lotes fazem da Savana minha distribuidora de confiança para raridades artesanais.",
      avatar: "https://picsum.photos/seed/man2/100/100"
    }
  ];

  return (
    <div className="min-h-screen selection:bg-savana-gold selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-savana-cream/80 backdrop-blur-lg border-b border-black/5">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Wine className="text-savana-gold" size={32} />
            <span className="text-2xl font-serif tracking-tighter font-bold text-savana-green">SAVANA</span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {['Início', 'Sobre', 'Catálogo', 'Preços', 'Sommelier', 'Contato'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-xs uppercase tracking-[0.2em] font-semibold text-savana-green/70 hover:text-savana-gold transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <button className="hidden md:block px-6 py-2 bg-savana-green text-white text-xs uppercase tracking-widest font-bold rounded-full hover:bg-savana-gold transition-all">
            Área B2B
          </button>

          <button className="md:hidden text-savana-green" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-40 bg-savana-cream pt-24 px-6 md:hidden"
        >
          <div className="flex flex-col gap-8 text-center">
            {['Início', 'Sobre', 'Catálogo', 'Preços', 'Sommelier', 'Contato'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-xl font-serif text-savana-green"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="w-full py-4 bg-savana-green text-white rounded-xl font-bold uppercase tracking-widest">
              Área B2B
            </button>
          </div>
        </motion.div>
      )}

      {/* Hero Section */}
      <section id="início" className="relative h-screen flex items-center justify-center overflow-hidden bg-savana-black">
        <div className="absolute inset-0 opacity-60">
          <img 
            src="https://picsum.photos/seed/savana-hero-bg/1920/1080" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-savana-black/80 via-transparent to-savana-black"></div>
        </div>

        <motion.div 
          style={{ opacity, scale }}
          className="container mx-auto px-6 relative z-10 text-center"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block text-savana-gold text-xs uppercase tracking-[0.4em] font-bold mb-6"
          >
            Savana Cachaças • Distribuidora Premium
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-8xl text-white mb-8 leading-[1.1]"
          >
            A Excelência da Cachaça <br />
            <span className="italic font-normal">Artesanal em Cada Gota</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light"
          >
            Uma curadoria rigorosa dos alambiques mais exclusivos do Brasil, 
            trazendo tradição e sofisticação para o seu paladar.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <a href="#catálogo" className="px-10 py-4 bg-savana-gold text-savana-green font-bold uppercase tracking-widest rounded-full hover:bg-white transition-all flex items-center gap-2 group">
              Conheça Nosso Catálogo
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#sommelier" className="px-10 py-4 border border-white/30 text-white font-bold uppercase tracking-widest rounded-full hover:bg-white/10 transition-all">
              Fale com o Sommelier
            </a>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-px h-16 bg-gradient-to-b from-savana-gold to-transparent"
          ></motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 bg-savana-cream">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/savana-about-img/800/1000" 
                  alt="Sobre a Savana" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-savana-gold rounded-3xl -z-10 hidden md:block"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <span className="text-savana-gold font-bold uppercase tracking-widest text-sm">Nossa Essência</span>
              <h2 className="text-4xl md:text-5xl text-savana-green leading-tight">
                Paixão pela Cachaça, <br />
                Compromisso com a Arte.
              </h2>
              <p className="text-savana-earth/80 text-lg leading-relaxed">
                Na Savana Cachaças, não apenas distribuímos bebidas; celebramos a rica herança cultural do Brasil. Nossa curadoria é fruto de anos de pesquisa e parcerias com alambiques selecionados que mantêm viva a tradição artesanal.
              </p>
              <p className="text-savana-earth/80 text-lg leading-relaxed">
                Cada rótulo em nosso catálogo passa por um rigoroso processo de avaliação sensorial, garantindo que apenas a excelência chegue até você. Somos o elo entre o produtor apaixonado e o apreciador exigente.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                  <p className="text-4xl font-serif text-savana-gold mb-2">15+</p>
                  <p className="text-xs uppercase tracking-widest font-bold text-savana-green">Alambiques Parceiros</p>
                </div>
                <div>
                  <p className="text-4xl font-serif text-savana-gold mb-2">100%</p>
                  <p className="text-xs uppercase tracking-widest font-bold text-savana-green">Artesanal Premium</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Catalog */}
      <section id="catálogo" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-savana-gold font-bold uppercase tracking-widest text-sm mb-4 inline-block">Seleção Exclusiva</span>
            <h2 className="text-4xl md:text-5xl text-savana-green mb-6">Nosso Catálogo Premium</h2>
            <p className="text-savana-earth/70 text-lg">
              Explore nossa coleção de cachaças premiadas, desde as brancas mais puras até as envelhecidas em madeiras nobres.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="px-12 py-4 border-2 border-savana-green text-savana-green font-bold uppercase tracking-widest rounded-full hover:bg-savana-green hover:text-white transition-all">
              Ver Catálogo Completo
            </button>
          </div>
        </div>
      </section>

      {/* Price Table Section */}
      <PriceTable />

      {/* Sommelier Section */}
      <SommelierSection />

      {/* Differentiators */}
      <section className="py-24 bg-savana-cream">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: <Award className="text-savana-gold" size={40} />, title: "Curadoria Premium", desc: "Seleção rigorosa dos melhores alambiques do país." },
              { icon: <Truck className="text-savana-gold" size={40} />, title: "Entrega Segura", desc: "Logística especializada para garantir a integridade do produto." },
              { icon: <ShieldCheck className="text-savana-gold" size={40} />, title: "Atendimento Especializado", desc: "Suporte técnico para B2B e consultoria para apreciadores." },
              { icon: <Wine className="text-savana-gold" size={40} />, title: "Seleção Exclusiva", desc: "Rótulos e lotes limitados que você só encontra aqui." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center space-y-4"
              >
                <div className="flex justify-center mb-6">{item.icon}</div>
                <h3 className="text-xl font-serif text-savana-green">{item.title}</h3>
                <p className="text-savana-earth/70 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl text-savana-green">O que dizem os Connoisseurs</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {testimonials.map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-savana-cream p-10 rounded-3xl relative"
              >
                <Quote className="absolute top-6 right-6 text-savana-gold/20" size={48} />
                <p className="text-savana-earth/80 italic mb-8 relative z-10">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
                  <div>
                    <p className="font-bold text-savana-green">{t.name}</p>
                    <p className="text-xs text-savana-gold uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-savana-green text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://picsum.photos/seed/savana-footer-bg/1920/1080" 
            alt="Footer Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl mb-8">Eleve Sua Experiência com a <br /> Verdadeira Cachaça Premium</h2>
          <p className="text-white/70 text-xl max-w-2xl mx-auto mb-12">
            Seja para sua coleção pessoal ou para o seu estabelecimento, a Savana é sua parceira na busca pela excelência.
          </p>
          <button className="px-12 py-5 bg-savana-gold text-savana-green font-bold uppercase tracking-widest rounded-full hover:bg-white transition-all">
            Explorar Catálogo Completo
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="py-16 bg-savana-black text-white/50 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-white">
                <Wine className="text-savana-gold" size={24} />
                <span className="text-xl font-serif tracking-tighter font-bold">SAVANA</span>
              </div>
              <p className="text-sm leading-relaxed">
                Distribuidora Premium de Cachaças Artesanais. Elevando a cultura brasileira através da sofisticação e qualidade.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="hover:text-savana-gold transition-colors"><Instagram size={20} /></a>
                <a href="#" className="hover:text-savana-gold transition-colors"><Facebook size={20} /></a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Links Rápidos</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#sobre" className="hover:text-savana-gold transition-colors">Sobre Nós</a></li>
                <li><a href="#catálogo" className="hover:text-savana-gold transition-colors">Catálogo</a></li>
                <li><a href="#sommelier" className="hover:text-savana-gold transition-colors">Sommelier Virtual</a></li>
                <li><a href="#" className="hover:text-savana-gold transition-colors">Área do Lojista</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Categorias</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-savana-gold transition-colors">Cachaças Prata</a></li>
                <li><a href="#" className="hover:text-savana-gold transition-colors">Cachaças Ouro</a></li>
                <li><a href="#" className="hover:text-savana-gold transition-colors">Envelhecidas</a></li>
                <li><a href="#" className="hover:text-savana-gold transition-colors">Edições Limitadas</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Contato</h4>
              <ul className="space-y-4 text-sm">
                <li>contato@savanacachacas.com.br</li>
                <li>+55 (11) 99999-9999</li>
                <li>São Paulo, SP - Brasil</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest font-bold">
            <p>© 2024 Savana Cachaças. Todos os direitos reservados.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
