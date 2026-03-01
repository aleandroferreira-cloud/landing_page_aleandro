import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, CheckCircle2, ArrowRight, Phone, Mail, Star } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const whatsappNumber = "556299303461"; // Dr. Aleandro - Goiás - CORRIGIDO
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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Navbar Premium */}
      <nav className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-amber-600/30">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663029111455/PopmGcJiGYmBGDP3pSyZ4Z/pasted_file_WN3qtB_image_127a3f70.png"
              alt="Logo ADV. Aleandro"
              className="h-12 w-12"
            />
            <div>
              <div className="text-lg font-bold text-amber-500">ALEANDRO</div>
              <div className="text-xs text-amber-600">ADVOCACIA</div>
            </div>
          </div>
          <Button 
            onClick={handleWhatsApp}
            className="bg-amber-600 hover:bg-amber-700 text-white gap-2 rounded-full"
          >
            <MessageCircle size={18} />
            Fale Conosco
          </Button>
        </div>
      </nav>

      {/* Hero Section Premium */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-10 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              {/* Logo Circular com Iniciais */}
              <div className="mb-8 flex items-center gap-4">
                <div className="w-20 h-20 rounded-full border-2 border-amber-600 flex items-center justify-center bg-gradient-to-br from-amber-600/20 to-amber-700/10">
                  <span className="text-4xl font-bold text-amber-500">AF</span>
                </div>
                <div>
                  <p className="text-amber-600 text-sm font-semibold tracking-widest">ESPECIALISTA EM</p>
                  <p className="text-white text-lg font-bold">DIREITO PREVIDENCIÁRIO</p>
                </div>
              </div>

              <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Seu <span className="text-amber-500">Direito à</span> Aposentadoria é Nossa <span className="text-amber-500">Missão</span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-4 leading-relaxed">
                Com mais de 25 anos de experiência em Direito Previdenciário, ajudamos milhares de brasileiros a conquistar a aposentadoria que merecem.
              </p>

              <p className="text-lg text-amber-400 mb-8 font-semibold">
                ✓ Consultoria Especializada | ✓ Taxa de Sucesso 98% | ✓ Atendimento Personalizado
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleWhatsApp}
                  className="bg-amber-600 hover:bg-amber-700 text-white text-lg py-7 px-10 gap-2 rounded-full shadow-lg shadow-amber-600/30"
                >
                  <MessageCircle size={22} />
                  PRECISO DE AJUDA
                </Button>
                <Button 
                  variant="outline"
                  className="border-2 border-amber-600 text-amber-500 hover:bg-amber-600/10 text-lg py-7 px-10 rounded-full"
                >
                  Saiba Mais
                </Button>
              </div>
            </div>
            
            {/* Foto Profissional */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-amber-600/30 to-blue-600/20 rounded-2xl blur-2xl"></div>
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663029111455/PopmGcJiGYmBGDP3pSyZ4Z/Escrit_riodeAdvocacia3_38d034b6.png"
                alt="ADV. Aleandro Ferreira - Especialista em Direito Previdenciário"
                className="w-full rounded-2xl border-2 border-amber-600/50 shadow-2xl shadow-amber-600/30 object-cover relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-16 px-4 bg-slate-900/50 border-y border-amber-600/20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "25+", label: "Anos de Experiência" },
              { number: "5K+", label: "Clientes Satisfeitos" },
              { number: "98%", label: "Taxa de Sucesso" },
              { number: "R$ 50M+", label: "Recuperados para Clientes" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-bold text-amber-500 mb-2">{stat.number}</div>
                <p className="text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Quem Sou Eu</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-500 mx-auto"></div>
          </div>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-amber-600/20 rounded-2xl p-12">
            <p className="text-lg text-slate-200 leading-relaxed mb-6">
              Sou <strong className="text-amber-400">Aleandro Ferreira</strong>, advogado especialista em Direito Previdenciário. Minha missão é garantir que você receba <strong className="text-amber-400">todos os benefícios que tem direito</strong> junto ao INSS, sem deixar dinheiro na mesa.
            </p>
            <p className="text-lg text-slate-200 leading-relaxed">
              Trabalho com transparência, dedicação e conhecimento técnico profundo para resolver os casos mais complexos de aposentadoria, auxílio-doença, pensão por morte e muito mais. Cada cliente é único, e cada caso merece uma estratégia personalizada.
            </p>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section className="py-24 px-4 bg-slate-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Meus Serviços</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-500 mx-auto"></div>
            <p className="text-xl text-slate-300 mt-6">Soluções completas em Direito Previdenciário</p>
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
              <Card key={idx} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-amber-600/30 p-8 hover:border-amber-600/60 transition-all hover:shadow-lg hover:shadow-amber-600/20">
                <CheckCircle2 className="text-amber-500 mb-4" size={36} />
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-300">{service.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">O Que Meus Clientes Dizem</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-500 mx-auto"></div>
            <p className="text-xl text-slate-300 mt-6">Histórias de sucesso e transformação</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Maria Silva", text: "Consegui minha aposentadoria em 3 meses! Aleandro foi impecável do início ao fim.", rating: 5 },
              { name: "João Santos", text: "Aumentei meu benefício em R$ 800/mês com a revisão. Muito obrigado!", rating: 5 },
              { name: "Ana Costa", text: "Profissional atencioso, competente e que realmente se importa com seus clientes.", rating: 5 }
            ].map((testimonial, idx) => (
              <Card key={idx} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-amber-600/30 p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-amber-500 fill-amber-500" size={18} />
                  ))}
                </div>
                <p className="text-slate-200 mb-4 italic">"{testimonial.text}"</p>
                <p className="text-amber-500 font-bold">{testimonial.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section Premium */}
      <section className="py-24 px-4 bg-gradient-to-r from-amber-600/10 to-blue-600/10 border-y border-amber-600/30">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-white mb-6">Pronto para Transformar Seu Futuro?</h2>
            <p className="text-xl text-slate-300 mb-12">
              Agende uma consulta gratuita e descubra como posso ajudá-lo a conquistar a aposentadoria que você merece.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleWhatsApp}
                className="bg-amber-600 hover:bg-amber-700 text-white text-lg py-7 px-12 gap-2 rounded-full shadow-lg shadow-amber-600/30"
              >
                <MessageCircle size={22} />
                FALE COMIGO NO WHATSAPP
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-amber-600 text-amber-500 hover:bg-amber-600/10 text-lg py-7 px-12 rounded-full"
              >
                <Phone size={22} />
                LIGUE AGORA
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section className="py-24 px-4 bg-slate-900/50">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Entre em Contato</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-500 mx-auto"></div>
            <p className="text-xl text-slate-300 mt-6">Preencha o formulário e entraremos em contato em breve</p>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div>
              <label className="block text-white mb-2 font-semibold">Nome Completo</label>
              <input 
                type="text"
                required
                className="w-full px-4 py-3 bg-slate-800 border border-amber-600/30 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-600 transition"
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
                  className="w-full px-4 py-3 bg-slate-800 border border-amber-600/30 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-600 transition"
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
                  className="w-full px-4 py-3 bg-slate-800 border border-amber-600/30 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-600 transition"
                  placeholder="(62) 99290-3461"
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
                className="w-full px-4 py-3 bg-slate-800 border border-amber-600/30 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-600 transition"
                placeholder="Conte-me sobre seu caso..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>
            <Button 
              type="submit"
              className="w-full bg-amber-600 hover:bg-amber-700 text-white text-lg py-7 gap-2 rounded-full shadow-lg shadow-amber-600/30"
            >
              <MessageCircle size={22} />
              ENVIAR E FALAR NO WHATSAPP
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-amber-600/20 py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-6">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663029111455/PopmGcJiGYmBGDP3pSyZ4Z/pasted_file_WN3qtB_image_127a3f70.png"
              alt="Logo"
              className="h-12 w-12"
            />
          </div>
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
        className="fixed bottom-8 right-8 bg-amber-600 hover:bg-amber-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all z-40 animate-pulse"
        title="Fale conosco no WhatsApp"
      >
        <MessageCircle size={32} />
      </button>
    </div>
  );
}
