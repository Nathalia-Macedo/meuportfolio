// import { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   BookOpen,
//   Briefcase,
//   Code,
//   Lightbulb,
//   Layers,
//   Sun,
//   Moon,
//   X,
//   Globe,
//   Camera,
//   Database,
//   Layout,
//   BarChart,
//   Sparkles,
//   ArrowLeft,
//   ArrowRight,
// } from "lucide-react";
// import { useNavigate } from "react-router-dom"; // Adicionado para navegação

// // ===============================
// // Componente ModuloAulas (atualizado: clica na aula redireciona para rota dinâmica)
// // ===============================
// function ModuloAulas({ isOpen, onClose, titulo, aulas = [], dark = false }) {
//   const navigate = useNavigate();
//   const [paginaAtual, setPaginaAtual] = useState(1);
//   const aulasPorPagina = 5;

//   if (!isOpen) return null;

//   const indexUltimaAula = paginaAtual * aulasPorPagina;
//   const indexPrimeiraAula = indexUltimaAula - aulasPorPagina;
//   const aulasPagina = aulas.slice(indexPrimeiraAula, indexUltimaAula);
//   const totalPaginas = Math.ceil(aulas.length / aulasPorPagina);

//   const handleAulaClick = (idx) => {
//     // Redireciona para rota dinâmica: /conteudos/modulo/aulaId (idx como ID)
//     navigate(`/conteudos/${encodeURIComponent(titulo)}/${idx}`);
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1D3C34]/60 dark:bg-[#FDF6EC]/60 backdrop-blur-sm px-4">
//       <motion.div
//         initial={{ scale: 0.95, opacity: 0, y: 20 }}
//         animate={{ scale: 1, opacity: 1, y: 0 }}
//         exit={{ scale: 0.95, opacity: 0, y: 20 }}
//         transition={{ duration: 0.3, ease: "easeOut" }}
//         className={`relative w-full max-w-3xl rounded-2xl p-8 shadow-2xl border ${
//           dark ? "bg-[#1D3C34] border-[#FDF6EC]/30" : "bg-[#FDF6EC] border-[#E07A5F]/30"
//         } backdrop-blur-lg overflow-hidden`}
//       >
//         {/* Header */}
//         <div className="flex items-center justify-between mb-8">
//           <div className="flex items-center gap-3">
//             <motion.div
//               initial={{ rotate: 0 }}
//               whileHover={{ rotate: 10 }}
//               className={`p-2 rounded-full ${dark ? "bg-[#FDF6EC]/10" : "bg-[#E07A5F]/10"}`}
//             >
//               <BookOpen className={`w-5 h-5 ${dark ? "text-[#FDF6EC]" : "text-[#E07A5F]"}`} />
//             </motion.div>
//             <h2 className={`text-2xl font-bold ${dark ? "text-[#FDF6EC]" : "text-[#E07A5F]"}`}>{titulo}</h2>
//           </div>
//           <motion.button
//             whileHover={{ scale: 1.1, rotate: 90 }}
//             whileTap={{ scale: 0.9 }}
//             onClick={onClose}
//             className={`p-2 rounded-full hover:bg-[#E07A5F]/20 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E07A5F]`}
//             aria-label="Fechar modal"
//           >
//             <X className={`w-6 h-6 ${dark ? "text-[#FDF6EC]" : "text-[#E07A5F]"}`} />
//           </motion.button>
//         </div>

//         {/* Lista de aulas: Clique redireciona */}
//         <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-[#E07A5F]/50 dark:scrollbar-thumb-[#FDF6EC]/50 scrollbar-track-[#FDF6EC]/10 dark:scrollbar-track-[#1D3C34]/10 pb-4">
//           {aulasPagina.map((aula, idx) => (
//             <motion.button
//               key={idx}
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: idx * 0.05 }}
//               whileHover={{ scale: 1.02, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
//               whileTap={{ scale: 0.98 }}
//               onClick={() => handleAulaClick(idx)}
//               className={`w-full text-left rounded-xl p-5 border shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#E07A5F] ${
//                 dark ? "bg-[#FDF6EC]/10 border-[#FDF6EC]/20 hover:border-[#FDF6EC]/40" : "bg-[#E07A5F]/10 border-[#1D3C34]/20 hover:border-[#1D3C34]/40"
//               }`}
//             >
//               <div className="flex items-center gap-3">
//                 <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${dark ? "bg-[#FDF6EC]/10" : "bg-[#1D3C34]/10"}`}>
//                   <Lightbulb className={`w-5 h-5 ${dark ? "text-[#FDF6EC]" : "text-[#1D3C34]"}`} />
//                 </div>
//                 <div>
//                   <h3 className={`text-lg font-semibold ${dark ? "text-[#FDF6EC]" : "text-[#1D3C34]"}`}>{aula}</h3>
//                   <p className={`text-sm mt-1 ${dark ? "text-[#FDF6EC]/70" : "text-[#1D3C34]/70"}`}>Aprenda conceitos essenciais de forma prática e interativa.</p>
//                 </div>
//               </div>
//             </motion.button>
//           ))}
//         </div>

