"use client"

import { useState, useEffect,useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Music, Home } from "lucide-react";

const NotFound404Salvador = () => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Lista de imagens de pontos turísticos de Salvador
  const salvadorImages = [
    "https://www.itl.cat/pngfile/big/104-1040009_sunset-at-farol-da-barra-salvador-da-bahia.jpg", // Substitua por URLs reais de alta definição
    "https://t4.ftcdn.net/jpg/03/03/89/91/360_F_303899156_pDB8qgqy9Rt5tmyg9jrVxA0QNbVjjV6P.jpg",
    "https://example.com/farol-da-barra.jpg",
    "https://example.com/porto-da-barra.jpg",
  ];

  // Controle de transição de imagens
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % salvadorImages.length);
    }, 5000); // Troca a cada 5 segundos
    return () => clearInterval(interval);
  }, []);

  // Controle de áudio
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch((error) => console.log("Erro ao reproduzir áudio:", error));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const handleToggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReturnClick = () => {
    navigate("/");
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* Background com imagens rotativas */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: `url(${salvadorImages[currentImage]})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      {/* Overlay para legibilidade */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

      {/* Conteúdo central */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <motion.h1
          className="text-6xl md:text-8xl font-bold text-yellow-400 mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          404
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-white mb-6 max-w-lg drop-shadow-md"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Perdido em Salvador? Sem essa página por aqui! Se não fosse por essa terra de axé, eu não seria quem sou hoje. Vamos voltar ao ritmo!
        </motion.p>
        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <button
            onClick={handleToggleMusic}
            className="flex items-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 shadow-md"
          >
            <Music className="w-5 h-5 mr-2" />
            {isPlaying ? "Pausar Carnaval" : "Tocar Carnaval"}
          </button>
          <button
            onClick={handleReturnClick}
            className="flex items-center bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 shadow-md"
          >
            <Home className="w-5 h-5 mr-2" />
            Voltar para Home
          </button>
        </motion.div>
      </div>

      {/* Áudio (placeholder - substitua pelo URL real de "We Are Carnaval") */}
      <audio ref={audioRef} src="https://youtu.be/okjgd2zE0HM?si=BK14ilft1vwOYvLb" loop />
    </div>
  );
};

export default NotFound404Salvador;