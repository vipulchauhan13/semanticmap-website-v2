"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface AudioTranscriptPlayerProps {
  audioSrc: string
  transcript: string
}

export default function AudioTranscriptPlayer({ audioSrc, transcript }: AudioTranscriptPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isMuted, setIsMuted] = useState(false)
  const [showTranscript, setShowTranscript] = useState(false)
  const [visibleWords, setVisibleWords] = useState<string[]>([])

  const audioRef = useRef<HTMLAudioElement>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)
  const transcriptRef = useRef<string[]>(transcript.split(/\s+/))

  // Update visible words based on current time
  useEffect(() => {
    if (!showTranscript || duration === 0) return

    // Calculate how many words should be visible based on current time
    const progress = currentTime / duration
    const wordCount = transcriptRef.current.length
    const wordsToShow = Math.floor(progress * wordCount)

    // Update visible words
    setVisibleWords(transcriptRef.current.slice(0, wordsToShow))
  }, [currentTime, duration, showTranscript])

  // Handle audio events
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime)
    }

    const handleLoadedMetadata = () => {
      setDuration(audio.duration)
    }

    const handleEnded = () => {
      setIsPlaying(false)
      // Show all words when audio ends
      setVisibleWords(transcriptRef.current)
    }

    audio.addEventListener("timeupdate", handleTimeUpdate)
    audio.addEventListener("loadedmetadata", handleLoadedMetadata)
    audio.addEventListener("ended", handleEnded)

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate)
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata)
      audio.removeEventListener("ended", handleEnded)
    }
  }, [])

  // Handle play/pause
  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      // Play the audio
      audio
        .play()
        .then(() => {
          setIsPlaying(true)
          setShowTranscript(true)

          // If starting from the beginning, reset visible words
          if (currentTime === 0) {
            setVisibleWords([])
          }
        })
        .catch((error) => {
          console.error("Error playing audio:", error)
        })
    }
  }

  // Handle mute/unmute
  const toggleMute = () => {
    const audio = audioRef.current
    if (!audio) return

    audio.muted = !isMuted
    setIsMuted(!isMuted)
  }

  // Handle progress bar click
  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const progressBar = progressBarRef.current
    if (!progressBar || !audioRef.current) return

    const rect = progressBar.getBoundingClientRect()
    const clickPosition = (e.clientX - rect.left) / rect.width
    const newTime = clickPosition * duration

    audioRef.current.currentTime = newTime
    setCurrentTime(newTime)
  }

  // Format time (seconds to MM:SS)
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  }

  return (
    <div className="w-full bg-white/5 rounded-lg border border-white/10 p-4 backdrop-blur-sm mt-16 mb-16">
      <audio ref={audioRef} src={audioSrc} preload="metadata" />

      {/* Player Controls */}
      <div className="flex items-center gap-4 mb-4">
        <button
          onClick={togglePlay}
          className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? <Pause className="w-5 h-5 text-white" /> : <Play className="w-5 h-5 text-white ml-0.5" />}
        </button>

        <div className="flex-1">
          <div
            ref={progressBarRef}
            className="h-2 bg-white/10 rounded-full cursor-pointer relative"
            onClick={handleProgressBarClick}
          >
            <div
              className="absolute top-0 left-0 h-full bg-white/30 rounded-full"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-white/60 mt-1">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        <button
          onClick={toggleMute}
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <VolumeX className="w-4 h-4 text-white" /> : <Volume2 className="w-4 h-4 text-white" />}
        </button>
      </div>

      {/* Transcript */}
      <AnimatePresence>
        {showTranscript && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-6 overflow-hidden"
          >
            <div className="p-4 bg-white/5 rounded-lg border border-white/10 text-white/90 text-sm leading-relaxed">
              <span className="text-white">{visibleWords.join(" ")}</span>
              {isPlaying && (
                <motion.span
                  className="inline-block w-0.5 h-4 bg-white/70 ml-1"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
