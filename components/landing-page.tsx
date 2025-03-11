"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Shield,
  Search,
  Bitcoin,
  Scale,
  CheckCircle,
  Globe,
  ChevronRight,
  AlertTriangle,
  Cpu,
  Users,
} from "lucide-react"
import { motion } from "framer-motion"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function LandingPage() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" onClick={() => scrollToSection("hero")} className="flex items-center cursor-pointer">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PALLADIUM%20SECURE%20(3240%20x%203240%20px)-iRDwai3X1Y7Jyb7KD5btVcbdNtJza9.png"
              alt="Palladium Secure Logo"
              width={80}
              height={80}
              className="h-16 w-auto"
              priority
            />
          </Link>
          <nav className="hidden md:flex gap-8">
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Sobre
            </button>
            <button onClick={() => scrollToSection("faq")} className="text-gray-300 hover:text-white transition-colors">
              FAQ
            </button>
          </nav>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="outline" className="hidden md:inline-flex">
              <a href="https://wa.me/message/GHM4BVXHHAE7N1" target="_blank" rel="noopener noreferrer">
                Fale com Especialista
              </a>
            </Button>
          </motion.div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
              <span className="text-blue-400">CIBERSEGURANÇA OFENSIVA AVANÇADA</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Golpes financeiros têm rastros. Nós seguimos e recuperamos o que é seu.
            </h1>
            <p className="text-xl text-gray-300">
              Somos especialistas em rastreamento patrimonial, inteligência digital e recuperação de ativos, incluindo
              golpes com criptomoedas e fraudes empresariais.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="w-full md:w-auto text-lg bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 rounded-xl"
                >
                  <a
                    href="https://wa.me/message/GHM4BVXHHAE7N1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    Agende uma Consultoria Agora
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
            </div>
            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center gap-3 text-gray-300">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Rastreamento de bens ocultos</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Recuperação de valores em criptomoedas</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Investigação digital e inteligência financeira</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <ScrollAnimation className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white">O Crescimento dos Golpes Financeiros</h2>
              <p className="text-xl text-red-400">
                Sem uma investigação estratégica e ferramentas certas, milhões podem ser perdidos para sempre.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6 space-y-4">
                  <AlertTriangle className="h-8 w-8 text-red-500" />
                  <h3 className="text-xl font-bold text-white">Tecnologia Avançada</h3>
                  <p className="text-gray-300">Fraudadores utilizam tecnologia avançada para esconder rastros.</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6 space-y-4">
                  <AlertTriangle className="h-8 w-8 text-red-500" />
                  <h3 className="text-xl font-bold text-white">99% das Vítimas</h3>
                  <p className="text-gray-300">Não sabem como rastrear valores desviados.</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6 space-y-4">
                  <AlertTriangle className="h-8 w-8 text-red-500" />
                  <h3 className="text-xl font-bold text-white">Criptomoedas</h3>
                  <p className="text-gray-300">São utilizadas para lavagem de dinheiro e ocultação de bens.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </ScrollAnimation>

      {/* Solutions Section */}
      <ScrollAnimation id="servicos" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">O Que a Palladium Secure Faz?</h2>
            <p className="text-xl text-gray-300">
              Nosso compromisso é claro: expor e combater fraudes financeiras com inteligência digital e investigação
              estratégica.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-8 space-y-4">
                <Search className="h-10 w-10 text-blue-500" />
                <h3 className="text-2xl font-bold text-white">Investigação e Rastreamento Patrimonial</h3>
                <p className="text-gray-300">
                  Identificamos bens ocultos, ativos financeiros e conexões empresariais para embasar processos
                  judiciais.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-8 space-y-4">
                <Shield className="h-10 w-10 text-blue-500" />
                <h3 className="text-2xl font-bold text-white">Segurança Digital e Inteligência OSINT</h3>
                <p className="text-gray-300">
                  Utilizamos tecnologia de ponta para identificar fraudes, perfis falsos e operações suspeitas.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-8 space-y-4">
                <Bitcoin className="h-10 w-10 text-blue-500" />
                <h3 className="text-2xl font-bold text-white">Recuperação de Ativos em Criptomoedas</h3>
                <p className="text-gray-300">
                  Monitoramos transações em blockchain para rastrear criptomoedas desviadas e auxiliar na recuperação
                  legal.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-8 space-y-4">
                <Scale className="h-10 w-10 text-blue-500" />
                <h3 className="text-2xl font-bold text-white">Suporte a Escritórios de Advocacia</h3>
                <p className="text-gray-300">
                  Fornecemos provas detalhadas e relatórios completos para acelerar ações judiciais contra fraudadores.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </ScrollAnimation>

      {/* Differentials Section */}
      <section id="sobre" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">Por Que a Palladium Secure?</h2>
          </ScrollAnimation>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Tecnologia Avançada",
                description: "Ferramentas como Maltego, Shodan, OSINT e rastreamento blockchain.",
              },
              {
                icon: Bitcoin,
                title: "Especialização em Criptomoedas",
                description: "Monitoramos carteiras, identificamos transações suspeitas e criamos laudos periciais.",
              },
              {
                icon: Users,
                title: "Parceria com Advogados e Contadores",
                description: "Trabalhamos lado a lado com especialistas para ter a satisfação de seus clientes.",
              },
              {
                icon: Shield,
                title: "Sigilo e Compliance",
                description: "Investigamos com total confidencialidade e dentro da legalidade.",
              },
              {
                icon: CheckCircle,
                title: "Resultados Reais",
                description: "Mais de R$ XX milhões em ativos recuperados para clientes.",
              },
              {
                icon: Cpu,
                title: "Equipe com Background em Cibersegurança e OSINT",
                description:
                  "Nossa equipe possui expertise avançada em inteligência cibernética, análise forense digital e técnicas de Open Source Intelligence (OSINT), permitindo identificar e rastrear fraudes com precisão.",
              },
            ].map((item, index) => (
              <ScrollAnimation key={index} className="h-full">
                <Card className="bg-gray-800 border-gray-700 h-full">
                  <CardContent className="p-6 space-y-4">
                    <item.icon className="h-8 w-8 text-blue-500" />
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <ScrollAnimation className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">O Que Nossos Clientes Dizem</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                quote:
                  "Conseguimos recuperar parte do prejuízo em criptomoedas graças à Palladium Secure. Um trabalho impecável!",
                author: "Cliente Confidencial",
              },
              {
                quote:
                  "A análise e rastreamento que eles fizeram foram fundamentais para a ação judicial contra os fraudadores.",
                author: "Escritório de Advocacia XYZ",
              },
              {
                quote:
                  "O detalhamento técnico que eles forneceram sobre transações em blockchain foi essencial para nosso caso.",
                author: "Investigador Financeiro",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <p className="text-gray-300 italic mb-4">{testimonial.quote}</p>
                  <p className="text-sm text-gray-400">{testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      {/* FAQ Section */}
      <ScrollAnimation id="faq" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">Perguntas Frequentes</h2>
          <div className="max-w-3xl mx-auto">
            <Tabs defaultValue="tab1" className="space-y-4">
              <TabsList className="grid grid-cols-2 md:grid-cols-5 bg-gray-800">
                <TabsTrigger value="tab1">Golpes</TabsTrigger>
                <TabsTrigger value="tab2">Criptomoedas</TabsTrigger>
                <TabsTrigger value="tab3">Clientes</TabsTrigger>
                <TabsTrigger value="tab4">Garantias</TabsTrigger>
                <TabsTrigger value="tab5">Sigilo</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1" className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">Quais tipos de golpes vocês investigam?</h3>
                <p className="text-gray-300">
                  Fraudes financeiras, pirâmides, esquemas com criptomoedas, ocultação de bens, estelionato digital e
                  muito mais.
                </p>
              </TabsContent>
              <TabsContent value="tab2" className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">Como funciona a recuperação de criptomoedas?</h3>
                <p className="text-gray-300">
                  Rastreando carteiras, analisando transações em blockchain e identificando movimentações suspeitas para
                  embasar ações legais.
                </p>
              </TabsContent>
              <TabsContent value="tab3" className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">Vocês atuam apenas para advogados?</h3>
                <p className="text-gray-300">
                  Não. Atendemos empresas, investidores e qualquer vítima de fraude financeira.
                </p>
              </TabsContent>
              <TabsContent value="tab4" className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">Vocês garantem a recuperação dos valores?</h3>
                <p className="text-gray-300">
                  Cada caso é único. Nossa equipe fornece todas as ferramentas e informações estratégicas para maximizar
                  as chances de recuperação.
                </p>
              </TabsContent>
              <TabsContent value="tab5" className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">Os dados são sigilosos?</h3>
                <p className="text-gray-300">
                  Sim. Seguimos padrões de compliance e proteção de dados, garantindo total confidencialidade.
                </p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </ScrollAnimation>

      {/* CTA Section */}
      <ScrollAnimation className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Não deixe o tempo correr a favor dos fraudadores
            </h2>
            <p className="text-xl text-gray-300">
              Tempo é um fator decisivo. Entre em contato agora e descubra como podemos ajudar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="text-lg">
                  <a href="https://wa.me/message/GHM4BVXHHAE7N1" target="_blank" rel="noopener noreferrer">
                    Agende uma Consultoria Agora
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="text-lg">
                  <a href="https://wa.me/message/GHM4BVXHHAE7N1" target="_blank" rel="noopener noreferrer">
                    Fale com um Especialista
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </ScrollAnimation>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-2xl font-bold text-white">Palladium Secure</div>
            <nav className="flex gap-8">
              <Link href="/privacidade" className="text-gray-400 hover:text-white transition-colors">
                Privacidade
              </Link>
              <Link href="/termos" className="text-gray-400 hover:text-white transition-colors">
                Termos
              </Link>
              <Link href="/contato" className="text-gray-400 hover:text-white transition-colors">
                Contato
              </Link>
            </nav>
          </div>
          <div className="mt-8 text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Palladium Secure. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}

