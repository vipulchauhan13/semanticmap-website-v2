"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Check, Phone, Mail, MapPin } from "lucide-react"
import Logo from "./logo"
import ContactForm from "./contact-form"
import WaveBackground from "./wave-background"
import { useLanguage } from "@/contexts/language-context"
import LanguageSwitcher from "@/components/language-switcher"

export default function PricingPage() {
  const [showContactForm, setShowContactForm] = useState(false)
  const { t } = useLanguage()

  const pricingTiers = [
    {
      name: t("Trial"),
      price: t("Free"),
      features: [t("1 project"), t("500 minutes of audio"), t("Core features")],
      buttonText: t("Start Free Trial"),
      buttonVariant: "outline" as const,
    },
    {
      name: t("Pay-as-you-go"),
      price: t("€0.15/minute audio"),
      features: [t("Unlimited projects"), t("Unlimited minutes of audio"), t("Basic support"), t("All features")],
      buttonText: t("Get Started"),
      buttonVariant: "default" as const,
      highlighted: true,
    },
    {
      name: t("Enterprise"),
      price: t("Custom"),
      features: [
        t("Unlimited projects"),
        t("Unlimited audio"),
        t("24/7 dedicated support"),
        t("Custom features"),
        t("On-premise option"),
      ],
      onClick: () => setShowContactForm(true),
    },
  ]

  return (
    <div className="relative min-h-screen w-full flex flex-col bg-black text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <WaveBackground color="rgba(59, 130, 246, 0.1)" speed="medium" />
      </div>

      {/* Navigation */}
      <header className="relative z-10 container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <Logo />
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="/use-cases" className="text-white/80 hover:text-white transition-colors">
            {t("Use Cases")}
          </Link>
          <Link href="/pricing" className="text-white hover:text-white transition-colors font-medium">
            {t("Pricing")}
          </Link>
          <Link
            href="/contact"
            className="text-white/80 hover:text-white transition-colors"
            onClick={(e) => {
              e.preventDefault()
              setShowContactForm(true)
            }}
          >
            {t("Contact")}
          </Link>
          <LanguageSwitcher />
          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              className="border-white/20 bg-transparent hover:bg-white/10 text-white rounded-full px-6"
            >
              {t("Sign Up")}
            </Button>
            <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6">{t("Login")}</Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex flex-col px-4 pt-8 pb-20">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            {t("Pricing Plans")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 mb-10 max-w-3xl mx-auto"
          >
            {t("Choose the perfect plan to elevate your market research with Semantic Map")}
          </motion.p>
        </div>

        {/* Pricing Tiers */}
        <div className="container mx-auto mb-20 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white/5 border ${
                  tier.highlighted ? "border-white/30" : "border-white/10"
                } rounded-xl p-8 backdrop-blur-sm ${tier.highlighted ? "shadow-lg shadow-white/5" : ""}`}
              >
                <h3 className="text-2xl font-semibold mb-2">{tier.name}</h3>
                <p className="text-3xl font-bold mb-6">{tier.price}</p>

                <ul className="space-y-4">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="container mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("Not sure which plan is right for you?")}</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              {t("Our team is here to help you find the perfect solution for your needs.")}
            </p>
            <Button
              size="lg"
              onClick={() => setShowContactForm(true)}
              className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-6 text-lg font-medium"
            >
              {t("Contact Us")}
            </Button>
          </motion.div>
        </div>

        {/* Contact Form Modal */}
        {showContactForm && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-black/80 border border-white/10 rounded-xl p-6 w-full max-w-lg relative"
            >
              <button
                onClick={() => setShowContactForm(false)}
                className="absolute top-4 right-4 text-white/60 hover:text-white"
              >
                ✕
              </button>
              <ContactForm onClose={() => setShowContactForm(false)} />
            </motion.div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full bg-black border-t border-white/10 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Contact Us */}
            <div>
              <h3 className="text-white text-xl font-medium mb-6">{t("Contact Us")}</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-white/60 mr-3" />
                  <a href="tel:+4917758440003" className="text-white/80 hover:text-white transition-colors">
                    +49 17758440003
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-white/60 mr-3" />
                  <a href="mailto:info@semanticmap.com" className="text-white/80 hover:text-white transition-colors">
                    info@semanticmap.com
                  </a>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-white/60 mr-3 mt-1" />
                  <span className="text-white/80">
                    North Rhine-Westphalia,
                    <br />
                    Germany
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white text-xl font-medium mb-6">{t("Quick Links")}</h3>
              <div className="space-y-3">
                <div>
                  <Link href="/use-cases" className="text-white/80 hover:text-white transition-colors">
                    {t("Use Cases")}
                  </Link>
                </div>
                <div>
                  <Link href="/pricing" className="text-white/80 hover:text-white transition-colors">
                    {t("Pricing")}
                  </Link>
                </div>
              </div>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-white text-xl font-medium mb-6">{t("Legal")}</h3>
              <div className="space-y-3">
                <div>
                  <Link href="/privacy" className="text-white/80 hover:text-white transition-colors">
                    {t("Data Privacy Policy")}
                  </Link>
                </div>
                <div>
                  <Link href="/terms" className="text-white/80 hover:text-white transition-colors">
                    {t("Terms of Service")}
                  </Link>
                </div>
                <div>
                  <Link href="/imprint" className="text-white/80 hover:text-white transition-colors">
                    {t("Imprint")}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Footer bottom */}
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <Logo />
            </div>
            <div className="text-white/60 text-sm">© 2025 Semantic Map Inc. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
