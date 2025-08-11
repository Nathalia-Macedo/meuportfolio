// // import React from "react";
// // import { motion } from "framer-motion";
// // import { CheckCircle, Users, Lightbulb, Palette, Layout, Type, Monitor, PenTool } from "lucide-react";

// // export default function LandingPage() {
// //   // Paleta: bege (#F5F1EB) predominante, laranja (#E07A5F) e verde (#2D5A4A) como detalhes
// //   const colors = {
// //     bg: "bg-gradient-to-b from-[#F5F1EB] via-[#F5F1EB] to-[#E5E1D9]", // Bege predominante
// //     card: "bg-[#F5F1EB]/80", // Bege com leve transparência para cards
// //     accent: "bg-gradient-to-r from-[#E07A5F] to-[#2D5A4A]", // Laranja para verde em detalhes
// //     btn: "bg-gradient-to-r from-[#E07A5F] to-[#E07A5F]/80 hover:from-[#E07A5F]/90 hover:to-[#E07A5F]/70", // Botão laranja
// //     text: "text-[#13231C]", // Texto escuro para contraste com bege
// //     textSecondary: "text-[#13231C]/70", // Texto secundário
// //     border: "border-[#2D5A4A]/20", // Borda com verde sutil
// //   };

// //   // Textura de fundo sutil (inspirada no SupermoduloCreativeCode)
// //   const gridStyle = {
// //     backgroundImage: `repeating-linear-gradient(0deg, rgba(19,35,28,0.03), rgba(19,35,28,0.03) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, rgba(19,35,28,0.03), rgba(19,35,28,0.03) 1px, transparent 1px, transparent 40px)`,
// //   };

// //   // Animação para formas flutuantes
// //   const float = {
// //     animate: { y: [0, -8, 0], transition: { duration: 4, repeat: Infinity, ease: "easeInOut" } },
// //   };

// //   // Animação para cards
// //   const container = {
// //     hidden: { opacity: 0, y: 20 },
// //     show: { opacity: 1, y: 0, transition: { staggerChildren: 0.06 } },
// //   };

// //   const card = {
// //     hidden: { opacity: 0, y: 24, scale: 0.98 },
// //     show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
// //     hover: { scale: 1.03, transition: { duration: 0.25 } },
// //   };

// //   return (
// //     <div className={`min-h-screen ${colors.text} ${colors.bg} py-12 px-6 md:px-12 relative overflow-hidden`} style={gridStyle}>
// //       {/* Formas flutuantes decorativas */}
// //       <motion.div className="absolute inset-0 pointer-events-none z-0" {...float} animate="animate">
// //         <svg className="absolute -right-16 -top-16 w-72 h-72 opacity-20" viewBox="0 0 200 200" fill="none">
// //           <circle cx="80" cy="80" r="80" fill="url(#g1)" />
// //           <defs>
// //             <linearGradient id="g1" x1="0" x2="1">
// //               <stop offset="0%" stopColor="#E07A5F" stopOpacity="0.18" />
// //               <stop offset="100%" stopColor="#2D5A4A" stopOpacity="0.06" />
// //             </linearGradient>
// //           </defs>
// //         </svg>
// //         <svg className="absolute -left-28 bottom-8 w-64 h-64 opacity-14" viewBox="0 0 200 200" fill="none">
// //           <circle cx="100" cy="100" r="80" fill="#2D5A4A" opacity="0.08" />
// //         </svg>
// //       </motion.div>

// //       <div className="max-w-6xl mx-auto relative z-10">
// //         {/* Header */}
// //         <header className="flex items-center justify-between mb-12">
// //           <div className="flex items-center gap-4">
// //             <motion.div
// //               className="w-14 h-14 rounded-2xl shadow-lg flex items-center justify-center"
// //               style={{ background: "linear-gradient(135deg, #E07A5F, #2D5A4A)" }}
// //               whileHover={{ scale: 1.05 }}
// //             >
// //               <span className="font-bold text-white text-lg">AS</span>
// //             </motion.div>
// //             <div>
// //               <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Aula: Landing Pages</h1>
// //               <p className={`text-base ${colors.textSecondary}`}>Simples, moderno e focado em conversão</p>
// //             </div>
// //           </div>
// //           <nav className={`text-base ${colors.textSecondary} hidden md:flex gap-8`}>
// //             <a href="#parte1" className="hover:underline font-medium">Parte 1</a>
// //             <a href="#parte2" className="hover:underline font-medium">Parte 2</a>
// //             <a href="#parte3" className="hover:underline font-medium">Parte 3</a>
// //             <a href="#parte4" className="hover:underline font-medium">Parte 4</a>
// //             <a href="#resumo" className="hover:underline font-medium">Resumo</a>
// //           </nav>
// //         </header>

// //         {/* Parte 1 - O que é uma Landing Page */}
// //         <motion.section
// //           id="parte1"
// //           initial="hidden"
// //           animate="show"
// //           variants={container}
// //           className={`rounded-2xl p-6 md:p-10 mb-12 shadow-xl ${colors.card}`}
// //           style={{ backdropFilter: "blur(6px)" }}
// //         >
// //           <div className="md:flex md:gap-8 items-center">
// //             <div className="md:flex-1">
// //               <div className="flex items-center gap-3 mb-4">
// //                 <Lightbulb className="w-8 h-8 text-[#E07A5F]" />
// //                 <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
// //                   O que é uma Landing Page?
// //                 </h2>
// //               </div>
// //               <motion.div variants={card}>
// //                 <p className={`${colors.textSecondary} text-lg leading-relaxed mb-6`}>
// //                   Uma landing page é uma página na internet criada com um único propósito: convencer o visitante a realizar uma ação específica. Diferente de um site que pode ter várias funções, a landing page é focada e direta.
// //                 </p>
// //               </motion.div>

// //               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //                 <motion.div variants={card} className={`p-4 rounded-lg ${colors.card} ${colors.border}`}>
// //                   <div className="flex items-center gap-2 mb-2">
// //                     <CheckCircle className="w-5 h-5 text-[#2D5A4A]" />
// //                     <h4 className="font-semibold text-lg">Objetivo único</h4>
// //                   </div>
// //                   <p className={`${colors.textSecondary} text-base`}>Fazer o visitante clicar, comprar, preencher um formulário ou se inscrever.</p>
// //                 </motion.div>
// //                 <motion.div variants={card} className={`p-4 rounded-lg ${colors.card} ${colors.border}`}>
// //                   <div className="flex items-center gap-2 mb-2">
// //                     <CheckCircle className="w-5 h-5 text-[#2D5A4A]" />
// //                     <h4 className="font-semibold text-lg">Simplicidade</h4>
// //                   </div>
// //                   <p className={`${colors.textSecondary} text-base`}>Poucas distrações, conteúdo claro e visual limpo.</p>
// //                 </motion.div>
// //                 <motion.div variants={card} className={`p-4 rounded-lg ${colors.card} ${colors.border}`}>
// //                   <div className="flex items-center gap-2 mb-2">
// //                     <CheckCircle className="w-5 h-5 text-[#2D5A4A]" />
// //                     <h4 className="font-semibold text-lg">Foco na conversão</h4>
// //                   </div>
// //                   <p className={`${colors.textSecondary} text-base`}>Tudo guia o visitante até a ação desejada.</p>
// //                 </motion.div>
// //               </div>

// //               <motion.div variants={card}>
// //                 <p className={`mt-6 ${colors.textSecondary} text-lg`}>
// //                   Exemplo prático: página de um curso de fotografia com título claro, benefícios rápidos e um botão grande “Quero me inscrever!”.
// //                 </p>
// //               </motion.div>
// //             </div>

// //             <motion.div
// //               variants={card}
// //               whileHover={{ scale: 1.02 }}
// //               className={`mt-8 md:mt-0 md:w-80 p-6 rounded-2xl ${colors.card} ${colors.border}`}
// //             >
// //               <div className="w-full h-48 rounded-xl overflow-hidden relative">
// //                 <div className="absolute inset-0 flex items-center justify-center">
// //                   <div className="w-56 h-32 rounded-lg" style={{ background: "linear-gradient(90deg, #E07A5F, #2D5A4A)" }}></div>
// //                 </div>
// //               </div>
// //               <div className="mt-6">
// //                 <button className={`w-full py-3 px-6 rounded-md text-white font-semibold ${colors.btn}`}>
// //                   Quero me inscrever!
// //                 </button>
// //               </div>
// //             </motion.div>
// //           </div>
// //         </motion.section>

// //         {/* Parte 2 - Princípios Básicos de Design */}
// //         <motion.section
// //           id="parte2"
// //           initial="hidden"
// //           animate="show"
// //           variants={container}
// //           className={`rounded-2xl p-6 md:p-10 mb-12 shadow-xl ${colors.card}`}
// //           style={{ backdropFilter: "blur(6px)" }}
// //         >
// //           <div className="flex items-center gap-3 mb-6">
// //             <Palette className="w-8 h-8 text-[#E07A5F]" />
// //             <h3 className="text-3xl md:text-4xl font-bold">Princípios Básicos de Design</h3>
// //           </div>
// //           <motion.div variants={card}>
// //             <p className={`${colors.textSecondary} text-lg mb-8`}>Compreenda os fundamentos que tornam uma landing page visualmente atraente, organizada e confiável.</p>
// //           </motion.div>

// //           <div className="grid md:grid-cols-2 gap-6">
// //             {/* Hierarquia Visual */}
// //             <motion.article variants={card} whileHover="hover" className={`p-6 rounded-lg ${colors.card} ${colors.border}`}>
// //               <div className="flex items-center gap-2 mb-3">
// //                 <Layout className="w-6 h-6 text-[#2D5A4A]" />
// //                 <h4 className="text-xl font-semibold">1. Hierarquia Visual</h4>
// //               </div>
// //               <p className={`${colors.textSecondary} text-base mb-2`}><strong>O que é:</strong> Organiza elementos para guiar o olhar do visitante. O mais importante deve ser mais chamativo.</p>
// //               <ul className={`list-disc pl-5 ${colors.textSecondary} text-base mb-2`}>
// //                 <li><strong>Tamanho:</strong> Títulos e botões de CTA maiores (ex.: “Aprenda Inglês Hoje!”).</li>
// //                 <li><strong>Posição:</strong> Elementos importantes no topo ou centro.</li>
// //                 <li><strong>Contraste:</strong> Cores ou estilos (ex.: botão laranja em fundo claro).</li>
// //               </ul>
// //               <p className={`${colors.textSecondary} text-base`}><strong>Exemplo:</strong> Na landing page do Netflix, o botão “Assine agora” é grande, vermelho e centralizado.</p>
// //               <p className={`${colors.textSecondary} text-base mt-3`}><em>💡 Parte prática:</em> Mostre a landing page do Airbnb e aponte o título grande, botão destacado e textos menores. Pergunte: “O que você viu primeiro? Por quê?”</p>
// //             </motion.article>

// //             {/* Espaçamento */}
// //             <motion.article variants={card} whileHover="hover" className={`p-6 rounded-lg ${colors.card} ${colors.border}`}>
// //               <div className="flex items-center gap-2 mb-3">
// //                 <Layout className="w-6 h-6 text-[#2D5A4A]" />
// //                 <h4 className="text-xl font-semibold">2. Espaçamento</h4>
// //               </div>
// //               <p className={`${colors.textSecondary} text-base mb-2`}><strong>O que é:</strong> Uso de espaço em branco para organizar a página e evitar poluição visual.</p>
// //               <ul className={`list-disc pl-5 ${colors.textSecondary} text-base mb-2`}>
// //                 <li><strong>Margens e padding:</strong> Espaço ao redor de textos e botões.</li>
// //                 <li><strong>Agrupamento:</strong> Elementos relacionados mais próximos, seções separadas.</li>
// //                 <li><strong>Equilíbrio:</strong> Evite encher a página para manter clareza.</li>
// //               </ul>
// //               <p className={`${colors.textSecondary} text-base`}><strong>Exemplo:</strong> Na landing page do Dropbox, o espaço em branco entre título e botão facilita a leitura.</p>
// //               <p className={`${colors.textSecondary} text-base mt-3`}><em>💡 Parte prática:</em> Mostre a landing page do Dropbox e compare com uma página fictícia sobrecarregada. Destaque como o espaço facilita a leitura.</p>
// //             </motion.article>

// //             {/* Cores */}
// //             <motion.article variants={card} whileHover="hover" className={`p-6 rounded-lg ${colors.card} ${colors.border}`}>
// //               <div className="flex items-center gap-2 mb-3">
// //                 <Palette className="w-6 h-6 text-[#2D5A4A]" />
// //                 <h4 className="text-xl font-semibold">3. Cores</h4>
// //               </div>
// //               <p className={`${colors.textSecondary} text-base mb-2`}><strong>O que é:</strong> Cores criam emoção, destacam elementos e garantem legibilidade.</p>
// //               <ul className={`list-disc pl-5 ${colors.textSecondary} text-base mb-2`}>
// //                 <li><strong>Cor principal:</strong> Use uma cor forte (ex.: laranja #E07A5F) para botões e títulos.</li>
// //                 <li><strong>Cores de apoio:</strong> 1-2 cores complementares (ex.: verde #2D5A4A) para ícones.</li>
// //                 <li><strong>Contraste:</strong> Texto legível contra o fundo (ex.: #13231C em #F5F1EB).</li>
// //               </ul>
// //               <p className={`${colors.textSecondary} text-base`}><strong>Exemplo:</strong> No Duolingo, o verde é usado para botões, com fundo neutro para contraste.</p>
// //               <p className={`${colors.textSecondary} text-base mt-3`}><em>💡 Parte prática:</em> Mostre a paleta do Duolingo e um exemplo ruim (texto claro em fundo claro). Pergunte: “Conseguem ler isso facilmente?”</p>
// //             </motion.article>

// //             {/* Tipografia */}
// //             <motion.article variants={card} whileHover="hover" className={`p-6 rounded-lg ${colors.card} ${colors.border}`}>
// //               <div className="flex items-center gap-2 mb-3">
// //                 <Type className="w-6 h-6 text-[#2D5A4A]" />
// //                 <h4 className="text-xl font-semibold">4. Tipografia</h4>
// //               </div>
// //               <p className={`${colors.textSecondary} text-base mb-2`}><strong>O que é:</strong> Escolha de fontes para clareza e hierarquia.</p>
// //               <ul className={`list-disc pl-5 ${colors.textSecondary} text-base mb-2`}>
// //                 <li><strong>No máximo 2 fontes:</strong> Ex.: Montserrat para títulos, Open Sans para textos.</li>
// //                 <li><strong>Pesos diferentes:</strong> Negrito para títulos, regular para parágrafos.</li>
// //                 <li><strong>Tamanho/espaçamento:</strong> Títulos grandes, textos com linha alta.</li>
// //               </ul>
// //               <p className={`${colors.textSecondary} text-base`}><strong>Exemplo:</strong> No Spotify, títulos são bold e grandes, parágrafos menores e regulares.</p>
// //               <p className={`${colors.textSecondary} text-base mt-3`}><em>💡 Parte prática:</em> Mostre a tipografia do Spotify e um exemplo com 3+ fontes misturadas. Pergunte: “Isso parece organizado?”</p>
// //             </motion.article>

// //             {/* Exercício Rápido */}
// //             <motion.article variants={card} whileHover="hover" className={`p-6 rounded-lg ${colors.card} ${colors.border} md:col-span-2`}>
// //               <div className="flex items-center gap-2 mb-3">
// //                 <CheckCircle className="w-6 h-6 text-[#2D5A4A]" />
// //                 <h4 className="text-xl font-semibold">Exercício Rápido</h4>
// //               </div>
// //               <p className={`${colors.textSecondary} text-base mb-2`}><strong>Atividade:</strong> Mostre duas landing pages:</p>
// //               <ul className={`list-disc pl-5 ${colors.textSecondary} text-base mb-2`}>
// //                 <li><strong>Página poluída:</strong> Texto amontoado, várias cores, fontes diferentes, sem espaço.</li>
// //                 <li><strong>Página organizada:</strong> Hierarquia clara, espaçamento adequado, cores simples (ex.: Dropbox ou Airbnb).</li>
// //               </ul>
// //               <p className={`${colors.textSecondary} text-base mb-2`}><strong>Pergunta:</strong> “Qual parece mais confiável? Por quê?”</p>
// //               <p className={`${colors.textSecondary} text-base`}><em>💡 Parte prática:</em> Peça aos alunos para apontarem o que torna a página organizada mais atraente (ex.: espaçamento, cores, texto).</p>
// //             </motion.article>
// //           </div>
// //         </motion.section>

// //         {/* Parte 3 - Conhecendo o Figma */}
// //         <motion.section
// //           id="parte3"
// //           initial="hidden"
// //           animate="show"
// //           variants={container}
// //           className={`rounded-2xl p-6 md:p-10 mb-12 shadow-xl ${colors.card}`}
// //           style={{ backdropFilter: "blur(6px)" }}
// //         >
// //           <div className="flex items-center gap-3 mb-6">
// //             <Monitor className="w-8 h-8 text-[#E07A5F]" />
// //             <h3 className="text-3xl md:text-4xl font-bold">Conhecendo o Figma</h3>
// //           </div>
// //           <motion.div variants={card}>
// //             <p className={`${colors.textSecondary} text-lg mb-8`}>Apresentar o Figma como ferramenta gratuita para design de interfaces, ensinar os básicos de navegação e uso de ferramentas simples, e aplicar os conceitos das Partes 1 e 2 em uma atividade prática.</p>
// //           </motion.div>

// //           <div className="grid md:grid-cols-2 gap-8">
// //             {/* O que é o Figma */}
// //             <motion.article variants={card} whileHover="hover" className={`p-6 rounded-lg ${colors.card} ${colors.border}`}>
// //               <div className="flex items-center gap-2 mb-3">
// //                 <Lightbulb className="w-6 h-6 text-[#2D5A4A]" />
// //                 <h4 className="text-xl font-semibold">1. O que é o Figma?</h4>
// //               </div>
// //               <p className={`${colors.textSecondary} text-base mb-2`}><strong>O que é:</strong> O Figma é uma ferramenta online gratuita para criar designs de interfaces, como landing pages, apps e sites. Ele permite trabalhar em tempo real, colaborar com outras pessoas e exportar designs para código. É acessível pelo navegador (sem precisar instalar nada) e tem versão gratuita com recursos suficientes para iniciantes.</p>
// //               <p className={`${colors.textSecondary} text-base mb-2`}><strong>Por que usar:</strong></p>
// //               <ul className={`list-disc pl-5 ${colors.textSecondary} text-base mb-2`}>
// //                 <li>Fácil de aprender e usar.</li>
// //                 <li>Gratuito para contas básicas.</li>
// //                 <li>Integra conceitos de design (hierarquia, cores, espaçamento) diretamente na criação.</li>
// //               </ul>
// //               <p className={`${colors.textSecondary} text-base`}><strong>Exemplo:</strong> Designers usam o Figma para prototipar landing pages como a do Duolingo, onde definem cores, fontes e layouts antes de codificar.</p>
// //               <p className={`${colors.textSecondary} text-base mt-3`}><em>💡 Parte prática:</em> Abra o navegador e acesse figma.com. Mostre a página inicial e destaque como é simples começar.</p>
// //             </motion.article>

// //             {/* Criar uma Conta Gratuita */}
// //             <motion.article variants={card} whileHover="hover" className={`p-6 rounded-lg ${colors.card} ${colors.border}`}>
// //               <div className="flex items-center gap-2 mb-3">
// //                 <Users className="w-6 h-6 text-[#2D5A4A]" />
// //                 <h4 className="text-xl font-semibold">2. Criar uma Conta Gratuita</h4>
// //               </div>
// //               <p className={`${colors.textSecondary} text-base mb-2`}><strong>Passo a passo:</strong></p>
// //               <ul className={`list-decimal pl-5 ${colors.textSecondary} text-base mb-2`}>
// //                 <li>Abra o navegador e vá para figma.com.</li>
// //                 <li>Na página inicial, clique no botão "Sign up" (no canto superior direito).</li>
// //                 <li>Escolha "Continue with Google" (se tiver conta Google) ou preencha com e-mail, nome e senha.</li>
// //                 <li>Clique em "Create account".</li>
// //                 <li>Verifique o e-mail (se necessário) e confirme a conta.</li>
// //                 <li>Após login, você será direcionado para o dashboard do Figma, onde pode criar projetos.</li>
// //               </ul>
// //               <p className={`${colors.textSecondary} text-base mb-2`}><strong>Dicas:</strong></p>
// //               <ul className={`list-disc pl-5 ${colors.textSecondary} text-base mb-2`}>
// //                 <li>A conta gratuita permite ilimitados arquivos pessoais e colaboração básica.</li>
// //                 <li>Se já tiver conta, clique em "Log in" e entre.</li>
// //               </ul>
// //               <p className={`${colors.textSecondary} text-base mt-3`}><em>💡 Parte prática:</em> Peça aos alunos para criarem suas contas agora. Circule pela sala para ajudar quem tiver dúvidas. Mostre seu dashboard no projetor.</p>
// //             </motion.article>

// //             {/* Navegando pelo Figma */}
// //             <motion.article variants={card} whileHover="hover" className={`p-6 rounded-lg ${colors.card} ${colors.border} md:col-span-2`}>
// //               <div className="flex items-center gap-2 mb-3">
// //                 <Layout className="w-6 h-6 text-[#2D5A4A]" />
// //                 <h4 className="text-xl font-semibold">3. Navegando pelo Figma</h4>
// //               </div>
// //               <p className={`${colors.textSecondary} text-base mb-2`}><strong>Passo a passo básico:</strong></p>
// //               <div className="grid md:grid-cols-2 gap-4">
// //                 <motion.div variants={card}>
// //                   <ul className={`list-decimal pl-5 ${colors.textSecondary} text-base mb-2`}>
// //                     <li><strong>Criar um novo arquivo:</strong> No dashboard do Figma, clique em "New file" (botão azul no topo direito). Um novo arquivo em branco será aberto, com uma tela vazia chamada "Canvas".</li>
// //                     <li><strong>Criar um Frame (a “folha” do projeto):</strong> Na barra de ferramentas superior esquerda, clique no ícone "Frame" (ou pressione F no teclado). Clique e arraste no canvas para criar um retângulo (ex.: tamanho 1440x900 para uma página web desktop). Isso é o "Frame": representa a tela ou página da landing page.</li>
// //                     <li><strong>Usar o Grid para alinhar elementos:</strong> Clique no Frame criado para selecioná-lo. No painel direito (Design panel), vá para a seção "Layout grid". Clique no "+" para adicionar um grid. Configure como "Grid" (linhas), com colunas (ex.: 12 colunas, gutter 20px, margins 80px) para alinhar elementos. Ative o grid clicando no olho ao lado. Agora, linhas guias aparecem para ajudar no alinhamento.</li>
// //                   </ul>
// //                 </motion.div>
// //                 <motion.div variants={card}>
// //                   <p className={`${colors.textSecondary} text-base mb-2`}><strong>Ferramentas básicas:</strong></p>
// //                   <ul className={`list-disc pl-5 ${colors.textSecondary} text-base mb-2`}>
// //                     <li><strong>Retângulo:</strong> Clique no ícone "Rectangle" (ou pressione R). Clique e arraste no Frame para criar formas (ex.: fundo de seção). No painel direito, mude a cor clicando no quadrado de cor e selecionando uma (ex.: bege #F5F1EB).</li>
// //                     <li><strong>Texto:</strong> Clique no ícone "Text" (ou pressione T). Clique no Frame e digite. No painel direito, mude fonte (ex.: Montserrat), tamanho (ex.: 48px para títulos), peso (bold) e cor (ex.: #13231C).</li>
// //                     <li><strong>Alinhamento:</strong> Selecione elementos (segure Shift para múltiplos), vá para o painel direito - "Alignment" e clique em ícones para alinhar ao centro, topo, etc.</li>
// //                     <li><strong>Cores:</strong> Selecione um elemento, clique no quadrado de cor no painel direito. Use o picker para escolher (ex.: principal #E07A5F, apoio #2D5A4A). Para salvar paleta: Crie retângulos com cores, agrupe (Ctrl+G) e nomeie como "Paleta".</li>
// //                   </ul>
// //                 </motion.div>
// //               </div>
// //               <p className={`${colors.textSecondary} text-base mb-2`}><strong>Dicas práticas:</strong></p>
// //               <ul className={`list-disc pl-5 ${colors.textSecondary} text-base mb-2`}>
// //                 <li>Para desfazer: Ctrl+Z.</li>
// //                 <li>Zoom: Ctrl + roda do mouse.</li>
// //                 <li>Salvar paletas: Crie um Frame separado com amostras de cores e fontes. Clique direito - Copy properties para reutilizar.</li>
// //               </ul>
// //               <p className={`${colors.textSecondary} text-base mt-3`}><em>💡 Parte prática:</em> No projetor, crie um Frame, adicione grid, desenhe um retângulo colorido, adicione texto e alinhe. Peça aos alunos para replicarem em suas contas.</p>
// //             </motion.article>

