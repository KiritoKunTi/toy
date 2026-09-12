import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { invitation } from "../../data/invitation"

type MusicButtonProps = {
    enabled: boolean
}

export function MusicButton({ enabled }: MusicButtonProps) {
    const [playing, setPlaying] = useState(false)
    const audioRef = useRef<HTMLAudioElement | null>(null)

    useEffect(() => {
        const audio = new Audio(invitation.music)
        audio.loop = true
        audioRef.current = audio
        return () => {
            audio.pause()
            audio.src = ""
        }
    }, [])

    useEffect(() => {
        const audio = audioRef.current
        if (!audio || !enabled) return

        const startMusic = () => {
            audio
                .play()
                .then(() => setPlaying(true))
                .catch(() => setPlaying(false))
        }

        const handleFirstInteraction = () => {
            startMusic()
            window.removeEventListener("pointerdown", handleFirstInteraction)
            window.removeEventListener("keydown", handleFirstInteraction)
        }

        startMusic()
        window.addEventListener("pointerdown", handleFirstInteraction, { once: true })
        window.addEventListener("keydown", handleFirstInteraction, { once: true })

        return () => {
            window.removeEventListener("pointerdown", handleFirstInteraction)
            window.removeEventListener("keydown", handleFirstInteraction)
        }
    }, [enabled])

    if (!enabled) return null

    const toggle = () => {
        const audio = audioRef.current
        if (!audio) return
        if (playing) {
            audio.pause()
            setPlaying(false)
        } else {
            audio
                .play()
                .then(() => setPlaying(true))
                .catch(() => setPlaying(false))
        }
    }

    return (
        <motion.button
            type="button"
            onClick={toggle}
            aria-label={playing ? "Музыканы тоқтату" : "Музыканы қосу"}
            className="fixed bottom-4 right-[max(1rem,calc((100vw-430px)/2+16px))] z-40 rounded-full border border-champagne/70 bg-cream/90 p-3 shadow-soft backdrop-blur-sm"
            whileTap={{ scale: 0.95 }}
            animate={{ rotate: playing ? 360 : 0 }}
            transition={{ duration: 8, repeat: playing ? Infinity : 0, ease: "linear" }}
        >
            {playing ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-ink" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-ink" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5l-6 4.5z" />
                </svg>
            )}
        </motion.button>
    )
}
