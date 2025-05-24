"use client"

import type React from "react"

import { motion } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

interface UseCaseProps {
  id: number
  title: string
  icon: React.ReactNode
  color: string
  borderColor: string
  iconBg: string
  challenge: string
  solution: string
  benefits: string[]
  features: string[]
  image: string
}

interface UseCaseCardProps {
  useCase: UseCaseProps
  isActive: boolean
  onClick: () => void
}

export default function UseCaseCard({ useCase, isActive, onClick }: UseCaseCardProps) {
  const { t } = useLanguage()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`bg-gradient-to-br ${useCase.color} border ${
        isActive ? "border-white/30" : "border-white/10"
      } rounded-xl p-6 cursor-pointer hover:border-white/20 transition-all duration-300 backdrop-blur-sm ${
        isActive ? "shadow-lg shadow-white/5" : ""
      }`}
      onClick={onClick}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-full ${useCase.iconBg} flex items-center justify-center`}>
            {useCase.icon}
          </div>
          <h3 className="text-xl font-semibold">{useCase.title}</h3>
        </div>
        <div className="text-white/70">
          {isActive ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </div>
      </div>

      <div className="mt-4">
        <p className="text-white/80 line-clamp-2">{useCase.challenge}</p>
      </div>

      <div className="mt-4 text-sm text-white/60 flex items-center">
        <span>{isActive ? t("Click to collapse") : t("Click to explore")}</span>
      </div>
    </motion.div>
  )
}
