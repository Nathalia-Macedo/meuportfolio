import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Server,
  Smartphone,
  Database,
  Lock,
  Code,
  Layers,
  Cloud,
  RefreshCw
} from "lucide-react";

const sections = [
  {
    icon: Smartphone,
    title: "O que é um Aplicativo?",
    description:
      "É um programa que roda no seu celular. Pode servir para pedir comida, chamar um carro ou contratar alguém. Ele é composto por várias partes que trabalham juntas."
  },
  {
    icon: Code,
    title: "Front-End",
    description:
      "É a parte visual do aplicativo. O que você vê, clica e interage. Criado com React Native, ele conversa com o sistema invisível para funcionar."
  },
  {
    icon: Server,
    title: "Back-End",
    description:
      "É o cérebro do app. Processa pedidos, guarda regras e protege informações. Tudo o que o usuário não vê, mas é essencial."
  },
  {
    icon: Cloud,
    title: "API",
    description:
      "É a ponte entre a tela e o sistema. Permite que o front-end envie e receba dados do back-end com segurança."
  },
  {
    icon: Database,
    title: "Banco de Dados",
    description:
      "Onde ficam guardadas todas as informações: usuários, mensagens, serviços. Ele precisa estar na nuvem para estar sempre acessível."
  },
  {
    icon: Lock,
    title: "Autenticação",
    description:
      "Sistema que garante que cada usuário só veja suas informações. Usamos login por e-mail, telefone ou redes sociais."
  },
  {
    icon: Layers,
    title: "Scrum",
    description:
      "Metodologia usada para organizar o desenvolvimento. Time dividido em papéis e tarefas por semana (sprints), com reuniões e entregas constantes."
  },
  {
    icon: Cloud,
    title: "Hospedagem",
    description:
      "É onde o sistema vive na internet. O banco de dados e o back-end precisam estar hospedados em servidores confiáveis. O app vai para a loja e passa por avaliação."
  },
  {
    icon: RefreshCw,
    title: "Manutenção x Alteração",
    description:
      "Manutenção corrige erros e mantém o sistema saudável. Alteração traz novidades, melhorias ou mudanças. Ambas são essenciais."
  }
];

const AppExplanation = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative min-h-screen bg-sand dark:bg-jungle overflow-hidden px-6 py-14">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-terra/10 dark:text-terra-dark/10"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.2, 0.4, 0.2],
                y: [0, -20, 0],
                rotate: [0, i % 2 === 0 ? 360 : -360]
              }}
              transition={{
                duration: 12,
                delay: i * 0.4,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 30 + 20}px`
              }}
            >
              {["API", "auth", "POST", "GET", "<div>", "const", "db"][i % 7]}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col justify-center space-y-8">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-jungle dark:text-sand"
          >
            Como um aplicativo funciona?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-jungle-dark dark:text-sand-light"
          >
            Cada parte de um app tem sua função. Aqui você entende, passo a passo, como tudo se conecta.
          </motion.p>
          <div className="grid grid-cols-2 gap-6">
            {sections.slice(0, 4).map((sec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="bg-terra p-3 rounded-full">
                  <sec.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-md font-semibold text-jungle dark:text-sand">{sec.title}</h3>
                  <p className="text-sm text-jungle-dark dark:text-sand-light">{sec.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {sections.slice(4).map((sec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/70 dark:bg-jungle-dark/80 p-6 rounded-xl shadow-md backdrop-blur-sm border border-sand-light dark:border-jungle"
            >
              <div className="flex items-start gap-4">
                <div className="bg-terra p-3 rounded-full">
                  <sec.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-jungle dark:text-sand">{sec.title}</h4>
                  <p className="text-sm text-jungle-dark dark:text-sand-light mt-1">{sec.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppExplanation;
