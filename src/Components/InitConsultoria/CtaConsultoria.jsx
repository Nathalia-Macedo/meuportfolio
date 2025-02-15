import { motion } from "framer-motion"
import { PhoneIcon as WhatsappLogo, CreditCard, Wallet } from "lucide-react"

const PricingSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/71987257532?text=Olá! Gostaria de agendar minha consultoria em programação.", "_blank")
  }

  return (
    <section className="bg-gradient-to-b from-sand to-white dark:from-jungle dark:to-jungle-dark py-20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-terra/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-jungle/5 rounded-full blur-2xl" />
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-terra/5 rounded-full blur-xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-jungle dark:text-sand mb-6">
            Invista no seu futuro
          </h2>
          <p className="text-lg md:text-xl text-jungle/80 dark:text-sand/80 max-w-2xl mx-auto">
            🎯 Se você quer entrar para o mundo da programação com clareza e um plano real, essa consultoria vai te
            economizar meses (ou até anos) de frustração.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white dark:bg-jungle-dark rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="p-6 sm:p-8 md:p-12">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
              {/* Pricing Details */}
              <div className="space-y-4 text-center sm:text-left w-full sm:w-auto">
                <div className="space-y-2">
                  <p className="text-jungle/60 dark:text-sand/60 text-base sm:text-lg line-through">Valor: R$250,00</p>
                  <div className="flex items-center justify-center sm:justify-start gap-3">
                    <span className="bg-terra/10 text-terra px-3 py-1 rounded-full text-sm font-semibold">20% OFF</span>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-jungle dark:text-sand">R$199,00</h3>
                  </div>
                  <p className="text-terra font-medium text-sm sm:text-base">🔥 Promoção por tempo limitado</p>
                </div>

                {/* Payment Methods */}
                <div className="flex items-center justify-center sm:justify-start gap-4">
                  <div className="flex items-center gap-2 text-jungle dark:text-sand">
                    <Wallet className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base">PIX</span>
                  </div>
                  <div className="w-px h-6 bg-jungle/20 dark:bg-sand/20" />
                  <div className="flex items-center gap-2 text-jungle dark:text-sand">
                    <CreditCard className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base">Cartão</span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <motion.button
                onClick={handleWhatsAppClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-terra rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative bg-terra hover:bg-terra-dark text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl flex items-center justify-center gap-3 transition-colors">
                  <WhatsappLogo className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="font-semibold text-base sm:text-lg">Agendar Agora</span>
                </div>
              </motion.button>
            </div>
          </div>

          {/* Bottom Banner */}
          <div className="bg-jungle/5 dark:bg-sand/5 p-4 md:p-6 text-center">
            <p className="text-jungle dark:text-sand text-xs md:text-sm">
              👉 Agende agora e dê o primeiro passo da maneira certa!
            </p>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-jungle/60 dark:text-sand/60"
        >
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Pagamento Seguro</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

export default PricingSection