// //             {/* Atividade Prática */}
// //             <motion.article variants={card} whileHover="hover" className={`p-6 rounded-lg ${colors.card} ${colors.border} md:col-span-2`}>
// //               <div className="flex items-center gap-2 mb-3">
// //                 <CheckCircle className="w-6 h-6 text-[#2D5A4A]" />
// //                 <h4 className="text-xl font-semibold">Atividade Prática: Criar Hero Section e Sessão de Benefícios</h4>
// //               </div>
// //               <p className={`${colors.textSecondary} text-base mb-2`}><strong>Instruções gerais:</strong> Usando conceitos das Partes 1 (elementos de landing page: Hero, Benefícios) e 2 (hierarquia visual, espaçamento, cores, tipografia), crie uma landing page fictícia para um "Curso de Fotografia Online". Foque em Hero e Benefícios. Use paleta: principal #E07A5F (laranja), apoio #2D5A4A (verde), neutro #F5F1EB (bege) e texto #13231C. Fontes: Montserrat (títulos, bold) e Open Sans (textos, regular).</p>
// //               <div className="grid md:grid-cols-2 gap-4">
// //                 <motion.div variants={card}>
// //                   <p className={`${colors.textSecondary} text-base mb-2`}><strong>Passo a passo: Hero Section</strong></p>
// //                   <ul className={`list-decimal pl-5 ${colors.textSecondary} text-base mb-2`}>
// //                     <li>Crie um Frame (clique Frame - arraste 1440x600px).</li>
// //                     <li>Adicione grid (Design panel - Layout grid - + - 12 colunas, gutter 20px).</li>
// //                     <li>Fundo: Crie retângulo (R) cobrindo o Frame, cor bege #F5F1EB.</li>
// //                     <li>Título: Texto (T), clique no Frame, digite “Aprenda Fotografia Profissional”. Fonte Montserrat, tamanho 48px, bold, cor #13231C. Alinhe ao centro (painel direito - Alignment - centro horizontal/vertical).</li>
// //                     <li>Subtítulo: Abaixo do título, texto “Capture momentos incríveis em 4 semanas”, tamanho 24px, regular, cor #13231C/70. Espaçamento: Mova manualmente ou use grid para 20px abaixo.</li>
// //                     <li>Botão CTA: Retângulo (R), tamanho 200x50px, cor laranja #E07A5F, bordas arredondadas (corner radius 8px no painel direito). Adicione texto “Inscreva-se Agora”, branco, centro. Grupo (Ctrl+G) e alinhe abaixo do subtítulo com espaçamento.</li>
// //                     <li>Imagem: Use retângulo como placeholder (cor verde #2D5A4A), tamanho 400x300px, posicione à direita do texto (use grid para alinhar).</li>
// //                   </ul>
// //                   <p className={`${colors.textSecondary} text-base mb-2`}>Aplique hierarquia: Título maior e bold, botão contrastante. Espaçamento: 40px entre título e subtítulo, 20px ao botão.</p>
// //                 </motion.div>
// //                 <motion.div variants={card}>
// //                   <p className={`${colors.textSecondary} text-base mb-2`}><strong>Passo a passo: Sessão de Benefícios</strong></p>
// //                   <ul className={`list-decimal pl-5 ${colors.textSecondary} text-base mb-2`}>
// //                     <li>Crie novo Frame abaixo do Hero (1440x400px).</li>
// //                     <li>Fundo: Retângulo cobrindo, cor branca ou bege claro.</li>
// //                     <li>Título seção: Texto “Por Que Escolher Nosso Curso?”, tamanho 36px, bold, centro.</li>
// //                     <li>Benefícios: Crie 3 colunas (use grid). Para cada:
// //                       <ul className={`list-disc pl-5 ${colors.textSecondary} text-base`}>
// //                         <li>Ícone: Retângulo pequeno (50x50px, cor verde #2D5A4A) como placeholder.</li>
// //                         <li>Texto: Abaixo, “Aprenda no seu ritmo”, tamanho 18px, bold, cor #13231C.</li>
// //                         <li>Descrição: “Aulas flexíveis”, tamanho 14px, regular, cor #13231C/70.</li>
// //                       </ul>
// //                     </li>
// //                     <li>Alinhe: Use alignment para centro em cada coluna, espaçamento 40px entre itens.</li>
// //                     <li>Aplique princípios: Hierarquia (títulos bold), contraste (ícones verdes), espaçamento (gutters do grid), tipografia (2 fontes max).</li>
// //                   </ul>
// //                 </motion.div>
// //               </div>
// //               <p className={`${colors.textSecondary} text-base mb-2`}><strong>Finalização e discussão:</strong></p>
// //               <ul className={`list-disc pl-5 ${colors.textSecondary} text-base mb-2`}>
// //                 <li>Duplique elementos (Ctrl+D) para eficiência.</li>
// //                 <li>Exporte: Clique direito no Frame - Export - PNG.</li>
// //                 <li>Pergunte: “Como aplicaram hierarquia e cores? O que foi difícil?”</li>
// //               </ul>
// //               <p className={`${colors.textSecondary} text-base mt-3`}><em>💡 Parte prática:</em> Circule pela sala para ajudar. No projetor, demonstre cada passo e peça para alunos compartilharem suas telas.</p>
// //             </motion.article>
// //           </div>
// //         </motion.section>

// //         {/* Parte 4 - Criando o Wireframe */}
// //         <motion.section
// //           id="parte4"
// //           initial="hidden"
// //           animate="show"
// //           variants={container}
// //           className={`rounded-2xl p-6 md:p-10 mb-12 shadow-xl ${colors.card}`}
// //           style={{ backdropFilter: "blur(6px)" }}
// //         >
// //           <div className="flex items-center gap-3 mb-6">
// //             <PenTool className="w-8 h-8 text-[#E07A5F]" />
// //             <h3 className="text-3xl md:text-4xl font-bold">Criando o Wireframe</h3>
// //           </div>
// //           <motion.div variants={card}>
// //             <p className={`${colors.textSecondary} text-lg mb-8`}>Entender o conceito de wireframe como esqueleto simples de uma landing page e criar um no Figma, aplicando os conceitos das partes anteriores. A prática guiada garante que todos saiam com um wireframe pronto para ser estilizado na Aula 2.</p>
// //           </motion.div>

// //           <div className="grid md:grid-cols-2 gap-8">
// //             {/* O que é Wireframe */}
// //             <motion.article variants={card} whileHover="hover" className={`p-6 rounded-lg ${colors.card} ${colors.border}`}>
// //               <div className="flex items-center gap-2 mb-3">
// //                 <Lightbulb className="w-6 h-6 text-[#2D5A4A]" />
// //                 <h4 className="text-xl font-semibold">1. O que é Wireframe?</h4>
// //               </div>
// //               <p className={`${colors.textSecondary} text-base mb-2`}><strong>O que é:</strong> Um wireframe é um rascunho simples da estrutura da página, como um mapa ou esqueleto, sem cores, imagens ou detalhes visuais. Ele foca apenas na organização dos elementos (posição, tamanho e fluxo), para planejar como a landing page será montada antes de adicionar design.</p>
// //               <p className={`${colors.textSecondary} text-base mb-2`}><strong>Por que usar:</strong></p>
// //               <ul className={`list-disc pl-5 ${colors.textSecondary} text-base mb-2`}>
// //                 <li>Ajuda a visualizar a hierarquia e o fluxo sem distrações.</li>
// //                 <li>Facilita ajustes iniciais antes de investir tempo em cores e fontes.</li>
// //                 <li>Integra conceitos de design (hierarquia, espaçamento) de forma básica.</li>
// //               </ul>
// //               <p className={`${colors.textSecondary} text-base`}><strong>Exemplo prático:</strong> Pense em um blueprint de uma casa – o wireframe é isso para uma landing page, mostrando onde fica o Hero, Benefícios, etc., sem "decoração".</p>
// //               <p className={`${colors.textSecondary} text-base mt-3`}><em>💡 Parte prática:</em> No projetor, mostre um exemplo de wireframe simples (retângulos cinza com texto genérico) comparado a uma landing page final (ex.: Dropbox wireframe vs. versão real). Pergunte: “O que muda do wireframe para o design final?”</p>
// //             </motion.article>

// //             {/* Passo a Passo para Criar o Wireframe */}
// //             <motion.article variants={card} whileHover="hover" className={`p-6 rounded-lg ${colors.card} ${colors.border}`}>
// //               <div className="flex items-center gap-2 mb-3">
// //                 <Layout className="w-6 h-6 text-[#2D5A4A]" />
// //                 <h4 className="text-xl font-semibold">2. Passo a Passo para Criar o Wireframe</h4>
// //               </div>
// //               <p className={`${colors.textSecondary} text-base mb-2`}><strong>Preparação inicial:</strong></p>
// //               <ul className={`list-disc pl-5 ${colors.textSecondary} text-base mb-2`}>
// //                 <li>Abra o Figma e crie um novo arquivo (clique em "New file" no dashboard).</li>
// //                 <li>Defina a paleta básica para wireframe: Use cinza claro (#F0F0F0) para fundos, cinza médio (#CCCCCC) para bordas, texto em cinza escuro (#333333). Fontes genéricas: Use a padrão do Figma (Inter ou similar) para tudo, sem customizações avançadas.</li>
// //                 <li>Tamanho do Frame: Desktop padrão (1440px largura, altura variável por seção).</li>
// //               </ul>
// //               <p className={`${colors.textSecondary} text-base mb-2`}><strong>Passo a passo detalhado:</strong></p>
// //               <div className="grid md:grid-cols-2 gap-4">
// //                 <motion.div variants={card}>
// //                   <ul className={`list-decimal pl-5 ${colors.textSecondary} text-base mb-2`}>
// //                     <li><strong>Criar um Frame do tamanho da tela (Desktop):</strong>
// //                       <ul className={`list-disc pl-5 ${colors.textSecondary} text-base`}>
// //                         <li>Na barra de ferramentas superior esquerda, clique no ícone "Frame" (ou pressione F).</li>
// //                         <li>Clique e arraste no canvas para criar um Frame de 1440px largura x 1024px altura inicial (ajuste depois). Isso representa a página inteira.</li>
// //                         <li>No painel direito (Design panel), nomeie o Frame como "Landing Page Wireframe" (em "Layer" - clique no nome para editar).</li>
// //                         <li>Adicione grid: No painel direito - "Layout grid" - clique "+", configure "Columns" com 12 colunas, gutter 20px, margins 80px (esquerda/direita). Ative o grid (olho ao lado) para guiar alinhamentos. Cor do grid: Cinza claro (#CCCCCC 50% opacidade).</li>
// //                       </ul>
// //                     </li>
// //                     <li><strong>Adicionar blocos representando cada seção da landing page:</strong>
// //                       <ul className={`list-disc pl-5 ${colors.textSecondary} text-base`}>
// //                         <li>Use a ferramenta "Rectangle" (pressione R) para criar retângulos como placeholders para seções.</li>
// //                         <li>Para cada seção, crie um retângulo com borda cinza médio (#CCCCCC, stroke 1px), preenchimento cinza claro (#F0F0F0).</li>
// //                         <li>Posições: Empilhe verticalmente no Frame, usando grid para alinhar (ex.: largura plena de 12 colunas).</li>
// //                         <li>Espaçamento entre seções: 80px (use a ferramenta "Move" - V - e segure Shift para mover reto; verifique distância no painel direito - "Y position").</li>
// //                       </ul>
// //                     </li>
// //                   </ul>
// //                 </motion.div>
// //                 <motion.div variants={card}>
// //                   <ul className={`list-decimal pl-5 ${colors.textSecondary} text-base mb-2`}>
// //                     <li><strong>Usar texto genérico (“Título aqui”, “Botão aqui”):</strong>
// //                       <ul className={`list-disc pl-5 ${colors.textSecondary} text-base`}>
// //                         <li>Ferramenta "Text" (pressione T), clique dentro de um retângulo e digite texto genérico.</li>
// //                         <li>Estilo: Fonte padrão (Inter), tamanho 24px para títulos ("Título aqui"), 16px para textos ("Texto aqui"), cor #333333, alinhamento centro ou esquerda (painel direito - Alignment).</li>
// //                         <li>Para botões: Crie retângulo pequeno (200x50px, borda #CCCCCC, preenchimento branco), adicione texto "Botão aqui" dentro, grupo (Ctrl+G).</li>
// //                       </ul>
// //                     </li>
// //                     <li><strong>Marcar onde ficarão imagens:</strong>
// //                       <ul className={`list-disc pl-5 ${colors.textSecondary} text-base`}>
// //                         <li>Crie retângulos como placeholders para imagens (ex.: 600x400px, preenchimento cinza claro #F0F0F0, borda pontilhada #CCCCCC - no painel direito - Stroke - Dashed).</li>
// //                         <li>Adicione texto "Imagem aqui" no centro do placeholder (tamanho 16px, cinza #666666).</li>
// //                       </ul>
// //                     </li>
// //                   </ul>
// //                 </motion.div>
// //               </div>
// //               <p className={`${colors.textSecondary} text-base mb-2`}><strong>Dicas práticas:</strong></p>
// //               <ul className={`list-disc pl-5 ${colors.textSecondary} text-base mb-2`}>
// //                 <li>Duplique elementos (Ctrl+D) para reutilizar (ex.: duplique retângulos para seções semelhantes).</li>
// //                 <li>Alinhamento automático: Selecione múltiplos elementos, clique "Align" no painel direito para centro ou topo.</li>
// //                 <li>Zoom e navegação: Ctrl + roda do mouse para zoom; espaço + arraste para pan.</li>
// //                 <li>Salve o arquivo: Figma salva automaticamente, mas nomeie clicando no título no topo.</li>
// //               </ul>
// //               <p className={`${colors.textSecondary} text-base mt-3`}><em>💡 Parte prática:</em> No projetor, demonstre cada passo criando um Frame simples com grid e um retângulo. Peça aos alunos para seguirem junto em suas contas.</p>
// //             </motion.article>

// //             {/* Prática Guiada */}
// //             <motion.article variants={card} whileHover="hover" className={`p-6 rounded-lg ${colors.card} ${colors.border} md:col-span-2`}>
// //               <div className="flex items-center gap-2 mb-3">
// //                 <CheckCircle className="w-6 h-6 text-[#2D5A4A]" />
// //                 <h4 className="text-xl font-semibold">3. Prática Guiada: Criando o Wireframe Completo</h4>
// //               </div>
// //               <p className={`${colors.textSecondary} text-base mb-2`}><strong>Instruções gerais:</strong> Criaremos o wireframe para uma landing page fictícia "Curso de Fotografia Online", usando placeholders simples. Foque em estrutura: Hero, Benefícios, Depoimentos, CTA final, Rodapé. Use grid para alinhar, espaçamento uniforme (40px interno, 80px entre seções), texto genérico e placeholders cinza. Largura plena (1440px), altura ajustável. Todos criam junto; pause para perguntas.</p>
// //               <div className="grid md:grid-cols-2 gap-4">
// //                 <motion.div variants={card}>
// //                   <p className={`${colors.textSecondary} text-base mb-2`}><strong>Passo a passo guiado:</strong></p>
// //                   <ul className={`list-decimal pl-5 ${colors.textSecondary} text-base mb-2`}>
// //                     <li><strong>Hero com título, texto e botão:</strong>
// //                       <ul className={`list-disc pl-5 ${colors.textSecondary} text-base`}>
// //                         <li>Crie retângulo para Hero (1440x600px, preenchimento #F0F0F0, borda #CCCCCC).</li>
// //                         <li>Posição: Topo do Frame principal (Y=0).</li>
// //                         <li>Título: Texto "Título aqui" (tamanho 48px, bold, centro, 100px do topo).</li>
// //                         <li>Texto: "Texto aqui" abaixo (tamanho 24px, 20px espaçamento).</li>
// //                         <li>Botão: Retângulo 200x50px ("Botão aqui", centro abaixo do texto, 40px espaçamento).</li>
// //                         <li>Placeholder imagem: Retângulo 600x400px à direita (alinhado grid coluna 7-12, centro vertical).</li>
// //                       </ul>
// //                     </li>
// //                     <li><strong>Sessão de Benefícios:</strong>
// //                       <ul className={`list-disc pl-5 ${colors.textSecondary} text-base`}>
// //                         <li>Retângulo para seção (1440x400px, preenchimento #F0F0F0, borda #CCCCCC).</li>
// //                         <li>Posição: Abaixo do Hero (Y=600 + 80px espaçamento).</li>
// //                         <li>Título: "Benefícios aqui" (tamanho 36px, bold, centro, 40px do topo).</li>
// //                         <li>3 blocos: Cada retângulo 400x200px (alinhado grid colunas 2-4, 5-7, 9-11, 40px gutter).</li>
// //                         <li>Em cada bloco: Placeholder ícone (50x50px cinza), título "Benefício 1" (18px bold), texto "Descrição aqui" (14px).</li>
// //                       </ul>
// //                     </li>
// //                   </ul>
// //                 </motion.div>
// //                 <motion.div variants={card}>
// //                   <ul className={`list-decimal pl-5 ${colors.textSecondary} text-base mb-2`}>
// //                     <li><strong>Sessão de Depoimentos (Prova Social):</strong>
// //                       <ul className={`list-disc pl-5 ${colors.textSecondary} text-base`}>
// //                         <li>Retângulo (1440x300px, preenchimento #F0F0F0, borda #CCCCCC).</li>
// //                         <li>Posição: Abaixo de Benefícios (Y anterior + altura + 80px).</li>
// //                         <li>Título: "Depoimentos aqui" (36px bold, centro, 40px topo).</li>
// //                         <li>2-3 blocos: Retângulos 600x150px (alinhado grid, 40px gutter).</li>
// //                         <li>Em cada: Texto "Depoimento aqui" (16px, itálico), nome "Nome aqui" abaixo.</li>
// //                       </ul>
// //                     </li>
// //                     <li><strong>CTA final:</strong>
// //                       <ul className={`list-disc pl-5 ${colors.textSecondary} text-base`}>
// //                         <li>Retângulo (1440x200px, preenchimento #F0F0F0, borda #CCCCCC).</li>
// //                         <li>Posição: Abaixo de Depoimentos (Y anterior + altura + 80px).</li>
// //                         <li>Título: "CTA final aqui" (36px bold, centro).</li>
// //                         <li>Botão: Retângulo 200x50px ("Botão aqui", centro abaixo, 40px espaçamento).</li>
// //                       </ul>
// //                     </li>
// //                     <li><strong>Rodapé:</strong>
// //                       <ul className={`list-disc pl-5 ${colors.textSecondary} text-base`}>
// //                         <li>Retângulo (1440x100px, preenchimento #F0F0F0, borda #CCCCCC).</li>
// //                         <li>Posição: Abaixo de CTA (Y anterior + altura + 80px).</li>
// //                         <li>Texto genérico: "Links aqui" (16px, alinhado esquerda), "Contato aqui" (direita).</li>
// //                       </ul>
// //                     </li>
// //                   </ul>
// //                 </motion.div>
// //               </div>
// //               <p className={`${colors.textSecondary} text-base mb-2`}><strong>Finalização:</strong></p>
// //               <ul className={`list-disc pl-5 ${colors.textSecondary} text-base mb-2`}>
// //                 <li>Ajuste altura total do Frame principal para caber todas seções (selecione Frame - redimensione Y no painel direito).</li>
// //                 <li>Grupo seções (Ctrl+G cada uma, nomeie como "Hero Wireframe").</li>
// //                 <li>Exporte como PNG (clique direito no Frame principal - Export - PNG).</li>
// //               </ul>
// //               <p className={`${colors.textSecondary} text-base mt-3`}><em>💡 Parte prática:</em> Demonstre cada passo no projetor, pausando para alunos replicarem. Circule pela sala para ajudar. No final, peça para compartilharem telas e discutirem: “Como o wireframe reflete a hierarquia da Parte 2?”</p>
// //             </motion.article>
// //           </div>
// //         </motion.section>

// //         {/* Parte 5 - Resumo e Interação */}
// //         <motion.section
// //           id="resumo"
// //           initial="hidden"
// //           animate="show"
// //           variants={container}
// //           className={`rounded-2xl p-6 md:p-10 mb-12 shadow-xl ${colors.card}`}
// //           style={{ backdropFilter: "blur(6px)" }}
// //         >
// //           <div className="flex items-center gap-3 mb-6">
// //             <CheckCircle className="w-8 h-8 text-[#E07A5F]" />
// //             <h3 className="text-3xl md:text-4xl font-bold">Resumo e Interação (5 min)</h3>
// //           </div>
// //           <motion.div variants={card}>
// //             <ul className={`list-disc pl-6 space-y-3 mb-8 ${colors.textSecondary} text-base`}>
// //               <li><strong>Parte 1:</strong> Landing page é uma página com objetivo claro (ex.: vender, cadastrar), composta por elementos como Hero, Benefícios, Prova Social, CTA e Rodapé, que atraem, convencem e incentivam a ação.</li>
// //               <li><strong>Parte 2:</strong> Princípios de design incluem hierarquia visual (tamanho, posição, contraste), espaçamento, cores (principal, apoio, contraste) e tipografia (máximo 2 fontes, pesos diferentes) para criar páginas organizadas e confiáveis.</li>
// //               <li><strong>Parte 3:</strong> Figma é uma ferramenta gratuita para criar interfaces, com criação de Frames, uso de grid, ferramentas de retângulo e texto, e aplicação prática dos conceitos de design para prototipar landing pages.</li>
// //               <li><strong>Parte 4:</strong> Wireframe é um esqueleto simples da landing page, usando placeholders cinza (ex.: retângulos, texto genérico) para planejar a estrutura (Hero, Benefícios, Depoimentos, CTA, Rodapé) antes do design final.</li>
// //             </ul>
// //           </motion.div>

// //           <div className="grid md:grid-cols-2 gap-8">
// //             <motion.div variants={card} whileHover="hover">
// //               <h4 className="text-xl font-semibold mb-3">Pergunta para a turma</h4>
// //               <p className={`${colors.textSecondary} text-base mb-4`}>“Vocês já acessaram uma landing page que chamou atenção? O que tinha nela?”</p>
// //               <p className={`${colors.textSecondary} text-base`}><em>💡 Parte prática:</em> Abra uma página completa (ex.: Airbnb ou Dropbox) e peça para identificarem Hero, Benefícios, Prova Social, CTA e Rodapé.</p>
// //             </motion.div>

// //             <motion.div variants={card} whileHover="hover" className={`p-6 rounded-lg ${colors.card} ${colors.border}`}>
// //               <h4 className="font-semibold text-xl mb-3">Links de landing pages bem feitas</h4>
// //               <ul className={`list-inside list-disc space-y-3 ${colors.textSecondary} text-base`}>
// //                 <li><a href="https://www.airbnb.com" target="_blank" rel="noreferrer" className="underline hover:text-[#E07A5F]">Airbnb</a> — hero claro e ótima prova social.</li>
// //                 <li><a href="https://www.dropbox.com" target="_blank" rel="noreferrer" className="underline hover:text-[#E07A5F]">Dropbox</a> — simplicidade e foco em CTA.</li>
// //                 <li><a href="https://www.duolingo.com" target="_blank" rel="noreferrer" className="underline hover:text-[#E07A5F]">Duolingo</a> — excelentes benefícios com ícones.</li>
// //                 <li><a href="https://www.netflix.com" target="_blank" rel="noreferrer" className="underline hover:text-[#E07A5F]">Netflix</a> — CTA claro e hero direto.</li>
// //                 <li><a href="https://www.spotify.com" target="_blank" rel="noreferrer" className="underline hover:text-[#E07A5F]">Spotify</a> — rodapé bem organizado e navegação simples.</li>
// //                 <li><a href="https://www.amazon.com" target="_blank" rel="noreferrer" className="underline hover:text-[#E07A5F]">Amazon</a> — prova social (reviews) bem destacada.</li>
// //               </ul>
// //             </motion.div>
// //           </div>
// //         </motion.section>
// //       </div>
// //     </div>
// //   );
// // }









// // import { useState, useEffect } from "react"
// // import {
// //   Moon,
// //   Sun,
// //   ArrowLeft,
// //   Users,
// //   Clock,
// //   Target,
// //   Lightbulb,
// //   Code,
// //   Palette,
// //   CheckCircle,
// //   Award,
// //   Monitor,
// //   PenTool,
// //   ChevronRight,
// //   Play,
// //   BookOpen,
// //   Star,
// //   Layout,
// //   ExternalLink,
// // } from "lucide-react"

// // const Button = ({ children, variant = "default", className = "", onClick, ...props }) => {
// //   const baseClasses =
// //     "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background"
// //   const variants = {
// //     default: "bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4",
// //     ghost: "hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4",
// //   }

// //   return (
// //     <button className={`${baseClasses} ${variants[variant]} ${className}`} onClick={onClick} {...props}>
// //       {children}
// //     </button>
// //   )
// // }

// // const Card = ({ children, className = "", ...props }) => {
// //   return (
// //     <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`} {...props}>
// //       {children}
// //     </div>
// //   )
// // }

// // const CardContent = ({ children, className = "", ...props }) => {
// //   return (
// //     <div className={`p-6 ${className}`} {...props}>
// //       {children}
// //     </div>
// //   )
// // }

// // export default function LandingPage() {
// //   const [darkMode, setDarkMode] = useState(false)
// //   const [activeTab, setActiveTab] = useState("parte1")
// //   const [expandedSection, setExpandedSection] = useState(null)

// //   useEffect(() => {
// //     if (darkMode) {
// //       document.documentElement.classList.add("dark")
// //     } else {
// //       document.documentElement.classList.remove("dark")
// //     }
// //   }, [darkMode])

