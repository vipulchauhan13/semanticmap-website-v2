"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"
import { toast } from "@/hooks/use-toast"

interface ContactFormProps {
  onClose?: () => void
}

export default function ContactForm({ onClose }: ContactFormProps) {
  const { t, language } = useLanguage()
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Make the actual API call to send the email
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState), // Use formState from the current component
      });

      if (!response.ok) {
        // Handle non-OK responses (e.g., server errors)
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to send email');
      }

      // Handle success
      toast({
        title: t("Submission Successful"), // Use a generic success title or a specific one
        description: t("Thank you for contacting us! We will get back to you shortly."), // Use a generic success description
      });

      // Reset the form
      setFormState({ name: '', email: '', company: '', message: '' });

      // Optionally call onClose if provided (for modal use cases)
      if (onClose) {
        onClose();
      }

    } catch (error: any) {
      // Handle errors (network issues, server errors, etc.)
      console.error("Error submitting form:", error);
      toast({
        title: t("Submission Failed"), // Use a generic error title
        description: t(error.message || "There was an error submitting your request. Please try again later."), // Display error message or a default
        variant: "destructive", // Assuming you have a 'destructive' variant for errors
      });
    } finally {
      // Ensure isSubmitting is set to false regardless of success or failure
      setIsSubmitting(false);
    }
  }

  return (
    <div className="w-full">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl md:text-3xl font-bold mb-2 text-center"
      >
        {t("Ready to Transform Your Research?")}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-white/80 text-center mb-6"
      >
        {language === "de"
          ? "Werden Sie Teil der KI-Revolution und gewinnen Sie einzigartige Einblicke."
          : "Join the AI revolution and unlock unprecedented insights."}
      </motion.p>

      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <div>
          <label htmlFor="name" className="block text-white/80 mb-2">
            {t("Name")}
          </label>
          <Input
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            required
            className="bg-white/5 border-white/20 text-white"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-white/80 mb-2">
            {t("Email")}
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
            required
            className="bg-white/5 border-white/20 text-white"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-white/80 mb-2">
            {t("Company")}
          </label>
          <Input
            id="company"
            name="company"
            value={formState.company}
            onChange={handleChange}
            className="bg-white/5 border-white/20 text-white"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-white/80 mb-2">
            {t("Message")}
          </label>
          <Textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            rows={4}
            className="bg-white/5 border-white/20 text-white resize-none"
          />
        </div>

        <div className="text-sm text-white/60">
          {language === "de"
            ? "Durch die Übermittlung Ihrer Daten an unsere Website stimmen Sie den Bedingungen in unserer"
            : "By submitting your information to our website you agree to the terms outlined in our"}{" "}
          <Link href="/privacy" className="text-blue-400 hover:underline">
            {t("Privacy Policy")}
          </Link>
          {language === "de" ? "." : "."}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-white text-black hover:bg-white/90 rounded-full py-6 mt-4"
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin mr-2"></div>
              <span>{t("Submitting...")}</span>
            </div>
          ) : (
            t("Request a Demo")
          )}
        </Button>
      </motion.form>
    </div>
  )
}
