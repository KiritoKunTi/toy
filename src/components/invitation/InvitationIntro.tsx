import { useCallback, useRef, useState } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { WaxSeal } from "./WaxSeal"
import { invitation } from "../../data/invitation"

gsap.registerPlugin(useGSAP)

type InvitationIntroProps = {
    onOpened: () => void
}

export function InvitationIntro({ onOpened }: InvitationIntroProps) {
    const rootRef = useRef<HTMLDivElement>(null)
    const envelopeRef = useRef<HTMLDivElement>(null)
    const flapRef = useRef<HTMLDivElement>(null)
    const sealRef = useRef<HTMLDivElement>(null)
    const pulseRef = useRef<gsap.core.Tween | null>(null)
    const [opening, setOpening] = useState(false)

    useGSAP(
        () => {
            if (!sealRef.current || !envelopeRef.current) return

            const tl = gsap.timeline()
            tl.fromTo(
                envelopeRef.current,
                { y: 36, opacity: 0, rotateX: 8, scale: 0.92 },
                { y: 0, opacity: 1, rotateX: 0, scale: 1, duration: 1.15, ease: "power3.out" }
            ).fromTo(
                sealRef.current,
                { scale: 0.7, opacity: 0, y: 12 },
                { scale: 1, opacity: 1, y: 0, duration: 0.65, ease: "back.out(1.6)" },
                "-=0.45"
            )

            pulseRef.current = gsap.to(sealRef.current, {
                scale: 1.045,
                duration: 1.6,
                yoyo: true,
                repeat: -1,
                ease: "sine.inOut",
                delay: 1.2,
            })
        },
        { scope: rootRef }
    )

    const handleOpen = useCallback(() => {
        if (opening) return
        setOpening(true)
        pulseRef.current?.kill()

        const root = rootRef.current
        const flap = flapRef.current
        const seal = sealRef.current
        const envelope = envelopeRef.current
        if (!root || !flap || !seal || !envelope) {
            onOpened()
            return
        }

        gsap.set(flap, { transformOrigin: "50% 0%" })
        gsap.set([root, flap, seal, envelope], { willChange: "transform, opacity" })

        const timeline = gsap.timeline({
            onComplete: () => {
                gsap.set([root, flap, seal, envelope], { clearProps: "willChange" })
                onOpened()
            },
        })

        timeline
            .to(seal, { scale: 1.14, duration: 0.15, ease: "power2.out" })
            .to(seal, {
                y: -80,
                rotate: -22,
                scale: 0.58,
                opacity: 0,
                duration: 0.5,
                ease: "power2.in",
            })
            .to(flap, { rotateX: -165, duration: 0.88, ease: "power2.inOut" }, "-=0.22")
            .to(envelope, { y: 22, scale: 0.965, duration: 0.55, ease: "power2.inOut" }, "-=0.58")
            .to(root, { opacity: 0, duration: 0.4, ease: "power2.in" }, "-=0.1")
    }, [opening, onOpened])

    return (
        <div
            ref={rootRef}
            className="envelope-overlay absolute inset-0 z-50 flex h-full min-h-[100dvh] flex-col overflow-hidden"
        >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(251,247,240,0.55)_0%,rgba(232,223,208,0.35)_55%,rgba(184,166,138,0.28)_100%)]" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-champagne-light/20 via-transparent to-champagne-deep/25" />

            <div className="envelope-perspective relative flex min-h-full flex-1 flex-col items-center justify-center px-5 py-8">
                <div ref={envelopeRef} className="envelope-stage relative w-full max-w-[352px]">
                    <div className="envelope-floor-shadow" aria-hidden="true" />

                    <div className="envelope relative aspect-[5/6.5] w-full">
                        <div className="envelope-thickness" aria-hidden="true" />
                        <div className="envelope-panel envelope-back absolute inset-0" aria-hidden="true" />
                        <div className="envelope-lining absolute inset-x-[9%] top-[10%] bottom-[22%]" aria-hidden="true" />

                        <div className="envelope-panel envelope-flap-left absolute inset-y-0 left-0 w-[55%]" aria-hidden="true" />
                        <div className="envelope-panel envelope-flap-right absolute inset-y-0 right-0 w-[55%]" aria-hidden="true" />
                        <div className="envelope-panel envelope-flap-bottom absolute inset-x-0 bottom-0 h-[62%]" aria-hidden="true" />

                        <div
                            ref={flapRef}
                            className="envelope-flap absolute inset-x-0 top-0 z-20 h-[57%]"
                            aria-hidden="true"
                        >
                            <div className="envelope-panel envelope-flap-face absolute inset-0" />
                            <div className="envelope-flap-edge" />
                            <div className="envelope-flap-back" />
                        </div>

                        <div className="pointer-events-none absolute inset-0 z-[15] overflow-hidden rounded-[2px_2px_11px_11px]" aria-hidden="true">
                            <div className="envelope-crease envelope-crease-l" />
                            <div className="envelope-crease envelope-crease-r" />
                            <div className="envelope-crease envelope-crease-b" />
                            <div className="envelope-fold-shadow" />
                            <div className="envelope-paper-grain" />
                            <div className="envelope-light" />
                        </div>

                        {/* wax ribbon under seal */}
                        <div className="envelope-ribbon pointer-events-none absolute left-1/2 top-[34%] z-[25] h-3 w-[58%] -translate-x-1/2" aria-hidden="true" />

                        <div className="relative z-30 flex h-full flex-col items-center px-6 pt-[26%]">
                            <div ref={sealRef} className="relative h-[168px] w-[168px] shrink-0">
                                <div className="wax-seal-glow" aria-hidden="true" />
                                <WaxSeal onClick={handleOpen} className="relative z-[1] h-full w-full" monogram={invitation.monogram} />
                            </div>

                            <div className="mt-3 text-center">
                                <p className="font-serif text-[11px] uppercase tracking-[0.38em] text-ink-muted/80">
                                    {invitation.eventLabel}
                                </p>
                                <p className="font-script mt-2 text-[36px] leading-[1.02] text-ink drop-shadow-[0_1px_0_rgba(255,255,255,0.45)]">
                                    Сіз
                                    <br />
                                    шақырылдыңыз
                                </p>
                                <div className="mx-auto mt-3 flex items-center justify-center gap-2">
                                    <span className="h-px w-8 bg-champagne-deep/60" />
                                    <span className="font-serif text-[12px] tracking-wide text-ink-soft">
                                        {invitation.couple.partnerOne} · {invitation.couple.partnerTwo}
                                    </span>
                                    <span className="h-px w-8 bg-champagne-deep/60" />
                                </div>
                                <p className="font-sans mt-4 text-[10px] uppercase tracking-[0.34em] text-ink-muted">
                                    Мөрді басыңыз
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
