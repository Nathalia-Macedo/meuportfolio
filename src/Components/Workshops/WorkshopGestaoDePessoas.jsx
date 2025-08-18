"use client"

import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Users,
  Target,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  BookOpen,
  Clock,
  Award,
  Lightbulb,
  MessageCircle,
  Settings,
} from "lucide-react"
import { loadFull } from "tsparticles"

const WorkshopGestaoEquipes = () => {
  const [activeSection, setActiveSection] = useState(0)
  const [quizAnswers, setQuizAnswers] = useState({})
  const [showFeedback, setShowFeedback] = useState({})
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    if (!isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  const sections = [
    {
      id: 0,
      title: "Visão Geral",
      subtitle: "Por que gestão de pessoas importa?",
      icon: <Target className="w-6 h-6" />,
      content: {
        main: "A maior parte dos problemas em software é humana: comunicação falha, expectativas confusas, prioridades trocadas. Gestão de pessoas é criar um ambiente onde as pessoas sabem o que fazer, combinam como trabalhar e confiam umas nas outras.",
        points: [
          "Sem alinhamento → retrabalho",
          "Sem clareza de responsabilidades → gargalos",
          "Sem feedback → desmotivação",
          "Scrum ajuda nisso porque dá linguagem comum (papéis, artefatos, eventos)",
        ],
        quiz: [
          {
            question: "O que mais causa risco em projetos de software?",
            options: ["Linguagem escolhida", "Comunicação e alinhamento", "Sorte", "Framework novo"],
            correct: 1,
            feedback: "Comunicação/alinhamento afetam tudo: prazos, qualidade e clima do time.",
          },
          {
            question: "Qual é o foco da gestão de pessoas?",
            options: [
              "Controlar cada detalhe",
              "Criar ambiente de clareza e confiança",
              "Trocar stack toda semana",
              "Ter muitas reuniões",
            ],
            correct: 1,
            feedback: "Ambiente > controle. Clareza e confiança geram autonomia.",
          },
          {
            question: "O que Scrum oferece para ajudar times?",
            options: [
              "Regras rígidas de código",
              "Uma estrutura simples para colaborar",
              "Ferramentas de build",
              "Contratos jurídicos",
            ],
            correct: 1,
            feedback: "Scrum é um framework de colaboração.",
          },
        ],
      },
    },
    {
      id: 1,
      title: "Valores do Scrum",
      subtitle: "A base comportamental",
      icon: <Lightbulb className="w-6 h-6" />,
      content: {
        main: "Os 5 valores guiam o comportamento do time:",
        points: [
          "Coragem: falar sobre riscos e problemas",
          "Foco: trabalhar no que foi combinado",
          "Comprometimento: assumir responsabilidade coletiva",
          "Respeito: tratar pessoas como parceiras",
          "Abertura: transparência sobre progresso e dificuldades",
        ],
        practice: [
          "Dailies objetivas (foco)",
          "Retros com segurança psicológica (respeito e abertura)",
          "PO transparente nas prioridades (abertura)",
          "Equipe assume metas realistas (comprometimento)",
          "SM incentiva debates honestos (coragem)",
        ],
        quiz: [
          {
            question: "Bug crítico descoberto e o time tem medo de avisar. Qual valor aplicar?",
            options: ["Foco", "Coragem", "Respeito", "Abertura"],
            correct: 1,
            feedback: "Coragem para falar sobre problemas é essencial para resolver riscos rapidamente.",
          },
          {
            question: "Muitas tarefas paralelas, nada termina. Qual valor aplicar?",
            options: ["Foco", "Coragem", "Comprometimento", "Abertura"],
            correct: 0,
            feedback: "Foco ajuda o time a trabalhar no que foi combinado e terminar as tarefas.",
          },
          {
            question: "Time promete além da capacidade e falha sempre. Qual valor aplicar?",
            options: ["Foco", "Coragem", "Comprometimento", "Respeito"],
            correct: 2,
            feedback: "Comprometimento significa assumir metas realistas que o time pode cumprir.",
          },
        ],
      },
    },
    {
      id: 2,
      title: "Papéis do Scrum",
      subtitle: "Quem faz o quê",
      icon: <Users className="w-6 h-6" />,
      content: {
        main: "Responsabilidades claras sem jargão:",
        detailed_explanation: {
          intro:
            "O Scrum define apenas 3 papéis, mas cada um tem responsabilidades muito específicas. Pense numa banda de música: cada um tem seu instrumento, mas todos tocam a mesma música.",
          roles_detailed: [
            {
              name: "Product Owner (PO)",
              analogy: "Diretor do filme",
              description: "Define o que tem mais valor para o produto e prioriza o backlog",
              detailed_explanation:
                "É como o diretor de um filme: tem a visão do que quer criar, decide quais cenas são mais importantes, conversa com os produtores (stakeholders) sobre orçamento e expectativas. Não diz para o cinegrafista como segurar a câmera, mas deixa claro que tipo de cena quer.",
              responsibilities: ["Visão do produto", "Prioridade", "Conversa com stakeholders"],
              daily_practice:
                "Mantém o backlog atualizado, responde dúvidas do time sobre requisitos, valida se o que está sendo construído atende a necessidade.",
              common_mistakes:
                "Microgerenciar o time, mudar prioridades toda hora, não estar disponível para esclarecer dúvidas.",
            },
            {
              name: "Scrum Master (SM)",
              analogy: "Técnico de som",
              description: "Facilita o processo, remove bloqueios, cuida do fluxo e da saúde do time",
              detailed_explanation:
                "É como o técnico de som num show: ninguém vê, mas sem ele nada funciona. Cuida para que todos se ouçam bem, resolve problemas técnicos, ajusta o que não está funcionando. Não toca instrumento, mas garante que a banda toda soe bem.",
              responsibilities: ["Proteger o time", "Melhorar cerimônias", "Fomentar melhoria contínua"],
              daily_practice:
                "Remove impedimentos, facilita reuniões, observa a dinâmica do time, sugere melhorias no processo.",
              common_mistakes:
                "Virar gerente do time, resolver tudo sozinho sem ensinar o time, focar só em processo e esquecer das pessoas.",
            },
            {
              name: "Time de Desenvolvimento",
              analogy: "Músicos da banda",
              description: "Decide como fazer, se auto-organiza e entrega o incremento",
              detailed_explanation:
                "São os músicos: sabem tocar seus instrumentos, decidem entre eles como fazer os arranjos, se ajudam quando alguém tem dificuldade. O diretor (PO) diz que tipo de música quer, mas eles decidem os acordes, o ritmo, quem toca o quê.",
              responsibilities: ["Estimar", "Planejar", "Construir, testar, demonstrar"],
              daily_practice:
                "Colaboram entre si, compartilham conhecimento, se ajudam com dificuldades técnicas, entregam incrementos funcionais.",
              common_mistakes:
                "Trabalhar isoladamente, não compartilhar conhecimento, esperar que alguém diga exatamente como fazer tudo.",
            },
          ],
          key_principle:
            "Todos são responsáveis pelo sucesso do produto, mas cada um contribui de forma diferente. Não há hierarquia, há colaboração.",
        },
        roles: [
          {
            name: "Product Owner (PO)",
            description: "Define o que tem mais valor para o produto e prioriza o backlog",
            responsibilities: ["Visão do produto", "Prioridade", "Conversa com stakeholders"],
          },
          {
            name: "Scrum Master (SM)",
            description: "Facilita o processo, remove bloqueios, cuida do fluxo e da saúde do time",
            responsibilities: ["Proteger o time", "Melhorar cerimônias", "Fomentar melhoria contínua"],
          },
          {
            name: "Time de Desenvolvimento",
            description: "Decide como fazer, se auto-organiza e entrega o incremento",
            responsibilities: ["Estimar", "Planejar", "Construir, testar, demonstrar"],
          },
        ],
        quiz: [
          {
            question: "Quem prioriza o Product Backlog?",
            options: ["Scrum Master", "Product Owner", "Time de Desenvolvimento", "Cliente"],
            correct: 1,
            feedback: "O Product Owner é responsável por priorizar o backlog baseado no valor.",
          },
          {
            question: "Quem remove impedimentos e cuida do processo?",
            options: ["Product Owner", "Scrum Master", "Time de Desenvolvimento", "Gerente"],
            correct: 1,
            feedback: "O Scrum Master facilita o processo e remove impedimentos.",
          },
          {
            question: "Quem decide a arquitetura da solução?",
            options: ["Product Owner", "Scrum Master", "Time de Desenvolvimento", "Arquiteto"],
            correct: 2,
            feedback: "O Time de Desenvolvimento decide como implementar a solução.",
          },
          {
            question: "Quem conversa com cliente sobre valor e necessidade?",
            options: ["Scrum Master", "Product Owner", "Time de Desenvolvimento", "Todos"],
            correct: 1,
            feedback: "O Product Owner é o ponto de contato com stakeholders sobre valor.",
          },
          {
            question: "Quem garante que a equipe não seja interrompida toda hora?",
            options: ["Product Owner", "Scrum Master", "Time de Desenvolvimento", "Gerente"],
            correct: 1,
            feedback: "O Scrum Master protege o time de interrupções desnecessárias.",
          },
        ],
      },
    },
    {
      id: 3,
      title: "Artefatos",
      subtitle: "Como visualizamos o trabalho",
      icon: <BookOpen className="w-6 h-6" />,
      content: {
        main: "Os artefatos do Scrum são as 'coisas' que criamos para organizar e visualizar o trabalho. Pense neles como ferramentas que tornam o invisível visível.",
        detailed_explanation: {
          intro: "Cada artefato tem um propósito específico e todos trabalham juntos para criar transparência:",
          artifacts: [
            {
              name: "Product Backlog",
              analogy: "Cardápio do produto",
              description: "Lista de tudo que pode entrar no produto, organizada por valor",
              details:
                "É como um cardápio de restaurante: tem todas as opções disponíveis, mas você não vai pedir tudo de uma vez. O Product Owner é como o chef que decide quais pratos (funcionalidades) são mais importantes e devem ser preparados primeiro.",
              practice: "Organizado por valor/risco, descrições claras, sempre atualizado",
              example: "Exemplo: 'Login com Google', 'Carrinho de compras', 'Notificações por email'",
            },
            {
              name: "Sprint Backlog",
              analogy: "Pedido da vez",
              description: "O que o time escolheu para esta sprint específica",
              details:
                "É o 'pedido' que o time fez do Product Backlog. Durante o Sprint Planning, o time olha o cardápio (Product Backlog) e escolhe o que consegue 'preparar' (desenvolver) na sprint. Uma vez escolhido, é compromisso do time.",
              practice: "Fatiar por partes pequenas, visível para todos, atualizado diariamente",
              example: "Exemplo: 'Tela de login', 'Validação de email', 'Integração com Google OAuth'",
            },
            {
              name: "Incremento",
              analogy: "Prato servido",
              description: "Valor entregue e potencialmente utilizável",
              details:
                "É o 'prato pronto' que sai da cozinha. Não é só código escrito, mas funcionalidade que realmente funciona, foi testada e pode ser usada. É a soma de tudo que foi feito na sprint mais tudo que já estava pronto antes.",
              practice: "Pronto de verdade (DoD), testado, demonstrável e potencialmente utilizável",
              example:
                "Exemplo: 'Sistema de login funcionando em produção', 'Usuários conseguem se cadastrar e entrar'",
            },
          ],
          flow: "O fluxo é simples: Product Backlog → Sprint Backlog → Incremento. É como: Cardápio → Pedido → Prato servido.",
        },
        quiz: [
          {
            question: "Onde classificar: 'Cadastro com Google'?",
            options: ["Product Backlog", "Sprint Backlog", "Incremento", "Nenhum"],
            correct: 0,
            feedback: "É uma funcionalidade que pode entrar no produto, vai para o Product Backlog.",
          },
          {
            question: "Onde classificar: 'Refatorar componente X nesta sprint'?",
            options: ["Product Backlog", "Sprint Backlog", "Incremento", "Nenhum"],
            correct: 1,
            feedback: "É trabalho específico escolhido para a sprint atual.",
          },
          {
            question: "Onde classificar: 'Versão 1 do checkout publicada'?",
            options: ["Product Backlog", "Sprint Backlog", "Incremento", "Nenhum"],
            correct: 2,
            feedback: "É valor entregue e utilizável, um incremento do produto.",
          },
          {
            question: "Onde classificar: 'Pesquisa com usuários para priorizar features'?",
            options: ["Product Backlog", "Sprint Backlog", "Incremento", "Nenhum"],
            correct: 0,
            feedback: "É uma atividade que gera valor para o produto, vai para o Product Backlog.",
          },
        ],
      },
    },
    {
      id: 4,
      title: "Eventos",
      subtitle: "Quando conversamos e para quê",
      icon: <Clock className="w-6 h-6" />,
      content: {
        main: "Os eventos do Scrum criam um ritmo previsível e evitam 'falhas de conversa'. Cada evento tem um propósito específico e um resultado esperado.",
        detailed_explanation: {
          intro:
            "Pense nos eventos como reuniões com propósito claro. Cada uma resolve um tipo específico de problema de comunicação:",
          events: [
            {
              name: "Sprint Planning",
              purpose: "Planejar o objetivo da sprint e o que cabe",
              duration: "Máximo 8h para sprint de 1 mês (proporcionalmente menor para sprints menores)",
              participants: "Todo o Scrum Team",
              details:
                "É como planejar uma viagem: definimos o destino (objetivo da sprint) e o que vamos levar na mala (itens do backlog). O PO traz as prioridades e explica o 'porquê'. O time puxa trabalho que consegue fazer de forma realista.",
              outcome: "Sprint Goal claro e Sprint Backlog definido",
              tips: "PO prepara o backlog antes. Time faz perguntas. Todos saem alinhados sobre o objetivo.",
            },
            {
              name: "Daily Scrum",
              purpose: "15 min para alinhar hoje e remover impedimentos",
              duration: "Máximo 15 minutos",
              participants: "Time de Desenvolvimento (PO e SM podem participar mas não falam)",
              details:
                "É como um huddle no futebol americano: rápido, focado, todos sabem o que fazer. Não é relatório para chefe, é conversa entre pares. Foco: o que vou fazer hoje para atingir o objetivo da sprint?",
              outcome: "Alinhamento diário e impedimentos identificados",
              tips: "Mesmo horário, mesmo local. Falar para o time, não para o SM. Se a conversa se estender, marcar depois.",
            },
            {
              name: "Sprint Review",
              purpose: "Mostrar o incremento a stakeholders e coletar feedback",
              duration: "Máximo 4h para sprint de 1 mês",
              participants: "Scrum Team + Stakeholders",
              details:
                "É como um teste de degustação: mostramos o 'prato' (incremento) para quem vai 'comer' (usar). Não é apresentação de PowerPoint, é demonstração do produto funcionando. Stakeholders dão feedback que pode mudar o Product Backlog.",
              outcome: "Feedback coletado e possíveis ajustes no Product Backlog",
              tips: "Mostrar produto funcionando, não slides. Coletar feedback real. PO anota mudanças para o backlog.",
            },
            {
              name: "Sprint Retrospective",
              purpose: "Discutir o processo e combinar melhorias",
              duration: "Máximo 3h para sprint de 1 mês",
              participants: "Scrum Team (sem stakeholders externos)",
              details:
                "É como uma conversa de família após uma viagem: o que funcionou bem? O que podemos melhorar? Como vamos fazer diferente na próxima? Foco no processo, não nas pessoas. Ambiente seguro para falar a verdade.",
              outcome: "1-3 melhorias concretas para a próxima sprint",
              tips: "Ambiente seguro. Foco em melhorias, não culpa. Máximo 3 ações para não dispersar.",
            },
          ],
          flow: "A sequência é sempre: Planning → Daily (todo dia) → Review → Retrospective. Depois recomeça com novo Planning.",
        },
        quiz: [
          {
            question: "Qual a ordem correta dos eventos?",
            options: [
              "Daily → Planning → Review → Retrospective",
              "Planning → Daily → Review → Retrospective",
              "Review → Planning → Daily → Retrospective",
              "Planning → Review → Daily → Retrospective",
            ],
            correct: 1,
            feedback:
              "Planning inicia a sprint, Daily acontece todo dia, Review mostra resultado, Retro melhora o processo.",
          },
          {
            question: "O que NÃO pertence à Daily?",
            options: [
              "Dizer o que vai fazer hoje",
              "Apontar impedimentos",
              "Resolver design da próxima release em detalhe",
              "Alinhar com o time",
            ],
            correct: 2,
            feedback:
              "Daily é para alinhamento rápido. Discussões longas devem ser feitas depois, com as pessoas certas.",
          },
          {
            question: "Qual o principal objetivo da Sprint Review?",
            options: [
              "Avaliar performance individual",
              "Mostrar incremento e coletar feedback",
              "Planejar próxima sprint",
              "Resolver impedimentos técnicos",
            ],
            correct: 1,
            feedback: "Sprint Review é para demonstrar o que foi construído e coletar feedback dos stakeholders.",
          },
        ],
      },
    },
    {
      id: 5,
      title: "Comunicação e Motivação",
      subtitle: "O coração da gestão",
      icon: <MessageCircle className="w-6 h-6" />,
      content: {
        main: "Times performam quando existe segurança psicológica, clareza e reconhecimento.",
        detailed_explanation: {
          intro:
            "A diferença entre um time que funciona e um que não funciona raramente é técnica. É humana. Pessoas motivadas e bem comunicadas resolvem qualquer problema técnico.",
          principles: [
            {
              name: "Segurança Psicológica",
              description: "Ambiente onde pessoas podem falar a verdade sem medo",
              why_matters:
                "Sem segurança, problemas ficam escondidos até virarem crises. Com segurança, problemas são resolvidos rapidamente.",
              how_to_build:
                "Admitir próprios erros, fazer perguntas genuínas, não culpar pessoas por problemas sistêmicos, celebrar quando alguém aponta um problema cedo.",
              example:
                "Em vez de 'Por que você não testou isso?', perguntar 'O que podemos fazer para pegar esses bugs mais cedo?'",
            },
            {
              name: "Clareza de Expectativas",
              description: "Todo mundo sabe o que é esperado e como será avaliado",
              why_matters: "Ambiguidade gera ansiedade e retrabalho. Clareza gera confiança e eficiência.",
              how_to_build:
                "Definition of Ready (DoR), Definition of Done (DoD), critérios de aceite específicos, objetivos de sprint claros.",
              example:
                "'Tela de login' vira 'Usuário consegue entrar com email/senha, ver mensagem de erro clara se errar, e ser redirecionado para dashboard se acertar.'",
            },
            {
              name: "Feedback Contínuo",
              description: "Informação flui rapidamente em todas as direções",
              why_matters: "Feedback tardio é caro. Feedback rápido permite ajustes baratos.",
              how_to_build:
                "Daily honesta, Review com stakeholders reais, Retro focada em ações, conversas 1:1 regulares.",
              example:
                "Em vez de esperar a Review para mostrar que algo não está funcionando, mostrar na Daily e ajustar no mesmo dia.",
            },
            {
              name: "Reconhecimento e Crescimento",
              description: "Pessoas se sentem valorizadas e veem oportunidades de evolução",
              why_matters: "Pessoas desmotivadas fazem o mínimo. Pessoas motivadas fazem o extraordinário.",
              how_to_build:
                "Celebrar pequenas vitórias, dar crédito publicamente, criar oportunidades de aprendizado, conectar trabalho individual com impacto do produto.",
              example: "Na Review, mencionar especificamente quem contribuiu com o quê, não só 'o time fez'.",
            },
          ],
          practical_tips: {
            daily_practices: [
              "Check-in humano no início da Daily (0–10: como você está?)",
              "Perguntar 'Como posso ajudar?' em vez de 'Qual o status?'",
              "Fazer perguntas abertas: 'O que você acha?' em vez de 'Você concorda?'",
              "Admitir quando não sabe algo: 'Boa pergunta, vamos descobrir juntos'",
            ],
            weekly_practices: [
              "1:1 com cada pessoa do time (15-30 min)",
              "Revisar impedimentos recorrentes e atacar a causa raiz",
              "Celebrar conquistas na Review (não só mostrar funcionalidades)",
              "Perguntar na Retro: 'Como vocês se sentiram esta sprint?'",
            ],
            warning_signs: [
              "Pessoas param de fazer perguntas",
              "Problemas só aparecem na Review",
              "Time trabalha isoladamente",
              "Conversas importantes acontecem fora das cerimônias",
            ],
          },
        },
        practices: [
          "Check-in humano no início da Daily (0–10: como você está?)",
          "Definições claras (DoR/DoD, critérios de aceite)",
          "Feedback rápido e específico (evita acumular tensão)",
          "Evitar micromanagement: combine o que, deixe o como para o time",
          "Celebrar pequenas vitórias (Review + kudos)",
        ],
        quiz: [
          {
            question: "Dev calado e sobrecarregado. O que fazer?",
            options: ["Ignorar", "Cobrar mais metas", "Checar em 1:1, redistribuir tarefas, oferecer apoio", "Demitir"],
            correct: 2,
            feedback: "Segurança + equilíbrio de carga. Cuidar das pessoas é prioridade.",
          },
          {
            question: "Conflito sobre tecnologia X vs Y. Como resolver?",
            options: [
              "Decidir autoritariamente",
              "Criar critérios, prototipar e decidir juntos",
              "Adiar indefinidamente",
              "Deixar cada um usar o que quer",
            ],
            correct: 1,
            feedback: "Decisão técnica com critérios e participação do time.",
          },
          {
            question: "Retrabalho constante por falta de contexto. Como resolver?",
            options: [
              "Aumentar horas",
              "Melhorar backlog: aceites claros, alinhar no Planning e Review",
              "Trocar toda a stack",
              "Contratar mais pessoas",
            ],
            correct: 1,
            feedback: "Clareza > força bruta. Melhor comunicação resolve retrabalho.",
          },
        ],
      },
    },
    {
      id: 6,
      title: "Dinâmica Prática",
      subtitle: "Mini-sprint simulada",
      icon: <Settings className="w-6 h-6" />,
      content: {
        main: "Transformar teoria em prática com uma simulação:",
        detailed_explanation: {
          intro:
            "A melhor forma de entender Scrum é praticando. Vamos simular uma sprint completa em 30 minutos, passando por todos os eventos e artefatos.",
          simulation_setup: {
            context:
              "Você é o time responsável por um app de delivery de comida. O produto já existe, mas precisa de melhorias.",
            current_situation: "App funciona, mas usuários reclamam que é difícil de usar e tem bugs no checkout.",
            stakeholder_requests: [
              "CEO: 'Precisamos aumentar conversão no checkout'",
              "Suporte: 'Muitas reclamações sobre login'",
              "Marketing: 'Queremos integração com redes sociais'",
              "Usuários: 'App trava quando adiciono muitos itens'",
            ],
          },
          step_by_step: [
            {
              event: "Product Backlog Refinement (5 min)",
              what_to_do: "Olhe as demandas dos stakeholders e transforme em itens de backlog",
              expected_outcome: "Lista de itens priorizados por valor/urgência",
              example:
                "'Corrigir travamento no carrinho' (alta prioridade) vs 'Integração com Facebook' (baixa prioridade)",
            },
            {
              event: "Sprint Planning (10 min)",
              what_to_do: "Defina objetivo da sprint e puxe itens que cabem",
              expected_outcome: "Sprint Goal claro e Sprint Backlog realista",
              example:
                "Goal: 'Usuários conseguem finalizar compra sem travamentos'. Itens: 'Corrigir bug do carrinho', 'Melhorar UX do checkout'",
            },
            {
              event: "Daily Scrum Simulada (5 min)",
              what_to_do: "Simule 3 dias de sprint com impedimentos",
              expected_outcome: "Impedimentos identificados e plano para resolvê-los",
              example:
                "Dia 2: 'Preciso da API de pagamento, mas o time de backend está ocupado' → Impedimento para o SM resolver",
            },
            {
              event: "Sprint Review (5 min)",
              what_to_do: "Demonstre o que foi entregue e colete feedback",
              expected_outcome: "Incremento demonstrado e feedback dos stakeholders",
              example: "Mostrar checkout funcionando, CEO sugere adicionar opção de pagamento via PIX",
            },
            {
              event: "Sprint Retrospective (5 min)",
              what_to_do: "Identifique o que funcionou, o que não funcionou, e como melhorar",
              expected_outcome: "1-3 ações concretas para próxima sprint",
              example:
                "Funcionou: comunicação com backend melhorou. Não funcionou: estimativas foram otimistas. Ação: fazer planning poker nas estimativas",
            },
          ],
          success_criteria: [
            "Sprint Goal é específico e mensurável",
            "Sprint Backlog tem itens pequenos (máximo 3 dias cada)",
            "Pelo menos 1 impedimento foi identificado e tem plano de resolução",
            "Incremento é demonstrável (mesmo que parcial)",
            "Retrospectiva gerou 1-3 ações práticas e específicas",
          ],
        },
        simulation: {
          backlog: ["Tela de login", "Esqueci minha senha", "Carrinho simples", "Checkout básico"],
          steps: [
            "Organize: separe Product Backlog e Sprint Backlog",
            "Planeje: escreva a meta da sprint em uma frase",
            "Daily simulada: distribua tarefas e identifique impedimentos",
            "Review simulada: marque o que foi entregue",
            "Retro: defina 1–3 melhorias para próxima sprint",
          ],
          criteria: [
            "Meta da sprint clara e curta",
            "Sprint Backlog realista (fatiado)",
            "Pelo menos 1 impedimento identificado e tratado",
            "Incremento demonstrável (mesmo que parcial)",
            "1–3 melhorias objetivas na Retro",
          ],
        },
        quiz: [
          {
            question: "Qual seria uma boa meta para a sprint com 'Tela de login' e 'Esqueci minha senha'?",
            options: [
              "Fazer tudo perfeito",
              "Entregar autenticação funcional com login e recuperação de senha",
              "Começar o projeto",
              "Testar todas as possibilidades",
            ],
            correct: 1,
            feedback: "Meta clara e específica sobre o valor que será entregue.",
          },
          {
            question: "O que fazer se identificar que o Sprint Backlog está muito grande?",
            options: [
              "Trabalhar mais horas",
              "Remover itens e focar no essencial",
              "Pedir mais pessoas",
              "Adiar a sprint",
            ],
            correct: 1,
            feedback: "Sprint Backlog deve ser realista. Melhor entregar menos com qualidade.",
          },
        ],
      },
    },
    {
      id: 7,
      title: "Materiais de Referência",
      subtitle: "Resumo para consulta rápida",
      icon: <Award className="w-6 h-6" />,
      content: {
        main: "Guia de consulta rápida para o dia a dia:",
        detailed_explanation: {
          intro:
            "Este é seu 'cola' do Scrum. Quando estiver na dúvida sobre o que fazer em cada situação, consulte aqui.",
          quick_reference: {
            when_things_go_wrong: [
              {
                problem: "Sprint vai estourar o prazo",
                solution: "Remover itens do Sprint Backlog, manter o Sprint Goal",
                dont_do: "Estender a sprint ou trabalhar mais horas",
              },
              {
                problem: "Requisitos não estão claros",
                solution: "Parar desenvolvimento, conversar com PO, definir critérios de aceite",
                dont_do: "Assumir o que o PO quer",
              },
              {
                problem: "Time está desmotivado",
                solution: "1:1 com cada pessoa, retrospectiva focada em bem-estar, celebrar pequenas vitórias",
                dont_do: "Ignorar ou só cobrar mais produtividade",
              },
              {
                problem: "Stakeholder quer mudar prioridade no meio da sprint",
                solution:
                  "PO avalia impacto, se crítico pode trocar item de mesmo tamanho, senão vai para próxima sprint",
                dont_do: "Aceitar toda mudança ou recusar toda mudança",
              },
            ],
            daily_checklist: [
              "[ ] Product Backlog está atualizado e priorizado?",
              "[ ] Sprint Goal está claro para todos?",
              "[ ] Impedimentos estão sendo tratados?",
              "[ ] Time está colaborando ou trabalhando isoladamente?",
              "[ ] Definições de Ready e Done estão sendo seguidas?",
              "[ ] Feedback dos stakeholders está sendo coletado?",
            ],
            meeting_facilitation: [
              {
                meeting: "Sprint Planning",
                key_questions: [
                  "Qual o objetivo desta sprint?",
                  "O que cabe realisticamente?",
                  "Todos entendem os critérios de aceite?",
                ],
                red_flags: ["Itens muito grandes", "Objetivo vago", "Time não fez perguntas"],
              },
              {
                meeting: "Daily",
                key_questions: [
                  "Estamos no caminho do Sprint Goal?",
                  "Alguém precisa de ajuda?",
                  "Há impedimentos novos?",
                ],
                red_flags: ["Virou relatório", "Passou de 15 min", "Pessoas não se olham"],
              },
              {
                meeting: "Review",
                key_questions: [
                  "O incremento atende o Sprint Goal?",
                  "Que feedback os stakeholders têm?",
                  "O que mudou no mercado?",
                ],
                red_flags: ["Só slides", "Sem stakeholders", "Sem feedback"],
              },
              {
                meeting: "Retrospective",
                key_questions: [
                  "O que nos deixou orgulhosos?",
                  "O que nos frustrou?",
                  "Que 1-3 coisas vamos experimentar?",
                ],
                red_flags: ["Virou desabafo", "Sem ações concretas", "Sempre os mesmos problemas"],
              },
            ],
          },
        },
        references: [
          {
            title: "Papéis",
            items: [
              "PO: visão do produto, prioridades, stakeholders",
              "SM: facilitar processo, remover impedimentos, melhorar fluxo",
              "Dev Team: estimar, planejar, construir, testar, demonstrar",
            ],
          },
          {
            title: "Artefatos",
            items: [
              "Product Backlog → Sprint Backlog → Incremento",
              "Organizado por valor → Trabalho da sprint → Valor entregue",
            ],
          },
          {
            title: "Eventos",
            items: [
              "Planning: objetivo e escopo da sprint",
              "Daily: alinhamento diário (15 min)",
              "Review: demonstrar incremento",
              "Retro: melhorar processo (1-3 ações)",
            ],
          },
          {
            title: "Comunicação",
            items: [
              "DoR/DoD claros",
              "Critérios de aceite específicos",
              "Check-ins humanos regulares",
              "Feedback rápido e construtivo",
              "Celebrar conquistas",
            ],
          },
        ],
        quiz: [
          {
            question: "Qual a principal função do Scrum Master?",
            options: [
              "Gerenciar o time",
              "Facilitar o processo e remover impedimentos",
              "Definir prioridades",
              "Escrever código",
            ],
            correct: 1,
            feedback: "SM é um facilitador, não um gerente tradicional.",
          },
          {
            question: "O que é mais importante numa Retrospectiva?",
            options: [
              "Listar todos os problemas",
              "Definir 1-3 melhorias concretas",
              "Culpar pessoas",
              "Fazer relatório para gerência",
            ],
            correct: 1,
            feedback: "Retro deve gerar ações práticas de melhoria, não apenas discussão.",
          },
        ],
      },
    },
  ]

  const handleQuizAnswer = (sectionId, questionIndex, answerIndex) => {
    const key = `${sectionId}-${questionIndex}`
    setQuizAnswers((prev) => ({
      ...prev,
      [key]: answerIndex,
    }))
    setShowFeedback((prev) => ({
      ...prev,
      [key]: true,
    }))
  }

  const calculateProgress = () => {
    const totalQuestions = sections.reduce((total, section) => total + (section.content.quiz?.length || 0), 0)
    const answeredQuestions = Object.keys(quizAnswers).length
    return Math.round((answeredQuestions / totalQuestions) * 100)
  }

  const nextSection = () => {
    if (activeSection < sections.length - 1) {
      setActiveSection(activeSection + 1)
    }
  }

  const prevSection = () => {
    if (activeSection > 0) {
      setActiveSection(activeSection - 1)
    }
  }

  const currentSection = sections[activeSection]

  return (
    <div className="min-h-screen bg-sand dark:bg-jungle transition-colors duration-300 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(45, 76, 59, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(45, 76, 59, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-16 h-16 border-2 border-jungle/20 dark:border-sand/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-12 h-12 bg-terra/10 rounded-lg"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-60 left-1/4 w-8 h-8 border-2 border-terra/30 rotate-45"
          animate={{ rotate: [45, 225, 45] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 right-10 w-20 h-20 border-2 border-jungle/15 dark:border-sand/15 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-60 left-16 w-6 h-6 bg-terra/20 rounded-full"
          animate={{ x: [-5, 5, -5] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-10 h-10 border-2 border-jungle/20 dark:border-sand/20 rotate-12"
          animate={{ rotate: [12, 192, 12] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </div>

      <header className="fixed top-0 w-full z-30 bg-sand/95 dark:bg-jungle/95 backdrop-blur-md border-b border-jungle/10 dark:border-sand/10 transition-colors duration-300">
        <nav className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            <motion.button
              onClick={() => window.history.back()}
              className="flex items-center space-x-2 text-jungle dark:text-sand hover:text-terra dark:hover:text-terra transition-colors group"
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="w-8 h-8 rounded-full bg-jungle/10 dark:bg-sand/10 flex items-center justify-center group-hover:bg-terra/20 transition-colors"
                whileHover={{ rotate: -180 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowLeft className="w-4 h-4" />
              </motion.div>
              <span className="font-medium">Voltar</span>
            </motion.button>

            <div className="flex items-center space-x-4">
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-terra to-orange-500 rounded-2xl flex items-center justify-center shadow-lg"
                whileHover={{ rotate: 12, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Users className="w-7 h-7 text-sand" />
              </motion.div>
              <div>
                <h1 className="text-xl font-bold text-jungle dark:text-sand">Gestão de Equipes</h1>
                <p className="text-sm text-terra font-medium">Scrum sem complicação</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="text-right">
                <div className="text-sm font-medium text-jungle dark:text-sand">Progresso</div>
                <div className="text-xs text-jungle/60 dark:text-sand/60">{calculateProgress()}% completo</div>
              </div>
              <div className="w-32 h-3 rounded-full bg-jungle/20 dark:bg-sand/20 overflow-hidden">
                <motion.div
                  className="h-3 bg-gradient-to-r from-terra to-orange-500 rounded-full shadow-sm"
                  initial={{ width: 0 }}
                  animate={{ width: `${calculateProgress()}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </div>
              <motion.button
                onClick={toggleDarkMode}
                className="w-10 h-10 rounded-xl bg-jungle/10 dark:bg-sand/10 flex items-center justify-center text-jungle dark:text-sand hover:text-terra dark:hover:text-terra hover:bg-terra/20 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
              >
                {isDarkMode ? "☀️" : "🌙"}
              </motion.button>
            </div>
          </div>
        </nav>
      </header>

      <section className="pt-24 py-20 px-6 relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-jungle dark:text-sand leading-tight">
              Gestão de Pessoas na
              <span className="block text-terra">Programação</span>
            </h1>
            <div className="w-24 h-1 bg-terra mx-auto rounded-full mb-8"></div>
            <p className="text-xl md:text-2xl text-jungle/80 dark:text-sand/80 leading-relaxed max-w-3xl mx-auto">
              Organizar times de desenvolvimento de forma clara e humana usando Scrum. Você vai entender o que cada
              pessoa faz, como o trabalho é visualizado e quando as conversas certas acontecem.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            <motion.div
              className="bg-sand/80 dark:bg-jungle/80 backdrop-blur-sm p-6 rounded-2xl border border-jungle/10 dark:border-sand/10"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="w-12 h-12 bg-terra/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Clock className="w-6 h-6 text-terra" />
              </div>
              <h3 className="font-bold text-jungle dark:text-sand mb-2">2 Horas</h3>
              <p className="text-jungle/70 dark:text-sand/70 text-sm">De conteúdo prático</p>
            </motion.div>
            <motion.div
              className="bg-sand/80 dark:bg-jungle/80 backdrop-blur-sm p-6 rounded-2xl border border-jungle/10 dark:border-sand/10"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="w-12 h-12 bg-terra/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Users className="w-6 h-6 text-terra" />
              </div>
              <h3 className="font-bold text-jungle dark:text-sand mb-2">Presencial</h3>
              <p className="text-jungle/70 dark:text-sand/70 text-sm">100% hands-on</p>
            </motion.div>
            <motion.div
              className="bg-sand/80 dark:bg-jungle/80 backdrop-blur-sm p-6 rounded-2xl border border-jungle/10 dark:border-sand/10"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="w-12 h-12 bg-terra/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Target className="w-6 h-6 text-terra" />
              </div>
              <h3 className="font-bold text-jungle dark:text-sand mb-2">Projeto Real</h3>
              <p className="text-jungle/70 dark:text-sand/70 text-sm">Aplicação prática</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="sticky top-20 z-20 py-6 px-6 bg-sand/95 dark:bg-jungle/95 backdrop-blur-md border-b border-jungle/10 dark:border-sand/10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {sections.map((section, index) => (
              <motion.button
                key={section.id}
                onClick={() => setActiveSection(index)}
                className={`group relative px-6 py-3 rounded-2xl text-sm font-medium transition-all duration-300 ${
                  activeSection === index
                    ? "bg-terra text-sand shadow-lg shadow-terra/25"
                    : "bg-jungle/10 dark:bg-sand/10 text-jungle dark:text-sand hover:bg-terra/20 hover:text-jungle dark:hover:text-sand"
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center space-x-2">
                  {section.icon}
                  <span>{section.title}</span>
                </span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>

      <main className="relative z-10 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-sand/90 dark:bg-jungle/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-jungle/20 dark:border-sand/20 shadow-xl"
            >
              <div className="flex items-start space-x-6 mb-10">
                <motion.div
                  className="w-16 h-16 bg-terra rounded-2xl flex items-center justify-center text-sand shadow-lg"
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {currentSection.icon}
                </motion.div>
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-bold text-jungle dark:text-sand mb-2 leading-tight">
                    {currentSection.title}
                  </h2>
                  <p className="text-xl text-terra font-medium">{currentSection.subtitle}</p>
                  <div className="w-16 h-1 bg-terra rounded-full mt-3"></div>
                </div>
              </div>

              <div className="space-y-8">
                <motion.p
                  className="text-lg md:text-xl leading-relaxed text-jungle/90 dark:text-sand/90 font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {currentSection.content.main}
                </motion.p>

                {currentSection.content.points && (
                  <motion.ul
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    {currentSection.content.points.map((point, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-start space-x-4 group"
                      >
                        <motion.div
                          className="w-6 h-6 rounded-full bg-terra flex items-center justify-center mt-1 flex-shrink-0"
                          whileHover={{ scale: 1.2, rotate: 180 }}
                          transition={{ duration: 0.3 }}
                        >
                          <CheckCircle className="w-4 h-4 text-sand" />
                        </motion.div>
                        <span className="text-jungle/80 dark:text-sand/80 text-lg leading-relaxed group-hover:text-jungle dark:group-hover:text-sand transition-colors">
                          {point}
                        </span>
                      </motion.li>
                    ))}
                  </motion.ul>
                )}

                {activeSection === 2 && (
                  <div className="space-y-8">
                    {/* Introdução */}
                    <div className="bg-sand/80 dark:bg-jungle/20 backdrop-blur-sm rounded-2xl p-8 border border-jungle/10">
                      <h3 className="text-2xl font-bold text-jungle dark:text-sand mb-4">
                        {sections[2].content.detailed_explanation.intro}
                      </h3>
                      <p className="text-jungle/80 dark:text-sand/80 text-lg leading-relaxed">
                        {sections[2].content.detailed_explanation.key_principle}
                      </p>
                    </div>

                    {/* Papéis Detalhados */}
                    <div className="grid gap-6">
                      {sections[2].content.detailed_explanation.roles_detailed.map((role, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-sand/80 dark:bg-jungle/20 backdrop-blur-sm rounded-2xl p-8 border border-jungle/10"
                        >
                          <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-terra/20 rounded-full flex items-center justify-center">
                              <Users className="w-6 h-6 text-terra" />
                            </div>
                            <div>
                              <h4 className="text-xl font-bold text-jungle dark:text-sand">{role.name}</h4>
                              <p className="text-terra font-medium">{role.analogy}</p>
                            </div>
                          </div>

                          <div className="space-y-4">
                            <p className="text-jungle/80 dark:text-sand/80 leading-relaxed">
                              {role.detailed_explanation}
                            </p>

                            <div className="grid md:grid-cols-3 gap-4">
                              <div className="bg-jungle/5 dark:bg-sand/5 rounded-lg p-4">
                                <h5 className="font-semibold text-jungle dark:text-sand mb-2">Responsabilidades</h5>
                                <ul className="space-y-1">
                                  {role.responsibilities.map((resp, i) => (
                                    <li key={i} className="text-sm text-jungle/70 dark:text-sand/70">
                                      • {resp}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div className="bg-jungle/5 dark:bg-sand/5 rounded-lg p-4">
                                <h5 className="font-semibold text-jungle dark:text-sand mb-2">Na Prática</h5>
                                <p className="text-sm text-jungle/70 dark:text-sand/70">{role.daily_practice}</p>
                              </div>

                              <div className="bg-terra/5 rounded-lg p-4">
                                <h5 className="font-semibold text-terra mb-2">Evite</h5>
                                <p className="text-sm text-terra/70">{role.common_mistakes}</p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Quiz */}
                    <div className="bg-sand/80 dark:bg-jungle/20 backdrop-blur-sm rounded-2xl p-8 border border-jungle/10">
                      <h3 className="text-xl font-bold text-jungle dark:text-sand mb-6">Quiz: Papéis do Scrum</h3>
                      {currentSection.content.quiz && (
                        <motion.div
                          className="mt-12 space-y-8"
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                        >
                          {currentSection.content.quiz.map((quiz, quizIndex) => (
                            <motion.div
                              key={quizIndex}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: quizIndex * 0.2 }}
                              className="bg-sand/80 dark:bg-jungle/80 backdrop-blur-sm rounded-3xl p-8 border border-jungle/20 dark:border-sand/20 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                              <h4 className="font-bold text-xl mb-6 text-jungle dark:text-sand leading-relaxed">
                                {quizIndex + 1}. {quiz.question}
                              </h4>
                              <div className="space-y-3">
                                {quiz.options.map((option, optionIndex) => {
                                  const key = `${activeSection}-${quizIndex}`
                                  const isSelected = quizAnswers[key] === optionIndex
                                  const isCorrect = optionIndex === quiz.correct
                                  const showResult = showFeedback[key]

                                  return (
                                    <motion.button
                                      key={optionIndex}
                                      onClick={() => handleQuizAnswer(activeSection, quizIndex, optionIndex)}
                                      className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 font-medium ${
                                        showResult
                                          ? isCorrect
                                            ? "bg-green-100 border-green-300 text-green-800 shadow-lg"
                                            : isSelected
                                              ? "bg-red-100 border-red-300 text-red-800 shadow-lg"
                                              : "bg-jungle/5 dark:bg-sand/5 border-jungle/10 dark:border-sand/10 text-jungle/60 dark:text-sand/60"
                                          : isSelected
                                            ? "bg-terra/20 border-terra text-jungle dark:text-sand shadow-lg"
                                            : "bg-jungle/5 dark:bg-sand/5 border-jungle/10 dark:border-sand/10 text-jungle dark:text-sand hover:bg-terra/10 hover:border-terra/50 hover:shadow-md"
                                      }`}
                                      whileHover={{ scale: 1.02, y: -2 }}
                                      whileTap={{ scale: 0.98 }}
                                      disabled={showResult}
                                    >
                                      <div className="flex items-center space-x-4">
                                        <div
                                          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                                            showResult && isCorrect
                                              ? "bg-green-500 border-green-500"
                                              : showResult && isSelected && !isCorrect
                                                ? "bg-red-500 border-red-500"
                                                : isSelected
                                                  ? "bg-terra border-terra"
                                                  : "border-jungle/30 dark:border-sand/30"
                                          }`}
                                        >
                                          {showResult && isCorrect && <CheckCircle className="w-4 h-4 text-white" />}
                                          {showResult && isSelected && !isCorrect && (
                                            <span className="text-white text-xs">✕</span>
                                          )}
                                          {isSelected && !showResult && (
                                            <div className="w-2 h-2 bg-sand rounded-full" />
                                          )}
                                        </div>
                                        <span>{option}</span>
                                      </div>
                                    </motion.button>
                                  )
                                })}
                              </div>
                              {showFeedback[`${activeSection}-${quizIndex}`] && (
                                <motion.div
                                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                  animate={{ opacity: 1, y: 0, scale: 1 }}
                                  className="mt-6 p-5 bg-terra/10 border-2 border-terra/30 rounded-2xl"
                                >
                                  <div className="flex items-start space-x-3">
                                    <Lightbulb className="w-5 h-5 text-terra mt-0.5 flex-shrink-0" />
                                    <p className="text-jungle dark:text-sand font-medium leading-relaxed">
                                      {quiz.feedback}
                                    </p>
                                  </div>
                                </motion.div>
                              )}
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  </div>
                )}

                {currentSection.content.detailed_explanation && !activeSection === 2 && (
                  <motion.div
                    className="space-y-8 mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <p className="text-lg text-jungle/80 dark:text-sand/80 leading-relaxed">
                      {currentSection.content.detailed_explanation.intro}
                    </p>

                    {currentSection.content.detailed_explanation.artifacts && (
                      <div className="space-y-6">
                        {currentSection.content.detailed_explanation.artifacts.map((artifact, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-sand/60 dark:bg-jungle/60 backdrop-blur-sm rounded-2xl p-6 border border-jungle/10 dark:border-sand/10"
                          >
                            <div className="flex items-start space-x-4 mb-4">
                              <div className="w-12 h-12 bg-terra/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                <BookOpen className="w-6 h-6 text-terra" />
                              </div>
                              <div>
                                <h4 className="text-xl font-bold text-jungle dark:text-sand mb-1">{artifact.name}</h4>
                                <p className="text-terra font-medium text-sm">{artifact.analogy}</p>
                              </div>
                            </div>
                            <p className="text-jungle/90 dark:text-sand/90 mb-3 leading-relaxed">
                              {artifact.description}
                            </p>
                            <p className="text-jungle/80 dark:text-sand/80 mb-4 leading-relaxed">{artifact.details}</p>
                            <div className="space-y-2">
                              <p className="text-sm font-medium text-jungle dark:text-sand">
                                <span className="text-terra">Na prática:</span> {artifact.practice}
                              </p>
                              <p className="text-sm font-medium text-jungle dark:text-sand">
                                <span className="text-terra">Exemplo:</span> {artifact.example}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {currentSection.content.detailed_explanation.events && (
                      <div className="space-y-6">
                        {currentSection.content.detailed_explanation.events.map((event, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-sand/60 dark:bg-jungle/60 backdrop-blur-sm rounded-2xl p-6 border border-jungle/10 dark:border-sand/10"
                          >
                            <div className="flex items-start space-x-4 mb-4">
                              <div className="w-12 h-12 bg-terra/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                <Clock className="w-6 h-6 text-terra" />
                              </div>
                              <div className="flex-1">
                                <h4 className="text-xl font-bold text-jungle dark:text-sand mb-1">{event.name}</h4>
                                <p className="text-terra font-medium text-sm mb-2">{event.purpose}</p>
                                <div className="flex flex-wrap gap-4 text-xs">
                                  <span className="bg-jungle/10 dark:bg-sand/10 px-2 py-1 rounded-lg text-jungle dark:text-sand">
                                    ⏱️ {event.duration}
                                  </span>
                                  <span className="bg-jungle/10 dark:bg-sand/10 px-2 py-1 rounded-lg text-jungle dark:text-sand">
                                    👥 {event.participants}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <p className="text-jungle/90 dark:text-sand/90 mb-3 leading-relaxed">{event.details}</p>
                            <div className="space-y-2">
                              <p className="text-sm font-medium text-jungle dark:text-sand">
                                <span className="text-terra">Resultado:</span> {event.outcome}
                              </p>
                              <p className="text-sm font-medium text-jungle dark:text-sand">
                                <span className="text-terra">Dicas:</span> {event.tips}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {currentSection.content.detailed_explanation.flow && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-terra/10 border-2 border-terra/30 rounded-2xl p-6 text-center"
                      >
                        <div className="flex items-center justify-center space-x-3 mb-3">
                          <Target className="w-6 h-6 text-terra" />
                          <h4 className="text-lg font-bold text-jungle dark:text-sand">Resumo do Fluxo</h4>
                        </div>
                        <p className="text-jungle dark:text-sand font-medium leading-relaxed">
                          {currentSection.content.detailed_explanation.flow}
                        </p>
                      </motion.div>
                    )}
                  </motion.div>
                )}

                {currentSection.content.quiz && !activeSection === 2 && (
                  <motion.div
                    className="mt-12 space-y-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <div className="text-center">
                      <h3 className="text-2xl md:text-3xl font-bold text-jungle dark:text-sand mb-2">
                        Quiz Interativo
                      </h3>
                      <p className="text-terra font-medium">Teste seus conhecimentos</p>
                      <div className="w-16 h-1 bg-terra rounded-full mx-auto mt-3"></div>
                    </div>

                    {currentSection.content.quiz.map((quiz, quizIndex) => (
                      <motion.div
                        key={quizIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: quizIndex * 0.2 }}
                        className="bg-sand/80 dark:bg-jungle/80 backdrop-blur-sm rounded-3xl p-8 border border-jungle/20 dark:border-sand/20 shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <h4 className="font-bold text-xl mb-6 text-jungle dark:text-sand leading-relaxed">
                          {quizIndex + 1}. {quiz.question}
                        </h4>
                        <div className="space-y-3">
                          {quiz.options.map((option, optionIndex) => {
                            const key = `${activeSection}-${quizIndex}`
                            const isSelected = quizAnswers[key] === optionIndex
                            const isCorrect = optionIndex === quiz.correct
                            const showResult = showFeedback[key]

                            return (
                              <motion.button
                                key={optionIndex}
                                onClick={() => handleQuizAnswer(activeSection, quizIndex, optionIndex)}
                                className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 font-medium ${
                                  showResult
                                    ? isCorrect
                                      ? "bg-green-100 border-green-300 text-green-800 shadow-lg"
                                      : isSelected
                                        ? "bg-red-100 border-red-300 text-red-800 shadow-lg"
                                        : "bg-jungle/5 dark:bg-sand/5 border-jungle/10 dark:border-sand/10 text-jungle/60 dark:text-sand/60"
                                    : isSelected
                                      ? "bg-terra/20 border-terra text-jungle dark:text-sand shadow-lg"
                                      : "bg-jungle/5 dark:bg-sand/5 border-jungle/10 dark:border-sand/10 text-jungle dark:text-sand hover:bg-terra/10 hover:border-terra/50 hover:shadow-md"
                                }`}
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                disabled={showResult}
                              >
                                <div className="flex items-center space-x-4">
                                  <div
                                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                                      showResult && isCorrect
                                        ? "bg-green-500 border-green-500"
                                        : showResult && isSelected && !isCorrect
                                          ? "bg-red-500 border-red-500"
                                          : isSelected
                                            ? "bg-terra border-terra"
                                            : "border-jungle/30 dark:border-sand/30"
                                    }`}
                                  >
                                    {showResult && isCorrect && <CheckCircle className="w-4 h-4 text-white" />}
                                    {showResult && isSelected && !isCorrect && (
                                      <span className="text-white text-xs">✕</span>
                                    )}
                                    {isSelected && !showResult && <div className="w-2 h-2 bg-sand rounded-full" />}
                                  </div>
                                  <span>{option}</span>
                                </div>
                              </motion.button>
                            )
                          })}
                        </div>
                        {showFeedback[`${activeSection}-${quizIndex}`] && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            className="mt-6 p-5 bg-terra/10 border-2 border-terra/30 rounded-2xl"
                          >
                            <div className="flex items-start space-x-3">
                              <Lightbulb className="w-5 h-5 text-terra mt-0.5 flex-shrink-0" />
                              <p className="text-jungle dark:text-sand font-medium leading-relaxed">{quiz.feedback}</p>
                            </div>
                          </motion.div>
                        )}
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          <motion.div
            className="flex justify-between items-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.button
              onClick={prevSection}
              disabled={activeSection === 0}
              className={`group flex items-center space-x-3 px-8 py-4 rounded-2xl font-medium transition-all duration-300 ${
                activeSection === 0
                  ? "bg-jungle/10 dark:bg-sand/10 text-jungle/40 dark:text-sand/40 cursor-not-allowed"
                  : "bg-jungle/20 dark:bg-sand/20 text-jungle dark:text-sand hover:bg-terra/20 hover:text-jungle dark:hover:text-sand"
              }`}
              whileHover={activeSection > 0 ? { scale: 1.05, x: -5 } : {}}
              whileTap={activeSection > 0 ? { scale: 0.95 } : {}}
            >
              <motion.div
                className="w-8 h-8 rounded-full bg-jungle/20 dark:bg-sand/20 flex items-center justify-center group-hover:bg-sand/20 transition-colors"
                whileHover={activeSection > 0 ? { rotate: -180 } : {}}
                transition={{ duration: 0.3 }}
              >
                <ArrowLeft className="w-4 h-4" />
              </motion.div>
              <span>Seção Anterior</span>
            </motion.button>

            <div className="text-center">
              <div className="text-sm font-medium text-jungle/60 dark:text-sand/60 mb-1">
                Seção {activeSection + 1} de {sections.length}
              </div>
              <div className="flex space-x-2">
                {sections.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeSection
                        ? "bg-terra w-8"
                        : index < activeSection
                          ? "bg-terra/60"
                          : "bg-jungle/20 dark:bg-sand/20"
                    }`}
                  />
                ))}
              </div>
            </div>

            <motion.button
              onClick={nextSection}
              disabled={activeSection === sections.length - 1}
              className={`group flex items-center space-x-3 px-8 py-4 rounded-2xl font-medium transition-all duration-300 ${
                activeSection === sections.length - 1
                  ? "bg-jungle/10 dark:bg-sand/10 text-jungle/40 dark:text-sand/40 cursor-not-allowed"
                  : "bg-terra text-sand shadow-lg hover:bg-orange-500 hover:text-sand"
              }`}
              whileHover={activeSection < sections.length - 1 ? { scale: 1.05, x: 5 } : {}}
              whileTap={activeSection < sections.length - 1 ? { scale: 0.95 } : {}}
            >
              <span>Próxima Seção</span>
              <motion.div
                className="w-8 h-8 rounded-full bg-sand/20 flex items-center justify-center group-hover:bg-sand/30 transition-colors"
                whileHover={activeSection < sections.length - 1 ? { rotate: 180 } : {}}
                transition={{ duration: 0.3 }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </main>

      <footer className="py-16 px-6 bg-jungle text-sand relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 left-0 w-64 h-64 bg-terra/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-48 h-48 bg-orange-500/10 rounded-full blur-2xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            className="flex items-center justify-center space-x-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="w-14 h-14 bg-terra rounded-2xl flex items-center justify-center shadow-lg"
              whileHover={{ rotate: 12, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Users className="w-8 h-8 text-sand" />
            </motion.div>
            <div className="text-left">
              <span className="text-2xl font-bold">Infinity School</span>
              <p className="text-sand/80">Educação que transforma</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-sand/90">Workshop: Gestão de Pessoas na Programação</h3>
            <div className="w-24 h-1 bg-terra rounded-full mx-auto"></div>
            <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-terra via-orange-400 to-yellow-300">
              "Dificuldades são oportunidades disfarçadas"
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}

export default WorkshopGestaoEquipes
