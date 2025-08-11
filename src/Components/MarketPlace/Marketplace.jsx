"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  Search,
  Star,
  ShoppingCart,
  Heart,
  ExternalLink,
  Grid3X3,
  List,
  TrendingUp,
  Award,
  Zap,
  ChevronDown,
  Filter,
  Sparkles,
  Crown,
  FlameIcon as Fire,
  Users,
  Clock,
  BookOpen,
  Code,
  Palette,
  BarChart3,
  Briefcase,
  Camera,
} from "lucide-react"

// Registrar plugins do GSAP
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

// Dados dos produtos de afiliados
const affiliateProducts = [
  {
    id: 1,
    title: "Curso Completo de React.js",
    description:
      "Domine React do zero ao profissional com projetos reais, hooks avançados e as melhores práticas do mercado. Inclui Next.js, TypeScript e deploy.",
    price: 297,
    originalPrice: 497,
    rating: 4.9,
    category: "Programação",
    affiliateLink: "https://exemplo.com/react-course",
    badge: "Bestseller",
    features: [
      "40h de conteúdo premium",
      "15 projetos práticos",
      "Certificado profissional",
      "Suporte vitalício",
      "Comunidade exclusiva",
    ],
    level: "Iniciante ao Avançado",
    duration: "40 horas",
    icon: Code,
  },
  {
    id: 2,
    title: "Masterclass de Design UI/UX",
    description:
      "Transforme-se em um designer completo com metodologias comprovadas, portfolio profissional e acesso a vagas exclusivas no mercado.",
    price: 397,
    originalPrice: 697,
    rating: 4.8,
    category: "Design",
    affiliateLink: "https://exemplo.com/ux-design",
    badge: "Novo",
    features: ["Figma avançado", "Portfolio completo", "Mentoria 1:1", "Vagas exclusivas", "Design System"],
    level: "Intermediário",
    duration: "35 horas",
    icon: Palette,
  },
  {
    id: 3,
    title: "Marketing Digital Completo 2025",
    description:
      "Estratégias atualizadas de marketing digital, tráfego pago, funis de alta conversão e automação para escalar seu negócio online.",
    price: 197,
    originalPrice: 397,
    rating: 4.7,
    category: "Marketing",
    affiliateLink: "https://exemplo.com/marketing-digital",
    badge: "Promoção",
    features: ["Tráfego pago", "Funis de venda", "Copywriting", "Analytics", "Automação"],
    level: "Todos os níveis",
    duration: "50 horas",
    icon: BarChart3,
  },
  {
    id: 4,
    title: "Python para Data Science & AI",
    description:
      "Análise de dados profissional, machine learning, deep learning e inteligência artificial com Python. Projetos reais de mercado.",
    price: 347,
    originalPrice: 547,
    rating: 4.9,
    category: "Programação",
    affiliateLink: "https://exemplo.com/python-data-science",
    badge: "Trending",
    features: ["Pandas & NumPy", "Machine Learning", "Deep Learning", "Projetos reais", "Jupyter Notebooks"],
    level: "Intermediário ao Avançado",
    duration: "60 horas",
    icon: Code,
  },
  {
    id: 5,
    title: "Fotografia Profissional & Edição",
    description:
      "Técnicas avançadas de fotografia, iluminação profissional, edição no Lightroom e Photoshop, e como monetizar suas habilidades.",
    price: 247,
    originalPrice: 447,
    rating: 4.6,
    category: "Criativo",
    affiliateLink: "https://exemplo.com/fotografia",
    badge: "Popular",
    features: [
      "Técnicas de luz",
      "Lightroom & Photoshop",
      "Portfolio profissional",
      "Precificação",
      "Marketing pessoal",
    ],
    level: "Iniciante ao Intermediário",
    duration: "30 horas",
    icon: Camera,
  },
  {
    id: 6,
    title: "E-commerce Milionário",
    description:
      "Sistema completo para criar e escalar lojas virtuais de sucesso. Shopify, tráfego pago, logística e automações avançadas.",
    price: 297,
    originalPrice: 497,
    rating: 4.8,
    category: "Negócios",
    affiliateLink: "https://exemplo.com/ecommerce",
    badge: "Bestseller",
    features: ["Shopify completo", "Tráfego pago", "Logística", "Automações", "Dropshipping"],
    level: "Iniciante",
    duration: "45 horas",
    icon: Briefcase,
  },
]