//         {/* Paginação */}
//         {totalPaginas > 1 && (
//           <div className="mt-8 flex items-center justify-between gap-6 border-t border-[#E07A5F]/30 dark:border-[#FDF6EC]/30 pt-6">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => setPaginaAtual((prev) => Math.max(prev - 1, 1))}
//               disabled={paginaAtual === 1}
//               className={`flex items-center gap-2 px-5 py-3 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#E07A5F] shadow-sm ${
//                 dark ? "bg-[#FDF6EC]/10 text-[#FDF6EC] hover:bg-[#FDF6EC]/20" : "bg-[#1D3C34]/10 text-[#1D3C34] hover:bg-[#1D3C34]/20"
//               }`}
//             >
//               <ArrowLeft className="w-4 h-4" />
//               Anterior
//             </motion.button>
//             <span className={`text-base font-medium ${dark ? "text-[#FDF6EC]/80" : "text-[#1D3C34]/80"}`}>
//               Página {paginaAtual} de {totalPaginas}
//             </span>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => setPaginaAtual((prev) => Math.min(prev + 1, totalPaginas))}
//               disabled={paginaAtual === totalPaginas}
//               className={`flex items-center gap-2 px-5 py-3 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#E07A5F] shadow-sm ${
//                 dark ? "bg-[#FDF6EC]/10 text-[#FDF6EC] hover:bg-[#FDF6EC]/20" : "bg-[#1D3C34]/10 text-[#1D3C34] hover:bg-[#1D3C34]/20"
//               }`}
//             >
//               Próxima
//               <ArrowRight className="w-4 h-4" />
//             </motion.button>
//           </div>
//         )}
//       </motion.div>
//     </div>
//   );
// }





// // ===============================
// // Componente Principal (com ajustes: botões de categoria não selecionados em verde no modo claro, ícones dos cards em verde no modo claro, texto abaixo do título em verde no modo claro)
// // ===============================
// export default function AreaDeConteudos() {
//   const [dark, setDark] = useState(false);
//   const [categoria, setCategoria] = useState("programacao");
//   const [moduloAberto, setModuloAberto] = useState(null);

//   const COLORS = {
//     cream: "#FDF6EC",
//     green: "#1D3C34",
//     terracotta: "#E07A5F",
//     grid: "#F4E7D8",
//   };

//   const categorias = [
//     { id: "programacao", nome: "Programação", icone: Code },
//     { id: "frontend", nome: "Front End", icone: Layout },
//     { id: "backend", nome: "Back End", icone: Database },
//     { id: "mercado", nome: "Mercado", icone: BarChart },
//     { id: "dicas", nome: "Dicas", icone: Lightbulb },
//     { id: "marketing", nome: "Marketing", icone: BookOpen },
//     { id: "fotografia", nome: "Fotografia", icone: Camera },
//     { id: "variados", nome: "Variados", icone: Sparkles },
//   ];

