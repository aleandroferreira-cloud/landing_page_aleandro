import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, CheckCircle2, ChevronDown, ChevronUp, Phone, Mail, Star } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const whatsappNumber = "5562992903461"; // Dr. Aleandro - Goiás (62) 99290-3461
  const whatsappMessage = "Olá! Gostaria de agendar uma consulta sobre direito previdenciário.";

  const handleWhatsApp = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleWhatsApp();
  };

  const faqs = [
    {
      question: "Com quantos anos posso me aposentar?",
      answer: "A idade mínima para aposentadoria varia conforme o tipo. Para aposentadoria por idade: 62 anos (mulheres) e 65 anos (homens). Para aposentadoria por tempo de contribuição, não há idade mínima, apenas tempo de contribuição. Consulte-me para saber qual é a melhor opção para seu caso."
    },
    {
      question: "Como solicitar auxílio-acidente?",
      answer: "O auxílio-acidente é um benefício para quem sofreu acidente de trabalho e ficou com sequelas. Você precisa: 1) Ter sofrido acidente de trabalho; 2) Ter sequelas permanentes; 3) Estar contribuindo ao INSS. Posso ajudá-lo a preparar toda a documentação e acompanhar o processo."
    },
    {
      question: "Como saber se tenho direito a auxílio-acidente?",
      answer: "Você tem direito se: sofreu acidente de trabalho, ficou com incapacidade parcial permanente, está filiado ao INSS e contribuiu por pelo menos 12 meses. Faça uma consulta comigo para analisarmos seu caso específico."
    },
    {
      question: "Meu benefício foi indeferido pelo INSS, o que devo fazer?",
      answer: "Se seu benefício foi negado, você tem direito a recorrer! Posso ajudá-lo a: 1) Analisar o motivo da negação; 2) Preparar um recurso administrativo; 3) Entrar com ação judicial se necessário. Muitos clientes conseguem reverter negações com a estratégia correta."
    },
    {
      question: "Não sou registrado e sofri um acidente na empresa, tenho direito a algum benefício?",
      answer: "Sim! Mesmo sem registro formal, você pode ter direito a indenização por danos morais e materiais. Além disso, se conseguirmos comprovar a relação de trabalho, você pode ter direito a benefícios previdenciários. Vamos analisar seu caso em detalhes."
    },
    {
      question: "Qual é o valor que vocês cobram?",
      answer: "Meus honorários são flexíveis e adaptados à sua realidade. Posso trabalhar com: 1) Honorários fixos; 2) Honorários sucumbenciais (você paga apenas se ganhar); 3) Parcelamento. Agende uma consulta gratuita para discutirmos as melhores opções para você."
    },
    {
      question: "Quanto tempo leva para conseguir a aposentadoria?",
      answer: "O tempo varia conforme o tipo de benefício e a complexidade do caso. Aposentadorias simples podem levar 2-4 meses. Casos mais complexos podem levar 6-12 meses ou mais. Vou orientá-lo sobre os prazos específicos do seu caso."
    },
    {
      question: "Vocês atuam em qual região?",
      answer: "Atuo principalmente em Anápolis e região de Goiás, mas posso ajudá-lo em qualquer lugar do Brasil! Muitos clientes são atendidos remotamente via WhatsApp, email e videoconferência. Fale comigo para conhecer as melhores opções."
    }
  ];

  const testimonials = [
    { 
      name: "Cliente Satisfeito", 
      text: "Venha conhecer nosso escritório, atendimento personalizado e humanitário, para atender todas as suas necessidades jurídicas.",
      rating: 5,
      date: "Jan 16, 2026"
    },
    { 
      name: "Cliente Recomenda", 
      text: "Estudei e me formei advogado, não só como profissão, mas uma maneira de ajudar as pessoas. Sempre disposto a ajudar!",
      rating: 5,
      date: "Sep 8, 2025"
    },
    { 
      name: "Excelente Atendimento", 
      text: "Atendimento profissional, competente e sempre disponível. Recomendo para quem precisa de orientação em direito previdenciário!",
      rating: 5,
      date: "Recente"
    }
  ];

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
              className="bg-green-500 hover:bg-green-600 text-white gap-2 rounded-full"
            >
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310419663029111455/PopmGcJiGYmBGDP3pSyZ4Z/pasted_file_qieFnH_image_ddc5612f.png" alt="WhatsApp" className="w-5 h-5" />
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
              {/* Logo Integrada */}
              <div className="mb-12">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310419663029111455/PopmGcJiGYmBGDP3pSyZ4Z/pasted_file_WN3qtB_image_127a3f70.png"
                  alt="Logo ADV. Aleandro Ferreira"
                  className="h-32 w-auto mb-6"
                />
                <p className="text-amber-600 text-sm font-semibold tracking-widest">ESPECIALISTA EM</p>
                <p className="text-white text-2xl font-bold">DIREITO PREVIDENCIÁRIO</p>
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
                  className="bg-green-500 hover:bg-green-600 text-white text-lg py-7 px-10 gap-2 rounded-full shadow-lg shadow-green-500/30"
                >
                  <img src="https://d2xsxph8kpxj0f.cloudfront.net/310419663029111455/PopmGcJiGYmBGDP3pSyZ4Z/pasted_file_qieFnH_image_ddc5612f.png" alt="WhatsApp" className="w-6 h-6" />
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
              { number: "4.9⭐", label: "Avaliação Google" }
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

      {/* FAQ Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Perguntas Frequentes</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-500 mx-auto"></div>
            <p className="text-xl text-slate-300 mt-6">Respostas para suas dúvidas sobre direito previdenciário</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <Card 
                key={idx}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-amber-600/30 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full px-8 py-6 flex justify-between items-center hover:bg-amber-600/10 transition-colors"
                >
                  <h3 className="text-lg font-bold text-white text-left">{faq.question}</h3>
                  {expandedFaq === idx ? (
                    <ChevronUp className="text-amber-500 flex-shrink-0" size={24} />
                  ) : (
                    <ChevronDown className="text-amber-500 flex-shrink-0" size={24} />
                  )}
                </button>
                
                {expandedFaq === idx && (
                  <div className="px-8 py-6 bg-slate-900/50 border-t border-amber-600/20">
                    <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section className="py-24 px-4 bg-slate-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">O Que Meus Clientes Dizem</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-500 mx-auto"></div>
            <p className="text-xl text-slate-300 mt-6">Histórias de sucesso e transformação</p>
            <p className="text-amber-400 font-semibold mt-4">⭐ 4.9 de 5 - 40+ avaliações no Google</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-amber-600/30 p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-amber-500 fill-amber-500" size={18} />
                  ))}
                </div>
                <p className="text-slate-200 mb-4 italic">"{testimonial.text}"</p>
                <p className="text-amber-500 font-bold">{testimonial.name}</p>
                <p className="text-slate-400 text-sm">{testimonial.date}</p>
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
              className="w-full bg-green-500 hover:bg-green-600 text-white text-lg py-7 gap-2 rounded-full shadow-lg shadow-green-500/30"
            >
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310419663029111455/PopmGcJiGYmBGDP3pSyZ4Z/pasted_file_qieFnH_image_ddc5612f.png" alt="WhatsApp" className="w-6 h-6" />
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
        className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all z-40 animate-pulse"
        title="Fale conosco no WhatsApp"
      >
        <img src="https://d2xsxph8kpxj0f.cloudfront.net/310419663029111455/PopmGcJiGYmBGDP3pSyZ4Z/pasted_file_qieFnH_image_ddc5612f.png" alt="WhatsApp" className="w-8 h-8" />
      </button>
    </div>
  );
}
