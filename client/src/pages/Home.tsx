import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, CheckCircle2, ArrowRight, Phone, Mail } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const whatsappNumber = "5585988889999"; // Substitua pelo seu número
  const whatsappMessage = "Olá! Gostaria de agendar uma consulta sobre direito previdenciário.";

  const handleWhatsApp = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleWhatsApp();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-amber-500/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-amber-500">ADV. ALEANDRO</div>
          <Button 
            onClick={handleWhatsApp}
            className="bg-green-600 hover:bg-green-700 text-white gap-2"
          >
            <MessageCircle size={18} />
            Fale Conosco
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Seu <span className="text-amber-500">Direito à Aposentadoria</span> é Nossa Missão
              </h1>
              <p className="text-xl text-slate-300 mb-8">
                Com mais de 25 anos de experiência em Direito Previdenciário, ajudamos milhares de brasileiros a conquistar a aposentadoria que merecem.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleWhatsApp}
                  className="bg-green-600 hover:bg-green-700 text-white text-lg py-6 px-8 gap-2"
                >
                  <MessageCircle size={20} />
                  Agende Sua Consulta
                </Button>
                <Button 
                  variant="outline"
                  className="border-amber-500 text-amber-500 hover:bg-amber-500/10 text-lg py-6 px-8"
                >
                  Saiba Mais
                </Button>
              </div>
            </div>
            
            {/* Placeholder para foto profissional */}
            <div className="relative">
              <div className="w-full aspect-square bg-gradient-to-br from-amber-500/20 to-blue-500/20 rounded-2xl border-2 border-amber-500/30 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-slate-400 text-lg">Sua Foto Profissional Aqui</p>
                  <p className="text-slate-500 text-sm mt-2">(Substitua com sua imagem)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Quem Sou Eu</h2>
            <p className="text-xl text-slate-300">Especialista em Direito Previdenciário e Benefícios do INSS</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-slate-700/50 border-amber-500/20 p-8">
              <div className="text-4xl font-bold text-amber-500 mb-2">25+</div>
              <p className="text-slate-300">Anos de Experiência</p>
            </Card>
            <Card className="bg-slate-700/50 border-amber-500/20 p-8">
              <div className="text-4xl font-bold text-amber-500 mb-2">5K+</div>
              <p className="text-slate-300">Clientes Satisfeitos</p>
            </Card>
            <Card className="bg-slate-700/50 border-amber-500/20 p-8">
              <div className="text-4xl font-bold text-amber-500 mb-2">98%</div>
              <p className="text-slate-300">Taxa de Sucesso</p>
            </Card>
          </div>

          <div className="bg-slate-700/50 border border-amber-500/20 rounded-xl p-8">
            <p className="text-lg text-slate-200 leading-relaxed">
              Sou <strong>Aleandro Ferreira</strong>, advogado especialista em Direito Previdenciário. Minha missão é garantir que você receba <strong>todos os benefícios que tem direito</strong> junto ao INSS, sem deixar dinheiro na mesa. 
              <br /><br />
              Trabalho com transparência, dedicação e conhecimento técnico profundo para resolver os casos mais complexos de aposentadoria, auxílio-doença, pensão por morte e muito mais.
            </p>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Meus Serviços</h2>
            <p className="text-xl text-slate-300">Soluções completas em Direito Previdenciário</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Aposentadoria por Idade", desc: "Guia completo para conquistar sua aposentadoria com o máximo de benefício." },
              { title: "Auxílio-Doença", desc: "Orientação especializada para conseguir seu auxílio-doença junto ao INSS." },
              { title: "Planejamento Previdenciário", desc: "Análise personalizada para otimizar seus direitos e benefícios futuros." },
              { title: "Benefícios do INSS", desc: "Consultoria sobre todos os tipos de benefícios disponíveis para você." },
              { title: "Revisão de Benefícios", desc: "Aumentar o valor do seu benefício através de revisões legais." },
              { title: "Perícia Médica", desc: "Preparação completa para sua perícia junto ao INSS com sucesso garantido." }
            ].map((service, idx) => (
              <Card key={idx} className="bg-slate-700/50 border-amber-500/20 p-8 hover:border-amber-500/50 transition-all hover:shadow-lg hover:shadow-amber-500/10">
                <CheckCircle2 className="text-amber-500 mb-4" size={32} />
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-300">{service.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">O Que Meus Clientes Dizem</h2>
            <p className="text-xl text-slate-300">Histórias de sucesso e transformação</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Maria Silva", text: "Consegui minha aposentadoria em 3 meses! Aleandro foi impecável do início ao fim.", rating: 5 },
              { name: "João Santos", text: "Aumentei meu benefício em R$ 800/mês com a revisão. Muito obrigado!", rating: 5 },
              { name: "Ana Costa", text: "Profissional atencioso, competente e que realmente se importa com seus clientes.", rating: 5 }
            ].map((testimonial, idx) => (
              <Card key={idx} className="bg-slate-700/50 border-amber-500/20 p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-amber-500">⭐</span>
                  ))}
                </div>
                <p className="text-slate-200 mb-4 italic">"{testimonial.text}"</p>
                <p className="text-amber-500 font-bold">{testimonial.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-amber-500/20 to-blue-500/20 border border-amber-500/30 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Pronto para Transformar Seu Futuro?</h2>
            <p className="text-xl text-slate-300 mb-8">
              Agende uma consulta gratuita e descubra como posso ajudá-lo a conquistar a aposentadoria que você merece.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-white text-lg py-6 px-8 gap-2"
              >
                <MessageCircle size={20} />
                Fale Comigo no WhatsApp
              </Button>
              <Button 
                variant="outline"
                className="border-amber-500 text-amber-500 hover:bg-amber-500/10 text-lg py-6 px-8 gap-2"
              >
                <Phone size={20} />
                Ligue Agora
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Entre em Contato</h2>
            <p className="text-xl text-slate-300">Preencha o formulário e entraremos em contato em breve</p>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div>
              <label className="block text-white mb-2 font-semibold">Nome Completo</label>
              <input 
                type="text"
                required
                className="w-full px-4 py-3 bg-slate-700 border border-amber-500/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-amber-500"
                placeholder="Seu nome"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white mb-2 font-semibold">Email</label>
                <input 
                  type="email"
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-amber-500/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-amber-500"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-white mb-2 font-semibold">Telefone</label>
                <input 
                  type="tel"
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-amber-500/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-amber-500"
                  placeholder="(85) 98888-9999"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>
            <div>
              <label className="block text-white mb-2 font-semibold">Mensagem</label>
              <textarea 
                required
                rows={5}
                className="w-full px-4 py-3 bg-slate-700 border border-amber-500/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-amber-500"
                placeholder="Conte-me sobre seu caso..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>
            <Button 
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-6 gap-2"
            >
              <MessageCircle size={20} />
              Enviar e Falar no WhatsApp
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-amber-500/20 py-12 px-4">
        <div className="container mx-auto text-center">
          <p className="text-slate-400 mb-4">© 2026 ADV. ALEANDRO FERREIRA - Todos os direitos reservados</p>
          <div className="flex justify-center gap-6 text-slate-400">
            <a href="#" className="hover:text-amber-500 transition">Política de Privacidade</a>
            <a href="#" className="hover:text-amber-500 transition">Termos de Serviço</a>
            <a href="#" className="hover:text-amber-500 transition">Contato</a>
          </div>
        </div>
      </footer>

      {/* Botão Flutuante WhatsApp */}
      <button
        onClick={handleWhatsApp}
        className="fixed bottom-8 right-8 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all z-40 animate-pulse"
        title="Fale conosco no WhatsApp"
      >
        <MessageCircle size={32} />
      </button>
    </div>
  );
}
