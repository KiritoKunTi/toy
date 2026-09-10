import { invitation } from "../../data/invitation"
import { Reveal, Parallax } from "./Reveal"
import { SectionDivider } from "./SectionDivider"

export function VenueSection() {
    const { venue, photos } = invitation

    return (
        <section className="relative px-6 py-10 text-center">
            <SectionDivider />
            <Reveal>
                <h2 className="font-serif text-3xl tracking-wide text-ink">Орын</h2>
            </Reveal>

            <Reveal variant="imageReveal" className="mt-8 overflow-hidden rounded-2xl border border-champagne/50">
                <Parallax>
                    <img src={photos.venue} alt={venue.name} className="aspect-[5/4] w-full object-cover" />
                </Parallax>
            </Reveal>

            <Reveal className="mt-6">
                <p className="font-serif text-3xl text-ink">{venue.name}</p>
                <p className="font-sans mt-2 text-sm uppercase tracking-wide text-ink-soft">{venue.city}</p>
                <p className="font-serif mt-1 text-base text-ink-soft">{venue.address}</p>
            </Reveal>

            <Reveal className="mt-6 overflow-hidden rounded-2xl border border-champagne/60">
                <iframe title={`${venue.name} картасы`} className="block h-52 w-full border-0" src={venue.embedUrl} loading="lazy" />
                <a
                    href={venue.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-sans block bg-cream-warm py-3 text-center text-sm tracking-wide text-ink underline-offset-4 hover:underline"
                >
                    Картада ашу
                </a>
            </Reveal>
        </section>
    )
}
