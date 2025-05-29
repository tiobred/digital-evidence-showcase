
import React, { useEffect, useState } from 'react';
import { ChevronDown, Users, BookOpen, Gavel, Shield, Search, FileText, Upload, Clock, Brain, Globe } from 'lucide-react';
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
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 text-gray-900 overflow-x-hidden">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-amber-900/90 backdrop-blur-md border-b border-amber-800/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Gavel className="h-6 w-6 text-amber-300" />
              <span className="font-bold text-lg text-white">CNJ - Provas Digitais - Relatório do TJBA</span>
            </div>
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex space-x-6">
                {['Introdução', 'Abertura', 'Palestras', 'Oficinas', 'Conclusões'].map((item, index) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`text-sm transition-colors hover:text-amber-300 ${
                      currentSection === index + 1 ? 'text-amber-300' : 'text-amber-100'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <Link to="/referencias">
                <Button variant="outline" size="sm" className="border-amber-300 text-amber-300 hover:bg-amber-300 hover:text-amber-900">
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
          className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-orange-600/20"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-amber-600/20 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
              <Shield className="h-5 w-5 text-amber-700" />
              <span className="text-amber-800 font-medium">Seminário CNJ - 28 de maio de 2025</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">
              Provas Digitais
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-amber-800">
              Relatório do TJBA
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
              Relatório completo do Seminário sobre Provas Digitais, realizado no Conselho Nacional de Justiça com foco em cadeia de custódia, privacidade e admissibilidade de evidências digitais
            </p>
            <Button 
              onClick={() => scrollToSection('introdução')}
              className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105"
            >
              Explorar Relatório
              <ChevronDown className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-amber-500/10 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-orange-500/10 rounded-full animate-pulse delay-1000" />
      </section>

      {/* Introdução Section */}
      <section id="introdução" className="py-20 relative bg-white/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center space-x-2 bg-orange-600/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                <BookOpen className="h-5 w-5 text-orange-700" />
                <span className="text-orange-800 font-medium">Introdução</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Contexto e Objetivos</h2>
            </div>

            <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-8 backdrop-blur-sm border border-amber-200">
              <p className="text-lg text-gray-800 leading-relaxed text-center">
                O evento reuniu <span className="font-semibold text-amber-800">especialistas, magistrados, servidores e membros do Ministério Público</span> com o objetivo de discutir os desafios, boas práticas e fundamentos jurídicos relacionados ao uso de provas digitais, com foco em conceitos como:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white/70 rounded-lg p-4 border border-amber-300">
                  <h4 className="font-semibold text-amber-800 mb-2 flex items-center">
                    <Shield className="h-5 w-5 mr-2" />
                    Cadeia de Custódia
                  </h4>
                  <p className="text-sm text-gray-700">Preservação da integridade dos vestígios digitais</p>
                </div>
                <div className="bg-white/70 rounded-lg p-4 border border-amber-300">
                  <h4 className="font-semibold text-amber-800 mb-2 flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    Privacidade
                  </h4>
                  <p className="text-sm text-gray-700">Proteção de dados e direitos fundamentais</p>
                </div>
                <div className="bg-white/70 rounded-lg p-4 border border-amber-300">
                  <h4 className="font-semibold text-amber-800 mb-2 flex items-center">
                    <Gavel className="h-5 w-5 mr-2" />
                    Admissibilidade
                  </h4>
                  <p className="text-sm text-gray-700">Critérios para aceitação legal das provas</p>
                </div>
                <div className="bg-white/70 rounded-lg p-4 border border-amber-300">
                  <h4 className="font-semibold text-amber-800 mb-2 flex items-center">
                    <Search className="h-5 w-5 mr-2" />
                    Valoração
                  </h4>
                  <p className="text-sm text-gray-700">Avaliação da relevância das evidências digitais</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Abertura Section */}
      <section id="abertura" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center space-x-2 bg-red-600/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                <Users className="h-5 w-5 text-red-700" />
                <span className="text-red-800 font-medium">Abertura Institucional</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Autoridades e Pronunciamentos</h2>
            </div>

            {/* Ministro Barroso */}
            <Card className="mb-8 bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-amber-800 flex items-center text-2xl">
                  <Gavel className="h-6 w-6 mr-3" />
                  Ministro Luís Roberto Barroso
                </CardTitle>
                <p className="text-gray-600">Presidente do STF e CNJ</p>
              </CardHeader>
              <CardContent>
                <blockquote className="text-lg italic border-l-4 border-amber-500 pl-6 mb-4 text-gray-800">
                  "A era de transformações tecnológicas aceleradas impõe ao direito a complexa tarefa de acompanhar com equilíbrio e agilidade uma realidade em permanente transformação, sendo ainda mais complexo no campo penal."
                </blockquote>
                <div className="bg-white/50 rounded-lg p-4 mt-4">
                  <h4 className="font-semibold text-amber-800 mb-2">Destaques da Fala:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Plasticidade informacional de textos, áudios, imagens e vídeos</li>
                    <li>• Limites dos instrumentos tradicionais para crimes cibernéticos</li>
                    <li>• Riscos de violação a direitos fundamentais na busca por evidências</li>
                    <li>• Relevância especial da cadeia de custódia dos vestígios cibernéticos</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Conselheiro José Rotondano */}
            <Card className="mb-8 bg-gradient-to-r from-orange-50 to-red-50 border-orange-200 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center text-2xl">
                  <Shield className="h-6 w-6 mr-3" />
                  Conselheiro José Rotondano
                </CardTitle>
                <p className="text-gray-600">Presidente da Comissão Permanente de Justiça Criminal</p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/50 rounded-lg p-4">
                    <h4 className="font-semibold text-orange-800 mb-2">Objetivo Principal</h4>
                    <p className="text-sm text-gray-700">Formular proposta de resolução sobre cadeia de custódia estabelecendo parâmetros de integridade, rastreabilidade e autenticidade da prova digital</p>
                  </div>
                  <div className="bg-white/50 rounded-lg p-4">
                    <h4 className="font-semibold text-orange-800 mb-2">Desafio Técnico</h4>
                    <p className="text-sm text-gray-700">A prova digital é uma codificação manipulável que precisa ser extraída por processo técnico, exigindo mecanismos que garantam integridade</p>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-orange-100/50 rounded-lg">
                  <p className="text-sm text-gray-700 text-center italic">
                    "A discussão está umbilicalmente ligada a princípios constitucionais como o contraditório, a ampla defesa e o devido processo legal."
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Outras Autoridades */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-white/80 border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-800">Bernardo Morais Cavalcanti</CardTitle>
                  <p className="text-sm text-gray-600">Membro auxiliar da presidência do CNMP</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700">Enfatizou as dificuldades impostas pela virtualização e digitalização da vida, exigindo manutenção de processo criminal rígido e justo.</p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-800">Dr. Luiz Augusto Emasse Fiorentino</CardTitle>
                  <p className="text-sm text-gray-600">Representante do Conselho da Justiça Federal</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700">Reforçou o aumento nos questionamentos da prova digital e a angústia em lidar com essa nova realidade de tempo acelerado.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Palestras Section */}
      <section id="palestras" className="py-20 bg-white/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center space-x-2 bg-amber-600/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                <BookOpen className="h-5 w-5 text-amber-700" />
                <span className="text-amber-800 font-medium">Palestras e Tópicos</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Perspectivas Especializadas</h2>
            </div>

            <div className="space-y-12">
              {/* Palestra 1 - Desembargadora Priscilla */}
              <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-amber-800">
                    Perspectivas e Desafios das Provas Digitais no Poder Judiciário
                  </CardTitle>
                  <p className="text-lg text-gray-700">Desembargadora Priscilla Placha Sá - TJPR</p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="bg-red-100 rounded-lg p-4 border border-red-300">
                      <h4 className="font-semibold text-red-700 mb-2 flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        Facções Criminosas
                      </h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Migração para tecnologias digitais</li>
                        <li>• Uso de smartphones e redes sociais</li>
                        <li>• Espetacularização da barbárie</li>
                        <li>• Seletividade investigativa</li>
                      </ul>
                    </div>
                    <div className="bg-yellow-100 rounded-lg p-4 border border-yellow-300">
                      <h4 className="font-semibold text-yellow-700 mb-2 flex items-center">
                        <Search className="h-4 w-4 mr-1" />
                        Mega Operações
                      </h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Embates sobre mandados de busca</li>
                        <li>• Preservação da cadeia de custódia</li>
                        <li>• Nomenclatura de conceitos técnicos</li>
                        <li>• Riscos de "vasculha probatória"</li>
                      </ul>
                    </div>
                    <div className="bg-green-100 rounded-lg p-4 border border-green-300">
                      <h4 className="font-semibold text-green-700 mb-2 flex items-center">
                        <Shield className="h-4 w-4 mr-1" />
                        Atos Infracionais
                      </h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Uso de Telegram e Discord</li>
                        <li>• "Deep web a céu aberto"</li>
                        <li>• Comercialização de conteúdos ilícitos</li>
                        <li>• Envolvimento de adolescentes</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-white/70 rounded-lg p-4">
                    <p className="text-sm text-gray-600">
                      <FileText className="inline h-4 w-4 mr-1" />
                      Referência: ibraspp,+RBDPP_v03_n02-2017_07doi74.pdf
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Palestra 2 - Professor Geraldo Prado */}
              <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-orange-800">
                    Fundamentos Teóricos e Normativos das Provas Digitais
                  </CardTitle>
                  <p className="text-lg text-gray-700">Professor Geraldo Prado - Universidade Autónoma de Lisboa</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="bg-white/70 rounded-lg p-4 border border-orange-300">
                      <h4 className="font-semibold text-orange-800 mb-3 flex items-center">
                        <Brain className="h-5 w-5 mr-2" />
                        Conceitos Fundamentais
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-medium text-gray-800 mb-1">Diferenciação Digital vs Tradicional</h5>
                          <p className="text-sm text-gray-700">Prova digital não representa realidade empírica, mas combinação algorítmica de operações técnicas</p>
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-800 mb-1">"Explanabilidade" da Prova</h5>
                          <p className="text-sm text-gray-700">Exige interpretação por especialistas como "conectores" entre desenvolvedores e usuários</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-orange-100/50 rounded-lg p-4">
                      <h4 className="font-semibold text-orange-800 mb-2 flex items-center">
                        <Globe className="h-5 w-5 mr-2" />
                        Casos Internacionais
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <strong className="text-gray-800">Caso EncroChat:</strong>
                          <p className="text-gray-700">Hackeamento massivo de sistema de comunicação encriptada</p>
                        </div>
                        <div>
                          <strong className="text-gray-800">United States vs. Jones:</strong>
                          <p className="text-gray-700">Uso de GPS para rastreamento e "Teoria do Mosaico"</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 bg-white/70 rounded-lg p-4">
                    <p className="text-sm text-gray-600">
                      <FileText className="inline h-4 w-4 mr-1" />
                      Referências: dossie_prado.pdf, Seminário Provas Digitais CNJ 2025.pdf
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Palestra 3 - Polícia Federal */}
              <Card className="bg-gradient-to-r from-red-50 to-pink-50 border-red-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-red-800">
                    Questões Práticas sobre a Prova Digital
                  </CardTitle>
                  <p className="text-lg text-gray-700">Delegado Valdemar Latance Neto e Delegada Fernanda de Paiva Rio Camargo - PF</p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white/70 rounded-lg p-4">
                      <h4 className="font-semibold text-red-800 mb-3">Cooperação Setor Privado</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Google, Microsoft, Discord</li>
                        <li>• Massividade dos crimes cibernéticos</li>
                        <li>• Fraudes a cada 16 segundos</li>
                        <li>• Base de tentáculos com bancos</li>
                      </ul>
                    </div>
                    <div className="bg-white/70 rounded-lg p-4">
                      <h4 className="font-semibold text-red-800 mb-3">Abuso Sexual Infantil</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• 88% dos casos: agressor próximo</li>
                        <li>• Maioria: meninas &lt; 13 anos</li>
                        <li>• 770 vítimas resgatadas</li>
                        <li>• Análise prévia no local</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-red-100/50 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-red-800 mb-2">250.000</div>
                    <p className="text-lg text-gray-800">itens apreendidos em depósito</p>
                    <p className="text-sm text-gray-600 mt-1">Aumento de 100% nos últimos 5 anos</p>
                  </div>
                  
                  <div className="mt-6 bg-white/70 rounded-lg p-4">
                    <h4 className="font-semibold text-red-800 mb-2">IN 299/2025 - Regulamentação PF</h4>
                    <p className="text-sm text-gray-700">Regulamenta a cadeia de custódia de elementos de interesse em formato digital no âmbito da Polícia Federal</p>
                  </div>
                </CardContent>
              </Card>

              {/* Palestra 4 - Vestígios Cibernéticos */}
              <Card className="bg-gradient-to-r from-pink-50 to-purple-50 border-pink-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-pink-800">
                    Vestígios Cibernéticos: Volatilidade e Complexidade
                  </CardTitle>
                  <p className="text-lg text-gray-700">Dr. Luiz Rodrigo Grochowski - Diretor-Geral da Polícia Científica do Paraná</p>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-6">
                    <blockquote className="text-lg italic text-gray-800 mb-4">
                      "Vestígios cibernéticos são como escritas na areia que são apagadas pelas ondas - em nanosegundos"
                    </blockquote>
                    <p className="text-sm text-gray-600">Norma RFC 3227 (2002) - ainda extremamente atual</p>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white/70 rounded-lg p-4 text-center">
                      <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-lg font-bold text-pink-800">1</span>
                      </div>
                      <h4 className="font-semibold text-pink-800 mb-2">Coleta Única</h4>
                      <p className="text-sm text-gray-700">Vestígios devem ser coletados uma única vez devido à volatilidade</p>
                    </div>
                    <div className="bg-white/70 rounded-lg p-4 text-center">
                      <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-lg font-bold text-pink-800">2</span>
                      </div>
                      <h4 className="font-semibold text-pink-800 mb-2">Ambientes Complexos</h4>
                      <p className="text-sm text-gray-700">Nuvem, satélites, dispositivos implantados na pele</p>
                    </div>
                    <div className="bg-white/70 rounded-lg p-4 text-center">
                      <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-lg font-bold text-pink-800">3</span>
                      </div>
                      <h4 className="font-semibold text-pink-800 mb-2">Conhecimento Técnico</h4>
                      <p className="text-sm text-gray-700">Perito imprescindível para compreensão do objeto digital</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Oficinas Section */}
      <section id="oficinas" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center space-x-2 bg-orange-600/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                <Users className="h-5 w-5 text-orange-700" />
                <span className="text-orange-800 font-medium">Oficinas Temáticas</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Debates Especializados</h2>
              <p className="text-xl text-gray-700">Quatro oficinas simultâneas para aprofundamento dos temas</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-amber-800 flex items-center">
                    <Shield className="h-5 w-5 mr-2" />
                    Oficina 1: Princípios da Cadeia de Custódia Digital
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">Garantias e desafios na modernização e normatização da gestão das provas digitais.</p>
                  <div className="bg-white/50 rounded p-3">
                    <h5 className="font-medium text-amber-800 mb-2">Convergências:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Sistema próprio de validação</li>
                      <li>• Órgão em cada tribunal</li>
                      <li>• Cadastro nacional de peritos</li>
                      <li>• Capacitação contínua</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-orange-200 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-orange-800 flex items-center">
                    <BookOpen className="h-5 w-5 mr-2" />
                    Oficina 2: Conceitos Estruturantes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">Linguagem comum entre direito e tecnologia para vestígios cibernéticos.</p>
                  <div className="bg-white/50 rounded p-3">
                    <h5 className="font-medium text-orange-800 mb-2">Focos:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Vestígio cibernético</li>
                      <li>• Evidência digital</li>
                      <li>• Prova digital penal</li>
                      <li>• Volatilidade dos dados</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-red-50 to-pink-50 border-red-200 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-red-800 flex items-center">
                    <Search className="h-5 w-5 mr-2" />
                    Oficina 3: Etapas da Cadeia de Custódia
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">Do vestígio ao descarte: fases técnicas e pontos críticos.</p>
                  <div className="bg-white/50 rounded p-3">
                    <h5 className="font-medium text-red-800 mb-2">Processos:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Coleta de vestígios</li>
                      <li>• Preservação</li>
                      <li>• Processamento</li>
                      <li>• Boas práticas judiciais</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-pink-50 to-purple-50 border-pink-200 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-pink-800 flex items-center">
                    <Gavel className="h-5 w-5 mr-2" />
                    Oficina 4: Governança Judiciária
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">Limites, deveres e estratégias na fiscalização e controle.</p>
                  <div className="bg-white/50 rounded p-3">
                    <h5 className="font-medium text-pink-800 mb-2">Temas:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Print screens</li>
                      <li>• Dados em nuvem</li>
                      <li>• Perícias não autorizadas</li>
                      <li>• Cooperação internacional</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusões Section */}
      <section id="conclusões" className="py-20 bg-white/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center space-x-2 bg-amber-600/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                <Gavel className="h-5 w-5 text-amber-700" />
                <span className="text-amber-800 font-medium">Conclusões</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Encaminhamentos e Próximos Passos</h2>
            </div>

            <div className="grid gap-6 mb-12">
              {[
                {
                  title: "Sistema Nacional de Validação",
                  description: "Criação de sistema próprio e confiável de validação de provas digitais, preferencialmente desenvolvido internamente",
                  icon: Shield,
                  color: "amber"
                },
                {
                  title: "Órgão Especializado por Tribunal",
                  description: "Instituição de órgão em cada tribunal para coleta e preservação da cadeia de custódia",
                  icon: Users,
                  color: "orange"
                },
                {
                  title: "Cadastro Nacional de Peritos",
                  description: "Formação de cadastro nacional de peritos sob gestão do CNJ",
                  icon: FileText,
                  color: "red"
                },
                {
                  title: "Capacitação Contínua",
                  description: "Treinamento de magistrados, servidores e advogados no uso e interpretação de provas digitais",
                  icon: BookOpen,
                  color: "pink"
                }
              ].map((item, index) => (
                <Card key={index} className="bg-white/80 border-amber-200 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-${item.color}-500/20 rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <item.icon className={`h-6 w-6 text-${item.color}-700`} />
                      </div>
                      <div>
                        <h3 className={`text-lg font-semibold text-${item.color}-800 mb-2`}>{item.title}</h3>
                        <p className="text-gray-700">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-8 border border-amber-200 text-center">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Próximos Passos</h3>
              <p className="text-lg text-gray-800 mb-6">
                O CNJ criará um <span className="font-semibold text-amber-800">grupo de trabalho</span> para amadurecer um futuro texto normativo, 
                sempre com o olhar de quem está na ponta e lida diariamente com os desafios práticos da prova digital.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-amber-200 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">Segurança Jurídica</span>
                <span className="bg-orange-200 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">Eficiência Processual</span>
                <span className="bg-red-200 text-red-800 px-4 py-2 rounded-full text-sm font-medium">Proteção contra Fraudes</span>
                <span className="bg-pink-200 text-pink-800 px-4 py-2 rounded-full text-sm font-medium">Marco Normativo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-amber-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Gavel className="h-6 w-6 text-amber-300" />
            <span className="font-bold text-lg">Conselho Nacional de Justiça</span>
          </div>
          <p className="text-amber-200 mb-2">
            Seminário sobre Provas Digitais - 28 de maio de 2025
          </p>
          <p className="text-amber-300 text-sm">
            Relatório elaborado pelo Tribunal de Justiça da Bahia (TJBA)
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
