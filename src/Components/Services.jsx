import { motion } from "framer-motion"
import { PhoneCall, PenTool, Code, Laptop, GraduationCap, Briefcase, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const services = [
  {
    title: "SDR (Sales Development Representative)",
    description:
      "Qualificação de leads, atendimento, agendamento de reuniões, atualização do CRM e follow-ups estratégicos.",
    icon: PhoneCall,
    link: "/servicos/sdr",
  },
  {
    title: "Copywriter",
    description: "Criação de textos persuasivos e estratégicos para landing pages de alta conversão.",
    icon: PenTool,
    link: "/copywriter",
  },
  {
    title: "Professora de Programação",
    description: "Ensino de front-end, back-end e supermódulos, tornando a programação acessível e descomplicada.",
    icon: Code,
    link: "/aulas",
  },
  {
    title: "Desenvolvedora Full Stack",
    description: "Desenvolvimento de sistemas, landing pages e integrações com APIs, oferecendo soluções completas.",
    icon: Laptop,
    link: "/servicos/desenvolvimento",
  },
  {
    title: "Consultoria para iniciantes",
    description: "Orientação para quem quer entrar na área de tecnologia, criando planos de estudos personalizados.",
    icon: GraduationCap,
    link: "/consultoria",
  },
  {
    title: "Consultoria para transição de carreira",
    description: "Auxílio para encontrar vagas, se candidatar, precificar serviços e se posicionar no mercado.",
    icon: Briefcase,
    link: "/consultoria-mercado",
  },
]

const Services = () => {
  return (
    <section id="serviços" className="bg-sand dark:bg-jungle py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-jungle dark:text-sand mb-12 text-center"
        >
          Meus Serviços
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/80 dark:bg-jungle-dark/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
            >
              <div className="p-6 flex-grow backdrop-blur-sm">
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-terra dark:text-terra-light mr-3" />
                  <h3 className="text-xl font-semibold text-jungle dark:text-jungle">{service.title}</h3>
                </div>
                <p className="text-jungle-dark dark:text-sand-light">{service.description}</p>
              </div>
              <Link
                to={service.link}
                className="bg-terra dark:bg-terra-dark p-4 text-white dark:text-sand flex justify-between items-center mt-auto cursor-pointer hover:bg-terra-dark dark:hover:bg-terra transition-colors duration-300"
              >
                <span className="font-medium">Saiba mais</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Link
            to="/servicos"
            className="inline-block bg-jungle dark:bg-sand text-sand dark:text-jungle font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:bg-terra dark:hover:bg-terra-dark hover:text-white dark:hover:text-sand hover:shadow-lg transform hover:-translate-y-1"
          >
            Explore Todos os Serviços
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Services