// //   const toggleDarkMode = () => {
// //     setDarkMode(!darkMode)
// //   }

// //   const toggleSection = (section) => {
// //     setExpandedSection(expandedSection === section ? null : section)
// //   }

// //   const courseContent = {
// //     parte1: {
// //       title: "O que é uma Landing Page?",
// //       icon: Lightbulb,
// //       duration: "30 min",
// //       description: "Fundamentos e elementos essenciais",
// //       mainContent:
// //         "Uma landing page é uma página na internet criada com um único propósito: convencer o visitante a realizar uma ação específica. Diferente de um site que pode ter várias funções, a landing page é focada e direta.",
// //       topics: [
// //         {
// //           title: "Conceito Principal",
// //           content:
// //             "Uma landing page é uma página na internet criada com um único propósito: convencer o visitante a realizar uma ação específica.",
// //           highlights: ["Objetivo único", "Simplicidade", "Foco na conversão"],
// //           details: [
// //             "Fazer o visitante clicar, comprar, preencher um formulário ou se inscrever",
// //             "Poucas distrações, conteúdo claro e visual limpo",
// //             "Tudo guia o visitante até a ação desejada",
// //           ],
// //         },
// //         {
// //           title: "Características Essenciais",
// //           content: "Diferente de um site que pode ter várias funções, a landing page é focada e direta.",
// //           highlights: ["Poucas distrações", "Conteúdo claro", "Visual limpo"],
// //           details: ["Objetivo único bem definido", "Simplicidade na apresentação", "Foco total na conversão"],
// //         },
// //         {
// //           title: "Exemplo Prático",
// //           content:
// //             "Página de um curso de fotografia com título claro, benefícios rápidos e um botão grande 'Quero me inscrever!'.",
// //           highlights: ["Título claro", "Benefícios rápidos", "CTA destacado"],
// //           details: [
// //             "Hero section com proposta de valor clara",
// //             "Benefícios apresentados de forma visual",
// //             "Call-to-action proeminente e direto",
// //           ],
// //         },
// //       ],
// //     },
// //     parte2: {
// //       title: "Princípios Básicos de Design",
// //       icon: Palette,
// //       duration: "45 min",
// //       description: "Hierarquia, cores, tipografia e espaçamento",
// //       mainContent:
// //         "Compreenda os fundamentos que tornam uma landing page visualmente atraente, organizada e confiável.",
// //       topics: [
// //         {
// //           title: "Hierarquia Visual",
// //           content: "Organiza elementos para guiar o olhar do visitante. O mais importante deve ser mais chamativo.",
// //           highlights: ["Tamanho", "Posição", "Contraste"],
// //           details: [
// //             "Títulos e botões de CTA maiores (ex.: 'Aprenda Inglês Hoje!')",
// //             "Elementos importantes no topo ou centro",
// //             "Cores ou estilos contrastantes (ex.: botão laranja em fundo claro)",
// //             "Exemplo: Na landing page do Netflix, o botão 'Assine agora' é grande, vermelho e centralizado",
// //           ],
// //           practicalTip:
// //             "Mostre a landing page do Airbnb e aponte o título grande, botão destacado e textos menores. Pergunte: 'O que você viu primeiro? Por quê?'",
// //         },
// //         {
// //           title: "Espaçamento",
// //           content: "Uso de espaço em branco para organizar a página e evitar poluição visual.",
// //           highlights: ["Margens e padding", "Agrupamento", "Equilíbrio"],
// //           details: [
// //             "Espaço ao redor de textos e botões",
// //             "Elementos relacionados mais próximos, seções separadas",
// //             "Evite encher a página para manter clareza",
// //             "Exemplo: Na landing page do Dropbox, o espaço em branco entre título e botão facilita a leitura",
// //           ],
// //           practicalTip:
// //             "Mostre a landing page do Dropbox e compare com uma página fictícia sobrecarregada. Destaque como o espaço facilita a leitura.",
// //         },
// //         {
// //           title: "Cores",
// //           content: "Cores criam emoção, destacam elementos e garantem legibilidade.",
// //           highlights: ["Cor principal", "Cores de apoio", "Contraste"],
// //           details: [
// //             "Use uma cor forte (ex.: laranja #E07A5F) para botões e títulos",
// //             "1-2 cores complementares (ex.: verde #2D5A4A) para ícones",
// //             "Texto legível contra o fundo (ex.: #13231C em #F5F1EB)",
// //             "Exemplo: No Duolingo, o verde é usado para botões, com fundo neutro para contraste",
// //           ],
// //           practicalTip:
// //             "Mostre a paleta do Duolingo e um exemplo ruim (texto claro em fundo claro). Pergunte: 'Conseguem ler isso facilmente?'",
// //         },
// //         {
// //           title: "Tipografia",
// //           content: "Escolha de fontes para clareza e hierarquia.",
// //           highlights: ["Máximo 2 fontes", "Pesos diferentes", "Tamanho/espaçamento"],
// //           details: [
// //             "Ex.: Montserrat para títulos, Open Sans para textos",
// //             "Negrito para títulos, regular para parágrafos",
// //             "Títulos grandes, textos com linha alta",
// //             "Exemplo: No Spotify, títulos são bold e grandes, parágrafos menores e regulares",
// //           ],
// //           practicalTip:
// //             "Mostre a tipografia do Spotify e um exemplo com 3+ fontes misturadas. Pergunte: 'Isso parece organizado?'",
// //         },
// //       ],
// //       exerciseContent: {
// //         title: "Exercício Rápido",
// //         description: "Mostre duas landing pages:",
// //         examples: [
// //           "Página poluída: Texto amontoado, várias cores, fontes diferentes, sem espaço",
// //           "Página organizada: Hierarquia clara, espaçamento adequado, cores simples (ex.: Dropbox ou Airbnb)",
// //         ],
// //         question: "Qual parece mais confiável? Por quê?",
// //         practicalTip:
// //           "Peça aos alunos para apontarem o que torna a página organizada mais atraente (ex.: espaçamento, cores, texto).",
// //       },
// //     },
// //     parte3: {
// //       title: "Conhecendo o Figma",
// //       icon: Monitor,
// //       duration: "30 min",
// //       description: "Ferramentas e funcionalidades básicas",
// //       mainContent:
// //         "Apresentar o Figma como ferramenta gratuita para design de interfaces, ensinar os básicos de navegação e uso de ferramentas simples, e aplicar os conceitos das Partes 1 e 2 em uma atividade prática.",
// //       topics: [
// //         {
// //           title: "O que é o Figma?",
// //           content:
// //             "O Figma é uma ferramenta online gratuita para criar designs de interfaces, como landing pages, apps e sites.",
// //           highlights: ["Gratuito", "Online", "Colaborativo"],
// //           details: [
// //             "Permite trabalhar em tempo real e colaborar com outras pessoas",
// //             "Acessível pelo navegador (sem precisar instalar nada)",
// //             "Versão gratuita com recursos suficientes para iniciantes",
// //             "Fácil de aprender e usar",
// //             "Integra conceitos de design (hierarquia, cores, espaçamento) diretamente na criação",
// //           ],
// //           example:
// //             "Designers usam o Figma para prototipar landing pages como a do Duolingo, onde definem cores, fontes e layouts antes de codificar.",
// //           practicalTip:
// //             "Abra o navegador e acesse figma.com. Mostre a página inicial e destaque como é simples começar.",
// //         },
// //         {
// //           title: "Criando uma Conta",
// //           content: "Processo simples de cadastro e primeiros passos na plataforma.",
// //           highlights: ["figma.com", "Sign up", "Dashboard"],
// //           details: [
// //             "Abra o navegador e vá para figma.com",
// //             "Na página inicial, clique no botão 'Sign up' (no canto superior direito)",
// //             "Escolha 'Continue with Google' (se tiver conta Google) ou preencha com e-mail, nome e senha",
// //             "Clique em 'Create account'",
// //             "Verifique o e-mail (se necessário) e confirme a conta",
// //             "Após login, você será direcionado para o dashboard do Figma",
// //           ],
// //           tips: [
// //             "A conta gratuita permite ilimitados arquivos pessoais e colaboração básica",
// //             "Se já tiver conta, clique em 'Log in' e entre",
// //           ],
// //           practicalTip:
// //             "Peça aos alunos para criarem suas contas agora. Circule pela sala para ajudar quem tiver dúvidas. Mostre seu dashboard no projetor.",
// //         },
// //         {
// //           title: "Ferramentas Básicas",
// //           content: "Navegação e uso das principais funcionalidades para iniciantes.",
// //           highlights: ["Frame", "Grid", "Ferramentas"],
// //           details: [
// //             "Criar Frames (F) - representa a tela ou página da landing page",
// //             "Adicionar Grid para alinhamento - 12 colunas, gutter 20px, margins 80px",
// //             "Retângulo (R) para criar formas e fundos de seção",
// //             "Texto (T) para adicionar conteúdo",
// //             "Alinhamento automático no painel direito",
// //           ],
// //           practicalTip:
// //             "No projetor, crie um Frame, adicione grid, desenhe um retângulo colorido, adicione texto e alinhe. Peça aos alunos para replicarem em suas contas.",
// //         },
// //       ],
// //       practicalActivity: {
// //         title: "Atividade Prática: Criar Hero Section e Sessão de Benefícios",
// //         description:
// //           "Usando conceitos das Partes 1 e 2, crie uma landing page fictícia para um 'Curso de Fotografia Online'.",
// //         palette: "Principal #E07A5F (laranja), apoio #2D5A4A (verde), neutro #F5F1EB (bege) e texto #13231C",
// //         fonts: "Montserrat (títulos, bold) e Open Sans (textos, regular)",
// //         sections: [
// //           {
// //             name: "Hero Section",
// //             steps: [
// //               "Crie um Frame (clique Frame - arraste 1440x600px)",
// //               "Adicione grid (Design panel - Layout grid - + - 12 colunas, gutter 20px)",
// //               "Fundo: Crie retângulo (R) cobrindo o Frame, cor bege #F5F1EB",
// //               "Título: Texto (T), 'Aprenda Fotografia Profissional'. Fonte Montserrat, 48px, bold, cor #13231C",
// //               "Subtítulo: 'Capture momentos incríveis em 4 semanas', 24px, regular, cor #13231C/70",
// //               "Botão CTA: Retângulo 200x50px, cor laranja #E07A5F, bordas arredondadas (8px)",
// //               "Imagem: Retângulo placeholder (cor verde #2D5A4A), 400x300px, à direita",
// //             ],
// //           },
// //           {
// //             name: "Sessão de Benefícios",
// //             steps: [
// //               "Crie novo Frame abaixo do Hero (1440x400px)",
// //               "Fundo: Retângulo cobrindo, cor branca ou bege claro",
// //               "Título seção: 'Por Que Escolher Nosso Curso?', 36px, bold, centro",
// //               "Benefícios: Crie 3 colunas (use grid)",
// //               "Para cada: Ícone (50x50px, cor verde), texto 'Aprenda no seu ritmo' (18px, bold), descrição 'Aulas flexíveis' (14px, regular)",
// //             ],
// //           },
// //         ],
// //         practicalTip:
// //           "Circule pela sala para ajudar. No projetor, demonstre cada passo e peça para alunos compartilharem suas telas.",
// //       },
// //     },
// //     parte4: {
// //       title: "Criando o Wireframe",
// //       icon: PenTool,
// //       duration: "60 min",
// //       description: "Prática guiada de estruturação visual",
// //       mainContent:
// //         "Entender o conceito de wireframe como esqueleto simples de uma landing page e criar um no Figma, aplicando os conceitos das partes anteriores.",
// //       topics: [
// //         {
// //           title: "O que é Wireframe?",
// //           content:
// //             "Um wireframe é um rascunho simples da estrutura da página, como um mapa ou esqueleto, sem cores, imagens ou detalhes visuais.",
// //           highlights: ["Estrutura", "Organização", "Planejamento"],
// //           details: [
// //             "Foca apenas na organização dos elementos (posição, tamanho e fluxo)",
// //             "Ajuda a visualizar a hierarquia e o fluxo sem distrações",
// //             "Facilita ajustes iniciais antes de investir tempo em cores e fontes",
// //             "Integra conceitos de design (hierarquia, espaçamento) de forma básica",
// //           ],
// //           example:
// //             "Pense em um blueprint de uma casa – o wireframe é isso para uma landing page, mostrando onde fica o Hero, Benefícios, etc., sem 'decoração'.",
// //           practicalTip:
// //             "No projetor, mostre um exemplo de wireframe simples (retângulos cinza com texto genérico) comparado a uma landing page final (ex.: Dropbox wireframe vs. versão real).",
// //         },
// //         {
// //           title: "Preparação",
// //           content: "Configuração inicial do Figma para criar wireframes eficientes.",
// //           highlights: ["Paleta cinza", "Frame desktop", "Grid system"],
// //           details: [
// //             "Use cinza claro (#F0F0F0) para fundos",
// //             "Cinza médio (#CCCCCC) para bordas",
// //             "Texto em cinza escuro (#333333)",
// //             "Fontes genéricas: Use a padrão do Figma (Inter ou similar)",
// //             "Tamanho do Frame: Desktop padrão (1440px largura, altura variável por seção)",
// //           ],
// //         },
// //         {
// //           title: "Prática Guiada",
// //           content: "Criação passo a passo de um wireframe completo para landing page.",
// //           highlights: ["Hero", "Benefícios", "Depoimentos", "CTA", "Rodapé"],
// //           details: [
// //             "Usar retângulos como placeholders para seções",
// //             "Texto genérico ('Título aqui', 'Botão aqui')",
// //             "Espaçamento uniforme (40px interno, 80px entre seções)",
// //             "Placeholders para imagens com bordas pontilhadas",
// //           ],
// //         },
// //       ],
// //       guidedPractice: {
// //         title: "Prática Guiada: Criando o Wireframe Completo",
// //         description:
// //           "Criaremos o wireframe para uma landing page fictícia 'Curso de Fotografia Online', usando placeholders simples.",
// //         sections: [
// //           {
// //             name: "Hero com título, texto e botão",
// //             details: [
// //               "Crie retângulo para Hero (1440x600px, preenchimento #F0F0F0, borda #CCCCCC)",
// //               "Título: Texto 'Título aqui' (tamanho 48px, bold, centro, 100px do topo)",
// //               "Texto: 'Texto aqui' abaixo (tamanho 24px, 20px espaçamento)",
// //               "Botão: Retângulo 200x50px ('Botão aqui', centro abaixo do texto, 40px espaçamento)",
// //               "Placeholder imagem: Retângulo 600x400px à direita (alinhado grid coluna 7-12)",
// //             ],
// //           },
// //           {
// //             name: "Sessão de Benefícios",
// //             details: [
// //               "Retângulo para seção (1440x400px, preenchimento #F0F0F0, borda #CCCCCC)",
// //               "Título: 'Benefícios aqui' (tamanho 36px, bold, centro, 40px do topo)",
// //               "3 blocos: Cada retângulo 400x200px (alinhado grid colunas 2-4, 5-7, 9-11)",
// //               "Em cada bloco: Placeholder ícone (50x50px cinza), título 'Benefício 1' (18px bold), texto 'Descrição aqui' (14px)",
// //             ],
// //           },
// //           {
// //             name: "Sessão de Depoimentos",
// //             details: [
// //               "Retângulo (1440x300px, preenchimento #F0F0F0, borda #CCCCCC)",
// //               "Título: 'Depoimentos aqui' (36px bold, centro, 40px topo)",
// //               "2-3 blocos: Retângulos 600x150px (alinhado grid, 40px gutter)",
// //               "Em cada: Texto 'Depoimento aqui' (16px, itálico), nome 'Nome aqui' abaixo",
// //             ],
// //           },
// //           {
// //             name: "CTA final e Rodapé",
// //             details: [
// //               "CTA: Retângulo (1440x200px), título 'CTA final aqui' (36px bold, centro), botão 200x50px",
// //               "Rodapé: Retângulo (1440x100px), texto genérico 'Links aqui' (16px, esquerda), 'Contato aqui' (direita)",
// //             ],
// //           },
// //         ],
// //         practicalTip:
// //           "Demonstre cada passo no projetor, pausando para alunos replicarem. Circule pela sala para ajudar. No final, peça para compartilharem telas.",
// //       },
// //     },
// //   }

// //   const summaryContent = {
// //     keyPoints: [
// //       {
// //         part: "Parte 1",
// //         content:
// //           "Landing page é uma página com objetivo claro (ex.: vender, cadastrar), composta por elementos como Hero, Benefícios, Prova Social, CTA e Rodapé, que atraem, convencem e incentivam a ação.",
// //       },
// //       {
// //         part: "Parte 2",
// //         content:
// //           "Princípios de design incluem hierarquia visual (tamanho, posição, contraste), espaçamento, cores (principal, apoio, contraste) e tipografia (máximo 2 fontes, pesos diferentes) para criar páginas organizadas e confiáveis.",
// //       },
// //       {
// //         part: "Parte 3",
// //         content:
// //           "Figma é uma ferramenta gratuita para criar interfaces, com criação de Frames, uso de grid, ferramentas de retângulo e texto, e aplicação prática dos conceitos de design para prototipar landing pages.",
// //       },
// //       {
// //         part: "Parte 4",
// //         content:
// //           "Wireframe é um esqueleto simples da landing page, usando placeholders cinza (ex.: retângulos, texto genérico) para planejar a estrutura (Hero, Benefícios, Depoimentos, CTA, Rodapé) antes do design final.",
// //       },
// //     ],
// //     interactionQuestion: "Vocês já acessaram uma landing page que chamou atenção? O que tinha nela?",
// //     practicalTip:
// //       "Abra uma página completa (ex.: Airbnb ou Dropbox) e peça para identificarem Hero, Benefícios, Prova Social, CTA e Rodapé.",
// //     usefulLinks: [
// //       { name: "Airbnb", url: "https://www.airbnb.com", description: "hero claro e ótima prova social" },
// //       { name: "Dropbox", url: "https://www.dropbox.com", description: "simplicidade e foco em CTA" },
// //       { name: "Duolingo", url: "https://www.duolingo.com", description: "excelentes benefícios com ícones" },
// //       { name: "Netflix", url: "https://www.netflix.com", description: "CTA claro e hero direto" },
// //       { name: "Spotify", url: "https://www.spotify.com", description: "rodapé bem organizado e navegação simples" },
// //       { name: "Amazon", url: "https://www.amazon.com", description: "prova social (reviews) bem destacada" },
// //     ],
// //   }

// //   return (
// //     <div
// //       className={`min-h-screen transition-all duration-500 relative overflow-hidden ${darkMode ? "bg-[#2D5A4A]" : "bg-[#F5F1EB]"}`}
// //     >
// //       <div className="absolute inset-0 opacity-20">
// //         <div
// //           className={`w-full h-full ${darkMode ? "opacity-30" : "opacity-40"}`}
// //           style={{
// //             backgroundImage: `linear-gradient(${darkMode ? "#F5F1EB" : "#2D5A4A"} 1px, transparent 1px), linear-gradient(90deg, ${darkMode ? "#F5F1EB" : "#2D5A4A"} 1px, transparent 1px)`,
// //             backgroundSize: "40px 40px",
// //           }}
// //         />
// //       </div>

// //       <div className="absolute inset-0 overflow-hidden pointer-events-none">
// //         <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-[#E07A5F]/20 to-[#E07A5F]/5 rounded-full blur-3xl animate-pulse"></div>
// //         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#2D5A4A]/20 to-[#2D5A4A]/5 rounded-full blur-2xl"></div>
// //         <div
// //           className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-bl from-[#E07A5F]/15 to-transparent rounded-full blur-xl animate-bounce"
// //           style={{ animationDuration: "6s" }}
// //         ></div>
// //         <div className="absolute top-20 left-1/3 w-32 h-32 bg-[#E07A5F]/10 transform rotate-45 blur-sm"></div>
// //         <div className="absolute bottom-1/3 right-20 w-24 h-24 bg-[#2D5A4A]/15 transform rotate-12 blur-sm"></div>
// //         <div className="absolute top-1/2 left-10 w-40 h-1 bg-gradient-to-r from-[#E07A5F]/30 to-transparent transform -rotate-45"></div>
// //         <div className="absolute bottom-1/4 right-1/3 w-32 h-1 bg-gradient-to-l from-[#2D5A4A]/30 to-transparent transform rotate-45"></div>
// //       </div>

// //       <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
// //         <div className="absolute top-20 left-10 w-3 h-3 bg-[#E07A5F] rounded-full opacity-60 animate-pulse shadow-lg"></div>
// //         <div className="absolute top-40 right-20 w-4 h-4 bg-[#E07A5F] rounded-full opacity-40 animate-bounce shadow-lg"></div>
// //         <div className="absolute top-60 left-1/4 w-2 h-2 bg-[#2D5A4A] rounded-full opacity-50 shadow-md"></div>
// //         <div className="absolute bottom-40 right-10 w-3 h-3 bg-[#E07A5F] rounded-full opacity-30 animate-pulse shadow-lg"></div>
// //         <div className="absolute bottom-60 left-20 w-2 h-2 bg-[#2D5A4A] rounded-full opacity-40 shadow-md"></div>
// //         <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-[#E07A5F] rounded-full opacity-20 animate-bounce shadow-lg"></div>
// //         <div className="absolute top-1/4 left-1/2 w-1 h-8 bg-[#E07A5F]/40 transform rotate-45"></div>
// //         <div className="absolute bottom-1/3 left-1/4 w-6 h-1 bg-[#2D5A4A]/40 transform -rotate-12"></div>
// //         <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-[#E07A5F] transform rotate-45 opacity-50"></div>
// //       </div>

// //       {/* Header */}
// //       <header className="relative z-20 flex items-center justify-between p-6 max-w-7xl mx-auto">
// //         <Button
// //           variant="ghost"
// //           className={`flex items-center gap-2 ${darkMode ? "text-[#F5F1EB] hover:text-[#E07A5F]" : "text-[#2D5A4A] hover:text-[#E07A5F]"} transition-colors duration-300 backdrop-blur-sm`}
// //         >
// //           <ArrowLeft className="w-4 h-4" />
// //           Voltar
// //         </Button>
// //         <Button
// //           variant="ghost"
// //           onClick={toggleDarkMode}
// //           className={`${darkMode ? "text-[#F5F1EB] hover:text-[#E07A5F]" : "text-[#2D5A4A] hover:text-[#E07A5F]"} transition-colors duration-300 backdrop-blur-sm`}
// //         >
// //           {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
// //           {darkMode ? "Light" : "Dark"}
// //         </Button>
// //       </header>

// //       <section className="relative z-20 max-w-7xl mx-auto px-6 py-20">
// //         <div className="grid lg:grid-cols-2 gap-12 items-center">
// //           <div className="space-y-8">
// //             <div className="space-y-6">
// //               <h1
// //                 className={`text-5xl lg:text-6xl font-bold leading-tight ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"} transition-colors duration-500 drop-shadow-sm`}
// //               >
// //                 Supermódulo
// //                 <br />
// //                 <span className="text-[#E07A5F] drop-shadow-lg">Creative Code</span>
// //                 <br />
// //                 UX/UI Design
// //               </h1>
// //               <p
// //                 className={`text-lg ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"} transition-colors duration-500 backdrop-blur-sm`}
// //               >
// //                 Domine os fundamentos visuais que transformam páginas comuns em experiências incríveis. Aprenda design
// //                 de forma prática e objetiva, criando landing pages que convertem.
// //               </p>
// //             </div>

// //             <div className="flex items-center gap-8 pt-4">
// //               <div className="flex items-center gap-2 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full">
// //                 <Clock className="w-5 h-5 text-[#E07A5F]" />
// //                 <span className={`${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>3 horas</span>
// //               </div>
// //               <div className="flex items-center gap-2 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full">
// //                 <Users className="w-5 h-5 text-[#E07A5F]" />
// //                 <span className={`${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>Aula ao vivo</span>
// //               </div>
// //               <div className="flex items-center gap-2 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full">
// //                 <Award className="w-5 h-5 text-[#E07A5F]" />
// //                 <span className={`${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>Certificado</span>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="relative">
// //             <div className="absolute -inset-4 bg-gradient-to-r from-[#E07A5F]/20 to-[#2D5A4A]/20 rounded-3xl blur-xl"></div>

// //             <Card
// //               className={`relative ${darkMode ? "bg-[#F5F1EB]/10 backdrop-blur-md border-[#F5F1EB]/20" : "bg-white/80 backdrop-blur-md border-white/50"} shadow-2xl transition-all duration-500 transform hover:scale-105 border-2`}
// //             >
// //               <CardContent className="p-8 space-y-6">
// //                 <div className="flex items-center gap-4">
// //                   <div className="w-12 h-12 bg-gradient-to-br from-[#E07A5F] to-[#E07A5F]/80 rounded-full flex items-center justify-center shadow-lg">
// //                     <Target className="w-6 h-6 text-white" />
// //                   </div>
// //                   <div>
// //                     <h3 className={`font-semibold text-lg ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"}`}>
// //                       Objetivo da Aula
// //                     </h3>
// //                     <p className={`text-sm ${darkMode ? "text-[#F5F1EB]/70" : "text-[#2D5A4A]/70"}`}>
// //                       Fundamentos práticos de design
// //                     </p>
// //                   </div>
// //                 </div>

