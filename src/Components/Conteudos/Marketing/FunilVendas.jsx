"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FilterIcon as FunnelIcon, Users, Brain, ShoppingCart, Lightbulb, ChevronDown, ChevronUp, CheckCircle2, BarChart3, Zap, ArrowRight } from 'lucide-react'

const FunnelContent = () => {
  const [activeStage, setActiveStage] = useState('tofu')

  return (
    <div className="max-w-4xl mx-auto bg-sand dark:bg-jungle text-jungle dark:text-sand p-8 rounded-lg shadow-lg">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center"
      >
        <motion.div 
          className="inline-block"
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <FunnelIcon className="w-16 h-16 text-terra mx-auto mb-4" />
        </motion.div>
        <h1 className="text-4xl font-bold mb-4">Funil de Vendas Eficiente</h1>
        <p className="text-xl">Do Zero ao Avançado: Transforme visitantes em clientes!</p>
      </motion.div>

      <div className="bg-white dark:bg-jungle shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">O que vamos explorar</h2>
        <ul className="grid grid-cols-2 gap-4">
          {[
            "Conceito de funil de vendas",
            "Etapas do funil",
            "Exemplos práticos",
            "Dicas de otimização"
          ].map((item, index) => (
            <motion.li 
              key={index}
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <CheckCircle2 className="w-5 h-5 text-terra mr-2 flex-shrink-0" />
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="bg-white dark:bg-jungle shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">O Que é um Funil de Vendas?</h2>
        <p className="mb-4">
          Um funil de vendas é uma estratégia que guia potenciais clientes desde o primeiro contato até a compra final, 
          filtrando leads qualificados em cada etapa.
        </p>
        <motion.div 
          className="bg-jungle dark:bg-sand text-sand dark:text-jungle p-4 rounded-lg"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="font-semibold mb-2">Por que é importante?</h3>
          <ul className="space-y-2">
            <li>Torna o processo de vendas previsível</li>
            <li>Ajuda a escalar seu negócio</li>
            <li>Melhora a experiência do cliente</li>
          </ul>
        </motion.div>
      </div>

      <div className="bg-white dark:bg-jungle shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Etapas do Funil de Vendas</h2>
        <div className="mb-4">
          <div className="flex border-b border-gray-200">
            {['tofu', 'mofu', 'bofu'].map((stage) => (
              <button
                key={stage}
                className={`flex-1 py-2 px-4 text-center font-medium ${
                  activeStage === stage
                    ? 'border-b-2 border-terra text-terra'
                    : 'text-gray-500 hover:text-terra'
                }`}
                onClick={() => setActiveStage(stage)}
              >
                {stage.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeStage === 'tofu' && (
              <FunnelStage
                title="Topo do Funil (TOFU)"
                icon={Users}
                description="Atração de visitantes e geração de interesse"
                actions={[
                  "Criar conteúdos informativos",
                  "Melhorar SEO",
                  "Criar anúncios",
                  "Oferecer materiais gratuitos"
                ]}
                example="Crie um blog post 'O que é JavaScript?' e ofereça um e-book gratuito."
              />
            )}
            {activeStage === 'mofu' && (
              <FunnelStage
                title="Meio do Funil (MOFU)"
                icon={Brain}
                description="Engajamento de leads e qualificação"
                actions={[
                  "Criar conteúdos aprofundados",
                  "Enviar e-mails segmentados",
                  "Realizar webinars",
                  "Apresentar casos de sucesso"
                ]}
                example="Envie um e-mail convidando para um webinar sobre JavaScript na prática."
              />
            )}
            {activeStage === 'bofu' && (
              <FunnelStage
                title="Fundo do Funil (BOFU)"
                icon={ShoppingCart}
                description="Conversão de leads em clientes"
                actions={[
                  "Oferecer descontos exclusivos",
                  "Criar senso de urgência",
                  "Apresentar garantias",
                  "Fazer remarketing"
                ]}
                example="Envie uma oferta especial com 30% de desconto por tempo limitado."
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="bg-white dark:bg-jungle shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Otimizando seu Funil</h2>
        <ul className="space-y-4">
          {[
            "Use automação de marketing",
            "Crie landing pages eficientes",
            "Acompanhe métricas importantes",
            "Teste diferentes CTAs"
          ].map((tip, index) => (
            <motion.li 
              key={index}
              className="flex items-center bg-jungle/10 dark:bg-sand/10 p-4 rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Zap className="w-6 h-6 text-terra mr-2 flex-shrink-0" />
              <span>{tip}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      <motion.div 
        className="mt-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <button className="bg-terra text-sand hover:bg-terra/80 px-6 py-2 rounded-full font-medium flex items-center justify-center mx-auto">
          Comece a Otimizar Seu Funil
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </motion.div>
    </div>
  )
}

const FunnelStage = ({ title, icon: Icon, description, actions, example }) => (
  <div>
    <div className="flex items-center mb-4">
      <Icon className="w-8 h-8 text-terra mr-2" />
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <p className="mb-4">{description}</p>
    <h4 className="font-semibold mb-2">Ações-chave:</h4>
    <ul className="list-disc list-inside mb-4 space-y-2">
      {actions.map((action, index) => (
        <li key={index}>{action}</li>
      ))}
    </ul>
    <div className="bg-jungle/10 dark:bg-sand/10 p-4 rounded-lg">
      <h4 className="font-semibold mb-2">Exemplo prático:</h4>
      <p>{example}</p>
    </div>
  </div>
)

export default FunnelContent