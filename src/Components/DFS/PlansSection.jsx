"use client"
import { motion } from "framer-motion"
import { Zap, Briefcase, FlameIcon as Fire, ChevronRight } from "lucide-react"

const plans = [
  {
    level: "Level 1",
    name: "MVP Express",
    icon: Zap,
    description: "Para quem precisa de um site rápido, funcional e com um design simples, mas de impacto.",
    features: [
      "Landing page (1 página)",
      "Design responsivo e clean",
      "Copy otimizada para conversão",
      "Formulário de contato básico",
      "Entrega ágil e prática",
    ],
    color: "bg-sand",
    textColor: "text-terra",
    hoverColor: "hover:bg-terra",
    buttonTextColor: "text-sand",
    message: "Olá! Estou interessado no Pacote Level 1 – MVP Express. Poderia me dar mais informações?",
  },
  {
    level: "Level 2",
    name: "ProDev",
    icon: Briefcase,
    description:
      "Para quem quer um site completo, profissional, otimizado para crescimento e com uma identidade visual marcante.",
    features: [
      "Site institucional (até 5 páginas)",
      "Design customizado, moderno e responsivo",
      "Copywriting estratégica para cada página",
      "Blog integrado (SEO básico)",
      "Formulários de contato e integração com ferramentas",
      "Otimização para performance e mobile",
    ],
    color: "bg-jungle",
    textColor: "text-sand",
    hoverColor: "hover:bg-terra",
    message: "Olá! Estou interessado no Pacote Level 2 – ProDev. Poderia me dar mais informações?",
  },
  {
    level: "Level 3",
    name: "Boss Mode",
    icon: Fire,
    description:
      "Para quem quer um site poderoso, persuasivo e com funcionalidades avançadas para destacar sua marca no mercado.",
    features: [
      "Site completo (até 10 páginas)",
      "Design avançado e 100% personalizado",
      "Copywriting avançada com técnicas de persuasão",
      "Efeitos visuais e animações interativas",
      "SEO técnico avançado e otimização de performance",
      "Área de membros ou loja virtual (se necessário)",
      "Acompanhamento durante o desenvolvimento e entrega premium",
    ],
    color: "bg-terra",
    textColor: "text-sand",
    hoverColor: "hover:bg-jungle",
    message: "Olá! Estou interessado no Pacote Level 3 – Boss Mode. Poderia me dar mais informações?",
  },
]

const PlanCard = ({ plan }) => {
  const Icon = plan.icon

  return (
    <motion.div
      className={`relative overflow-hidden ${plan.color} ${plan.textColor} rounded-lg shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 h-full`}
      whileHover={{ y: -5 }}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-8 -translate-y-8"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full transform -translate-x-8 translate-y-8"></div>

      <div className="relative z-10 p-8 flex flex-col h-full">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className={`w-16 h-16 ${plan.hoverColor} rounded-full flex items-center justify-center mb-6`}
        >
          <Icon size={32} className={plan.textColor} />
        </motion.div>

        <h3 className="text-2xl font-bold mb-2">{plan.level}</h3>
        <h4 className="text-3xl font-extrabold mb-4">{plan.name}</h4>
        <p className="mb-6">{plan.description}</p>

        <ul className="space-y-2 mb-6 flex-grow">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <ChevronRight size={16} className="mr-2 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <motion.a
          href={`https://wa.me/71987257532?text=${encodeURIComponent(plan.message)}`}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`w-full py-3 px-6 rounded-full bg-white text-jungle font-bold transition-colors duration-300 text-center block mt-auto`}
        >
          Solicitar Orçamento
        </motion.a>
      </div>
    </motion.div>
  )
}

const PricingPlans = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-sand via-terra/10 to-jungle/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-jungle mb-12"
        >
          Pacotes DevLevelUp
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {plans.map((plan, index) => (
            <PlanCard key={index} plan={plan} />
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-jungle mt-12 text-lg"
        >
          Quer saber mais ou solicitar um orçamento personalizado?{" "}
          <a
            href="https://wa.me/71987257532?text=Olá! Gostaria de saber mais sobre os pacotes DevLevelUp."
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-terra hover:underline"
          >
            Fale comigo no WhatsApp!
          </a>
        </motion.p>
      </div>
    </section>
  )
}

export default PricingPlans

