// import React, { createContext, useContext, useState } from 'react';
// import { motion } from 'framer-motion';
// import { Code, Server, Palette, BookOpen, Users, FilterIcon } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// // Definindo o contexto para os conteúdos
// const ContentContext = createContext();

// export const ContentProvider = ({ children }) => {
//   const [contents] = useState([
//     { 
//       id: 1, 
//       title: "Introdução ao React", 
//       description: "Aprenda os fundamentos do React", 
//       category: "Front-end", 
//       type: "Artigo", 
//       icon: Code
//     },
//     { 
//       id: 2, 
//       title: "Node.js para iniciantes", 
//       description: "Comece sua jornada com Node.js", 
//       category: "Back-end", 
//       type: "Tutorial", 
//       icon: Server
//     },
//     { 
//       id: 3, 
//       title: "Design System na prática", 
//       description: "Crie um design system do zero", 
//       category: "Design", 
//       type: "Guia", 
//       icon: Palette
//     },
//     { 
//       id: 4, 
//       title: "Tendências de UX para 2025", 
//       description: "Fique por dentro das novidades em UX", 
//       category: "Design", 
//       type: "Vídeo", 
//       icon: BookOpen
//     },
//     { 
//       id: 5, 
//       title: "API RESTful com Express", 
//       description: "Construa APIs robustas com Express", 
//       category: "Back-end", 
//       type: "Tutorial interativo", 
//       icon: Server
//     },
//     { 
//       id: 6, 
//       title: "Dicas para entrevistas tech", 
//       description: "Se prepare para entrevistas na área de tecnologia", 
//       category: "Mercado", 
//       type: "Artigo", 
//       icon: Users
//     },
//     { 
//       id: 7, 
//       title: "Funil de Vendas Eficiente", 
//       description: "Aprenda a criar um funil de vendas do zero ao avançado", 
//       category: "Marketing", 
//       type: "Guia Completo", 
//       icon: FilterIcon,
//       stages: [
//         { name: "TOFU", description: "Topo do Funil - Atração" },
//         { name: "MOFU", description: "Meio do Funil - Engajamento" },
//         { name: "BOFU", description: "Fundo do Funil - Conversão" }
//       ]
//     }
//   ]);

//   return (
//     <ContentContext.Provider value={{ contents }}>
//       {children}
//     </ContentContext.Provider>
//   );
// };

// export const useContent = () => useContext(ContentContext);

// // Componente Banner
// const Banner = () => (
//   <div className="relative bg-jungle text-sand p-12 rounded-lg overflow-hidden mb-8">
//     <motion.h1 
//       className="text-4xl md:text-5xl font-bold mb-4 relative z-10"
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       Explore o universo do código, design e tecnologia!
//     </motion.h1>
//     <motion.p 
//       className="text-xl relative z-10"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay: 0.2 }}
//     >
//       Descubra artigos, tutoriais e recursos para impulsionar sua carreira tech.
//     </motion.p>
//     <div className="absolute inset-0 bg-terra opacity-20"></div>
//     <div className="absolute inset-0 bg-gradient-to-r from-jungle via-transparent to-terra opacity-30"></div>
//   </div>
// );

// // Componente Filters
// const Filters = ({ categories, activeCategory, setActiveCategory }) => (
//   <div className="flex flex-wrap gap-4 mb-8">
//     {categories.map((category) => (
//       <motion.button
//         key={category}
//         className={`px-4 py-2 rounded-full transition-colors duration-300 ${
//           activeCategory === category
//             ? 'bg-terra text-sand'
//             : 'bg-sand text-jungle hover:bg-terra hover:text-sand'
//         }`}
//         onClick={() => setActiveCategory(category)}
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//       >
//         {category}
//       </motion.button>
//     ))}
//   </div>
// );

// // Componente ContentCard
// const ContentCard = ({ content }) => {
//   const Icon = content.icon;
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate(`/content/${content.id}`);
//   };

//   return (
//     <motion.div 
//       className="bg-sand p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full cursor-pointer"
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//       onClick={handleClick}
//     >
//       <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center bg-terra">
//         <Icon className="w-6 h-6 text-sand" />
//       </div>
//       <h3 className="text-xl font-semibold mb-2 text-jungle">{content.title}</h3>
//       <p className="text-jungle/70 mb-4 flex-grow">{content.description}</p>
//       <span className="inline-block bg-terra text-sand text-sm px-3 py-1 rounded-full w-fit">
//         {content.type}
//       </span>
//     </motion.div>
//   );
// };

// // Componente ContentSection
// const ContentSection = () => {
//   const { contents } = useContent();
//   const [activeCategory, setActiveCategory] = useState('Todos');
  
//   const categories = ['Todos', ...new Set(contents.map(content => content.category))];
  
