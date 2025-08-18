"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import {
  Moon,
  Sun,
  ArrowLeft,
  Users,
  Clock,
  Target,
  Lightbulb,
  Palette,
  CheckCircle,
  Award,
  PenTool,
  ChevronRight,
  Star,
  Layout,
  ExternalLink,
  Eye,
  Download,
  ImageIcon,
  Layers,
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



export default function Aula2() {
  const [darkMode, setDarkMode] = useState(false)
  const [activeTab, setActiveTab] = useState("exemplos")
  const [expandedSection, setExpandedSection] = useState(null)
  const navigate = useNavigate()

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
    exemplos: {
      title: "Exemplos de Landing Pages",
      icon: Eye,
      duration: "30 min",
      description: "Análise de sites profissionais vs amadores",
      mainContent:
        "Vamos analisar exemplos reais para entender o que faz uma landing page parecer profissional e o que a torna amadora.",
      topics: [
        {
          title: "✅ Exemplos Profissionais",
          content: "Esses sites transmitem credibilidade, têm bom design e são fáceis de navegar:",
          highlights: ["Credibilidade", "Bom design", "Fácil navegação"],
          details: [
            "Nubank - Design limpo e minimalista",
            "Apple - Hierarquia visual perfeita",
            "Airbnb - Experiência do usuário intuitiva",
            "Spotify - Cores vibrantes e organizadas",
            "Notion - Tipografia clara e funcional",
            "Figma - Layout moderno e profissional",
            "Slack - Comunicação visual eficiente",
            "Mercado Pago - Confiança e simplicidade",
          ],
        },
        {
          title: "❌ Exemplos Amadores ou Poluídos",
          content:
            "Esses sites têm problemas de excesso de informação, desorganização visual ou estética ultrapassada:",
          highlights: ["Excesso de informação", "Desorganização", "Estética ultrapassada"],
          details: [
            "Americanas - Muita informação na tela",
            "Mercado Livre - Layout sobrecarregado",
            "Magazine Luiza - Cores em excesso",
            "Casas Bahia - Falta de hierarquia visual",
            "OLX - Organização confusa",
            "Kabum - Poluição visual excessiva",
          ],
        },
        {
          title: "🔎 O que observar nesses sites?",
          content: "Critérios para avaliar a qualidade visual de uma landing page:",
          highlights: ["Primeira impressão", "Tipografia", "Cores", "Layout"],
          details: [
            "Primeira impressão: o site parece confiável?",
            "Tipografia: fontes legíveis, boa hierarquia?",
            "Cores: existe harmonia? contraste suficiente?",
            "Imagens e ícones: profissionais ou genéricos?",
            "Layout: organizado ou caótico?",
            "CTA (botão de ação): claro e chamativo?",
          ],
          practicalTip: "Compare 1 site bom e 1 ruim. Liste rapidamente o que diferencia um do outro.",
        },
      ],
    },
    wireframeLayout: {
      title: "Do Wireframe ao Layout Final",
      icon: Layout,
      duration: "45 min",
      description: "Transformando estrutura em design visual",
      mainContent:
        "Um wireframe é só o esqueleto: caixas cinzas, textos de exemplo, apenas a estrutura da página. O layout final é quando aplicamos tipografia, cores, imagens e componentes organizados.",
      topics: [
        {
          title: "O que é um Wireframe?",
          content: "Um wireframe é o 'rascunho' da página, mostrando apenas a estrutura sem elementos visuais.",
          highlights: ["Estrutura básica", "Sem cores", "Sem imagens"],
          details: [
            "Caixas cinzas representando seções",
            "Textos de exemplo (Lorem ipsum)",
            "Apenas a organização dos elementos",
            "Foco na hierarquia e fluxo de informação",
          ],
          example: "Pense em um blueprint de uma casa – o wireframe é isso para uma landing page.",
        },
        {
          title: "O que é um Layout Final?",
          content: "O layout final é quando aplicamos todos os elementos visuais ao wireframe.",
          highlights: ["Tipografia real", "Cores definidas", "Imagens profissionais"],
          details: [
            "Tipografia (fontes certas)",
            "Cores (paleta harmoniosa)",
            "Imagens e ícones",
            "Componentes organizados",
            "Espaçamentos refinados",
          ],
          example: "É a diferença entre o 'rascunho' e o 'visual real' que passa confiança.",
        },
        {
          title: "Processo de Transformação",
          content: "Passos para transformar wireframe em layout profissional:",
          highlights: ["Definir paleta", "Escolher fontes", "Adicionar imagens"],
          details: [
            "1. Definir paleta de cores (3-5 cores máximo)",
            "2. Escolher tipografia (máximo 2 fontes)",
            "3. Substituir placeholders por imagens reais",
            "4. Criar componentes reutilizáveis",
            "5. Refinar espaçamentos e alinhamentos",
            "6. Adicionar estados de interação (hover, focus)",
          ],
        },
      ],
    },
    coresFontes: {
      title: "Cores e Fontes",
      icon: Palette,
      duration: "60 min",
      description: "Escolha estratégica de paleta e tipografia",
      mainContent:
        "A escolha correta de cores e fontes é fundamental para transmitir profissionalismo e criar uma identidade visual coesa.",
      topics: [
        {
          title: "🎨 Escolha de Cores",
          content: "Uma paleta deve ter cores principais, de apoio e neutras.",
          highlights: ["Cor primária", "Cor secundária", "Neutras"],
          details: [
            "Cor primária → identidade da marca",
            "Cor secundária → apoio e contraste",
            "Neutras → fundo, textos e contrastes",
            "Use ferramentas como Coolors e Color Hunt",
            "Máximo 3-5 cores na paleta total",
          ],
          practicalTip: "Teste sempre o contraste entre texto e fundo para garantir legibilidade.",
          tools: ["Coolors.co", "Color Hunt", "Adobe Color"],
        },
        {
          title: "✍️ Escolha de Fontes",
          content: "Vá no Google Fonts e combine uma fonte para títulos e outra para texto.",
          highlights: ["Google Fonts", "Combinação", "Hierarquia"],
          details: [
            "Exemplos que sempre funcionam:",
            "• Montserrat (título) + Roboto (texto)",
            "• Poppins (título) + Open Sans (texto)",
            "• Playfair Display (título) + Source Sans Pro (texto)",
          ],
          tips: [
            "Título: fonte forte e chamativa",
            "Corpo: fonte leve e fácil de ler",
            "Máximo 2 famílias de fontes",
            "Use pesos diferentes (regular, bold) para criar hierarquia",
          ],
          practicalTip: "Teste a legibilidade em diferentes tamanhos de tela.",
        },
        {
          title: "Regras Práticas",
          content: "Diretrizes essenciais para escolhas acertadas:",
          highlights: ["Contraste", "Consistência", "Legibilidade"],
          details: [
            "Contraste mínimo de 4.5:1 para texto normal",
            "Contraste mínimo de 3:1 para texto grande",
            "Use a regra 60-30-10 para distribuição de cores",
            "Teste em dispositivos diferentes",
            "Considere acessibilidade (daltonismo)",
          ],
        },
      ],
    },
    imagensIcones: {
      title: "Imagens e Ícones",
      icon: ImageIcon,
      duration: "45 min",
      description: "Recursos visuais profissionais",
      mainContent:
        "Imagens boas fazem toda diferença. Ícones consistentes dão mais clareza. Vamos aprender onde encontrar e como usar esses recursos.",
      topics: [
        {
          title: "📸 Imagens Profissionais",
          content: "Use Unsplash → fotos profissionais gratuitas.",
          highlights: ["Alta qualidade", "Gratuitas", "Profissionais"],
          details: [
            "Unsplash.com - maior biblioteca gratuita",
            "Pexels.com - alternativa com boa qualidade",
            "Pixabay.com - variedade de estilos",
            "Sempre verificar licença de uso",
            "Prefira imagens em alta resolução",
          ],
          tips: [
            "Prefira imagens de alta qualidade, alinhadas ao tema",
            "Evite imagens genéricas de banco de imagens óbvias",
            "Mantenha consistência no estilo fotográfico",
            "Otimize o tamanho para web (WebP quando possível)",
          ],
        },
        {
          title: "🎯 Ícones Consistentes",
          content: "Use Flaticon → biblioteca de ícones.",
          highlights: ["Consistência", "Estilo único", "Clareza"],
          details: [
            "Flaticon.com - maior biblioteca de ícones",
            "Feather Icons - ícones minimalistas",
            "Heroicons - ícones para interfaces",
            "Lucide - evolução do Feather Icons",
            "Font Awesome - ícones clássicos",
          ],
          tips: [
            "Nunca misture estilos (ícone flat com 3D, por exemplo)",
            "Use o mesmo peso de linha em todos os ícones",
            "Mantenha o mesmo tamanho base",
            "Prefira SVG para escalabilidade",
          ],
        },
        {
          title: "Dicas Importantes",
          content: "Regras para uso eficiente de recursos visuais:",
          highlights: ["Qualidade", "Consistência", "Otimização"],
          details: [
            "Sempre use imagens em alta resolução",
            "Mantenha consistência no estilo visual",
            "Otimize imagens para web (compressão)",
            "Use formatos adequados: JPG (fotos), PNG (transparência), SVG (ícones)",
            "Considere lazy loading para performance",
          ],
        },
      ],
    },
    componentes: {
      title: "Criando Componentes no Figma",
      icon: Layers,
      duration: "60 min",
      description: "Elementos reutilizáveis e consistentes",
      mainContent:
        "Componentes são peças reutilizáveis: botões, cards, menus. Se precisar mudar algo, basta atualizar o componente que tudo se ajusta.",
      topics: [
        {
          title: "O que são Componentes?",
          content: "Elementos reutilizáveis que garantem consistência visual.",
          highlights: ["Reutilizáveis", "Consistência", "Eficiência"],
          details: [
            "Botões com diferentes estados",
            "Cards de conteúdo",
            "Menus de navegação",
            "Formulários padronizados",
            "Ícones com estilos consistentes",
          ],
          example: "Se você tem 10 botões iguais e precisa mudar a cor, altera apenas o componente principal.",
        },
        {
          title: "Criando um Botão Completo",
          content: "Exemplo prático: criar um botão com todos os estados.",
          highlights: ["Estado normal", "Estado hover", "Estado clicado"],
          details: [
            "Estado normal - aparência padrão",
            "Estado hover - quando o mouse passa por cima",
            "Estado clicado/ativo - quando pressionado",
            "Estado desabilitado - quando não pode ser usado",
            "Variantes: primário, secundário, outline",
          ],
          practicalTip: "Use Auto Layout no Figma para que o componente se adapte ao conteúdo.",
        },
        {
          title: "Auto Layout no Figma",
          content: "Ferramenta essencial para componentes flexíveis.",
          highlights: ["Flexibilidade", "Responsividade", "Automação"],
          details: [
            "Permite que elementos se ajustem automaticamente",
            "Funciona como Flexbox no CSS",
            "Ideal para botões, cards e listas",
            "Facilita manutenção e atualizações",
            "Economiza tempo e garante consistência visual",
          ],
        },
        {
          title: "Vantagens dos Componentes",
          content: "Por que usar componentes em seus projetos:",
          highlights: ["Economia de tempo", "Consistência", "Manutenção fácil"],
          details: [
            "Mudanças globais com um clique",
            "Consistência visual garantida",
            "Redução de erros de design",
            "Facilita colaboração em equipe",
            "Acelera o processo de design",
          ],
        },
      ],
    },
    praticaLayout: {
      title: "Prática: Finalizando o Layout",
      icon: PenTool,
      duration: "90 min",
      description: "Aplicação prática de todos os conceitos",
      mainContent:
        "Agora é hora de aplicar tudo que aprendemos: pegar o wireframe inicial, escolher paleta e fontes, substituir imagens e criar componentes.",
      topics: [
        {
          title: "Passo 1: Preparação",
          content: "Organize seu wireframe e defina diretrizes visuais.",
          highlights: ["Wireframe base", "Paleta definida", "Fontes escolhidas"],
          details: [
            "Pegue o wireframe criado na aula anterior",
            "Defina sua paleta de cores (3-5 cores)",
            "Escolha suas fontes (máximo 2 famílias)",
            "Prepare suas imagens e ícones",
            "Organize layers no Figma",
          ],
        },
        {
          title: "Passo 2: Aplicação Visual",
          content: "Transforme o wireframe cinza em layout colorido.",
          highlights: ["Cores aplicadas", "Tipografia definida", "Imagens reais"],
          details: [
            "Substitua fundos cinzas pelas cores da paleta",
            "Aplique tipografia nos textos placeholder",
            "Substitua imagens placeholder por fotos reais",
            "Adicione ícones consistentes",
            "Refine espaçamentos e alinhamentos",
          ],
        },
        {
          title: "Passo 3: Componentes",
          content: "Transforme elementos repetitivos em componentes.",
          highlights: ["Botões", "Cards", "Ícones"],
          details: [
            "Crie componentes para botões (com estados)",
            "Transforme cards em componentes reutilizáveis",
            "Padronize ícones como componentes",
            "Use Auto Layout onde necessário",
            "Teste variações dos componentes",
          ],
        },
        {
          title: "Passo 4: Refinamento",
          content: "Ajustes finais para um resultado profissional.",
          highlights: ["Espaçamento", "Alinhamento", "Consistência"],
          details: [
            "Ajuste espaçamentos usando grid",
            "Verifique alinhamentos em todas as seções",
            "Garanta consistência visual",
            "Teste em diferentes tamanhos de tela",
            "Finalize detalhes de interação",
          ],
        },
      ],
      result: "➡️ Resultado: um layout limpo, profissional e pronto para ser usado no código.",
    },
    exportacao: {
      title: "Exportando para Código",
      icon: Download,
      duration: "30 min",
      description: "Preparando assets para desenvolvimento",
      mainContent:
        "Aprenda a exportar corretamente imagens, ícones e especificações para que o desenvolvedor possa implementar seu design.",
      topics: [
        {
          title: "Exportar Imagens",
          content: "Formatos e resoluções corretas para cada tipo de conteúdo.",
          highlights: ["PNG para fotos", "SVG para ícones", "Múltiplas resoluções"],
          details: [
            "PNG - para fotos e imagens com transparência",
            "JPG - para fotos sem transparência (menor tamanho)",
            "SVG - para ícones (escalável e leve)",
            "WebP - formato moderno, menor tamanho",
          ],
          tips: [
            "Sempre exportar em 2 resoluções: normal e @2x (para telas retina)",
            "Use compressão adequada para web",
            "Nomeie arquivos de forma organizada",
            "Considere lazy loading para imagens grandes",
          ],
        },
        {
          title: "Exportar Especificações",
          content: "Informações técnicas para o desenvolvedor.",
          highlights: ["Cores em hex", "Fontes e tamanhos", "Espaçamentos"],
          details: [
            "Cores em formato hexadecimal (#FF5733)",
            "Especificações de fontes (família, peso, tamanho)",
            "Medidas de espaçamentos e margens",
            "Especificações de sombras e bordas",
            "Estados de interação (hover, focus)",
          ],
        },
        {
          title: "Ferramentas de Exportação",
          content: "Como usar as ferramentas do Figma para exportar.",
          highlights: ["Export panel", "Design tokens", "Plugins úteis"],
          details: [
            "Painel de exportação nativo do Figma",
            "Plugin Figma Tokens para design system",
            "Plugin Figma to Code para HTML/CSS",
            "Inspect mode para desenvolvedores",
            "Handoff organizado com especificações",
          ],
        },
        {
          title: "Organização para Desenvolvimento",
          content: "Como organizar e entregar assets de forma profissional.",
          highlights: ["Estrutura de pastas", "Nomenclatura", "Documentação"],
          details: [
            "Organize assets em pastas lógicas",
            "Use nomenclatura consistente",
            "Documente especificações importantes",
            "Inclua guia de estilo básico",
            "Facilite o trabalho do desenvolvedor",
          ],
        },
      ],
    },
  }

  const summaryContent = {
    keyPoints: [
      {
        part: "Exemplos",
        content:
          "Analisamos sites profissionais (Nubank, Apple, Airbnb) vs amadores (Americanas, Mercado Livre) para identificar o que torna uma landing page confiável: hierarquia clara, cores harmoniosas, tipografia legível e layout organizado.",
      },
      {
        part: "Wireframe → Layout",
        content:
          "Wireframe é o esqueleto (caixas cinzas, textos placeholder), layout final aplica tipografia real, cores da paleta, imagens profissionais e componentes organizados para criar o visual que transmite confiança.",
      },
      {
        part: "Cores e Fontes",
        content:
          "Paleta com 3-5 cores (primária para identidade, secundária para apoio, neutras para fundos). Máximo 2 fontes: uma para títulos (forte), outra para texto (legível). Use Google Fonts e teste contraste.",
      },
      {
        part: "Imagens e Ícones",
        content:
          "Use Unsplash para fotos profissionais gratuitas, Flaticon para ícones consistentes. Regra: nunca misture estilos, mantenha alta qualidade, otimize para web (PNG/JPG para fotos, SVG para ícones).",
      },
      {
        part: "Componentes",
        content:
          "Elementos reutilizáveis (botões, cards, menus) com estados (normal, hover, clicado). Use Auto Layout no Figma. Vantagem: mudança global com um clique, consistência visual garantida.",
      },
      {
        part: "Exportação",
        content:
          "PNG para fotos, SVG para ícones, sempre em 2 resoluções (@1x e @2x). Exporte cores em hex, especificações de fontes e espaçamentos para o desenvolvedor implementar corretamente.",
      },
    ],
    interactionQuestion: "Qual site vocês acham mais bonito e por quê? O que chama atenção no design?",
    practicalTip:
      "Abra o Figma e transforme um wireframe simples em layout final: aplique cores, troque fontes, adicione imagens reais e crie um botão como componente.",
    usefulTools: [
      { name: "Coolors", url: "https://coolors.co", description: "gerador de paletas de cores" },
      { name: "Google Fonts", url: "https://fonts.google.com", description: "biblioteca de fontes gratuitas" },
      { name: "Unsplash", url: "https://unsplash.com", description: "fotos profissionais gratuitas" },
      { name: "Flaticon", url: "https://flaticon.com", description: "biblioteca de ícones" },
      { name: "Figma", url: "https://figma.com", description: "ferramenta de design colaborativo" },
      { name: "Color Hunt", url: "https://colorhunt.co", description: "paletas de cores inspiradoras" },
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
          onClick={() => navigate(-1)}
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

      {/* Hero Section */}
      <section className="relative z-20 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1
                className={`text-5xl lg:text-6xl font-bold leading-tight ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"} transition-colors duration-500 drop-shadow-sm`}
              >
                Aula 2
                <br />
                <span className="text-[#E07A5F] drop-shadow-lg">Do Wireframe</span>
                <br />
                ao Layout Final
              </h1>
              <p
                className={`text-lg ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"} transition-colors duration-500 backdrop-blur-sm`}
              >
                🎯 <strong>Objetivo da Aula:</strong> Hoje vamos aprender a transformar um wireframe (esqueleto do site)
                em um layout final profissional, entendendo o que deixa uma landing page bonita, confiável e usável.
                Além disso, vamos aprender a escolher cores e fontes, usar imagens e ícones, criar componentes no Figma
                e exportar assets para o código.
              </p>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full">
                <Clock className="w-5 h-5 text-[#E07A5F]" />
                <span className={`${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>2 horas</span>
              </div>
              <div className="flex items-center gap-2 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full">
                <Users className="w-5 h-5 text-[#E07A5F]" />
                <span className={`${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>Aula prática</span>
              </div>
              <div className="flex items-center gap-2 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full">
                <Target className="w-5 h-5 text-[#E07A5F]" />
                <span className={`${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>Layout final</span>
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
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className={`font-semibold text-lg ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"}`}>
                      Pergunta Central
                    </h3>
                    <p className={`text-sm ${darkMode ? "text-[#F5F1EB]/70" : "text-[#2D5A4A]/70"}`}>
                      Reflexão sobre design profissional
                    </p>
                  </div>
                </div>

                <div className="bg-[#E07A5F]/10 p-4 rounded-lg">
                  <p className={`text-center font-medium ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"}`}>
                    👉 "O que faz uma landing page parecer profissional e o que faz parecer amadora?"
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#E07A5F] mt-0.5 flex-shrink-0 drop-shadow-sm" />
                    <p className={`text-sm ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>
                      Análise de sites profissionais vs amadores
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#E07A5F] mt-0.5 flex-shrink-0 drop-shadow-sm" />
                    <p className={`text-sm ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>
                      Transformação de wireframe em layout final
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#E07A5F] mt-0.5 flex-shrink-0 drop-shadow-sm" />
                    <p className={`text-sm ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"}`}>
                      Criação de componentes reutilizáveis
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

     

      {/* Content Navigation */}
      <section className="relative z-20 max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl font-bold mb-6 ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"} transition-colors duration-500 drop-shadow-sm`}
          >
            Conteúdo Detalhado da Aula 2
          </h2>
          <p
            className={`text-lg max-w-3xl mx-auto ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"} transition-colors duration-500`}
          >
            Explore cada tópico da aula com exemplos práticos e exercícios
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

        {/* Tab Content */}
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

                        {topic.tools && (
                          <div className="mt-4 space-y-2">
                            <h5 className={`text-sm font-medium ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"}`}>
                              Ferramentas:
                            </h5>
                            <div className="flex flex-wrap gap-2">
                              {topic.tools.map((tool, toolIndex) => (
                                <span
                                  key={toolIndex}
                                  className="px-2 py-1 bg-[#2D5A4A]/10 text-[#2D5A4A] dark:text-[#F5F1EB] rounded text-xs"
                                >
                                  {tool}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Special result section for practice */}
                {key === "praticaLayout" && content.result && (
                  <Card
                    className={`${darkMode ? "bg-[#F5F1EB]/10 backdrop-blur-md border-[#F5F1EB]/20" : "bg-white/80 backdrop-blur-md border-white/50"} shadow-lg border-2`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Award className="w-6 h-6 text-[#E07A5F]" />
                        <h4 className={`text-xl font-semibold ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"}`}>
                          Resultado Final
                        </h4>
                      </div>
                      <p className={`text-lg font-medium ${darkMode ? "text-[#F5F1EB]/90" : "text-[#2D5A4A]/90"}`}>
                        {content.result}
                      </p>
                    </CardContent>
                  </Card>
                )}
              </div>
            )
          })}
        </div>
      </section>

      
      {/* Summary Section */}
      <section className="relative z-20 max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2
            className={`text-4xl font-bold mb-6 ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"} transition-colors duration-500 drop-shadow-sm`}
          >
            Resumo da Aula 2
          </h2>
          <p
            className={`text-lg max-w-3xl mx-auto ${darkMode ? "text-[#F5F1EB]/80" : "text-[#2D5A4A]/80"} transition-colors duration-500`}
          >
            Principais conceitos e aprendizados da transformação do wireframe ao layout final
          </p>
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
              Ferramentas Essenciais
            </h3>
            <p className={`text-sm mb-6 ${darkMode ? "text-[#F5F1EB]/70" : "text-[#2D5A4A]/70"}`}>
              Links úteis para aplicar os conceitos da aula
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {summaryContent.usefulTools.map((tool, index) => (
                <a
                  key={index}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 p-4 rounded-lg transition-all duration-300 hover:scale-105 ${darkMode ? "bg-[#F5F1EB]/5 hover:bg-[#F5F1EB]/10" : "bg-white/30 hover:bg-white/50"} border border-white/20`}
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-[#E07A5F] to-[#E07A5F]/70 rounded-full flex items-center justify-center shadow-md">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-medium text-sm ${darkMode ? "text-[#F5F1EB]" : "text-[#2D5A4A]"}`}>
                      {tool.name}
                    </h4>
                    <p className={`text-xs ${darkMode ? "text-[#F5F1EB]/70" : "text-[#2D5A4A]/70"}`}>
                      {tool.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

     

      <footer className="relative z-20 max-w-7xl mx-auto px-6 py-12 text-center">
        <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8">
          <p
            className={`text-sm ${darkMode ? "text-[#F5F1EB]/60" : "text-[#2D5A4A]/60"} transition-colors duration-500`}
          >
            © 2024 Nathalia Macedo - Supermódulo Creative Code UX/UI Design - Aula 2
          </p>
        </div>
      </footer>
    </div>
  )
}
