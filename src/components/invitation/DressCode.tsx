import { invitation } from "../../data/invitation"
import { Reveal } from "./Reveal"
import { SectionDivider } from "./SectionDivider"

export function DressCode() {
    const { dressCode } = invitation

    return (
        <section className="relative px-8 py-12 text-center">
            <SectionDivider />
            <Reveal>
                <h2 className="font-serif text-3xl tracking-wide text-ink">{dressCode.title}</h2>
            </Reveal>
            <Reveal delay={0.1}>
                <p className="font-serif mx-auto mt-6 max-w-xs text-lg leading-relaxed text-ink-soft">{dressCode.body}</p>
            </Reveal>
            <Reveal delay={0.18}>
                <p className="font-sans mt-5 text-xs uppercase tracking-[0.22em] text-ink-muted">{dressCode.note}</p>
            </Reveal>
            <Reveal delay={0.24} className="mt-8 flex items-center justify-center gap-3">
                {["#F7F1E8", "#D4C4A8", "#3F372F", "#9CAF88"].map((color) => (
                    <span key={color} className="h-8 w-8 rounded-full border border-champagne/50" style={{ backgroundColor: color }} aria-hidden="true" />
                ))}
            </Reveal>
        </section>
    )
}
