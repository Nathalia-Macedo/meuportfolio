"use client"

import React, { useState } from "react"
import { Users, RefreshCcw, Calendar, Database, Target, MessageCircle, ArrowRight } from "lucide-react"
import styled, { keyframes } from "styled-components"

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const ServiceCard = styled.div`
  background: ${(props) => (props.isHovered ? "linear-gradient(135deg, #D96C4A, #E3DACD)" : "linear-gradient(135deg, #2D4C3B, #1A2C23)")};
  border-radius: 20px;
  padding: 2rem;
  color: ${(props) => (props.isHovered ? "#2D4C3B" : "#E3DACD")};
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 80%);
    transform: rotate(${(props) => props.rotationAngle}deg);
    pointer-events: none;
  }
`

const IconWrapper = styled.div`
  background-color: ${(props) => (props.isHovered ? "#2D4C3B" : "#D96C4A")};
  border-radius: 50%;
  padding: 1rem;
  display: inline-block;
  margin-bottom: 1rem;
  transition: background-color 0.3s ease;
`

const FloatingIcon = styled.div`
  position: absolute;
  ${(props) => props.position};
  animation: ${float} 3s ease-in-out infinite;
  opacity: 0.2;
`

const RotatingBackground = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 150%;
  height: 150%;
  background: radial-gradient(circle, #D96C4A 0%, transparent 70%);
  transform: translate(-50%, -50%);
  animation: ${rotate} 20s linear infinite;
  opacity: 0.1;
  pointer-events: none;
`

const services = [
  {
    icon: Users,
    title: "Social Selling",
    description: "Engajamento estratégico para atrair clientes potenciais e construir relacionamentos duradouros.",
  },
  {
    icon: RefreshCcw,
    title: "Follow-ups Precisos",
    description: "Acompanhamento consistente para manter leads ativos e aumentar as chances de conversão.",
  },
  {
    icon: Calendar,
    title: "Agendamento Eficiente",
    description: "Otimização de agenda via Google Calendar para maximizar produtividade e oportunidades.",
  },
  {
    icon: Database,
    title: "CRM Organizado",
    description: "Gerenciamento eficaz de dados no Pipedrive para uma visão clara do funil de vendas.",
  },
  {
    icon: Target,
    title: "Qualificação de Leads",
    description: "Identificação precisa de prospects com maior potencial de conversão para sua empresa.",
  },
]

const SDRServices = () => {
  const [hoveredService, setHoveredService] = useState(null)

  return (
    <section className="bg-sand dark:bg-jungle py-20 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      <RotatingBackground />
      {services.map((service, index) => (
        <FloatingIcon key={index} position={`top: ${Math.random() * 100}%; left: ${Math.random() * 100}%;`}>
          {React.createElement(service.icon, { size: 32, color: "#D96C4A" })}
        </FloatingIcon>
      ))}
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-4xl md:text-5xl font-bold text-jungle dark:text-sand text-center mb-16">
          Impulsione Suas Vendas com SDR de Elite
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.slice(0, 3).map((service, index) => (
            <ServiceCard
              key={index}
              isHovered={hoveredService === index}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
              rotationAngle={Math.random() * 360}
            >
              <IconWrapper isHovered={hoveredService === index}>
                {React.createElement(service.icon, {
                  size: 32,
                  color: hoveredService === index ? "#E3DACD" : "#2D4C3B",
                })}
              </IconWrapper>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-sm">{service.description}</p>
            </ServiceCard>
          ))}
        </div>

        <div className="grid grid-cols-1 md:flex md:justify-center md:gap-2 gap-8 mb-12">
          {services.slice(3).map((service, index) => (
            <ServiceCard
              key={index + 3}
              isHovered={hoveredService === index + 3}
              onMouseEnter={() => setHoveredService(index + 3)}
              onMouseLeave={() => setHoveredService(null)}
              rotationAngle={Math.random() * 360}
              className="w-full md:w-1/3 max-w-sm mx-auto"
            >
              <IconWrapper isHovered={hoveredService === index + 3}>
                {React.createElement(service.icon, {
                  size: 32,
                  color: hoveredService === index + 3 ? "#E3DACD" : "#2D4C3B",
                })}
              </IconWrapper>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-sm">{service.description}</p>
            </ServiceCard>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-terra hover:bg-terra-dark text-white text-lg font-bold rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
          >
            <MessageCircle className="mr-3" size={24} />
            Vamos Conversar e Vender Mais!
            <ArrowRight className="ml-3" size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default SDRServices

