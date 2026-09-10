import { FormEvent, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../../lib/firebase"
import { invitation } from "../../data/invitation"
import { Reveal } from "./Reveal"
import { SectionDivider } from "./SectionDivider"

type FormState = {
    name: string
    attendance: string
    guestCount: number
    message: string
}

export function RSVPForm() {
    const { rsvp } = invitation
    const [form, setForm] = useState<FormState>({
        name: "",
        attendance: "",
        guestCount: 1,
        message: "",
    })
    const [errors, setErrors] = useState<Record<string, string>>({})
    const [loading, setLoading] = useState(false)
    const [modal, setModal] = useState<{ open: boolean; error?: string }>({ open: false })

    const validate = () => {
        const next: Record<string, string> = {}
        if (!form.name.trim()) next.name = "Есіміңізді енгізіңіз"
        if (!form.attendance) next.attendance = "Жауапты таңдаңыз"
        if (form.guestCount < 1) next.guestCount = "Қонақ санын көрсетіңіз"
        setErrors(next)
        return Object.keys(next).length === 0
    }

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault()
        if (!validate()) return
        setLoading(true)
        try {
            const now = new Date()
            const selected = rsvp.options.find((o) => o.value === form.attendance)
            const createdAt = `${String(now.getDate()).padStart(2, "0")}/${String(now.getMonth() + 1).padStart(2, "0")}/${now.getFullYear()} ${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`

            await addDoc(collection(db, "toy_responses"), {
                name: form.name.trim(),
                attendance: form.attendance,
                comment: selected?.label || "",
                guestCount: form.guestCount,
                message: form.message.trim(),
                timestamp: now.getTime(),
                createdAt,
            })

            setModal({ open: true })
            setForm({ name: "", attendance: "", guestCount: 1, message: "" })
            setErrors({})
        } catch (err) {
            setModal({ open: true, error: err instanceof Error ? err.message : "Қате орын алды" })
        } finally {
            setLoading(false)
        }
    }

    return (
        <section className="relative px-6 py-10 text-center">
            <SectionDivider />
            <Reveal>
                <h2 className="font-serif mx-auto max-w-xs text-2xl uppercase leading-relaxed tracking-wide text-ink">{rsvp.title}</h2>
            </Reveal>

            <Reveal delay={0.1}>
                <form onSubmit={onSubmit} className="mx-auto mt-10 max-w-sm space-y-6 text-left">
                    <div>
                        <label htmlFor="guest-name" className="font-sans sr-only">
                            Есіміңіз
                        </label>
                        <input
                            id="guest-name"
                            type="text"
                            placeholder="Есіміңіз"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className={`w-full rounded-xl border bg-cream-warm px-4 py-3 font-serif text-xl text-ink placeholder:font-sans placeholder:text-sm placeholder:text-ink-muted focus:outline-none ${
                                errors.name ? "border-blush" : "border-champagne focus:border-ink-soft"
                            }`}
                        />
                        <AnimatePresence>
                            {errors.name && (
                                <motion.p initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="font-sans mt-1 text-sm text-blush">
                                    {errors.name}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </div>

                    <p className="font-sans text-sm leading-relaxed text-ink-soft">{rsvp.hint}</p>

                    <fieldset className="space-y-3">
                        <legend className="sr-only">Қатысу</legend>
                        {rsvp.options.map((option) => (
                            <label key={option.value} className="font-sans flex cursor-pointer items-center gap-3 text-ink">
                                <input
                                    type="radio"
                                    name="attendance"
                                    value={option.value}
                                    checked={form.attendance === option.value}
                                    onChange={(e) => setForm({ ...form, attendance: e.target.value })}
                                    className="h-4 w-4 accent-ink"
                                />
                                <span>{option.label}</span>
                            </label>
                        ))}
                        <AnimatePresence>
                            {errors.attendance && (
                                <motion.p initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="font-sans text-sm text-blush">
                                    {errors.attendance}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </fieldset>

                    {/* <div>
                        <label htmlFor="guest-count" className="font-sans mb-2 block text-xs uppercase tracking-[0.2em] text-ink-muted">
                            Қонақ саны
                        </label>
                        <input
                            id="guest-count"
                            type="number"
                            min={1}
                            max={10}
                            value={form.guestCount}
                            onChange={(e) => setForm({ ...form, guestCount: Number(e.target.value) || 1 })}
                            className="w-full rounded-xl border border-champagne bg-cream-warm px-4 py-3 font-serif text-lg text-ink focus:border-ink-soft focus:outline-none"
                        />
                    </div> */}

                    {/* <div>
                        <label htmlFor="guest-message" className="font-sans mb-2 block text-xs uppercase tracking-[0.2em] text-ink-muted">
                            Хабарлама (міндетті емес)
                        </label>
                        <textarea
                            id="guest-message"
                            rows={3}
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            className="w-full resize-none rounded-xl border border-champagne bg-cream-warm px-4 py-3 font-serif text-base text-ink focus:border-ink-soft focus:outline-none"
                        />
                    </div> */}

                    <motion.button
                        type="submit"
                        disabled={loading}
                        whileTap={{ scale: 0.98 }}
                        className="font-sans w-full rounded-full bg-blush px-6 py-3 text-sm uppercase tracking-[0.18em] text-cream disabled:opacity-70"
                    >
                        {loading ? "Жіберілуде..." : rsvp.submitLabel}
                    </motion.button>
                </form>
            </Reveal>

            <AnimatePresence>
                {modal.open && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center px-6">
                        <button type="button" className="absolute inset-0 bg-ink/40 backdrop-blur-[2px]" aria-label="Жабу" onClick={() => setModal({ open: false })} />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.92 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="paper-sheet relative z-10 w-full max-w-sm rounded-2xl border border-champagne/70 p-8 text-center shadow-invite"
                        >
                            {modal.error ? (
                                <>
                                    <h3 className="font-serif text-2xl text-blush">Қате</h3>
                                    <p className="font-sans mt-4 text-sm text-ink">{modal.error}</p>
                                </>
                            ) : (
                                <>
                                    <h3 className="font-script text-5xl text-ink">Рахмет!</h3>
                                    <p className="font-sans mt-4 text-sm text-ink">Жауабыңыз қабылданды</p>
                                </>
                            )}
                            <button
                                type="button"
                                onClick={() => setModal({ open: false })}
                                className="font-sans mt-6 rounded-full bg-ink px-8 py-2 text-xs uppercase tracking-[0.18em] text-cream"
                            >
                                Жабу
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    )
}