//   const conteudos = {
//     programacao: [
//       { titulo: "HTML e CSS", descricao: "Construa layouts modernos e responsivos com as bases da web.", destaque: true, icone: Code, bg: "bg-[#FDF6EC]/90" },
//       { titulo: "JavaScript", descricao: "Domine interatividade e lógica na programação web.", icone: Code, bg: "bg-[#FDF6EC]/90" },
//       { titulo: "Python", descricao: "Automatize tarefas e resolva problemas complexos.", icone: Code, bg: "bg-[#FDF6EC]/90" },
//     ],
//     frontend: [
//       { titulo: "React Basics", descricao: "Crie interfaces dinâmicas com componentes reutilizáveis.", destaque: true, icone: Layout, bg: "bg-[#FDF6EC]/90" },
//       { titulo: "Tailwind CSS", descricao: "Estilize rapidamente com classes utilitárias.", icone: Layout, bg: "bg-[#FDF6EC]/90" },
//     ],
//     backend: [
//       { titulo: "Node.js", descricao: "Construa servidores escaláveis com JavaScript.", icone: Database, bg: "bg-[#FDF6EC]/90" },
//       { titulo: "SQL Databases", descricao: "Gerencie dados com consultas eficientes.", icone: Database, bg: "bg-[#FDF6EC]/90" },
//     ],
//     mercado: [
//       { titulo: "Tendências Tech", descricao: "Entenda o mercado de tecnologia atual.", destaque: true, icone: BarChart, bg: "bg-[#FDF6EC]/90" },
//       { titulo: "Carreiras", descricao: "Dicas para avançar na sua trajetória profissional.", icone: BarChart, bg: "bg-[#FDF6EC]/90" },
//     ],
//     dicas: [
//       { titulo: "Produtividade", descricao: "Organize seu dia para maximizar resultados.", destaque: true, icone: Lightbulb, bg: "bg-[#FDF6EC]/90" },
//       { titulo: "Rotina de Estudos", descricao: "Estruture horários para aprendizado efetivo.", icone: Lightbulb, bg: "bg-[#FDF6EC]/90" },
//     ],
//     marketing: [
//       { titulo: "Marketing Digital", descricao: "Estratégias para crescer online.", destaque: true, icone: BookOpen, bg: "bg-[#FDF6EC]/90" },
//       { titulo: "Redes Sociais", descricao: "Engaje audiências e construa comunidades.", icone: BookOpen, bg: "bg-[#FDF6EC]/90" },
//     ],
//     fotografia: [
//       { titulo: "Composição Básica", descricao: "Aprenda regras para fotos impactantes.", icone: Camera, bg: "bg-[#FDF6EC]/90" },
//       { titulo: "Edição de Imagens", descricao: "Melhore suas fotos com ferramentas simples.", icone: Camera, bg: "bg-[#FDF6EC]/90" },
//     ],
//     variados: [
//       { titulo: "IA no Dia a Dia", descricao: "Integre inteligência artificial em tarefas cotidianas.", icone: Sparkles, bg: "bg-[#FDF6EC]/90" },
//       { titulo: "Desenvolvimento Pessoal", descricao: "Dicas para crescimento contínuo.", destaque: true, icone: Sparkles, bg: "bg-[#FDF6EC]/90" },
//     ],
//   };

//   const aulas = {
//     "HTML e CSS": ["Introdução ao HTML", "Tags básicas", "Formulários e inputs", "Introdução ao CSS", "Flexbox e Grid", "Layouts responsivos"],
//     "JavaScript": ["Variáveis e tipos", "Funções", "Manipulação do DOM", "Eventos", "Promises e Async/Await"],
//     "Python": ["Introdução ao Python", "Controle de fluxo", "Manipulação de arquivos", "Bibliotecas úteis"],
//     "React Basics": ["Componentes", "Estado e Props", "Hooks", "Roteamento"],
//     "Tailwind CSS": ["Instalação", "Classes Utilitárias", "Responsividade", "Customização"],
//     "Node.js": ["Setup", "Express Framework", "APIs", "Autenticação"],
//     "SQL Databases": ["Comandos Básicos", "Joins", "Índices", "Transações"],
//     "Tendências Tech": ["IA e ML", "Web3", "Cloud Computing", "Sustentabilidade Tech"],
//     "Carreiras": ["Currículo Eficaz", "Entrevistas Técnicas", "Networking", "Freelance"],
//     "Produtividade": ["Técnica Pomodoro", "Matriz Eisenhower", "Rotina Matinal", "Ferramentas"],
//     "Rotina de Estudos": ["Cronograma", "Revisão Ativa", "Descanso", "Motivação"],
//     "Marketing Digital": ["Funil de Vendas", "Conteúdo", "SEO", "Ads"],
//     "Redes Sociais": ["Autoridade", "Calendário", "Métricas", "Engajamento"],
//     "Composição Básica": ["Regra dos Terços", "Linhas Guias", "Equilíbrio", "Perspectiva"],
//     "Edição de Imagens": ["Ferramentas Básicas", "Cor e Exposição", "Retoque", "Exportação"],
//     "IA no Dia a Dia": ["Assistentes Virtuais", "Automação", "Ética", "Ferramentas Gratuitas"],
//     "Desenvolvimento Pessoal": ["Hábitos", "Leitura", "Feedback", "Metas"],
//   };

//   // Ícones de background com opacidade ajustada
//   const backgroundIcons = [
//     { Icon: Code, size: 120, top: "10%", left: "5%", rotate: 15 },
//     { Icon: BookOpen, size: 160, top: "20%", left: "80%", rotate: -10 },
//     { Icon: Briefcase, size: 100, top: "35%", left: "15%", rotate: 20 },
//     { Icon: Lightbulb, size: 140, top: "50%", left: "70%", rotate: -15 },
//     { Icon: Layers, size: 180, top: "65%", left: "10%", rotate: 10 },
//     { Icon: Globe, size: 90, top: "75%", left: "85%", rotate: -20 },
//     { Icon: Camera, size: 130, top: "85%", left: "25%", rotate: 15 },
//     { Icon: Database, size: 110, top: "15%", left: "50%", rotate: -5 },
//     { Icon: Layout, size: 150, top: "40%", left: "90%", rotate: 10 },
//     { Icon: BarChart, size: 170, top: "60%", left: "40%", rotate: -10 },
//     { Icon: Sparkles, size: 80, top: "80%", left: "60%", rotate: 20 },
//   ];

