import { ReactNode } from "react"
import { motion, useReducedMotion, Variants } from "framer-motion"

const EASE = [0.22, 1, 0.36, 1] as const

type RevealProps = {
    children: ReactNode
    className?: string
    variant?: "fadeUp" | "fadeIn" | "scaleIn" | "imageReveal"
    delay?: number
    once?: boolean
}

const variants: Record<NonNullable<RevealProps["variant"]>, Variants> = {
    fadeUp: {
        hidden: { opacity: 0, y: 28 },
        visible: { opacity: 1, y: 0 },
    },
    fadeIn: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
    scaleIn: {
        hidden: { opacity: 0, scale: 0.94 },
        visible: { opacity: 1, scale: 1 },
    },
    imageReveal: {
        hidden: { opacity: 0, scale: 1.06 },
        visible: { opacity: 1, scale: 1 },
    },
}

export function Reveal({ children, className = "", variant = "fadeUp", delay = 0, once = true }: RevealProps) {
    const reduce = useReducedMotion()

    if (reduce) {
        return <div className={className}>{children}</div>
    }

    return (
        <motion.div
            className={className}
            variants={variants[variant]}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount: 0.18 }}
            transition={{ duration: 0.85, delay, ease: EASE }}
        >
            {children}
        </motion.div>
    )
}

type StaggerProps = {
    children: ReactNode
    className?: string
    delay?: number
}

export function Stagger({ children, className = "", delay = 0 }: StaggerProps) {
    const reduce = useReducedMotion()

    if (reduce) {
        return <div className={className}>{children}</div>
    }

    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
                hidden: {},
                visible: {
                    transition: { staggerChildren: 0.12, delayChildren: delay },
                },
            }}
        >
            {children}
        </motion.div>
    )
}

export function StaggerItem({ children, className = "" }: { children: ReactNode; className?: string }) {
    return (
        <motion.div
            className={className}
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
            }}
        >
            {children}
        </motion.div>
    )
}

export function SlowZoom({ children, className = "" }: { children: ReactNode; className?: string }) {
    const reduce = useReducedMotion()

    if (reduce) {
        return <div className={className}>{children}</div>
    }

    return (
        <motion.div
            className={className}
            initial={{ scale: 1 }}
            animate={{ scale: 1.08 }}
            transition={{ duration: 18, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        >
            {children}
        </motion.div>
    )
}

export function Parallax({ children, className = "", offset = 40 }: { children: ReactNode; className?: string; offset?: number }) {
    const reduce = useReducedMotion()

    if (reduce) {
        return <div className={className}>{children}</div>
    }

    return (
        <motion.div
            className={className}
            initial={{ y: offset * 0.35 }}
            whileInView={{ y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.1, ease: EASE }}
        >
            {children}
        </motion.div>
    )
}