// //                 <div className="space-y-4">
// //                   <div className="flex items-start gap-3">
// //                     <CheckCircle className="w-5 h-5 text-[#E07A5F] mt-0.5 flex-shrink-0 drop-shadow-sm" />
// //                     <p className={`text-sm ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>
// //                       Conceitos visuais para páginas mais atrativas
// //                     </p>
// //                   </div>
// //                   <div className="flex items-start gap-3">
// //                     <CheckCircle className="w-5 h-5 text-[#E07A5F] mt-0.5 flex-shrink-0 drop-shadow-sm" />
// //                     <p className={`text-sm ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>
// //                       Criação de wireframe profissional no Figma
// //                     </p>
// //                   </div>
// //                   <div className="flex items-start gap-3">
// //                     <CheckCircle className="w-5 h-5 text-[#E07A5F] mt-0.5 flex-shrink-0 drop-shadow-sm" />
// //                     <p className={`text-sm ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>
// //                       Estrutura completa de landing page
// //                     </p>
// //                   </div>
// //                 </div>
// //               </CardContent>
// //             </Card>
// //           </div>
// //         </div>
// //       </section>

// //       <section className="relative z-20 max-w-7xl mx-auto px-6 py-20">
// //         <div className="text-center mb-16">
// //           <h2
// //             className={`text-4xl font-bold mb-6 ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"} transition-colors duration-500 drop-shadow-sm`}
// //           >
// //             Conteúdo Detalhado do Supermódulo
// //           </h2>
// //           <p
// //             className={`text-lg max-w-3xl mx-auto ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"} transition-colors duration-500`}
// //           >
// //             Explore cada parte da aula com detalhes práticos e exemplos reais
// //           </p>
// //         </div>

// //         {/* Tab Navigation */}
// //         <div className="flex flex-wrap justify-center gap-4 mb-12">
// //           {Object.entries(courseContent).map(([key, content]) => {
// //             const IconComponent = content.icon
// //             return (
// //               <button
// //                 key={key}
// //                 onClick={() => setActiveTab(key)}
// //                 className={`flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 backdrop-blur-sm border-2 ${
// //                   activeTab === key
// //                     ? `${darkMode ? "bg-[#E07A5F]/20 border-[#E07A5F] text-[#F5F1EB]" : "bg-[#E07A5F]/20 border-[#E07A5F] text-[#2D5A4A]"}`
// //                     : `${darkMode ? "bg-[#F5F1EB]/10 border-[#F5F1EB]/20 text-[#F5F1EB]/70 hover:text-[#F5F1EB]" : "bg-white/50 border-white/30 text-[#2D5A4A]/70 hover:text-[#2D5A4A]"}`
// //                 } hover:scale-105 shadow-lg`}
// //               >
// //                 <IconComponent className="w-5 h-5" />
// //                 <span className="font-medium">{content.title}</span>
// //                 <div className="flex items-center gap-1 text-xs opacity-70">
// //                   <Clock className="w-3 h-3" />
// //                   {content.duration}
// //                 </div>
// //               </button>
// //             )
// //           })}
// //         </div>

// //         {/* ... existing code for tab content and all other sections ... */}
// //         <div className="space-y-8">
// //           {Object.entries(courseContent).map(([key, content]) => {
// //             if (activeTab !== key) return null
// //             const IconComponent = content.icon

// //             return (
// //               <div key={key} className="space-y-8">
// //                 <div className="text-center space-y-4">
// //                   <div className="flex items-center justify-center gap-4">
// //                     <div className="w-16 h-16 bg-gradient-to-br from-[#E07A5F] to-[#E07A5F]/70 rounded-full flex items-center justify-center shadow-lg">
// //                       <IconComponent className="w-8 h-8 text-white" />
// //                     </div>
// //                     <div className="text-left">
// //                       <h3 className={`text-2xl font-bold ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"}`}>
// //                         {content.title}
// //                       </h3>
// //                       <p className={`${darkMode ? "text-[#F5F1EB]/70" : "text-[#2D5A4A]/70"}`}>{content.description}</p>
// //                     </div>
// //                   </div>
// //                   {content.mainContent && (
// //                     <p className={`text-lg max-w-4xl mx-auto ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>
// //                       {content.mainContent}
// //                     </p>
// //                   )}
// //                 </div>

// //                 <div className="grid md:grid-cols-2 gap-6">
// //                   {content.topics.map((topic, topicIndex) => (
// //                     <Card
// //                       key={topicIndex}
// //                       className={`${darkMode ? "bg-[#F5F1EB]/10 backdrop-blur-md border-[#F5F1EB]/20" : "bg-white/80 backdrop-blur-md border-white/50"} shadow-lg transition-all duration-500 hover:scale-105 border-2 group`}
// //                     >
// //                       <CardContent className="p-6 space-y-4">
// //                         <div className="flex items-start gap-3">
// //                           <div className="w-8 h-8 bg-gradient-to-br from-[#E07A5F] to-[#E07A5F]/70 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
// //                             <span className="text-white font-bold text-sm">{topicIndex + 1}</span>
// //                           </div>
// //                           <div className="flex-1">
// //                             <h4
// //                               className={`font-semibold text-lg mb-2 ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"}`}
// //                             >
// //                               {topic.title}
// //                             </h4>
// //                             <p className={`text-sm mb-4 ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>
// //                               {topic.content}
// //                             </p>
// //                           </div>
// //                         </div>

// //                         <div className="flex flex-wrap gap-2">
// //                           {topic.highlights.map((highlight, highlightIndex) => (
// //                             <span
// //                               key={highlightIndex}
// //                               className="px-3 py-1 bg-[#E07A5F]/20 text-[#E07A5F] rounded-full text-xs font-medium backdrop-blur-sm"
// //                             >
// //                               {highlight}
// //                             </span>
// //                           ))}
// //                         </div>

// //                         {topic.details && (
// //                           <div className="space-y-2">
// //                             <button
// //                               onClick={() => toggleSection(`${key}-${topicIndex}`)}
// //                               className={`flex items-center gap-2 text-sm font-medium ${darkMode ? "text-[#F5F1EB]/70 hover:text-[#F5F1EB]" : "text-[#2D5A4A]/70 hover:text-[#2D5A4A]"} transition-colors`}
// //                             >
// //                               <ChevronRight
// //                                 className={`w-4 h-4 transition-transform ${expandedSection === `${key}-${topicIndex}` ? "rotate-90" : ""}`}
// //                               />
// //                               Ver detalhes
// //                             </button>

// //                             {expandedSection === `${key}-${topicIndex}` && (
// //                               <div className="space-y-2 pl-6 border-l-2 border-[#E07A5F]/30">
// //                                 {topic.details.map((detail, detailIndex) => (
// //                                   <div key={detailIndex} className="flex items-start gap-2">
// //                                     <div className="w-1.5 h-1.5 bg-[#E07A5F] rounded-full mt-2 flex-shrink-0"></div>
// //                                     <p className={`text-sm ${darkMode ? "text-[#F5F1EB]/70" : "text-[#2D5A4A]/70"}`}>
// //                                       {detail}
// //                                     </p>
// //                                   </div>
// //                                 ))}
// //                               </div>
// //                             )}
// //                           </div>
// //                         )}

// //                         {topic.example && (
// //                           <div className="mt-4 p-3 bg-[#2D5A4A]/10 rounded-lg">
// //                             <p className={`text-sm ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>
// //                               <strong>Exemplo:</strong> {topic.example}
// //                             </p>
// //                           </div>
// //                         )}

// //                         {topic.practicalTip && (
// //                           <div className="mt-4 p-3 bg-[#E07A5F]/10 rounded-lg">
// //                             <p className={`text-sm ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>
// //                               <strong>💡 Parte prática:</strong> {topic.practicalTip}
// //                             </p>
// //                           </div>
// //                         )}

// //                         {topic.tips && (
// //                           <div className="mt-4 space-y-2">
// //                             <h5 className={`text-sm font-medium ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"}`}>
// //                               Dicas:
// //                             </h5>
// //                             {topic.tips.map((tip, tipIndex) => (
// //                               <div key={tipIndex} className="flex items-start gap-2">
// //                                 <Star className="w-3 h-3 text-[#E07A5F] mt-1 flex-shrink-0" />
// //                                 <p className={`text-sm ${darkMode ? "text-[#F5F1EB]/70" : "text-[#2D5A4A]/70"}`}>
// //                                   {tip}
// //                                 </p>
// //                               </div>
// //                             ))}
// //                           </div>
// //                         )}
// //                       </CardContent>
// //                     </Card>
// //                   ))}
// //                 </div>

// //                 {/* ... existing code for special sections ... */}
// //                 {key === "parte2" && content.exerciseContent && (
// //                   <Card
// //                     className={`${darkMode ? "bg-[#F5F1EB]/10 backdrop-blur-md border-[#F5F1EB]/20" : "bg-white/80 backdrop-blur-md border-white/50"} shadow-lg border-2`}
// //                   >
// //                     <CardContent className="p-6">
// //                       <div className="flex items-center gap-3 mb-4">
// //                         <CheckCircle className="w-6 h-6 text-[#E07A5F]" />
// //                         <h4 className={`text-xl font-semibold ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"}`}>
// //                           {content.exerciseContent.title}
// //                         </h4>
// //                       </div>
// //                       <p className={`text-sm mb-4 ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>
// //                         <strong>Atividade:</strong> {content.exerciseContent.description}
// //                       </p>
// //                       <div className="space-y-2 mb-4">
// //                         {content.exerciseContent.examples.map((example, index) => (
// //                           <div key={index} className="flex items-start gap-2">
// //                             <div className="w-1.5 h-1.5 bg-[#E07A5F] rounded-full mt-2 flex-shrink-0"></div>
// //                             <p className={`text-sm ${darkMode ? "text-[#F5F1EB]/70" : "text-[#2D5A4A]/70"}`}>
// //                               {example}
// //                             </p>
// //                           </div>
// //                         ))}
// //                       </div>
// //                       <p className={`text-sm mb-2 ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>
// //                         <strong>Pergunta:</strong> {content.exerciseContent.question}
// //                       </p>
// //                       <div className="p-3 bg-[#E07A5F]/10 rounded-lg">
// //                         <p className={`text-sm ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>
// //                           <strong>💡 Parte prática:</strong> {content.exerciseContent.practicalTip}
// //                         </p>
// //                       </div>
// //                     </CardContent>
// //                   </Card>
// //                 )}

// //                 {key === "parte3" && content.practicalActivity && (
// //                   <Card
// //                     className={`${darkMode ? "bg-[#F5F1EB]/10 backdrop-blur-md border-[#F5F1EB]/20" : "bg-white/80 backdrop-blur-md border-white/50"} shadow-lg border-2`}
// //                   >
// //                     <CardContent className="p-6">
// //                       <div className="flex items-center gap-3 mb-4">
// //                         <PenTool className="w-6 h-6 text-[#E07A5F]" />
// //                         <h4 className={`text-xl font-semibold ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"}`}>
// //                           {content.practicalActivity.title}
// //                         </h4>
// //                       </div>
// //                       <p className={`text-sm mb-4 ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>
// //                         {content.practicalActivity.description}
// //                       </p>
// //                       <div className="grid md:grid-cols-2 gap-4 mb-4">
// //                         <div className="p-3 bg-[#E07A5F]/10 rounded-lg">
// //                           <p className={`text-sm ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>
// //                             <strong>Paleta:</strong> {content.practicalActivity.palette}
// //                           </p>
// //                         </div>
// //                         <div className="p-3 bg-[#2D5A4A]/10 rounded-lg">
// //                           <p className={`text-sm ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>
// //                             <strong>Fontes:</strong> {content.practicalActivity.fonts}
// //                           </p>
// //                         </div>
// //                       </div>
// //                       <div className="space-y-4">
// //                         {content.practicalActivity.sections.map((section, index) => (
// //                           <div key={index} className="border-l-4 border-[#E07A5F]/30 pl-4">
// //                             <h5 className={`font-medium mb-2 ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"}`}>
// //                               {section.name}
// //                             </h5>
// //                             <div className="space-y-1">
// //                               {section.steps.map((step, stepIndex) => (
// //                                 <div key={stepIndex} className="flex items-start gap-2">
// //                                   <span className="text-[#E07A5F] font-bold text-xs mt-1">{stepIndex + 1}.</span>
// //                                   <p className={`text-sm ${darkMode ? "text-[#F5F1EB]/70" : "text-[#2D5A4A]/70"}`}>
// //                                     {step}
// //                                   </p>
// //                                 </div>
// //                               ))}
// //                             </div>
// //                           </div>
// //                         ))}
// //                       </div>
// //                       <div className="mt-4 p-3 bg-[#E07A5F]/10 rounded-lg">
// //                         <p className={`text-sm ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>
// //                           <strong>💡 Parte prática:</strong> {content.practicalActivity.practicalTip}
// //                         </p>
// //                       </div>
// //                     </CardContent>
// //                   </Card>
// //                 )}

// //                 {key === "parte4" && content.guidedPractice && (
// //                   <Card
// //                     className={`${darkMode ? "bg-[#F5F1EB]/10 backdrop-blur-md border-[#F5F1EB]/20" : "bg-white/80 backdrop-blur-md border-white/50"} shadow-lg border-2`}
// //                   >
// //                     <CardContent className="p-6">
// //                       <div className="flex items-center gap-3 mb-4">
// //                         <Layout className="w-6 h-6 text-[#E07A5F]" />
// //                         <h4 className={`text-xl font-semibold ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"}`}>
// //                           {content.guidedPractice.title}
// //                         </h4>
// //                       </div>
// //                       <p className={`text-sm mb-6 ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>
// //                         {content.guidedPractice.description}
// //                       </p>
// //                       <div className="grid md:grid-cols-2 gap-6">
// //                         {content.guidedPractice.sections.map((section, index) => (
// //                           <div key={index} className="space-y-3">
// //                             <h5 className={`font-medium ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"}`}>
// //                               {section.name}
// //                             </h5>
// //                             <div className="space-y-2">
// //                               {section.details.map((detail, detailIndex) => (
// //                                 <div key={detailIndex} className="flex items-start gap-2">
// //                                   <div className="w-1.5 h-1.5 bg-[#E07A5F] rounded-full mt-2 flex-shrink-0"></div>
// //                                   <p className={`text-sm ${darkMode ? "text-[#F5F1EB]/70" : "text-[#2D5A4A]/70"}`}>
// //                                     {detail}
// //                                   </p>
// //                                 </div>
// //                               ))}
// //                             </div>
// //                           </div>
// //                         ))}
// //                       </div>
// //                       <div className="mt-6 p-3 bg-[#E07A5F]/10 rounded-lg">
// //                         <p className={`text-sm ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>
// //                           <strong>💡 Parte prática:</strong> {content.guidedPractice.practicalTip}
// //                         </p>
// //                       </div>
// //                     </CardContent>
// //                   </Card>
// //                 )}
// //               </div>
// //             )
// //           })}
// //         </div>
// //       </section>

// //       <section className="relative z-20 max-w-7xl mx-auto px-6 py-20">
// //         <div className="grid lg:grid-cols-2 gap-16 items-center">
// //           <div className="space-y-8">
// //             <h2
// //               className={`text-4xl font-bold ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"} transition-colors duration-500 drop-shadow-sm`}
// //             >
// //               Por que escolher este
// //               <br />
// //               <span className="text-[#E07A5F] drop-shadow-lg">Supermódulo?</span>
// //             </h2>
// //             <p
// //               className={`text-lg ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"} transition-colors duration-500`}
// //             >
// //               Uma abordagem prática e direta para dominar os fundamentos do design, com foco total no seu aprendizado e
// //               aplicação imediata.
// //             </p>

// //             <div className="grid gap-4">
// //               {[
// //                 { icon: Target, text: "Metodologia prática sem enrolação", color: "from-blue-500/20 to-cyan-500/20" },
// //                 {
// //                   icon: Play,
// //                   text: "Exercícios hands-on durante a aula",
// //                   color: "from-green-500/20 to-emerald-500/20",
// //                 },
// //                 { icon: Users, text: "Suporte completo para dúvidas", color: "from-purple-500/20 to-pink-500/20" },
// //                 { icon: BookOpen, text: "Material de apoio incluso", color: "from-orange-500/20 to-red-500/20" },
// //                 { icon: Award, text: "Certificado de participação", color: "from-yellow-500/20 to-orange-500/20" },
// //               ].map((benefit, index) => (
// //                 <div key={index} className="group relative">
// //                   <div
// //                     className={`absolute -inset-2 bg-gradient-to-r ${benefit.color} rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
// //                   ></div>
// //                   <div
// //                     className={`relative flex items-center gap-4 p-4 rounded-xl ${darkMode ? "bg-[#F5F1EB]/10 backdrop-blur-md" : "bg-white/50 backdrop-blur-md"} transition-all duration-300 group-hover:scale-105`}
// //                   >
// //                     <div className="w-10 h-10 bg-gradient-to-br from-[#E07A5F] to-[#E07A5F]/70 rounded-full flex items-center justify-center shadow-lg">
// //                       <benefit.icon className="w-5 h-5 text-white" />
// //                     </div>
// //                     <span
// //                       className={`font-medium ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"} transition-colors duration-300`}
// //                     >
// //                       {benefit.text}
// //                     </span>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>

// //           <div className="grid grid-cols-2 gap-6">
// //             {[
// //               { number: "3h", label: "Duração Total", icon: Clock, gradient: "from-blue-500/20 to-cyan-500/20" },
// //               { number: "100%", label: "Prático", icon: Target, gradient: "from-green-500/20 to-emerald-500/20" },
// //               { number: "1", label: "Projeto Real", icon: Code, gradient: "from-purple-500/20 to-pink-500/20" },
// //               { number: "∞", label: "Suporte", icon: Users, gradient: "from-orange-500/20 to-red-500/20" },
// //             ].map((stat, index) => (
// //               <div key={index} className="relative group">
// //                 <div
// //                   className={`absolute -inset-2 bg-gradient-to-r ${stat.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
// //                 ></div>

// //                 <Card
// //                   className={`relative ${darkMode ? "bg-[#F5F1EB]/10 backdrop-blur-md border-[#F5F1EB]/20" : "bg-white/80 backdrop-blur-md border-white/50"} shadow-lg transition-all duration-500 transform hover:scale-105 border-2`}
// //                 >
// //                   <CardContent className="p-6 text-center space-y-3">
// //                     <div className="w-12 h-12 bg-gradient-to-br from-[#E07A5F] to-[#E07A5F]/70 rounded-full flex items-center justify-center mx-auto shadow-lg">
// //                       <stat.icon className="w-6 h-6 text-white drop-shadow-sm" />
// //                     </div>
// //                     <div
// //                       className={`text-2xl font-bold ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"} drop-shadow-sm`}
// //                     >
// //                       {stat.number}
// //                     </div>
// //                     <div className={`text-sm ${darkMode ? "text-[#F5F1EB]/70" : "text-[#2D5A4A]/70"}`}>
// //                       {stat.label}
// //                     </div>
// //                   </CardContent>
// //                 </Card>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       <section className="relative z-20 max-w-7xl mx-auto px-6 py-20">
// //         <div className="text-center mb-12">
// //           <h2
// //             className={`text-4xl font-bold mb-6 ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"} transition-colors duration-500 drop-shadow-sm`}
// //           >
// //             Resumo da Jornada
// //           </h2>
// //           <p
// //             className={`text-lg max-w-3xl mx-auto ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"} transition-colors duration-500`}
// //           >
// //             O que você vai dominar ao final do supermódulo
// //           </p>
// //         </div>

// //         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
// //           {[
// //             {
// //               title: "Landing Pages",
// //               description: "Elementos essenciais e estrutura que converte",
// //               icon: Lightbulb,
// //               points: ["Hero Section", "Benefícios", "Prova Social", "CTA eficaz"],
// //             },
// //             {
// //               title: "Design Visual",
// //               description: "Princípios que criam páginas profissionais",
// //               icon: Palette,
// //               points: ["Hierarquia", "Espaçamento", "Cores", "Tipografia"],
// //             },
// //             {
// //               title: "Figma Prático",
// //               description: "Domínio das ferramentas essenciais",
// //               icon: Monitor,
// //               points: ["Frames", "Grid System", "Componentes", "Exportação"],
// //             },
// //             {
// //               title: "Wireframe Real",
// //               description: "Projeto completo do zero ao fim",
// //               icon: PenTool,
// //               points: ["Estrutura", "Placeholders", "Organização", "Finalização"],
// //             },
// //           ].map((item, index) => (
// //             <Card
// //               key={index}
// //               className={`${darkMode ? "bg-[#F5F1EB]/10 backdrop-blur-md border-[#F5F1EB]/20" : "bg-white/80 backdrop-blur-md border-white/50"} shadow-lg transition-all duration-500 hover:scale-105 border-2 group`}
// //             >
// //               <CardContent className="p-6 space-y-4">
// //                 <div className="w-12 h-12 bg-gradient-to-br from-[#E07A5F] to-[#E07A5F]/70 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
// //                   <item.icon className="w-6 h-6 text-white" />
// //                 </div>
// //                 <div className="text-center space-y-2">
// //                   <h3 className={`font-semibold text-lg ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"}`}>
// //                     {item.title}
// //                   </h3>
// //                   <p className={`text-sm ${darkMode ? "text-[#F5F1EB]/70" : "text-[#2D5A4A]/70"}`}>
// //                     {item.description}
// //                   </p>
// //                 </div>
// //                 <div className="space-y-2">
// //                   {item.points.map((point, pointIndex) => (
// //                     <div key={pointIndex} className="flex items-center gap-2">
// //                       <Star className="w-3 h-3 text-[#E07A5F] flex-shrink-0" />
// //                       <span className={`text-xs ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>{point}</span>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </CardContent>
// //             </Card>
// //           ))}
// //         </div>

// //         <div className="grid md:grid-cols-2 gap-8 mb-12">
// //           <Card
// //             className={`${darkMode ? "bg-[#F5F1EB]/10 backdrop-blur-md border-[#F5F1EB]/20" : "bg-white/80 backdrop-blur-md border-white/50"} shadow-lg border-2`}
// //           >
// //             <CardContent className="p-6">
// //               <h3 className={`text-xl font-semibold mb-4 ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"}`}>
// //                 Pontos-Chave da Aula
// //               </h3>
// //               <div className="space-y-4">
// //                 {summaryContent.keyPoints.map((point, index) => (
// //                   <div key={index} className="border-l-4 border-[#E07A5F]/30 pl-4">
// //                     <h4 className={`font-medium text-sm mb-1 ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"}`}>
// //                       {point.part}
// //                     </h4>
// //                     <p className={`text-sm ${darkMode ? "text-[#F5F1EB]/70" : "text-[#2D5A4A]/70"}`}>{point.content}</p>
// //                   </div>
// //                 ))}
// //               </div>
// //             </CardContent>
// //           </Card>

// //           <Card
// //             className={`${darkMode ? "bg-[#F5F1EB]/10 backdrop-blur-md border-[#F5F1EB]/20" : "bg-white/80 backdrop-blur-md border-white/50"} shadow-lg border-2`}
// //           >
// //             <CardContent className="p-6">
// //               <h3 className={`text-xl font-semibold mb-4 ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"}`}>
// //                 Interação com a Turma
// //               </h3>
// //               <div className="space-y-4">
// //                 <div className="p-4 bg-[#E07A5F]/10 rounded-lg">
// //                   <h4 className={`font-medium text-sm mb-2 ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"}`}>
// //                     Pergunta para discussão:
// //                   </h4>
// //                   <p className={`text-sm ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>
// //                     "{summaryContent.interactionQuestion}"
// //                   </p>
// //                 </div>
// //                 <div className="p-4 bg-[#2D5A4A]/10 rounded-lg">
// //                   <h4 className={`font-medium text-sm mb-2 ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"}`}>
// //                     💡 Atividade prática:
// //                   </h4>
// //                   <p className={`text-sm ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>
// //                     {summaryContent.practicalTip}
// //                   </p>
// //                 </div>
// //               </div>
// //             </CardContent>
// //           </Card>
// //         </div>

// //         <Card
// //           className={`${darkMode ? "bg-[#F5F1EB]/10 backdrop-blur-md border-[#F5F1EB]/20" : "bg-white/80 backdrop-blur-md border-white/50"} shadow-lg border-2`}
// //         >
// //           <CardContent className="p-6">
// //             <h3 className={`text-xl font-semibold mb-4 ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"}`}>
// //               Landing Pages de Referência
// //             </h3>
// //             <p className={`text-sm mb-6 ${darkMode ? "text-[#F5F1EB]/70" : "text-[#2D5A4A]/70"}`}>
// //               Exemplos de landing pages bem feitas para análise e inspiração
// //             </p>
// //             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
// //               {summaryContent.usefulLinks.map((link, index) => (
// //                 <a
// //                   key={index}
// //                   href={link.url}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className={`flex items-center gap-3 p-4 rounded-lg transition-all duration-300 hover:scale-105 ${darkMode ? "bg-[#F5F1EB]/5 hover:bg-[#F5F1EB]/10" : "bg-white/30 hover:bg-white/50"} border border-white/20`}
// //                 >
// //                   <div className="w-8 h-8 bg-gradient-to-br from-[#E07A5F] to-[#E07A5F]/70 rounded-full flex items-center justify-center shadow-md">
// //                     <ExternalLink className="w-4 h-4 text-white" />
// //                   </div>
// //                   <div className="flex-1">
// //                     <h4 className={`font-medium text-sm ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"}`}>
// //                       {link.name}
// //                     </h4>
// //                     <p className={`text-xs ${darkMode ? "text-[#F5F1EB]/70" : "text-[#2D5A4A]/70"}`}>
// //                       {link.description}
// //                     </p>
// //                   </div>
// //                 </a>
// //               ))}
// //             </div>
// //           </CardContent>
// //         </Card>
// //       </section>

