"use client"
import { useMemo, useEffect } from "react"
import NotFound404Glitch from "../Components/NotFound/Glitch"
import NotFound404Terminal from "../Components/NotFound/Terminal"
import NotFound404Space from "../Components/NotFound/Space"

const notFoundPages = [NotFound404Glitch, NotFound404Terminal, NotFound404Space]

export default function NotFound() {
  const SelectedNotFound = useMemo(() => {
    // Função para obter o próximo índice
    const getNextIndex = (currentIndex, totalPages) => {
      return (currentIndex + 1) % totalPages
    }

    // Recupera o último índice usado do localStorage
    const lastIndex = Number.parseInt(localStorage.getItem("lastNotFoundIndex") || "-1")

    // Calcula o próximo índice
    const currentIndex = getNextIndex(lastIndex, notFoundPages.length)

    // Retorna o componente correspondente ao índice atual
    return notFoundPages[currentIndex]
  }, [])

  // Efeito para atualizar o localStorage após a renderização
  useEffect(() => {
    const updateLocalStorage = () => {
      const lastIndex = Number.parseInt(localStorage.getItem("lastNotFoundIndex") || "-1")
      const currentIndex = (lastIndex + 1) % notFoundPages.length
      localStorage.setItem("lastNotFoundIndex", currentIndex.toString())
    }

    updateLocalStorage()
  }, [])

  return <SelectedNotFound />
}