const categories = ["Todos", "Programação", "Design", "Marketing", "Negócios", "Criativo"]

const badgeConfig = {
  Bestseller: { color: "from-yellow-400 to-orange-500", icon: Crown, glow: "shadow-yellow-500/50" },
  Novo: { color: "from-green-400 to-emerald-500", icon: Sparkles, glow: "shadow-green-500/50" },
  Promoção: { color: "from-red-400 to-pink-500", icon: Fire, glow: "shadow-red-500/50" },
  Trending: { color: "from-purple-400 to-violet-500", icon: TrendingUp, glow: "shadow-purple-500/50" },
  Popular: { color: "from-blue-400 to-cyan-500", icon: Users, glow: "shadow-blue-500/50" },
}

// Componente de partículas conectadas
const ConnectedParticles = () => {
  const canvasRef = useRef(null)
  const particlesRef = useRef([])
  const animationRef = useRef()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Criar partículas
    const createParticles = () => {
      particlesRef.current = []
      const particleCount = 80
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
        })
      }
    }

    createParticles()

    // Animar partículas
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Atualizar e desenhar partículas
      particlesRef.current.forEach((particle, i) => {
        particle.x += particle.vx
        particle.y += particle.vy

        // Bounce nas bordas
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        // Desenhar partícula
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = "#D96C4A"
        ctx.fill()

        // Conectar partículas próximas
        particlesRef.current.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle = `rgba(217, 108, 74, ${0.3 * (1 - distance / 120)})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        })
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
}

// Componente Select customizado
const CustomSelect = ({ value, onChange, options, placeholder, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedLabel, setSelectedLabel] = useState(placeholder)

  useEffect(() => {
    const selected = options.find((opt) => opt.value === value)
    setSelectedLabel(selected ? selected.label : placeholder)
  }, [value, options, placeholder])

  return (
    <div className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 text-left bg-white/90 dark:bg-jungle/90 border border-jungle/20 dark:border-sand/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-terra focus:border-terra flex items-center justify-between transition-all duration-300 hover:bg-white dark:hover:bg-jungle"
      >
        <span className="text-jungle dark:text-sand font-medium">{selectedLabel}</span>
        <ChevronDown
          className={`w-5 h-5 text-jungle dark:text-sand transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-white dark:bg-jungle border border-jungle/20 dark:border-sand/20 rounded-xl shadow-2xl max-h-60 overflow-auto">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                onChange(option.value)
                setIsOpen(false)
              }}
              className="w-full px-4 py-3 text-left hover:bg-terra/10 text-jungle dark:text-sand focus:outline-none focus:bg-terra/10 transition-all duration-200 first:rounded-t-xl last:rounded-b-xl font-medium"
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

// Componente Slider customizado
const CustomSlider = ({ value, onChange, min = 0, max = 100, step = 1, className = "" }) => {
  const [localValue, setLocalValue] = useState(value)

  const handleChange = (e, index) => {
    const newValue = [...localValue]
    newValue[index] = Number.parseInt(e.target.value)
    setLocalValue(newValue)
    onChange(newValue)
  }

  const percentage1 = ((localValue[0] - min) / (max - min)) * 100
  const percentage2 = ((localValue[1] - min) / (max - min)) * 100

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="relative h-2 bg-jungle/20 dark:bg-sand/20 rounded-full overflow-hidden">
        <div
          className="absolute h-full bg-terra rounded-full transition-all duration-300"
          style={{
            left: `${percentage1}%`,
            width: `${percentage2 - percentage1}%`,
          }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={localValue[0]}
          onChange={(e) => handleChange(e, 0)}
          className="absolute w-full h-full opacity-0 cursor-pointer"
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={localValue[1]}
          onChange={(e) => handleChange(e, 1)}
          className="absolute w-full h-full opacity-0 cursor-pointer"
        />
        <div
          className="absolute w-4 h-4 bg-terra rounded-full shadow-lg transform -translate-y-1/2 -translate-x-1/2 transition-all duration-300 hover:scale-110"
          style={{ left: `${percentage1}%`, top: "50%" }}
        />
        <div
          className="absolute w-4 h-4 bg-terra rounded-full shadow-lg transform -translate-y-1/2 -translate-x-1/2 transition-all duration-300 hover:scale-110"
          style={{ left: `${percentage2}%`, top: "50%" }}
        />
      </div>
    </div>
  )
}