// //       <footer className="relative z-20 max-w-7xl mx-auto px-6 py-12 text-center">
// //         <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8">
// //           <p
// //             className={`text-sm ${darkMode ? "text-[#F5F1EB]/60" : "text-[#2D5A4A]/60"} transition-colors duration-500`}
// //           >
// //             © 2024 Nathalia Macedo - Supermódulo Creative Code UX/UI Design
// //           </p>
// //         </div>
// //       </footer>
// //     </div>
// //   )
// // }



// "use client"

// import { useState, useEffect } from "react"
// import {
//   Moon,
//   Sun,
//   ArrowLeft,
//   Users,
//   Clock,
//   Target,
//   Lightbulb,
//   Code,
//   Palette,
//   CheckCircle,
//   Award,
//   Monitor,
//   PenTool,
//   ChevronRight,
//   Play,
//   BookOpen,
//   Star,
//   Layout,
//   ExternalLink,
// } from "lucide-react"

// const Button = ({ children, variant = "default", className = "", onClick, ...props }) => {
//   const baseClasses =
//     "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background"
//   const variants = {
//     default: "bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4",
//     ghost: "hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4",
//   }

//   return (
//     <button className={`${baseClasses} ${variants[variant]} ${className}`} onClick={onClick} {...props}>
//       {children}
//     </button>
//   )
// }

// const Card = ({ children, className = "", ...props }) => {
//   return (
//     <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`} {...props}>
//       {children}
//     </div>
//   )
// }

// const CardContent = ({ children, className = "", ...props }) => {
//   return (
//     <div className={`p-6 ${className}`} {...props}>
//       {children}
//     </div>
//   )
// }

// export default function SupermoduloCreativeCode() {
//   const [darkMode, setDarkMode] = useState(false)
//   const [activeTab, setActiveTab] = useState("parte1")
//   const [expandedSection, setExpandedSection] = useState(null)

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add("dark")
//     } else {
//       document.documentElement.classList.remove("dark")
//     }
//   }, [darkMode])

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode)
//   }

//   const toggleSection = (section) => {
//     setExpandedSection(expandedSection === section ? null : section)
//   }

//   const courseContent = {
//     parte1: {
//       title: "O que é uma Landing Page?",
//       icon: Lightbulb,
//       duration: "30 min",
//       description: "Fundamentos e elementos essenciais",
//       mainContent:
//         "Uma landing page é uma página na internet criada com um único propósito: convencer o visitante a realizar uma ação específica. Diferente de um site que pode ter várias funções, a landing page é focada e direta.",
//       topics: [
//         {
//           title: "Conceito Principal",
//           content:
//             "Uma landing page é uma página na internet criada com um único propósito: convencer o visitante a realizar uma ação específica.",
//           highlights: ["Objetivo único", "Simplicidade", "Foco na conversão"],
//           details: [
//             "Fazer o visitante clicar, comprar, preencher um formulário ou se inscrever",
//             "Poucas distrações, conteúdo claro e visual limpo",
//             "Tudo guia o visitante até a ação desejada",
//           ],
//         },
//         {
//           title: "Características Essenciais",
//           content: "Diferente de um site que pode ter várias funções, a landing page é focada e direta.",
//           highlights: ["Poucas distrações", "Conteúdo claro", "Visual limpo"],
//           details: ["Objetivo único bem definido", "Simplicidade na apresentação", "Foco total na conversão"],
//         },
//         {
//           title: "Exemplo Prático",
//           content:
//             "Página de um curso de fotografia com título claro, benefícios rápidos e um botão grande 'Quero me inscrever!'.",
//           highlights: ["Título claro", "Benefícios rápidos", "CTA destacado"],
//           details: [
//             "Hero section com proposta de valor clara",
//             "Benefícios apresentados de forma visual",
//             "Call-to-action proeminente e direto",
//           ],
//         },
//       ],
//     },
//     parte2: {
//       title: "Princípios Básicos de Design",
//       icon: Palette,
//       duration: "45 min",
//       description: "Hierarquia, cores, tipografia e espaçamento",
//       mainContent:
//         "Compreenda os fundamentos que tornam uma landing page visualmente atraente, organizada e confiável.",
//       topics: [
//         {
//           title: "Hierarquia Visual",
//           content: "Organiza elementos para guiar o olhar do visitante. O mais importante deve ser mais chamativo.",
//           highlights: ["Tamanho", "Posição", "Contraste"],
//           details: [
//             "Títulos e botões de CTA maiores (ex.: 'Aprenda Inglês Hoje!')",
//             "Elementos importantes no topo ou centro",
//             "Cores ou estilos contrastantes (ex.: botão laranja em fundo claro)",
//             "Exemplo: Na landing page do Netflix, o botão 'Assine agora' é grande, vermelho e centralizado",
//           ],
//           practicalTip:
//             "Mostre a landing page do Airbnb e aponte o título grande, botão destacado e textos menores. Pergunte: 'O que você viu primeiro? Por quê?'",
//         },
//         {
//           title: "Espaçamento",
//           content: "Uso de espaço em branco para organizar a página e evitar poluição visual.",
//           highlights: ["Margens e padding", "Agrupamento", "Equilíbrio"],
//           details: [
//             "Espaço ao redor de textos e botões",
//             "Elementos relacionados mais próximos, seções separadas",
//             "Evite encher a página para manter clareza",
//             "Exemplo: Na landing page do Dropbox, o espaço em branco entre título e botão facilita a leitura",
//           ],
//           practicalTip:
//             "Mostre a landing page do Dropbox e compare com uma página fictícia sobrecarregada. Destaque como o espaço facilita a leitura.",
//         },
//         {
//           title: "Cores",
//           content: "Cores criam emoção, destacam elementos e garantem legibilidade.",
//           highlights: ["Cor principal", "Cores de apoio", "Contraste"],
//           details: [
//             "Use uma cor forte (ex.: laranja #E07A5F) para botões e títulos",
//             "1-2 cores complementares (ex.: verde #2D5A4A) para ícones",
//             "Texto legível contra o fundo (ex.: #13231C em #F5F1EB)",
//             "Exemplo: No Duolingo, o verde é usado para botões, com fundo neutro para contraste",
//           ],
//           practicalTip:
//             "Mostre a paleta do Duolingo e um exemplo ruim (texto claro em fundo claro). Pergunte: 'Conseguem ler isso facilmente?'",
//         },
//         {
//           title: "Tipografia",
//           content: "Escolha de fontes para clareza e hierarquia.",
//           highlights: ["Máximo 2 fontes", "Pesos diferentes", "Tamanho/espaçamento"],
//           details: [
//             "Ex.: Montserrat para títulos, Open Sans para textos",
//             "Negrito para títulos, regular para parágrafos",
//             "Títulos grandes, textos com linha alta",
//             "Exemplo: No Spotify, títulos são bold e grandes, parágrafos menores e regulares",
//           ],
//           practicalTip:
//             "Mostre a tipografia do Spotify e um exemplo com 3+ fontes misturadas. Pergunte: 'Isso parece organizado?'",
//         },
//       ],
//       exerciseContent: {
//         title: "Exercício Rápido",
//         description: "Mostre duas landing pages:",
//         examples: [
//           "Página poluída: Texto amontoado, várias cores, fontes diferentes, sem espaço",
//           "Página organizada: Hierarquia clara, espaçamento adequado, cores simples (ex.: Dropbox ou Airbnb)",
//         ],
//         question: "Qual parece mais confiável? Por quê?",
//         practicalTip:
//           "Peça aos alunos para apontarem o que torna a página organizada mais atraente (ex.: espaçamento, cores, texto).",
//       },
//     },
//     parte3: {
//       title: "Conhecendo o Figma",
//       icon: Monitor,
//       duration: "30 min",
//       description: "Ferramentas e funcionalidades básicas",
//       mainContent:
//         "Apresentar o Figma como ferramenta gratuita para design de interfaces, ensinar os básicos de navegação e uso de ferramentas simples, e aplicar os conceitos das Partes 1 e 2 em uma atividade prática.",
//       topics: [
//         {
//           title: "O que é o Figma?",
//           content:
//             "O Figma é uma ferramenta online gratuita para criar designs de interfaces, como landing pages, apps e sites.",
//           highlights: ["Gratuito", "Online", "Colaborativo"],
//           details: [
//             "Permite trabalhar em tempo real e colaborar com outras pessoas",
//             "Acessível pelo navegador (sem precisar instalar nada)",
//             "Versão gratuita com recursos suficientes para iniciantes",
//             "Fácil de aprender e usar",
//             "Integra conceitos de design (hierarquia, cores, espaçamento) diretamente na criação",
//           ],
//           example:
//             "Designers usam o Figma para prototipar landing pages como a do Duolingo, onde definem cores, fontes e layouts antes de codificar.",
//           practicalTip:
//             "Abra o navegador e acesse figma.com. Mostre a página inicial e destaque como é simples começar.",
//         },
//         {
//           title: "Criando uma Conta",
//           content: "Processo simples de cadastro e primeiros passos na plataforma.",
//           highlights: ["figma.com", "Sign up", "Dashboard"],
//           details: [
//             "Abra o navegador e vá para figma.com",
//             "Na página inicial, clique no botão 'Sign up' (no canto superior direito)",
//             "Escolha 'Continue with Google' (se tiver conta Google) ou preencha com e-mail, nome e senha",
//             "Clique em 'Create account'",
//             "Verifique o e-mail (se necessário) e confirme a conta",
//             "Após login, você será direcionado para o dashboard do Figma",
//           ],
//           tips: [
//             "A conta gratuita permite ilimitados arquivos pessoais e colaboração básica",
//             "Se já tiver conta, clique em 'Log in' e entre",
//           ],
//           practicalTip:
//             "Peça aos alunos para criarem suas contas agora. Circule pela sala para ajudar quem tiver dúvidas. Mostre seu dashboard no projetor.",
//         },
//         {
//           title: "Ferramentas Básicas",
//           content: "Navegação e uso das principais funcionalidades para iniciantes.",
//           highlights: ["Frame", "Grid", "Ferramentas"],
//           details: [
//             "1. CRIAR FRAME: Clique no ícone 'Frame' na barra de ferramentas (ou tecle F) → Arraste na tela para criar um retângulo → No painel direito, defina tamanho exato (ex: 1440x800px)",
//             "2. ADICIONAR GRID: Com o Frame selecionado → Painel direito 'Design' → Clique '+' ao lado de 'Layout Grid' → Escolha 'Columns' → Configure: Count: 12, Gutter: 20px, Margin: 80px",
//             "3. CRIAR RETÂNGULO: Clique no ícone quadrado na barra (ou tecle R) → Arraste para desenhar → No painel direito 'Fill', clique na cor para alterar → Digite código hex (ex: #E07A5F)",
//             "4. ADICIONAR TEXTO: Clique no ícone 'T' na barra → Clique onde quer o texto → Digite o conteúdo → No painel direito: Text → Família da fonte → Tamanho → Peso (Bold/Regular)",
//             "5. ALINHAR ELEMENTOS: Selecione o elemento → Painel direito → Seção 'Align' → Clique nos ícones de alinhamento (centro, esquerda, direita, meio vertical)",
//             "6. COPIAR ELEMENTOS: Selecione → Ctrl+C → Ctrl+V → Arraste para nova posição",
//             "7. AGRUPAR ELEMENTOS: Selecione múltiplos (Shift+clique) → Ctrl+G para agrupar → Facilita mover conjunto",
//           ],
//           practicalTip:
//             "No projetor, demonstre cada ferramenta: crie Frame, adicione grid, desenhe retângulo colorido, adicione texto e alinhe. Peça aos alunos para replicarem passo a passo em suas contas.",
//         },
//       ],
//       practicalActivity: {
//         title: "Atividade Prática: Criar Hero Section e Sessão de Benefícios",
//         description:
//           "Usando conceitos das Partes 1 e 2, crie uma landing page fictícia para um 'Curso de Fotografia Online'.",
//         palette: "Principal #E07A5F (laranja), apoio #2D5A4A (verde), neutro #F5F1EB (bege) e texto #13231C",
//         fonts: "Montserrat (títulos, bold) e Open Sans (textos, regular)",
//         sections: [
//           {
//             name: "Hero Section",
//             steps: [
//               "1. CRIAR FRAME: Barra de ferramentas → Clique 'Frame' (ou F) → Arraste retângulo na tela → Painel direito: W: 1440, H: 600",
//               "2. GRID: Frame selecionado → Painel direito 'Design' → '+' em Layout Grid → Columns → Count: 12, Gutter: 20, Margin: 80",
//               "3. FUNDO: Barra → Retângulo (R) → Arraste cobrindo todo Frame → Painel direito Fill → Clique cor → Digite #F5F1EB",
//               "4. TÍTULO: Barra → Texto (T) → Clique no Frame → Digite 'Aprenda Fotografia Profissional' → Painel direito: Montserrat, 48px, Bold → Fill: #13231C",
//               "5. SUBTÍTULO: Texto (T) → Clique abaixo título → 'Capture momentos incríveis em 4 semanas' → 24px, Regular → Fill: #13231C, Opacity: 70%",
//               "6. BOTÃO: Retângulo (R) → 200x50px → Fill: #E07A5F → Corner radius: 8px → Texto (T) sobre botão → 'Começar Agora' → Branco, Bold",
//               "7. IMAGEM: Retângulo (R) → 400x300px → Posicione à direita usando grid → Fill: #2D5A4A → Texto 'Imagem aqui' centralizado",
//             ],
//           },
//           {
//             name: "Sessão de Benefícios",
//             steps: [
//               "1. NOVO FRAME: Frame (F) → 1440x400px → Posicione abaixo do Hero",
//               "2. FUNDO: Retângulo (R) cobrindo Frame → Fill: #FFFFFF ou #F9F9F9",
//               "3. TÍTULO: Texto (T) → 'Por Que Escolher Nosso Curso?' → 36px, Bold, centralizado → 40px do topo",
//               "4. PRIMEIRO BENEFÍCIO: Coluna 2-4 do grid → Retângulo ícone 50x50px (#2D5A4A) → Texto 'Aprenda no seu ritmo' (18px, Bold) → Descrição 'Aulas flexíveis' (14px)",
//               "5. SEGUNDO BENEFÍCIO: Coluna 5-7 → Repetir estrutura → 'Suporte completo' → 'Tire dúvidas a qualquer momento'",
//               "6. TERCEIRO BENEFÍCIO: Coluna 9-11 → Repetir estrutura → 'Certificado' → 'Comprove suas habilidades'",
//               "7. ALINHAMENTO: Selecionar todos elementos de cada coluna → Agrupar (Ctrl+G) → Alinhar ao centro da coluna",
//             ],
//           },
//         ],
//         practicalTip:
//           "Circule pela sala para ajudar. No projetor, demonstre cada passo e peça para alunos compartilharem suas telas.",
//       },
//     },
//     parte4: {
//       title: "Criando o Wireframe",
//       icon: PenTool,
//       duration: "60 min",
//       description: "Prática guiada de estruturação visual",
//       mainContent:
//         "Entender o conceito de wireframe como esqueleto simples de uma landing page e criar um no Figma, aplicando os conceitos das partes anteriores.",
//       topics: [
//         {
//           title: "O que é Wireframe?",
//           content:
//             "Um wireframe é um rascunho simples da estrutura da página, como um mapa ou esqueleto, sem cores, imagens ou detalhes visuais.",
//           highlights: ["Estrutura", "Organização", "Planejamento"],
//           details: [
//             "Foca apenas na organização dos elementos (posição, tamanho e fluxo)",
//             "Ajuda a visualizar a hierarquia e o fluxo sem distrações",
//             "Facilita ajustes iniciais antes de investir tempo em cores e fontes",
//             "Integra conceitos de design (hierarquia, espaçamento) de forma básica",
//           ],
//           example:
//             "Pense em um blueprint de uma casa – o wireframe é isso para uma landing page, mostrando onde fica o Hero, Benefícios, etc., sem 'decoração'.",
//           practicalTip:
//             "No projetor, mostre um exemplo de wireframe simples (retângulos cinza com texto genérico) comparado a uma landing page final (ex.: Dropbox wireframe vs. versão real).",
//         },
//         {
//           title: "Preparação",
//           content: "Configuração inicial do Figma para criar wireframes eficientes.",
//           highlights: ["Paleta cinza", "Frame desktop", "Grid system"],
//           details: [
//             "Use cinza claro (#F0F0F0) para fundos",
//             "Cinza médio (#CCCCCC) para bordas",
//             "Texto em cinza escuro (#333333)",
//             "Fontes genéricas: Use a padrão do Figma (Inter ou similar)",
//             "Tamanho do Frame: Desktop padrão (1440px largura, altura variável por seção)",
//           ],
//         },
//         {
//           title: "Prática Guiada",
//           content: "Criação passo a passo de um wireframe completo para landing page.",
//           highlights: ["Hero", "Benefícios", "Depoimentos", "CTA", "Rodapé"],
//           details: [
//             "Usar retângulos como placeholders para seções",
//             "Texto genérico ('Título aqui', 'Botão aqui')",
//             "Espaçamento uniforme (40px interno, 80px entre seções)",
//             "Placeholders para imagens com bordas pontilhadas",
//           ],
//         },
//       ],
//       guidedPractice: {
//         title: "Prática Guiada: Criando o Wireframe Completo",
//         description:
//           "Criaremos o wireframe para uma landing page fictícia 'Curso de Fotografia Online', usando placeholders simples.",
//         sections: [
//           {
//             name: "Hero com título, texto e botão",
//             details: [
//               "1. FRAME HERO: Frame (F) → 1440x600px → Painel direito: Fill #F0F0F0, Stroke #CCCCCC (1px)",
//               "2. TÍTULO PLACEHOLDER: Texto (T) → Clique 100px do topo, centro → 'TÍTULO PRINCIPAL AQUI' → 48px, Bold → Align: Center",
//               "3. SUBTÍTULO: Texto (T) → 20px abaixo título → 'Subtítulo descritivo aqui' → 24px, Regular → Center",
//               "4. BOTÃO: Retângulo (R) → 200x50px → 40px abaixo subtítulo → Center → Stroke #CCCCCC → Texto 'BOTÃO' centralizado",
//               "5. IMAGEM PLACEHOLDER: Retângulo (R) → 600x400px → Alinhar grid colunas 7-12 → Fill #E0E0E0 → Texto 'IMAGEM' centro",
//               "6. VERIFICAR: Todos elementos alinhados ao grid → Espaçamentos consistentes → Hierarquia visual clara",
//             ],
//           },
//           {
//             name: "Sessão de Benefícios",
//             details: [
//               "1. FRAME SEÇÃO: Frame (F) → 1440x400px → Abaixo Hero → Fill #F0F0F0, Stroke #CCCCCC",
//               "2. TÍTULO SEÇÃO: Texto (T) → 'BENEFÍCIOS AQUI' → 36px, Bold → Centro, 40px do topo",
//               "3. BLOCO 1: Retângulo 400x200px → Grid colunas 2-4 → Stroke #CCCCCC → Ícone placeholder 50x50px (#CCCCCC) → Título 'BENEFÍCIO 1' → Texto 'Descrição aqui'",
//               "4. BLOCO 2: Copiar Bloco 1 (Ctrl+C, Ctrl+V) → Posicionar colunas 5-7 → Alterar texto 'BENEFÍCIO 2'",
//               "5. BLOCO 3: Copiar → Colunas 9-11 → 'BENEFÍCIO 3'",
//               "6. ALINHAMENTO: Verificar espaçamento igual entre blocos → Alinhar elementos internos → Consistência visual",
//             ],
//           },
//           {
//             name: "Sessão de Depoimentos",
//             details: [
//               "1. FRAME: 1440x300px → Fill #F0F0F0, Stroke #CCCCCC",
//               "2. TÍTULO: 'DEPOIMENTOS' → 36px, Bold, centro, 40px topo",
//               "3. DEPOIMENTO 1: Retângulo 600x150px → Grid colunas 2-6 → Stroke #CCCCCC → Texto 'Depoimento do cliente aqui...' (16px, itálico) → Nome 'NOME CLIENTE' abaixo",
//               "4. DEPOIMENTO 2: Retângulo 600x150px → Colunas 8-12 → Mesma estrutura",
//               "5. ESPAÇAMENTO: 40px entre depoimentos → Alinhamento vertical → Padding interno consistente",
//             ],
//           },
//           {
//             name: "CTA final e Rodapé",
//             details: [
//               "1. CTA FRAME: 1440x200px → Fill #F0F0F0, Stroke #CCCCCC",
//               "2. TÍTULO CTA: 'CHAMADA FINAL AQUI' → 36px, Bold, centro",
//               "3. BOTÃO CTA: Retângulo 200x50px → Centro → Stroke #CCCCCC → Texto 'AÇÃO'",
//               "4. RODAPÉ FRAME: 1440x100px → Fill #E0E0E0, Stroke #CCCCCC",
//               "5. LINKS ESQUERDA: Texto 'Links • Sobre • Contato' → 16px, esquerda, 20px da borda",
//               "6. INFO DIREITA: Texto 'Copyright • Redes Sociais' → 16px, direita, 20px da borda",
//             ],
//           },
//         ],
//         practicalTip:
//           "Demonstre cada passo no projetor, pausando para alunos replicarem. Circule pela sala para ajudar. No final, peça para compartilharem telas.",
//       },
//     },
//   }

//   const summaryContent = {
//     keyPoints: [
//       {
//         part: "Parte 1",
//         content:
//           "Landing page é uma página com objetivo claro (ex.: vender, cadastrar), composta por elementos como Hero, Benefícios, Prova Social, CTA e Rodapé, que atraem, convencem e incentivam a ação.",
//       },
//       {
//         part: "Parte 2",
//         content:
//           "Princípios de design incluem hierarquia visual (tamanho, posição, contraste), espaçamento, cores (principal, apoio, contraste) e tipografia (máximo 2 fontes, pesos diferentes) para criar páginas organizadas e confiáveis.",
//       },
//       {
//         part: "Parte 3",
//         content:
//           "Figma é uma ferramenta gratuita para criar interfaces, com criação de Frames, uso de grid, ferramentas de retângulo e texto, e aplicação prática dos conceitos de design para prototipar landing pages.",
//       },
//       {
//         part: "Parte 4",
//         content:
//           "Wireframe é um esqueleto simples da landing page, usando placeholders cinza (ex.: retângulos, texto genérico) para planejar a estrutura (Hero, Benefícios, Depoimentos, CTA, Rodapé) antes do design final.",
//       },
//     ],
//     interactionQuestion: "Vocês já acessaram uma landing page que chamou atenção? O que tinha nela?",
//     practicalTip:
//       "Abra uma página completa (ex.: Airbnb ou Dropbox) e peça para identificarem Hero, Benefícios, Prova Social, CTA e Rodapé.",
//     usefulLinks: [
//       { name: "Airbnb", url: "https://www.airbnb.com", description: "hero claro e ótima prova social" },
//       { name: "Dropbox", url: "https://www.dropbox.com", description: "simplicidade e foco em CTA" },
//       { name: "Duolingo", url: "https://www.duolingo.com", description: "excelentes benefícios com ícones" },
//       { name: "Netflix", url: "https://www.netflix.com", description: "CTA claro e hero direto" },
//       { name: "Spotify", url: "https://www.spotify.com", description: "rodapé bem organizado e navegação simples" },
//       { name: "Amazon", url: "https://www.amazon.com", description: "prova social (reviews) bem destacada" },
//     ],
//   }

//   return (
//     <div
//       className={`min-h-screen transition-all duration-500 relative overflow-hidden ${darkMode ? "bg-[#2D5A4A]" : "bg-[#F5F1EB]"}`}
//     >
//       <div className="absolute inset-0 opacity-20">
//         <div
//           className={`w-full h-full ${darkMode ? "opacity-30" : "opacity-40"}`}
//           style={{
//             backgroundImage: `linear-gradient(${darkMode ? "#F5F1EB" : "#2D5A4A"} 1px, transparent 1px), linear-gradient(90deg, ${darkMode ? "#F5F1EB" : "#2D5A4A"} 1px, transparent 1px)`,
//             backgroundSize: "40px 40px",
//           }}
//         />
//       </div>

//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-[#E07A5F]/20 to-[#E07A5F]/5 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#2D5A4A]/20 to-[#2D5A4A]/5 rounded-full blur-2xl"></div>
//         <div
//           className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-bl from-[#E07A5F]/15 to-transparent rounded-full blur-xl animate-bounce"
//           style={{ animationDuration: "6s" }}
//         ></div>
//         <div className="absolute top-20 left-1/3 w-32 h-32 bg-[#E07A5F]/10 transform rotate-45 blur-sm"></div>
//         <div className="absolute bottom-1/3 right-20 w-24 h-24 bg-[#2D5A4A]/15 transform rotate-12 blur-sm"></div>
//         <div className="absolute top-1/2 left-10 w-40 h-1 bg-gradient-to-r from-[#E07A5F]/30 to-transparent transform -rotate-45"></div>
//         <div className="absolute bottom-1/4 right-1/3 w-32 h-1 bg-gradient-to-l from-[#2D5A4A]/30 to-transparent transform rotate-45"></div>
//       </div>

