"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { toast } from "@/hooks/use-toast"
import Link from "next/link"

interface ContactFormProps {
  onClose?: () => void
}

export default function ContactForm({ onClose }: ContactFormProps) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to send message. Please try again later.');
      }

      toast({
        title: 'Success!',
        description: 'Your message has been sent. We will get back to you shortly.',
      });

      setFormState({ name: '', email: '', company: '', message: '' });

      setIsSubmitted(true);

    } catch (error: any) {
      console.error("Error submitting form:", error);
      toast({
        title: 'Submission failed',
        description: error.message || 'Something went wrong. Please try again.',
        variant: "destructive",
      });
      setIsSubmitted(false);
    } finally {
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
        Ready to Transform Your Research?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-white/80 text-center mb-6"
      >
        Join the AI revolution and unlock unprecedented insights.
      </motion.p>

      {!isSubmitted ? (
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <div>
            <label htmlFor="name" className="block text-white/80 mb-2">
              Name
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
              Email
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
              Company
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
              Message
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
            By submitting your information to our website you agree to the terms outlined in our{" "}
            <Link href="/privacy" className="text-blue-400 hover:underline">
              Privacy Policy
            </Link>
            .
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-white text-black hover:bg-white/90 rounded-full py-6 mt-4"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin mr-2"></div>
                <span>Submitting...</span>
              </div>
            ) : (
              "Request a Demo"
            )}
          </Button>
        </motion.form>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-8"
        >
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-green-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
          <p className="text-white/80 mb-6">We've received your request and will get back to you shortly.</p>
          {onClose && (
            <Button
              onClick={onClose}
              variant="outline"
              className="border-white/20 bg-transparent hover:bg-white/10 text-white"
            >
              Close
            </Button>
          )}
        </motion.div>
      )}
    </div>
  )
}