export default function PremiumMarketplace() {
  const [products, setProducts] = useState(affiliateProducts)
  const [filteredProducts, setFilteredProducts] = useState(affiliateProducts)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [priceRange, setPriceRange] = useState([0, 700])
  const [sortBy, setSortBy] = useState("popular")
  const [viewMode, setViewMode] = useState("grid")
  const [showFilters, setShowFilters] = useState(false)
  const [favorites, setFavorites] = useState(new Set())
  const [isLoading, setIsLoading] = useState(true)

  const heroRef = useRef(null)
  const productsRef = useRef(null)
  const filtersRef = useRef(null)

  // Animações GSAP
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Loading
      gsap.to({}, { duration: 1.5, onComplete: () => setIsLoading(false) })

      // Hero animations
      const tl = gsap.timeline({ delay: 0.5 })
      tl.fromTo(
        ".hero-title",
        { opacity: 0, y: 100, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "back.out(1.7)" },
      )
        .fromTo(
          ".hero-subtitle",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "-=0.6",
        )
        .fromTo(
          ".hero-description",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.4",
        )

      // Floating icons animation
      gsap.to(".floating-icon", {
        y: "random(-30, 30)",
        x: "random(-20, 20)",
        rotation: "random(-15, 15)",
        duration: "random(3, 6)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          amount: 2,
          from: "random",
        },
      })

      // Products animation
      ScrollTrigger.batch(".product-card", {
        onEnter: (elements) => {
          gsap.fromTo(
            elements,
            { opacity: 0, y: 60, scale: 0.9 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              stagger: 0.1,
              ease: "back.out(1.7)",
            },
          )
        },
      })

      // Card icons animation
      gsap.to(".card-icon", {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none",
        stagger: {
          amount: 5,
          from: "random",
        },
      })
    })

    return () => ctx.revert()
  }, [])

  // Filtros
  useEffect(() => {
    let filtered = products

    if (selectedCategory !== "Todos") {
      filtered = filtered.filter((product) => product.category === selectedCategory)
    }

    filtered = filtered.filter((product) => product.price >= priceRange[0] && product.price <= priceRange[1])

    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        filtered.sort((a, b) => b.price - a.price)
        break
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case "newest":
        filtered.sort((a, b) => b.id - a.id)
        break
      default:
        filtered.sort((a, b) => b.rating - a.rating)
    }

    setFilteredProducts(filtered)
  }, [searchTerm, selectedCategory, priceRange, sortBy, products])

  const toggleFavorite = (productId) => {
    const newFavorites = new Set(favorites)
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId)
    } else {
      newFavorites.add(productId)
    }
    setFavorites(newFavorites)
  }

  const handlePurchase = (affiliateLink) => {
    window.open(affiliateLink, "_blank", "noopener,noreferrer")
  }

  const categoryOptions = categories.map((cat) => ({ value: cat, label: cat }))
  const sortOptions = [
    { value: "popular", label: "Mais Popular" },
    { value: "rating", label: "Melhor Avaliado" },
    { value: "price-low", label: "Menor Preço" },
    { value: "price-high", label: "Maior Preço" },
    { value: "newest", label: "Mais Recente" },
  ]

  if (isLoading) {
    return (
      <div className="min-h-screen bg-jungle flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-terra/30 border-t-terra rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-sand text-xl font-semibold">Carregando marketplace...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-sand dark:bg-jungle transition-colors duration-500">
      {/* Floating Background Icons */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {[Code, Palette, BarChart3, Briefcase, Camera, Award, Zap, Crown].map((Icon, i) => (
          <Icon
            key={i}
            className="floating-icon absolute text-jungle/5 dark:text-sand/5"
            size={Math.random() * 40 + 20}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen bg-jungle dark:bg-jungle overflow-hidden">
        <ConnectedParticles />
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="hero-title">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-sand mb-6 tracking-tight">
                MARKETPLACE PREMIUM
              </h1>
            </div>
            <div className="hero-subtitle">
              <p className="text-xl md:text-2xl text-terra mb-8 font-semibold tracking-wide">
                Produtos digitais de elite para transformar sua carreira
              </p>
            </div>
            <div className="hero-description">
              <p className="text-lg md:text-xl text-sand/80 mb-12 leading-relaxed max-w-3xl mx-auto">
                Cursos selecionados, ferramentas profissionais e conteúdos exclusivos para acelerar seu sucesso no
                mercado digital
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section
        ref={filtersRef}
        className="sticky top-0 z-40 bg-sand/95 dark:bg-jungle/95 backdrop-blur-md border-b border-jungle/10 dark:border-sand/10"
      >
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-jungle/50 dark:text-sand/50 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar cursos e produtos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white dark:bg-jungle border border-jungle/20 dark:border-sand/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-terra focus:border-terra text-jungle dark:text-sand placeholder-jungle/50 dark:placeholder-sand/50 font-medium"
              />
            </div>

            {/* Controls */}
            <div className="flex flex-wrap gap-4 items-center">
              <CustomSelect
                value={selectedCategory}
                onChange={setSelectedCategory}
                options={categoryOptions}
                placeholder="Categoria"
                className="w-40"
              />

              <CustomSelect
                value={sortBy}
                onChange={setSortBy}
                options={sortOptions}
                placeholder="Ordenar"
                className="w-40"
              />

              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center px-4 py-3 bg-terra text-white rounded-xl hover:bg-terra/90 transition-colors font-medium"
              >
                <Filter className="w-4 h-4 mr-2" />
                Filtros
              </button>

              <div className="flex items-center gap-2 bg-white dark:bg-jungle rounded-xl p-1 border border-jungle/20 dark:border-sand/20">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === "grid"
                      ? "bg-terra text-white"
                      : "text-jungle dark:text-sand hover:bg-jungle/10 dark:hover:bg-sand/10"
                  }`}
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === "list"
                      ? "bg-terra text-white"
                      : "text-jungle dark:text-sand hover:bg-jungle/10 dark:hover:bg-sand/10"
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Advanced Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6 p-6 bg-white/50 dark:bg-jungle/50 rounded-xl border border-jungle/20 dark:border-sand/20"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="text-sm font-bold mb-3 block text-jungle dark:text-sand">
                      Faixa de Preço: R$ {priceRange[0]} - R$ {priceRange[1]}
                    </label>
                    <CustomSlider value={priceRange} onChange={setPriceRange} max={700} min={0} step={10} />
                  </div>
                  <div>
                    <label className="text-sm font-bold mb-3 block text-jungle dark:text-sand">Nível</label>
                    <CustomSelect
                      value="all"
                      onChange={() => {}}
                      options={[
                        { value: "all", label: "Todos os níveis" },
                        { value: "beginner", label: "Iniciante" },
                        { value: "intermediate", label: "Intermediário" },
                        { value: "advanced", label: "Avançado" },
                      ]}
                      placeholder="Todos os níveis"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-bold mb-3 block text-jungle dark:text-sand">Avaliação</label>
                    <CustomSelect
                      value="all"
                      onChange={() => {}}
                      options={[
                        { value: "all", label: "Qualquer avaliação" },
                        { value: "4.5", label: "4.5+ estrelas" },
                        { value: "4.0", label: "4.0+ estrelas" },
                      ]}
                      placeholder="Qualquer avaliação"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Products Grid */}
      <section ref={productsRef} className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-jungle dark:text-sand mb-4">
            {filteredProducts.length} produtos encontrados
          </h2>
          <p className="text-xl text-jungle/70 dark:text-sand/70">Selecionados para acelerar seu sucesso</p>
        </div>

        <div
          className={`grid gap-8 ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}
        >
          {filteredProducts.map((product) => {
            const BadgeIcon = badgeConfig[product.badge]?.icon || Crown
            const ProductIcon = product.icon
            return (
              <motion.div
                key={product.id}
                className="product-card group h-full"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="h-full flex flex-col bg-white dark:bg-jungle border border-jungle/10 dark:border-sand/10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {/* Header */}
                  <div className="relative p-6 bg-gradient-to-br from-jungle/5 to-terra/5 dark:from-sand/5 dark:to-terra/5">
                    {/* Badge */}
                    <div className="absolute top-4 left-4">
                      <div
                        className={`inline-flex items-center bg-gradient-to-r ${badgeConfig[product.badge]?.color} text-white px-3 py-1 rounded-full font-bold text-sm shadow-lg`}
                      >
                        <BadgeIcon className="w-4 h-4 mr-1" />
                        {product.badge}
                      </div>
                    </div>

                    {/* Favorite */}
                    <button
                      onClick={() => toggleFavorite(product.id)}
                      className="absolute top-4 right-4 p-2 bg-white/80 hover:bg-white rounded-full transition-colors shadow-md"
                    >
                      <Heart
                        className={`w-4 h-4 ${favorites.has(product.id) ? "fill-red-500 text-red-500" : "text-jungle"}`}
                      />
                    </button>

                    {/* Icon */}
                    <div className="flex justify-center mb-4 mt-8">
                      <div className="p-4 bg-terra/10 rounded-2xl">
                        <ProductIcon className="card-icon w-12 h-12 text-terra" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col p-6">
                    {/* Title */}
                    <h3 className="text-xl font-black text-jungle dark:text-sand mb-3 line-clamp-2 group-hover:text-terra transition-colors">
                      {product.title}
                    </h3>

                    {/* Description */}
                    <p className="text-jungle/70 dark:text-sand/70 line-clamp-3 mb-4 leading-relaxed flex-1">
                      {product.description}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="font-bold text-jungle dark:text-sand">{product.rating}</span>
                    </div>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-jungle/70 dark:text-sand/70">
                          <div className="w-1.5 h-1.5 bg-terra rounded-full mr-3"></div>
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Info */}
                    <div className="flex items-center gap-4 mb-6 text-sm text-jungle/60 dark:text-sand/60">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {product.duration}
                      </div>
                      <div className="flex items-center">
                        <BookOpen className="w-4 h-4 mr-1" />
                        {product.level}
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="border-t border-jungle/10 dark:border-sand/10 pt-4 mb-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl font-black text-terra">R$ {product.price}</span>
                        <span className="text-lg text-jungle/50 dark:text-sand/50 line-through">
                          R$ {product.originalPrice}
                        </span>
                      </div>
                      <div className="text-sm font-bold text-green-600">
                        {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                      </div>
                    </div>

                    {/* CTA */}
                    <button
                      onClick={() => handlePurchase(product.affiliateLink)}
                      className="w-full flex items-center justify-center px-6 py-3 bg-terra hover:bg-terra/90 text-white font-bold rounded-xl transition-colors shadow-lg hover:shadow-xl"
                    >
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      Comprar Agora
                      <ExternalLink className="w-5 h-5 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <Search className="w-16 h-16 mx-auto mb-4 text-jungle/30 dark:text-sand/30" />
            <h3 className="text-2xl font-bold mb-4 text-jungle dark:text-sand">Nenhum produto encontrado</h3>
            <p className="text-jungle/70 dark:text-sand/70 mb-8">Tente ajustar os filtros ou termos de busca</p>
            <button
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("Todos")
                setPriceRange([0, 700])
              }}
              className="px-6 py-3 bg-terra text-white rounded-xl font-bold hover:bg-terra/90 transition-colors"
            >
              Limpar Filtros
            </button>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-jungle to-jungle/90 py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-5xl font-black text-sand mb-6">Não encontrou o que procurava?</h2>
          <p className="text-sand/90 text-lg md:text-xl mb-10 leading-relaxed">
            Entre em contato comigo para sugestões personalizadas ou tire suas dúvidas sobre qualquer produto
          </p>
          <button
            onClick={() => window.open("https://wa.me/71987257532", "_blank")}
            className="inline-flex items-center px-8 py-4 bg-terra hover:bg-terra/90 text-white font-bold rounded-xl transition-colors text-lg shadow-xl"
          >
            💬 Falar Comigo no WhatsApp
            <ExternalLink className="w-5 h-5 ml-3" />
          </button>
        </div>
      </section>
    </div>
  )
}