//       <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
//         <div className="absolute top-20 left-10 w-3 h-3 bg-[#E07A5F] rounded-full opacity-60 animate-pulse shadow-lg"></div>
//         <div className="absolute top-40 right-20 w-4 h-4 bg-[#E07A5F] rounded-full opacity-40 animate-bounce shadow-lg"></div>
//         <div className="absolute top-60 left-1/4 w-2 h-2 bg-[#2D5A4A] rounded-full opacity-50 shadow-md"></div>
//         <div className="absolute bottom-40 right-10 w-3 h-3 bg-[#E07A5F] rounded-full opacity-30 animate-pulse shadow-lg"></div>
//         <div className="absolute bottom-60 left-20 w-2 h-2 bg-[#2D5A4A] rounded-full opacity-40 shadow-md"></div>
//         <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-[#E07A5F] rounded-full opacity-20 animate-bounce shadow-lg"></div>
//         <div className="absolute top-1/4 left-1/2 w-1 h-8 bg-[#E07A5F]/40 transform rotate-45"></div>
//         <div className="absolute bottom-1/3 left-1/4 w-6 h-1 bg-[#2D5A4A]/40 transform -rotate-12"></div>
//         <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-[#E07A5F] transform rotate-45 opacity-50"></div>
//       </div>

//       {/* Header */}
//       <header className="relative z-20 flex items-center justify-between p-6 max-w-7xl mx-auto">
//         <Button
//           variant="ghost"
//           className={`flex items-center gap-2 ${darkMode ? "text-[#F5F1EB] hover:text-[#E07A5F]" : "text-[#2D5A4A] hover:text-[#E07A5F]"} transition-colors duration-300 backdrop-blur-sm`}
//         >
//           <ArrowLeft className="w-4 h-4" />
//           Voltar
//         </Button>
//         <Button
//           variant="ghost"
//           onClick={toggleDarkMode}
//           className={`${darkMode ? "text-[#F5F1EB] hover:text-[#E07A5F]" : "text-[#2D5A4A] hover:text-[#E07A5F]"} transition-colors duration-300 backdrop-blur-sm`}
//         >
//           {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
//           {darkMode ? "Light" : "Dark"}
//         </Button>
//       </header>

//       <section className="relative z-20 max-w-7xl mx-auto px-6 py-20">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <div className="space-y-8">
//             <div className="space-y-6">
//               <h1
//                 className={`text-5xl lg:text-6xl font-bold leading-tight ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"} transition-colors duration-500 drop-shadow-sm`}
//               >
//                 Supermódulo
//                 <br />
//                 <span className="text-[#E07A5F] drop-shadow-lg">Creative Code</span>
//                 <br />
//                 UX/UI Design
//               </h1>
//               <p
//                 className={`text-lg ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"} transition-colors duration-500 backdrop-blur-sm`}
//               >
//                 Domine os fundamentos visuais que transformam páginas comuns em experiências incríveis. Aprenda design
//                 de forma prática e objetiva, criando landing pages que convertem.
//               </p>
//             </div>

//             <div className="flex items-center gap-8 pt-4">
//               <div className="flex items-center gap-2 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full">
//                 <Clock className="w-5 h-5 text-[#E07A5F]" />
//                 <span className={`${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>3 horas</span>
//               </div>
//               <div className="flex items-center gap-2 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full">
//                 <Users className="w-5 h-5 text-[#E07A5F]" />
//                 <span className={`${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>Aula ao vivo</span>
//               </div>
//               <div className="flex items-center gap-2 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full">
//                 <Award className="w-5 h-5 text-[#E07A5F]" />
//                 <span className={`${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>Certificado</span>
//               </div>
//             </div>
//           </div>

//           <div className="relative">
//             <div className="absolute -inset-4 bg-gradient-to-r from-[#E07A5F]/20 to-[#2D5A4A]/20 rounded-3xl blur-xl"></div>

//             <Card
//               className={`relative ${darkMode ? "bg-[#F5F1EB]/10 backdrop-blur-md border-[#F5F1EB]/20" : "bg-white/80 backdrop-blur-md border-white/50"} shadow-2xl transition-all duration-500 transform hover:scale-105 border-2`}
//             >
//               <CardContent className="p-8 space-y-6">
//                 <div className="flex items-center gap-4">
//                   <div className="w-12 h-12 bg-gradient-to-br from-[#E07A5F] to-[#E07A5F]/80 rounded-full flex items-center justify-center shadow-lg">
//                     <Target className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <h3 className={`font-semibold text-lg ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"}`}>
//                       Objetivo da Aula
//                     </h3>
//                     <p className={`text-sm ${darkMode ? "text-[#F5F1EB]/70" : "text-[#2D5A4A]/70"}`}>
//                       Fundamentos práticos de design
//                     </p>
//                   </div>
//                 </div>

//                 <div className="space-y-4">
//                   <div className="flex items-start gap-3">
//                     <CheckCircle className="w-5 h-5 text-[#E07A5F] mt-0.5 flex-shrink-0 drop-shadow-sm" />
//                     <p className={`text-sm ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>
//                       Conceitos visuais para páginas mais atrativas
//                     </p>
//                   </div>
//                   <div className="flex items-start gap-3">
//                     <CheckCircle className="w-5 h-5 text-[#E07A5F] mt-0.5 flex-shrink-0 drop-shadow-sm" />
//                     <p className={`text-sm ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>
//                       Criação de wireframe profissional no Figma
//                     </p>
//                   </div>
//                   <div className="flex items-start gap-3">
//                     <CheckCircle className="w-5 h-5 text-[#E07A5F] mt-0.5 flex-shrink-0 drop-shadow-sm" />
//                     <p className={`text-sm ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>
//                       Estrutura completa de landing page
//                     </p>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       <section className="relative z-20 max-w-7xl mx-auto px-6 py-20">
//         <div className="text-center mb-16">
//           <h2
//             className={`text-4xl font-bold mb-6 ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"} transition-colors duration-500 drop-shadow-sm`}
//           >
//             Conteúdo Detalhado do Supermódulo
//           </h2>
//           <p
//             className={`text-lg max-w-3xl mx-auto ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"} transition-colors duration-500`}
//           >
//             Explore cada parte da aula com detalhes práticos e exemplos reais
//           </p>
//         </div>

//         {/* Tab Navigation */}
//         <div className="flex flex-wrap justify-center gap-4 mb-12">
//           {Object.entries(courseContent).map(([key, content]) => {
//             const IconComponent = content.icon
//             return (
//               <button
//                 key={key}
//                 onClick={() => setActiveTab(key)}
//                 className={`flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 backdrop-blur-sm border-2 ${
//                   activeTab === key
//                     ? `${darkMode ? "bg-[#E07A5F]/20 border-[#E07A5F] text-[#F5F1EB]" : "bg-[#E07A5F]/20 border-[#E07A5F] text-[#2D5A4A]"}`
//                     : `${darkMode ? "bg-[#F5F1EB]/10 border-[#F5F1EB]/20 text-[#F5F1EB]/70 hover:text-[#F5F1EB]" : "bg-white/50 border-white/30 text-[#2D5A4A]/70 hover:text-[#2D5A4A]"}`
//                 } hover:scale-105 shadow-lg`}
//               >
//                 <IconComponent className="w-5 h-5" />
//                 <span className="font-medium">{content.title}</span>
//                 <div className="flex items-center gap-1 text-xs opacity-70">
//                   <Clock className="w-3 h-3" />
//                   {content.duration}
//                 </div>
//               </button>
//             )
//           })}
//         </div>

//         {/* ... existing code for tab content and all other sections ... */}
//         <div className="space-y-8">
//           {Object.entries(courseContent).map(([key, content]) => {
//             if (activeTab !== key) return null
//             const IconComponent = content.icon

//             return (
//               <div key={key} className="space-y-8">
//                 <div className="text-center space-y-4">
//                   <div className="flex items-center justify-center gap-4">
//                     <div className="w-16 h-16 bg-gradient-to-br from-[#E07A5F] to-[#E07A5F]/70 rounded-full flex items-center justify-center shadow-lg">
//                       <IconComponent className="w-8 h-8 text-white" />
//                     </div>
//                     <div className="text-left">
//                       <h3 className={`text-2xl font-bold ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"}`}>
//                         {content.title}
//                       </h3>
//                       <p className={`${darkMode ? "text-[#F5F1EB]/70" : "text-[#2D5A4A]/70"}`}>{content.description}</p>
//                     </div>
//                   </div>
//                   {content.mainContent && (
//                     <p className={`text-lg max-w-4xl mx-auto ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>
//                       {content.mainContent}
//                     </p>
//                   )}
//                 </div>

//                 <div className="grid md:grid-cols-2 gap-6">
//                   {content.topics.map((topic, topicIndex) => (
//                     <Card
//                       key={topicIndex}
//                       className={`${darkMode ? "bg-[#F5F1EB]/10 backdrop-blur-md border-[#F5F1EB]/20" : "bg-white/80 backdrop-blur-md border-white/50"} shadow-lg transition-all duration-500 hover:scale-105 border-2 group`}
//                     >
//                       <CardContent className="p-6 space-y-4">
//                         <div className="flex items-start gap-3">
//                           <div className="w-8 h-8 bg-gradient-to-br from-[#E07A5F] to-[#E07A5F]/70 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
//                             <span className="text-white font-bold text-sm">{topicIndex + 1}</span>
//                           </div>
//                           <div className="flex-1">
//                             <h4
//                               className={`font-semibold text-lg mb-2 ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"}`}
//                             >
//                               {topic.title}
//                             </h4>
//                             <p className={`text-sm mb-4 ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>
//                               {topic.content}
//                             </p>
//                           </div>
//                         </div>

//                         <div className="flex flex-wrap gap-2">
//                           {topic.highlights.map((highlight, highlightIndex) => (
//                             <span
//                               key={highlightIndex}
//                               className="px-3 py-1 bg-[#E07A5F]/20 text-[#E07A5F] rounded-full text-xs font-medium backdrop-blur-sm"
//                             >
//                               {highlight}
//                             </span>
//                           ))}
//                         </div>

//                         {topic.details && (
//                           <div className="space-y-2">
//                             <button
//                               onClick={() => toggleSection(`${key}-${topicIndex}`)}
//                               className={`flex items-center gap-2 text-sm font-medium ${darkMode ? "text-[#F5F1EB]/70 hover:text-[#F5F1EB]" : "text-[#2D5A4A]/70 hover:text-[#2D5A4A]"} transition-colors`}
//                             >
//                               <ChevronRight
//                                 className={`w-4 h-4 transition-transform ${expandedSection === `${key}-${topicIndex}` ? "rotate-90" : ""}`}
//                               />
//                               Ver detalhes
//                             </button>

//                             {expandedSection === `${key}-${topicIndex}` && (
//                               <div className="space-y-2 pl-6 border-l-2 border-[#E07A5F]/30">
//                                 {topic.details.map((detail, detailIndex) => (
//                                   <div key={detailIndex} className="flex items-start gap-2">
//                                     <div className="w-1.5 h-1.5 bg-[#E07A5F] rounded-full mt-2 flex-shrink-0"></div>
//                                     <p className={`text-sm ${darkMode ? "text-[#F5F1EB]/70" : "text-[#2D5A4A]/70"}`}>
//                                       {detail}
//                                     </p>
//                                   </div>
//                                 ))}
//                               </div>
//                             )}
//                           </div>
//                         )}

//                         {topic.example && (
//                           <div className="mt-4 p-3 bg-[#2D5A4A]/10 rounded-lg">
//                             <p className={`text-sm ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>
//                               <strong>Exemplo:</strong> {topic.example}
//                             </p>
//                           </div>
//                         )}

//                         {topic.practicalTip && (
//                           <div className="mt-4 p-3 bg-[#E07A5F]/10 rounded-lg">
//                             <p className={`text-sm ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>
//                               <strong>💡 Parte prática:</strong> {topic.practicalTip}
//                             </p>
//                           </div>
//                         )}

//                         {topic.tips && (
//                           <div className="mt-4 space-y-2">
//                             <h5 className={`text-sm font-medium ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"}`}>
//                               Dicas:
//                             </h5>
//                             {topic.tips.map((tip, tipIndex) => (
//                               <div key={tipIndex} className="flex items-start gap-2">
//                                 <Star className="w-3 h-3 text-[#E07A5F] mt-1 flex-shrink-0" />
//                                 <p className={`text-sm ${darkMode ? "text-[#F5F1EB]/70" : "text-[#2D5A4A]/70"}`}>
//                                   {tip}
//                                 </p>
//                               </div>
//                             ))}
//                           </div>
//                         )}
//                       </CardContent>
//                     </Card>
//                   ))}
//                 </div>

//                 {/* ... existing code for special sections ... */}
//                 {key === "parte2" && content.exerciseContent && (
//                   <Card
//                     className={`${darkMode ? "bg-[#F5F1EB]/10 backdrop-blur-md border-[#F5F1EB]/20" : "bg-white/80 backdrop-blur-md border-white/50"} shadow-lg border-2`}
//                   >
//                     <CardContent className="p-6">
//                       <div className="flex items-center gap-3 mb-4">
//                         <CheckCircle className="w-6 h-6 text-[#E07A5F]" />
//                         <h4 className={`text-xl font-semibold ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"}`}>
//                           {content.exerciseContent.title}
//                         </h4>
//                       </div>
//                       <p className={`text-sm mb-4 ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>
//                         <strong>Atividade:</strong> {content.exerciseContent.description}
//                       </p>
//                       <div className="space-y-2 mb-4">
//                         {content.exerciseContent.examples.map((example, index) => (
//                           <div key={index} className="flex items-start gap-2">
//                             <div className="w-1.5 h-1.5 bg-[#E07A5F] rounded-full mt-2 flex-shrink-0"></div>
//                             <p className={`text-sm ${darkMode ? "text-[#F5F1EB]/70" : "text-[#2D5A4A]/70"}`}>
//                               {example}
//                             </p>
//                           </div>
//                         ))}
//                       </div>
//                       <p className={`text-sm mb-2 ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>
//                         <strong>Pergunta:</strong> {content.exerciseContent.question}
//                       </p>
//                       <div className="p-3 bg-[#E07A5F]/10 rounded-lg">
//                         <p className={`text-sm ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>
//                           <strong>💡 Parte prática:</strong> {content.exerciseContent.practicalTip}
//                         </p>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 )}

//                 {key === "parte3" && content.practicalActivity && (
//                   <Card
//                     className={`${darkMode ? "bg-[#F5F1EB]/10 backdrop-blur-md border-[#F5F1EB]/20" : "bg-white/80 backdrop-blur-md border-white/50"} shadow-lg border-2`}
//                   >
//                     <CardContent className="p-6">
//                       <div className="flex items-center gap-3 mb-4">
//                         <PenTool className="w-6 h-6 text-[#E07A5F]" />
//                         <h4 className={`text-xl font-semibold ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"}`}>
//                           {content.practicalActivity.title}
//                         </h4>
//                       </div>
//                       <p className={`text-sm mb-4 ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>
//                         {content.practicalActivity.description}
//                       </p>
//                       <div className="grid md:grid-cols-2 gap-4 mb-4">
//                         <div className="p-3 bg-[#E07A5F]/10 rounded-lg">
//                           <p className={`text-sm ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>
//                             <strong>Paleta:</strong> {content.practicalActivity.palette}
//                           </p>
//                         </div>
//                         <div className="p-3 bg-[#2D5A4A]/10 rounded-lg">
//                           <p className={`text-sm ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>
//                             <strong>Fontes:</strong> {content.practicalActivity.fonts}
//                           </p>
//                         </div>
//                       </div>
//                       <div className="space-y-4">
//                         {content.practicalActivity.sections.map((section, index) => (
//                           <div key={index} className="border-l-4 border-[#E07A5F]/30 pl-4">
//                             <h5 className={`font-medium mb-2 ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"}`}>
//                               {section.name}
//                             </h5>
//                             <div className="space-y-1">
//                               {section.steps.map((step, stepIndex) => (
//                                 <div key={stepIndex} className="flex items-start gap-2">
//                                   <span className="text-[#E07A5F] font-bold text-xs mt-1">{stepIndex + 1}.</span>
//                                   <p className={`text-sm ${darkMode ? "text-[#F5F1EB]/70" : "text-[#2D5A4A]/70"}`}>
//                                     {step}
//                                   </p>
//                                 </div>
//                               ))}
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                       <div className="mt-4 p-3 bg-[#E07A5F]/10 rounded-lg">
//                         <p className={`text-sm ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>
//                           <strong>💡 Parte prática:</strong> {content.practicalActivity.practicalTip}
//                         </p>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 )}

//                 {key === "parte4" && content.guidedPractice && (
//                   <Card
//                     className={`${darkMode ? "bg-[#F5F1EB]/10 backdrop-blur-md border-[#F5F1EB]/20" : "bg-white/80 backdrop-blur-md border-white/50"} shadow-lg border-2`}
//                   >
//                     <CardContent className="p-6">
//                       <div className="flex items-center gap-3 mb-4">
//                         <Layout className="w-6 h-6 text-[#E07A5F]" />
//                         <h4 className={`text-xl font-semibold ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"}`}>
//                           {content.guidedPractice.title}
//                         </h4>
//                       </div>
//                       <p className={`text-sm mb-6 ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>
//                         {content.guidedPractice.description}
//                       </p>
//                       <div className="grid md:grid-cols-2 gap-6">
//                         {content.guidedPractice.sections.map((section, index) => (
//                           <div key={index} className="space-y-3">
//                             <h5 className={`font-medium ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"}`}>
//                               {section.name}
//                             </h5>
//                             <div className="space-y-2">
//                               {section.details.map((detail, detailIndex) => (
//                                 <div key={detailIndex} className="flex items-start gap-2">
//                                   <div className="w-1.5 h-1.5 bg-[#E07A5F] rounded-full mt-2 flex-shrink-0"></div>
//                                   <p className={`text-sm ${darkMode ? "text-[#F5F1EB]/70" : "text-[#2D5A4A]/70"}`}>
//                                     {detail}
//                                   </p>
//                                 </div>
//                               ))}
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                       <div className="mt-6 p-3 bg-[#E07A5F]/10 rounded-lg">
//                         <p className={`text-sm ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>
//                           <strong>💡 Parte prática:</strong> {content.guidedPractice.practicalTip}
//                         </p>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 )}
//               </div>
//             )
//           })}
//         </div>
//       </section>

//       <section className="relative z-20 max-w-7xl mx-auto px-6 py-20">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           <div className="space-y-8">
//             <h2
//               className={`text-4xl font-bold ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"} transition-colors duration-500 drop-shadow-sm`}
//             >
//               Por que escolher este
//               <br />
//               <span className="text-[#E07A5F] drop-shadow-lg">Supermódulo?</span>
//             </h2>
//             <p
//               className={`text-lg ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"} transition-colors duration-500`}
//             >
//               Uma abordagem prática e direta para dominar os fundamentos do design, com foco total no seu aprendizado e
//               aplicação imediata.
//             </p>

//             <div className="grid gap-4">
//               {[
//                 { icon: Target, text: "Metodologia prática sem enrolação", color: "from-blue-500/20 to-cyan-500/20" },
//                 {
//                   icon: Play,
//                   text: "Exercícios hands-on durante a aula",
//                   color: "from-green-500/20 to-emerald-500/20",
//                 },
//                 { icon: Users, text: "Suporte completo para dúvidas", color: "from-purple-500/20 to-pink-500/20" },
//                 { icon: BookOpen, text: "Material de apoio incluso", color: "from-orange-500/20 to-red-500/20" },
//                 { icon: Award, text: "Certificado de participação", color: "from-yellow-500/20 to-orange-500/20" },
//               ].map((benefit, index) => (
//                 <div key={index} className="group relative">
//                   <div
//                     className={`absolute -inset-2 bg-gradient-to-r ${benefit.color} rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
//                   ></div>
//                   <div
//                     className={`relative flex items-center gap-4 p-4 rounded-xl ${darkMode ? "bg-[#F5F1EB]/10 backdrop-blur-md" : "bg-white/50 backdrop-blur-md"} transition-all duration-300 group-hover:scale-105`}
//                   >
//                     <div className="w-10 h-10 bg-gradient-to-br from-[#E07A5F] to-[#E07A5F]/70 rounded-full flex items-center justify-center shadow-lg">
//                       <benefit.icon className="w-5 h-5 text-white" />
//                     </div>
//                     <span
//                       className={`font-medium ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"} transition-colors duration-300`}
//                     >
//                       {benefit.text}
//                     </span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="grid grid-cols-2 gap-6">
//             {[
//               { number: "3h", label: "Duração Total", icon: Clock, gradient: "from-blue-500/20 to-cyan-500/20" },
//               { number: "100%", label: "Prático", icon: Target, gradient: "from-green-500/20 to-emerald-500/20" },
//               { number: "1", label: "Projeto Real", icon: Code, gradient: "from-purple-500/20 to-pink-500/20" },
//               { number: "∞", label: "Suporte", icon: Users, gradient: "from-orange-500/20 to-red-500/20" },
//             ].map((stat, index) => (
//               <div key={index} className="relative group">
//                 <div
//                   className={`absolute -inset-2 bg-gradient-to-r ${stat.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
//                 ></div>

//                 <Card
//                   className={`relative ${darkMode ? "bg-[#F5F1EB]/10 backdrop-blur-md border-[#F5F1EB]/20" : "bg-white/80 backdrop-blur-md border-white/50"} shadow-lg transition-all duration-500 transform hover:scale-105 border-2`}
//                 >
//                   <CardContent className="p-6 text-center space-y-3">
//                     <div className="w-12 h-12 bg-gradient-to-br from-[#E07A5F] to-[#E07A5F]/70 rounded-full flex items-center justify-center mx-auto shadow-lg">
//                       <stat.icon className="w-6 h-6 text-white drop-shadow-sm" />
//                     </div>
//                     <div
//                       className={`text-2xl font-bold ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"} drop-shadow-sm`}
//                     >
//                       {stat.number}
//                     </div>
//                     <div className={`text-sm ${darkMode ? "text-[#F5F1EB]/70" : "text-[#2D5A4A]/70"}`}>
//                       {stat.label}
//                     </div>
//                   </CardContent>
//                 </Card>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="relative z-20 max-w-7xl mx-auto px-6 py-20">
//         <div className="text-center mb-12">
//           <h2
//             className={`text-4xl font-bold mb-6 ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"} transition-colors duration-500 drop-shadow-sm`}
//           >
//             Resumo da Jornada
//           </h2>
//           <p
//             className={`text-lg max-w-3xl mx-auto ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"} transition-colors duration-500`}
//           >
//             O que você vai dominar ao final do supermódulo
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
//           {[
//             {
//               title: "Landing Pages",
//               description: "Elementos essenciais e estrutura que converte",
//               icon: Lightbulb,
//               points: ["Hero Section", "Benefícios", "Prova Social", "CTA eficaz"],
//             },
//             {
//               title: "Design Visual",
//               description: "Princípios que criam páginas profissionais",
//               icon: Palette,
//               points: ["Hierarquia", "Espaçamento", "Cores", "Tipografia"],
//             },
//             {
//               title: "Figma Prático",
//               description: "Domínio das ferramentas essenciais",
//               icon: Monitor,
//               points: ["Frames", "Grid System", "Componentes", "Exportação"],
//             },
//             {
//               title: "Wireframe Real",
//               description: "Projeto completo do zero ao fim",
//               icon: PenTool,
//               points: ["Estrutura", "Placeholders", "Organização", "Finalização"],
//             },
//           ].map((item, index) => (
//             <Card
//               key={index}
//               className={`${darkMode ? "bg-[#F5F1EB]/10 backdrop-blur-md border-[#F5F1EB]/20" : "bg-white/80 backdrop-blur-md border-white/50"} shadow-lg transition-all duration-500 hover:scale-105 border-2 group`}
//             >
//               <CardContent className="p-6 space-y-4">
//                 <div className="w-12 h-12 bg-gradient-to-br from-[#E07A5F] to-[#E07A5F]/70 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
//                   <item.icon className="w-6 h-6 text-white" />
//                 </div>
//                 <div className="text-center space-y-2">
//                   <h3 className={`font-semibold text-lg ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"}`}>
//                     {item.title}
//                   </h3>
//                   <p className={`text-sm ${darkMode ? "text-[#F5F1EB]/70" : "text-[#2D5A4A]/70"}`}>
//                     {item.description}
//                   </p>
//                 </div>
//                 <div className="space-y-2">
//                   {item.points.map((point, pointIndex) => (
//                     <div key={pointIndex} className="flex items-center gap-2">
//                       <Star className="w-3 h-3 text-[#E07A5F] flex-shrink-0" />
//                       <span className={`text-xs ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>{point}</span>
//                     </div>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         <div className="grid md:grid-cols-2 gap-8 mb-12">
//           <Card
//             className={`${darkMode ? "bg-[#F5F1EB]/10 backdrop-blur-md border-[#F5F1EB]/20" : "bg-white/80 backdrop-blur-md border-white/50"} shadow-lg border-2`}
//           >
//             <CardContent className="p-6">
//               <h3 className={`text-xl font-semibold mb-4 ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"}`}>
//                 Pontos-Chave da Aula
//               </h3>
//               <div className="space-y-4">
//                 {summaryContent.keyPoints.map((point, index) => (
//                   <div key={index} className="border-l-4 border-[#E07A5F]/30 pl-4">
//                     <h4 className={`font-medium text-sm mb-1 ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"}`}>
//                       {point.part}
//                     </h4>
//                     <p className={`text-sm ${darkMode ? "text-[#F5F1EB]/70" : "text-[#2D5A4A]/70"}`}>{point.content}</p>
//                   </div>
//                 ))}
//               </div>
//             </CardContent>
//           </Card>

