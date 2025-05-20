"use client"

import { motion } from "framer-motion"

export default function GradientCardsV2() {
  return (
    <div className="w-full bg-black py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Time Savings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="group relative h-[320px] overflow-hidden rounded-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-50 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <div className="absolute inset-0 border border-white/10 rounded-2xl group-hover:border-white/20 transition-colors duration-700"></div>

            <div className="absolute inset-0 flex flex-col justify-between p-8">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-blue-400 text-sm font-light mb-2"
                >
                  Time Efficiency
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-3xl font-light text-white mb-4"
                >
                  98% Time Savings
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-white/60 text-sm max-w-xs"
                >
                  Eliminate manual transcription and analysis. What used to take weeks now takes minutes.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center"
              >
                <div className="h-px w-8 bg-blue-400/40 mr-4"></div>
                <span className="text-blue-400 text-sm">8x faster insights</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Cost Reduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="group relative h-[320px] overflow-hidden rounded-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-teal-500/20 opacity-50 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <div className="absolute inset-0 border border-white/10 rounded-2xl group-hover:border-white/20 transition-colors duration-700"></div>

            <div className="absolute inset-0 flex flex-col justify-between p-8">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-green-400 text-sm font-light mb-2"
                >
                  Cost Efficiency
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-3xl font-light text-white mb-4"
                >
                  Reduce Costs by 97%
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="text-white/60 text-sm max-w-xs"
                >
                  Lower your research costs dramatically by automating expensive manual processes.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true }}
                className="flex items-center"
              >
                <div className="h-px w-8 bg-green-400/40 mr-4"></div>
                <span className="text-green-400 text-sm">Higher ROI on research</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Better Decisions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="group relative h-[320px] overflow-hidden rounded-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-50 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <div className="absolute inset-0 border border-white/10 rounded-2xl group-hover:border-white/20 transition-colors duration-700"></div>

            <div className="absolute inset-0 flex flex-col justify-between p-8">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-purple-400 text-sm font-light mb-2"
                >
                  Strategic Value
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="text-3xl font-light text-white mb-4"
                >
                  Make Better Decisions
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="text-white/60 text-sm max-w-xs"
                >
                  Uncover hidden patterns and insights across multiple interviews. Discover demographic trends that
                  transform your research into actionable strategy.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="flex items-center"
              >
                <div className="h-px w-8 bg-purple-400/40 mr-4"></div>
                <span className="text-purple-400 text-sm">Data-driven strategy</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
