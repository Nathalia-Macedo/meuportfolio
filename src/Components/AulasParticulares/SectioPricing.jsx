"use client"

import { motion } from "framer-motion"
import { Clock, Calendar, Briefcase, Code, Linkedin, FileCheck, Wallet, CreditCard, Phone } from "lucide-react"

const plans = [
  {
    hours: 2,
    frequency: "1x por semana, dia fixo",
    originalPrice: 1200,
    price: 960,
    discount: "20% OFF",
    details: "Ideal para iniciantes ou quem tem pouco tempo disponível",
  },
  {
    hours: 3,
    frequency: "1x por semana, dia fixo",
    originalPrice: 1800,
    price: 1440,
    discount: "20% OFF",
    details: "Perfeito para quem busca um aprendizado mais intensivo",
  },
  {
    hours: 4,
    frequency: "2x por semana, 2h cada dia",
    originalPrice: 2000,
    price: 1600,
    discount: "20% OFF",
    details: "Recomendado para rápida evolução e maior imersão",
  },
]

const benefits = [
  { icon: Clock, text: "Aulas online, ao vivo e interativas" },
  { icon: Code, text: "Conteúdo focado na prática – Sem teoria excessiva" },
  { icon: Briefcase, text: "Montagem de portfólio para se destacar no mercado" },
  { icon: Linkedin, text: "Otimização do LinkedIn para oportunidades" },
  { icon: FileCheck, text: "Consultoria para iniciantes e transição de carreira" },
  { icon: Calendar, text: "Todos os conteúdos dos workshops inclusos" },
]

const PrivateLessonsPricing = () => {
  return (
    <section className="bg-gradient-to-br from-sand to-white dark:from-jungle dark:to-jungle-dark py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-50 dark:opacity-30">
        <div className="absolute top-0 left-0 w-64 h-64 bg-terra rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-jungle rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-terra rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-jungle dark:text-sand mb-6">
            Aulas Particulares de Programação
          </h2>
          <p className="text-xl text-jungle-dark dark:text-sand-light max-w-3xl mx-auto">
            Se você quer aprender programação de forma direta, prática e sem enrolação, minhas aulas particulares são
            para você! Aqui, você recebe conteúdo descomplicado, com foco total no seu aprendizado e objetivos.
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-jungle-dark rounded-xl p-6 shadow-lg flex items-start space-x-4"
            >
              <benefit.icon className="w-6 h-6 text-terra flex-shrink-0 mt-1" />
              <p className="text-jungle dark:text-sand">{benefit.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Pricing Plans */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-jungle-dark rounded-2xl shadow-xl overflow-hidden"
              whileHover={{ y: -5 }}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-jungle-dark/60 dark:text-sand/60 line-through">
                      Valor: R${plan.originalPrice},00
                    </p>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="bg-terra/10 text-terra px-3 py-1 rounded-full text-sm font-semibold">
                        {plan.discount}
                      </span>
                      <h3 className="text-4xl font-bold text-jungle dark:text-sand">R${plan.price},00</h3>
                    </div>
                    <p className="text-terra text-sm font-medium flex items-center gap-1">
                      🔥 Promoção por tempo limitado
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-jungle dark:text-sand mb-2">
                      Plano {plan.hours}h/semana
                    </h4>
                    <p className="text-jungle-dark dark:text-sand-light">{plan.frequency}</p>
                  </div>

                  <ul className="space-y-2 text-jungle-dark dark:text-sand-light">
                    <li className="flex items-center gap-2">
                      <span className="text-terra">✓</span> {plan.hours} horas de aula por semana
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-terra">✓</span> Conteúdo personalizado ao seu nível
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-terra">✓</span> Projetos práticos alinhados ao mercado
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-terra">✓</span> Suporte entre as aulas
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-terra">✓</span> Acesso a todos os materiais dos workshops
                    </li>
                  </ul>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-jungle-dark dark:text-sand-light">
                      <div className="flex items-center gap-1">
                        <Wallet className="w-4 h-4" />
                        <span>PIX</span>
                      </div>
                      <div className="w-px h-4 bg-jungle/20 dark:bg-sand/20" />
                      <div className="flex items-center gap-1">
                        <CreditCard className="w-4 h-4" />
                        <span>Cartão</span>
                      </div>
                    </div>

                    <motion.a
                      href={`https://wa.me/71987257532?text=Olá! Gostaria de saber mais sobre o plano de ${plan.hours}h semanais de aulas particulares de programação.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-terra hover:bg-terra-dark text-white text-center font-semibold py-3 px-4 rounded-lg transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="flex items-center justify-center gap-2">
                        <Phone className="w-5 h-5" />
                        Agendar Agora
                      </span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-8 mt-12 text-jungle-dark/60 dark:text-sand/60"
        >
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Pagamento Seguro</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Atendimento Imediato</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <span>Satisfação Garantida</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PrivateLessonsPricing