//           <Card
//             className={`${darkMode ? "bg-[#F5F1EB]/10 backdrop-blur-md border-[#F5F1EB]/20" : "bg-white/80 backdrop-blur-md border-white/50"} shadow-lg border-2`}
//           >
//             <CardContent className="p-6">
//               <h3 className={`text-xl font-semibold mb-4 ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"}`}>
//                 Interação com a Turma
//               </h3>
//               <div className="space-y-4">
//                 <div className="p-4 bg-[#E07A5F]/10 rounded-lg">
//                   <h4 className={`font-medium text-sm mb-2 ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"}`}>
//                     Pergunta para discussão:
//                   </h4>
//                   <p className={`text-sm ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>
//                     "{summaryContent.interactionQuestion}"
//                   </p>
//                 </div>
//                 <div className="p-4 bg-[#2D5A4A]/10 rounded-lg">
//                   <h4 className={`font-medium text-sm mb-2 ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"}`}>
//                     💡 Atividade prática:
//                   </h4>
//                   <p className={`text-sm ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>
//                     {summaryContent.practicalTip}
//                   </p>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>

//         <Card
//           className={`${darkMode ? "bg-[#F5F1EB]/10 backdrop-blur-md border-[#F5F1EB]/20" : "bg-white/80 backdrop-blur-md border-white/50"} shadow-lg border-2`}
//         >
//           <CardContent className="p-6">
//             <h3 className={`text-xl font-semibold mb-4 ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"}`}>
//               Landing Pages de Referência
//             </h3>
//             <p className={`text-sm mb-6 ${darkMode ? "text-[#F5F1EB]/70" : "text-[#2D5A4A]/70"}`}>
//               Exemplos de landing pages bem feitas para análise e inspiração
//             </p>
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
//               {summaryContent.usefulLinks.map((link, index) => (
//                 <a
//                   key={index}
//                   href={link.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className={`flex items-center gap-3 p-4 rounded-lg transition-all duration-300 hover:scale-105 ${darkMode ? "bg-[#F5F1EB]/5 hover:bg-[#F5F1EB]/10" : "bg-white/30 hover:bg-white/50"} border border-white/20`}
//                 >
//                   <div className="w-8 h-8 bg-gradient-to-br from-[#E07A5F] to-[#E07A5F]/70 rounded-full flex items-center justify-center shadow-md">
//                     <ExternalLink className="w-4 h-4 text-white" />
//                   </div>
//                   <div className="flex-1">
//                     <h4 className={`font-medium text-sm ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"}`}>
//                       {link.name}
//                     </h4>
//                     <p className={`text-xs ${darkMode ? "text-[#F5F1EB]/70" : "text-[#2D5A4A]/70"}`}>
//                       {link.description}
//                     </p>
//                   </div>
//                 </a>
//               ))}
//             </div>
//           </CardContent>
//         </Card>
//       </section>

//       <footer className="relative z-20 max-w-7xl mx-auto px-6 py-12 text-center">
//         <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8">
//           <p
//             className={`text-sm ${darkMode ? "text-[#F5F1EB]/60" : "text-[#2D5A4A]/60"} transition-colors duration-500`}
//           >
//             © 2024 Nathalia Macedo - Supermódulo Creative Code UX/UI Design
//           </p>
//         </div>
//       </footer>
//     </div>
//   )
// }






"use client"

import { useState, useEffect } from "react"
import {
  Moon,
  Sun,
  ArrowLeft,
  Users,
  Clock,
  Target,
  Lightbulb,
  Code,
  Palette,
  CheckCircle,
  Award,
  Monitor,
  PenTool,
  ChevronRight,
  Play,
  BookOpen,
  Star,
  Layout,
  ExternalLink,
} from "lucide-react"

const Button = ({ children, variant = "default", className = "", onClick, ...props }) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background"
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4",
    ghost: "hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4",
  }

  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

const Card = ({ children, className = "", ...props }) => {
  return (
    <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`} {...props}>
      {children}
    </div>
  )
}

const CardContent = ({ children, className = "", ...props }) => {
  return (
    <div className={`p-6 ${className}`} {...props}>
      {children}
    </div>
  )
}

const AdSenseAd = ({ slot, format = "auto", responsive = true, className = "" }) => {
  return (
    <div className={`flex justify-center my-8 ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // Substitua pelo seu Publisher ID
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive}
      ></ins>
    </div>
  )
}