//   const filteredContents = activeCategory === 'Todos'
//     ? contents
//     : contents.filter(content => content.category === activeCategory);

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-sand">
//       <Banner />
//       <Filters 
//         categories={categories} 
//         activeCategory={activeCategory} 
//         setActiveCategory={setActiveCategory} 
//       />
//       <motion.div 
//         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5, staggerChildren: 0.1 }}
//       >
//         {filteredContents.map(content => (
//           <motion.div
//             key={content.id}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <ContentCard content={content} />
//           </motion.div>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// // Componente ContentSectionWrapper
// const ContentSectionWrapper = () => (
//   <ContentProvider>
//     <ContentSection />
//   </ContentProvider>
// );

// export default ContentSectionWrapper;

"use client"

import React, { createContext, useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Palette, BookOpen, Users, FilterIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Definindo o contexto para os conteúdos
const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
  const [contents] = useState([
    { 
      id: 1, 
      title: "Introdução ao React", 
      description: "Aprenda os fundamentos do React", 
      category: "Front-end", 
      type: "Artigo", 
      icon: Code
    },
    { 
      id: 2, 
      title: "Node.js para iniciantes", 
      description: "Comece sua jornada com Node.js", 
      category: "Back-end", 
      type: "Tutorial", 
      icon: Server
    },
    { 
      id: 3, 
      title: "Design System na prática", 
      description: "Crie um design system do zero", 
      category: "Design", 
      type: "Guia", 
      icon: Palette
    },
    { 
      id: 4, 
      title: "Tendências de UX para 2025", 
      description: "Fique por dentro das novidades em UX", 
      category: "Design", 
      type: "Vídeo", 
      icon: BookOpen
    },
    { 
      id: 5, 
      title: "API RESTful com Express", 
      description: "Construa APIs robustas com Express", 
      category: "Back-end", 
      type: "Tutorial interativo", 
      icon: Server
    },
    { 
      id: 6, 
      title: "Dicas para entrevistas tech", 
      description: "Se prepare para entrevistas na área de tecnologia", 
      category: "Mercado", 
      type: "Artigo", 
      icon: Users
    },
    { 
      id: 7, 
      title: "Funil de Vendas Eficiente", 
      description: "Aprenda a criar um funil de vendas do zero ao avançado", 
      category: "Marketing", 
      type: "Guia Completo", 
      icon: FilterIcon,
      stages: [
        { name: "TOFU", description: "Topo do Funil - Atração" },
        { name: "MOFU", description: "Meio do Funil - Engajamento" },
        { name: "BOFU", description: "Fundo do Funil - Conversão" }
      ]
    }
  ]);

  return (
    <ContentContext.Provider value={{ contents }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => useContext(ContentContext);

// Componente Banner
const Banner = () => (
  <div className="relative bg-jungle text-sand p-12 rounded-lg overflow-hidden mb-8">
    <motion.h1 
      className="text-4xl md:text-5xl font-bold mb-4 relative z-10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Explore o universo do código, design e tecnologia!
    </motion.h1>
    <motion.p 
      className="text-xl relative z-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      Descubra artigos, tutoriais e recursos para impulsionar sua carreira tech.
    </motion.p>
    <div className="absolute inset-0 bg-terra opacity-20"></div>
    <div className="absolute inset-0 bg-gradient-to-r from-jungle via-transparent to-terra opacity-30"></div>
  </div>
);

// Componente Filters
const Filters = ({ categories, activeCategory, setActiveCategory }) => (
  <div className="flex flex-wrap gap-4 mb-8">
    {categories.map((category) => (
      <motion.button
        key={category}
        className={`px-4 py-2 rounded-full transition-colors duration-300 ${
          activeCategory === category
            ? 'bg-terra text-sand'
            : 'bg-sand text-jungle hover:bg-terra hover:text-sand'
        }`}
        onClick={() => setActiveCategory(category)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {category}
      </motion.button>
    ))}
  </div>
);

// Componente ContentCard
const ContentCard = ({ content }) => {
  const Icon = content.icon;
  const navigate = useNavigate();

  const handleClick = () => {
    if (content.id === 7) {
      navigate('/funil-de-vendas');
    } else {
      navigate(`/content/${content.id}`);
    }
  };

  return (
    <motion.div 
      className="bg-sand p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
    >
      <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center bg-terra">
        <Icon className="w-6 h-6 text-sand" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-jungle">{content.title}</h3>
      <p className="text-jungle/70 mb-4 flex-grow">{content.description}</p>
      <span className="inline-block bg-terra text-sand text-sm px-3 py-1 rounded-full w-fit">
        {content.type}
      </span>
    </motion.div>
  );
};

// Componente ContentSection
const ContentSection = () => {
  const { contents } = useContent();
  const [activeCategory, setActiveCategory] = useState('Todos');
  
  const categories = ['Todos', ...new Set(contents.map(content => content.category))];
  
  const filteredContents = activeCategory === 'Todos'
    ? contents
    : contents.filter(content => content.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-sand">
      <Banner />
      <Filters 
        categories={categories} 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
      />
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, staggerChildren: 0.1 }}
      >
        {filteredContents.map(content => (
          <motion.div
            key={content.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ContentCard content={content} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

// Componente ContentSectionWrapper
const ContentSectionWrapper = () => (
  <ContentProvider>
    <ContentSection />
  </ContentProvider>
);

export default ContentSectionWrapper;