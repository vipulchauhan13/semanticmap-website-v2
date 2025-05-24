"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
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

interface UseCaseDetailProps {
  useCase: UseCaseProps
}

export default function UseCaseDetail({ useCase }: UseCaseDetailProps) {
  const { t } = useLanguage()

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 backdrop-blur-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className={`w-10 h-10 rounded-full ${useCase.iconBg} flex items-center justify-center`}>
              {useCase.icon}
            </div>
            <h3 className="text-2xl font-semibold">{useCase.title}</h3>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-medium mb-2 text-white/90">{t("The Challenge")}</h4>
              <p className="text-white/70">{useCase.challenge}</p>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-2 text-white/90">{t("Our Solution")}</h4>
              <p className="text-white/70">{useCase.solution}</p>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-2 text-white/90">{t("Key Benefits")}</h4>
              <ul className="space-y-2">
                {useCase.benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <Check className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-2 text-white/90">{t("Key Features")}</h4>
              <div className="flex flex-wrap gap-2">
                {useCase.features.map((feature, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    className={`px-3 py-1 rounded-full text-sm border ${useCase.borderColor} bg-white/5`}
                  >
                    {feature}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-video w-full h-full rounded-lg overflow-hidden bg-gradient-to-br from-black/40 to-black/20 border border-white/10">
            <img
              src={useCase.image || "/placeholder.svg"}
              alt={useCase.title}
              className="w-full h-full object-cover opacity-80 mix-blend-lighten"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
