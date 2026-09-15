import { invitation } from "../../data/invitation"
import { Reveal, Stagger, StaggerItem } from "./Reveal"
import { SectionDivider } from "./SectionDivider"

export function Timeline() {
    return (
        <section className="relative px-8 py-10 text-center">
            <SectionDivider />
            <Reveal>
                <h2 className="font-serif text-3xl tracking-wide text-ink">Бағдарлама</h2>
            </Reveal>

            <Stagger className="relative mx-auto mt-10 max-w-sm" delay={0.1}>
                <div className="absolute bottom-2 left-1/2 top-2 w-px -translate-x-1/2 bg-champagne/70" aria-hidden="true" />
                {invitation.timeline.map((item) => (
                    <StaggerItem key={item.id} className="relative mb-10 last:mb-0">
                        <div className="relative z-10 mx-auto w-full rounded-2xl border border-champagne/60 bg-cream/90 px-5 py-5 shadow-soft">
                            <p className="font-sans text-[11px] uppercase tracking-[0.24em] text-ink-muted">{item.time}</p>
                            <p className="font-serif mt-2 text-2xl text-ink">{item.title}</p>
                            <p className="font-sans mt-2 text-sm text-ink-soft">{item.description}</p>
                        </div>
                    </StaggerItem>
                ))}
            </Stagger>
        </section>
    )
}
