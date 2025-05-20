"use client"

import { useState, useEffect } from "react"

interface DebugTranscriptProps {
  audioSrc: string
  transcript: string
}

export default function DebugTranscript({ audioSrc, transcript }: DebugTranscriptProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [wordCount, setWordCount] = useState(0)
  const [audioLoaded, setAudioLoaded] = useState(false)
  const [audioDuration, setAudioDuration] = useState(0)

  useEffect(() => {
    // Count words in transcript
    const words = transcript.split(/\s+/).filter((word) => word.length > 0)
    setWordCount(words.length)
    setIsLoaded(true)

    // Create audio element to test loading
    const audio = new Audio(audioSrc)

    audio.addEventListener("loadedmetadata", () => {
      setAudioLoaded(true)
      setAudioDuration(audio.duration)
    })

    audio.addEventListener("error", (e) => {
      console.error("Audio loading error:", e)
    })

    return () => {
      audio.removeEventListener("loadedmetadata", () => {})
      audio.removeEventListener("error", () => {})
    }
  }, [audioSrc, transcript])

  if (!isLoaded) return <div>Loading transcript data...</div>

  return (
    <div className="hidden">
      <div>Transcript loaded: {isLoaded ? "Yes" : "No"}</div>
      <div>Word count: {wordCount}</div>
      <div>Audio loaded: {audioLoaded ? "Yes" : "No"}</div>
      <div>Audio duration: {audioDuration.toFixed(2)}s</div>
    </div>
  )
}
