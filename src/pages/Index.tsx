
import React, { useEffect, useState } from 'react';
import { ChevronDown, Users, BookOpen, Gavel, Shield, Search, FileText, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Determine current section based on scroll position
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setCurrentSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-x-hidden">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Gavel className="h-6 w-6 text-blue-400" />
              <span className="font-bold text-lg">CNJ - Provas Digitais</span>
            </div>
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex space-x-6">
                {['Abertura', 'Palestras', 'Práticas', 'Vestígios', 'Conclusões'].map((item, index) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`text-sm transition-colors hover:text-blue-400 ${
                      currentSection === index + 1 ? 'text-blue-400' : 'text-gray-300'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <Link to="/referencias">
                <Button variant="outline" size="sm" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
                  <Upload className="h-4 w-4 mr-2" />
                  Gerenciar Referências
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-blue-600/20 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
              <Shield className="h-5 w-5 text-blue-400" />
              <span className="text-blue-200 font-medium">Seminário CNJ 2025</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Provas Digitais
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Relatório completo do Seminário sobre Perspectivas e Desafios das Provas Digitais no Poder Judiciário
            </p>
            <Button 
              onClick={() => scrollToSection('abertura')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105"
            >
              Explorar Relatório
              <ChevronDown className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse delay-1000" />
      </section>

      {/* Abertura Section */}
      <section id="abertura" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center space-x-2 bg-purple-600/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                <Users className="h-5 w-5 text-purple-400" />
                <span className="text-purple-200 font-medium">Abertura</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Autoridades Presentes</h2>
              <p className="text-xl text-gray-300">
                Participação de importantes autoridades do CNJ e do Sistema de Justiça
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-blue-400 flex items-center">
                    <Gavel className="h-5 w-5 mr-2" />
                    Ministro Luís Alberto Barroso
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p className="mb-4">Presidente do STF e CNJ</p>
                  <blockquote className="italic border-l-4 border-blue-500 pl-4">
                    "A era da plasticidade informacional exige do direito o complexo desafio de acompanhar com equilíbrio e agilidade uma realidade em permanente transformação."
                  </blockquote>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-purple-400 flex items-center">
                    <Shield className="h-5 w-5 mr-2" />
                    Conselheiro José Edvaldo Rotondano
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p className="mb-4">Presidente da Comissão Permanente de Justiça Criminal</p>
                  <p>Reforçou a urgência do debate para formulação de proposta de resolução que estabeleça parâmetros de integridade, rastreabilidade e autenticidade da prova digital.</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-8 backdrop-blur-sm border border-slate-700">
              <h3 className="text-2xl font-bold mb-4 text-center">Objetivo Central</h3>
              <p className="text-lg text-gray-300 text-center">
                Estabelecer parâmetros de <span className="text-blue-400 font-semibold">integridade</span>, 
                <span className="text-purple-400 font-semibold"> rastreabilidade</span> e 
                <span className="text-green-400 font-semibold"> autenticidade</span> da prova digital, 
                compatíveis com os direitos fundamentais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Palestras Section */}
      <section id="palestras" className="py-20 bg-slate-900/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center space-x-2 bg-blue-600/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                <BookOpen className="h-5 w-5 text-blue-400" />
                <span className="text-blue-200 font-medium">Palestras</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Perspectivas e Fundamentos</h2>
            </div>

            <div className="space-y-12">
              {/* Palestra 1 */}
              <Card className="bg-gradient-to-r from-slate-800/50 to-blue-900/30 backdrop-blur-sm border-slate-700">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-400">
                    1. Perspectivas e Desafios das Provas Digitais no Poder Judiciário
                  </CardTitle>
                  <p className="text-lg text-gray-300">Desembargadora Priscilla Placha Sá</p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-red-900/20 rounded-lg p-4 border border-red-700/30">
                      <h4 className="font-semibold text-red-400 mb-2">Facções Criminosas</h4>
                      <p className="text-sm text-gray-300">Migração para tecnologias digitais e questionamentos sobre seletividade investigativa</p>
                    </div>
                    <div className="bg-yellow-900/20 rounded-lg p-4 border border-yellow-700/30">
                      <h4 className="font-semibold text-yellow-400 mb-2">Mega Operações</h4>
                      <p className="text-sm text-gray-300">Embates jurídicos sobre mandados de busca e cadeia de custódia</p>
                    </div>
                    <div className="bg-green-900/20 rounded-lg p-4 border border-green-700/30">
                      <h4 className="font-semibold text-green-400 mb-2">Atos Infracionais</h4>
                      <p className="text-sm text-gray-300">Uso de Telegram e Discord como "deep web a céu aberto"</p>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-slate-800/50 rounded-lg">
                    <p className="text-sm text-gray-400">
                      <FileText className="inline h-4 w-4 mr-1" />
                      Referência: ibraspp,+RBDPP_v03_n02-2017_07doi74.pdf
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Palestra 2 */}
              <Card className="bg-gradient-to-r from-slate-800/50 to-purple-900/30 backdrop-blur-sm border-slate-700">
                <CardHeader>
                  <CardTitle className="text-2xl text-purple-400">
                    2. Fundamentos Teóricos e Normativos das Provas Digitais
                  </CardTitle>
                  <p className="text-lg text-gray-300">Professor Geraldo Prado</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-purple-900/20 rounded-lg p-4 border border-purple-700/30">
                      <h4 className="font-semibold text-purple-400 mb-2">Conceitos Fundamentais</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Diferenciação entre prova digital e tradicional</li>
                        <li>• "Explanabilidade" da prova digital</li>
                        <li>• Teoria do Mosaico aplicada ao contexto digital</li>
                      </ul>
                    </div>
                    <div className="bg-slate-800/30 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-300 mb-2">Casos Internacionais</h4>
                      <p className="text-sm text-gray-400">Caso EncroChat e United States vs. Jones</p>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-slate-800/50 rounded-lg">
                    <p className="text-sm text-gray-400">
                      <FileText className="inline h-4 w-4 mr-1" />
                      Referências: dossie_prado.pdf, Seminário Provas Digitais CNJ 2025.pdf
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Questões Práticas Section */}
      <section id="práticas" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center space-x-2 bg-green-600/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                <Search className="h-5 w-5 text-green-400" />
                <span className="text-green-200 font-medium">Questões Práticas</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Experiência da Polícia Federal</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
                <CardHeader>
                  <CardTitle className="text-green-400">Delegado Valdemar Latance Neto</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                      Cooperação com setor privado (Google, Microsoft, Discord)
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                      Massividade dos crimes cibernéticos
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                      Convenção de Budapeste (vigência 2023)
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                      Projeto de prevenção ao abuso sexual infantil
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
                <CardHeader>
                  <CardTitle className="text-blue-400">Delegada Fernanda de Paiva Rio Camargo</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <div className="text-center p-6">
                    <div className="text-4xl font-bold text-blue-400 mb-2">250.000</div>
                    <p className="text-lg">itens apreendidos em depósito</p>
                    <p className="text-sm text-gray-400 mt-2">
                      Aumento significativo nos últimos 5 anos
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 p-6 bg-slate-800/50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-center">IN 299/2025 - Regulamentação PF</h3>
              <p className="text-gray-300 text-center">
                Regulamenta a cadeia de custódia de elementos de interesse em formato digital no âmbito da Polícia Federal
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vestígios Cibernéticos Section */}
      <section id="vestígios" className="py-20 bg-slate-900/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center space-x-2 bg-orange-600/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                <Shield className="h-5 w-5 text-orange-400" />
                <span className="text-orange-200 font-medium">Vestígios Cibernéticos</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Volatilidade e Complexidade</h2>
              <p className="text-xl text-gray-300">
                Dr. Luiz Rodrigo Grochowski - Diretor-Geral da Polícia Científica do Paraná
              </p>
            </div>

            <div className="space-y-8">
              <Card className="bg-gradient-to-r from-orange-900/30 to-red-900/30 backdrop-blur-sm border-orange-700/50">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-orange-400 mb-4">Volatilidade em Nanosegundos</h3>
                    <blockquote className="text-lg italic text-gray-300">
                      "Vestígios cibernéticos são como escritas na areia que são apagadas pelas ondas"
                    </blockquote>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <h4 className="font-semibold text-orange-400 mb-2">Norma RFC 3227 (2002)</h4>
                      <p className="text-sm text-gray-300">Sobre volatilidade dos vestígios cibernéticos - ainda extremamente atual</p>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <h4 className="font-semibold text-red-400 mb-2">Ambientes Complexos</h4>
                      <p className="text-sm text-gray-300">Nuvem, satélites, dispositivos implantados na pele</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-gradient-to-r from-slate-800/50 to-orange-900/30 rounded-2xl p-8 backdrop-blur-sm border border-slate-700">
                <h3 className="text-2xl font-bold mb-4 text-center text-orange-400">Princípios Fundamentais</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-orange-400">1</span>
                    </div>
                    <h4 className="font-semibold text-orange-400 mb-2">Coleta Única</h4>
                    <p className="text-sm text-gray-300">Vestígios devem ser coletados uma única vez</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-orange-400">2</span>
                    </div>
                    <h4 className="font-semibold text-orange-400 mb-2">Trabalho Colaborativo</h4>
                    <p className="text-sm text-gray-300">Entre atores do sistema de justiça</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-orange-400">3</span>
                    </div>
                    <h4 className="font-semibold text-orange-400 mb-2">Centrais de Custódia</h4>
                    <p className="text-sm text-gray-300">Utilização de centrais especializadas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusões Section */}
      <section id="conclusões" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center space-x-2 bg-blue-600/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                <Gavel className="h-5 w-5 text-blue-400" />
                <span className="text-blue-200 font-medium">Conclusões</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Encaminhamentos</h2>
              <p className="text-xl text-gray-300">
                Diretrizes para o futuro das provas digitais no Brasil
              </p>
            </div>

            <div className="grid gap-6 mb-12">
              {[
                {
                  title: "Sistema Nacional de Validação",
                  description: "Criação de sistema próprio e confiável, preferencialmente desenvolvido internamente",
                  icon: Shield,
                  color: "blue"
                },
                {
                  title: "Órgão Especializado por Tribunal",
                  description: "Instituição de órgão em cada tribunal para coleta e preservação da cadeia de custódia",
                  icon: Users,
                  color: "purple"
                },
                {
                  title: "Cadastro Nacional de Peritos",
                  description: "Formação de cadastro nacional sob gestão do CNJ",
                  icon: FileText,
                  color: "green"
                },
                {
                  title: "Capacitação Contínua",
                  description: "Treinamento de magistrados, servidores e advogados",
                  icon: BookOpen,
                  color: "orange"
                }
              ].map((item, index) => (
                <Card key={index} className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-${item.color}-500/20 rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <item.icon className={`h-6 w-6 text-${item.color}-400`} />
                      </div>
                      <div>
                        <h3 className={`text-lg font-semibold text-${item.color}-400 mb-2`}>{item.title}</h3>
                        <p className="text-gray-300">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-8 backdrop-blur-sm border border-slate-700 text-center">
              <h3 className="text-2xl font-bold mb-4">Próximos Passos</h3>
              <p className="text-lg text-gray-300 mb-6">
                O CNJ criará um grupo de trabalho para amadurecer um futuro texto normativo, 
                sempre com o olhar de quem está na ponta e lida diariamente com os desafios práticos da prova digital.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full text-sm">Segurança Jurídica</span>
                <span className="bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm">Eficiência Processual</span>
                <span className="bg-green-600/20 text-green-300 px-4 py-2 rounded-full text-sm">Proteção contra Fraudes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900/50 border-t border-slate-700">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Gavel className="h-6 w-6 text-blue-400" />
            <span className="font-bold text-lg">Conselho Nacional de Justiça</span>
          </div>
          <p className="text-gray-400">
            Seminário sobre Provas Digitais - 2025
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
