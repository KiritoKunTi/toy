type MonogramProps = {
    text: string
    className?: string
    size?: "sm" | "md" | "lg"
}

const sizeMap = {
    sm: "h-16 w-16 text-lg",
    md: "h-24 w-24 text-2xl",
    lg: "h-32 w-32 text-3xl",
}

export function Monogram({ text, className = "", size = "md" }: MonogramProps) {
    return (
        <div
            className={`relative mx-auto flex items-center justify-center rounded-full border border-champagne/70 ${sizeMap[size]} ${className}`}
            aria-hidden="true"
        >
            <div className="absolute inset-1.5 rounded-full border border-champagne/40" />
            <span className="font-script relative text-ink">{text}</span>
        </div>
    )
}