//   return (
//     <div className={`relative min-h-screen overflow-hidden transition-colors duration-300 ${dark ? "bg-[#1D3C34] text-[#FDF6EC]" : "bg-[#FDF6EC] text-[#1D3C34]"}`}>
//       {/* Fundo quadriculado opaco */}
//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           backgroundImage: `linear-gradient(to right, ${COLORS.grid} 1px, transparent 1px), linear-gradient(to bottom, ${COLORS.grid} 1px, transparent 1px)`,
//           backgroundSize: "40px 40px",
//           opacity: dark ? 0.05 : 0.3,
//         }}
//       />

//       {/* Ícones espalhados no background */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {backgroundIcons.map(({ Icon, size, top, left, rotate }, i) => (
//           <Icon
//             key={i}
//             className={`absolute ${dark ? "text-[#FDF6EC]/10" : "text-[#E07A5F]/30"}`}
//             style={{
//               width: `${size}px`,
//               height: `${size}px`,
//               top,
//               left,
//               transform: `rotate(${rotate}deg)`,
//             }}
//           />
//         ))}
//       </div>

//       {/* Botão modo dark: com verde no modo claro */}
//       <button
//         onClick={() => setDark(!dark)}
//         className={`fixed top-4 right-4 z-40 p-2 rounded-full shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E07A5F] ${
//           dark ? "bg-[#E07A5F]/80 hover:bg-[#E07A5F]" : "bg-[#1D3C34]/80 hover:bg-[#1D3C34]"
//         }`}
//         aria-label="Alternar modo dark"
//       >
//         {dark ? <Sun className="w-5 h-5 text-[#FDF6EC]" /> : <Moon className="w-5 h-5 text-[#FDF6EC]" />}
//       </button>

//       {/* Conteúdo principal */}
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-12 md:mb-16"
//         >
//           <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${dark ? "text-[#FDF6EC]" : "text-[#E07A5F]"}`}>
//             Área de Conteúdos
//           </h1>
//           <p className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto ${dark ? "text-[#FDF6EC]/80" : "text-[#1D3C34]"}`}>
//             Explore conteúdos práticos e acessíveis sobre programação, marketing, dicas e mais. Tudo explicado de forma simples, visual e direta para impulsionar seu aprendizado e carreira.
//           </p>
//         </motion.div>

//         <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
//           {categorias.map((cat) => {
//             const Icon = cat.icone;
//             const ativo = categoria === cat.id;
//             return (
//               <button
//                 key={cat.id}
//                 onClick={() => setCategoria(cat.id)}
//                 className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E07A5F] ${
//                   ativo
//                     ? "bg-[#E07A5F] text-[#FDF6EC]"
//                     : dark
//                     ? "bg-transparent border border-[#FDF6EC]/50 text-[#FDF6EC] hover:bg-[#FDF6EC]/10"
//                     : "bg-transparent border border-[#1D3C34]/50 text-[#1D3C34] hover:bg-[#1D3C34]/10"
//                 }`}
//               >
//                 <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${ativo && !dark ? "text-[#FDF6EC]" : "text-[#1D3C34]"}`} />
//                 {cat.nome}
//               </button>
//             );
//           })}
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
//           {conteudos[categoria]?.map((item, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.3, delay: i * 0.1 }}
//               whileHover={{ y: -5, transition: { duration: 0.2 } }}
//               className={`rounded-2xl shadow-lg border p-6 flex flex-col justify-between h-[220px] sm:h-[240px] transition-colors ${
//                 dark ? "bg-[#1D3C34]/90 border-[#FDF6EC]/30 text-[#FDF6EC]" : `${item.bg} border-[#1D3C34]/30 text-[#1D3C34]`
//               }`}
//             >
//               <div className="flex flex-col h-full">
//                 <div className="flex items-start justify-between mb-4">
//                   <h3 className="text-lg sm:text-xl font-bold">{item.titulo}</h3>
//                   <item.icone className={`w-8 h-8 ${dark ? "text-[#FDF6EC]/80" : "text-[#1D3C34]/80"}`} />
//                 </div>
//                 <p className={`text-sm sm:text-base flex-grow ${dark ? "text-[#FDF6EC]/90" : "text-[#1D3C34]/80"}`}>{item.descricao}</p>
//                 <div className="flex items-center justify-between mt-6">
//                   {item.destaque && (
//                     <span className={`px-2 py-1 rounded-full text-xs font-medium ${
//                       dark ? "bg-[#FDF6EC]/20 text-[#FDF6EC]" : "bg-[#E07A5F]/20 text-[#E07A5F]"
//                     }`}>
//                       Destaque
//                     </span>
//                   )}
//                   <button
//                     onClick={() => setModuloAberto(item.titulo)}
//                     className={`ml-auto px-4 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E07A5F] ${
//                       dark
//                         ? "bg-transparent border border-[#FDF6EC] text-[#FDF6EC] hover:bg-[#FDF6EC] hover:text-[#1D3C34]"
//                         : "bg-transparent border border-[#1D3C34] text-[#1D3C34] hover:bg-[#1D3C34] hover:text-[#FDF6EC]"
//                     }`}
//                   >
//                     Ver mais
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Modal */}
//       {moduloAberto && (
//         <ModuloAulas
//           isOpen={true}
//           titulo={moduloAberto}
//           aulas={aulas[moduloAberto] || []}
//           dark={dark}
//           onClose={() => setModuloAberto(null)}
//           onSelectAula={(aula) => console.log("Abrir aula:", aula)}
//         />
//       )}
//     </div>
//   );
// }



