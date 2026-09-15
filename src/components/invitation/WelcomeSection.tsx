import { invitation } from "../../data/invitation"
import { Reveal, Stagger, StaggerItem } from "./Reveal"
import { SectionDivider } from "./SectionDivider"

export function WelcomeSection() {
    const { welcome, couple } = invitation

    return (
        <section className="relative px-8 py-16 text-center">
            {/* <Reveal> */}
                {/* <p className="font-sans text-[11px] uppercase tracking-[0.28em] text-ink-muted">Шақыру</p> */}
            {/* </Reveal> */}

            <Stagger className="mt-8 space-y-1" delay={0.1}>
                {welcome.greetingLines.map((line) => (
                    <StaggerItem key={line}>
                        <p className="font-serif text-[17px] uppercase leading-relaxed tracking-wide text-ink">{line}</p>
                    </StaggerItem>
                ))}
            </Stagger>

            <SectionDivider />

            <Reveal>
                <p className="font-sans text-sm uppercase tracking-[0.22em] text-ink-soft">{welcome.inviteLead}</p>
            </Reveal>
            <Reveal delay={0.1}>
                <div className="mt-5">
                    <p className="font-script text-6xl leading-none text-ink">{couple.partnerOne}</p>
                    <p className="font-serif mt-1 text-sm italic text-ink-soft">{couple.connector}</p>
                    <p className="font-script text-6xl leading-none text-ink">{couple.partnerTwo}</p>
                </div>
            </Reveal>
            <Reveal delay={0.18}>
                <p className="font-serif mx-auto mt-8 max-w-xs text-[17px] leading-relaxed text-ink">{welcome.inviteBody}</p>
            </Reveal>
        </section>
    )
}