export default function SupermoduloCreativeCode() {
  const [darkMode, setDarkMode] = useState(false)
  const [activeTab, setActiveTab] = useState("parte1")
  const [expandedSection, setExpandedSection] = useState(null)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  const courseContent = {
    parte1: {
      title: "O que é uma Landing Page?",
      icon: Lightbulb,
      duration: "30 min",
      description: "Fundamentos e elementos essenciais",
      mainContent:
        "Uma landing page é uma página na internet criada com um único propósito: convencer o visitante a realizar uma ação específica. Diferente de um site que pode ter várias funções, a landing page é focada e direta.",
      topics: [
        {
          title: "Conceito Principal",
          content:
            "Uma landing page é uma página na internet criada com um único propósito: convencer o visitante a realizar uma ação específica.",
          highlights: ["Objetivo único", "Simplicidade", "Foco na conversão"],
          details: [
            "Fazer o visitante clicar, comprar, preencher um formulário ou se inscrever",
            "Poucas distrações, conteúdo claro e visual limpo",
            "Tudo guia o visitante até a ação desejada",
          ],
        },
        {
          title: "Características Essenciais",
          content: "Diferente de um site que pode ter várias funções, a landing page é focada e direta.",
          highlights: ["Poucas distrações", "Conteúdo claro", "Visual limpo"],
          details: ["Objetivo único bem definido", "Simplicidade na apresentação", "Foco total na conversão"],
        },
        {
          title: "Exemplo Prático",
          content:
            "Página de um curso de fotografia com título claro, benefícios rápidos e um botão grande 'Quero me inscrever!'.",
          highlights: ["Título claro", "Benefícios rápidos", "CTA destacado"],
          details: [
            "Hero section com proposta de valor clara",
            "Benefícios apresentados de forma visual",
            "Call-to-action proeminente e direto",
          ],
        },
      ],
    },
    parte2: {
      title: "Princípios Básicos de Design",
      icon: Palette,
      duration: "45 min",
      description: "Hierarquia, cores, tipografia e espaçamento",
      mainContent:
        "Compreenda os fundamentos que tornam uma landing page visualmente atraente, organizada e confiável.",
      topics: [
        {
          title: "Hierarquia Visual",
          content: "Organiza elementos para guiar o olhar do visitante. O mais importante deve ser mais chamativo.",
          highlights: ["Tamanho", "Posição", "Contraste"],
          details: [
            "Títulos e botões de CTA maiores (ex.: 'Aprenda Inglês Hoje!')",
            "Elementos importantes no topo ou centro",
            "Cores ou estilos contrastantes (ex.: botão laranja em fundo claro)",
            "Exemplo: Na landing page do Netflix, o botão 'Assine agora' é grande, vermelho e centralizado",
          ],
          practicalTip:
            "Mostre a landing page do Airbnb e aponte o título grande, botão destacado e textos menores. Pergunte: 'O que você viu primeiro? Por quê?'",
        },
        {
          title: "Espaçamento",
          content: "Uso de espaço em branco para organizar a página e evitar poluição visual.",
          highlights: ["Margens e padding", "Agrupamento", "Equilíbrio"],
          details: [
            "Espaço ao redor de textos e botões",
            "Elementos relacionados mais próximos, seções separadas",
            "Evite encher a página para manter clareza",
            "Exemplo: Na landing page do Dropbox, o espaço em branco entre título e botão facilita a leitura",
          ],
          practicalTip:
            "Mostre a landing page do Dropbox e compare com uma página fictícia sobrecarregada. Destaque como o espaço facilita a leitura.",
        },
        {
          title: "Cores",
          content: "Cores criam emoção, destacam elementos e garantem legibilidade.",
          highlights: ["Cor principal", "Cores de apoio", "Contraste"],
          details: [
            "Use uma cor forte (ex.: laranja #E07A5F) para botões e títulos",
            "1-2 cores complementares (ex.: verde #2D5A4A) para ícones",
            "Texto legível contra o fundo (ex.: #13231C em #F5F1EB)",
            "Exemplo: No Duolingo, o verde é usado para botões, com fundo neutro para contraste",
          ],
          practicalTip:
            "Mostre a paleta do Duolingo e um exemplo ruim (texto claro em fundo claro). Pergunte: 'Conseguem ler isso facilmente?'",
        },
        {
          title: "Tipografia",
          content: "Escolha de fontes para clareza e hierarquia.",
          highlights: ["Máximo 2 fontes", "Pesos diferentes", "Tamanho/espaçamento"],
          details: [
            "Ex.: Montserrat para títulos, Open Sans para textos",
            "Negrito para títulos, regular para parágrafos",
            "Títulos grandes, textos com linha alta",
            "Exemplo: No Spotify, títulos são bold e grandes, parágrafos menores e regulares",
          ],
          practicalTip:
            "Mostre a tipografia do Spotify e um exemplo com 3+ fontes misturadas. Pergunte: 'Isso parece organizado?'",
        },
      ],
      exerciseContent: {
        title: "Exercício Rápido",
        description: "Mostre duas landing pages:",
        examples: [
          "Página poluída: Texto amontoado, várias cores, fontes diferentes, sem espaço",
          "Página organizada: Hierarquia clara, espaçamento adequado, cores simples (ex.: Dropbox ou Airbnb)",
        ],
        question: "Qual parece mais confiável? Por quê?",
        practicalTip:
          "Peça aos alunos para apontarem o que torna a página organizada mais atraente (ex.: espaçamento, cores, texto).",
      },
    },
    parte3: {
      title: "Conhecendo o Figma",
      icon: Monitor,
      duration: "30 min",
      description: "Ferramentas e funcionalidades básicas",
      mainContent:
        "Apresentar o Figma como ferramenta gratuita para design de interfaces, ensinar os básicos de navegação e uso de ferramentas simples, e aplicar os conceitos das Partes 1 e 2 em uma atividade prática.",
      topics: [
        {
          title: "O que é o Figma?",
          content:
            "O Figma é uma ferramenta online gratuita para criar designs de interfaces, como landing pages, apps e sites.",
          highlights: ["Gratuito", "Online", "Colaborativo"],
          details: [
            "Permite trabalhar em tempo real e colaborar com outras pessoas",
            "Acessível pelo navegador (sem precisar instalar nada)",
            "Versão gratuita com recursos suficientes para iniciantes",
            "Fácil de aprender e usar",
            "Integra conceitos de design (hierarquia, cores, espaçamento) diretamente na criação",
          ],
          example:
            "Designers usam o Figma para prototipar landing pages como a do Duolingo, onde definem cores, fontes e layouts antes de codificar.",
          practicalTip:
            "Abra o navegador e acesse figma.com. Mostre a página inicial e destaque como é simples começar.",
        },
        {
          title: "Criando uma Conta",
          content: "Processo simples de cadastro e primeiros passos na plataforma.",
          highlights: ["figma.com", "Sign up", "Dashboard"],
          details: [
            "Abra o navegador e vá para figma.com",
            "Na página inicial, clique no botão 'Sign up' (no canto superior direito)",
            "Escolha 'Continue with Google' (se tiver conta Google) ou preencha com e-mail, nome e senha",
            "Clique em 'Create account'",
            "Verifique o e-mail (se necessário) e confirme a conta",
            "Após login, você será direcionado para o dashboard do Figma",
          ],
          tips: [
            "A conta gratuita permite ilimitados arquivos pessoais e colaboração básica",
            "Se já tiver conta, clique em 'Log in' e entre",
          ],
          practicalTip:
            "Peça aos alunos para criarem suas contas agora. Circule pela sala para ajudar quem tiver dúvidas. Mostre seu dashboard no projetor.",
        },
        {
          title: "Ferramentas Básicas",
          content: "Navegação e uso das principais funcionalidades para iniciantes.",
          highlights: ["Frame", "Grid", "Ferramentas"],
          details: [
            "1. CRIAR FRAME: Clique no ícone 'Frame' na barra de ferramentas (ou tecle F) → Arraste na tela para criar um retângulo → No painel direito, defina tamanho exato (ex: 1440x800px)",
            "2. ADICIONAR GRID: Com o Frame selecionado → Painel direito 'Design' → Clique '+' ao lado de 'Layout Grid' → Escolha 'Columns' → Configure: Count: 12, Gutter: 20px, Margin: 80px",
            "3. CRIAR RETÂNGULO: Clique no ícone quadrado na barra (ou tecle R) → Arraste para desenhar → No painel direito 'Fill', clique na cor para alterar → Digite código hex (ex: #E07A5F)",
            "4. ADICIONAR TEXTO: Clique no ícone 'T' na barra → Clique onde quer o texto → Digite o conteúdo → No painel direito: Text → Família da fonte → Tamanho → Peso (Bold/Regular)",
            "5. ALINHAR ELEMENTOS: Selecione o elemento → Painel direito → Seção 'Align' → Clique nos ícones de alinhamento (centro, esquerda, direita, meio vertical)",
            "6. COPIAR ELEMENTOS: Selecione → Ctrl+C → Ctrl+V → Arraste para nova posição",
            "7. AGRUPAR ELEMENTOS: Selecione múltiplos (Shift+clique) → Ctrl+G para agrupar → Facilita mover conjunto",
          ],
          practicalTip:
            "No projetor, demonstre cada ferramenta: crie Frame, adicione grid, desenhe retângulo colorido, adicione texto e alinhe. Peça aos alunos para replicarem passo a passo em suas contas.",
        },
      ],
      practicalActivity: {
        title: "Atividade Prática: Criar Hero Section e Sessão de Benefícios",
        description:
          "Usando conceitos das Partes 1 e 2, crie uma landing page fictícia para um 'Curso de Fotografia Online'.",
        palette: "Principal #E07A5F (laranja), apoio #2D5A4A (verde), neutro #F5F1EB (bege) e texto #13231C",
        fonts: "Montserrat (títulos, bold) e Open Sans (textos, regular)",
        sections: [
          {
            name: "Hero Section",
            steps: [
              "1. CRIAR FRAME: Barra de ferramentas → Clique 'Frame' (ou F) → Arraste retângulo na tela → Painel direito: W: 1440, H: 600",
              "2. GRID: Frame selecionado → Painel direito 'Design' → '+' em Layout Grid → Columns → Count: 12, Gutter: 20, Margin: 80",
              "3. FUNDO: Barra → Retângulo (R) → Arraste cobrindo todo Frame → Painel direito Fill → Clique cor → Digite #F5F1EB",
              "4. TÍTULO: Barra → Texto (T) → Clique no Frame → Digite 'Aprenda Fotografia Profissional' → Painel direito: Montserrat, 48px, Bold → Fill: #13231C",
              "5. SUBTÍTULO: Texto (T) → Clique abaixo título → 'Capture momentos incríveis em 4 semanas' → 24px, Regular → Fill: #13231C, Opacity: 70%",
              "6. BOTÃO: Retângulo (R) → 200x50px → Fill: #E07A5F → Corner radius: 8px → Texto (T) sobre botão → 'Começar Agora' → Branco, Bold",
              "7. IMAGEM: Retângulo (R) → 400x300px → Posicione à direita usando grid → Fill: #2D5A4A → Texto 'Imagem aqui' centralizado",
            ],
          },
          {
            name: "Sessão de Benefícios",
            steps: [
              "1. NOVO FRAME: Frame (F) → 1440x400px → Posicione abaixo do Hero",
              "2. FUNDO: Retângulo (R) cobrindo Frame → Fill: #FFFFFF ou #F9F9F9",
              "3. TÍTULO: Texto (T) → 'Por Que Escolher Nosso Curso?' → 36px, Bold, centralizado → 40px do topo",
              "4. PRIMEIRO BENEFÍCIO: Coluna 2-4 do grid → Retângulo ícone 50x50px (#2D5A4A) → Texto 'Aprenda no seu ritmo' (18px, Bold) → Descrição 'Aulas flexíveis' (14px)",
              "5. SEGUNDO BENEFÍCIO: Coluna 5-7 → Repetir estrutura → 'Suporte completo' → 'Tire dúvidas a qualquer momento'",
              "6. TERCEIRO BENEFÍCIO: Coluna 9-11 → Repetir estrutura → 'Certificado' → 'Comprove suas habilidades'",
              "7. ALINHAMENTO: Selecionar todos elementos de cada coluna → Agrupar (Ctrl+G) → Alinhar ao centro da coluna",
            ],
          },
        ],
        practicalTip:
          "Circule pela sala para ajudar. No projetor, demonstre cada passo e peça para alunos compartilharem suas telas.",
      },
    },
    parte4: {
      title: "Criando o Wireframe",
      icon: PenTool,
      duration: "60 min",
      description: "Prática guiada de estruturação visual",
      mainContent:
        "Entender o conceito de wireframe como esqueleto simples de uma landing page e criar um no Figma, aplicando os conceitos das partes anteriores.",
      topics: [
        {
          title: "O que é Wireframe?",
          content:
            "Um wireframe é um rascunho simples da estrutura da página, como um mapa ou esqueleto, sem cores, imagens ou detalhes visuais.",
          highlights: ["Estrutura", "Organização", "Planejamento"],
          details: [
            "Foca apenas na organização dos elementos (posição, tamanho e fluxo)",
            "Ajuda a visualizar a hierarquia e o fluxo sem distrações",
            "Facilita ajustes iniciais antes de investir tempo em cores e fontes",
            "Integra conceitos de design (hierarquia, espaçamento) de forma básica",
          ],
          example:
            "Pense em um blueprint de uma casa – o wireframe é isso para uma landing page, mostrando onde fica o Hero, Benefícios, etc., sem 'decoração'.",
          practicalTip:
            "No projetor, mostre um exemplo de wireframe simples (retângulos cinza com texto genérico) comparado a uma landing page final (ex.: Dropbox wireframe vs. versão real).",
        },
        {
          title: "Preparação",
          content: "Configuração inicial do Figma para criar wireframes eficientes.",
          highlights: ["Paleta cinza", "Frame desktop", "Grid system"],
          details: [
            "Use cinza claro (#F0F0F0) para fundos",
            "Cinza médio (#CCCCCC) para bordas",
            "Texto em cinza escuro (#333333)",
            "Fontes genéricas: Use a padrão do Figma (Inter ou similar)",
            "Tamanho do Frame: Desktop padrão (1440px largura, altura variável por seção)",
          ],
        },
        {
          title: "Prática Guiada",
          content: "Criação passo a passo de um wireframe completo para landing page.",
          highlights: ["Hero", "Benefícios", "Depoimentos", "CTA", "Rodapé"],
          details: [
            "Usar retângulos como placeholders para seções",
            "Texto genérico ('Título aqui', 'Botão aqui')",
            "Espaçamento uniforme (40px interno, 80px entre seções)",
            "Placeholders para imagens com bordas pontilhadas",
          ],
        },
      ],
      guidedPractice: {
        title: "Prática Guiada: Criando o Wireframe Completo",
        description:
          "Criaremos o wireframe para uma landing page fictícia 'Curso de Fotografia Online', usando placeholders simples.",
        sections: [
          {
            name: "Hero com título, texto e botão",
            details: [
              "1. FRAME HERO: Frame (F) → 1440x600px → Painel direito: Fill #F0F0F0, Stroke #CCCCCC (1px)",
              "2. TÍTULO PLACEHOLDER: Texto (T) → Clique 100px do topo, centro → 'TÍTULO PRINCIPAL AQUI' → 48px, Bold → Align: Center",
              "3. SUBTÍTULO: Texto (T) → 20px abaixo título → 'Subtítulo descritivo aqui' → 24px, Regular → Center",
              "4. BOTÃO: Retângulo (R) → 200x50px → 40px abaixo subtítulo → Center → Stroke #CCCCCC → Texto 'BOTÃO' centralizado",
              "5. IMAGEM PLACEHOLDER: Retângulo (R) → 600x400px → Alinhar grid colunas 7-12 → Fill #E0E0E0 → Texto 'IMAGEM' centro",
              "6. VERIFICAR: Todos elementos alinhados ao grid → Espaçamentos consistentes → Hierarquia visual clara",
            ],
          },
          {
            name: "Sessão de Benefícios",
            details: [
              "1. FRAME SEÇÃO: Frame (F) → 1440x400px → Abaixo Hero → Fill #F0F0F0, Stroke #CCCCCC",
              "2. TÍTULO SEÇÃO: Texto (T) → 'BENEFÍCIOS AQUI' → 36px, Bold → Centro, 40px do topo",
              "3. BLOCO 1: Retângulo 400x200px → Grid colunas 2-4 → Stroke #CCCCCC → Ícone placeholder 50x50px (#CCCCCC) → Título 'BENEFÍCIO 1' → Texto 'Descrição aqui'",
              "4. BLOCO 2: Copiar Bloco 1 (Ctrl+C, Ctrl+V) → Posicionar colunas 5-7 → Alterar texto 'BENEFÍCIO 2'",
              "5. BLOCO 3: Copiar → Colunas 9-11 → 'BENEFÍCIO 3'",
              "6. ALINHAMENTO: Verificar espaçamento igual entre blocos → Alinhar elementos internos → Consistência visual",
            ],
          },
          {
            name: "Sessão de Depoimentos",
            details: [
              "1. FRAME: 1440x300px → Fill #F0F0F0, Stroke #CCCCCC",
              "2. TÍTULO: 'DEPOIMENTOS' → 36px, Bold, centro, 40px topo",
              "3. DEPOIMENTO 1: Retângulo 600x150px → Grid colunas 2-6 → Stroke #CCCCCC → Texto 'Depoimento do cliente aqui...' (16px, itálico) → Nome 'NOME CLIENTE' abaixo",
              "4. DEPOIMENTO 2: Retângulo 600x150px → Colunas 8-12 → Mesma estrutura",
              "5. ESPAÇAMENTO: 40px entre depoimentos → Alinhamento vertical → Padding interno consistente",
            ],
          },
          {
            name: "CTA final e Rodapé",
            details: [
              "1. CTA FRAME: 1440x200px → Fill #F0F0F0, Stroke #CCCCCC",
              "2. TÍTULO CTA: 'CHAMADA FINAL AQUI' → 36px, Bold, centro",
              "3. BOTÃO CTA: Retângulo 200x50px → Centro → Stroke #CCCCCC → Texto 'AÇÃO'",
              "4. RODAPÉ FRAME: 1440x100px → Fill #E0E0E0, Stroke #CCCCCC",
              "5. LINKS ESQUERDA: Texto 'Links • Sobre • Contato' → 16px, esquerda, 20px da borda",
              "6. INFO DIREITA: Texto 'Copyright • Redes Sociais' → 16px, direita, 20px da borda",
            ],
          },
        ],
        practicalTip:
          "Demonstre cada passo no projetor, pausando para alunos replicarem. Circule pela sala para ajudar. No final, peça para compartilharem telas.",
      },
    },
  }

  const summaryContent = {
    keyPoints: [
      {
        part: "Parte 1",
        content:
          "Landing page é uma página com objetivo claro (ex.: vender, cadastrar), composta por elementos como Hero, Benefícios, Prova Social, CTA e Rodapé, que atraem, convencem e incentivam a ação.",
      },
      {
        part: "Parte 2",
        content:
          "Princípios de design incluem hierarquia visual (tamanho, posição, contraste), espaçamento, cores (principal, apoio, contraste) e tipografia (máximo 2 fontes, pesos diferentes) para criar páginas organizadas e confiáveis.",
      },
      {
        part: "Parte 3",
        content:
          "Figma é uma ferramenta gratuita para criar interfaces, com criação de Frames, uso de grid, ferramentas de retângulo e texto, e aplicação prática dos conceitos de design para prototipar landing pages.",
      },
      {
        part: "Parte 4",
        content:
          "Wireframe é um esqueleto simples da landing page, usando placeholders cinza (ex.: retângulos, texto genérico) para planejar a estrutura (Hero, Benefícios, Depoimentos, CTA, Rodapé) antes do design final.",
      },
    ],
    interactionQuestion: "Vocês já acessaram uma landing page que chamou atenção? O que tinha nela?",
    practicalTip:
      "Abra uma página completa (ex.: Airbnb ou Dropbox) e peça para identificarem Hero, Benefícios, Prova Social, CTA e Rodapé.",
    usefulLinks: [
      { name: "Airbnb", url: "https://www.airbnb.com", description: "hero claro e ótima prova social" },
      { name: "Dropbox", url: "https://www.dropbox.com", description: "simplicidade e foco em CTA" },
      { name: "Duolingo", url: "https://www.duolingo.com", description: "excelentes benefícios com ícones" },
      { name: "Netflix", url: "https://www.netflix.com", description: "CTA claro e hero direto" },
      { name: "Spotify", url: "https://www.spotify.com", description: "rodapé bem organizado e navegação simples" },
      { name: "Amazon", url: "https://www.amazon.com", description: "prova social (reviews) bem destacada" },
    ],
  }

  return (
    <div
      className={`min-h-screen transition-all duration-500 relative overflow-hidden ${darkMode ? "bg-[#2D5A4A]" : "bg-[#F5F1EB]"}`}
    >
      <div className="absolute inset-0 opacity-20">
        <div
          className={`w-full h-full ${darkMode ? "opacity-30" : "opacity-40"}`}
          style={{
            backgroundImage: `linear-gradient(${darkMode ? "#F5F1EB" : "#2D5A4A"} 1px, transparent 1px), linear-gradient(90deg, ${darkMode ? "#F5F1EB" : "#2D5A4A"} 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-[#E07A5F]/20 to-[#E07A5F]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#2D5A4A]/20 to-[#2D5A4A]/5 rounded-full blur-2xl"></div>
        <div
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-bl from-[#E07A5F]/15 to-transparent rounded-full blur-xl animate-bounce"
          style={{ animationDuration: "6s" }}
        ></div>
        <div className="absolute top-20 left-1/3 w-32 h-32 bg-[#E07A5F]/10 transform rotate-45 blur-sm"></div>
        <div className="absolute bottom-1/3 right-20 w-24 h-24 bg-[#2D5A4A]/15 transform rotate-12 blur-sm"></div>
        <div className="absolute top-1/2 left-10 w-40 h-1 bg-gradient-to-r from-[#E07A5F]/30 to-transparent transform -rotate-45"></div>
        <div className="absolute bottom-1/4 right-1/3 w-32 h-1 bg-gradient-to-l from-[#2D5A4A]/30 to-transparent transform rotate-45"></div>
      </div>

      <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
        <div className="absolute top-20 left-10 w-3 h-3 bg-[#E07A5F] rounded-full opacity-60 animate-pulse shadow-lg"></div>
        <div className="absolute top-40 right-20 w-4 h-4 bg-[#E07A5F] rounded-full opacity-40 animate-bounce shadow-lg"></div>
        <div className="absolute top-60 left-1/4 w-2 h-2 bg-[#2D5A4A] rounded-full opacity-50 shadow-md"></div>
        <div className="absolute bottom-40 right-10 w-3 h-3 bg-[#E07A5F] rounded-full opacity-30 animate-pulse shadow-lg"></div>
        <div className="absolute bottom-60 left-20 w-2 h-2 bg-[#2D5A4A] rounded-full opacity-40 shadow-md"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-[#E07A5F] rounded-full opacity-20 animate-bounce shadow-lg"></div>
        <div className="absolute top-1/4 left-1/2 w-1 h-8 bg-[#E07A5F]/40 transform rotate-45"></div>
        <div className="absolute bottom-1/3 left-1/4 w-6 h-1 bg-[#2D5A4A]/40 transform -rotate-12"></div>
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-[#E07A5F] transform rotate-45 opacity-50"></div>
      </div>

      {/* Header */}
      <header className="relative z-20 flex items-center justify-between p-6 max-w-7xl mx-auto">
        <Button
          variant="ghost"
          className={`flex items-center gap-2 ${darkMode ? "text-[#F5F1EB] hover:text-[#E07A5F]" : "text-[#2D5A4A] hover:text-[#E07A5F]"} transition-colors duration-300 backdrop-blur-sm`}
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar
        </Button>
        <Button
          variant="ghost"
          onClick={toggleDarkMode}
          className={`${darkMode ? "text-[#F5F1EB] hover:text-[#E07A5F]" : "text-[#2D5A4A] hover:text-[#E07A5F]"} transition-colors duration-300 backdrop-blur-sm`}
        >
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          {darkMode ? "Light" : "Dark"}
        </Button>
      </header>

      <section className="relative z-20 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1
                className={`text-5xl lg:text-6xl font-bold leading-tight ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"} transition-colors duration-500 drop-shadow-sm`}
              >
                Supermódulo
                <br />
                <span className="text-[#E07A5F] drop-shadow-lg">Creative Code</span>
                <br />
                UX/UI Design
              </h1>
              <p
                className={`text-lg ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"} transition-colors duration-500 backdrop-blur-sm`}
              >
                Domine os fundamentos visuais que transformam páginas comuns em experiências incríveis. Aprenda design
                de forma prática e objetiva, criando landing pages que convertem.
              </p>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full">
                <Clock className="w-5 h-5 text-[#E07A5F]" />
                <span className={`${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>3 horas</span>
              </div>
              <div className="flex items-center gap-2 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full">
                <Users className="w-5 h-5 text-[#E07A5F]" />
                <span className={`${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>Aula ao vivo</span>
              </div>
              <div className="flex items-center gap-2 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full">
                <Award className="w-5 h-5 text-[#E07A5F]" />
                <span className={`${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>Certificado</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#E07A5F]/20 to-[#2D5A4A]/20 rounded-3xl blur-xl"></div>

            <Card
              className={`relative ${darkMode ? "bg-[#F5F1EB]/10 backdrop-blur-md border-[#F5F1EB]/20" : "bg-white/80 backdrop-blur-md border-white/50"} shadow-2xl transition-all duration-500 transform hover:scale-105 border-2`}
            >
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#E07A5F] to-[#E07A5F]/80 rounded-full flex items-center justify-center shadow-lg">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className={`font-semibold text-lg ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"}`}>
                      Objetivo da Aula
                    </h3>
                    <p className={`text-sm ${darkMode ? "text-[#F5F1EB]/70" : "text-[#2D5A4A]/70"}`}>
                      Fundamentos práticos de design
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#E07A5F] mt-0.5 flex-shrink-0 drop-shadow-sm" />
                    <p className={`text-sm ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>
                      Conceitos visuais para páginas mais atrativas
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#E07A5F] mt-0.5 flex-shrink-0 drop-shadow-sm" />
                    <p className={`text-sm ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>
                      Criação de wireframe profissional no Figma
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#E07A5F] mt-0.5 flex-shrink-0 drop-shadow-sm" />
                    <p className={`text-sm ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>
                      Estrutura completa de landing page
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <AdSenseAd slot="1234567890" className={`${darkMode ? "bg-[#2D5A4A]/5" : "bg-[#F5F1EB]/50"} rounded-lg p-4`} />

      <section className="relative z-20 max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl font-bold mb-6 ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"} transition-colors duration-500 drop-shadow-sm`}
          >
            Conteúdo Detalhado do Supermódulo
          </h2>
          <p
            className={`text-lg max-w-3xl mx-auto ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"} transition-colors duration-500`}
          >
            Explore cada parte da aula com detalhes práticos e exemplos reais
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(courseContent).map(([key, content]) => {
            const IconComponent = content.icon
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 backdrop-blur-sm border-2 ${
                  activeTab === key
                    ? `${darkMode ? "bg-[#E07A5F]/20 border-[#E07A5F] text-[#F5F1EB]" : "bg-[#E07A5F]/20 border-[#E07A5F] text-[#2D5A4A]"}`
                    : `${darkMode ? "bg-[#F5F1EB]/10 border-[#F5F1EB]/20 text-[#F5F1EB]/70 hover:text-[#F5F1EB]" : "bg-white/50 border-white/30 text-[#2D5A4A]/70 hover:text-[#2D5A4A]"}`
                } hover:scale-105 shadow-lg`}
              >
                <IconComponent className="w-5 h-5" />
                <span className="font-medium">{content.title}</span>
                <div className="flex items-center gap-1 text-xs opacity-70">
                  <Clock className="w-3 h-3" />
                  {content.duration}
                </div>
              </button>
            )
          })}
        </div>

        {/* ... existing code for tab content and all other sections ... */}
        <div className="space-y-8">
          {Object.entries(courseContent).map(([key, content]) => {
            if (activeTab !== key) return null
            const IconComponent = content.icon

            return (
              <div key={key} className="space-y-8">
                <div className="text-center space-y-4">
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#E07A5F] to-[#E07A5F]/70 rounded-full flex items-center justify-center shadow-lg">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className={`text-2xl font-bold ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"}`}>
                        {content.title}
                      </h3>
                      <p className={`${darkMode ? "text-[#F5F1EB]/70" : "text-[#2D5A4A]/70"}`}>{content.description}</p>
                    </div>
                  </div>
                  {content.mainContent && (
                    <p className={`text-lg max-w-4xl mx-auto ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>
                      {content.mainContent}
                    </p>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {content.topics.map((topic, topicIndex) => (
                    <Card
                      key={topicIndex}
                      className={`${darkMode ? "bg-[#F5F1EB]/10 backdrop-blur-md border-[#F5F1EB]/20" : "bg-white/80 backdrop-blur-md border-white/50"} shadow-lg transition-all duration-500 hover:scale-105 border-2 group`}
                    >
                      <CardContent className="p-6 space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-[#E07A5F] to-[#E07A5F]/70 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                            <span className="text-white font-bold text-sm">{topicIndex + 1}</span>
                          </div>
                          <div className="flex-1">
                            <h4
                              className={`font-semibold text-lg mb-2 ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"}`}
                            >
                              {topic.title}
                            </h4>
                            <p className={`text-sm mb-4 ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>
                              {topic.content}
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {topic.highlights.map((highlight, highlightIndex) => (
                            <span
                              key={highlightIndex}
                              className="px-3 py-1 bg-[#E07A5F]/20 text-[#E07A5F] rounded-full text-xs font-medium backdrop-blur-sm"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>

                        {topic.details && (
                          <div className="space-y-2">
                            <button
                              onClick={() => toggleSection(`${key}-${topicIndex}`)}
                              className={`flex items-center gap-2 text-sm font-medium ${darkMode ? "text-[#F5F1EB]/70 hover:text-[#F5F1EB]" : "text-[#2D5A4A]/70 hover:text-[#2D5A4A]"} transition-colors`}
                            >
                              <ChevronRight
                                className={`w-4 h-4 transition-transform ${expandedSection === `${key}-${topicIndex}` ? "rotate-90" : ""}`}
                              />
                              Ver detalhes
                            </button>

                            {expandedSection === `${key}-${topicIndex}` && (
                              <div className="space-y-2 pl-6 border-l-2 border-[#E07A5F]/30">
                                {topic.details.map((detail, detailIndex) => (
                                  <div key={detailIndex} className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 bg-[#E07A5F] rounded-full mt-2 flex-shrink-0"></div>
                                    <p className={`text-sm ${darkMode ? "text-[#F5F1EB]/70" : "text-[#2D5A4A]/70"}`}>
                                      {detail}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        )}

                        {topic.example && (
                          <div className="mt-4 p-3 bg-[#2D5A4A]/10 rounded-lg">
                            <p className={`text-sm ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>
                              <strong>Exemplo:</strong> {topic.example}
                            </p>
                          </div>
                        )}

                        {topic.practicalTip && (
                          <div className="mt-4 p-3 bg-[#E07A5F]/10 rounded-lg">
                            <p className={`text-sm ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>
                              <strong>💡 Parte prática:</strong> {topic.practicalTip}
                            </p>
                          </div>
                        )}

                        {topic.tips && (
                          <div className="mt-4 space-y-2">
                            <h5 className={`text-sm font-medium ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"}`}>
                              Dicas:
                            </h5>
                            {topic.tips.map((tip, tipIndex) => (
                              <div key={tipIndex} className="flex items-start gap-2">
                                <Star className="w-3 h-3 text-[#E07A5F] mt-1 flex-shrink-0" />
                                <p className={`text-sm ${darkMode ? "text-[#F5F1EB]/70" : "text-[#2D5A4A]/70"}`}>
                                  {tip}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* ... existing code for special sections ... */}
                {key === "parte2" && content.exerciseContent && (
                  <Card
                    className={`${darkMode ? "bg-[#F5F1EB]/10 backdrop-blur-md border-[#F5F1EB]/20" : "bg-white/80 backdrop-blur-md border-white/50"} shadow-lg border-2`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <CheckCircle className="w-6 h-6 text-[#E07A5F]" />
                        <h4 className={`text-xl font-semibold ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"}`}>
                          {content.exerciseContent.title}
                        </h4>
                      </div>
                      <p className={`text-sm mb-4 ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>
                        <strong>Atividade:</strong> {content.exerciseContent.description}
                      </p>
                      <div className="space-y-2 mb-4">
                        {content.exerciseContent.examples.map((example, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-[#E07A5F] rounded-full mt-2 flex-shrink-0"></div>
                            <p className={`text-sm ${darkMode ? "text-[#F5F1EB]/70" : "text-[#2D5A4A]/70"}`}>
                              {example}
                            </p>
                          </div>
                        ))}
                      </div>
                      <p className={`text-sm mb-2 ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>
                        <strong>Pergunta:</strong> {content.exerciseContent.question}
                      </p>
                      <div className="p-3 bg-[#E07A5F]/10 rounded-lg">
                        <p className={`text-sm ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>
                          <strong>💡 Parte prática:</strong> {content.exerciseContent.practicalTip}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {key === "parte3" && content.practicalActivity && (
                  <Card
                    className={`${darkMode ? "bg-[#F5F1EB]/10 backdrop-blur-md border-[#F5F1EB]/20" : "bg-white/80 backdrop-blur-md border-white/50"} shadow-lg border-2`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <PenTool className="w-6 h-6 text-[#E07A5F]" />
                        <h4 className={`text-xl font-semibold ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"}`}>
                          {content.practicalActivity.title}
                        </h4>
                      </div>
                      <p className={`text-sm mb-4 ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>
                        {content.practicalActivity.description}
                      </p>
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div className="p-3 bg-[#E07A5F]/10 rounded-lg">
                          <p className={`text-sm ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>
                            <strong>Paleta:</strong> {content.practicalActivity.palette}
                          </p>
                        </div>
                        <div className="p-3 bg-[#2D5A4A]/10 rounded-lg">
                          <p className={`text-sm ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>
                            <strong>Fontes:</strong> {content.practicalActivity.fonts}
                          </p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        {content.practicalActivity.sections.map((section, index) => (
                          <div key={index} className="border-l-4 border-[#E07A5F]/30 pl-4">
                            <h5 className={`font-medium mb-2 ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"}`}>
                              {section.name}
                            </h5>
                            <div className="space-y-1">
                              {section.steps.map((step, stepIndex) => (
                                <div key={stepIndex} className="flex items-start gap-2">
                                  <span className="text-[#E07A5F] font-bold text-xs mt-1">{stepIndex + 1}.</span>
                                  <p className={`text-sm ${darkMode ? "text-[#F5F1EB]/70" : "text-[#2D5A4A]/70"}`}>
                                    {step}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 p-3 bg-[#E07A5F]/10 rounded-lg">
                        <p className={`text-sm ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>
                          <strong>💡 Parte prática:</strong> {content.practicalActivity.practicalTip}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {key === "parte4" && content.guidedPractice && (
                  <Card
                    className={`${darkMode ? "bg-[#F5F1EB]/10 backdrop-blur-md border-[#F5F1EB]/20" : "bg-white/80 backdrop-blur-md border-white/50"} shadow-lg border-2`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Layout className="w-6 h-6 text-[#E07A5F]" />
                        <h4 className={`text-xl font-semibold ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"}`}>
                          {content.guidedPractice.title}
                        </h4>
                      </div>
                      <p className={`text-sm mb-6 ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>
                        {content.guidedPractice.description}
                      </p>
                      <div className="grid md:grid-cols-2 gap-6">
                        {content.guidedPractice.sections.map((section, index) => (
                          <div key={index} className="space-y-3">
                            <h5 className={`font-medium ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"}`}>
                              {section.name}
                            </h5>
                            <div className="space-y-2">
                              {section.details.map((detail, detailIndex) => (
                                <div key={detailIndex} className="flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 bg-[#E07A5F] rounded-full mt-2 flex-shrink-0"></div>
                                  <p className={`text-sm ${darkMode ? "text-[#F5F1EB]/70" : "text-[#2D5A4A]/70"}`}>
                                    {detail}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 p-3 bg-[#E07A5F]/10 rounded-lg">
                        <p className={`text-sm ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>
                          <strong>💡 Parte prática:</strong> {content.guidedPractice.practicalTip}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            )
          })}
        </div>
      </section>

      <AdSenseAd
        slot="0987654321"
        format="rectangle"
        className={`${darkMode ? "bg-[#2D5A4A]/5" : "bg-[#F5F1EB]/50"} rounded-lg p-4`}
      />

      {/* Summary Section */}
      <section className="relative z-20 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2
              className={`text-4xl font-bold ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"} transition-colors duration-500 drop-shadow-sm`}
            >
              Por que escolher este
              <br />
              <span className="text-[#E07A5F] drop-shadow-lg">Supermódulo?</span>
            </h2>
            <p
              className={`text-lg ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"} transition-colors duration-500`}
            >
              Uma abordagem prática e direta para dominar os fundamentos do design, com foco total no seu aprendizado e
              aplicação imediata.
            </p>

            <div className="grid gap-4">
              {[
                { icon: Target, text: "Metodologia prática sem enrolação", color: "from-blue-500/20 to-cyan-500/20" },
                {
                  icon: Play,
                  text: "Exercícios hands-on durante a aula",
                  color: "from-green-500/20 to-emerald-500/20",
                },
                { icon: Users, text: "Suporte completo para dúvidas", color: "from-purple-500/20 to-pink-500/20" },
                { icon: BookOpen, text: "Material de apoio incluso", color: "from-orange-500/20 to-red-500/20" },
                { icon: Award, text: "Certificado de participação", color: "from-yellow-500/20 to-orange-500/20" },
              ].map((benefit, index) => (
                <div key={index} className="group relative">
                  <div
                    className={`absolute -inset-2 bg-gradient-to-r ${benefit.color} rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  ></div>
                  <div
                    className={`relative flex items-center gap-4 p-4 rounded-xl ${darkMode ? "bg-[#F5F1EB]/10 backdrop-blur-md" : "bg-white/50 backdrop-blur-md"} transition-all duration-300 group-hover:scale-105`}
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-[#E07A5F] to-[#E07A5F]/70 rounded-full flex items-center justify-center shadow-lg">
                      <benefit.icon className="w-5 h-5 text-white" />
                    </div>
                    <span
                      className={`font-medium ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"} transition-colors duration-300`}
                    >
                      {benefit.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { number: "3h", label: "Duração Total", icon: Clock, gradient: "from-blue-500/20 to-cyan-500/20" },
              { number: "100%", label: "Prático", icon: Target, gradient: "from-green-500/20 to-emerald-500/20" },
              { number: "1", label: "Projeto Real", icon: Code, gradient: "from-purple-500/20 to-pink-500/20" },
              { number: "∞", label: "Suporte", icon: Users, gradient: "from-orange-500/20 to-red-500/20" },
            ].map((stat, index) => (
              <div key={index} className="relative group">
                <div
                  className={`absolute -inset-2 bg-gradient-to-r ${stat.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                <Card
                  className={`relative ${darkMode ? "bg-[#F5F1EB]/10 backdrop-blur-md border-[#F5F1EB]/20" : "bg-white/80 backdrop-blur-md border-white/50"} shadow-lg transition-all duration-500 transform hover:scale-105 border-2`}
                >
                  <CardContent className="p-6 text-center space-y-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#E07A5F] to-[#E07A5F]/70 rounded-full flex items-center justify-center mx-auto shadow-lg">
                      <stat.icon className="w-6 h-6 text-white drop-shadow-sm" />
                    </div>
                    <div
                      className={`text-2xl font-bold ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"} drop-shadow-sm`}
                    >
                      {stat.number}
                    </div>
                    <div className={`text-sm ${darkMode ? "text-[#F5F1EB]/70" : "text-[#2D5A4A]/70"}`}>
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-20 max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2
            className={`text-4xl font-bold mb-6 ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"} transition-colors duration-500 drop-shadow-sm`}
          >
            Resumo da Jornada
          </h2>
          <p
            className={`text-lg max-w-3xl mx-auto ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"} transition-colors duration-500`}
          >
            O que você vai dominar ao final do supermódulo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              title: "Landing Pages",
              description: "Elementos essenciais e estrutura que converte",
              icon: Lightbulb,
              points: ["Hero Section", "Benefícios", "Prova Social", "CTA eficaz"],
            },
            {
              title: "Design Visual",
              description: "Princípios que criam páginas profissionais",
              icon: Palette,
              points: ["Hierarquia", "Espaçamento", "Cores", "Tipografia"],
            },
            {
              title: "Figma Prático",
              description: "Domínio das ferramentas essenciais",
              icon: Monitor,
              points: ["Frames", "Grid System", "Componentes", "Exportação"],
            },
            {
              title: "Wireframe Real",
              description: "Projeto completo do zero ao fim",
              icon: PenTool,
              points: ["Estrutura", "Placeholders", "Organização", "Finalização"],
            },
          ].map((item, index) => (
            <Card
              key={index}
              className={`${darkMode ? "bg-[#F5F1EB]/10 backdrop-blur-md border-[#F5F1EB]/20" : "bg-white/80 backdrop-blur-md border-white/50"} shadow-lg transition-all duration-500 hover:scale-105 border-2 group`}
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#E07A5F] to-[#E07A5F]/70 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-center space-y-2">
                  <h3 className={`font-semibold text-lg ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"}`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm ${darkMode ? "text-[#F5F1EB]/70" : "text-[#2D5A4A]/70"}`}>
                    {item.description}
                  </p>
                </div>
                <div className="space-y-2">
                  {item.points.map((point, pointIndex) => (
                    <div key={pointIndex} className="flex items-center gap-2">
                      <Star className="w-3 h-3 text-[#E07A5F] flex-shrink-0" />
                      <span className={`text-xs ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>{point}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card
            className={`${darkMode ? "bg-[#F5F1EB]/10 backdrop-blur-md border-[#F5F1EB]/20" : "bg-white/80 backdrop-blur-md border-white/50"} shadow-lg border-2`}
          >
            <CardContent className="p-6">
              <h3 className={`text-xl font-semibold mb-4 ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"}`}>
                Pontos-Chave da Aula
              </h3>
              <div className="space-y-4">
                {summaryContent.keyPoints.map((point, index) => (
                  <div key={index} className="border-l-4 border-[#E07A5F]/30 pl-4">
                    <h4 className={`font-medium text-sm mb-1 ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"}`}>
                      {point.part}
                    </h4>
                    <p className={`text-sm ${darkMode ? "text-[#F5F1EB]/70" : "text-[#2D5A4A]/70"}`}>{point.content}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card
            className={`${darkMode ? "bg-[#F5F1EB]/10 backdrop-blur-md border-[#F5F1EB]/20" : "bg-white/80 backdrop-blur-md border-white/50"} shadow-lg border-2`}
          >
            <CardContent className="p-6">
              <h3 className={`text-xl font-semibold mb-4 ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"}`}>
                Interação com a Turma
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-[#E07A5F]/10 rounded-lg">
                  <h4 className={`font-medium text-sm mb-2 ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"}`}>
                    Pergunta para discussão:
                  </h4>
                  <p className={`text-sm ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>
                    "{summaryContent.interactionQuestion}"
                  </p>
                </div>
                <div className="p-4 bg-[#2D5A4A]/10 rounded-lg">
                  <h4 className={`font-medium text-sm mb-2 ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"}`}>
                    💡 Atividade prática:
                  </h4>
                  <p className={`text-sm ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>
                    {summaryContent.practicalTip}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card
          className={`${darkMode ? "bg-[#F5F1EB]/10 backdrop-blur-md border-[#F5F1EB]/20" : "bg-white/80 backdrop-blur-md border-white/50"} shadow-lg border-2`}
        >
          <CardContent className="p-6">
            <h3 className={`text-xl font-semibold mb-4 ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"}`}>
              Landing Pages de Referência
            </h3>
            <p className={`text-sm mb-6 ${darkMode ? "text-[#F5F1EB]/70" : "text-[#2D5A4A]/70"}`}>
              Exemplos de landing pages bem feitas para análise e inspiração
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {summaryContent.usefulLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 p-4 rounded-lg transition-all duration-300 hover:scale-105 ${darkMode ? "bg-[#F5F1EB]/5 hover:bg-[#F5F1EB]/10" : "bg-white/30 hover:bg-white/50"} border border-white/20`}
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-[#E07A5F] to-[#E07A5F]/70 rounded-full flex items-center justify-center shadow-md">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-medium text-sm ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"}`}>
                      {link.name}
                    </h4>
                    <p className={`text-xs ${darkMode ? "text-[#F5F1EB]/70" : "text-[#2D5A4A]/70"}`}>
                      {link.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <AdSenseAd
        slot="1122334455"
        format="horizontal"
        className={`${darkMode ? "bg-[#2D5A4A]/5" : "bg-[#F5F1EB]/50"} rounded-lg p-4 mb-8`}
      />

      <footer className="relative z-20 max-w-7xl mx-auto px-6 py-12 text-center">
        <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8">
          <p
            className={`text-sm ${darkMode ? "text-[#F5F1EB]/60" : "text-[#2D5A4A]/60"} transition-colors duration-500`}
          >
            © 2024 Nathalia Macedo - Supermódulo Creative Code UX/UI Design
          </p>
        </div>
      </footer>

      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
        crossOrigin="anonymous"
      ></script>
      <script>
        {`
          (adsbygoogle = window.adsbygoogle || []).push({});
        `}
      </script>
    </div>
  )
}
