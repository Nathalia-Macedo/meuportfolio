import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const mySkills = [
  { name: "HTML", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Flask", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
  { name: "Git", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Supabase", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
  { name: "Salesforce", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/salesforce/salesforce-original.svg" },
  { name: "Cloudinary", image: "https://res.cloudinary.com/demo/image/upload/v1628240180/cloudinary_icon.png" },
  { name: "Prisma", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" },
  { name: "ShadCN/UI", image: "https://avatars.githubusercontent.com/u/139895814?v=4" }, // Corrigido para Radix UI
  { name: "Figma", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
  { name: "MongoDB", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "SQLite", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
  { name: "SQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "JWT", image: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/jsonwebtokens.svg" },
  { name: "Render", image: "https://assets.findstack.com/hf8tetz6wrjfxx6vxooc6igw3tah" }, // Mantido conforme fornecido
  { name: "ChatGPT API", image: "https://www.svgrepo.com/show/306500/openai.svg" }, // Mantido conforme fornecido
  { name: "Vercel", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" },
  { name: "Flet", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
];

const myAPIs = [
  { name: "Pixel Meta", image: "https://images.rawpixel.com/image_png_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjEwOTEtMDRfMS5wbmc.png" }, // Proxy para Meta
  { name: "Google Tradutor", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Google_Translate_logo.svg/768px-Google_Translate_logo.svg.png" }, // Proxy para tradução genérica
  { name: "Stripe", image: "https://cdn.worldvectorlogo.com/logos/stripe-2.svg" },
  { name: "Mercado Pago", image: "https://images.seeklogo.com/logo-png/34/1/mercado-pago-logo-png_seeklogo-342347.png" },
  { name: "API WhatsApp Não Oficial", image: "https://logopng.com.br/logos/whatsapp-33.png" }, // Proxy
  { name: "Google Verificação Não Sou um Robô", image: "https://cdn.worldvectorlogo.com/logos/google-3.svg" }, // Proxy
  { name: "Google Agenda", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Calendar_icon_%282020%29.svg/2048px-Google_Calendar_icon_%282020%29.svg.png" },
];

const MySkills = () => {
  const [carouselOffsetSkills, setCarouselOffsetSkills] = useState(0);
  const [carouselOffsetAPIs, setCarouselOffsetAPIs] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlePrevSkills = () => {
    setCarouselOffsetSkills((prev) => (prev - 1 + mySkills.length) % mySkills.length);
  };

  const handleNextSkills = () => {
    setCarouselOffsetSkills((prev) => (prev + 1) % mySkills.length);
  };

  const handlePrevAPIs = () => {
    setCarouselOffsetAPIs((prev) => (prev - 1 + myAPIs.length) % myAPIs.length);
  };

  const handleNextAPIs = () => {
    setCarouselOffsetAPIs((prev) => (prev + 1) % myAPIs.length);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-sand dark:bg-jungle transition-colors duration-300">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sand to-terra/10 dark:from-jungle dark:to-terra/20 transition-colors duration-300" />
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(217, 108, 74, 0.1) 0%, rgba(227, 218, 205, 0.1) 50%, rgba(217, 108, 74, 0.05) 100%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-jungle dark:text-sand mb-8 sm:mb-12 transition-colors duration-300">
            Minhas Habilidades
          </h2>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
          <div className="relative overflow-hidden mb-16">
            <motion.div
              className="flex transition-all duration-500 ease-in-out"
              animate={{ x: `-${carouselOffsetSkills * (100 / (isMobile ? 3 : 4))}%` }}
            >
              {[...mySkills, ...mySkills.slice(0, 4)].map((skill, index) => (
                <motion.div
                  key={`${skill.name}-${index}`}
                  className="flex-shrink-0 w-1/3 sm:w-1/4 md:w-1/4 px-2 sm:px-4"
                  whileHover={{ scale: 1.1, y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="rounded-lg p-2 sm:p-4 flex flex-col items-center justify-center h-24 sm:h-32 md:h-40 bg-white/50 dark:bg-jungle/50 backdrop-blur-sm border border-transparent dark:border-sand/10 transition-all duration-300">
                    <img
                      src={skill.image || "/placeholder.svg"}
                      alt={skill.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mb-2 sm:mb-4"
                      onError={(e) => {
                        e.target.src = "/placeholder.svg";
                      }}
                    />
                    <span className="text-xs sm:text-sm text-jungle dark:text-sand text-center font-semibold transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <div className="flex justify-center mt-6 space-x-4">
              <button
                onClick={handlePrevSkills}
                className="bg-terra/80 hover:bg-terra text-white rounded-full p-2 transition-colors duration-300"
                aria-label="Previous skill"
              >
                <ArrowLeft size={20} />
              </button>
              <button
                onClick={handleNextSkills}
                className="bg-terra/80 hover:bg-terra text-white rounded-full p-2 transition-colors duration-300"
                aria-label="Next skill"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* APIs Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-jungle dark:text-sand mb-8 sm:mb-12 transition-colors duration-300">
            APIs que Consumi
          </h2>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.7 }}>
          <div className="relative overflow-hidden">
            <motion.div
              className="flex transition-all duration-500 ease-in-out"
              animate={{ x: `-${carouselOffsetAPIs * (100 / (isMobile ? 3 : 4))}%` }}
            >
              {[...myAPIs, ...myAPIs.slice(0, 4)].map((api, index) => (
                <motion.div
                  key={`${api.name}-${index}`}
                  className="flex-shrink-0 w-1/3 sm:w-1/4 md:w-1/4 px-2 sm:px-4"
                  whileHover={{ scale: 1.1, y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="rounded-lg p-2 sm:p-4 flex flex-col items-center justify-center h-24 sm:h-32 md:h-40 bg-white/50 dark:bg-jungle/50 backdrop-blur-sm border border-transparent dark:border-sand/10 transition-all duration-300">
                    <img
                      src={api.image || "/placeholder.svg"}
                      alt={api.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mb-2 sm:mb-4"
                      onError={(e) => {
                        e.target.src = "/placeholder.svg";
                      }}
                    />
                    <span className="text-xs sm:text-sm text-jungle dark:text-sand text-center font-semibold transition-colors duration-300">
                      {api.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <div className="flex justify-center mt-6 space-x-4">
              <button
                onClick={handlePrevAPIs}
                className="bg-terra/80 hover:bg-terra text-white rounded-full p-2 transition-colors duration-300"
                aria-label="Previous API"
              >
                <ArrowLeft size={20} />
              </button>
              <button
                onClick={handleNextAPIs}
                className="bg-terra/80 hover:bg-terra text-white rounded-full p-2 transition-colors duration-300"
                aria-label="Next API"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;