"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  BookOpen,
  Briefcase,
  Code,
  Lightbulb,
  Layers,
  Sun,
  Moon,
  X,
  Globe,
  Camera,
  Database,
  Layout,
  BarChart,
  Sparkles,
  ArrowLeft,
  ArrowRight,
} from "lucide-react"
import { useNavigate } from "react-router-dom" // Adicionado para navegação

// ===============================
// Componente ModuloAulas (atualizado: clica na aula redireciona para rota dinâmica)
// ===============================
function ModuloAulas({ isOpen, onClose, titulo, aulas = [], dark = false }) {
  const navigate = useNavigate()
  const [paginaAtual, setPaginaAtual] = useState(1)
  const aulasPorPagina = 5

  if (!isOpen) return null

  const indexUltimaAula = paginaAtual * aulasPorPagina
  const indexPrimeiraAula = indexUltimaAula - aulasPorPagina
  const aulasPagina = aulas.slice(indexPrimeiraAula, indexUltimaAula)
  const totalPaginas = Math.ceil(aulas.length / aulasPorPagina)

  const handleAulaClick = (idx) => {
    // Redireciona para rota dinâmica: /conteudos/modulo/aulaId (idx como ID)
    navigate(`/conteudos/${encodeURIComponent(titulo)}/${idx}`)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1D3C34]/60 dark:bg-[#FDF6EC]/60 backdrop-blur-sm px-4">
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`relative w-full max-w-3xl rounded-2xl p-8 shadow-2xl border ${
          dark ? "bg-[#1D3C34] border-[#e3dacd]/30" : "bg-[#FDF6EC] border-[#E07A5F]/30"
        } backdrop-blur-lg overflow-hidden`}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <motion.div
              initial={{ rotate: 0 }}
              whileHover={{ rotate: 10 }}
              className={`p-2 rounded-full ${dark ? "bg-[#e3dacd]/10" : "bg-[#E07A5F]/10"}`}
            >
              <BookOpen className={`w-5 h-5 ${dark ? "text-[#e3dacd]" : "text-[#E07A5F]"}`} />
            </motion.div>
            <h2 className={`text-2xl font-bold ${dark ? "text-[#e3dacd]" : "text-[#E07A5F]"}`}>{titulo}</h2>
          </div>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className={`p-2 rounded-full hover:bg-[#E07A5F]/20 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E07A5F]`}
            aria-label="Fechar modal"
          >
            <X className={`w-6 h-6 ${dark ? "text-[#e3dacd]" : "text-[#E07A5F]"}`} />
          </motion.button>
        </div>

        {/* Lista de aulas: Clique redireciona */}
        <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-[#E07A5F]/50 dark:scrollbar-thumb-[#FDF6EC]/50 scrollbar-track-[#FDF6EC]/10 dark:scrollbar-track-[#1D3C34]/10 pb-4">
          {aulasPagina.map((aula, idx) => (
            <motion.button
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ scale: 1.02, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleAulaClick(idx)}
              className={`w-full text-left rounded-xl p-5 border shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#E07A5F] ${
                dark
                  ? "bg-[#e3dacd]/10 border-[#e3dacd]/20 hover:border-[#e3dacd]/40"
                  : "bg-[#E07A5F]/10 border-[#1D3C34]/20 hover:border-[#1D3C34]/40"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${dark ? "bg-[#e3dacd]/10" : "bg-[#1D3C34]/10"}`}
                >
                  <Lightbulb className={`w-5 h-5 ${dark ? "text-[#e3dacd]" : "text-[#1D3C34]"}`} />
                </div>
                <div>
                  <h3 className={`text-lg font-semibold ${dark ? "text-[#e3dacd]" : "text-[#1D3C34]"}`}>{aula}</h3>
                  <p className={`text-sm mt-1 ${dark ? "text-[#e3dacd]/70" : "text-[#1D3C34]/70"}`}>
                    Aprenda conceitos essenciais de forma prática e interativa.
                  </p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Paginação */}
        {totalPaginas > 1 && (
          <div className="mt-8 flex items-center justify-between gap-6 border-t border-[#E07A5F]/30 dark:border-[#FDF6EC]/30 pt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setPaginaAtual((prev) => Math.max(prev - 1, 1))}
              disabled={paginaAtual === 1}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#E07A5F] shadow-sm ${
                dark
                  ? "bg-[#e3dacd]/10 text-[#e3dacd] hover:bg-[#e3dacd]/20"
                  : "bg-[#1D3C34]/10 text-[#1D3C34] hover:bg-[#1D3C34]/20"
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              Anterior
            </motion.button>
            <span className={`text-base font-medium ${dark ? "text-[#e3dacd]/80" : "text-[#1D3C34]/80"}`}>
              Página {paginaAtual} de {totalPaginas}
            </span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setPaginaAtual((prev) => Math.min(prev + 1, totalPaginas))}
              disabled={paginaAtual === totalPaginas}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#E07A5F] shadow-sm ${
                dark
                  ? "bg-[#e3dacd]/10 text-[#e3dacd] hover:bg-[#e3dacd]/20"
                  : "bg-[#1D3C34]/10 text-[#1D3C34] hover:bg-[#1D3C34]/20"
              }`}
            >
              Próxima
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        )}
      </motion.div>
    </div>
  )
}

// ===============================
// Componente Principal (com ajustes: botões de categoria não selecionados em verde no modo claro, ícones dos cards em verde no modo claro, texto abaixo do título em verde no modo claro)
// ===============================
export default function AreaDeConteudos() {
  const [dark, setDark] = useState(false)
  const [categoria, setCategoria] = useState("programacao")
  const [moduloAberto, setModuloAberto] = useState(null)

  const COLORS = {
    cream: "#FDF6EC",
    green: "#1D3C34",
    terracotta: "#E07A5F",
    grid: "#F4E7D8",
    creamDark: "#e3dacd",
  }

  const categorias = [
    { id: "programacao", nome: "Programação", icone: Code },
    { id: "frontend", nome: "Front End", icone: Layout },
    { id: "backend", nome: "Back End", icone: Database },
    { id: "mercado", nome: "Mercado", icone: BarChart },
    { id: "dicas", nome: "Dicas", icone: Lightbulb },
    { id: "marketing", nome: "Marketing", icone: BookOpen },
    { id: "fotografia", nome: "Fotografia", icone: Camera },
    { id: "variados", nome: "Variados", icone: Sparkles },
  ]

  const conteudos = {
    programacao: [
      {
        titulo: "HTML e CSS",
        descricao: "Construa layouts modernos e responsivos com as bases da web.",
        destaque: true,
        icone: Code,
        bg: "bg-[#FDF6EC]/90",
      },
      {
        titulo: "JavaScript",
        descricao: "Domine interatividade e lógica na programação web.",
        icone: Code,
        bg: "bg-[#FDF6EC]/90",
      },
      {
        titulo: "Python",
        descricao: "Automatize tarefas e resolva problemas complexos.",
        icone: Code,
        bg: "bg-[#FDF6EC]/90",
      },
    ],
    frontend: [
      {
        titulo: "React Basics",
        descricao: "Crie interfaces dinâmicas com componentes reutilizáveis.",
        destaque: true,
        icone: Layout,
        bg: "bg-[#FDF6EC]/90",
      },
      {
        titulo: "Tailwind CSS",
        descricao: "Estilize rapidamente com classes utilitárias.",
        icone: Layout,
        bg: "bg-[#FDF6EC]/90",
      },
    ],
    backend: [
      {
        titulo: "Node.js",
        descricao: "Construa servidores escaláveis com JavaScript.",
        icone: Database,
        bg: "bg-[#FDF6EC]/90",
      },
      {
        titulo: "SQL Databases",
        descricao: "Gerencie dados com consultas eficientes.",
        icone: Database,
        bg: "bg-[#FDF6EC]/90",
      },
    ],
    mercado: [
      {
        titulo: "Tendências Tech",
        descricao: "Entenda o mercado de tecnologia atual.",
        destaque: true,
        icone: BarChart,
        bg: "bg-[#FDF6EC]/90",
      },
      {
        titulo: "Carreiras",
        descricao: "Dicas para avançar na sua trajetória profissional.",
        icone: BarChart,
        bg: "bg-[#FDF6EC]/90",
      },
    ],
    dicas: [
      {
        titulo: "Produtividade",
        descricao: "Organize seu dia para maximizar resultados.",
        destaque: true,
        icone: Lightbulb,
        bg: "bg-[#FDF6EC]/90",
      },
      {
        titulo: "Rotina de Estudos",
        descricao: "Estruture horários para aprendizado efetivo.",
        icone: Lightbulb,
        bg: "bg-[#FDF6EC]/90",
      },
    ],
    marketing: [
      {
        titulo: "Marketing Digital",
        descricao: "Estratégias para crescer online.",
        destaque: true,
        icone: BookOpen,
        bg: "bg-[#FDF6EC]/90",
      },
      {
        titulo: "Redes Sociais",
        descricao: "Engaje audiências e construa comunidades.",
        icone: BookOpen,
        bg: "bg-[#FDF6EC]/90",
      },
    ],
    fotografia: [
      {
        titulo: "Composição Básica",
        descricao: "Aprenda regras para fotos impactantes.",
        icone: Camera,
        bg: "bg-[#FDF6EC]/90",
      },
      {
        titulo: "Edição de Imagens",
        descricao: "Melhore suas fotos com ferramentas simples.",
        icone: Camera,
        bg: "bg-[#FDF6EC]/90",
      },
    ],
    variados: [
      {
        titulo: "IA no Dia a Dia",
        descricao: "Integre inteligência artificial em tarefas cotidianas.",
        icone: Sparkles,
        bg: "bg-[#FDF6EC]/90",
      },
      {
        titulo: "Desenvolvimento Pessoal",
        descricao: "Dicas para crescimento contínuo.",
        destaque: true,
        icone: Sparkles,
        bg: "bg-[#FDF6EC]/90",
      },
    ],
  }

  const aulas = {
    "HTML e CSS": [
      "Introdução ao HTML",
      "Tags básicas",
      "Formulários e inputs",
      "Introdução ao CSS",
      "Flexbox e Grid",
      "Layouts responsivos",
    ],
    JavaScript: ["Variáveis e tipos", "Funções", "Manipulação do DOM", "Eventos", "Promises e Async/Await"],
    Python: ["Introdução ao Python", "Controle de fluxo", "Manipulação de arquivos", "Bibliotecas úteis"],
    "React JS": ["Fundamentos do React", "Estado e Props", "Hooks", "Roteamento"],
    "Tailwind CSS": ["Instalação", "Classes Utilitárias", "Responsividade", "Customização"],
    "Node.js": ["Setup", "Express Framework", "APIs", "Autenticação"],
    "SQL Databases": ["Comandos Básicos", "Joins", "Índices", "Transações"],
    "Tendências Tech": ["IA e ML", "Web3", "Cloud Computing", "Sustentabilidade Tech"],
    Carreiras: ["Currículo Eficaz", "Entrevistas Técnicas", "Networking", "Freelance"],
    Produtividade: ["Técnica Pomodoro", "Matriz Eisenhower", "Rotina Matinal", "Ferramentas"],
    "Rotina de Estudos": ["Cronograma", "Revisão Ativa", "Descanso", "Motivação"],
    "Marketing Digital": ["Funil de Vendas", "Conteúdo", "SEO", "Ads"],
    "Redes Sociais": ["Autoridade", "Calendário", "Métricas", "Engajamento"],
    "Composição Básica": ["Regra dos Terços", "Linhas Guias", "Equilíbrio", "Perspectiva"],
    "Edição de Imagens": ["Ferramentas Básicas", "Cor e Exposição", "Retoque", "Exportação"],
    "IA no Dia a Dia": ["Assistentes Virtuais", "Automação", "Ética", "Ferramentas Gratuitas"],
    "Desenvolvimento Pessoal": ["Hábitos", "Leitura", "Feedback", "Metas"],
  }

  // Ícones de background com opacidade ajustada
  const backgroundIcons = [
    { Icon: Code, size: 120, top: "10%", left: "5%", rotate: 15 },
    { Icon: BookOpen, size: 160, top: "20%", left: "80%", rotate: -10 },
    { Icon: Briefcase, size: 100, top: "35%", left: "15%", rotate: 20 },
    { Icon: Lightbulb, size: 140, top: "50%", left: "70%", rotate: -15 },
    { Icon: Layers, size: 180, top: "65%", left: "10%", rotate: 10 },
    { Icon: Globe, size: 90, top: "75%", left: "85%", rotate: -20 },
    { Icon: Camera, size: 130, top: "85%", left: "25%", rotate: 15 },
    { Icon: Database, size: 110, top: "15%", left: "50%", rotate: -5 },
    { Icon: Layout, size: 150, top: "40%", left: "90%", rotate: 10 },
    { Icon: BarChart, size: 170, top: "60%", left: "40%", rotate: -10 },
    { Icon: Sparkles, size: 80, top: "80%", left: "60%", rotate: 20 },
  ]

  return (
    <div
      className={`relative min-h-screen overflow-hidden transition-colors duration-300 ${dark ? "bg-[#1D3C34] text-[#e3dacd]" : "bg-[#FDF6EC] text-[#1D3C34]"}`}
    >
      {/* Fundo quadriculado opaco */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, ${COLORS.grid} 1px, transparent 1px), linear-gradient(to bottom, ${COLORS.grid} 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          opacity: dark ? 0.05 : 0.3,
        }}
      />

      {/* Ícones espalhados no background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {backgroundIcons.map(({ Icon, size, top, left, rotate }, i) => (
          <Icon
            key={i}
            className={`absolute ${dark ? "text-[#e3dacd]/10" : "text-[#E07A5F]/30"}`}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top,
              left,
              transform: `rotate(${rotate}deg)`,
            }}
          />
        ))}
      </div>

      {/* Botão modo dark: com verde no modo claro */}
      <button
        onClick={() => setDark(!dark)}
        className={`fixed top-4 right-4 z-40 p-2 rounded-full shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E07A5F] ${
          dark ? "bg-[#E07A5F]/80 hover:bg-[#E07A5F]" : "bg-[#1D3C34]/80 hover:bg-[#1D3C34]"
        }`}
        aria-label="Alternar modo dark"
      >
        {dark ? <Sun className="w-5 h-5 text-[#e3dacd]" /> : <Moon className="w-5 h-5 text-[#FDF6EC]" />}
      </button>

      {/* Conteúdo principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${dark ? "text-[#e3dacd]" : "text-[#E07A5F]"}`}
          >
            Área de Conteúdos
          </h1>
          <p
            className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto ${dark ? "text-[#e3dacd]/80" : "text-[#1D3C34]"}`}
          >
            Explore conteúdos práticos e acessíveis sobre programação, marketing, dicas e mais. Tudo explicado de forma
            simples, visual e direta para impulsionar seu aprendizado e carreira.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categorias.map((cat) => {
            const Icon = cat.icone
            const ativo = categoria === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setCategoria(cat.id)}
                className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E07A5F] ${
                  ativo
                    ? "bg-[#E07A5F] text-[#FDF6EC]"
                    : dark
                      ? "bg-transparent border border-[#e3dacd]/50 text-[#e3dacd] hover:bg-[#e3dacd]/10"
                      : "bg-[#1D3C34]/15 border border-[#1D3C34]/30 text-[#1D3C34] hover:bg-[#1D3C34]/25"
                }`}
              >
                <Icon
                  className={`w-4 h-4 sm:w-5 sm:h-5 ${ativo ? "text-[#FDF6EC]" : dark ? "text-[#e3dacd]" : "text-[#1D3C34]"}`}
                />
                {cat.nome}
              </button>
            )
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {conteudos[categoria]?.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`rounded-2xl shadow-lg border p-6 flex flex-col justify-between h-[220px] sm:h-[240px] transition-colors ${
                dark
                  ? "bg-[#1D3C34]/90 border-[#e3dacd]/30 text-[#e3dacd]"
                  : `${item.bg} border-[#1D3C34]/30 text-[#1D3C34]`
              }`}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <h3 className={`text-lg sm:text-xl font-bold ${dark ? "text-[#e3dacd]" : "text-[#1D3C34]"}`}>
                    {item.titulo}
                  </h3>
                  <item.icone className={`w-8 h-8 ${dark ? "text-[#e3dacd]/80" : "text-[#1D3C34]"}`} />
                </div>
                <p className={`text-sm sm:text-base flex-grow ${dark ? "text-[#e3dacd]/90" : "text-[#1D3C34]/80"}`}>
                  {item.descricao}
                </p>
                <div className="flex items-center justify-between mt-6">
                  {item.destaque && (
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${dark ? "bg-[#e3dacd]/20 text-[#e3dacd]" : "bg-[#1D3C34]/20 text-[#1D3C34]"}`}
                    >
                      Destaque
                    </span>
                  )}
                  <button
                    onClick={() => setModuloAberto(item.titulo)}
                    className={`ml-auto px-4 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E07A5F] ${
                      dark
                        ? "bg-transparent border border-[#e3dacd] text-[#e3dacd] hover:bg-[#e3dacd] hover:text-[#1D3C34]"
                        : "bg-transparent border border-[#1D3C34] text-[#1D3C34] hover:bg-[#1D3C34] hover:text-[#FDF6EC]"
                    }`}
                  >
                    Ver mais
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {moduloAberto && (
        <ModuloAulas
          isOpen={true}
          titulo={moduloAberto}
          aulas={aulas[moduloAberto] || []}
          dark={dark}
          onClose={() => setModuloAberto(null)}
          onSelectAula={(aula) => console.log("Abrir aula:", aula)}
        />
      )}
    </div>
  )
}
