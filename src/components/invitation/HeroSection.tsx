import { invitation } from "../../data/invitation"
import heroImage from "../../assets/img/pexels-rebeca-medeiros-333886492-14213051.jpg"
import { Reveal } from "./Reveal"

export function HeroSection() {
    const { couple, eventLabel, date } = invitation

    return (
        <section className="relative min-h-[100dvh] overflow-hidden bg-ink">
            <img
                src={heroImage}
                alt={`${couple.partnerOne} және ${couple.partnerTwo}`}
                className="hero-image absolute inset-0 h-full w-full object-cover"
            />
            <div className="hero-overlay absolute inset-0" aria-hidden="true" />
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
