import { invitation } from "../../data/invitation"
import { Reveal, SlowZoom } from "./Reveal"
import { Monogram } from "./Monogram"
import { SectionDivider } from "./SectionDivider"

export function FinalSection() {
    const { finale, photos, couple, monogram } = invitation

    return (
        <section className="relative pb-16 pt-6 text-center">
            {/* <SectionDivider />
            <Reveal variant="imageReveal" className="relative mx-4 overflow-hidden rounded-2xl border border-champagne/50">
                <div className="relative aspect-[3/4] overflow-hidden">
                    <SlowZoom className="h-full w-full">
                        <img
                            src={photos.finale}
                            alt={`${couple.partnerOne} және ${couple.partnerTwo}`}
                            className="h-full w-full object-cover"
                        />
                    </SlowZoom>
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/15 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 px-6 pb-10">
                        <p className="font-serif text-2xl leading-snug text-cream">{finale.line}</p>
                    </div>
                </div>
            </Reveal> */}

            <Reveal className="mt-10" delay={0.15}>
                <Monogram text={monogram} size="lg" />
                <p className="font-script mt-5 text-4xl text-ink">
                    {couple.partnerOne} & {couple.partnerTwo}
                </p>
            </Reveal>
        </section>
    )
}
