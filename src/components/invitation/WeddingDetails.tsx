import { useEffect, useState } from "react"
import { invitation } from "../../data/invitation"
import { Reveal } from "./Reveal"
import { SectionDivider } from "./SectionDivider"

function Countdown() {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

    useEffect(() => {
        const tick = () => {
            const diff = new Date(invitation.countdownTarget).getTime() - Date.now()
            if (diff <= 0) return
            setTimeLeft({
                days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((diff / 1000 / 60) % 60),
                seconds: Math.floor((diff / 1000) % 60),
            })
        }
        tick()
        const id = setInterval(tick, 1000)
        return () => clearInterval(id)
    }, [])

    const boxes = [
        { value: timeLeft.days, label: "Күн" },
        { value: timeLeft.hours, label: "Сағат" },
        { value: timeLeft.minutes, label: "Минут" },
        { value: timeLeft.seconds, label: "Секунд" },
    ]

    return (
        <div className="mt-8 rounded-2xl border border-champagne/60 bg-cream-warm/70 px-5 py-7">
            <p className="font-script text-4xl text-ink">Той салтанатына дейін</p>
            <div className="mt-6 flex justify-center gap-3">
                {boxes.map((box) => (
                    <div key={box.label} className="flex flex-col items-center">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-champagne bg-cream">
                            <span className="font-serif text-lg text-ink">{box.value}</span>
                        </div>
                        <span className="font-sans mt-2 text-[10px] uppercase tracking-[0.16em] text-ink-muted">{box.label}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export function WeddingDetails() {
    const { date, time, hosts, venue } = invitation
    const weekdays = ["ДС", "СС", "СР", "БС", "ЖМ", "СБ", "ЖС"]

    return (
        <section className="relative px-6 py-8 text-center">
            <SectionDivider />
            <Reveal>
                <p className="font-sans text-[11px] uppercase tracking-[0.28em] text-ink-muted">{hosts.label}</p>
                <p className="font-script mt-3 text-5xl text-ink">{hosts.names}</p>
            </Reveal>

            <Reveal className="mt-12" delay={0.08}>
                <p className="font-sans text-[11px] uppercase tracking-[0.28em] text-ink-muted">Той салтанаты</p>
                <p className="font-script mt-3 text-6xl text-ink">{date.display}</p>
            </Reveal>

            <Reveal className="mx-auto mt-6 w-11/12 rounded-xl border border-champagne/70 px-4 py-2" delay={0.12}>
                <div className="font-serif flex justify-between text-lg text-ink">
                    <span>{date.monthLabel}</span>
                    <span>{date.year}</span>
                </div>
            </Reveal>

            <Reveal className="mx-auto mt-4 grid w-11/12 grid-cols-7 gap-1 text-sm" delay={0.16}>
                {weekdays.map((day) => (
                    <div key={day} className="font-serif text-ink-muted">
                        {day}
                    </div>
                ))}
                {Array.from({ length: 34 }, (_, index) => {
                    const day = index - 2
                    const isBlank = day <= 0
                    const isEvent = day === date.day
                    return (
                        <div key={index} className={`relative rounded-full px-1 py-1 ${isEvent ? "font-semibold text-wax" : "text-ink"}`}>
                            {isEvent && <span className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blush/25" />}
                            <span className="relative">{isBlank ? null : day}</span>
                        </div>
                    )
                })}
            </Reveal>

            <Reveal className="mt-10" delay={0.1}>
                <p className="font-serif text-xl text-ink-soft">Басталу уақыты</p>
                <div className="mx-auto mt-3 flex w-10/12 items-center">
                    <div className="mr-3 h-px flex-1 bg-champagne" />
                    <span className="font-serif text-2xl text-ink">{time}</span>
                    <div className="ml-3 h-px flex-1 bg-champagne" />
                </div>
            </Reveal>

            <Reveal>
                <Countdown />
            </Reveal>

            {/* <Reveal className="mt-12 rounded-2xl border border-champagne/60 px-5 py-6" delay={0.08}>
                <p className="font-sans text-[11px] uppercase tracking-[0.24em] text-ink-muted">Мекен-жай</p>
                <p className="font-serif mt-3 text-2xl text-ink">{venue.name}</p>
                <p className="font-sans mt-2 text-sm uppercase tracking-wide text-ink-soft">{venue.city}</p>
                <p className="font-serif mt-1 text-base text-ink-soft">{venue.address}</p>
            </Reveal> */}
        </section>
    )
}
