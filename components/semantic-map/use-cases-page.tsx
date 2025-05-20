"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Users,
  Lightbulb,
  BarChart3,
  Phone,
  Mail,
  MapPin,
  Layers,
  Sparkles,
  Zap,
  Search,
  BookOpen,
  Headset,
} from "lucide-react"
import Logo from "./logo"
import UseCaseCard from "./use-case-card"
import UseCaseDetail from "./use-case-detail"
import WaveBackground from "./wave-background"
import ContactForm from "./contact-form"

export default function UseCasesPage() {
  const [activeUseCase, setActiveUseCase] = useState<number | null>(null)
  const [showContactForm, setShowContactForm] = useState(false)

  const useCases = [
    {
      id: 1,
      title: "Market Research & Consumer Insights",
      icon: <Users className="w-6 h-6" />,
      color: "from-blue-500/20 to-purple-500/20",
      borderColor: "border-blue-500/30",
      iconBg: "bg-blue-500/20",
      challenge:
        "Understanding true customer needs, perceptions, and market trends from hours of focus group discussions or in-depth interviews is slow and requires significant manual effort. Identifying subtle patterns across demographics is difficult.",
      solution:
        "Automatically transcribe and analyze large volumes of discussion data. Use Deep Analysis to pinpoint key themes, sentiment towards brands/products, and unmet needs. Leverage Concept Analysis to compare perspectives across different consumer segments. Utilize Speaker Identification to track individual contributions accurately, even in large groups.",
      benefits: [
        "Drastically reduce analysis time by 98%",
        "Gain deeper, unbiased understanding of consumer motivations",
        "Identify emerging trends faster",
        "Validate hypotheses with qualitative data",
        "Make data-driven marketing and strategy decisions",
      ],
      features: ["Deep Analysis", "Concept Analysis", "Speaker Identification", "Multi-Interview Analysis"],
      image: "/data-analysis-collaboration.jpg",
    },
    {
      id: 2,
      title: "User Experience (UX) & Product Feedback",
      icon: <Lightbulb className="w-6 h-6" />,
      color: "from-green-500/20 to-teal-500/20",
      borderColor: "border-green-500/30",
      iconBg: "bg-green-500/20",
      challenge:
        "Manually reviewing usability test recordings, user interviews, or feedback sessions to identify pain points, feature requests, and usability issues is tedious and prone to missing crucial details.",
      solution:
        "Get Perfect Transcriptions of user sessions. Automatically identify mentions of specific features, usability problems, or moments of delight/frustration using Deep Analysis. Use Speaker Identification to separate facilitator questions from user responses. Analyze sentiment towards specific product aspects.",
      benefits: [
        "Quickly pinpoint critical usability issues",
        "Understand user journeys and friction points more effectively",
        "Prioritize product development based on direct user feedback",
        "Share clear, data-backed insights with design and development teams",
        "Reduce research costs by 97%",
      ],
      features: ["Perfect Transcription", "Deep Analysis", "Speaker Identification", "Sentiment Analysis"],
      image: "/usability-testing-session.jpg",
    },
    {
      id: 3,
      title: "Product Development & Innovation",
      icon: <Sparkles className="w-6 h-6" />,
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
      iconBg: "bg-purple-500/20",
      challenge:
        "Evaluating consumer reactions to new concepts, packaging designs, or feature ideas requires careful analysis of nuanced feedback, often across multiple rounds of research.",
      solution:
        "Analyze feedback from concept testing sessions or co-creation workshops. Use Deep Analysis to explore reactions to specific elements. Compare reactions between different concepts or prototypes using Multi-Interview Analysis. Use Custom Analysis to ask specific questions about adoption barriers or perceived value.",
      benefits: [
        "Accelerate the innovation cycle",
        "Understand the 'why' behind preferences",
        "Optimize product features, messaging, and packaging based on detailed feedback",
        "Identify key differentiators and value propositions early on",
        "Make better decisions with comprehensive insights",
      ],
      features: ["Deep Analysis", "Multi-Interview Analysis", "Custom Analysis", "Concept Analysis"],
      image: "/collaborative-innovation-hub.jpg",
    },
    {
      id: 4,
      title: "Brand Perception & Competitive Analysis",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-amber-500/20 to-orange-500/20",
      borderColor: "border-amber-500/30",
      iconBg: "bg-amber-500/20",
      challenge:
        "Understanding how your brand is perceived compared to competitors, tracking shifts in brand sentiment, and identifying key brand associations from qualitative discussions requires meticulous coding and analysis.",
      solution:
        "Analyze interviews or focus groups where brand perceptions or competitor comparisons are discussed. Use Deep Analysis to track sentiment associated with your brand and competitors. Identify key themes related to brand values, strengths, or weaknesses. Use Concept Analysis to see how different demographics perceive the brand landscape.",
      benefits: [
        "Gain objective insights into brand health",
        "Understand your competitive positioning from the customer's perspective",
        "Identify opportunities to strengthen brand messaging",
        "Inform strategic planning with rich qualitative context",
        "Track brand perception changes over time",
      ],
      features: ["Deep Analysis", "Concept Analysis", "Sentiment Analysis", "Multi-Interview Analysis"],
      image: "/strategic-marketing-insights.jpg",
    },
    {
      id: 5,
      title: "Academic Research & Qualitative Studies",
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-blue-600/20 to-cyan-500/20",
      borderColor: "border-blue-600/30",
      iconBg: "bg-blue-600/20",
      challenge:
        "Academic researchers often work with extensive qualitative datasets from interviews, ethnographic studies, focus groups, or archival texts. The manual process of transcribing, coding, and identifying themes is incredibly time-consuming and can be a bottleneck in research timelines (dissertations, publications, grant reporting). Ensuring analytical rigor and systematically exploring complex phenomena across large datasets presents a significant challenge.",
      solution:
        "Accelerate the research lifecycle with Perfect Transcription for accurate data capture. Utilize Deep Analysis to rapidly identify recurring themes, concepts, and sentiments, complementing traditional coding methods and potentially revealing overlooked patterns. Employ Speaker Identification to accurately analyze contributions in group settings or differentiate between interviewer/participant. Leverage Concept Analysis and Multi-Interview Analysis to systematically compare findings across different participant groups, theoretical lenses, or longitudinal data points. Use Custom Analysis to explore specific research questions and hypotheses within the qualitative data.",
      benefits: [
        "Significantly reduce the time spent on transcription and initial thematic analysis",
        "Enhance the rigor and transparency of qualitative analysis through systematic AI-driven insights",
        "Facilitate the management and exploration of large, complex datasets",
        "Uncover nuanced findings and complex interrelationships within the data more efficiently",
        "Accelerate progress towards publications, thesis completion, and grant milestones",
      ],
      features: [
        "Perfect Transcription",
        "Deep Analysis",
        "Multi-Interview Analysis",
        "Custom Analysis",
        "Concept Analysis",
      ],
      image: "/academic-research.jpg",
    },
    {
      id: 6,
      title: "Sales Call Analysis & Customer Success Insights",
      icon: <Headset className="w-6 h-6" />,
      color: "from-emerald-500/20 to-green-600/20",
      borderColor: "border-emerald-500/30",
      iconBg: "bg-emerald-500/20",
      challenge:
        "Sales teams and customer success managers have countless conversations with prospects and customers. Manually reviewing call recordings to identify successful strategies, understand customer objections, monitor rep performance, pinpoint churn risks, or extract key insights for product improvement is impractical at scale. Valuable information often remains locked within individual calls.",
      solution:
        "Automatically transcribe sales calls, discovery sessions, demo recordings, and customer check-in calls using Perfect Transcription. Apply Deep Analysis to identify patterns in successful deals vs. lost opportunities – what topics were discussed? What questions were asked? What objections were raised and how were they handled? Track mentions of competitors, feature requests, budget constraints, or specific pain points. Use Speaker Identification to analyze talk ratios and interaction dynamics. Leverage Concept Analysis to understand how different customer segments discuss value or ROI. Utilize Multi-Interview Analysis to compare approaches across different sales reps or success managers.",
      benefits: [
        "Identify winning sales tactics and objection-handling techniques to replicate across the team",
        "Improve sales coaching and onboarding by providing data-backed examples of effective communication",
        "Gain faster insights into common customer pain points and needs to inform product development",
        "Proactively identify customers at risk of churn based on conversational cues or expressed concerns",
        "Enhance customer success strategies by understanding what truly drives value for different client segments",
        "Shorten sales cycles and improve win rates through optimized strategies",
      ],
      features: [
        "Perfect Transcription",
        "Deep Analysis",
        "Speaker Identification",
        "Concept Analysis",
        "Multi-Interview Analysis",
      ],
      image: "/sales-call-analysis.jpg",
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
          <Link href="/use-cases" className="text-white hover:text-white transition-colors font-medium">
            Use Cases
          </Link>
          <Link href="/pricing" className="text-white/80 hover:text-white transition-colors">
            Pricing
          </Link>
          <Link
            href="/contact"
            className="text-white/80 hover:text-white transition-colors"
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
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            From Raw Conversations to Actionable Strategy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 mb-10 max-w-3xl mx-auto"
          >
            Skip the manual review. Get immediate conversation insights from your interviews that drive smarter, faster
            decisions.
          </motion.p>
        </div>

        {/* Use Cases Grid */}
        <div className="container mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((useCase) => (
              <UseCaseCard
                key={useCase.id}
                useCase={useCase}
                isActive={activeUseCase === useCase.id}
                onClick={() => setActiveUseCase(useCase.id === activeUseCase ? null : useCase.id)}
              />
            ))}
          </div>
        </div>

        {/* Active Use Case Detail */}
        {activeUseCase !== null && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto mb-20"
          >
            <UseCaseDetail useCase={useCases.find((uc) => uc.id === activeUseCase)!} />
          </motion.div>
        )}

        {/* Cross-Cutting Features */}
        <div className="container mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Core AI Features</h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Our powerful AI features work seamlessly across all use cases, providing consistent value regardless of
              your specific research needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                <Layers className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Multi-Interview Analysis</h3>
              <p className="text-white/70">
                Compare insights across multiple studies, sessions, or participant groups to identify broader patterns
                and trends that might be missed when analyzing interviews in isolation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Custom Analysis</h3>
              <p className="text-white/70">
                Ask specific research questions and get AI-powered insights tailored to your unique needs. Explore
                specific themes, test hypotheses, or investigate emerging patterns with precision.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Perfect Transcription</h3>
              <p className="text-white/70">
                Our AI delivers highly accurate transcriptions in any language, even with challenging audio, ensuring
                your analysis is built on a solid foundation of reliable data.
              </p>
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Research?</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Join the AI revolution and unlock unprecedented insights that drive smarter, faster decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-6 text-lg font-medium"
              >
                Go To App
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setShowContactForm(true)}
                className="border-white/20 bg-transparent hover:bg-white/10 text-white rounded-full px-8 py-6 text-lg font-medium"
              >
                Request a Demo
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Contact Form Modal */}
        {showContactForm && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
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
