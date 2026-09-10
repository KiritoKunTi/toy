import { invitation } from "../../data/invitation"
import { Reveal, SlowZoom } from "./Reveal"

export function HeroSection() {
    const { couple, eventLabel, date, photos } = invitation

    return (
        <section className="relative min-h-[100dvh] overflow-hidden">
            <div className="absolute inset-0">
                <SlowZoom className="h-full w-full">
                    <img src={photos.hero} alt={`${couple.partnerOne} және ${couple.partnerTwo}`} className="h-full w-full object-cover" />
                </SlowZoom>
                <div className="hero-overlay absolute inset-0" />
            </div>

            <div className="relative z-10 flex min-h-[100dvh] flex-col items-center justify-center px-8 pb-24 pt-20 text-center">
                <Reveal variant="fadeIn">
                    <p className="font-sans text-[11px] uppercase tracking-[0.36em] text-cream">{eventLabel}</p>
                </Reveal>
                <Reveal delay={0.12}>
                    <h1 className="font-script mt-6 text-[88px] leading-[0.82] text-cream drop-shadow-md">{couple.partnerOne}</h1>
                </Reveal>
                <Reveal delay={0.2}>
                    <span className="font-script my-1 block text-5xl leading-none text-cream/90">&</span>
                </Reveal>
                <Reveal delay={0.28}>
                    <h1 className="font-script text-[76px] leading-[0.82] text-cream drop-shadow-md">{couple.partnerTwo}</h1>
                </Reveal>
                <Reveal delay={0.4} variant="fadeIn">
                    <p className="font-serif mt-8 text-xl tracking-[0.2em] text-cream">{date.short}</p>
                </Reveal>
            </div>
        </section>
    )
}
