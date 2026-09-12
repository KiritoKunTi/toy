import { invitation } from "../../data/invitation"
import { Reveal } from "./Reveal"
import { SectionDivider } from "./SectionDivider"

export function StorySection() {
    const { story } = invitation

    return (
        <section className="relative px-6 py-10 text-center">
            <SectionDivider />
            <Reveal>
                <h2 className="font-serif text-3xl tracking-wide text-ink">{story.title}</h2>
            </Reveal>

            <div className="mt-8 space-y-5 px-2">
                {story.paragraphs.map((paragraph, index) => (
                    <Reveal key={paragraph} delay={index * 0.08}>
                        <p className="font-serif text-lg leading-relaxed text-ink-soft">{paragraph}</p>
                    </Reveal>
                ))}
            </div>
        </section>
    )
}
