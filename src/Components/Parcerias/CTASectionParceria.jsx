import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles } from "lucide-react"

const PartnershipSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    serviceNeeded: "",
    serviceOffered: "",
    discountCode: "",
  })

  const [isEasterEggFound, setIsEasterEggFound] = useState(false)

  const generateWhatsAppLink = (formData, isEasterEggFound) => {
    const phoneNumber = "71987257532"
    let message = `Nath, bora fechar uma parceria? `

    if (isEasterEggFound) {
      message += "Achei o Easter Egg e quero minha copy grátis! "
    }

    message += `Aqui vai minha ideia:\nNome: ${formData.name}\nE-mail: ${formData.email}\nMeu negócio: ${formData.business}\nPreciso de: ${formData.serviceNeeded}\nPosso oferecer: ${formData.serviceOffered}`

    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))

    if (name === "discountCode" && value.toUpperCase() === "CRIATIVO2025") {
      setIsEasterEggFound(true)
    } else if (name === "discountCode") {
      setIsEasterEggFound(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const whatsappLink = generateWhatsAppLink(formData, isEasterEggFound)
    window.open(whatsappLink, "_blank")

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      business: "",
      serviceNeeded: "",
      serviceOffered: "",
      discountCode: "",
    })
    setIsEasterEggFound(false)
  }

  return (
    <section className="bg-gradient-to-br from-[#E3DACD] to-white dark:from-[#2D4C3B] dark:to-[#1A2C23] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-[#2D4C3B] dark:text-[#E3DACD] mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Para Quem Essa Parceria É Ideal?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { title: "Empreendedores", description: "Que precisam de um site, mas querem negociar uma troca justa" },
            {
              title: "Freelancers",
              description: "Que podem oferecer serviços complementares em troca de um projeto profissional",
            },
            {
              title: "Startups e Pequenos Negócios",
              description: "Que buscam qualidade sem um grande investimento inicial",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-[#1A2C23] p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-[#D96C4A] mb-3">{item.title}</h3>
              <p className="text-[#2D4C3B] dark:text-[#E3DACD]">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-white dark:bg-[#1A2C23] rounded-xl shadow-2xl overflow-hidden max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="p-8 md:p-12">
            <h3 className="text-3xl font-bold text-[#2D4C3B] dark:text-[#E3DACD] mb-6">Quer Fechar uma Parceria?</h3>
            <p className="text-[#2D4C3B] dark:text-[#E3DACD] mb-8">
              Preencha o formulário abaixo com o nicho do seu site/sistema e os serviços que você pode oferecer em
              troca. Se for algo que ainda não fiz, podemos fechar uma parceria!
            </p>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: "name", label: "Seu Nome", type: "text", placeholder: "João Silva" },
                { name: "email", label: "E-mail", type: "email", placeholder: "joao@exemplo.com" },
                { name: "business", label: "Seu Negócio/Nicho", type: "text", placeholder: "Ex: Marketing Digital" },
                {
                  name: "serviceNeeded",
                  label: "Qual serviço você precisa?",
                  type: "text",
                  placeholder: "Ex: Site institucional",
                },
                {
                  name: "serviceOffered",
                  label: "O que você pode oferecer em troca?",
                  type: "text",
                  placeholder: "Ex: Consultoria em SEO",
                  colSpan: true,
                },
                {
                  name: "discountCode",
                  label: "Código de Desconto (opcional)",
                  type: "text",
                  placeholder: "Insira seu código aqui",
                },
              ].map((field, index) => (
                <motion.div
                  key={field.name}
                  className={field.colSpan ? "md:col-span-2" : ""}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <label
                    htmlFor={field.name}
                    className="block text-sm font-medium text-[#2D4C3B] dark:text-[#E3DACD] mb-2"
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    id={field.name}
                    value={formData[field.name]}
                    onChange={handleInputChange}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-2 rounded-md border border-[#D96C4A] focus:ring-2 focus:ring-[#D96C4A] focus:border-transparent bg-white dark:bg-[#2D4C3B] text-[#2D4C3B] dark:text-[#E3DACD] placeholder-[#2D4C3B]/50 dark:placeholder-[#E3DACD]/50"
                    required={field.name !== "discountCode"}
                  />
                </motion.div>
              ))}

              <AnimatePresence>
                {isEasterEggFound && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:col-span-2 bg-[#D96C4A]/20 p-4 rounded-md"
                  >
                    <p className="text-[#2D4C3B] dark:text-[#E3DACD] flex items-center">
                      <Sparkles className="mr-2" />
                      Uau! Você encontrou o Easter Egg! 🎉 Como recompensa pela sua curiosidade e atenção aos detalhes,
                      você receberá a copy do seu site gratuitamente! Estamos ansiosos para criar algo incrível juntos!
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                onClick={handleSubmit}
                className="md:col-span-2 w-full bg-[#D96C4A] hover:bg-[#C05A3E] text-white font-bold py-3 px-6 rounded-md transition-colors duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Enviar Proposta de Parceria
              </motion.button>
            </form>
          </div>
        </motion.div>

        <motion.p
          className="text-center text-[#2D4C3B] dark:text-[#E3DACD] mt-8 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          💡 Vamos crescer juntos! Se seu projeto for aceito, você terá um serviço profissional em troca de algo
          igualmente valioso. 🚀
        </motion.p>
      </div>
    </section>
  )
}

export default PartnershipSection

