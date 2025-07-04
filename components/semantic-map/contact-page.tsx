"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"
import Logo from "./logo"
import ContactForm from "./contact-form"
import WaveBackground from "./wave-background"
import { useState } from "react"

export default function ContactPage() {
  const [showContactForm, setShowContactForm] = useState(false)

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
            Use Cases
          </Link>
          <Link href="/pricing" className="text-white/80 hover:text-white transition-colors">
            Pricing
          </Link>
          <Link
            href="/contact"
            className="text-white hover:text-white transition-colors font-medium"
            onClick={(e) => {
              e.preventDefault()
              setShowContactForm(true)
            }}
          >
            Contact
          </Link>
          <div className="ml-4 text-white/80 hover:text-white transition-colors">EN</div>
          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              className="border-white/20 bg-transparent hover:bg-white/10 text-white rounded-full px-6"
            >
              Sign Up
            </Button>
            <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6">Login</Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex flex-col px-4 pt-8 pb-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">Get in Touch</h1>
              <p className="text-lg text-white/80 mb-8">
                Have questions about our platform or need a personalized demo? Our team is here to help you get the most
                out of Semantic Map.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
                    <Phone className="w-5 h-5 text-white/80" />
                  </div>
                  <div>
                    <div className="text-sm text-white/60">Phone</div>
                    <a href="tel:+4917758440003" className="text-white hover:text-white/80 transition-colors">
                      +49 17758440003
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
                    <Mail className="w-5 h-5 text-white/80" />
                  </div>
                  <div>
                    <div className="text-sm text-white/60">Email</div>
                    <a href="mailto:info@semanticmap.com" className="text-white hover:text-white/80 transition-colors">
                      info@semanticmap.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4 mt-1">
                    <MapPin className="w-5 h-5 text-white/80" />
                  </div>
                  <div>
                    <div className="text-sm text-white/60">Location</div>
                    <div className="text-white">
                      North Rhine-Westphalia,
                      <br />
                      Germany
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-sm"
            >
              <ContactForm />
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
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full bg-black border-t border-white/10 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Contact Us */}
            <div>
              <h3 className="text-white text-xl font-medium mb-6">Contact Us</h3>
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
              <h3 className="text-white text-xl font-medium mb-6">Quick Links</h3>
              <div className="space-y-3">
                <div>
                  <Link href="/use-cases" className="text-white/80 hover:text-white transition-colors">
                    Use Cases
                  </Link>
                </div>
                <div>
                  <Link href="/pricing" className="text-white/80 hover:text-white transition-colors">
                    Pricing
                  </Link>
                </div>
                <div>
                  <Link href="/contact" className="text-white/80 hover:text-white transition-colors">
                    Contact
                  </Link>
                </div>
              </div>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-white text-xl font-medium mb-6">Legal</h3>
              <div className="space-y-3">
                <div>
                  <Link href="/privacy" className="text-white/80 hover:text-white transition-colors">
                    Data Privacy Policy
                  </Link>
                </div>
                <div>
                  <Link href="/terms" className="text-white/80 hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </div>
                <div>
                  <Link href="/imprint" className="text-white/80 hover:text-white transition-colors">
                    Imprint
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
