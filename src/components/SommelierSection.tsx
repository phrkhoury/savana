import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Send, Loader2, RefreshCw } from 'lucide-react';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export const SommelierSection: React.FC = () => {
  const [step, setStep] = useState(0);
  const [preferences, setPreferences] = useState({
    intensity: '',
    occasion: '',
    experience: '',
  });
  const [recommendation, setRecommendation] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleRecommendation = async () => {
    setLoading(true);
    try {
      const prompt = `Você é um Sommelier de Cachaça Premium da Savana Cachaças. 
      Com base nestas preferências do cliente:
      - Intensidade: ${preferences.intensity}
      - Ocasião: ${preferences.occasion}
      - Experiência: ${preferences.experience}
      
      Recomende um tipo de cachaça (Prata, Ouro, Envelhecida em Carvalho, Amburana ou Jequitibá) e explique o porquê de forma sofisticada e elegante. 
      Sugira também uma harmonização gastronômica. 
      Responda em Português do Brasil, mantendo um tom exclusivo e refinado.`;

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
      });

      setRecommendation(response.text || "Não foi possível gerar uma recomendação no momento.");
    } catch (error) {
      console.error("Erro ao gerar recomendação:", error);
      setRecommendation("Ocorreu um erro ao consultar o Sommelier. Por favor, tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setStep(0);
    setPreferences({ intensity: '', occasion: '', experience: '' });
    setRecommendation(null);
  };

  return (
    <section id="sommelier" className="py-24 bg-savana-green text-white overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-savana-gold blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-savana-gold blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-savana-gold/30 bg-savana-gold/10 text-savana-gold mb-6"
          >
            <Sparkles size={16} />
            <span className="text-xs font-semibold uppercase tracking-widest">Inteligência Artificial</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl mb-6">Descubra Sua Cachaça Ideal</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Nosso Sommelier Virtual utiliza tecnologia avançada para analisar seu paladar e recomendar o rótulo perfeito para cada momento.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="glass-card rounded-3xl p-8 md:p-12 min-h-[400px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {!recommendation && !loading && (
                <motion.div
                  key="questions"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  {step === 0 && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-serif text-center">Como você prefere a intensidade do sabor?</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {['Suave e Leve', 'Equilibrada', 'Intensa e Marcante'].map((opt) => (
                          <button
                            key={opt}
                            onClick={() => { setPreferences({ ...preferences, intensity: opt }); setStep(1); }}
                            className="px-6 py-4 rounded-xl border border-white/20 hover:border-savana-gold hover:bg-savana-gold/10 transition-all text-sm"
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 1 && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-serif text-center">Qual é a ocasião do consumo?</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {['Degustação Pura', 'Coquetelaria', 'Presente Especial'].map((opt) => (
                          <button
                            key={opt}
                            onClick={() => { setPreferences({ ...preferences, occasion: opt }); setStep(2); }}
                            className="px-6 py-4 rounded-xl border border-white/20 hover:border-savana-gold hover:bg-savana-gold/10 transition-all text-sm"
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-serif text-center">Qual sua experiência com cachaças premium?</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {['Iniciante', 'Entusiasta', 'Connoisseur'].map((opt) => (
                          <button
                            key={opt}
                            onClick={() => { setPreferences({ ...preferences, experience: opt }); handleRecommendation(); }}
                            className="px-6 py-4 rounded-xl border border-white/20 hover:border-savana-gold hover:bg-savana-gold/10 transition-all text-sm"
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              )}

              {loading && (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center space-y-6 py-12"
                >
                  <Loader2 className="w-12 h-12 text-savana-gold animate-spin" />
                  <p className="text-xl font-serif italic text-savana-gold">O Sommelier está analisando seu perfil...</p>
                </motion.div>
              )}

              {recommendation && !loading && (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-8"
                >
                  <div className="text-left space-y-4">
                    <h3 className="text-2xl font-serif text-savana-gold border-b border-savana-gold/20 pb-4">Nossa Recomendação</h3>
                    <div className="prose prose-invert max-w-none text-white/80 leading-relaxed italic">
                      {recommendation.split('\n').map((line, i) => (
                        <p key={i} className="mb-4">{line}</p>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-center pt-6">
                    <button
                      onClick={reset}
                      className="flex items-center gap-2 px-8 py-3 rounded-full bg-savana-gold text-savana-green font-bold hover:bg-white transition-colors"
                    >
                      <RefreshCw size={18} />
                      Nova Consulta
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
