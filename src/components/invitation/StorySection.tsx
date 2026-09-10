import { invitation } from "../../data/invitation"
import { Reveal, Parallax } from "./Reveal"
import { SectionDivider } from "./SectionDivider"

export function StorySection() {
    const { story, photos, couple } = invitation

    return (
        <section className="relative px-6 py-10 text-center">
            <SectionDivider />
            <Reveal>
                <h2 className="font-serif text-3xl tracking-wide text-ink">{story.title}</h2>
            </Reveal>

            <Reveal variant="imageReveal" className="mt-8 overflow-hidden rounded-2xl border border-champagne/50">
                <Parallax>
                    <img
                        src={photos.story}
                        alt={`${couple.partnerOne} мен ${couple.partnerTwo}`}
                        className="aspect-[4/5] w-full object-cover"
                    />
                </Parallax>
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
