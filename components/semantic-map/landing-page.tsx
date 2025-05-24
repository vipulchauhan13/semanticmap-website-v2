"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronRight, FileText, RefreshCw, Lightbulb, ArrowLeft, Phone, Mail, MapPin } from "lucide-react"
import GradientCardsV2 from "./gradient-cards"
// Import the new component at the top of the file
import AudioTranscriptPlayer from "./audio-transcript-player"
// Replace the MinimalBackground import with WaveBackground
import WaveBackground from "./wave-background"
import ContactForm from "@/components/contact-form"
import { useLanguage } from "@/contexts/language-context"
import LanguageSwitcher from "@/components/language-switcher"

function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <div className={`flex items-center ${dark ? "text-black" : "text-white"}`}>
      <svg
        width="140"
        height="44"
        viewBox="0 0 1440 451"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        <g transform="translate(0.000000,451.000000) scale(0.100000,-0.100000)" fill="currentColor" stroke="none">
          <path d="M4700 4314 c-175 -32 -254 -61 -335 -124 -105 -81 -170 -204 -181 -344 -17 -205 86 -382 281 -482 95 -49 148 -67 400 -134 211 -56 286 -87 303 -125 32 -70 -2 -144 -83 -185 -45 -22 -62 -25 -165 -25 -212 0 -317 64 -348 212 l-8 38 -207 3 -207 2 0 -43 c0 -64 35 -190 72 -260 67 -125 208 -225 375 -264 110 -26 456 -26 558 0 119 30 211 81 291 161 111 112 150 214 142 380 -10 241 -160 370 -558 481 -362 101 -387 112 -416 168 -41 79 12 174 115 204 76 22 221 14 277 -15 69 -35 124 -115 124 -179 0 -10 48 -13 205 -13 l205 0 0 43 c0 214 -177 412 -427 478 -58 15 -117 22 -233 24 -85 2 -166 2 -180 -1z" />
          <path d="M12420 4120 l0 -160 200 0 200 0 0 160 0 160 -200 0 -200 0 0 -160z" />
          <path d="M11750 4010 l0 -160 -85 0 -85 0 0 -135 0 -135 85 0 85 0 0 -388 c0 -428 3 -459 60 -520 65 -72 215 -110 387 -98 51 4 106 9 123 12 l30 7 0 133 0 134 -68 0 c-80 0 -107 15 -122 68 -6 22 -10 164 -10 345 l0 307 100 0 100 0 0 135 0 135 -100 0 -100 0 0 160 0 160 -200 0 -200 0 0 -160z" />
          <path d="M303 4011 c-22 -16 -45 -42 -52 -58 -9 -21 -11 -283 -9 -1088 4 -1176 -1 -1101 71 -1245 44 -90 179 -225 267 -269 138 -67 102 -64 898 -70 l723 -6 28 -71 c76 -194 248 -347 447 -398 80 -21 238 -21 318 0 116 29 203 81 296 174 94 93 144 180 175 300 25 97 17 282 -17 372 -36 97 -84 172 -153 243 -73 74 -153 124 -260 161 -70 25 -95 28 -200 28 -108 0 -128 -3 -206 -30 -193 -69 -350 -223 -406 -402 l-17 -53 -696 3 c-781 4 -745 1 -835 80 -62 54 -91 109 -104 195 -7 44 -11 255 -11 547 l0 476 823 0 822 0 23 -63 c68 -189 248 -350 450 -402 91 -23 238 -21 332 5 218 61 398 246 455 470 25 97 17 282 -17 372 -62 166 -172 289 -322 364 -200 98 -383 98 -582 -1 -148 -73 -275 -216 -321 -362 l-17 -53 -822 0 -823 0 -3 354 c-3 342 -4 356 -24 383 -58 79 -157 98 -231 44z m2635 -636 c78 -23 144 -82 184 -162 29 -60 33 -77 33 -148 0 -60 -6 -92 -22 -127 -30 -66 -96 -133 -162 -165 -47 -24 -69 -28 -136 -28 -97 0 -151 22 -224 90 -69 64 -95 128 -96 230 0 71 4 88 33 147 71 145 228 211 390 163z m12 -1634 c78 -30 134 -81 172 -159 29 -59 33 -76 33 -147 0 -60 -6 -92 -22 -127 -30 -66 -96 -133 -162 -165 -47 -23 -69 -28 -136 -28 -67 0 -89 5 -136 28 -66 32 -132 99 -162 165 -16 35 -22 67 -22 127 0 71 4 88 33 147 37 76 93 129 169 158 65 26 168 26 233 1z" />
          <path d="M13405 3875 c-252 -56 -411 -208 -472 -450 -27 -109 -24 -334 6 -445 54 -201 164 -318 362 -385 110 -37 307 -47 409 -21 222 56 382 233 413 459 l6 37 -203 0 -203 0 -13 -44 c-27 -97 -74 -136 -163 -136 -56 0 -126 36 -155 79 -71 108 -72 353 -2 492 25 47 68 76 128 85 86 13 157 -30 185 -111 l14 -40 206 -3 207 -2 -6 32 c-22 134 -63 217 -150 305 -133 132 -366 193 -569 148z" />
          <path d="M6120 3864 c-30 -8 -92 -32 -137 -54 -212 -104 -333 -326 -333 -610 0 -132 22 -237 70 -335 65 -134 165 -220 317 -271 66 -23 99 -28 224 -32 125 -4 157 -1 228 17 159 40 263 107 332 214 38 -58 82 174 72 190 -2 4 -89 7 -193 7 l-189 0 -15 -29 c-22 -42 -81 -89 -128 -102 -58 -15 -139 -6 -190 23 -50 27 -97 109 -105 182 l-6 46 428 0 428 0 -7 98 c-22 323 -125 509 -336 610 -47 22 -109 45 -138 51 -74 15 -256 13 -322 -5z m265 -293 c70 -32 113 -93 129 -183 l7 -38 -236 0 -237 0 7 33 c10 48 43 119 68 146 55 59 181 80 262 42z" />
          <path d="M7650 3865 c-30 -9 -73 -27 -96 -40 -41 -24 -134 -119 -134 -136 0 -5 -4 -9 -10 -9 -6 0 -10 35 -10 85 l0 85 -197 -2 -198 -3 0 -625 0 -625 197 -3 197 -2 3 392 3 393 28 57 c33 67 77 99 146 106 62 6 115 -17 138 -60 16 -30 18 -72 23 -458 l5 -425 200 0 200 0 5 405 c5 397 5 406 28 447 33 62 87 95 157 95 67 1 100 -19 130 -78 19 -37 20 -62 23 -456 l3 -418 200 0 199 0 0 473 c0 395 -3 483 -16 532 -41 159 -150 254 -321 278 -151 22 -285 -23 -383 -130 l-57 -62 -14 25 c-24 46 -125 131 -176 149 -68 24 -205 29 -273 -10z" />
          <path d="M9445 3870 c-157 -25 -286 -99 -351 -202 -24 -38 -57 -128 -67 -185 l-6 -33 188 0 189 0 23 47 c33 66 66 86 144 91 90 6 129 -4 170 -42 29 -27 35 -41 35 -73 0 -68 -21 -79 -235 -118 -263 -48 -366 -85 -443 -159 -79 -75 -120 -194 -110 -319 19 -231 248 -362 531 -302 82 17 146 51 211 110 27 25 50 44 52 42 2 -2 10 -32 17 -68 l13 -64 209 0 c204 0 210 1 213 21 2 13 -5 25 -21 33 -13 7 -32 27 -43 44 -18 30 -19 61 -24 472 l-5 440 -26 55 c-68 144 -205 208 -469 215 -74 2 -162 0 -195 -5z m325 -772 c0 -87 -11 -133 -44 -177 -54 -73 -142 -107 -233 -90 -70 13 -105 52 -111 121 -4 47 -1 58 22 85 14 17 40 36 57 44 28 11 280 85 302 88 4 1 7 -32 7 -71z" />
          <path d="M10963 3865 c-82 -22 -132 -53 -200 -120 l-62 -62 -3 81 -3 81 -200 0 -200 0 0 -625 0 -625 200 0 200 0 5 385 c5 379 5 386 28 432 78 156 268 182 346 48 20 -33 21 -54 26 -450 l5 -415 198 -3 198 -2 -3 497 -3 498 -24 60 c-70 173 -304 275 -508 220z" />
          <path d="M12422 3223 l3 -628 198 -3 197 -2 0 630 0 630 -200 0 -200 0 2 -627z" />
          <path d="M4187 1458 l3 -843 200 0 201 0 -1 615 c0 338 3 610 8 605 5 -6 41 -147 81 -315 40 -168 106 -440 146 -605 l73 -300 198 0 199 0 155 620 155 620 3 -623 2 -622 198 2 197 3 3 843 2 842 -304 0 c-281 0 -305 -1 -310 -17 -11 -36 -267 -1080 -278 -1130 -6 -29 -14 -53 -17 -53 -3 0 -53 195 -110 433 -57 237 -121 507 -144 600 l-40 167 -311 0 -311 0 2 -842z" />
          <path d="M6555 1890 c-81 -13 -173 -45 -226 -79 -55 -35 -121 -106 -148 -160 -18 -33 -50 -146 -51 -173 0 -5 84 -8 188 -8 l187 0 23 49 c29 65 80 91 176 91 80 0 138 -25 161 -70 36 -69 4 -121 -86 -138 -365 -71 -437 -91 -527 -142 -108 -63 -168 -193 -160 -348 5 -105 33 -166 102 -230 98 -90 259 -123 427 -88 86 19 134 43 202 106 30 27 57 50 60 50 2 0 8 -21 12 -47 4 -25 11 -57 16 -70 l9 -23 205 0 205 0 0 25 c0 14 -8 29 -21 35 -11 7 -29 30 -40 53 -17 39 -19 71 -19 433 0 400 -6 477 -40 544 -41 80 -140 146 -261 175 -78 19 -312 27 -394 15z m323 -787 c-5 -97 -25 -148 -75 -194 -48 -45 -91 -61 -160 -61 -107 1 -153 44 -153 143 0 43 4 55 29 78 17 16 54 35 83 44 127 39 254 75 267 76 11 1 13 -16 9 -86z" />
          <path d="M8055 1886 c-72 -17 -149 -62 -201 -118 -24 -26 -47 -48 -50 -48 -3 0 -4 33 -3 73 l2 72 -199 0 -199 0 0 -865 0 -865 198 0 198 0 -1 308 c0 169 2 307 6 307 3 0 33 -25 66 -55 75 -68 128 -94 218 -108 189 -29 383 65 486 234 135 222 135 593 1 829 -107 188 -321 285 -522 236z m46 -327 c48 -16 104 -73 131 -133 20 -45 23 -67 23 -181 0 -115 -3 -136 -24 -182 -91 -203 -344 -181 -407 34 -18 62 -20 222 -4 284 39 146 155 220 281 178z" />
        </g>
      </svg>
    </div>
  )
}

function HeartIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" fill="none" />
      <path d="M12 6v6l4 2" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  )
}

function ShareIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="5" r="3" stroke="white" strokeWidth="2" fill="none" />
      <circle cx="6" cy="12" r="3" stroke="white" strokeWidth="2" fill="none" />
      <circle cx="18" cy="19" r="3" stroke="white" strokeWidth="2" fill="none" />
      <path d="M9 10.5L15 6.5" stroke="white" strokeWidth="2" fill="none" />
      <path d="M9 13.5L15 17.5" stroke="white" strokeWidth="2" fill="none" />
    </svg>
  )
}

function PlusIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 5v14M5 12h14" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  )
}

function TypewriterEffect({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayText, setDisplayText] = React.useState("")
  const [currentIndex, setCurrentIndex] = React.useState(0)

  React.useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 30) // Speed of typing

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text])

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentIndex(0)
      setDisplayText("")
    }, delay * 1000)

    return () => clearTimeout(timeout)
  }, [delay])

  return (
    <span>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

function TypingAnimation({ phrases }: { phrases: string[] }) {
  const [displayText, setDisplayText] = React.useState("")
  const [currentPhraseIndex, setCurrentPhraseIndex] = React.useState(0)
  const [isDeleting, setIsDeleting] = React.useState(false)
  const [typingSpeed, setTypingSpeed] = React.useState(80)

  React.useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex]

    const timeout = setTimeout(() => {
      // If deleting
      if (isDeleting) {
        setDisplayText(currentPhrase.substring(0, displayText.length - 1))
        setTypingSpeed(30) // Faster when deleting

        // If deleted everything
        if (displayText.length === 0) {
          setIsDeleting(false)
          setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length)
          setTypingSpeed(80) // Normal speed for typing
        }
      }
      // If typing
      else {
        setDisplayText(currentPhrase.substring(0, displayText.length + 1))

        // Random typing speed variation for natural effect
        setTypingSpeed(80 + Math.random() * 40)

        // If typed everything
        if (displayText.length === currentPhrase.length) {
          // Pause at the end of phrase
          setTypingSpeed(2000)
          setIsDeleting(true)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayText, currentPhraseIndex, isDeleting, phrases, typingSpeed])

  return (
    <div className="relative">
      <input
        type="text"
        className="w-full bg-white/5 border border-white/20 rounded-md py-3 px-4 text-white/90 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 pr-8"
        value={displayText}
        readOnly
      />
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
        <span className="inline-block w-1 h-5 bg-blue-500/70 animate-pulse"></span>
      </div>
    </div>
  )
}

function CustomAnalysisPanel() {
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [analysisType, setAnalysisType] = useState("concise")
  const { t } = useLanguage()

  const handleAnalyze = () => {
    console.log("Analyze button clicked")
    if (isAnalyzing) return // Prevent multiple clicks
    setIsAnalyzing(true)

    // Simulate analysis time
    setTimeout(() => {
      setIsAnalyzing(false)
      setShowResults(true)
    }, 2000)
  }

  const handleBack = () => {
    setShowResults(false)
  }

  return (
    <div className="relative h-[650px] overflow-hidden">
      <AnimatePresence>
        {!showResults && (
          <motion.div
            key="settings"
            initial={{ x: 0 }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute inset-0"
          >
            {/* Analysis Settings Panel */}
            <div className="p-6 bg-white/5 rounded-lg border border-white/10 shadow-lg backdrop-blur-sm h-full">
              <div className="flex items-center justify-between mb-5">
                <h4 className="text-xl font-medium text-white">{t("Analysis Settings")}</h4>
                <motion.button
                  className="w-8 h-8 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors"
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.5 }}
                >
                  <RefreshCw className="h-4 w-4 text-white/70" />
                </motion.button>
              </div>

              <div className="mb-5">
                <label className="block text-sm text-white/70 mb-2">
                  {t("What would you like to deep dive into?")}
                </label>
                <div className="relative">
                  <TypingAnimation
                    phrases={[
                      t("Comparison of consumer perceptions of sustainability in premium vs. regular cosmetics"),
                      t("Analysis of packaging preferences across different age demographics"),
                      t("Examination of perceived barriers to adopting more sustainable cosmetic products"),
                      t("Correlation between price sensitivity and environmental consciousness"),
                      t(
                        "Multi-dimensional analysis of product efficacy, sustainability, and price in consumer decision-making",
                      ),
                    ]}
                  />
                </div>
              </div>

              <div className="mb-5">
                <div className="text-sm text-white/70 mb-2">{t("Suggested Topics")}</div>
                <div className="space-y-3">
                  <motion.div
                    className="p-3 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-white/10 rounded-md text-sm text-white/90 shadow-sm"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {t("Comparison of consumer perceptions of sustainability in premium vs. regular cosmetics")}
                  </motion.div>
                  <motion.div
                    className="p-3 bg-white/5 border border-white/10 rounded-md text-sm text-white/80 hover:bg-white/10 transition-colors cursor-pointer shadow-sm"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {t("Examination of perceived barriers to adopting more sustainable cosmetic products")}
                  </motion.div>
                  <motion.div
                    className="p-3 bg-white/5 border border-white/10 rounded-md text-sm text-white/80 hover:bg-white/10 transition-colors cursor-pointer shadow-sm"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {t(
                      "Multi-dimensional analysis of the interplay between product efficacy, sustainability, packaging aesthetics, and price in consumer decision-making for luxury cosmetics",
                    )}
                  </motion.div>
                </div>
              </div>

              <div className="mb-6">
                <div className="text-sm text-white/70 mb-2">{t("Analysis Type")}</div>
                <div className="flex items-center space-x-6">
                  <label className="flex items-center cursor-pointer">
                    <div className="relative">
                      <input
                        type="radio"
                        name="analysis-type"
                        className="sr-only"
                        checked={analysisType === "concise"}
                        onChange={() => setAnalysisType("concise")}
                      />
                      <div className="w-5 h-5 rounded-full border border-white/30 flex items-center justify-center">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: analysisType === "concise" ? 1 : 0 }}
                          className="w-3 h-3 rounded-full bg-blue-500"
                        ></motion.div>
                      </div>
                    </div>
                    <span className="ml-2 text-sm text-white/90">{t("Concise")}</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <div className="relative">
                      <input
                        type="radio"
                        name="analysis-type"
                        className="sr-only"
                        checked={analysisType === "comprehensive"}
                        onChange={() => setAnalysisType("comprehensive")}
                      />
                      <div className="w-5 h-5 rounded-full border border-white/30 flex items-center justify-center">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: analysisType === "comprehensive" ? 1 : 0 }}
                          className="w-3 h-3 rounded-full bg-blue-500"
                        ></motion.div>
                      </div>
                    </div>
                    <span className="ml-2 text-sm text-white/90">{t("Comprehensive")}</span>
                  </label>
                </div>
              </div>

              <motion.button
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 rounded-md font-medium transition-colors shadow-lg relative overflow-hidden mt-auto"
                whileHover={{ y: -2, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" }}
                whileTap={{ y: 0, boxShadow: "0 5px 15px -5px rgba(59, 130, 246, 0.3)" }}
                onClick={handleAnalyze}
                disabled={isAnalyzing}
              >
                {isAnalyzing ? (
                  <>
                    <span className="opacity-0">{t("Analyze")}</span>
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <motion.div
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      />
                      <span className="ml-2">{t("Analyzing...")}</span>
                    </motion.div>
                  </>
                ) : (
                  t("Analyze")
                )}
              </motion.button>
            </div>
          </motion.div>
        )}

        {showResults && (
          <motion.div
            key="results"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute inset-0"
          >
            {/* Analysis Results Panel */}
            <div className="p-6 bg-white/5 rounded-lg border border-white/10 shadow-lg backdrop-blur-sm h-full overflow-y-auto">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center">
                  <motion.button
                    className="w-8 h-8 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors mr-3"
                    onClick={handleBack}
                    whileHover={{ x: -2 }}
                  >
                    <ArrowLeft className="h-4 w-4 text-white/70" />
                  </motion.button>
                  <h4 className="text-xl font-medium text-white">{t("Analysis Results")}</h4>
                </div>
                <motion.button className="w-8 h-8 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors">
                  <Lightbulb className="h-4 w-4 text-white/70" />
                </motion.button>
              </div>

              <div className="text-sm text-white/70 mb-3">
                {t(
                  "Analysis results for: Comparison of consumer perceptions of sustainability in premium vs. regular cosmetics",
                )}
              </div>

              <motion.div
                className="mb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <p className="text-sm text-white/90 mb-3">
                  {t(
                    "Here's a concise analysis comparing consumer perceptions of sustainability in premium vs. regular cosmetics:",
                  )}
                </p>

                <motion.div
                  className="mb-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <h5 className="text-white/90 font-medium mb-1">
                    {t("Limited awareness of sustainability in premium cosmetics:")}
                  </h5>
                  <ul className="list-disc pl-5 text-sm text-white/80 space-y-1">
                    <motion.li
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      {t(
                        "Participants generally didn't perceive premium cosmetics as more sustainable than regular ones.",
                      )}
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                    >
                      {t("There was little mention of sustainability initiatives by premium brands.")}
                    </motion.li>
                  </ul>
                </motion.div>

                <motion.div
                  className="mb-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <h5 className="text-white/90 font-medium mb-1">{t("Packaging expectations:")}</h5>
                  <ul className="list-disc pl-5 text-sm text-white/80 space-y-1">
                    <motion.li
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                    >
                      {t(
                        "Premium cosmetics were associated with more luxurious, often less sustainable packaging (e.g., heavy glass containers).",
                      )}
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7, duration: 0.5 }}
                    >
                      {t(
                        "Participants noted a slight trend towards reducing excess packaging in premium products, but didn't see it as a major focus.",
                      )}
                    </motion.li>
                  </ul>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <h5 className="text-white/90 font-medium mb-2">{t("Key Factors in Product Selection:")}</h5>
                <p className="text-sm text-white/80 mb-2">
                  {t(
                    "The following table summarizes the key factors that influence consumer decisions when choosing between premium and regular cosmetic products:",
                  )}
                </p>

                <div className="overflow-x-auto">
                  <motion.table
                    className="w-full text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                  >
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-2 text-white/70 font-medium">{t("Factor")}</th>
                        <th className="text-left py-2 text-white/70 font-medium">{t("Importance")}</th>
                        <th className="text-left py-2 text-white/70 font-medium">{t("Consumer Preference")}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <motion.tr
                        className="border-b border-white/5"
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.0, duration: 0.5 }}
                      >
                        <td className="py-2 text-white/80">{t("Ingredients")}</td>
                        <td className="py-2 text-white/80">{t("High")}</td>
                        <td className="py-2 text-white/80">{t("Natural, vegan, no animal testing")}</td>
                      </motion.tr>
                      <motion.tr
                        className="border-b border-white/5"
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.1, duration: 0.5 }}
                      >
                        <td className="py-2 text-white/80">{t("Price-Performance")}</td>
                        <td className="py-2 text-white/80">{t("Medium")}</td>
                        <td className="py-2 text-white/80">{t("Value for money")}</td>
                      </motion.tr>
                      <motion.tr
                        className="border-b border-white/5"
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.2, duration: 0.5 }}
                      >
                        <td className="py-2 text-white/80">{t("Brand Reputation")}</td>
                        <td className="py-2 text-white/80">{t("Medium")}</td>
                        <td className="py-2 text-white/80">{t("Trusted brands preferred")}</td>
                      </motion.tr>
                      <motion.tr
                        className="border-b border-white/5"
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.3, duration: 0.5 }}
                      >
                        <td className="py-2 text-white/80">{t("Environmental Impact")}</td>
                        <td className="py-2 text-white/80">{t("Increasing")}</td>
                        <td className="py-2 text-white/80">{t("Sustainable products gaining popularity")}</td>
                      </motion.tr>
                      <motion.tr
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.4, duration: 0.5 }}
                      >
                        <td className="py-2 text-white/80">{t("Packaging")}</td>
                        <td className="py-2 text-white/80">{t("Low to Medium")}</td>
                        <td className="py-2 text-white/80">{t("Functional, attractive for premium products")}</td>
                      </motion.tr>
                    </tbody>
                  </motion.table>
                </div>
              </motion.div>

              <motion.div
                className="mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.5 }}
              >
                <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Lightbulb className="h-4 w-4 text-amber-400" />
                    <h5 className="text-white/90 font-medium">{t("Key Insight")}</h5>
                  </div>
                  <p className="text-sm text-white/80 italic">
                    {t(
                      "There's a significant opportunity for premium brands to differentiate by emphasizing sustainability, as consumers currently don't associate premium pricing with more sustainable practices.",
                    )}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function SemanticMapLanding() {
  const [showContactForm, setShowContactForm] = useState(false)
  const { t } = useLanguage()
  const { language } = useLanguage()

  return (
    <div className="relative min-h-screen w-full flex flex-col bg-black text-white overflow-hidden">
      {/* Background */}
      {/* Replace the background div in the component with our new WaveBackground */}
      {/* Find this section: */}
      {/* Background */}
      <div className="absolute inset-0">
        <WaveBackground color="rgba(59, 130, 246, 0.1)" speed="medium" />
      </div>

      {/* Navigation */}
      <header className="relative z-10 container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center">
          <Logo />
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="/use-cases" className="text-white/80 hover:text-white transition-colors">
            {t("Use Cases")}
          </Link>
          <Link href="/pricing" className="text-white/80 hover:text-white transition-colors">
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
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight"
          >
            {t("Discover what matters")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 mb-10 max-w-3xl mx-auto"
          >
            {t("Skip the manual review. Get immediate conversation insights that drive smarter, faster decisions.")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-6 text-lg font-medium"
            >
              {t("Go To App")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => setShowContactForm(true)}
              className="border-white/20 bg-transparent hover:bg-white/10 text-white rounded-full px-8 py-6 text-lg font-medium"
            >
              {t("Request a Demo")}
            </Button>
          </motion.div>
        </div>

        {/* Product Video */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 w-full max-w-5xl mx-auto"
        >
          <div
            className="relative rounded-lg overflow-hidden shadow-2xl"
            style={{
              boxShadow: "0 0 15px 2px rgba(255, 255, 255, 0.2), 0 0 30px 5px rgba(255, 255, 255, 0.1)",
              padding: "3px",
              background:
                "linear-gradient(to right, rgba(255,255,255,0.4), rgba(255,255,255,0.2), rgba(255,255,255,0.4))",
            }}
          >
            <div className="bg-black/80 backdrop-blur-sm rounded-lg overflow-hidden">
              <div className="aspect-video w-full">
                {language === "de" ? (
                  <iframe
                    src="https://player.vimeo.com/video/1020467364?h=3cf2305b6f&autoplay=1&loop=1&muted=0&controls=1&#t=23s"
                    className="w-full h-full"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title="SemanticMap Demo (German)"
                    style={{ border: "none" }}
                  ></iframe>
                ) : (
                  <iframe
                    src="https://player.vimeo.com/video/1085953342?h=3cf2305b6f&autoplay=1&loop=1&muted=0&controls=1&start=0"
                    className="w-full h-full"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title="SemanticMap Demo"
                    style={{ border: "none" }}
                  ></iframe>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Benefits Section */}
        <GradientCardsV2 />

        {/* Features Section */}
        <div className="mt-20 mb-20 w-full max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl font-bold text-center mb-24"
          >
            {t("Industry leading powerful AI-Driven features")}
          </motion.h2>

          {/* Feature 1 - Automatic Transcription */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col md:flex-row items-center mb-20 gap-8"
          >
            <div className="w-full md:w-1/2 text-left">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
                {t("Perfect Transcription")}
              </h3>
              <p className="text-lg text-white/80">
                {t(
                  "Convert audio & video to text with very high accuracy in any language, saving time and ensuring precise data capture.",
                )}
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="space-y-4">
                  {/* First message */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">T</span>
                    </div>
                    <div>
                      <div className="text-sm text-white/60 mb-1">00:03 - 00:10 | Thomas</div>
                    <motion.p
                      className="text-white/90"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                    >
                      {language === "de" 
                        ? "Worauf achtest du normalerweise bei der Verpackung von Luxuskosmetik?" 
                        : "What do you usually look for in luxury cosmetics packaging?"}
                    </motion.p>
                  </div>
                </div>

                  {/* Second message */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">S</span>
                    </div>
                    <div>
                      <div className="text-sm text-white/60 mb-1">00:11 - 00:15 | Sarah</div>
                    <motion.p
                      className="text-white/90"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 1 }}
                    >
                      {language === "de"
                        ? "Ehrlich gesagt sollte es gut in meinem Regal aussehen, aber wenn es schwer zu öffnen oder unordentlich ist, kaufe ich es nicht wieder."
                        : "Honestly, it should look nice on my shelf, but if it's hard to open or messy, I won't buy it again."}
                    </motion.p>
                  </div>
                </div>

                  {/* Third message */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">T</span>
                    </div>
                    <div>
                      <div className="text-sm text-white/60 mb-1">00:16 - 00:22 | Thomas</div>
                    <motion.p
                      className="text-white/90"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 2 }}
                    >
                      {language === "de"
                        ? "Würdest du also sagen, dass Funktionalität wichtiger ist als Ästhetik, wenn du einen Kauf tätigst?"
                        : "So would you say functionality outweighs aesthetics when you're making a purchase?"}
                    </motion.p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Audio Player with Synchronized Transcript */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full max-w-4xl mx-auto mb-40"
          >
            <div className="text-center mb-8">
              <h4 className="text-xl font-medium text-white mb-2">{t("Experience Real-Time Transcription")}</h4>
              <p className="text-white/70">
                {t(
                  "Press play to hear the audio and watch as our AI transcribes it with perfect accuracy, even with a challenging audio",
                )}
              </p>
            </div>
            <AudioTranscriptPlayer
              audioSrc="/1987-micro-machines-commercial.mp3"
              transcript="This is the Micro Machine Man presenting the most midget miniature motorcade of Micro Machines. Each one has dramatic details, terrific trim, precision paint jobs, plus incredible Micro Machine Pocket Play Sets. There's a police station, fire station, restaurant, service station, and more. Perfect pocket portables to take any place. And there are many miniature play sets to play with, and each one comes with its own special edition Micro Machine vehicle and fun, fantastic features that miraculously move. Raise the boatlift at the airport marina. Man the gun turret at the army base. Clean your car at the car wash. Raise the toll bridge. And these play sets fit together to form a Micro Machine world. Micro Machine Pocket Play Sets, so tremendously tiny, so perfectly precise, so dazzlingly detailed, you'll want to pocket them all. Micro Machines are Micro Machine Pocket Play Sets sold separately from Galoob. The smaller they are, the better they are."
            />
          </motion.div>

          {/* Feature 2 - Speaker Identification */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col md:flex-row-reverse items-center mb-40 gap-8"
          >
            <div className="w-full md:w-1/2 text-left">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
                {t("Speaker Identification")}
              </h3>
              <p className="text-lg text-white/80">
                {t(
                  "Accurately distinguish between different speakers in conversations for targeted insights, even in big focus groups.",
                )}
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-[110%] -ml-[5%]">
                  {/* Sarah */}
                  <div className="p-8 bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-white/10 shadow-lg backdrop-blur-sm hover:shadow-white/5 transition-all duration-300 hover:translate-y-[-5px]">
                    <div className="flex flex-col items-start gap-5">
                      <div className="flex items-center gap-4 w-full">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-300 to-green-100 flex items-center justify-center flex-shrink-0 shadow-md">
                          <span className="text-green-800 text-lg">{t("👩")}</span>
                        </div>
                        <div>
                          <div className="font-medium text-xl text-white">{t("Sarah")}</div>
                          <div className="text-white/60">{t("Marketing Manager")}</div>
                        </div>
                      </div>

                      <div className="w-full space-y-3">
                        <div className="text-xs text-green-400 flex items-center">
                          <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                          {t("Focus Group: Cosmetic Products and Sustainability")}
                        </div>

                        <div className="flex flex-wrap gap-2">
                          <span className="px-2 py-1 bg-white/10 rounded-full text-xs text-white/80">
                            {t("Age: 35")}
                          </span>
                          <span className="px-2 py-1 bg-white/10 rounded-full text-xs text-white/80">
                            {t("Female")}
                          </span>
                          <span className="px-2 py-1 bg-white/10 rounded-full text-xs text-white/80">
                            {t("Married, 1 kid")}
                          </span>
                        </div>

                        <div className="text-sm text-white/80 mt-2 border-l-2 border-green-400 pl-3">
                          {t(
                            "Values high-quality packaging for premium products and observes trends in the cosmetics industry.",
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Thomas */}
                  <div className="p-8 bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-white/10 shadow-lg backdrop-blur-sm hover:shadow-white/5 transition-all duration-300 hover:translate-y-[-5px]">
                    <div className="flex flex-col items-start gap-5">
                      <div className="flex items-center gap-4 w-full">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-300 to-blue-100 flex items-center justify-center flex-shrink-0 shadow-md">
                          <span className="text-blue-800 text-lg">{t("👨")}</span>
                        </div>
                        <div>
                          <div className="font-medium text-xl text-white">{t("Thomas")}</div>
                          <div className="text-white/60">{t("Environmental Engineer")}</div>
                        </div>
                      </div>

                      <div className="w-full space-y-3">
                        <div className="text-xs text-green-400 flex items-center">
                          <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                          {t("Focus Group: Cosmetic Products and Sustainability")}
                        </div>

                        <div className="flex flex-wrap gap-2">
                          <span className="px-2 py-1 bg-white/10 rounded-full text-xs text-white/80">
                            {t("Age: 28")}
                          </span>
                          <span className="px-2 py-1 bg-white/10 rounded-full text-xs text-white/80">{t("Male")}</span>
                          <span className="px-2 py-1 bg-white/10 rounded-full text-xs text-white/80">
                            {t("Single")}
                          </span>
                        </div>

                        <div className="text-sm text-white/80 mt-2 border-l-2 border-blue-400 pl-3">
                          {t(
                            "Emphasizes the importance of sustainability and environmentally friendly packaging in the cosmetics industry.",
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature 3 - Detailed Analysis */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col md:flex-row items-center mb-40 gap-8"
          >
            <div className="w-full md:w-1/2 text-left">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
                {t("In-depth Analysis")}
              </h3>
              <p className="text-lg text-white/80">
                {t(
                  "Dive deep into specific topics with comprehensive analysis and structured insights from your research data.",
                )}
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="flex">
                  <div className="w-1/3 border-r border-white/10 pr-3">
                    <div className="font-medium text-white/90 mb-4">{t("Deep Analysis")}</div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 rounded hover:bg-white/5 cursor-pointer">
                        <span className="text-white/80">{t("Product Selection")}</span>
                        <ChevronRight className="h-4 w-4 text-white/50" />
                      </div>
                      <div className="flex items-center justify-between p-2 bg-white/10 rounded">
                        <span className="text-white/90 font-medium">{t("Packaging and Functionality")}</span>
                        <ChevronRight className="h-4 w-4 text-white/70" />
                      </div>
                      <div className="flex items-center justify-between p-2 rounded hover:bg-white/5 cursor-pointer">
                        <span className="text-white/80">{t("Sustainability")}</span>
                        <ChevronRight className="h-4 w-4 text-white/50" />
                      </div>
                    </div>
                  </div>
                  <div className="w-2/3 pl-4">
                    <div className="font-medium text-white/90 mb-3">{t("Packaging and Functionality")}</div>
                    <p className="text-sm text-white/80 mb-4">
                      {t(
                        "For luxury cosmetics, there's a balance between aesthetics and functionality in packaging. While high-quality packaging is expected for expensive products, functionality often takes precedence.",
                      )}
                    </p>

                    <div className="font-medium text-white/90 mb-2">{t("Packaging Preferences")}</div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-white/10">
                            <th className="text-left py-2 text-white/70 font-medium">{t("Aspect")}</th>
                            <th className="text-left py-2 text-white/70 font-medium">{t("Importance")}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-white/5">
                            <td className="py-2 text-white/80">{t("Functionality")}</td>
                            <td className="py-2 text-white/80">{t("High")}</td>
                          </tr>
                          <tr className="border-b border-white/5">
                            <td className="py-2 text-white/80">{t("Aesthetics")}</td>
                            <td className="py-2 text-white/80">{t("Medium")}</td>
                          </tr>
                          <tr className="border-b border-white/5">
                            <td className="py-2 text-white/80">{t("Material")}</td>
                            <td className="py-2 text-white/80">{t("Increasing")}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="mt-4 p-3 bg-white/5 rounded border-l-2 border-green-400 italic text-sm text-white/80">
                      {t(
                        '"Bei einem hochwertigen Produkt, ist mir die Verpackung sehr wichtig. Wenn ich ein teures Produkt kaufe, will ich auch eine schöne und hochwertige Verpackung."',
                      )}
                      <div className="text-right text-green-400 text-xs mt-1">{t("T6")}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature 4 - Concept Analysis */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col md:flex-row-reverse items-center mb-40 gap-8"
          >
            <div className="w-full md:w-1/2 text-left">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
                {t("Concept Analysis")}
              </h3>
              <p className="text-lg text-white/80">
                {t(
                  "Easier compare participant perspectives on key concepts across demographics to identify patterns and preferences.",
                )}
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="p-4 bg-white/5 rounded-lg border border-white/10 overflow-x-auto">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-red-200/30 rounded"></div>
                    <span className="text-sm text-white/80">{t("Negative Opinion")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-white/10 rounded"></div>
                    <span className="text-sm text-white/80">{t("Positive Opinion")}</span>
                  </div>
                </div>

                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 text-white/90 font-medium">{t("Concept")}</th>
                      <th className="text-left py-3 text-white/90 font-medium">
                        <div>{t("Sarah")}</div>
                        <div className="text-xs text-white/60">{t("35, Female")}</div>
                      </th>
                      <th className="text-left py-3 text-white/90 font-medium">
                        <div>{t("Thomas")}</div>
                        <div className="text-xs text-white/60">{t("28, Male")}</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/5">
                      <td className="py-3 text-white/80 font-medium">{t("Ingredients")}</td>
                      <td className="py-3 text-white/80">{t("No animal testing")}</td>
                      <td className="py-3 text-white/80 pl-4">{t("Product dependent")}</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 text-white/80 font-medium">{t("Packaging")}</td>
                      <td className="py-3 text-white/80">{t("High-quality for expensive products")}</td>
                      <td className="py-3 text-white/80 pl-4">{t("Less plastic is better")}</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 text-white/80 font-medium">{t("Sustainability")}</td>
                      <td className="py-3 text-white/80">{t("Trend towards more sustainability")}</td>
                      <td className="py-3 text-white/80 pl-4">{t("Good for conscience")}</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 text-white/80 font-medium">{t("Price-Performance")}</td>
                      <td className="py-3 text-white/80">{t("Willing to pay more for quality")}</td>
                      <td className="py-3 text-white/80 bg-white/5 pl-4">{t("Important purchase criterion")}</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-white/80 font-medium">{t("Effectiveness")}</td>
                      <td className="py-3 text-white/80">{t("Expected in premium products")}</td>
                      <td className="py-3 text-white/80 pl-4">{t("Depends on product type")}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* Feature 5 - Multi-Interview Analysis */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col items-center mb-40 gap-8"
          >
            <div className="w-full md:w-1/2 text-left">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
                {t("Multi-Interview Analysis")}
              </h3>
              <p className="text-lg text-white/80">
                {t(
                  "Analyze multiple interviews simultaneously to identify broader patterns and insights across different sessions and participant groups.",
                )}
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="p-6 bg-white/5 rounded-lg border border-white/10">
                <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
                  {/* Animated background */}
                  <div className="absolute inset-0 opacity-10">
                    <svg width="100%" height="100%" viewBox="0 0 100 100">
                      <defs>
                        <radialGradient id="gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                          <stop offset="0%" stopColor="white" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="white" stopOpacity="0" />
                        </radialGradient>
                      </defs>
                      <rect x="0" y="0" width="100" height="100" fill="url(#gradient)">
                        <animate attributeName="opacity" values="0.1;0.3;0.1" dur="8s" repeatCount="indefinite" />
                      </rect>

                      {/* Background grid */}
                      <g stroke="rgba(255,255,255,0.05)">
                        <circle cx="50" cy="50" r="40" fill="none" />
                        <circle cx="50" cy="50" r="30" fill="none" />
                        <circle cx="50" cy="50" r="20" fill="none" />
                        <circle cx="50" cy="50" r="10" fill="none" />
                        <line x1="10" y1="50" x2="90" y2="50" />
                        <line x1="50" y1="10" x2="50" y2="90" />
                      </g>
                    </svg>
                  </div>

                  {/* Central hub with pulsing effect */}
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="absolute z-20 w-36 h-36 rounded-full bg-gradient-to-br from-indigo-500/30 to-purple-500/30 border border-white/20 flex flex-col items-center justify-center shadow-lg"
                  >
                    <motion.div
                      animate={{
                        boxShadow: [
                          "0 0 0 0px rgba(255,255,255,0.1)",
                          "0 0 0 10px rgba(255,255,255,0)",
                          "0 0 0 0px rgba(255,255,255,0)",
                        ],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "loop",
                      }}
                      className="absolute inset-0 rounded-full"
                    />
                    <motion.div
                      animate={{
                        boxShadow: [
                          "0 0 0 0px rgba(255,255,255,0.1)",
                          "0 0 0 20px rgba(255,255,255,0)",
                          "0 0 0 0px rgba(255,255,255,0)",
                        ],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "loop",
                        delay: 0.8,
                      }}
                      className="absolute inset-0 rounded-full"
                    />
                    <div className="text-white font-medium text-lg">{t("Unified")}</div>
                    <div className="text-white font-medium text-lg">{t("Analysis")}</div>
                    <div className="text-white/60 text-sm mt-1">{t("22 participants")}</div>
                  </motion.div>

                  {/* Orbital paths */}
                  <div className="absolute w-full h-full">
                    <svg className="w-full h-full" viewBox="0 0 400 400">
                      {/* Orbital paths */}
                      <ellipse
                        cx="200"
                        cy="200"
                        rx="150"
                        ry="120"
                        fill="none"
                        stroke="rgba(255,255,255,0.05)"
                        strokeWidth="1"
                        transform="rotate(45, 200, 200)"
                      />
                      <ellipse
                        cx="200"
                        cy="200"
                        rx="150"
                        ry="120"
                        fill="none"
                        stroke="rgba(255,255,255,0.05)"
                        strokeWidth="1"
                        transform="rotate(-45, 200, 200)"
                      />

                      {/* Data flow paths */}
                      <path id="flow1" d="M100,100 Q150,150 200,200" fill="none" stroke="none" />
                      <path id="flow2" d="M300,100 Q250,150 200,200" fill="none" stroke="none" />
                      <path id="flow3" d="M100,300 Q150,250 200,200" fill="none" stroke="none" />
                      <path id="flow4" d="M300,300 Q250,250 200,200" fill="none" stroke="none" />

                      {/* Animated data particles */}
                      <circle r="3" fill="rgba(59,130,246,0.8)">
                        <animateMotion dur="3s" repeatCount="indefinite" path="M200,200 Q150,150 100,100">
                          <mpath href="#flow1" />
                        </animateMotion>
                      </circle>
                      <circle r="3" fill="rgba(139,92,246,0.8)">
                        <animateMotion dur="3s" repeatCount="indefinite" path="M200,200 Q250,150 300,100">
                          <mpath href="#flow2" />
                        </animateMotion>
                      </circle>
                      <circle r="3" fill="rgba(34,197,94,0.8)">
                        <animateMotion dur="3s" repeatCount="indefinite" path="M200,200 Q150,250 100,300">
                          <mpath href="#flow3" />
                        </animateMotion>
                      </circle>
                      <circle r="3" fill="rgba(245,158,11,0.8)">
                        <animateMotion dur="3s" repeatCount="indefinite" path="M200,200 Q250,250 300,300">
                          <mpath href="#flow4" />
                        </animateMotion>
                      </circle>

                      {/* Reverse flow particles */}
                      <circle r="2" fill="rgba(59,130,246,0.6)">
                        <animateMotion dur="4s" repeatCount="indefinite" path="M100,100 Q150,150 200,200">
                          <mpath href="#flow1" />
                        </animateMotion>
                      </circle>
                      <circle r="2" fill="rgba(139,92,246,0.6)">
                        <animateMotion dur="4s" repeatCount="indefinite" path="M300,100 Q250,150 200,200">
                          <mpath href="#flow2" />
                        </animateMotion>
                      </circle>
                      <circle r="2" fill="rgba(34,197,94,0.6)">
                        <animateMotion dur="4s" repeatCount="indefinite" path="M100,300 Q150,250 200,200">
                          <mpath href="#flow3" />
                        </animateMotion>
                      </circle>
                      <circle r="2" fill="rgba(245,158,11,0.6)">
                        <animateMotion dur="4s" repeatCount="indefinite" path="M300,300 Q250,250 200,200">
                          <mpath href="#flow4" />
                        </animateMotion>
                      </circle>
                    </svg>
                  </div>

                  {/* Interview nodes with staggered animation */}
                  <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="absolute top-10 left-10 w-28 h-28 rounded-full bg-gradient-to-br from-blue-500/30 to-blue-500/10 border border-blue-500/30 flex flex-col items-center justify-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
                  >
                    <div className="text-blue-400 mb-2">
                      <FileText className="h-6 w-6" />
                    </div>
                    <div className="text-sm text-white/90 text-center font-medium">{t("Focus Group 1")}</div>
                    <div className="text-xs text-white/60">{t("5 participants")}</div>
                  </motion.div>

                  <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="absolute top-10 right-10 w-28 h-28 rounded-full bg-gradient-to-br from-purple-500/30 to-purple-500/10 border border-purple-500/30 flex flex-col items-center justify-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
                  >
                    <div className="text-purple-400 mb-2">
                      <FileText className="h-6 w-6" />
                    </div>
                    <div className="text-sm text-white/90 text-center font-medium">{t("Focus Group 2")}</div>
                    <div className="text-xs text-white/60">{t("6 participants")}</div>
                  </motion.div>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="absolute bottom-10 left-10 w-28 h-28 rounded-full bg-gradient-to-br from-green-500/30 to-green-500/10 border border-green-500/30 flex flex-col items-center justify-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-green-500/20"
                  >
                    <div className="text-green-400 mb-2">
                      <FileText className="h-6 w-6" />
                    </div>
                    <div className="text-sm text-white/90 text-center font-medium">{t("Expert Interviews")}</div>
                    <div className="text-xs text-white/60">{t("3 participants")}</div>
                  </motion.div>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.7 }}
                    className="absolute bottom-10 right-10 w-28 h-28 rounded-full bg-gradient-to-br from-amber-500/30 to-amber-500/10 border border-amber-500/30 flex flex-col items-center justify-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-amber-500/20"
                  >
                    <div className="text-amber-400 mb-2">
                      <FileText className="h-6 w-6" />
                    </div>
                    <div className="text-sm text-white/90 text-center font-medium">{t("User Testing")}</div>
                    <div className="text-xs text-white/60">{t("8 participants")}</div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature 6 - Custom Analysis */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col md:flex-row-reverse items-center mb-40 gap-8"
          >
            <div className="w-full md:w-1/2 text-left">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
                {t("Custom Analysis")}
              </h3>
              <p className="text-lg text-white/80">
                {t(
                  "Define your own research questions and get the most accurate AI-powered insights tailored to your specific needs and interests.",
                )}
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <CustomAnalysisPanel />
            </div>
          </motion.div>

          {/* Feature 7 - Topic Analysis - Moved to bottom */}
          {/* Feature 8 - Opinion Summarization - Moved to bottom */}
          {/* Feature 9 - Mood Analysis - Moved to bottom */}
        </div>

        {/* App Preview section removed */}

        {/* CTA Section */}
        <div className="w-full py-20 mt-8 relative overflow-hidden">
          {/* Background elements - Turned off */}
          <div className="absolute inset-0 opacity-30">
            {/* FloatingPaths turned off 
            <FloatingPaths position={0.5} />
            */}
          </div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black/80 pointer-events-none"></div>

          {/* Animated circles */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />

          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="inline-block mb-6 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm backdrop-blur-sm"
              >
                <span className="inline-block w-2 h-2 rounded-full bg-green-400 mr-2"></span>
                {t("Start your journey today")}
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70"
              >
                {t("Ready to Transform Your Research?")}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-xl text-white/80 mb-12 max-w-2xl mx-auto"
              >
                {t("Join the AI revolution and unlock unprecedented insights that drive smarter, faster decisions.")}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <div
                  className="inline-block group relative bg-gradient-to-b from-white/20 to-white/5 
                            p-px rounded-2xl backdrop-blur-lg 
                            overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <Button
                    size="lg"
                    onClick={() => setShowContactForm(true)}
                    className="rounded-[1.15rem] px-10 py-6 text-lg font-semibold backdrop-blur-md 
                              bg-white hover:bg-white/90 
                              text-black transition-all duration-300 
                              group-hover:-translate-y-0.5 border border-white/10
                              hover:shadow-md"
                  >
                    <span className="opacity-90 group-hover:opacity-100 transition-opacity">{t("Request a Demo")}</span>
                    <span
                      className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 
                                transition-all duration-300"
                    >
                      →
                    </span>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
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

        {/* Footer */}
        <footer className="relative z-10 w-full bg-black border-t border-white/10 mt-20 py-16">
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
      </main>
    </div>
  )\
}
