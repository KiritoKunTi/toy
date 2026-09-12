import { Reveal } from "./Reveal"

export function FinalSection() {
    return (
        <section className="relative pb-16 pt-6 text-center">
            <Reveal className="mt-10" delay={0.15}>
                <p className="mx-auto max-w-[320px] font-serif text-lg italic leading-relaxed text-ink/75">
                    Қуанышымызға ортақ болыңыздар!
                </p>
            </Reveal>
        </section>
    )
}
